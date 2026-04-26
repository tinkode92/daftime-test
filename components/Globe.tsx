"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  /**
   * Idle auto-rotation speed (radians per frame). 0 disables auto-spin.
   */
  autoRotate?: number;
  config?: Partial<COBEOptions>;
};

const MARKERS: COBEOptions["markers"] = [
  { location: [25.276987, 55.296249], size: 0.08 }, // Dubai
  { location: [48.8566, 2.3522], size: 0.06 }, // Paris (France)
  { location: [38.7223, -9.1393], size: 0.06 }, // Lisbon (Portugal)
];

export default function Globe({
  className = "",
  autoRotate = 0.0035,
  config,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);
  const accumulatedDelta = useRef(0);
  const phiRef = useRef(0);
  const targetR = useRef(0);
  const currentR = useRef(0);
  const widthRef = useRef(0);
  const visibleRef = useRef(true);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    // Honor user's reduced-motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;
    const onMq = (e: MediaQueryListEvent) => {
      reduceMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onMq);

    // Cap DPR to reduce pixel pressure on retina screens
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const measure = () => {
      widthRef.current = canvas.offsetWidth;
    };
    measure();
    window.addEventListener("resize", measure);

    const initial: COBEOptions = {
      devicePixelRatio: dpr,
      phi: 0,
      theta: 0.28,
      dark: 1,
      diffuse: 1.1,
      mapSamples: 10000,
      mapBrightness: 4.5,
      baseColor: [1, 1, 1],
      markerColor: [214 / 255, 179 / 255, 3 / 255],
      glowColor: [1, 1, 1],
      markers: MARKERS,
      ...config,
      width: widthRef.current * dpr,
      height: widthRef.current * dpr,
    };

    const globe = createGlobe(canvas, initial);

    let raf = 0;
    const tick = () => {
      const paused =
        !visibleRef.current ||
        document.hidden ||
        widthRef.current === 0;
      if (!paused) {
        if (pointerStart.current === null && !reduceMotionRef.current) {
          phiRef.current += autoRotate;
        }
        currentR.current += (targetR.current - currentR.current) * 0.08;
        globe.update({
          phi: phiRef.current + currentR.current,
          width: widthRef.current * dpr,
          height: widthRef.current * dpr,
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    // Pause when not visible
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRef.current = entry.isIntersecting;
        }
      },
      { threshold: 0.05 },
    );
    io.observe(wrapper);

    const onVisibility = () => {
      // No-op: handled inside the rAF tick via document.hidden
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      io.disconnect();
      window.removeEventListener("resize", measure);
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [autoRotate, config]);

  const setCursor = (grabbing: boolean) => {
    if (canvasRef.current) {
      canvasRef.current.style.cursor = grabbing ? "grabbing" : "grab";
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={"relative aspect-square w-full " + className}
    >
      <canvas
        ref={canvasRef}
        className="size-full select-none opacity-0 transition-opacity duration-1000"
        style={{ cursor: "grab", touchAction: "pan-y" }}
        onPointerDown={(e) => {
          pointerStart.current = e.clientX - accumulatedDelta.current;
          setCursor(true);
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
        }}
        onPointerUp={() => {
          pointerStart.current = null;
          setCursor(false);
        }}
        onPointerOut={() => {
          pointerStart.current = null;
          setCursor(false);
        }}
        onPointerCancel={() => {
          pointerStart.current = null;
          setCursor(false);
        }}
        onPointerMove={(e) => {
          if (pointerStart.current === null) return;
          const delta = e.clientX - pointerStart.current;
          accumulatedDelta.current = delta;
          targetR.current = delta / 200;
        }}
      />
    </div>
  );
}
