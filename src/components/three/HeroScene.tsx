"use client";

import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Pointer = { x: number; y: number };

/** Soft round particle sprite generated on the fly (client-only). */
function createCircleTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const g = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.3, "rgba(190,220,255,0.85)");
    g.addColorStop(1, "rgba(120,180,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function scrollProgress() {
  if (typeof window === "undefined") return 0;
  const vh = window.innerHeight || 1;
  return Math.min(window.scrollY / vh, 1);
}

function ParticleField({
  count,
  pointer,
}: {
  count: number;
  pointer: MutableRefObject<Pointer>;
}) {
  const ref = useRef<THREE.Points>(null!);
  const spin = useRef(0);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const cWhite = new THREE.Color("#ffffff");
    const cBlue = new THREE.Color("#2f8bff");
    const cSoft = new THREE.Color("#7cc0ff");
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 2.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) * 0.72;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      const pick = Math.random();
      const c = pick > 0.82 ? cWhite : pick > 0.4 ? cBlue : cSoft;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);

  const texture = useMemo(() => createCircleTexture(), []);
  useEffect(() => () => texture.dispose(), [texture]);

  useFrame((state, delta) => {
    const obj = ref.current;
    if (!obj) return;
    const t = state.clock.elapsedTime;

    spin.current += delta * 0.045;
    const targetY = spin.current + pointer.current.x * 0.5;
    const targetX = -pointer.current.y * 0.35;
    obj.rotation.y += (targetY - obj.rotation.y) * 0.05;
    obj.rotation.x += (targetX - obj.rotation.x) * 0.05;

    const s = 1 + Math.sin(t * 0.6) * 0.03;
    obj.scale.setScalar(s);

    const sc = scrollProgress();
    obj.position.y = sc * 2.6;
    (obj.material as THREE.PointsMaterial).opacity = 0.95 * (1 - sc * 0.95);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        map={texture}
        vertexColors
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Thin wireframe core behind the cloud for a structural, technical feel. */
function CoreWire({ pointer }: { pointer: MutableRefObject<Pointer> }) {
  const ref = useRef<THREE.LineSegments>(null!);
  const geo = useMemo(() => new THREE.IcosahedronGeometry(2.1, 1), []);
  useEffect(() => () => geo.dispose(), [geo]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.06;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.15 - pointer.current.y * 0.2;
    const sc = scrollProgress();
    ref.current.position.y = sc * 2.6;
    (ref.current.material as THREE.LineBasicMaterial).opacity = 0.16 * (1 - sc);
  });

  return (
    <lineSegments ref={ref}>
      <edgesGeometry args={[geo]} />
      <lineBasicMaterial
        color="#2f8bff"
        transparent
        opacity={0.16}
        depthWrite={false}
      />
    </lineSegments>
  );
}

export default function HeroScene() {
  const [count, setCount] = useState(2600);
  const pointer = useRef<Pointer>({ x: 0, y: 0 });

  useEffect(() => {
    const w = window.innerWidth;
    if (w < 640) setCount(1200);
    else if (w < 1024) setCount(2000);
    else setCount(3200);

    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <CoreWire pointer={pointer} />
      <ParticleField count={count} pointer={pointer} />
    </Canvas>
  );
}
