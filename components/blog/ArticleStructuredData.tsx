import type { Article } from "@/lib/blog";
import { buildArticleStructuredData } from "@/lib/structuredData";

/**
 * Renders the SEO consultant's JSON-LD payload (Organization, WebSite,
 * Person, WebPage, BreadcrumbList, BlogPosting, FAQPage) for an
 * article. Server component — Google sees the script in the initial
 * HTML.
 */
export default function ArticleStructuredData({
  article,
}: {
  article: Article;
}) {
  const data = buildArticleStructuredData(article);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
