"use client";

import { useEffect, useState } from "react";
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

/**
 * Resolves the active text locale for a component.
 *
 * - SSR / first paint  → uses the `serverLocale` (matches the URL).
 * - After hydration    → if the user picked a language in the popup,
 *                        that choice is read from localStorage and
 *                        overrides the URL-based default.
 * - Live updates       → re-reads on the "daftime-locale-changed"
 *                        custom event so every consumer re-renders
 *                        the moment the user confirms a new language.
 */
export function useEffectiveLocale(serverLocale: Locale): Locale {
  const [locale, setLocale] = useState<Locale>(serverLocale);

  useEffect(() => {
    const sync = () => {
      const stored = readStored();
      setLocale(stored ?? serverLocale);
    };
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, [serverLocale]);

  return locale;
}
