
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
    vec4 outPos = oldPos;
    float resetRate = oldPos.w == 1.0? 0.998: 0.97;
    if (rand() > resetRate) {
        outPos = texture2D(origin, uv);
    }
    else {
        outPos.xyz += oldVel.xyz;
        for (int i = 0; i < MAX_COLLIDERS; ++i) {
            vec3 posToCollider = oldPos.xyz - colliders[i].xyz;
            float dist = length(posToCollider);
            if (dist < colliders[i].w) {
                vec3 movement = normalize(posToCollider) * colliders[i].w;
                outPos.xyz += movement;
                outPos.w = 1.0;
            }
        }
    }
    gl_FragColor = outPos;
}
