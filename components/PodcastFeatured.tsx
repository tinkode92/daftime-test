"use client";

import Image from "next/image";
import { useState } from "react";

const meta = [
  { label: "Founder", value: "Imrane Hanif" },
  { label: "Client", value: "Café-Crème" },
  { label: "Localisation", value: "Dubaï" },
  { label: "Year", value: "2069" },
];

const more = [
  "Was struggling to find a good accounting company",
  "The only true accounting firm in Dubai",
  "Was struggling to find a good accounting company",
];

export default function PodcastFeatured() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-daftime-gray-light px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1152px]">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-daftime-yellow">
              <span className="size-1 rounded-full bg-daftime-yellow" />
              Testimonial
            </span>
            <h2 className="h-display max-w-[560px] text-balance text-daftime-dark">
              Trusted by entrepreneurs around the world
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-relaxed text-daftime-gray-text">
            From cross-border founders to seasoned investors, hear how teams use
            Daftime to grow without friction.
          </p>
        </div>

        {/* Featured card */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-daftime-gray-border bg-white lg:grid-cols-[420px_1fr]">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <Image
              src="/assets/testi-1-bg.png"
              alt="Imrane Hanif"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
          <div className="flex flex-col gap-6 p-6 sm:p-8 md:p-10">
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              aria-hidden
              className="text-daftime-yellow"
            >
              <path
                d="M0 24V14C0 6.27 5.6 0.67 13.33 0v4.27C8.27 4.93 5.07 8.4 4.8 13.33H10.67V24H0zm21.33 0V14c0-7.73 5.6-13.33 13.34-14v4.27c-5.07.66-8.27 4.13-8.54 9.06H32V24H21.33z"
                fill="currentColor"
              />
            </svg>
            <p className="text-[18px] leading-relaxed text-daftime-dark sm:text-[20px]">
              We work with the Daftime team for all of our companies based in
              Dubai. Their professional approach and constant support is exactly
              what international founders need.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-daftime-gray-border pt-6 sm:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-daftime-gray-mute">
                    {m.label}
                  </span>
                  <span className="text-[15px] text-daftime-dark">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expandable rows */}
        <div className="mt-6 flex flex-col gap-3">
          {more.map((label, i) => {
            const open = openIndex === i;
            return (
              <div
                key={`${label}-${i}`}
                className="overflow-hidden rounded-2xl border border-daftime-gray-border bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-daftime-gray-light"
                >
                  <span className="text-[15px] tracking-tight text-daftime-dark">
                    {label}
                  </span>
                  <span
                    className={`flex size-8 items-center justify-center rounded-full bg-daftime-yellow transition-transform ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {open && (
                  <div className="border-t border-daftime-gray-border px-6 py-5 text-[14px] leading-relaxed text-daftime-gray-text">
                    A short interview excerpt from this guest, sharing how
                    Daftime supported their growth across borders.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
