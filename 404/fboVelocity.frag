
uniform float time;
uniform sampler2D origin;
uniform vec4 colliders[MAX_COLLIDERS];
uniform highp sampler2D texturePosition;
uniform highp sampler2D textureVelocity;

uint curRandomSeed;
float rand() {
    curRandomSeed = uint(214013) * curRandomSeed + uint(2531011);
    return float((curRandomSeed >> 16) & uint(0x7FFF)) / 32767.0;
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 oldPos = texture2D(texturePosition, uv);
    vec4 oldVel = texture2D(textureVelocity, uv);
    curRandomSeed = floatBitsToUint(oldVel.w);
    vec4 outVel = oldVel;
    float resetRate = oldPos.w == 1.0? 0.998: 0.97;
    if (rand() > resetRate) {
        float tx = rand(); float ty = rand(); float tz = rand();
        outVel.xyz = (vec3(tx, ty, tz) - 0.5) * 0.004;
    }
    else {
        vec3 newPos = oldPos.xyz + oldVel.xyz;
        if (oldPos.w == 1.0) {
            outVel *= 0.95;
            vec3 originPos = texture2D(origin, uv).xyz;
            vec3 resetVec = normalize(originPos - newPos) * 0.0005;
            outVel.xyz += resetVec;
        }
        for (int i = 0; i < MAX_COLLIDERS; ++i) {
            vec3 posToCollider = newPos - colliders[i].xyz;
            float dist = length(posToCollider);
            if (dist < colliders[i].w) {
                vec3 movement = normalize(posToCollider) * colliders[i].w;
                outVel.xyz += movement * 0.1;
            }
            float forceFieldDist = (colliders[i].w * 2.0 - dist);
            if (forceFieldDist > 0.0) {
                vec2 tangentToCollider = normalize(vec2(posToCollider.y, -posToCollider.x));
                outVel.xy += tangentToCollider * 0.0007;
            }
        }
    }
    outVel.w = uintBitsToFloat(curRandomSeed);
    gl_FragColor = outVel;
}
