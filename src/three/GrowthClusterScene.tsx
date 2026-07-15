import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import TrianglePetal from "./TrianglePetal";
import { useCanvasInView } from "./hooks";

interface ClusterItem {
  color: string;
  size: number;
  pos: [number, number, number];
  speed: number;
  phase: number;
}

// Positioned along a low "horizon" beneath the CTA text/buttons (which
// occupy roughly world-y +1.3 to -0.8), not scattered behind them — the
// headline runs nearly the full card width, so dodging it horizontally
// isn't possible; staying below it is what keeps the text legible.
const items: ClusterItem[] = [
  { color: "#1565d8", size: 0.2, pos: [-5.4, -1.3, -0.4], speed: 0.6, phase: 0 },
  { color: "#22d3ee", size: 0.14, pos: [-2.8, -1.55, 0.35], speed: 0.8, phase: 1.3 },
  { color: "#ffffff", size: 0.11, pos: [0, -1.65, 0.5], speed: 0.5, phase: 2.6 },
  { color: "#2f7bf0", size: 0.17, pos: [2.9, -1.5, -0.2], speed: 0.7, phase: 0.7 },
  { color: "#22d3ee", size: 0.13, pos: [5.5, -1.3, 0.4], speed: 0.65, phase: 1.9 },
];

function DriftingCluster() {
  const group = useRef<THREE.Group>(null);
  const petalRefs = useRef<(THREE.Group | null)[]>([]);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    items.forEach((item, i) => {
      const petal = petalRefs.current[i];
      if (!petal) return;
      petal.position.y = item.pos[1] + Math.sin(t * item.speed + item.phase) * 0.18;
      petal.rotation.y += delta * 0.25 * (i % 2 === 0 ? 1 : -1);
      petal.rotation.x += delta * 0.1;
    });

    const g = group.current;
    if (!g) return;
    const targetX = pointer.y * 0.08;
    const targetY = -pointer.x * 0.08;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 4, delta);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 4, delta);
  });

  return (
    <group ref={group}>
      {items.map((item, i) => (
        <group
          key={i}
          position={item.pos}
          ref={(el) => {
            petalRefs.current[i] = el;
          }}
        >
          <TrianglePetal color={item.color} size={item.size} depth={item.size * 0.5} roughness={0.28} />
        </group>
      ))}
    </group>
  );
}

export default function GrowthClusterScene() {
  const { ref, inView } = useCanvasInView<HTMLDivElement>();

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        frameloop={inView ? "always" : "never"}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 3, 4]} intensity={1.1} />
        <pointLight position={[-2, -1, -2]} intensity={0.9} color="#22d3ee" />
        <DriftingCluster />
      </Canvas>
    </div>
  );
}
