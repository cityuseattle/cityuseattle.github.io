
varying vec3 vPosition;
varying vec2 vUv;
uniform vec4 darkColor;
uniform vec4 lightColor;

void main() {
    float depth = gl_FragCoord.w / gl_FragCoord.z;
    gl_FragColor = vec4(
        mix(lightColor.r, darkColor.r, (1.0 / (depth) ) * darkColor.w),
        mix(lightColor.g, darkColor.g, (1.0 / (depth) ) * darkColor.w),
        mix(lightColor.b, darkColor.b, (1.0 / (depth) ) * darkColor.w),
        depth
    );
}
