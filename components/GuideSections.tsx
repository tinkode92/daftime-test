"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type Section = {
  title: string;
  description: string;
  topics: string[];
};

const sections: Section[] = [
  {
    title: "Legal",
    description:
      "Setting up the right foundation: choosing the structure, securing visas, and ensuring long-term compliance — from incorporation to restructuring across borders.",
    topics: [
      "Free Zone vs Mainland",
      "Legal structuring",
      "Compliance obligations",
      "Visas & statuses",
      "Restructuring over time",
    ],
  },
  {
    title: "Accounting",
    description:
      "Mastering financial and fiscal obligations in a rapidly evolving regulatory environment. This section clarifies how accounting, VAT, and Corporate Tax work in practice — beyond theory — and how financial coherence protects the business over time.",
    topics: [
      "VAT rules & thresholds",
      "Corporate Tax principles",
      "QFZP regime",
      "Accounting standards",
      "Financial consistency",
    ],
  },
  {
    title: "Advisory",
    description:
      "From data to decision-making. This section focuses on using financial information as a strategic tool, helping founders and executives anticipate risks, pilot performance, and make informed long-term decisions.",
    topics: [
      "Financial analysis",
      "Performance indicators",
      "Reporting & dashboards",
      "Forecasting",
      "Strategic decision-making",
    ],
  },
];

export default function GuideSections() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the entire stack of cards.
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 70%", "end 30%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
    restDelta: 0.001,
  });

  // The dotted timeline gets a yellow "fill" that grows from top to bottom
  // as the user advances through the section.
  const fillHeight = useTransform(progress, (p) => `${Math.min(p, 1) * 100}%`);

  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-[1152px] grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
        {/* Sticky left column */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-daftime-yellow"
          >
            <span className="size-1 rounded-full bg-daftime-yellow" />
            What covers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-display mt-3 text-balance text-daftime-dark"
          >
            What this guide is about
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 max-w-[320px] text-[14px] leading-relaxed text-daftime-gray-text"
          >
            A structured editorial overview of the legal, financial, and
            strategic foundations required to build and grow a company in the
            UAE.
          </motion.p>

          {/* Scroll-driven indicator nav (lg+) */}
          <ScrollIndicator progress={progress} count={sections.length} />
        </div>

        {/* Right column: cards with timeline */}
        <div ref={wrapperRef} className="relative">
          {/* Dotted backbone */}
          <div className="pointer-events-none absolute left-[15px] top-2 bottom-2 hidden border-l border-dashed border-daftime-gray-border lg:block" />
          {/* Yellow fill that follows the scroll */}
          <motion.div
            aria-hidden
            style={{ height: fillHeight }}
            className="pointer-events-none absolute left-[14.5px] top-2 hidden w-[2px] origin-top rounded-full bg-gradient-to-b from-daftime-yellow via-daftime-yellow to-transparent shadow-[0_0_18px_rgba(214,179,3,0.5)] lg:block"
          />

          <div className="flex flex-col gap-12">
            {sections.map((s, i) => (
              <SectionCard
                key={s.title}
                section={s}
                index={i}
                progress={progress}
                total={sections.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Yellow scroll-driven progress timeline shown next to the section titles
 * in the sticky left column. Each row's bullet lights up smoothly as the
 * matching card crosses the center of the viewport.
 */
function ScrollIndicator({
  progress,
  count,
}: {
  progress: ReturnType<typeof useSpring>;
  count: number;
}) {
  return (
    <nav
      className="relative mt-8 hidden flex-col gap-4 lg:flex"
      aria-label="Guide sections"
    >
      <span className="absolute left-[11px] top-2 bottom-2 w-px bg-daftime-gray-border" />
      <motion.span
        aria-hidden
        style={{
          scaleY: useTransform(progress, (p) => Math.min(p, 1)),
        }}
        className="absolute left-[10.5px] top-2 bottom-2 w-[2px] origin-top rounded-full bg-daftime-yellow shadow-[0_0_12px_rgba(214,179,3,0.6)]"
      />
      {sections.map((s, i) => {
        // Per-bullet active threshold based on scroll progress.
        const start = i / count;
        const peak = (i + 0.55) / count;
        return (
          <IndicatorRow
            key={s.title}
            label={s.title}
            index={i}
            progress={progress}
            from={start}
            peak={peak}
          />
        );
      })}
    </nav>
  );
}

function IndicatorRow({
  label,
  index,
  progress,
  from,
  peak,
}: {
  label: string;
  index: number;
  progress: ReturnType<typeof useSpring>;
  from: number;
  peak: number;
}) {
  const intensity = useTransform(progress, [from, peak], [0, 1], {
    clamp: true,
  });
  const bg = useTransform(intensity, (v) =>
    v > 0.5 ? "rgb(13,13,13)" : "rgb(243,243,243)",
  );
  const color = useTransform(intensity, (v) =>
    v > 0.5 ? "rgb(255,255,255)" : "rgb(89,89,89)",
  );
  const labelColor = useTransform(intensity, (v) =>
    v > 0.5 ? "rgb(13,13,13)" : "rgb(89,89,89)",
  );
  const scale = useTransform(intensity, [0, 1], [1, 1.08]);

  return (
    <div className="relative flex items-center gap-3">
      <motion.span
        style={{ background: bg, color, scale }}
        className="flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-medium"
      >
        {index + 1}
      </motion.span>
      <motion.span style={{ color: labelColor }} className="text-[14px]">
        {label}
      </motion.span>
    </div>
  );
}

function SectionCard({
  section,
  index,
  progress,
  total,
}: {
  section: Section;
  index: number;
  progress: ReturnType<typeof useSpring>;
  total: number;
}) {
  const start = index / total;
  const peak = (index + 0.55) / total;
  const intensity = useTransform(progress, [start, peak], [0, 1], {
    clamp: true,
  });

  const bulletBg = useTransform(intensity, (v) =>
    v > 0.5 ? "rgb(13,13,13)" : "rgb(255,255,255)",
  );
  const bulletColor = useTransform(intensity, (v) =>
    v > 0.5 ? "rgb(255,255,255)" : "rgb(115,112,112)",
  );
  const bulletShadow = useTransform(intensity, (v) =>
    v > 0.5
      ? "0 0 0 6px rgba(214,179,3,0.18), 0 8px 18px -6px rgba(0,0,0,0.25)"
      : "inset 0 0 0 1px #e6e5e0",
  );
  const cardLift = useTransform(intensity, [0, 1], [0, -2]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative scroll-mt-32"
    >
      {/* Number bullet */}
      <motion.span
        style={{
          background: bulletBg,
          color: bulletColor,
          boxShadow: bulletShadow,
        }}
        className="absolute -left-px top-6 z-10 hidden size-8 -translate-x-1/2 items-center justify-center rounded-full text-[13px] font-medium lg:flex"
      >
        {index + 1}
      </motion.span>

      <motion.div
        style={{ y: cardLift }}
        className="relative overflow-hidden rounded-3xl border border-daftime-gray-border bg-daftime-gray-light p-6 sm:p-8 lg:ml-12"
      >
        {/* Decorative yellow leaf with parallax */}
        <motion.div
          aria-hidden
          style={{
            x: useTransform(intensity, [0, 1], [40, 0]),
            opacity: useTransform(intensity, [0, 1], [0.2, 0.55]),
          }}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
        >
          <YellowLeaf />
        </motion.div>
        <div className="relative">
          <motion.h3
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[36px] leading-tight tracking-tight text-daftime-dark"
          >
            {section.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-3 max-w-[560px] text-[14px] leading-relaxed text-daftime-gray-text sm:text-[15px]"
          >
            {section.description}
          </motion.p>

          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-daftime-gray-mute">
              Key topics include:
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="mt-3 flex flex-wrap gap-2"
            >
              {section.topics.map((t) => (
                <motion.span
                  key={t}
                  variants={{
                    hidden: { opacity: 0, y: 10, scale: 0.96 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 380,
                        damping: 26,
                      },
                    },
                  }}
                >
                  <Topic intensity={intensity}>{t}</Topic>
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Topic({
  children,
  intensity,
}: {
  children: React.ReactNode;
  intensity: ReturnType<typeof useTransform<number, number>>;
}) {
  const bg = useTransform(intensity, (v) =>
    v > 0.5 ? "rgb(255,255,255)" : "rgb(243,243,243)",
  );
  const color = useTransform(intensity, (v) =>
    v > 0.5 ? "rgb(13,13,13)" : "rgb(89,89,89)",
  );
  const ringBg = useTransform(intensity, (v) =>
    v > 0.5 ? "rgb(214,179,3)" : "rgb(13,13,13)",
  );
  const ringColor = useTransform(intensity, (v) =>
    v > 0.5 ? "rgb(0,0,0)" : "rgb(255,255,255)",
  );

  return (
    <motion.span
      style={{ background: bg, color }}
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px] tracking-tight ring-1 ring-daftime-gray-border"
    >
      <motion.span
        style={{ background: ringBg, color: ringColor }}
        className="flex size-5 items-center justify-center rounded-full"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path
            d="M5 1.5v7M1.5 5h7M2.5 2.5l5 5M7.5 2.5l-5 5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </motion.span>
      {children}
    </motion.span>
  );
}

function YellowLeaf() {
  return (
    <svg width="380" height="240" viewBox="0 0 380 240" fill="none" aria-hidden>
      <path d="M40 200 Q160 40 360 30 Q320 160 100 220 Z" fill="#d6b303" />
    </svg>
  );
}
