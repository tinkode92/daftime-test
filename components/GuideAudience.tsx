"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const dotPattern = {
  backgroundImage:
    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
  backgroundSize: "14px 14px",
};

export default function GuideAudience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const dotShift = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <section
      ref={sectionRef}
      className="bg-daftime-gray-bg px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto flex max-w-[1152px] flex-col gap-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex max-w-[494px] flex-col gap-4"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-daftime-dark"
          >
            <span className="size-1 bg-daftime-dark" />
            Who It for
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="h-display text-balance text-daftime-dark"
          >
            Who this guide is for
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-[16px] leading-[1.5] tracking-tight text-daftime-gray-text"
          >
            A publication designed for decision-makers structuring, operating,
            or expanding businesses in the United Arab Emirates.
          </motion.p>
        </motion.div>

        {/* 2x2 grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <Card
            title="Entrepreneurs"
            description="Structuring or restructuring their presence in the UAE and seeking clarity on Free Zone, Mainland, compliance, and long-term flexibility."
            illustration={<EntrepreneursViz />}
            dotShift={dotShift}
          />
          <Card
            title="Executives"
            description="Leading expansion into the Emirates and requiring alignment between legal architecture, fiscal obligations, and governance frameworks."
            illustration={<ExecutivesViz />}
            dotShift={dotShift}
          />
          <Card
            title="Investors"
            description="Assessing regulatory exposure, economic substance, and structural coherence before committing capital."
            illustration={<InvestorsViz />}
            dotShift={dotShift}
          />
          <Card
            title="Founders & Business Owners"
            description="Navigating Corporate Tax developments and ensuring their structure remains aligned with long-term growth objectives."
            illustration={<FoundersViz />}
            dotShift={dotShift}
          />
        </motion.div>
      </div>
    </section>
  );
}

function Card({
  title,
  description,
  illustration,
  dotShift,
}: {
  title: string;
  description: string;
  illustration: React.ReactNode;
  dotShift: ReturnType<typeof useTransform<number, string>>;
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 32, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 260, damping: 26 },
        },
      }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 280, damping: 24 },
      }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_18px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_40px_-16px_rgba(0,0,0,0.18)]"
    >
      <div className="relative aspect-[568/405] overflow-hidden bg-white">
        {/* Slow-drifting dot pattern (parallax-ish on scroll) */}
        <motion.div
          aria-hidden
          style={{
            ...dotPattern,
            backgroundPositionY: dotShift,
          }}
          className="absolute inset-0"
        />
        {/* Illustration: zoom-in subtly on hover */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
        >
          {illustration}
        </motion.div>
        {/* Yellow halo glow on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 60%, rgba(214,179,3,0.18), transparent 70%)",
          }}
        />
      </div>
      <div className="flex flex-col gap-2 bg-white p-6 drop-shadow-[0_-2px_5px_rgba(240,240,240,0.24)]">
        <motion.h3
          className="text-[28px] leading-[1.1] tracking-[-0.04em] text-black"
          whileHover={{ x: 2 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
          {title}
        </motion.h3>
        <p className="text-[14px] leading-[1.5] tracking-tight text-daftime-gray-text">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

/* ============= UAE Flag (circle) ============= */
function UAEFlagCircle({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden
      style={{ borderRadius: "50%", overflow: "hidden" }}
    >
      <defs>
        <clipPath id="uae-circle">
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#uae-circle)">
        <rect width="6" height="24" fill="#E2231A" />
        <rect x="6" width="18" height="8" fill="#159040" />
        <rect x="6" y="8" width="18" height="8" fill="#FFFFFF" />
        <rect x="6" y="16" width="18" height="8" fill="#000000" />
      </g>
    </svg>
  );
}


/* ============= 1. Entrepreneurs ============= */
function EntrepreneursViz() {
  return (
    <div className="absolute inset-0 flex items-end">
      <Image
        src="/assets/guide-entrepreneurs.svg"
        alt=""
        width={568}
        height={276}
        className="h-auto w-full select-none"
        priority={false}
      />
    </div>
  );
}

/* ============= 2. Executives ============= */
function ExecutivesViz() {
  return (
    <div className="absolute inset-0 flex items-end">
      <Image
        src="/assets/guide-executives.svg"
        alt=""
        width={568}
        height={276}
        className="h-auto w-full select-none"
        priority={false}
      />
    </div>
  );
}

/* ============= 3. Investors ============= */
function InvestorsViz() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Top stack: small dot + 2 ghost cards */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center">
        <span className="mt-2 size-2 rounded-full bg-daftime-gray-border" />
        <span className="mx-auto mt-1 h-1 w-px bg-daftime-gray-border" />
        <span className="mt-1 h-px w-12 bg-daftime-gray-border" />
        {/* Two stacked ghost card outlines */}
        <div className="relative mt-2 h-12 w-[68%]">
          <div className="absolute inset-x-6 top-0 h-12 rounded-2xl border-[1.5px] border-daftime-gray-border/70" />
          <div className="absolute inset-x-2 top-2 h-12 rounded-2xl border-[1.5px] border-daftime-gray-border/40" />
        </div>
      </div>

      {/* Main card */}
      <div className="absolute inset-x-[14%] top-[20%] rounded-2xl border-[1.5px] border-daftime-gray-border bg-daftime-gray-light p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.08)]">
        {/* Search bar */}
        <div className="flex h-9 items-center gap-2 rounded-full border border-white/80 bg-white px-2 shadow-inner">
          <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-b from-daftime-gray-light to-daftime-gray-border">
            <SearchIcon />
          </span>
          <span className="text-[10px] tracking-tight text-daftime-gray-muter">
            Search for save capital
          </span>
        </div>

        {/* 128 Business */}
        <div className="mt-3 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-medium text-daftime-dark">
            128 Business
          </span>
        </div>

        {/* 2x2 article grid */}
        <div className="mt-2 grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-lg border border-white bg-white p-1 shadow-[0_2px_6px_-2px_rgba(0,0,0,0.06)]"
            >
              <span className="flex h-7 w-9 items-center justify-center overflow-hidden rounded-md bg-[radial-gradient(ellipse_at_top_left,#fda4af_0%,#fed7aa_50%,#fef3c7_100%)]">
                <UAEFlagCircle size={14} />
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <span className="block h-1 w-3 rounded bg-daftime-gray-mute/30" />
                <span className="block h-1 w-full rounded bg-daftime-gray-mute/15" />
                <span className="block h-1 w-1/2 rounded bg-daftime-gray-mute/15" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============= 4. Founders & Business Owners ============= */
function FoundersViz() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/assets/guide-founders.svg"
        alt=""
        fill
        sizes="(min-width: 768px) 568px, 100vw"
        className="object-cover"
        priority={false}
      />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      width={10}
      height={10}
      aria-hidden
      className="text-daftime-gray-muter"
    >
      <circle cx="5" cy="5" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <path
        d="M7.4 7.4 L10 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
