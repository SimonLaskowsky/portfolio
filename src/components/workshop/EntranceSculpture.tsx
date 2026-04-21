"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// Abstract classical bust in white marble. Plinth + torso + neck + head
// composed from primitives so no external .glb is needed. The form
// reads as "museum sculpture" at a glance; the real magic is the
// cursor-reactive rim light that throws a moving highlight across the
// marble as you move the mouse.

const MARBLE_COLOR = "#ece7dc";

function MarbleMaterial() {
  return (
    <meshPhysicalMaterial
      color={MARBLE_COLOR}
      roughness={0.32}
      metalness={0.0}
      clearcoat={0.35}
      clearcoatRoughness={0.45}
      sheen={0.1}
      sheenColor={"#fff8ea"}
      envMapIntensity={0.9}
    />
  );
}

function Bust() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const g = groupRef.current;
    if (!g) return;
    const scrollY =
      typeof window !== "undefined" ? window.scrollY : 0;
    const idle = clock.elapsedTime * 0.12;
    g.rotation.y = idle + scrollY * 0.0008;
    // Slight head lift/tilt responding to cursor — makes the bust feel
    // alive, like it's watching.
    if (headRef.current) {
      headRef.current.rotation.y = pointer.x * 0.25;
      headRef.current.rotation.x = -pointer.y * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.15, 0]}>
      {/* Plinth */}
      <mesh position={[0, -1.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.95, 1.4, 0.95]} />
        <MarbleMaterial />
      </mesh>

      {/* Plinth top cap — thin slab */}
      <mesh position={[0, -0.88, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.1, 0.08, 1.1]} />
        <MarbleMaterial />
      </mesh>

      {/* Torso / shoulders — lathed ellipsoid via scaled sphere */}
      <mesh
        position={[0, -0.25, 0]}
        scale={[1.15, 0.85, 0.7]}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[0.6, 64, 48]} />
        <MarbleMaterial />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.38, 0.02]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.19, 0.3, 32]} />
        <MarbleMaterial />
      </mesh>

      {/* Head — slight ellipsoid */}
      <group position={[0, 0.78, 0]}>
        <mesh ref={headRef} scale={[0.82, 1, 0.95]} castShadow receiveShadow>
          <sphereGeometry args={[0.38, 64, 48]} />
          <MarbleMaterial />
        </mesh>
      </group>
    </group>
  );
}

function CursorLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    const l = lightRef.current;
    if (!l) return;
    // Map normalized pointer (-1..1) into world space, hold light in
    // front of the sculpture so it casts toward the camera.
    const x = pointer.x * viewport.width * 0.5;
    const y = pointer.y * viewport.height * 0.5;
    l.position.lerp(new THREE.Vector3(x, y, 2.2), 0.12);
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={14}
      distance={6}
      decay={1.8}
      color={"#fff4de"}
    />
  );
}

export default function EntranceSculpture() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.2, 4.2], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      {/* Museum key light from upper-right, warm */}
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.15}
        color={"#fff4dc"}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={4}
        shadow-camera-bottom={-3}
      />
      {/* Cool fill from the left, quieter */}
      <directionalLight
        position={[-4, 1, -1]}
        intensity={0.28}
        color={"#b5c4d6"}
      />
      {/* Base ambient so the unlit faces still read */}
      <ambientLight intensity={0.25} />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        <CursorLight />
        <Bust />
        <ContactShadows
          position={[0, -2.35, 0]}
          opacity={0.55}
          scale={7}
          blur={2.4}
          far={2.5}
        />
      </Suspense>
    </Canvas>
  );
}
