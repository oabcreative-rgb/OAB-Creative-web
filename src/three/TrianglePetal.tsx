import { useMemo } from "react";
import { createTriangleGeometry } from "./geometry";
import BrandMaterial from "./BrandMaterial";

interface TrianglePetalProps {
  color: string;
  size?: number;
  depth?: number;
  metalness?: number;
  roughness?: number;
  emissiveIntensity?: number;
}

export default function TrianglePetal({
  color,
  size = 1,
  depth = 0.24,
  metalness,
  roughness,
  emissiveIntensity,
}: TrianglePetalProps) {
  const geometry = useMemo(() => createTriangleGeometry(size, depth), [size, depth]);

  return (
    <mesh geometry={geometry}>
      <BrandMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}
