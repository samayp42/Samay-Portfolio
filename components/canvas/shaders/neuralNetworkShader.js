// Neural Network Shader for glowing neurons and information flow
export const neuralVertexShader = `
  attribute float size;
  attribute vec3 color;
  attribute float opacity;
  varying vec3 vColor;
  varying float vOpacity;
  
  void main() {
    vColor = color;
    vOpacity = opacity;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const neuralFragmentShader = `
  varying vec3 vColor;
  varying float vOpacity;
  
  void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    float strength = 0.05 / distanceToCenter - 0.1;
    strength = clamp(strength, 0.0, 1.0);
    
    gl_FragColor = vec4(vColor, vOpacity * strength);
  }
`;

export const connectionVertexShader = `
  attribute float progress;
  varying float vProgress;
  varying vec3 vPosition;
  
  void main() {
    vProgress = progress;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const connectionFragmentShader = `
  varying float vProgress;
  varying vec3 vPosition;
  
  void main() {
    float pulse = sin(vProgress * 3.14159 * 2.0) * 0.5 + 0.5;
    vec3 color = mix(vec3(0.0, 1.0, 0.533), vec3(0.0, 0.8, 0.533), pulse);
    float alpha = smoothstep(0.0, 0.1, 1.0 - abs(vProgress - 0.5) * 2.0);
    gl_FragColor = vec4(color, alpha * 0.6);
  }
`;