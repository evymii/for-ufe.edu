"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Shared motion primitives — subtle by design:
 *   - 150–300ms, ease-out, transform + opacity only (compositor-friendly)
 *   - every wrapper collapses to "no animation" under prefers-reduced-motion
 */

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  delay = 0,
  className,
  from = "left",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "left" | "right";
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={
        reduceMotion ? false : { opacity: 0, x: from === "left" ? -16 : 16 }
      }
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={
        reduceMotion
          ? {}
          : {
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.25, ease: EASE_OUT },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
