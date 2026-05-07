"use client";

import { usePathname } from "next/navigation";
import Blog from "./Blog";
import type { Article } from "@/lib/blog";

/**
 * /fr is rendered for both AE+FR (visible URL: /fr) and FR+FR
 * (visible URL: /fr-fr, internally rewritten to /fr). The blog
 * section only belongs to the AE country site, so we hide it when
 * the user is actually browsing /fr-fr.
 */
export default function BlogAEFROnly({ articles }: { articles: Article[] }) {
  const pathname = usePathname() || "";
  if (pathname === "/fr-fr" || pathname.startsWith("/fr-fr/")) return null;
  return <Blog locale="fr" articles={articles} />;
}
