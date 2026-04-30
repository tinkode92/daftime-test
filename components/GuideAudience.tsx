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
    <div className="absolute inset-0">
      {/* Top avatar pill */}
      <div className="absolute left-1/2 top-[14%] flex -translate-x-1/2 items-center gap-2.5 rounded-xl border border-white/80 bg-white/90 py-2 pl-2 pr-6 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)] backdrop-blur-md">
        <span className="size-7 overflow-hidden rounded-full bg-daftime-gray-light">
          <Image
            src="/assets/avatar-1.png"
            alt=""
            width={28}
            height={28}
            className="h-full w-full object-cover"
          />
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[10px] font-medium text-daftime-dark">
            Enterpreneur
          </span>
          <span className="text-[9px] text-daftime-gray-mute">
            16:32<span className="text-daftime-gray-muter">:24</span>
          </span>
        </span>
      </div>

      {/* Top-right green dot */}
      <span className="absolute right-[14%] top-[12%] size-2 rounded-full bg-emerald-500" />

      {/* Outer rounded frame for the tiles */}
      <div className="absolute inset-x-[18%] bottom-[8%] top-[44%] rounded-[28px] border-[1.5px] border-daftime-gray-border/60" />

      {/* Center cluster: 3 large tiles + 2 small side circles */}
      <div className="absolute inset-x-0 bottom-[14%] flex items-center justify-center gap-3">
        {/* Left small circle - calendar */}
        <span className="flex size-[44px] items-center justify-center rounded-full border border-daftime-gray-border bg-white shadow-[0_4px_10px_-4px_rgba(0,0,0,0.08)]">
          <CalendarIcon />
        </span>

        {/* Aa tile */}
        <FloatingTile>
          <span className="text-[28px] font-semibold leading-none">
            <span className="text-emerald-600">A</span>
            <span className="text-rose-500">a</span>
          </span>
        </FloatingTile>

        {/* UAE flag tile */}
        <FloatingTile>
          <UAEFlagCircle size={34} />
        </FloatingTile>

        {/* Green sphere tile */}
        <FloatingTile>
          <span className="block size-9 overflow-hidden rounded-full bg-gradient-to-br from-white via-emerald-300 to-emerald-700 shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),inset_0_4px_6px_rgba(255,255,255,0.4)]" />
        </FloatingTile>

        {/* Right small circle - chart */}
        <span className="flex size-[44px] items-center justify-center rounded-full border border-daftime-gray-border bg-white shadow-[0_4px_10px_-4px_rgba(0,0,0,0.08)]">
          <ChartIcon />
        </span>
      </div>
    </div>
  );
}

function FloatingTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-[72px] items-center justify-center rounded-[18px] border-[1.5px] border-white bg-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.12),0_2px_0_-1px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]">
      {children}
    </span>
  );
}

/* ============= 2. Executives ============= */
function ExecutivesViz() {
  return (
    <div className="absolute inset-0">
      {/* Connector lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 568 405"
        preserveAspectRatio="none"
      >
        {/* Left side connectors */}
        <path
          d="M150 100 Q220 130 240 200"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
        />
        <path
          d="M130 200 Q200 200 240 200"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
        />
        <path
          d="M150 305 Q220 280 240 220"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
        />
        {/* Right side connectors */}
        <path
          d="M420 100 Q360 130 330 200"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
        />
        <path
          d="M440 200 Q380 200 330 200"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
        />
        <path
          d="M420 305 Q360 280 330 220"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
        />
      </svg>

      {/* Center vertical card */}
      <div className="absolute left-1/2 top-1/2 flex h-[80%] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-[24px] border-[1.5px] border-daftime-gray-border bg-white p-2 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.12)]">
        {/* Gradient image with flag */}
        <div className="flex h-[100px] items-center justify-center overflow-hidden rounded-[16px] bg-[radial-gradient(ellipse_at_top_left,#f9a8d4_0%,#c084fc_45%,#fb923c_100%)]">
          <UAEFlagCircle size={36} />
        </div>
        {/* Placeholder lines */}
        <div className="flex flex-col gap-1.5 px-2 pt-1">
          <span className="h-1 w-8 rounded bg-daftime-gray-mute/20" />
          <span className="h-1 w-full rounded bg-daftime-gray-mute/15" />
          <span className="h-1 w-full rounded bg-daftime-gray-mute/15" />
        </div>
        {/* Yellow CTA */}
        <span className="mt-auto h-6 rounded-full bg-gradient-to-b from-[#f9e99c] to-[#d6b303]" />
      </div>

      {/* Left: Idea pills */}
      <SidePill
        className="left-[6%] top-[14%]"
        icon={<BrainIcon />}
        iconBg="bg-fuchsia-100 ring-fuchsia-300/40"
        dot="bg-fuchsia-500"
        label="Idea 1"
      />
      <SidePill
        className="left-[2%] top-1/2 -translate-y-1/2"
        icon={<ImageIcon />}
        iconBg="bg-sky-100 ring-sky-300/40"
        dot="bg-sky-500"
        label="Idea 2"
        active
      />
      <SidePill
        className="bottom-[14%] left-[6%]"
        icon={<CodeIcon />}
        iconBg="bg-emerald-100 ring-emerald-300/40"
        dot="bg-emerald-500"
        label="Idea 3"
      />

      {/* Right: Step pills */}
      <SidePill
        className="right-[6%] top-[14%]"
        icon={<FlagIcon />}
        iconBg="bg-daftime-gray-bg ring-daftime-gray-border"
        dot="bg-daftime-dark/30"
        label="Legal"
      />
      <SidePill
        className="right-[2%] top-1/2 -translate-y-1/2"
        icon={<TextIcon />}
        iconBg="bg-daftime-gray-bg ring-daftime-gray-border"
        dot="bg-daftime-dark/30"
        label="Fiscal"
      />
      <SidePill
        className="bottom-[14%] right-[6%]"
        icon={<ChartSmallIcon />}
        iconBg="bg-daftime-gray-bg ring-daftime-gray-border"
        dot="bg-daftime-dark/30"
        label="Governance"
      />
    </div>
  );
}

function SidePill({
  className,
  icon,
  iconBg,
  dot,
  label,
  active = false,
}: {
  className: string;
  icon: React.ReactNode;
  iconBg: string;
  dot: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`absolute flex w-[110px] items-center gap-2 rounded-xl border border-white/80 bg-white p-1.5 pr-3 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.18)] ${active ? "scale-105 ring-1 ring-daftime-dark/10" : ""} ${className}`}
    >
      <span
        className={`flex size-7 shrink-0 items-center justify-center rounded-lg ring-[1.5px] ${iconBg}`}
      >
        {icon}
      </span>
      <span className="flex flex-1 flex-col gap-1">
        <span className={`block size-1.5 rounded-full ${dot}`} />
        <span className="text-[10px] text-daftime-gray-mute">{label}</span>
      </span>
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
      {/* Top "Founder" pill with side dashes */}
      <div className="absolute inset-x-0 top-[8%] flex justify-center">
        <div className="flex h-10 w-[200px] items-center justify-between rounded-xl border border-white/80 bg-white/90 px-3 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.1)] backdrop-blur-md">
          <span className="h-1 w-7 rounded bg-daftime-dark/15" />
          <span className="flex h-6 items-center justify-center rounded-full border border-daftime-gray-border px-3 text-[10px] text-daftime-gray-mute">
            Founder
          </span>
          <span className="h-1 w-7 rounded bg-daftime-dark/15" />
        </div>
      </div>

      {/* Outer ghost frames */}
      <div className="pointer-events-none absolute inset-x-[16%] top-[22%] h-12 rounded-2xl border-[1.5px] border-daftime-gray-border/40" />

      {/* Vertical connecting line */}
      <span
        className="pointer-events-none absolute left-1/2 top-[18%] h-[6%] w-px -translate-x-1/2 bg-daftime-gray-border"
        aria-hidden
      />

      {/* Side connecting horizontal lines */}
      <div className="pointer-events-none absolute left-[3%] top-[58%] flex items-center gap-1">
        <span className="block h-px w-3 bg-daftime-gray-border" />
        <span className="block size-1 -rotate-45 border-l border-t border-daftime-gray-border" />
      </div>
      <div className="pointer-events-none absolute right-[3%] top-[58%] flex items-center gap-1">
        <span className="block size-1 rotate-45 border-r border-t border-daftime-gray-border" />
        <span className="block h-px w-3 bg-daftime-gray-border" />
      </div>

      {/* Three plan cards */}
      <div className="absolute inset-x-[10%] bottom-[8%] flex items-end justify-center gap-2">
        <PlanCard label="Business A" />
        <PlanCard label="Business B" highlighted />
        <PlanCard label="Business C" />
      </div>

      {/* Bottom ghost card outline */}
      <div className="pointer-events-none absolute inset-x-[16%] bottom-[4%] h-3 rounded-xl border-b border-l border-r border-daftime-gray-border/40" />
    </div>
  );
}

function PlanCard({
  label,
  highlighted = false,
}: {
  label: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative flex w-[28%] flex-col gap-2 rounded-2xl border-[1.5px] p-3 transition-transform ${
        highlighted
          ? "z-10 -translate-y-2 scale-110 border-transparent bg-white shadow-[0_24px_48px_-16px_rgba(0,0,0,0.18),0_0_0_2px_rgba(247,165,167,0.6)]"
          : "border-daftime-gray-border bg-daftime-gray-light"
      }`}
    >
      {highlighted && (
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-200/30 via-transparent to-orange-200/30" />
      )}
      <UAEFlagCircle size={18} />
      <span className="text-[10px] font-medium text-daftime-dark">{label}</span>
      <span
        className={`mt-1 h-5 rounded-full ${
          highlighted
            ? "bg-gradient-to-b from-[#f9e99c] to-[#d6b303]"
            : "bg-gradient-to-b from-daftime-gray-light to-daftime-gray-border"
        }`}
      />
      <div className="mt-1 flex items-center gap-1.5">
        <span className="flex size-4 items-center justify-center rounded-full bg-white ring-1 ring-daftime-gray-border">
          <CheckIcon />
        </span>
        <span className="flex flex-1 flex-col gap-0.5">
          <span className="block h-0.5 w-3 rounded bg-daftime-dark/15" />
          <span className="block h-0.5 w-full rounded bg-daftime-gray-mute/15" />
        </span>
      </div>
    </div>
  );
}

/* ============= Icons ============= */
function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x="2"
        y="3"
        width="12"
        height="11"
        rx="2"
        stroke="#727272"
        strokeWidth="1.2"
      />
      <path
        d="M5 1.5v3M11 1.5v3M2 6h12"
        stroke="#727272"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 13V8M8 13V4M13 13V10"
        stroke="#727272"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M5 2a2 2 0 00-2 2v1a2 2 0 00-1 3.5A2 2 0 003 12a2 2 0 002 2 2 2 0 002-2V4a2 2 0 00-2-2zM11 2a2 2 0 012 2v1a2 2 0 011 3.5 2 2 0 01-1 3.5 2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2z"
        stroke="#c026d3"
        strokeWidth="1.2"
      />
    </svg>
  );
}
function ImageIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x="2"
        y="3"
        width="12"
        height="10"
        rx="1.5"
        stroke="#0284c7"
        strokeWidth="1.2"
      />
      <circle cx="6" cy="7" r="1" fill="#0284c7" />
      <path d="M14 11l-3-3-7 5" stroke="#0284c7" strokeWidth="1.2" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M5 4L1 8l4 4M11 4l4 4-4 4M9 2l-2 12"
        stroke="#059669"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function FlagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 14V2m0 0h7l1 2h3v6H8l-1-2H3"
        stroke="#727272"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function TextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 4h12M4 8h8M2 12h12"
        stroke="#727272"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M13 3.5L14 2M14 3l-1-.5" stroke="#727272" strokeWidth="1" />
    </svg>
  );
}
function ChartSmallIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 14h12M4 11v3M8 7v7M12 4v10"
        stroke="#727272"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="4.5" stroke="#727272" strokeWidth="1.2" />
      <path d="M11 11l3 3" stroke="#727272" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
      <path
        d="M2 4l1.5 1.5L6.5 2.5"
        stroke="#10b981"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
