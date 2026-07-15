import { useEffect, useRef, useState } from "react";

// Tracks scroll progress as a ref (not state) so it can be read inside a
// useFrame loop every frame without triggering React re-renders.
export function useScrollRef(max = 700) {
  const ref = useRef(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        ref.current = Math.min(window.scrollY / max, 1);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [max]);

  return ref;
}

// Pauses the Canvas frameloop while it's scrolled off-screen, saving GPU/
// battery on long pages and on mobile.
export function useCanvasInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "150px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
