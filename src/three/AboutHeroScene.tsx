import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Node } from "./primitives";
import { useCanvasInView } from "./hooks";

interface OrbSpec {
  color: string;
  pos: [number, number, number];
  radius: number;
  speed: number;
  phase: number;
}

function GrowthField() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const orbRefs = useRef<(THREE.Group | null)[]>([]);
  const light = useRef<THREE.PointLight>(null);
  const { pointer, viewport } = useThree();

  // Two ascending trails (small to large, low to high) hugging the far
  // left/right edges — growth and direction — derived from the live
  // viewport size so they stay clear of the headline regardless of hero
  // height (which varies a lot with copy length page to page).
  const orbs = useMemo<OrbSpec[]>(() => {
    const ex = viewport.width / 2 - 0.6;
    const ey = viewport.height / 2 - 0.4;
    return [
      { color: "#1565d8", pos: [-ex, -ey, 0], radius: 0.08, speed: 0.5, phase: 0 },
      { color: "#2f7bf0", pos: [-ex * 0.97, -ey * 0.5, 0.1], radius: 0.11, speed: 0.6, phase: 0.8 },
      { color: "#22d3ee", pos: [-ex * 0.94, ey * 0.05, 0.2], radius: 0.14, speed: 0.55, phase: 1.6 },
      { color: "#0d4f5c", pos: [-ex * 0.9, ey * 0.6, 0.1], radius: 0.17, speed: 0.45, phase: 2.4 },
      { color: "#2f7bf0", pos: [ex, -ey * 0.95, -0.1], radius: 0.09, speed: 0.55, phase: 0.4 },
      { color: "#1565d8", pos: [ex * 0.97, -ey * 0.35, 0], radius: 0.12, speed: 0.5, phase: 1.2 },
      { color: "#22d3ee", pos: [ex * 0.94, ey * 0.3, 0.15], radius: 0.15, speed: 0.6, phase: 2.0 },
    ];
  }, [viewport.width, viewport.height]);

  const ringPos = useMemo<[number, number, number]>(() => {
    const ex = viewport.width / 2 - 0.6;
    return [ex * 0.85, 0, -0.4];
  }, [viewport.width]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    orbs.forEach((o, i) => {
      const node = orbRefs.current[i];
      if (!node) return;
      node.position.y = o.pos[1] + Math.sin(t * o.speed + o.phase) * 0.1;
    });

    if (ring.current) {
      ring.current.rotation.z += delta * 0.06;
      ring.current.rotation.x = 1.15 + Math.sin(t * 0.15) * 0.05;
    }

    const g = group.current;
    if (g) {
      const targetX = pointer.y * 0.05;
      const targetY = -pointer.x * 0.05;
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 4, delta);
      g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 4, delta);
    }

    if (light.current) {
      light.current.position.x = THREE.MathUtils.damp(light.current.position.x, pointer.x * 4, 3, delta);
      light.current.position.y = THREE.MathUtils.damp(light.current.position.y, pointer.y * 3, 3, delta);
    }
  });

  return (
    <group ref={group}>
      <pointLight ref={light} position={[0, 0, 2.5]} intensity={0.9} color="#22d3ee" />
      {/* Small ring tucked into the right margin instead of one giant halo
          spanning the whole hero (which would cross the headline). */}
      <mesh ref={ring} position={ringPos} rotation={[1.15, 0, 0]}>
        <torusGeometry args={[0.85, 0.02, 8, 96]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
      </mesh>
      {orbs.map((o, i) => (
        <group
          key={i}
          position={o.pos}
          ref={(el) => {
            orbRefs.current[i] = el;
          }}
        >
          <Node color={o.color} radius={o.radius} />
        </group>
      ))}
    </group>
  );
}

export default function AboutHeroScene() {
  const { ref, inView } = useCanvasInView<HTMLDivElement>();

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5.6], fov: 42 }}
        frameloop={inView ? "always" : "never"}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} />
        <GrowthField />
      </Canvas>
    </div>
  );
}
