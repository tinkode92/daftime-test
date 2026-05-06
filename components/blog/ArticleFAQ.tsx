"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Article } from "@/lib/blog";

const labels = {
  en: { eyebrow: "Frequently Asked Questions", heading: "FAQ" },
  fr: { eyebrow: "Questions fréquentes", heading: "FAQ" },
};

export default function ArticleFAQ({ article }: { article: Article }) {
  const [open, setOpen] = useState<number | null>(0);
  const l = labels[article.locale];
  if (article.faqs.length === 0) return null;

  return (
    <section className="bg-daftime-gray-bg px-4 py-16 sm:px-8 sm:py-20 md:px-16">
      <div className="mx-auto flex max-w-[920px] flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-[#070a33]">
            <span className="size-1 rounded-full bg-[#070a33]" />
            {l.eyebrow}
          </span>
          <h2 className="text-[32px] leading-[1.1] tracking-[-0.04em] text-black sm:text-[40px]">
            {l.heading}
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {article.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-daftime-gray-border bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] leading-snug tracking-tight text-black sm:text-[18px]">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid size-7 shrink-0 place-items-center rounded-full bg-black text-white"
                    aria-hidden
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M5.5 1v9M1 5.5h9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className="prose-daftime px-5 pb-5 text-[15px] sm:px-6 sm:pb-6"
                        dangerouslySetInnerHTML={{ __html: f.a }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
