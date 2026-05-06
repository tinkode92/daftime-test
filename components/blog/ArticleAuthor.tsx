import Image from "next/image";
import type { Article } from "@/lib/blog";

const labels = {
  en: { eyebrow: "Written by" },
  fr: { eyebrow: "Écrit par" },
};

export default function ArticleAuthor({ article }: { article: Article }) {
  const a = article.author;
  if (!a.name) return null;
  const l = labels[article.locale];
  return (
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:px-16">
      <div className="mx-auto flex max-w-[760px] flex-col gap-6 rounded-2xl bg-daftime-gray-bg p-6 sm:flex-row sm:p-8">
        {a.image && (
          <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-daftime-gray-card sm:size-24">
            <Image
              src={a.image}
              alt={a.imageAlt || a.name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-[#595959]">
            {l.eyebrow}
          </span>
          <h3 className="text-[20px] leading-tight tracking-tight text-black sm:text-[24px]">
            {a.name}
          </h3>
          {a.description && (
            <p className="text-[14px] leading-[1.55] tracking-tight text-[#595959] sm:text-[15px]">
              {a.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
