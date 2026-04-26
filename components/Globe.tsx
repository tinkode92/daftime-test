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

const DEFAULT_CONFIG: Omit<COBEOptions, "width" | "height"> = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.28,
  dark: 1,
  diffuse: 1.1,
  mapSamples: 18000,
  mapBrightness: 5,
  baseColor: [1, 1, 1],
  markerColor: [214 / 255, 179 / 255, 3 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [25.276987, 55.296249], size: 0.07 }, // Dubai
    { location: [48.8566, 2.3522], size: 0.05 }, // Paris
    { location: [40.7128, -74.006], size: 0.05 }, // New York
    { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
    { location: [51.5074, -0.1278], size: 0.05 }, // London
  ],
};

export default function Globe({
  className = "",
  autoRotate = 0.0035,
  config,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerStart = useRef<number | null>(null);
  const accumulatedDelta = useRef(0);
  const phiRef = useRef(0);
  const targetR = useRef(0);
  const currentR = useRef(0);
  const widthRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const measure = () => {
      widthRef.current = canvas.offsetWidth;
    };
    measure();
    window.addEventListener("resize", measure);

    const initial: COBEOptions = {
      ...DEFAULT_CONFIG,
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
    };

    const globe = createGlobe(canvas, initial);

    let raf = 0;
    const tick = () => {
      if (pointerStart.current === null) {
        phiRef.current += autoRotate;
      }
      currentR.current += (targetR.current - currentR.current) * 0.08;
      globe.update({
        phi: phiRef.current + currentR.current,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", measure);
    };
  }, [autoRotate, config]);

  const setCursor = (grabbing: boolean) => {
    if (canvasRef.current) {
      canvasRef.current.style.cursor = grabbing ? "grabbing" : "grab";
    }
  };

  return (
    <div className={"relative aspect-square w-full " + className}>
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
