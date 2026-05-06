"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ToolEmbed from "./ToolEmbed";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";
import type { Tool } from "@/lib/blog";

const ui = {
  en: {
    eyebrow: "UAE tool",
    bookCall: "Talk to an expert",
    backToBlog: "← Back to insights",
  },
  fr: {
    eyebrow: "Outil UAE",
    bookCall: "Parler à un expert",
    backToBlog: "← Retour aux articles",
  },
};

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1oFNxdK2fpuC4-T5Up6Pjn8hOUfYsylts0SpYM9qh3SY8elkuZZoQBOHaKiwKUy7kZYMvD1ZAb?gv=true";

export default function ToolShell({ tool }: { tool: Tool }) {
  const locale = useEffectiveLocale("en");
  const isFr = locale === "fr";
  const t = ui[isFr ? "fr" : "en"];
  const headline = isFr ? tool.cta.headlineFr : tool.cta.headlineEn;
  const description = isFr ? tool.cta.descriptionFr : tool.cta.descriptionEn;
  const button = isFr ? tool.cta.buttonFr : tool.cta.buttonEn;

  // Static iframe filename derived from the URL path
  const fileSlug = tool.path ? tool.path.replace(/^\//, "") : null;

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Daftime-style rounded dark hero */}
      <section className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="relative overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/assets/cta-bg.png"
              alt=""
              fill
              priority
              className="object-cover opacity-[0.32]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/55 to-black/85" />
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 size-[420px] rounded-full bg-daftime-yellow/12 blur-[120px]" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1100px] -translate-x-1/2 justify-between md:flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-full w-px bg-white/[0.04]" />
            ))}
          </div>

          <div className="relative flex min-h-[440px] flex-col px-4 pt-5 pb-12 sm:px-6 sm:pt-7 sm:pb-16 md:min-h-[500px] md:px-10 md:pt-9 md:pb-20">
            <div className="flex justify-center">
              <Navigation />
            </div>

            <div className="mx-auto mt-12 flex w-full max-w-[1100px] items-center justify-between gap-4 sm:mt-16">
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-daftime-yellow" />
                <span className="label-mono text-daftime-yellow">
                  {t.eyebrow}
                </span>
              </span>
              <a
                href="/#blog"
                className="font-mono text-[12px] uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-daftime-yellow"
              >
                {t.backToBlog}
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-8 flex w-full max-w-[860px] flex-1 flex-col items-center gap-5 text-center sm:mt-10"
            >
              <h1 className="h-hero text-balance text-white">{tool.title}</h1>
              {headline && (
                <p className="max-w-[620px] text-[15px] leading-relaxed text-white/70 sm:text-[17px]">
                  {headline}
                </p>
              )}
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill cta-shimmer mt-2 bg-daftime-yellow text-[#070a33] hover:opacity-95"
              >
                {button || t.bookCall}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embedded tool */}
      {fileSlug && (
        <section className="bg-white pt-10 sm:pt-14 md:pt-16">
          <ToolEmbed slug={fileSlug} />
        </section>
      )}

      {/* Helper context paragraph */}
      {description && (
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:px-16">
          <div className="mx-auto max-w-[760px] rounded-2xl bg-daftime-gray-bg px-6 py-6 sm:px-8 sm:py-8">
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-[#070a33]" />
              <span className="label-mono text-[#070a33]">
                {isFr ? "À retenir" : "Good to know"}
              </span>
            </span>
            <p className="mt-3 text-[15px] leading-relaxed tracking-tight text-[#404040] sm:text-[16px]">
              {description}
            </p>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
