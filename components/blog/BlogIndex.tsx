"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Article, getArticleUrl } from "@/lib/blog";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";
import type { Locale } from "@/lib/translations";

const ui = {
  en: {
    eyebrow: "Resources",
    heading: "Insights, guides and analysis",
    subtitle:
      "Editorial content from our chartered accountants and lawyers — written for entrepreneurs structuring their business in the UAE.",
    all: "All",
    english: "English",
    french: "Français",
    readMore: "Read article",
    minRead: "min",
    empty: "No articles match this filter yet.",
  },
  fr: {
    eyebrow: "Ressources",
    heading: "Analyses, guides et conseils",
    subtitle:
      "Contenu éditorial signé par nos experts-comptables et avocats — pensé pour les entrepreneurs qui structurent leur activité aux Émirats.",
    all: "Tous",
    english: "English",
    french: "Français",
    readMore: "Lire l'article",
    minRead: "min",
    empty: "Aucun article ne correspond à ce filtre.",
  },
} as const;

type Filter = "all" | "en" | "fr";

export default function BlogIndex({
  articles,
  locale = "en",
}: {
  articles: Article[];
  locale?: Locale;
}) {
  const effective = useEffectiveLocale(locale);
  const t = ui[effective === "pt" ? "en" : effective];
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return articles;
    return articles.filter((a) => a.locale === filter);
  }, [filter, articles]);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t.all },
    { id: "en", label: t.english },
    { id: "fr", label: t.french },
  ];

  return (
    <section className="bg-daftime-gray-bg px-4 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20 md:px-16">
      <div className="mx-auto max-w-[1152px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="size-1 bg-[#131313]" />
              <p className="label-mono text-[#070a33]">{t.eyebrow}</p>
            </div>
            <h1 className="h-display max-w-[668px] text-black">{t.heading}</h1>
            <p className="max-w-[520px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text sm:text-[16px]">
              {t.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-2">
            {filters.map((f) => {
              const active = f.id === filter;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={
                    "rounded-full px-4 py-2 text-[14px] tracking-tight transition-all duration-300 hover:scale-105 " +
                    (active
                      ? "bg-daftime-yellow text-[#131313]"
                      : "bg-white text-[#131313]")
                  }
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-[15px] text-daftime-gray-text">
            {t.empty}
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 sm:mt-12 lg:grid-cols-3">
            {filtered.map((a, idx) => (
              <motion.a
                key={a.slug}
                href={getArticleUrl(a)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: (idx % 6) * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-hover group flex flex-col overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative m-3 h-[200px] overflow-hidden rounded-xl bg-daftime-gray-card sm:m-4 sm:h-[220px]">
                  {a.image ? (
                    <Image
                      src={a.image}
                      alt={a.imageAlt || a.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  ) : null}
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#070a33]">
                    {a.locale === "fr" ? "FR" : "EN"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-3 pb-4 pt-0 sm:px-4">
                  <p className="text-[13px] tracking-tight text-daftime-gray-text">
                    {a.date}
                    {a.readingTime && ` · ${a.readingTime} ${t.minRead}`}
                  </p>
                  <h3 className="mt-2 line-clamp-3 flex-1 text-[18px] leading-tight tracking-tight text-black sm:text-[19px]">
                    {a.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 self-start rounded-xl border border-black/10 bg-black/[0.04] px-4 py-2.5 text-[13px] tracking-tight text-black transition-colors group-hover:bg-black/10">
                    {t.readMore}
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                      <path
                        d="M1 4h7M5 1l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
