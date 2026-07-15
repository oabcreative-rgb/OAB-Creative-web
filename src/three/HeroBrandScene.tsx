import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import TrianglePetal from "./TrianglePetal";
import { useCanvasInView, useScrollRef } from "./hooks";

function RotatingBrandMark() {
  const group = useRef<THREE.Group>(null);
  const light = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();
  const scrollRef = useScrollRef(700);

  useFrame((_, delta) => {
    const g = group.current;
    if (g) {
      g.rotation.y += delta * 0.18;

      const targetX = pointer.y * 0.22 + scrollRef.current * 0.35;
      const targetZ = -pointer.x * 0.18;
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 4, delta);
      g.rotation.z = THREE.MathUtils.damp(g.rotation.z, targetZ, 4, delta);
      g.position.y = THREE.MathUtils.damp(g.position.y, -scrollRef.current * 0.4, 4, delta);
    }

    if (light.current) {
      light.current.position.x = THREE.MathUtils.damp(light.current.position.x, pointer.x * 2.5, 3, delta);
      light.current.position.y = THREE.MathUtils.damp(light.current.position.y, pointer.y * 2, 3, delta);
    }
  });

  return (
    <group ref={group}>
      <pointLight ref={light} position={[0, 0, 2.2]} intensity={0.8} color="#ffffff" />
      <group position={[0, 0, -0.18]}>
        <TrianglePetal color="#2f7bf0" size={1.15} depth={0.26} metalness={0.2} roughness={0.32} />
      </group>
      <group position={[-0.08, -0.05, 0.05]} rotation={[0, 0, 0.55]}>
        <TrianglePetal color="#22d3ee" size={0.82} depth={0.24} metalness={0.15} roughness={0.28} />
      </group>
      <group position={[0.12, 0.02, 0.28]} rotation={[0, 0, -0.4]}>
        <TrianglePetal color="#0d4f5c" size={0.68} depth={0.24} metalness={0.15} roughness={0.4} emissiveIntensity={0.32} />
      </group>
    </group>
  );
}

// Full-bleed hero background: the mark sits off to the right at reduced
// scale so it reads as ambient depth behind the headline, not a centerpiece
// competing with it. The scrim (CSS, in Home.module.css) does the rest of
// the legibility work over the copy column.
export default function HeroBrandScene() {
  const { ref, inView } = useCanvasInView<HTMLDivElement>();

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4.8], fov: 38 }}
        frameloop={inView ? "always" : "never"}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.3} color="#ffffff" />
        <pointLight position={[-3, -2, -3]} intensity={1.1} color="#22d3ee" />
        <pointLight position={[2.5, -2.5, 2]} intensity={0.5} color="#1565d8" />
        <group position={[0.9, -0.1, 0]} scale={0.9}>
          <RotatingBrandMark />
        </group>
      </Canvas>
    </div>
  );
}
