"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  /** Maximum cursor-driven offset in px */
  strength?: number;
};

type ButtonProps = CommonProps & {
  as?: "button";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: undefined;
};

type AnchorProps = CommonProps & {
  as: "a";
  href: string;
  type?: undefined;
  onClick?: () => void;
};

type Props = ButtonProps | AnchorProps;

/**
 * Wraps any CTA in a magnetic-pull effect: the element drifts a few pixels
 * toward the cursor while hovered, then springs back on leave. The visible
 * children are also pushed in sync so they feel glued to the pointer.
 */
export default function MagneticButton(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const strength = props.strength ?? 14;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={{ x: sx, y: sy, display: "inline-flex" }}
      className="pointer-events-none items-center gap-3"
    >
      {props.children}
    </motion.span>
  );

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ display: "inline-flex" }}
    >
      {props.as === "a" ? (
        <a
          href={props.href}
          onClick={props.onClick}
          className={props.className}
        >
          {inner}
        </a>
      ) : (
        <button
          type={props.type ?? "button"}
          onClick={props.onClick}
          className={props.className}
        >
          {inner}
        </button>
      )}
    </motion.div>
  );
}
