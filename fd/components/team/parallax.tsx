"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Parallax wrapper: children drift at `speed`× scroll velocity while the
 * first viewport of travel lasts. Collapses to a static layer under
 * prefers-reduced-motion.
 */
export function ParallaxLayer({
  children,
  speed = 0.4,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const update = () => {
      const y = Math.min(window.scrollY, 900);
      layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className ?? "absolute inset-0 will-change-transform"}
    >
      {children}
    </div>
  );
}
