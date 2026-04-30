"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { t, type Locale } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";

export default function BookConsultationCTA({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const effectiveLocale = useEffectiveLocale(locale);
  const tr = t(effectiveLocale).book;
  return (
    <section id="contact" className="bg-white px-2 pt-3 sm:px-4 sm:pt-4">
      <Reveal
        variant="scale"
        className="relative overflow-hidden rounded-2xl bg-black p-6 sm:p-8 md:p-10"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-60 transition-transform duration-[1500ms] hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative flex min-h-[320px] flex-col justify-between gap-8 sm:min-h-[380px] md:h-[417px]">
          <div className="flex items-center gap-2">
            <div className="size-1 rounded-full bg-white" />
            <p className="label-mono text-white">{tr.eyebrow}</p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="h-display whitespace-pre-line text-white">
              {tr.heading}
            </h2>
            <a
              href="#schedule"
              className="btn-pill cta-shimmer bg-white text-black hover:opacity-90"
            >
              {tr.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
