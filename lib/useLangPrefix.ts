"use client";

import { usePathname } from "next/navigation";

/**
 * Returns the URL prefix matching the current pathname. Used to keep
 * internal links in the user's country/language context.
 *
 * The 6 country/language combinations map to:
 *   AE+EN → ""        AE+FR → "/fr"
 *   FR+EN → "/fr-en"  FR+FR → "/fr-fr"
 *   PT+EN → "/pt-en"  PT+PT → "/pt"
 */
export type LangPrefix =
  | ""
  | "/fr"
  | "/fr-fr"
  | "/fr-en"
  | "/pt"
  | "/pt-en";

const PREFIXES: LangPrefix[] = [
  "/fr-fr",
  "/fr-en",
  "/pt-en",
  "/fr",
  "/pt",
];

export function useLangPrefix(): LangPrefix {
  const pathname = usePathname() || "/";
  for (const p of PREFIXES) {
    if (pathname === p || pathname.startsWith(p + "/")) return p;
  }
  return "";
}
