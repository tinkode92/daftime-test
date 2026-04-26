"use client";

import { useEffect, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most-visible card
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = cardRefs.current.findIndex(
            (el) => el === visible.target,
          );
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-[1152px] grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
        {/* Sticky left column */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-daftime-yellow">
            <span className="size-1 rounded-full bg-daftime-yellow" />
            What covers
          </span>
          <h2 className="h-display mt-3 text-balance text-daftime-dark">
            What this guide is about
          </h2>
          <p className="mt-5 max-w-[320px] text-[14px] leading-relaxed text-daftime-gray-text">
            A structured editorial overview of the legal, financial, and
            strategic foundations required to build and grow a company in the
            UAE.
          </p>

          {/* Section indicator nav (mobile-hidden) */}
          <nav className="mt-8 hidden flex-col gap-2 lg:flex" aria-label="Guide sections">
            {sections.map((s, i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => {
                    cardRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className={`flex items-center gap-3 rounded-lg px-2 py-1.5 text-left text-[14px] transition-colors ${
                    active
                      ? "bg-daftime-yellow-light text-daftime-dark"
                      : "text-daftime-gray-text hover:text-daftime-dark"
                  }`}
                >
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] transition-colors ${
                      active
                        ? "bg-daftime-dark text-white"
                        : "bg-daftime-gray-bg text-daftime-gray-text"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {s.title}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right column: cards with timeline */}
        <div className="relative">
          {/* Vertical dotted line */}
          <div className="pointer-events-none absolute left-[15px] top-2 bottom-2 hidden border-l border-dashed border-daftime-gray-border lg:block" />

          <div className="flex flex-col gap-12">
            {sections.map((s, i) => {
              const active = i === activeIndex;
              return (
                <div
                  key={s.title}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="relative scroll-mt-32"
                >
                  {/* Number bullet */}
                  <span
                    className={`absolute -left-px top-6 hidden size-8 -translate-x-1/2 items-center justify-center rounded-full text-[13px] font-medium transition-all lg:flex ${
                      active
                        ? "bg-daftime-dark text-white"
                        : "bg-white text-daftime-gray-mute ring-1 ring-daftime-gray-border"
                    }`}
                  >
                    {i + 1}
                  </span>

                  <div className="relative overflow-hidden rounded-3xl border border-daftime-gray-border bg-daftime-gray-light p-6 sm:p-8 lg:ml-12">
                    {/* Decorative yellow leaf */}
                    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-40">
                      <YellowLeaf />
                    </div>
                    <div className="relative">
                      <h3 className="text-[36px] leading-tight tracking-tight text-daftime-dark">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-[560px] text-[14px] leading-relaxed text-daftime-gray-text sm:text-[15px]">
                        {s.description}
                      </p>

                      <div className="mt-8">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-daftime-gray-mute">
                          Key topics include:
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.topics.map((t) => (
                            <Topic key={t} active={active}>
                              {t}
                            </Topic>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Topic({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px] tracking-tight transition-colors ${
        active
          ? "bg-white text-daftime-dark ring-1 ring-daftime-gray-border"
          : "bg-daftime-gray-bg text-daftime-gray-text"
      }`}
    >
      <span
        className={`flex size-5 items-center justify-center rounded-full ${
          active ? "bg-daftime-yellow text-black" : "bg-daftime-dark text-white"
        }`}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path
            d="M5 1.5v7M1.5 5h7M2.5 2.5l5 5M7.5 2.5l-5 5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {children}
    </span>
  );
}

function YellowLeaf() {
  return (
    <svg
      width="380"
      height="240"
      viewBox="0 0 380 240"
      fill="none"
      aria-hidden
    >
      <path
        d="M40 200 Q160 40 360 30 Q320 160 100 220 Z"
        fill="#d6b303"
        opacity="0.45"
      />
    </svg>
  );
}
