interface BrandMaterialProps {
  color: string;
  metalness?: number;
  roughness?: number;
  emissiveIntensity?: number;
}

// Shared material tuning for every solid shape across the 3D scenes. Kept
// deliberately low-metalness: without an HDR environment map, highly
// metallic PBR surfaces read as near-black (metals only show reflections,
// not diffuse color). A slight emissive keeps shapes readable in shadow.
export default function BrandMaterial({
  color,
  metalness = 0.18,
  roughness = 0.35,
  emissiveIntensity = 0.12,
}: BrandMaterialProps) {
  return (
    <meshPhysicalMaterial
      color={color}
      metalness={metalness}
      roughness={roughness}
      clearcoat={0.5}
      clearcoatRoughness={0.3}
      emissive={color}
      emissiveIntensity={emissiveIntensity}
    />
  );
}
