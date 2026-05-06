import type { Article, Tool } from "@/lib/blog";

export default function ArticleToolCTA({
  article,
  tool,
}: {
  article: Article;
  tool: Tool;
}) {
  const isFr = article.locale === "fr";
  const headline = isFr ? tool.cta.headlineFr : tool.cta.headlineEn;
  const description = isFr ? tool.cta.descriptionFr : tool.cta.descriptionEn;
  const button = isFr ? tool.cta.buttonFr : tool.cta.buttonEn;
  const href = tool.path ?? tool.externalUrl ?? "#";
  const isExternal = href.startsWith("http");

  return (
    <section className="bg-white px-4 py-10 sm:px-8 sm:py-14 md:px-16">
      <div className="mx-auto max-w-[760px]">
        <div className="relative overflow-hidden rounded-2xl bg-[#070a33] px-6 py-8 text-white sm:px-10 sm:py-10">
          <div className="absolute -right-12 -top-12 size-48 rounded-full bg-daftime-yellow/30 blur-3xl" />
          <div className="relative flex flex-col gap-5">
            <h3 className="text-[24px] leading-tight tracking-[-0.02em] sm:text-[28px]">
              {headline || tool.title}
            </h3>
            {description && (
              <p className="max-w-[520px] text-[15px] leading-relaxed text-white/75 sm:text-[16px]">
                {description}
              </p>
            )}
            <a
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="btn-pill cta-shimmer self-start bg-daftime-yellow text-[#070a33] hover:opacity-95"
            >
              {button || tool.title}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path
                  d="M1 5h12M9 1l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
