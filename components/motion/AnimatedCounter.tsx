"use client";

import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  /** Optional start value, defaults to 0 */
  from?: number;
  /** Duration in seconds */
  duration?: number;
  /** Format the displayed number (e.g. "12k+" => format(v) returns "12k+") */
  format?: (value: number) => string;
  className?: string;
  /** Replay each time it scrolls back into view */
  loop?: boolean;
};

export default function AnimatedCounter({
  to,
  from = 0,
  duration = 1.6,
  format = (v) => Math.round(v).toLocaleString(),
  className = "",
  loop = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: !loop, amount: 0.6 });
  const motionValue = useMotionValue(from);
  const display = useTransform(motionValue, (latest) => format(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, motionValue, to, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: "inline-block", willChange: "contents" }}
    >
      {display}
    </motion.span>
  );
}
