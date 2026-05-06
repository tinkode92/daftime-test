"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/translations";

const STORAGE_KEY = "daftime-language";
const EVENT = "daftime-locale-changed";

function readStored(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "EN") return "en";
    if (raw === "FR") return "fr";
    if (raw === "PT") return "pt";
  } catch {
    // ignore
  }
  return null;
}

function localeFromPath(path: string | null): Locale | null {
  if (!path) return null;
  // FR-language prefixes: /fr (AE-FR) and /fr-fr (FR country, FR lang)
  if (path === "/fr" || path.startsWith("/fr/")) return "fr";
  if (path === "/fr-fr" || path.startsWith("/fr-fr/")) return "fr";
  // EN-language prefixes for non-AE countries
  if (path === "/fr-en" || path.startsWith("/fr-en/")) return "en";
  if (path === "/pt-en" || path.startsWith("/pt-en/")) return "en";
  // PT-language prefixes
  if (path === "/pt" || path.startsWith("/pt/")) return "pt";
  return null;
}

/**
 * Resolves the active text locale for a component.
 *
 * Priority order:
 *   1. localStorage choice (set by the country/language gate)
 *   2. URL prefix (/fr/* → fr, /pt/* → pt, else EN)
 *   3. The serverLocale fallback the component was mounted with
 *
 * Re-reads on the "daftime-locale-changed" custom event so every
 * consumer re-renders the moment the user confirms a new language.
 */
export function useEffectiveLocale(serverLocale: Locale = "en"): Locale {
  const pathname = usePathname();
  const urlLocale = localeFromPath(pathname);
  const [locale, setLocale] = useState<Locale>(urlLocale ?? serverLocale);

  useEffect(() => {
    const sync = () => {
      const stored = readStored();
      setLocale(stored ?? urlLocale ?? serverLocale);
    };
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, [serverLocale, urlLocale]);

  return locale;
}
