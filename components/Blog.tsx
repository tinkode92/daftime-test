"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { t, type Locale } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";
import { type Article, getArticleUrl } from "@/lib/blog";

type Filter = "all" | "en" | "fr";

export default function Blog({
  locale = "en",
  articles,
}: {
  locale?: Locale;
  articles: Article[];
}) {
  const effectiveLocale = useEffectiveLocale(locale);
  const tr = t(effectiveLocale).blog;
  const [filter, setFilter] = useState<Filter>("all");

  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = useMemo(() => {
    if (filter === "all") return articles;
    return articles.filter((a) => a.locale === filter);
  }, [filter, articles]);

  const visible = filtered.slice(0, visibleCount);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: tr.filters.all },
    { id: "en", label: tr.filters.english },
    { id: "fr", label: tr.filters.french },
  ];

  return (
    <section
      id="blog"
      className="bg-daftime-gray-bg px-4 pt-0 pb-12 sm:px-8 sm:pb-16 md:px-16"
    >
      <div className="mx-auto max-w-[1152px]">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="flex flex-col gap-5 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="size-1 bg-[#131313]" />
              <p className="label-mono text-[#070a33]">{tr.eyebrow}</p>
            </div>
            <h2 className="h-display max-w-[668px] text-black">
              {tr.heading}
            </h2>
            <p className="max-w-[482px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text sm:text-[16px]">
              {tr.subtitle}
            </p>
          </Reveal>

          {/* Filter pills */}
          <Reveal delay={120} className="flex flex-wrap items-start gap-2">
            {filters.map((f) => {
              const active = f.id === filter;
              return (
                <button
                  key={f.id}
                  onClick={() => {
                    setFilter(f.id);
                    setVisibleCount(6);
                  }}
                  className={
                    "flex items-center gap-1 rounded-full pl-1 pr-4 py-1 backdrop-blur transition-transform duration-300 hover:scale-105 " +
                    (active ? "bg-daftime-yellow" : "bg-white")
                  }
                >
                  <span
                    className={
                      "flex size-8 items-center justify-center rounded-full " +
                      (active ? "bg-daftime-yellow-dark" : "bg-black")
                    }
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-3.5 fill-white"
                      aria-hidden
                    >
                      <path d="M8 1.5l1.6 4.5h4.7l-3.8 2.9 1.5 4.6L8 11l-3.9 2.5 1.5-4.6L1.7 6h4.7L8 1.5z" />
                    </svg>
                  </span>
                  <span className="px-1 text-[14px] tracking-tight text-[#131313]">
                    {f.label}
                  </span>
                </button>
              );
            })}
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2 sm:mt-12 lg:grid-cols-3">
          {visible.map((a, idx) => (
            <Reveal
              as="article"
              key={a.slug}
              delay={(idx % 3) * 100}
              className="card-hover group flex flex-col overflow-hidden rounded-2xl bg-white"
            >
              <Link
                href={getArticleUrl(a)}
                className="flex h-full flex-col"
              >
                <div className="relative m-3 h-[200px] overflow-hidden rounded-xl bg-daftime-gray-card sm:m-4 sm:h-[228px]">
                  {a.image && (
                    <Image
                      src={a.image}
                      alt={a.imageAlt || a.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#070a33]">
                    {a.locale === "fr" ? "FR" : "EN"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-3 pb-4 pt-3 sm:px-4 sm:pt-4">
                  <h3 className="line-clamp-3 flex-1 text-[18px] leading-tight tracking-tight text-black sm:text-[20px]">
                    {a.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 self-start rounded-xl border border-black/10 bg-black/[0.04] px-5 py-3 text-[14px] tracking-tight text-black transition-colors group-hover:bg-black/10">
                    {tr.readMore}
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
              </Link>
            </Reveal>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + 6)}
              className="flex h-11 items-center justify-center rounded-lg bg-black px-5 text-[14px] tracking-tight text-white transition-all duration-300 hover:scale-[1.03] hover:opacity-90"
            >
              {tr.loadMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
