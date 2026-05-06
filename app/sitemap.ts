import type { MetadataRoute } from "next";

const SITE = "https://daftime.ae";

/**
 * Static sitemap for the current routes. Extend this with the blog
 * and resources entries once the CSV from the SEO agency is ingested.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/fr", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pt", priority: 0.9, changeFrequency: "weekly" },
    { path: "/resources/podcast", priority: 0.7, changeFrequency: "weekly" },
    { path: "/resources/guide-2026", priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
