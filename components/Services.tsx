"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import { t, type Locale } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";

type ServiceKey = "legal" | "advisory" | "accounting";

const order: ServiceKey[] = ["legal", "advisory", "accounting"];

// Compass needle natural direction is south-west (lower-left), which
// matches the "Legal" label position. Following the existing SVG
// convention (negative deg rotates the needle tip CW around the
// dial), we map each label position to:
//   legal      → SW (default)        → 0
//   advisory   → SE  (CCW 90°)       → -90
//   accounting → N   (CCW 225°)      → -225
// (-225 instead of +135 so the rotation animates through the
// advisory/east arc rather than re-crossing legal.)
const compassRotation: Record<ServiceKey, number> = {
  legal: 0,
  advisory: -90,
  accounting: -225,
};

export default function Services({ locale = "en" }: { locale?: Locale }) {
  const [active, setActive] = useState<ServiceKey>("legal");
  const effectiveLocale = useEffectiveLocale(locale);
  const tr = t(effectiveLocale).services;

  const activeIdx = order.indexOf(active);
  const goTo = (delta: number) => {
    const next = (activeIdx + delta + order.length) % order.length;
    setActive(order[next]);
  };

  return (
    <section id="what" className="bg-white px-2 pt-3 sm:px-4 sm:pt-4">
      <div className="relative overflow-hidden rounded-2xl bg-black">
        {/* Vertical lines decoration */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1176px] -translate-x-1/2 justify-between md:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-white/[0.04]" />
          ))}
        </div>

        {/* Header: eyebrow left, heading right */}
        <div className="relative flex flex-col items-start justify-between gap-4 px-5 pt-8 sm:gap-6 sm:px-7 sm:pt-9 md:flex-row md:items-center md:px-9 md:pt-10">
          <Reveal className="flex shrink-0 items-center gap-2">
            <div className="size-1 rounded-full bg-white" />
            <p className="label-mono text-white">{tr.eyebrow}</p>
          </Reveal>
          <Reveal as="h2" delay={120} className="min-w-0 max-w-[720px] flex-1">
            <span className="block text-balance text-[28px] leading-[1.1] tracking-[-0.04em] text-white sm:text-[34px] md:text-right md:text-[40px]">
              {tr.heading}
            </span>
          </Reveal>
        </div>

        {/* Body: text left, compass right */}
        <div className="relative grid grid-cols-1 gap-8 px-5 pb-10 pt-8 sm:px-7 sm:pb-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:items-center md:gap-10 md:px-9 md:pb-14 md:pt-10">
          {/* Left column */}
          <Reveal className="flex flex-col gap-8 md:gap-[60px]">
            <div className="flex flex-col gap-4">
              <p
                key={`num-${active}`}
                className="fade-up text-[52px] leading-[1.05] tracking-[-0.04em] text-[#3f3d3d] sm:text-[64px] md:text-[80px]"
              >
                {String(activeIdx + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-col gap-3 text-white">
                <h3
                  key={`title-${active}`}
                  className="fade-up text-[32px] leading-[1.1] tracking-[-0.04em] text-white sm:text-[38px] md:text-[44px]"
                >
                  {tr.cards[active].title}
                </h3>
                <p
                  key={`desc-${active}`}
                  className="fade-up max-w-[480px] text-[15px] leading-[1.4] tracking-tight text-white/90 sm:text-[16px] md:text-[18px]"
                >
                  {tr.cards[active].description}
                </p>
              </div>
            </div>
            {/* Pagination */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous service"
                onClick={() => goTo(-1)}
                className="flex size-9 items-center justify-center rounded-lg bg-white text-black transition-opacity hover:opacity-90"
              >
                <ArrowIcon className="rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next service"
                onClick={() => goTo(1)}
                className="flex size-9 items-center justify-center rounded-lg bg-white text-black transition-opacity hover:opacity-90"
              >
                <ArrowIcon />
              </button>
            </div>
          </Reveal>

          {/* Right column: compass + labels */}
          <Reveal
            delay={120}
            className="relative mx-auto aspect-square w-full max-w-[420px]"
          >
            {/* Accounting label — top center */}
            <CompassLabel
              label={tr.cards.accounting.title}
              active={active === "accounting"}
              onActivate={() => setActive("accounting")}
              className="absolute left-1/2 top-0 -translate-x-1/2"
            />

            {/* Compass */}
            <div className="absolute left-1/2 top-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="aspect-square"
                animate={{ rotate: compassRotation[active] }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: "transform" }}
              >
                <Image
                  src="/assets/compass.svg"
                  alt=""
                  width={309}
                  height={309}
                  className="size-full object-contain"
                  priority={false}
                />
              </motion.div>
            </div>

            {/* Legal — bottom-left */}
            <CompassLabel
              label={tr.cards.legal.title}
              active={active === "legal"}
              onActivate={() => setActive("legal")}
              className="absolute bottom-0 left-0"
            />

            {/* Advisory — bottom-right */}
            <CompassLabel
              label={tr.cards.advisory.title}
              active={active === "advisory"}
              onActivate={() => setActive("advisory")}
              className="absolute bottom-0 right-0"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CompassLabel({
  label,
  active,
  onActivate,
  className,
}: {
  label: string;
  active: boolean;
  onActivate: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={
        (className || "") +
        " whitespace-nowrap text-[22px] leading-[1.1] tracking-[-0.04em] transition-colors duration-300 sm:text-[28px] md:text-[34px] " +
        (active ? "text-daftime-yellow" : "text-white hover:text-white/80")
      }
    >
      {label}
    </button>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M2.5 6h7M6.5 2.5L10 6l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
