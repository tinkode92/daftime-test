"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";
import type { Tool } from "@/lib/blog";

const ui = {
  en: {
    eyebrow: "UAE tool",
    badge: "Interactive tool — beta",
    description:
      "An interactive widget will be plugged in here shortly. In the meantime, our team can run the calculation for you in minutes.",
    primary: "Talk to an expert",
    secondary: "Browse the blog",
  },
  fr: {
    eyebrow: "Outil UAE",
    badge: "Outil interactif — beta",
    description:
      "Le widget interactif sera intégré ici très prochainement. En attendant, notre équipe peut faire le calcul pour vous en quelques minutes.",
    primary: "Parler à un expert",
    secondary: "Voir le blog",
  },
};

export default function ToolShell({ tool }: { tool: Tool }) {
  const locale = useEffectiveLocale("en");
  const isFr = locale === "fr";
  const t = ui[isFr ? "fr" : "en"];
  const headline = isFr ? tool.cta.headlineFr : tool.cta.headlineEn;
  const description = isFr ? tool.cta.descriptionFr : tool.cta.descriptionEn;
  const button = isFr ? tool.cta.buttonFr : tool.cta.buttonEn;

  return (
    <main className="min-h-screen w-full bg-white">
      <Navigation />
      <section className="relative overflow-hidden bg-[#070a33] px-4 pt-28 pb-16 text-white sm:px-8 sm:pt-32 sm:pb-20 md:px-16">
        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-daftime-yellow/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 size-72 rounded-full bg-daftime-yellow/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-[920px] flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            <span className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-daftime-yellow">
              <span className="size-1 rounded-full bg-daftime-yellow" />
              {t.eyebrow}
            </span>
            <h1 className="text-[36px] leading-[1.05] tracking-[-0.04em] sm:text-[52px] md:text-[60px]">
              {tool.title}
            </h1>
            {(headline || description) && (
              <p className="max-w-[640px] text-[16px] leading-relaxed text-white/75 sm:text-[18px]">
                {headline}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-daftime-yellow/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-daftime-yellow">
                {t.badge}
              </span>
            </div>
            <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-white/75 sm:text-[16px]">
              {description || t.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1oFNxdK2fpuC4-T5Up6Pjn8hOUfYsylts0SpYM9qh3SY8elkuZZoQBOHaKiwKUy7kZYMvD1ZAb?gv=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill cta-shimmer bg-daftime-yellow text-[#070a33] hover:opacity-95"
              >
                {button || t.primary}
              </a>
              <a
                href="/#blog"
                className="btn-pill border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                {t.secondary}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
