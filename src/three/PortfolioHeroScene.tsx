import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Frame } from "./primitives";
import { useCanvasInView } from "./hooks";

interface FrameSpec {
  color: string;
  pos: [number, number, number];
  size: [number, number];
  spinX: number;
  spinY: number;
}

// Empty picture-frame outlines tumbling gently at the far edges — "dynamic
// frames / project tiles" — clear of the centered headline.
function FrameField() {
  const group = useRef<THREE.Group>(null);
  const frameRefs = useRef<(THREE.Group | null)[]>([]);
  const light = useRef<THREE.PointLight>(null);
  const { pointer, viewport } = useThree();

  // Derived from the live viewport size (not hardcoded) — hero height
  // varies a lot with headline length, which shifts the visible frustum's
  // aspect ratio and would otherwise put fixed offsets right on the text.
  const frames = useMemo<FrameSpec[]>(() => {
    const ex = viewport.width / 2 - 0.7;
    const ey = viewport.height / 2 - 0.55;
    return [
      { color: "#1565d8", pos: [-ex, ey * 0.95, -0.2], size: [0.42, 0.32], spinX: 0.12, spinY: 0.16 },
      { color: "#22d3ee", pos: [ex, ey * 0.9, 0.3], size: [0.36, 0.28], spinX: -0.15, spinY: 0.1 },
      { color: "#0d4f5c", pos: [-ex * 0.95, -ey, 0.15], size: [0.34, 0.26], spinX: 0.1, spinY: -0.14 },
      { color: "#2f7bf0", pos: [ex * 0.97, -ey * 0.92, -0.25], size: [0.38, 0.3], spinX: -0.11, spinY: -0.12 },
    ];
  }, [viewport.width, viewport.height]);

  useFrame((_, delta) => {
    frames.forEach((f, i) => {
      const node = frameRefs.current[i];
      if (!node) return;
      node.rotation.x += delta * f.spinX;
      node.rotation.y += delta * f.spinY;
    });

    const g = group.current;
    if (g) {
      const targetX = pointer.y * 0.07;
      const targetY = -pointer.x * 0.07;
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
      {frames.map((f, i) => (
        <group
          key={i}
          position={f.pos}
          ref={(el) => {
            frameRefs.current[i] = el;
          }}
        >
          <Frame color={f.color} width={f.size[0]} height={f.size[1]} />
        </group>
      ))}
    </group>
  );
}

export default function PortfolioHeroScene() {
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
        <FrameField />
      </Canvas>
    </div>
  );
}
