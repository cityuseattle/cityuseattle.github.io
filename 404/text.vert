
uniform sampler2D texturePosition;
uniform float width;
uniform float height;
uniform float pointSize;
varying vec3 vPosition;
varying vec2 vUv;

void main() {
    vec2 size = vec2(width, height);
    vUv = position.xy + 0.5 / size;
    vPosition = texture2D(texturePosition, vUv).xyz;

    gl_PointSize = pointSize;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );
}
