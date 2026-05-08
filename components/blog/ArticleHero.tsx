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

function formatDate(raw: string, locale: "en" | "fr"): string {
  if (!raw) return "";
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return raw;
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export default function ArticleHero({ article }: { article: Article }) {
  const l = labels[article.locale];
  const formattedDate = formatDate(article.date, article.locale);

  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
        {/* Atmospheric backdrop */}
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

        {/* Yellow glow + vertical lines */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-[420px] rounded-full bg-daftime-yellow/12 blur-[120px]" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1100px] -translate-x-1/2 justify-between md:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-white/[0.04]" />
          ))}
        </div>

        <div className="relative flex min-h-[480px] flex-col px-4 pt-5 pb-12 sm:px-6 sm:pt-7 sm:pb-16 md:min-h-[540px] md:px-10 md:pt-9 md:pb-20">
          <div className="relative z-50 flex justify-center">
            <Navigation />
          </div>

          {/* Top utility row — eyebrow left, back link right (full width of inner container) */}
          <div className="mx-auto mt-12 flex w-full max-w-[1100px] items-center justify-between gap-4 sm:mt-16">
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

          {/* Centered title block */}
          <div className="mx-auto mt-8 flex w-full max-w-[860px] flex-1 flex-col items-center gap-6 text-center sm:mt-10">
            {article.categories.length > 0 && (
              <div className="fade-up flex flex-wrap justify-center gap-2">
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

            <h1
              className="h-hero fade-up text-balance text-white"
              style={{ animationDelay: "120ms" }}
            >
              {article.title}
            </h1>

            <div
              className="fade-up flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] tracking-tight text-white/60"
              style={{ animationDelay: "240ms" }}
            >
              {formattedDate && <span>{formattedDate}</span>}
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

      {/* Cover image — own rounded card on white below the dark hero */}
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
