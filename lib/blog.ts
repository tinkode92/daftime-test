import data from "@/content/blog/articles.json";

export type ArticleLocale = "en" | "fr";

export type ArticleSection = {
  title: string;
  body: string;
};

export type ArticleFAQ = {
  q: string;
  a: string;
};

export type ArticleAuthor = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Article = {
  slug: string;
  locale: ArticleLocale;
  /** "" for root, "/fr" for /fr-prefixed routes (URL preservation, not language). */
  urlPrefix: "" | "/fr";
  title: string;
  tool: string | null;
  date: string;
  image: string;
  imageAlt: string;
  youtube: string | null;
  tldr: string;
  categories: string[];
  readingTime: string;
  description: string;
  author: ArticleAuthor;
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
};

export type Tool = {
  slug: string;
  title: string;
  content: string;
  path: string | null;
  externalUrl: string | null;
  cta: {
    headlineEn: string;
    headlineFr: string;
    descriptionEn: string;
    descriptionFr: string;
    buttonEn: string;
    buttonFr: string;
  };
};

export type Podcast = {
  slug: string;
  title: string;
  categories: string[];
  image: string;
  imageAlt: string;
  description: string;
  host: string;
  hostAlt: string;
  guestName: string;
  guestPosition: string;
  content: string;
};

const articles = data.articles as Article[];
const tools = data.tools as Tool[];
const podcasts = data.podcasts as Podcast[];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleSlugs(prefix: "" | "/fr"): string[] {
  return articles.filter((a) => a.urlPrefix === prefix).map((a) => a.slug);
}

export function getArticle(slug: string, prefix: "" | "/fr"): Article | null {
  return (
    articles.find((a) => a.slug === slug && a.urlPrefix === prefix) ?? null
  );
}

export function getArticlesByLocale(locale: ArticleLocale): Article[] {
  return articles.filter((a) => a.locale === locale);
}

export function getArticleUrl(article: Article): string {
  return `${article.urlPrefix}/new-article/${article.slug}`;
}

export function getAllTools(): Tool[] {
  return tools;
}

export function getToolBySlug(slug: string): Tool | null {
  return tools.find((t) => t.slug === slug) ?? null;
}

export function getToolByPath(path: string): Tool | null {
  return tools.find((t) => t.path === path) ?? null;
}

export function getAllPodcasts(): Podcast[] {
  return podcasts;
}

export function getPodcastBySlug(slug: string): Podcast | null {
  return podcasts.find((p) => p.slug === slug) ?? null;
}

export function getPodcastNeighbors(slug: string): {
  prev: Podcast | null;
  next: Podcast | null;
} {
  const idx = podcasts.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? podcasts[idx - 1] : null,
    next: idx < podcasts.length - 1 ? podcasts[idx + 1] : null,
  };
}

/**
 * Extracts the YouTube video ID from a podcast's `content` HTML
 * (which is the original Framer `<iframe src="https://www.youtube.com/embed/...">`).
 * Returns null if no embed found.
 */
export function getYouTubeId(content: string): string | null {
  const m = content.match(/youtube\.com\/embed\/([A-Za-z0-9_-]+)/);
  return m ? m[1] : null;
}
