"use client";

import { usePathname } from "next/navigation";

/**
 * Returns the URL locale prefix matching the current pathname:
 *   "/fr/*" → "/fr"
 *   "/pt/*" → "/pt"
 *   anything else → ""
 *
 * Use to keep internal links inside the user's language context, so
 * /fr/podcast → /fr/podcast/<slug> instead of leaking back to /podcast.
 */
export function useLangPrefix(): "" | "/fr" | "/pt" {
  const pathname = usePathname() || "/";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "/fr";
  if (pathname === "/pt" || pathname.startsWith("/pt/")) return "/pt";
  return "";
}
