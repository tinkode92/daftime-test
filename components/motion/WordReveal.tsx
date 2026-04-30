"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.05 + i * 0.07,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type Props = {
  text: string;
  className?: string;
  /** Delay added before the first word starts (s) */
  startDelay?: number;
  /** Render as h1, h2, span, etc. */
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  /** Replay every time it scrolls into view */
  loop?: boolean;
};

export default function WordReveal({
  text,
  className = "",
  startDelay = 0,
  as: Tag = "span",
  loop = false,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, {
    once: !loop,
    margin: "0px 0px -10% 0px",
    amount: 0.3,
  });
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ display: "inline-block" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          custom={i + startDelay * 14.3}
          variants={wordVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            willChange: "transform, opacity, filter",
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
