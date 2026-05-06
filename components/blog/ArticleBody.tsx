import type { Article } from "@/lib/blog";

export default function ArticleBody({ article }: { article: Article }) {
  return (
    <article className="bg-white px-4 pt-12 pb-16 sm:px-8 sm:pt-16 md:px-16">
      <div className="mx-auto max-w-[760px]">
        {article.sections.map((s, idx) => (
          <section key={idx} className="mt-12 first:mt-0">
            {s.title && (
              <h2 className="mb-6 text-[26px] leading-[1.15] tracking-[-0.03em] text-black sm:text-[32px]">
                {s.title}
              </h2>
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
