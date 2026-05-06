import Image from "next/image";
import Navigation from "@/components/Navigation";
import type { Article } from "@/lib/blog";

const labels = {
  en: {
    back: "← All insights",
    readTime: "min read",
    eyebrow: "Insights",
  },
  fr: {
    back: "← Tous les articles",
    readTime: "min de lecture",
    eyebrow: "Ressources",
  },
};

export default function ArticleHero({ article }: { article: Article }) {
  const l = labels[article.locale];

  return (
    <header className="relative overflow-hidden bg-[#070a33] text-white">
      {/* Decorative glows — match Hero's atmosphere */}
      <div className="pointer-events-none absolute -right-20 -top-20 size-[400px] rounded-full bg-daftime-yellow/12 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 size-[320px] rounded-full bg-white/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Navigation */}
      <div className="relative z-10 px-4 pt-5 sm:px-6 md:px-10 md:pt-7">
        <div className="flex justify-center">
          <Navigation />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-4 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 md:px-16 md:pb-24 md:pt-24">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-7">
          {/* Eyebrow + back link */}
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-daftime-yellow" />
              <span className="label-mono text-daftime-yellow">{l.eyebrow}</span>
            </span>
            <a
              href="/#blog"
              className="font-mono text-[12px] uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-daftime-yellow"
            >
              {l.back}
            </a>
          </div>

          {article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.categories.slice(0, 3).map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-white/80 backdrop-blur"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          <h1 className="h-display max-w-[18ch] text-balance text-white">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] tracking-tight text-white/60">
            {article.date && <span>{article.date}</span>}
            {article.readingTime && (
              <>
                <span className="size-1 rounded-full bg-white/30" aria-hidden />
                <span>
                  {article.readingTime} {l.readTime}
                </span>
              </>
            )}
            <span className="size-1 rounded-full bg-white/30" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-daftime-yellow">
              {article.locale === "fr" ? "Français" : "English"}
            </span>
          </div>
        </div>
      </div>

      {/* Hero image — overlaps into the white section below */}
      {article.image && (
        <div className="relative z-10 px-4 sm:px-8 md:px-16">
          <div className="mx-auto max-w-[1152px]">
            <div className="relative -mb-24 aspect-[16/9] overflow-hidden rounded-2xl bg-daftime-gray-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] sm:-mb-32 sm:rounded-3xl">
              <Image
                src={article.image}
                alt={article.imageAlt || article.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 1152px, 100vw"
              />
            </div>
          </div>
        </div>
      )}

      {/* White spacer matching the image overlap */}
      <div
        className={
          (article.image ? "h-24 sm:h-32 " : "h-0 ") + "bg-white"
        }
        aria-hidden
      />

      {/* Key takeaway callout */}
      {article.tldr && (
        <div className="bg-white px-4 pt-12 sm:px-8 sm:pt-16 md:px-16">
          <div className="mx-auto max-w-[760px]">
            <div className="overflow-hidden rounded-2xl border-l-[3px] border-daftime-yellow bg-daftime-yellow-light px-6 py-5 sm:px-8 sm:py-6">
              <div
                className="prose-daftime text-[16px] leading-relaxed sm:text-[17px]"
                dangerouslySetInnerHTML={{ __html: article.tldr }}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
