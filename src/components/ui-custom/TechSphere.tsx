import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Icosahedron Sphere Component
function IcosahedronSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      wireframeRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  // Create distorted geometry
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 2);
    const positions = geo.attributes.position.array as Float32Array;
    
    // Add noise to vertices
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      
      const noise = Math.sin(x * 2) * Math.cos(y * 2) * Math.sin(z * 2) * 0.15;
      const scale = 1 + noise;
      
      positions[i] *= scale;
      positions[i + 1] *= scale;
      positions[i + 2] *= scale;
    }
    
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <group>
      {/* Main sphere with red material */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#E10600"
          metalness={0.8}
          roughness={0.2}
          emissive="#E10600"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Wireframe overlay */}
      <mesh ref={wireframeRef} geometry={geometry} scale={1.02}>
        <meshBasicMaterial
          color="#FFFFFF"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#E10600"
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

// Floating particles
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleGeometry = useMemo(() => {
    const count = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef} geometry={particleGeometry}>
      <pointsMaterial
        size={0.03}
        color="#E10600"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Ring orbits
function OrbitRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#E10600" transparent opacity={0.4} />
      </mesh>
      
      {/* Middle ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3, 0.015, 16, 100]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.2} />
      </mesh>
      
      {/* Inner ring */}
      <mesh rotation={[Math.PI / 6, Math.PI / 2, 0]}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#E10600" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Main Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#E10600" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFFFFF" />
      <spotLight
        position={[0, 10, 0]}
        angle={Math.PI / 6}
        penumbra={1}
        intensity={0.8}
        color="#E10600"
      />
      
      {/* Stars background */}
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      
      {/* Main components */}
      <IcosahedronSphere />
      <FloatingParticles />
      <OrbitRings />
      
      {/* Controls (disabled for auto-rotation) */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

// Main export component
export default function TechSphere() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
