"use client";

import { useEffect, useState } from "react";
import type { Article } from "@/lib/blog";

const labels = {
  en: "On this page",
  fr: "Sur cette page",
};

export default function ArticleTOC({ article }: { article: Article }) {
  // Build the TOC entries from sections that have a title
  const items = article.sections
    .map((s, idx) => ({ idx, title: s.title }))
    .filter((s) => s.title);

  const [active, setActive] = useState<number | null>(
    items[0]?.idx ?? null,
  );

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section most in view among those currently intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = Number(
            (visible[0].target as HTMLElement).dataset.sectionIdx,
          );
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    items.forEach((s) => {
      const el = document.getElementById(`section-${s.idx}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label={labels[article.locale]} className="text-[14px]">
      <span className="flex items-center gap-2">
        <span className="size-1 rounded-full bg-daftime-yellow" />
        <span className="label-mono text-[#070a33]">
          {labels[article.locale]}
        </span>
      </span>
      <ol className="mt-5 flex flex-col gap-1.5">
        {items.map((s, i) => {
          const isActive = active === s.idx;
          return (
            <li key={s.idx} className="relative">
              {/* indicator bar */}
              <span
                aria-hidden
                className={
                  "absolute left-0 top-1.5 h-[calc(100%-12px)] w-[2px] rounded-full transition-colors " +
                  (isActive ? "bg-daftime-yellow" : "bg-black/[0.08]")
                }
              />
              <a
                href={`#section-${s.idx}`}
                className={
                  "block py-1 pl-4 pr-1 text-[13px] leading-snug tracking-tight transition-colors " +
                  (isActive
                    ? "text-black"
                    : "text-[#595959] hover:text-black")
                }
              >
                <span className="mr-1.5 font-mono text-[11px] tracking-[0.06em] text-[#919191]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
