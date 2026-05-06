import type { MetadataRoute } from "next";
import { getAllArticles, getArticleUrl, getAllTools } from "@/lib/blog";

const SITE = "https://daftime.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/fr", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pt", priority: 0.9, changeFrequency: "weekly" },
    { path: "/guide", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resources/podcast", priority: 0.7, changeFrequency: "weekly" },
  ];

  const articleRoutes = getAllArticles().map((a) => ({
    path: getArticleUrl(a),
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const toolRoutes = getAllTools()
    .filter((t) => t.path && t.path !== "/")
    .map((t) => ({
      path: t.path as string,
      priority: 0.6,
      changeFrequency: "yearly" as const,
    }));

  return [...staticRoutes, ...articleRoutes, ...toolRoutes].map(
    ({ path, priority, changeFrequency }) => ({
      url: `${SITE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  );
}
