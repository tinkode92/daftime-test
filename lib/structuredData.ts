import type { Article } from "./blog";

const SITE = "https://daftime.ae";
const LOGO_URL = "https://daftime.ae/assets/daftime-logo.svg";
const SAMI_LINKEDIN = "https://www.linkedin.com/in/sami-sehrine-9287b860/";

/**
 * Builds the JSON-LD payload Daftime's SEO consultant supplied —
 * Organization, WebSite, Person (Sami), WebPage, BreadcrumbList,
 * BlogPosting, FAQPage — populated from an Article record.
 *
 * Variables the consultant flagged for runtime substitution:
 *   ARTICLE_URL, META_TITLE, META_DESCRIPTION, FEATURED_IMAGE_URL,
 *   IMAGE_WIDTH, IMAGE_HEIGHT, ARTICLE_BREADCRUMB_TITLE,
 *   ARTICLE_HEADLINE, DATE_PUBLISHED_ISO, DATE_MODIFIED_ISO,
 *   ARTICLE_CATEGORIES, ARTICLE_KEYWORDS, FAQ_Q1..4 / FAQ_A1..4
 *
 * keywords are sourced from `article.keywords` when set (manually
 * curated, eventually editable via Contentful), else fall back to
 * categories.
 */
export function buildArticleStructuredData(article: Article) {
  const path = `${article.urlPrefix}/new-article/${article.slug}`;
  const articleUrl = `${SITE}${path}`;
  const imageUrl = article.image.startsWith("http")
    ? article.image
    : `${SITE}${article.image}`;
  const dateIso = (() => {
    if (!article.date) return "";
    const d = new Date(article.date);
    return Number.isNaN(d.getTime()) ? article.date : d.toISOString();
  })();
  const lang = article.locale === "fr" ? "fr" : "en";
  const keywords =
    article.keywords && article.keywords.length > 0
      ? article.keywords
      : article.categories;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Daftime Accounting L.L.C",
      alternateName: "Daftime",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE}/#logo`,
        url: LOGO_URL,
        contentUrl: LOGO_URL,
        caption: "Daftime Accounting L.L.C",
        inLanguage: "en",
      },
      image: { "@id": `${SITE}/#logo` },
      description:
        "Daftime Accounting L.L.C provides tax, accounting and company setup services for businesses operating in Dubai and the UAE.",
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      sameAs: [
        "https://www.instagram.com/daftime.ae/",
        SAMI_LINKEDIN,
        "https://www.youtube.com/@Daftime",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Daftime",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#sami-sehrine`,
      name: "Sami Sehrine",
      url: SAMI_LINKEDIN,
      sameAs: [SAMI_LINKEDIN],
      worksFor: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${articleUrl}#webpage`,
      url: articleUrl,
      name: `${article.title} - Daftime`,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1280,
        height: 720,
      },
      inLanguage: lang,
      breadcrumb: { "@id": `${articleUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${articleUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE}/#blog`,
        },
        { "@type": "ListItem", position: 3, name: article.title },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id": `${articleUrl}#article`,
      isPartOf: { "@id": `${articleUrl}#webpage` },
      mainEntityOfPage: { "@id": `${articleUrl}#webpage` },
      headline: article.title,
      description: article.description || article.tldr,
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: 1280,
        height: 720,
      },
      ...(dateIso && {
        datePublished: dateIso,
        dateModified: dateIso,
      }),
      author: { "@id": `${SITE}/#sami-sehrine` },
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: lang,
      articleSection: article.categories,
      keywords,
      url: articleUrl,
    },
  ];

  if (article.faqs && article.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${articleUrl}#faq`,
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: stripHtml(f.q),
        acceptedAnswer: {
          "@type": "Answer",
          text: stripHtml(f.a),
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function stripHtml(s: string): string {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
