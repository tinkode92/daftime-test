"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import TiltCard from "./motion/TiltCard";
import { t, type Locale } from "@/lib/translations";

type ServiceKey = "legal" | "advisory" | "accounting";

const serviceIcons: Record<ServiceKey, string> = {
  legal: "/assets/icon-legal.svg",
  advisory: "/assets/icon-advisory.svg",
  accounting: "/assets/icon-accounting.svg",
};

// Compass needle natural direction is south-west (lower-left).
// Rotating counterclockwise (negative deg) moves the tip clockwise around
// the dial: SW (legal) → S (advisory) → SE (accounting).
const compassRotation: Record<ServiceKey, number> = {
  legal: 0,
  advisory: -45,
  accounting: -90,
};

export default function Services({ locale = "en" }: { locale?: Locale }) {
  const [active, setActive] = useState<ServiceKey>("legal");
  const tr = t(locale).services;
  const orderedServices: ServiceKey[] = ["legal", "advisory", "accounting"];
  const marqueeWords = [
    tr.cards.legal.title,
    tr.cards.advisory.title,
    tr.cards.accounting.title,
    tr.cards.advisory.title,
    tr.cards.legal.title,
    tr.cards.accounting.title,
  ];

  return (
    <section id="what" className="bg-white px-2 pt-3 sm:px-4 sm:pt-4">
      {/* Yellow card with marquee */}
      <div className="relative overflow-hidden rounded-2xl bg-daftime-yellow">
        {/* Vertical lines decoration (hidden on small) */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1176px] -translate-x-1/2 justify-between md:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-black/[0.04]" />
          ))}
        </div>

        {/* Marquee */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
          <div className="marquee-track items-center gap-4 sm:gap-6">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map(
              (word, idx) => (
                <div
                  key={idx}
                  className="flex shrink-0 items-center gap-4 sm:gap-6"
                >
                  <span className="whitespace-nowrap text-[36px] leading-[1.1] tracking-[-0.04em] text-daftime-yellow-dark sm:text-[48px] md:text-[64px]">
                    {word}
                  </span>
                  <span className="size-[10px] shrink-0 rounded-full bg-daftime-yellow-dark/70 sm:size-[13px]" />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Compass (interactive: rotates toward the active service card) */}
        <div className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 sm:top-[36%] md:top-[28%]">
          <div
            className="size-[120px] sm:size-[180px] md:size-[260px] lg:size-[309px]"
            style={{
              transform: `rotate(${compassRotation[active]}deg)`,
              transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/compass.svg"
              alt=""
              width={309}
              height={309}
              className="size-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              priority={false}
            />
          </div>
        </div>

        {/* Header */}
        <div className="relative flex flex-col items-start justify-between gap-6 px-5 pt-10 pb-[260px] sm:gap-8 sm:px-8 sm:pt-12 sm:pb-[340px] md:flex-row md:items-center md:px-10 md:pt-14 md:pb-[420px]">
          <Reveal className="flex shrink-0 items-center gap-2">
            <div className="size-1 rounded-full bg-[#070a33]" />
            <p className="label-mono text-[#070a33]">{tr.eyebrow}</p>
          </Reveal>
          <Reveal as="h2" delay={120} className="min-w-0 flex-1">
            <span className="h-display block text-balance text-black md:text-right">
              {tr.heading}
            </span>
          </Reveal>
        </div>

        {/* Subtext at bottom */}
        <div className="relative px-5 pb-8 sm:px-8 sm:pb-10 md:px-10 md:pb-12">
          <Reveal>
            <p className="text-[18px] leading-snug tracking-tight text-black sm:text-[20px] md:text-[24px]">
              {tr.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Three cards below */}
      <div
        className="grid grid-cols-1 gap-10 px-2 py-12 sm:px-4 md:grid-cols-3 md:gap-12 md:px-12 md:py-16"
        style={{ perspective: 1000 }}
      >
        {orderedServices.map((key, idx) => (
          <Reveal
            key={key}
            delay={idx * 120}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <TiltCard
              intensity={6}
              glare={false}
              className="rounded-2xl"
              style={{ transformStyle: "preserve-3d" } as never}
            >
              <div
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActive(key)}
                onFocus={() => setActive(key)}
                onClick={() => setActive(key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(key);
                  }
                }}
                className={
                  "flex cursor-pointer flex-col gap-5 transition-all duration-300 sm:gap-6 " +
                  (active === key
                    ? "opacity-100"
                    : "opacity-80 hover:opacity-100")
                }
              >
              <div className="flex items-center gap-4 sm:gap-6">
                <div
                  className={
                    "flex size-16 items-center justify-center overflow-hidden rounded-xl border transition-all duration-300 sm:size-20 " +
                    (active === key
                      ? "scale-105 border-daftime-yellow bg-daftime-yellow/15"
                      : "border-daftime-gray-border")
                  }
                >
                  <Image
                    src={serviceIcons[key]}
                    alt=""
                    width={48}
                    height={48}
                    className="size-10 object-contain sm:size-12"
                  />
                </div>
                <h3 className="text-[22px] tracking-tight text-black sm:text-[25px]">
                  {tr.cards[key].title}
                </h3>
              </div>
              <p className="text-[15px] leading-relaxed tracking-tight text-black sm:text-[16px]">
                {tr.cards[key].description}
              </p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
