"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  useRef,
  type PointerEvent,
  type ReactNode,
  type CSSProperties,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees */
  intensity?: number;
  /** Adds a subtle inner glare following the cursor */
  glare?: boolean;
  style?: CSSProperties;
};

/**
 * 3D tilt-on-hover wrapper. Reads the cursor position relative to the box,
 * tilts on X/Y with a spring, and optionally renders a soft white glare
 * that follows the pointer for that "tilted glass" feel.
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 8,
  glare = true,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5); // 0..1
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), {
    stiffness: 220,
    damping: 18,
    mass: 0.4,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), {
    stiffness: 220,
    damping: 18,
    mass: 0.4,
  });

  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useTransform(
    [glareX, glareY] as never,
    ([gx, gy]: string[]) =>
      `radial-gradient(220px circle at ${gx} ${gy}, rgba(255,255,255,0.20), transparent 60%)`,
  );

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
    py.set(Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)));
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        ...style,
      }}
      className={"relative " + className}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
        />
      )}
    </motion.div>
  );
}
