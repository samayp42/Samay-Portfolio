import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import { 
  neuralVertexShader,
  neuralFragmentShader,
  connectionVertexShader,
  connectionFragmentShader 
} from "./shaders/neuralNetworkShader";

function NeuralNetwork(props) {
  const groupRef = useRef();
  const time = useRef(0);

  const { nodes, nodeColors, nodeSizes, nodeOpacities, connections, connectionProgresses } = useMemo(() => {
    const nodes = new Float32Array(200 * 3);
    const nodeColors = new Float32Array(200 * 3);
    const nodeSizes = new Float32Array(200);
    const nodeOpacities = new Float32Array(200);
    const connections = [];
    const connectionProgresses = [];

    // Position nodes in a layered structure
    for (let i = 0; i < 200; i++) {
      const layer = Math.floor(i / 40);
      nodes[i * 3] = (layer - 2) * 2.0;      // Increased layer spacing
      nodes[i * 3 + 1] = (Math.random() - 0.5) * 3.5;  // Increased vertical spread
      nodes[i * 3 + 2] = (Math.random() - 0.5) * 3.5;  // Increased depth spread

      // Set initial colors, sizes, and opacities
      nodeColors[i * 3] = 0.0;     // R
      nodeColors[i * 3 + 1] = 1.0; // G
      nodeColors[i * 3 + 2] = 0.533; // B
      nodeSizes[i] = 0.2;          // Increased node size for better visibility
      nodeOpacities[i] = 0.9;      // Increased opacity
    }

    // Create connections between nodes
    for (let i = 0; i < 200; i++) {
      const sourceLayer = Math.floor(i / 40);
      for (let j = 0; j < 200; j++) {
        const targetLayer = Math.floor(j / 40);
        if (targetLayer === sourceLayer + 1 && Math.random() < 0.15) {
          connections.push(
            nodes[i * 3], nodes[i * 3 + 1], nodes[i * 3 + 2],
            nodes[j * 3], nodes[j * 3 + 1], nodes[j * 3 + 2]
          );
          connectionProgresses.push(Math.random());
        }
      }
    }

    return {
      nodes: new Float32Array(nodes),
      nodeColors: new Float32Array(nodeColors),
      nodeSizes: new Float32Array(nodeSizes),
      nodeOpacities: new Float32Array(nodeOpacities),
      connections: new Float32Array(connections),
      connectionProgresses: new Float32Array(connectionProgresses)
    };
  }, []);

  const neuralMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: neuralVertexShader,
      fragmentShader: neuralFragmentShader,
      transparent: true,
      uniforms: {
        time: { value: 0 }
      }
    });
  }, []);

  const connectionMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: connectionVertexShader,
      fragmentShader: connectionFragmentShader,
      transparent: true,
      uniforms: {
        time: { value: 0 }
      }
    });
  }, []);

  const connectionGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(connections, 3));
    geometry.setAttribute('progress', new THREE.Float32BufferAttribute(connectionProgresses, 1));
    return geometry;
  }, [connections, connectionProgresses]);

  useFrame((state, delta) => {
    time.current += delta;
    // Only rotate around Y-axis for horizontal movement
    groupRef.current.rotation.y -= delta / 15;

    // Update connection progress
    const progressAttr = connectionGeometry.attributes.progress;
    for (let i = 0; i < progressAttr.count; i++) {
      progressAttr.array[i] = (progressAttr.array[i] + delta * 0.5) % 1;
    }
    progressAttr.needsUpdate = true;

    // Update uniforms
    neuralMaterial.uniforms.time.value = time.current;
    connectionMaterial.uniforms.time.value = time.current;
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodes.length / 3}
            array={nodes}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={nodeColors.length / 3}
            array={nodeColors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={nodeSizes.length}
            array={nodeSizes}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-opacity"
            count={nodeOpacities.length}
            array={nodeOpacities}
            itemSize={1}
          />
        </bufferGeometry>
        <primitive object={neuralMaterial} attach="material" />
      </points>
      <lineSegments geometry={connectionGeometry}>
        <primitive object={connectionMaterial} attach="material" />
      </lineSegments>
    </group>
  );
}

function NeuralNetworkCanvas() {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 5] }}  // Moved camera back for better view
        dpr={[1, 2]}
        gl={{
          outputColorSpace: THREE.SRGBColorSpace,
          alpha: true,
          antialias: true
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <NeuralNetwork />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default NeuralNetworkCanvas;