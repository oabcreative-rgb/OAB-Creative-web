import { useMemo } from "react";
import * as THREE from "three";
import { createPanelGeometry, createFrameGeometry, getSegmentTransform } from "./geometry";
import BrandMaterial from "./BrandMaterial";

interface PanelProps {
  color: string;
  width?: number;
  height?: number;
  depth?: number;
  radius?: number;
  metalness?: number;
  roughness?: number;
  emissiveIntensity?: number;
}

// A slim rounded panel — the "layer" motif used in the Services scene.
export function Panel({ color, width = 1, height = 0.65, depth = 0.06, radius = 0.1, metalness, roughness, emissiveIntensity }: PanelProps) {
  const geometry = useMemo(() => createPanelGeometry(width, height, depth, radius), [width, height, depth, radius]);
  return (
    <mesh geometry={geometry}>
      <BrandMaterial color={color} metalness={metalness} roughness={roughness} emissiveIntensity={emissiveIntensity} />
    </mesh>
  );
}

interface FrameProps {
  color: string;
  width?: number;
  height?: number;
  thickness?: number;
  depth?: number;
  radius?: number;
  metalness?: number;
  roughness?: number;
  emissiveIntensity?: number;
}

// A hollow rounded-rect ring — the "frame/tile" motif used in the Portfolio scene.
export function Frame({ color, width = 1, height = 0.75, thickness = 0.07, depth = 0.05, radius = 0.12, metalness, roughness, emissiveIntensity }: FrameProps) {
  const geometry = useMemo(
    () => createFrameGeometry(width, height, thickness, depth, radius),
    [width, height, thickness, depth, radius]
  );
  return (
    <mesh geometry={geometry}>
      <BrandMaterial color={color} metalness={metalness} roughness={roughness} emissiveIntensity={emissiveIntensity} />
    </mesh>
  );
}

interface NodeProps {
  color: string;
  radius?: number;
  metalness?: number;
  roughness?: number;
  emissiveIntensity?: number;
}

// A small sphere — the "node" motif used in the Contact and About scenes.
export function Node({ color, radius = 0.1, metalness, roughness, emissiveIntensity }: NodeProps) {
  return (
    <mesh>
      <sphereGeometry args={[radius, 20, 20]} />
      <BrandMaterial color={color} metalness={metalness} roughness={roughness} emissiveIntensity={emissiveIntensity} />
    </mesh>
  );
}

interface ConnectorProps {
  a: [number, number, number];
  b: [number, number, number];
  color?: string;
  radius?: number;
  opacity?: number;
}

// A thin unlit line between two points — connections between nodes/panels.
// Unlit (meshBasicMaterial) on purpose: a thin glowing "signal" line reads
// better than one subject to scene lighting, and it's cheaper to render.
export function Connector({ a, b, color = "#22d3ee", radius = 0.012, opacity = 0.45 }: ConnectorProps) {
  const { position, quaternion, length } = useMemo(
    () => getSegmentTransform(new THREE.Vector3(...a), new THREE.Vector3(...b)),
    [a, b]
  );
  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[radius, radius, length, 6]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}
