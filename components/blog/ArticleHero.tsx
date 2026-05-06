import Image from "next/image";
import type { Article } from "@/lib/blog";

const labels = {
  en: { back: "← Back to blog", readTime: "min read", published: "Published" },
  fr: { back: "← Retour au blog", readTime: "min de lecture", published: "Publié le" },
};

export default function ArticleHero({ article }: { article: Article }) {
  const l = labels[article.locale];
  const backHref = "/#blog";
  return (
    <header className="bg-white px-4 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-16 md:px-16">
      <div className="mx-auto flex max-w-[920px] flex-col gap-8">
        <a
          href={backHref}
          className="self-start font-mono text-[12px] uppercase tracking-[0.12em] text-[#595959] transition-colors hover:text-black"
        >
          {l.back}
        </a>

        {article.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {article.categories.map((c) => (
              <span
                key={c}
                className="rounded-full bg-daftime-yellow-light px-3 py-1 font-mono text-[12px] uppercase tracking-[0.08em] text-[#070a33]"
              >
                {c}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-[32px] leading-[1.1] tracking-[-0.04em] text-black sm:text-[44px] md:text-[52px]">
          {article.title}
        </h1>

        {article.tldr && (
          <p className="text-[17px] leading-[1.55] tracking-tight text-[#404040] sm:text-[18px]">
            {article.tldr}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-daftime-gray-border py-4 text-[14px] tracking-tight text-[#595959]">
          {article.author.name && (
            <span className="text-black">{article.author.name}</span>
          )}
          {article.date && (
            <span>
              {l.published} {article.date}
            </span>
          )}
          {article.readingTime && (
            <span>
              {article.readingTime} {l.readTime}
            </span>
          )}
        </div>

        {article.image && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-daftime-gray-card">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 920px, 100vw"
            />
          </div>
        )}
      </div>
    </header>
  );
}
