import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Panel, Connector } from "./primitives";
import { useCanvasInView } from "./hooks";

interface PanelSpec {
  color: string;
  pos: [number, number, number];
  size: [number, number];
  speed: number;
  phase: number;
}

function SystemsGroup() {
  const group = useRef<THREE.Group>(null);
  const panelRefs = useRef<(THREE.Group | null)[]>([]);
  const light = useRef<THREE.PointLight>(null);
  const { pointer, viewport } = useThree();

  // Hero height (and so the visible frustum's aspect) varies a lot page to
  // page with headline length, so positions are derived from the actual
  // viewport size each render rather than hardcoded world units — a fixed
  // offset that clears the headline on a tall hero can land right on top of
  // it on a short one.
  const panels = useMemo<PanelSpec[]>(() => {
    const ex = viewport.width / 2 - 0.75;
    const ey = viewport.height / 2 - 0.55;
    return [
      { color: "#1565d8", pos: [-ex, ey, -0.3], size: [0.5, 0.36], speed: 0.4, phase: 0 },
      { color: "#22d3ee", pos: [ex, ey * 0.92, 0.2], size: [0.46, 0.32], speed: 0.5, phase: 1.1 },
      { color: "#0d4f5c", pos: [-ex * 0.96, -ey, 0.1], size: [0.46, 0.32], speed: 0.45, phase: 2.0 },
      { color: "#2f7bf0", pos: [ex * 0.97, -ey * 0.93, -0.2], size: [0.5, 0.36], speed: 0.55, phase: 0.6 },
    ];
  }, [viewport.width, viewport.height]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    panels.forEach((p, i) => {
      const node = panelRefs.current[i];
      if (!node) return;
      node.rotation.z = Math.sin(t * p.speed + p.phase) * 0.15;
      node.rotation.y += delta * 0.08;
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
      {/* Only same-side connectors — a left-to-right line would cross
          straight through the headline no matter how far the panels move. */}
      <Connector a={panels[0].pos} b={panels[2].pos} />
      <Connector a={panels[1].pos} b={panels[3].pos} />
      {panels.map((p, i) => (
        <group
          key={i}
          position={p.pos}
          ref={(el) => {
            panelRefs.current[i] = el;
          }}
        >
          <Panel color={p.color} width={p.size[0]} height={p.size[1]} />
        </group>
      ))}
    </group>
  );
}

export default function ServicesHeroScene() {
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
        <SystemsGroup />
      </Canvas>
    </div>
  );
}
