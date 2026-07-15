import { Suspense, useEffect, useState, type ComponentType, type LazyExoticComponent, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

const MOBILE_BREAKPOINT = 640;

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

interface LazyScene3DProps {
  scene: LazyExoticComponent<ComponentType>;
  fallback: ReactNode;
  className?: string;
  // Some hero layouts are single-column with a headline that can span
  // nearly the full width on a narrow screen, leaving no safe margin for
  // 3D shapes to sit in without crowding the text. For those, skip the
  // WebGL scene below the mobile breakpoint entirely — a genuinely
  // lightweight fallback rather than a shrunk-down version of the scene.
  disableOnMobile?: boolean;
}

// Gates a heavy React Three Fiber scene behind a WebGL support check and the
// visitor's reduced-motion preference. When either is unavailable, the same
// static markup used everywhere else (fallback) renders instead — so the
// page never depends on 3D to look complete.
export default function LazyScene3D({ scene: Scene, fallback, className, disableOnMobile }: LazyScene3DProps) {
  const reducedMotion = useReducedMotion();
  const [supported, setSupported] = useState<boolean | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setSupported(hasWebGL());
  }, []);

  useEffect(() => {
    if (!disableOnMobile) return;
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [disableOnMobile]);

  const shouldRender = supported === true && !reducedMotion && !isMobile;

  return (
    <div className={className}>
      {shouldRender ? (
        <Suspense fallback={fallback}>
          <Scene />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
