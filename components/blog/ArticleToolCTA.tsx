import type { Article, Tool } from "@/lib/blog";

const eyebrows = {
  en: "Try the tool",
  fr: "Essayez l'outil",
};

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
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:px-16">
      <div className="mx-auto max-w-[920px]">
        <div className="relative overflow-hidden rounded-3xl bg-daftime-yellow-light p-6 sm:p-10 md:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-daftime-yellow/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 bottom-0 size-32 rounded-full bg-daftime-yellow/20 blur-2xl" />
          <div className="relative flex flex-col gap-5">
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-[#070a33]" />
              <span className="label-mono text-[#070a33]">
                {eyebrows[isFr ? "fr" : "en"]}
              </span>
            </span>
            <h2 className="h-display max-w-[20ch] text-black">
              {headline || tool.title}
            </h2>
            {description && (
              <p className="max-w-[560px] text-[15px] leading-relaxed tracking-tight text-[#404040] sm:text-[16px]">
                {description}
              </p>
            )}
            <a
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="btn-pill cta-shimmer self-start bg-black text-white hover:opacity-90"
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
