import Image from "next/image";
import Navigation from "@/components/Navigation";
import type { Article } from "@/lib/blog";

const labels = {
  en: {
    back: "← Back to insights",
    readTime: "min read",
    eyebrow: "Insights",
  },
  fr: {
    back: "← Retour aux articles",
    readTime: "min de lecture",
    eyebrow: "Ressources",
  },
};

export default function ArticleHero({ article }: { article: Article }) {
  const l = labels[article.locale];

  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
        {/* Atmospheric backdrop — subtle so it doesn't fight the content */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/cta-bg.png"
            alt=""
            fill
            priority
            className="object-cover opacity-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
        </div>

        {/* Yellow glow + vertical lines, mirroring Hero / GuideHero */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-[420px] rounded-full bg-daftime-yellow/12 blur-[120px]" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1100px] -translate-x-1/2 justify-between md:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-white/[0.04]" />
          ))}
        </div>

        <div className="relative flex min-h-[480px] flex-col px-4 pt-5 pb-12 sm:px-6 sm:pt-7 sm:pb-16 md:min-h-[540px] md:px-10 md:pt-9 md:pb-20">
          <div className="flex justify-center">
            <Navigation />
          </div>

          <div className="mx-auto mt-14 flex w-full max-w-[920px] flex-1 flex-col gap-7 sm:mt-20">
            {/* Eyebrow + back link */}
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-daftime-yellow" />
                <span className="label-mono text-daftime-yellow">
                  {l.eyebrow}
                </span>
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

            <h1 className="h-hero max-w-[18ch] text-balance fade-up text-white">
              {article.title}
            </h1>

            <div
              className="fade-up flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] tracking-tight text-white/60"
              style={{ animationDelay: "120ms" }}
            >
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
      </div>

      {/* Cover image — own rounded card, NOT overlapping the dark hero */}
      {article.image && (
        <div className="mx-auto mt-3 max-w-[1176px] sm:mt-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-daftime-gray-card sm:rounded-3xl">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1152px) 1152px, 100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
