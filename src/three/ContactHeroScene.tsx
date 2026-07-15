import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Node, Connector } from "./primitives";
import { useCanvasInView } from "./hooks";

interface NodeSpec {
  color: string;
  pos: [number, number, number];
  radius: number;
  phase: number;
}

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [3, 4],
  [4, 5],
];

function NetworkField() {
  const group = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Group | null)[]>([]);
  const light = useRef<THREE.PointLight>(null);
  const { pointer, viewport } = useThree();

  // Two small independent "pods" hugging the far left/right edges, derived
  // from the live viewport size — no node or link ever crosses the
  // horizontal center where the headline sits, on any hero height.
  const nodes = useMemo<NodeSpec[]>(() => {
    const ex = viewport.width / 2 - 0.6;
    const ey = viewport.height / 2 - 0.35;
    return [
      { color: "#1565d8", pos: [-ex, ey, 0], radius: 0.1, phase: 0 },
      { color: "#22d3ee", pos: [-ex * 0.95, ey * 0.15, 0.2], radius: 0.08, phase: 0.9 },
      { color: "#0d4f5c", pos: [-ex, -ey * 0.65, -0.1], radius: 0.09, phase: 1.7 },
      { color: "#2f7bf0", pos: [ex, ey * 0.92, -0.1], radius: 0.09, phase: 1.8 },
      { color: "#22d3ee", pos: [ex * 0.95, ey * 0.1, 0.15], radius: 0.08, phase: 2.7 },
      { color: "#1565d8", pos: [ex, -ey * 0.7, 0.1], radius: 0.1, phase: 0.5 },
    ];
  }, [viewport.width, viewport.height]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    nodes.forEach((n, i) => {
      const node = nodeRefs.current[i];
      if (!node) return;
      const pulse = 1 + Math.sin(t * 1.2 + n.phase) * 0.12;
      node.scale.setScalar(pulse);
    });

    const g = group.current;
    if (g) {
      const targetX = pointer.y * 0.06;
      const targetY = -pointer.x * 0.06;
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
      {links.map(([a, b], i) => (
        <Connector key={i} a={nodes[a].pos} b={nodes[b].pos} opacity={0.4} />
      ))}
      {nodes.map((n, i) => (
        <group
          key={i}
          position={n.pos}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
        >
          <Node color={n.color} radius={n.radius} />
        </group>
      ))}
    </group>
  );
}

export default function ContactHeroScene() {
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
        <NetworkField />
      </Canvas>
    </div>
  );
}
