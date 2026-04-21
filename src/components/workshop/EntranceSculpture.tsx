"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, useGLTF } from "@react-three/drei";
import { Component, Suspense, useEffect, useRef, type ReactNode } from "react";
import * as THREE from "three";

// Loads /models/david.glb if present and wraps it in the same marble
// material + cursor-reactive light rig. If the file is missing or
// fails to decode, the error boundary falls back to a primitives-
// built bust so the Canvas never breaks the page.

const DAVID_URL = "/models/david.glb";
const MARBLE_COLOR = "#ece7dc";

function marbleMaterial(): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(MARBLE_COLOR),
    roughness: 0.32,
    metalness: 0,
    clearcoat: 0.35,
    clearcoatRoughness: 0.45,
    sheen: 0.1,
    sheenColor: new THREE.Color("#fff8ea"),
    envMapIntensity: 0.9,
  });
}

function SculptureMotion({
  children,
  headTiltRef,
}: {
  children: ReactNode;
  headTiltRef?: React.RefObject<THREE.Object3D | null>;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    const g = groupRef.current;
    if (!g) return;
    const scrollY =
      typeof window !== "undefined" ? window.scrollY : 0;
    const idle = clock.elapsedTime * 0.1;
    g.rotation.y = idle + scrollY * 0.0008;

    if (headTiltRef?.current) {
      headTiltRef.current.rotation.y = pointer.x * 0.22;
      headTiltRef.current.rotation.x = -pointer.y * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.15, 0]}>
      {children}
    </group>
  );
}

function DavidModel() {
  const { scene } = useGLTF(DAVID_URL);

  useEffect(() => {
    // Normalize: rescale + recenter so any scanned model lands in a
    // predictable pose, then coat every mesh in white marble.
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const targetHeight = 2.4;
    const scale = targetHeight / Math.max(size.y, 0.0001);
    scene.scale.setScalar(scale);
    scene.position.set(
      -center.x * scale,
      -center.y * scale + 0.1,
      -center.z * scale,
    );

    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.material = marbleMaterial();
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <SculptureMotion>
      <primitive object={scene} />
    </SculptureMotion>
  );
}

// Primitives fallback — the bust we had before, used when no glb is
// present. Looks deliberate rather than "loading failed."
function PrimitivesBust() {
  const headRef = useRef<THREE.Mesh>(null);
  const mat = (
    <meshPhysicalMaterial
      color={MARBLE_COLOR}
      roughness={0.32}
      metalness={0}
      clearcoat={0.35}
      clearcoatRoughness={0.45}
      sheen={0.1}
      sheenColor={new THREE.Color("#fff8ea")}
      envMapIntensity={0.9}
    />
  );

  return (
    <SculptureMotion headTiltRef={headRef}>
      <mesh position={[0, -1.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.95, 1.4, 0.95]} />
        {mat}
      </mesh>
      <mesh position={[0, -0.88, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.1, 0.08, 1.1]} />
        {mat}
      </mesh>
      <mesh
        position={[0, -0.25, 0]}
        scale={[1.15, 0.85, 0.7]}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[0.6, 64, 48]} />
        {mat}
      </mesh>
      <mesh position={[0, 0.38, 0.02]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.19, 0.3, 32]} />
        {mat}
      </mesh>
      <mesh
        ref={headRef}
        position={[0, 0.78, 0]}
        scale={[0.82, 1, 0.95]}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[0.38, 64, 48]} />
        {mat}
      </mesh>
    </SculptureMotion>
  );
}

// Error boundary — catches load/decode failures of the GLB and swaps
// in the primitives bust. Required because R3F doesn't recover from
// Suspense throws caused by failed fetches.
class ModelErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { errored: boolean }
> {
  state = { errored: false };
  static getDerivedStateFromError() {
    return { errored: true };
  }
  componentDidCatch() {
    // Swallowed intentionally — fall back silently.
  }
  render() {
    return this.state.errored ? this.props.fallback : this.props.children;
  }
}

function CursorLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();
  const target = useRef(new THREE.Vector3());

  useFrame(({ pointer }) => {
    const l = lightRef.current;
    if (!l) return;
    target.current.set(
      pointer.x * viewport.width * 0.5,
      pointer.y * viewport.height * 0.5,
      2.2,
    );
    l.position.lerp(target.current, 0.12);
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
      <directionalLight
        position={[-4, 1, -1]}
        intensity={0.28}
        color={"#b5c4d6"}
      />
      <ambientLight intensity={0.25} />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        <CursorLight />
        <ModelErrorBoundary fallback={<PrimitivesBust />}>
          <Suspense fallback={<PrimitivesBust />}>
            <DavidModel />
          </Suspense>
        </ModelErrorBoundary>
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

// Preload so the first render doesn't stall. Silently fails if the file
// doesn't exist — the error boundary handles the render path.
if (typeof window !== "undefined") {
  try {
    useGLTF.preload(DAVID_URL);
  } catch {
    /* no-op */
  }
}
