"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import BrandMarquee from "./BrandMarquee";
import LearnMoreModal from "./LearnMoreModal";
import Globe from "./Globe";
import WordReveal from "./motion/WordReveal";
import AnimatedCounter from "./motion/AnimatedCounter";
import MagneticButton from "./motion/MagneticButton";
import { t, type Locale } from "@/lib/translations";

const avatars = [
  { src: "/assets/avatar-1.png", bg: "#ebebeb" },
  { src: "/assets/avatar-2.png", bg: "#ffecc0" },
  { src: "/assets/avatar-3.png", bg: "#c0d5ff" },
  { src: "/assets/avatar-4.png", bg: "#c0eaff" },
  { src: "/assets/avatar-5.png", bg: "#cac0ff" },
  { src: "/assets/avatar-6.png", bg: "#ffc0c5" },
];

const counterFormatter: Record<Locale, (n: number) => string> = {
  en: (n) => `${Math.round(n / 1000)}k+`,
  fr: (n) => `+${Math.round(n / 1000)}k`,
  pt: (n) => `+${Math.round(n / 1000)} mil`,
};

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const [modalOpen, setModalOpen] = useState(false);
  const tr = t(locale).hero;

  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
        {/* Interactive globe (drag to rotate, auto-spins when idle) */}
        <div className="absolute inset-x-0 top-[12%] flex justify-center sm:top-[14%]">
          <div className="aspect-square w-[110%] max-w-[820px] sm:w-[95%] md:w-[80%] lg:w-[70%]">
            <Globe className="size-full" />
          </div>
        </div>

        {/* Vertical lines decoration (hidden on small screens) */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1100px] -translate-x-1/2 justify-between md:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-white/[0.04]" />
          ))}
        </div>

        {/* Bottom blur fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] rounded-b-2xl bg-gradient-to-b from-transparent to-black/50 backdrop-blur-[2px] sm:h-[305px] sm:rounded-b-3xl" />

        <div className="relative flex min-h-[640px] flex-col px-4 pt-5 pb-0 sm:px-6 sm:pt-7 md:min-h-[720px] md:px-10 md:pt-9 lg:min-h-[800px]">
          <div className="flex justify-center">
            <Navigation />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center pt-12 pb-12 text-center sm:pt-16 md:pt-24 md:pb-16">
            {/* Avatars + counter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4"
            >
              <div className="flex">
                {avatars.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.4, x: -8 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.06,
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="-mr-1 size-[24px] overflow-hidden rounded-full border-[3px] border-white/10"
                    style={{ background: a.bg }}
                  >
                    <Image
                      src={a.src}
                      alt=""
                      width={24}
                      height={24}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="flex items-baseline gap-1.5 text-[15px] tracking-tight text-white sm:text-[18px] md:text-[20px]">
                <AnimatedCounter
                  to={12000}
                  duration={1.6}
                  format={counterFormatter[locale]}
                  className="font-semibold"
                />
                <span className="text-white/85">
                  {locale === "fr"
                    ? "collaborations clients"
                    : locale === "pt"
                      ? "colaborações com clientes"
                      : "Client Collaboration"}
                </span>
              </p>
            </motion.div>

            {/* Headline */}
            <WordReveal
              as="h1"
              text={tr.title}
              className="h-hero max-w-[760px] text-balance text-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 max-w-[600px] text-[16px] tracking-tight text-white/90 sm:mt-6 sm:text-[18px] md:text-[20px]"
            >
              {tr.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4"
            >
              <MagneticButton
                onClick={() => setModalOpen(true)}
                className="btn-pill cta-shimmer bg-daftime-yellow text-black hover:opacity-90"
              >
                {tr.learnMore}
                <ArrowRight />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#contact"
                strength={10}
                className="btn-pill border border-white/10 bg-black/10 text-white backdrop-blur hover:bg-white/10"
              >
                {tr.letsTalk}
              </MagneticButton>
            </motion.div>
          </div>

          {/* Brand marquee */}
          <div className="relative">
            <BrandMarquee />
          </div>
        </div>
      </div>

      <LearnMoreModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
