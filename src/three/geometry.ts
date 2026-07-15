import * as THREE from "three";

function roundedPolygonShape(vertices: THREE.Vector2[], radius: number) {
  const shape = new THREE.Shape();
  const n = vertices.length;
  const getPoint = (i: number) => vertices[(i + n) % n];

  for (let i = 0; i < n; i++) {
    const prev = getPoint(i - 1);
    const curr = getPoint(i);
    const next = getPoint(i + 1);

    const toPrev = prev.clone().sub(curr).normalize().multiplyScalar(radius);
    const toNext = next.clone().sub(curr).normalize().multiplyScalar(radius);

    const start = curr.clone().add(toPrev);
    const end = curr.clone().add(toNext);

    if (i === 0) {
      shape.moveTo(start.x, start.y);
    } else {
      shape.lineTo(start.x, start.y);
    }
    shape.quadraticCurveTo(curr.x, curr.y, end.x, end.y);
  }
  shape.closePath();
  return shape;
}

// A rounded-corner triangle, used as the recurring motif across the 3D
// brand visuals — echoes the triangle brand mark without tracing its exact
// path (the official logo artwork is used verbatim everywhere else).
export function createTriangleShape(size: number, cornerRadius: number) {
  const points: THREE.Vector2[] = [];
  for (let i = 0; i < 3; i++) {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 3;
    points.push(new THREE.Vector2(Math.cos(angle) * size, Math.sin(angle) * size));
  }
  return roundedPolygonShape(points, cornerRadius);
}

export function createTriangleGeometry(size: number, depth: number) {
  const shape = createTriangleShape(size, size * 0.16);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: size * 0.05,
    bevelSize: size * 0.05,
    bevelSegments: 4,
    curveSegments: 16,
  });
  geometry.center();
  return geometry;
}

function roundedRectShape(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  const w = width / 2;
  const h = height / 2;
  const r = Math.min(radius, w, h);
  shape.moveTo(-w + r, -h);
  shape.lineTo(w - r, -h);
  shape.quadraticCurveTo(w, -h, w, -h + r);
  shape.lineTo(w, h - r);
  shape.quadraticCurveTo(w, h, w - r, h);
  shape.lineTo(-w + r, h);
  shape.quadraticCurveTo(-w, h, -w, h - r);
  shape.lineTo(-w, -h + r);
  shape.quadraticCurveTo(-w, -h, -w + r, -h);
  shape.closePath();
  return shape;
}

// A slim rounded panel — used for the Services "layers/systems" motif.
export function createPanelGeometry(width: number, height: number, depth: number, radius = 0.1) {
  const shape = roundedRectShape(width, height, radius);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 2,
    curveSegments: 8,
  });
  geometry.center();
  return geometry;
}

// A hollow rounded-rect ring — used for the Portfolio "frames/tiles" motif.
export function createFrameGeometry(width: number, height: number, thickness: number, depth: number, radius = 0.14) {
  const outer = roundedRectShape(width, height, radius);
  const inner = roundedRectShape(width - thickness * 2, height - thickness * 2, Math.max(radius - thickness, 0.01));
  outer.holes.push(new THREE.Path(inner.getPoints()));
  const geometry = new THREE.ExtrudeGeometry(outer, {
    depth,
    bevelEnabled: false,
    curveSegments: 8,
  });
  geometry.center();
  return geometry;
}

// Position + orientation for a thin cylinder connecting two points — used to
// draw simple "connection" lines between nodes (Services, Contact).
export function getSegmentTransform(a: THREE.Vector3, b: THREE.Vector3) {
  const position = a.clone().add(b).multiplyScalar(0.5);
  const dir = b.clone().sub(a);
  const length = dir.length();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  return { position, quaternion, length };
}
