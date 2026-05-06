import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleFAQ from "@/components/blog/ArticleFAQ";
import ArticleAuthor from "@/components/blog/ArticleAuthor";
import ArticleToolCTA from "@/components/blog/ArticleToolCTA";
import { getArticle, getArticleSlugs, getToolBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getArticleSlugs("").map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug, "");
  if (!article) return {};
  return {
    title: article.title,
    description: article.description || article.tldr,
    openGraph: {
      title: article.title,
      description: article.description || article.tldr,
      images: article.image ? [{ url: article.image }] : undefined,
      type: "article",
      locale: article.locale === "fr" ? "fr_FR" : "en_US",
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug, "");
  if (!article) notFound();
  const tool = article.tool ? getToolBySlug(article.tool) : null;
  return (
    <main className="min-h-screen w-full bg-white">
      <Navigation />
      <ArticleHero article={article} />
      <ArticleBody article={article} />
      {tool && <ArticleToolCTA article={article} tool={tool} />}
      <ArticleFAQ article={article} />
      <ArticleAuthor article={article} />
      <Footer locale={article.locale === "fr" ? "fr" : "en"} />
    </main>
  );
}
