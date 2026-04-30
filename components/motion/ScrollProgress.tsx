"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Sticky scroll-progress bar pinned at the very top of the viewport.
 * Spring-smoothed so the fill never jitters on micro-scrolls.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[2px] bg-daftime-yellow shadow-[0_0_18px_rgba(214,179,3,0.55)]"
    />
  );
}
