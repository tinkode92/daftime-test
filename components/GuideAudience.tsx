import Image from "next/image";

const dotPattern = {
  backgroundImage:
    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
  backgroundSize: "16px 16px",
};

export default function GuideAudience() {
  return (
    <section className="bg-daftime-gray-bg px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto flex max-w-[1152px] flex-col gap-10">
        {/* Header */}
        <div className="flex max-w-[494px] flex-col gap-4">
          <span className="flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.18em] text-daftime-dark">
            <span className="size-1 bg-daftime-dark" />
            Who It for
          </span>
          <h2 className="h-display text-balance text-daftime-dark">
            Who this guide is for
          </h2>
          <p className="text-[16px] leading-[1.5] tracking-tight text-daftime-gray-text">
            A publication designed for decision-makers structuring, operating,
            or expanding businesses in the United Arab Emirates.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card
            title="Entrepreneurs"
            description="Structuring or restructuring their presence in the UAE and seeking clarity on Free Zone, Mainland, compliance, and long-term flexibility."
            illustration={<EntrepreneursViz />}
          />
          <Card
            title="Executives"
            description="Leading expansion into the Emirates and requiring alignment between legal architecture, fiscal obligations, and governance frameworks."
            illustration={<ExecutivesViz />}
          />
          <Card
            title="Investors"
            description="Assessing regulatory exposure, economic substance, and structural coherence before committing capital."
            illustration={<InvestorsViz />}
          />
          <Card
            title="Founders & Business Owners"
            description="Navigating Corporate Tax developments and ensuring their structure remains aligned with long-term growth objectives."
            illustration={<FoundersViz />}
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  description,
  illustration,
}: {
  title: string;
  description: string;
  illustration: React.ReactNode;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white">
      <div
        className="relative aspect-[16/11] overflow-hidden"
        style={dotPattern}
      >
        {illustration}
      </div>
      <div className="flex flex-col gap-2 bg-white p-6 drop-shadow-[0_-2px_5px_rgba(240,240,240,0.24)]">
        <h3 className="text-[28px] leading-[1.1] tracking-[-0.04em] text-black">
          {title}
        </h3>
        <p className="text-[14px] leading-[1.5] tracking-tight text-daftime-gray-text">
          {description}
        </p>
      </div>
    </article>
  );
}

/* ----------- UAE flag SVG ----------- */
function UAEFlag({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="6" height="24" fill="#FF0000" />
      <rect x="6" width="18" height="8" fill="#00732F" />
      <rect x="6" y="8" width="18" height="8" fill="white" />
      <rect x="6" y="16" width="18" height="8" fill="black" />
    </svg>
  );
}

function FloatingTile({
  children,
  className = "",
  size = "size-[80px]",
}: {
  children: React.ReactNode;
  className?: string;
  size?: string;
}) {
  return (
    <div
      className={`flex ${size} items-center justify-center rounded-[18px] border-[1.5px] border-white/60 bg-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12),0_2px_0_-1px_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ============= 1. Entrepreneurs ============= */
function EntrepreneursViz() {
  return (
    <div className="absolute inset-0">
      {/* Avatar pill */}
      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-white/60 bg-white/70 p-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] backdrop-blur-md">
        <div className="size-7 overflow-hidden rounded-full bg-daftime-gray-light">
          <Image
            src="/assets/avatar-1.png"
            alt=""
            width={28}
            height={28}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pr-2 text-left leading-tight">
          <p className="text-[10px] font-medium text-daftime-dark">
            Entrepreneur
          </p>
          <p className="text-[9px] text-daftime-gray-mute">
            16:32<span className="text-daftime-gray-muter">:24</span>
          </p>
        </div>
        <span className="absolute -right-1 -top-1 size-2 rounded-full bg-emerald-500 ring-2 ring-white" />
      </div>

      {/* Row of icon tiles */}
      <div className="absolute inset-x-0 bottom-10 flex items-center justify-center gap-3 px-6">
        <FloatingTile size="size-[44px]" className="rounded-full">
          <CalendarIcon />
        </FloatingTile>
        <FloatingTile size="size-[64px]">
          <span className="text-[22px] font-semibold text-emerald-600">
            A<span className="text-rose-500">a</span>
          </span>
        </FloatingTile>
        <FloatingTile size="size-[64px]" className="ring-1 ring-daftime-yellow/30">
          <UAEFlag className="h-7 w-7" />
        </FloatingTile>
        <FloatingTile size="size-[64px]">
          <span className="block size-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 ring-2 ring-white" />
        </FloatingTile>
        <FloatingTile size="size-[44px]" className="rounded-full">
          <ChartIcon />
        </FloatingTile>
      </div>
    </div>
  );
}

/* ============= 2. Executives ============= */
function ExecutivesViz() {
  return (
    <div className="absolute inset-0">
      {/* Center hero card */}
      <div className="absolute left-1/2 top-1/2 flex h-[170px] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-[20px] border-[1.5px] border-daftime-gray-border bg-gradient-to-br from-pink-300 via-fuchsia-400 to-orange-300 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.18)]">
        <UAEFlag className="h-9 w-9 drop-shadow-md" />
        <div className="mt-auto h-2 w-full bg-daftime-yellow" />
      </div>

      {/* Left side: Idea pills */}
      <SidePill
        className="left-4 top-6"
        color="bg-fuchsia-100 ring-fuchsia-300/40"
        dot="bg-fuchsia-500"
        label="Idea 1"
        icon={<BrainIcon />}
      />
      <SidePill
        className="left-2 top-1/2 -translate-y-1/2"
        color="bg-sky-100 ring-sky-300/40"
        dot="bg-sky-500"
        label="Idea 2"
        icon={<ImageIcon />}
        active
      />
      <SidePill
        className="bottom-6 left-4"
        color="bg-emerald-100 ring-emerald-300/40"
        dot="bg-emerald-500"
        label="Idea 3"
        icon={<CodeIcon />}
      />

      {/* Right side: Step pills */}
      <SidePill
        className="right-4 top-6"
        color="bg-daftime-gray-bg ring-daftime-gray-border"
        dot="bg-daftime-dark/30"
        label="Legal"
        icon={<FlagIcon />}
      />
      <SidePill
        className="right-2 top-1/2 -translate-y-1/2"
        color="bg-daftime-gray-bg ring-daftime-gray-border"
        dot="bg-daftime-dark/30"
        label="Fiscal"
        icon={<TextIcon />}
      />
      <SidePill
        className="bottom-6 right-4"
        color="bg-daftime-gray-bg ring-daftime-gray-border"
        dot="bg-daftime-dark/30"
        label="Governance"
        icon={<ChartSmallIcon />}
      />

      {/* Connecting lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 280"
        preserveAspectRatio="none"
      >
        <path
          d="M120 50 L160 100 L200 140"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
        />
        <path
          d="M120 230 L160 180 L200 140"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
        />
        <path
          d="M280 50 L240 100 L200 140"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
        />
        <path
          d="M280 230 L240 180 L200 140"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
        />
      </svg>
    </div>
  );
}

function SidePill({
  className,
  color,
  dot,
  label,
  icon,
  active = false,
}: {
  className: string;
  color: string;
  dot: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 p-1.5 pr-3 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.18)] ${active ? "ring-1 ring-daftime-dark/10" : ""} ${className}`}
    >
      <span
        className={`flex size-7 items-center justify-center rounded-lg ring-[1.5px] ${color}`}
      >
        {icon}
      </span>
      <span className="flex flex-col text-left">
        <span className={`size-1.5 rounded-full ${dot}`} aria-hidden />
        <span className="text-[10px] text-daftime-gray-mute">{label}</span>
      </span>
    </div>
  );
}

/* ============= 3. Investors ============= */
function InvestorsViz() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-[260px] rounded-2xl border-[1.5px] border-daftime-gray-border bg-daftime-gray-light p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.08)]">
        {/* Search bar */}
        <div className="flex h-10 items-center gap-2 rounded-full border border-white/60 bg-white px-2 shadow-inner">
          <span className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-daftime-gray-light to-daftime-gray-border">
            <SearchIcon />
          </span>
          <span className="text-[10px] tracking-tight text-daftime-gray-muter">
            Search for save capital
          </span>
        </div>

        {/* Counter */}
        <div className="mt-3 flex items-center gap-2 px-1">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-medium text-daftime-dark">
            128 Business
          </span>
          <span className="ml-auto h-1 w-10 rounded-full bg-daftime-gray-border" />
          <span className="size-3 rounded-full bg-daftime-yellow ring-1 ring-white" />
        </div>

        {/* 2x2 article grid */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-lg bg-white p-1"
            >
              <span className="flex h-7 w-9 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-rose-100 via-yellow-100 to-emerald-100">
                <UAEFlag className="h-4 w-4" />
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <span className="h-1 w-3 rounded bg-daftime-gray-mute/30" />
                <span className="h-1 w-full rounded bg-daftime-gray-mute/15" />
                <span className="h-1 w-1/2 rounded bg-daftime-gray-mute/15" />
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
      {/* Top "Founder" pill */}
      <div className="absolute left-1/2 top-8 flex h-12 w-[200px] -translate-x-1/2 items-center justify-between rounded-xl border border-white/70 bg-white/85 px-4 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.1)] backdrop-blur-md">
        <span className="h-1 w-7 rounded bg-daftime-dark/15" />
        <span className="text-[10px] text-daftime-gray-mute">Founder</span>
        <span className="h-1 w-7 rounded bg-daftime-dark/15" />
      </div>

      {/* Three plan cards */}
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-center gap-2">
        <PlanCard label="Business A" />
        <PlanCard label="Business B" highlighted />
        <PlanCard label="Business C" />
      </div>

      {/* Connecting line from top to middle */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 280"
        preserveAspectRatio="none"
      >
        <path
          d="M200 60 L200 130"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
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
      className={`flex w-[88px] flex-col gap-3 rounded-2xl border-[1.5px] p-3 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.1)] ${
        highlighted
          ? "border-daftime-yellow bg-white scale-110 z-10"
          : "border-daftime-gray-border bg-daftime-gray-light"
      }`}
    >
      <UAEFlag className="h-4 w-4" />
      <div className="flex flex-col gap-1">
        <span className="text-[9px] font-medium text-daftime-dark">
          {label}
        </span>
        <span className="h-1 w-12 rounded bg-daftime-gray-mute/15" />
      </div>
      <span
        className={`h-5 rounded-full ${highlighted ? "bg-daftime-yellow" : "bg-gradient-to-b from-daftime-gray-light to-daftime-gray-border"}`}
      />
      <div className="flex items-center gap-1.5">
        <span className="flex size-4 items-center justify-center rounded-full bg-daftime-gray-bg ring-1 ring-white">
          <CheckIcon />
        </span>
        <span className="flex flex-1 flex-col gap-0.5">
          <span className="h-0.5 w-3 rounded bg-daftime-dark/15" />
          <span className="h-0.5 w-full rounded bg-daftime-gray-mute/15" />
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
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-daftime-gray-mute"
      />
      <path
        d="M5 1.5v3M11 1.5v3M2 6h12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-daftime-gray-mute"
      />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 13V8M8 13V4M13 13V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-daftime-gray-mute"
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
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-daftime-gray-mute"
      />
    </svg>
  );
}
function TextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 4h12M4 8h8M2 12h12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-daftime-gray-mute"
      />
    </svg>
  );
}
function ChartSmallIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 14h12M4 11v3M8 7v7M12 4v10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-daftime-gray-mute"
      />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle
        cx="7"
        cy="7"
        r="4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-daftime-gray-mute"
      />
      <path
        d="M11 11l3 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-daftime-gray-mute"
      />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
      <path
        d="M2 4l1.5 1.5L6.5 2.5"
        stroke="#10b981"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
