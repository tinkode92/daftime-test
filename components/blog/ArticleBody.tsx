import type { Article } from "@/lib/blog";

export default function ArticleBody({ article }: { article: Article }) {
  return (
    <article className="bg-white px-4 pt-12 pb-16 sm:px-8 sm:pt-16 md:px-16 md:pb-24">
      <div className="mx-auto max-w-[760px]">
        {article.sections.map((s, idx) => (
          <section
            key={idx}
            className={
              "mt-14 first:mt-0 " +
              (s.title ? "scroll-mt-24" : "")
            }
            id={s.title ? `section-${idx}` : undefined}
          >
            {s.title && (
              <header className="mb-6 flex flex-col gap-3">
                <span className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-daftime-yellow" />
                  <span className="label-mono text-[#070a33]">
                    {String(idx).padStart(2, "0")}
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
        ))}
      </div>
    </article>
  );
}
