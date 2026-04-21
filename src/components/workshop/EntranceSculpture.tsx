"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, useTexture } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// Louis-Kahn-ish stack of poured-concrete volumes. Abstract brutalist
// form — reads as architecture, not a rendered house. Rotates on
// idle; page scroll adds additional rotation so interacting with the
// site literally turns the sculpture.

function Monolith() {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture("/img/concrete-texture.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  texture.anisotropy = 8;

  useFrame(({ clock }) => {
    const g = groupRef.current;
    if (!g) return;
    const scrollY =
      typeof window !== "undefined" ? window.scrollY : 0;
    const idle = clock.elapsedTime * 0.08;
    g.rotation.y = idle + scrollY * 0.0009;
    g.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.03;
  });

  const mat = (
    <meshStandardMaterial
      map={texture}
      roughness={0.92}
      metalness={0}
      color={"#8a857c"}
    />
  );

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Base slab */}
      <mesh position={[0, -1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.35, 1.4]} />
        {mat}
      </mesh>

      {/* Ground volume */}
      <mesh position={[0.15, -0.45, 0.05]} castShadow receiveShadow>
        <boxGeometry args={[1.55, 0.95, 1.1]} />
        {mat}
      </mesh>

      {/* Middle volume, offset */}
      <mesh position={[-0.25, 0.35, 0.15]} castShadow receiveShadow>
        <boxGeometry args={[1.15, 0.75, 0.95]} />
        {mat}
      </mesh>

      {/* Upper tower */}
      <mesh position={[0.2, 1.15, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.95, 0.7]} />
        {mat}
      </mesh>

      {/* Crown slab */}
      <mesh position={[0.2, 1.78, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[0.95, 0.15, 0.95]} />
        {mat}
      </mesh>
    </group>
  );
}

export default function EntranceSculpture() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [3.2, 1.2, 3.6], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      {/* Key light — strong, warm, from the upper-right */}
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.35}
        color={"#fff3dc"}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />
      {/* Fill — cool, low, from the left */}
      <directionalLight
        position={[-4, 2, -2]}
        intensity={0.35}
        color={"#9fb5d6"}
      />
      {/* Ambient lift so deep shadows stay readable */}
      <ambientLight intensity={0.18} />

      <Suspense fallback={null}>
        <Monolith />
        <ContactShadows
          position={[0, -1.3, 0]}
          opacity={0.75}
          scale={6}
          blur={2.2}
          far={2.5}
        />
      </Suspense>
    </Canvas>
  );
}
