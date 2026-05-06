import type { Article } from "@/lib/blog";
import ArticleTOC from "./ArticleTOC";

export default function ArticleBody({ article }: { article: Article }) {
  return (
    <section className="bg-white px-4 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-16 md:pb-24 md:pt-20">
      <div className="mx-auto grid max-w-[1152px] grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
        {/* Sticky TOC on desktop, collapsible at top on mobile */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <details className="group rounded-2xl border border-daftime-gray-border bg-white p-4 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-daftime-yellow" />
                <span className="label-mono text-[#070a33]">
                  {article.locale === "fr"
                    ? "Sur cette page"
                    : "On this page"}
                </span>
              </span>
              <span
                aria-hidden
                className="transition-transform group-open:rotate-45"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-4">
              <ArticleTOC article={article} />
            </div>
          </details>
          <div className="hidden lg:block">
            <ArticleTOC article={article} />
          </div>
        </aside>

        {/* Article content */}
        <div className="min-w-0">
          {/* TLDR / Key takeaway callout sits at the top of the prose */}
          {article.tldr && (
            <div className="mb-12 overflow-hidden rounded-2xl border-l-[3px] border-daftime-yellow bg-daftime-yellow-light px-6 py-5 sm:px-8 sm:py-6">
              <div
                className="prose-daftime text-[16px] leading-relaxed sm:text-[17px]"
                dangerouslySetInnerHTML={{ __html: article.tldr }}
              />
            </div>
          )}

          {article.sections.map((s, idx) => {
            const visibleIdx =
              article.sections.slice(0, idx).filter((x) => x.title).length + 1;
            return (
              <section
                key={idx}
                id={s.title ? `section-${idx}` : undefined}
                data-section-idx={s.title ? idx : undefined}
                className={
                  "mt-14 first:mt-0 " + (s.title ? "scroll-mt-24" : "")
                }
              >
                {s.title && (
                  <header className="mb-6 flex flex-col gap-3">
                    <span className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-daftime-yellow" />
                      <span className="label-mono text-[#070a33]">
                        {String(visibleIdx).padStart(2, "0")}
                      </span>
                    </span>
                    <h2 className="text-[26px] leading-[1.15] tracking-[-0.03em] text-black sm:text-[32px]">
                      {s.title}
                    </h2>
                  </header>
                )}
                <div
                  className="prose-daftime"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
