"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { t, type Locale } from "@/lib/translations";

const COUNTRY_KEY = "daftime-country";
const LANGUAGE_KEY = "daftime-language";
export const OPEN_GATE_EVENT = "daftime-open-country-gate";

export function openCountryGate() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_GATE_EVENT));
}

export type Country = "AE" | "FR" | "PT";
export type Language = "EN" | "FR" | "PT";

const countries: { code: Country; name: string; flag: string }[] = [
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
];

const languages: { code: Language; locale: Locale; label: string }[] = [
  { code: "EN", locale: "en", label: "English" },
  { code: "FR", locale: "fr", label: "Français" },
  { code: "PT", locale: "pt", label: "Português" },
];

function isLanguageAvailable(country: Country, lang: Language): boolean {
  // Portuguese is only offered with the Portugal office.
  if (lang === "PT") return country === "PT";
  return true;
}

function pathForLanguage(lang: Language): string {
  if (lang === "FR") return "/fr";
  if (lang === "PT") return "/pt";
  return "/";
}

function languageFromPath(path: string): Language {
  if (path === "/fr" || path.startsWith("/fr/")) return "FR";
  if (path === "/pt" || path.startsWith("/pt/")) return "PT";
  return "EN";
}

function localeFromPath(path: string): Locale {
  if (path === "/fr" || path.startsWith("/fr/")) return "fr";
  if (path === "/pt" || path.startsWith("/pt/")) return "pt";
  return "en";
}

/** Read the selected country from localStorage (defaults to AE on the server). */
export function useStoredCountry(): Country {
  const [country, setCountry] = useState<Country>("AE");
  useEffect(() => {
    try {
      const stored = localStorage.getItem(COUNTRY_KEY) as Country | null;
      if (stored === "AE" || stored === "FR" || stored === "PT") {
        setCountry(stored);
      }
    } catch {
      // ignore
    }
  }, []);
  return country;
}

export default function CountryGate() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState<Country>("AE");
  const [language, setLanguage] = useState<Language>(
    languageFromPath(pathname || "/"),
  );
  const tr = t(localeFromPath(pathname || "/")).countryGate;

  // First-visit: open if no choice yet
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedCountry = localStorage.getItem(COUNTRY_KEY) as Country | null;
      const storedLanguage = localStorage.getItem(LANGUAGE_KEY) as Language | null;
      if (!storedCountry || !storedLanguage) {
        setOpen(true);
      } else {
        setCountry(storedCountry);
        setLanguage(storedLanguage);
        // If the URL doesn't match the stored language, send the user there
        const targetPath = pathForLanguage(storedLanguage);
        const currentLang = languageFromPath(pathname || "/");
        if (currentLang !== storedLanguage && targetPath !== pathname) {
          router.replace(targetPath);
        }
      }
    } catch {
      // ignore privacy mode
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Listen for re-open events from other components
  useEffect(() => {
    const onOpen = () => {
      // Sync state with what's currently active
      try {
        const storedCountry = localStorage.getItem(COUNTRY_KEY) as Country | null;
        const storedLanguage = localStorage.getItem(LANGUAGE_KEY) as Language | null;
        if (storedCountry) setCountry(storedCountry);
        if (storedLanguage) setLanguage(storedLanguage);
        else setLanguage(languageFromPath(pathname || "/"));
      } catch {
        // ignore
      }
      setOpen(true);
    };
    window.addEventListener(OPEN_GATE_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_GATE_EVENT, onOpen);
  }, [pathname]);

  // Lock scroll + Escape close
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const confirm = () => {
    try {
      localStorage.setItem(COUNTRY_KEY, country);
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
      // ignore
    }
    setOpen(false);
    const targetPath = pathForLanguage(language);
    if (targetPath !== pathname) {
      router.push(targetPath);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="country-gate-title"
      onClick={() => setOpen(false)}
      className="fade-up fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[560px] overflow-hidden rounded-3xl bg-daftime-yellow-light shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-daftime-yellow/30 blur-3xl" />

        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full text-black/70 transition-colors hover:bg-black/[0.06]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
          >
            <path
              d="M2 2l10 10M12 2L2 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="relative px-6 pt-8 sm:px-10 sm:pt-10">
          <div className="flex items-center gap-2">
            <span className="size-1 rounded-full bg-black" />
            <p className="label-mono text-black">{tr.eyebrow}</p>
          </div>
          <h2
            id="country-gate-title"
            className="h-display mt-4 text-balance text-black"
          >
            {tr.heading}
          </h2>
          <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text">
            {tr.subtitle}
          </p>
        </div>

        {/* Country picker */}
        <div className="relative px-6 pt-6 sm:px-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-black/60">
            {tr.countryLabel}
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {countries.map((c) => {
              const active = country === c.code;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setCountry(c.code);
                    if (!isLanguageAvailable(c.code, language)) {
                      setLanguage("EN");
                    }
                  }}
                  aria-pressed={active}
                  className={
                    "flex flex-col items-start gap-2 rounded-2xl border p-3 text-left transition-all duration-200 " +
                    (active
                      ? "border-daftime-yellow bg-white shadow-[0_8px_20px_-10px_rgba(0,0,0,0.18)]"
                      : "border-black/10 bg-white/70 hover:-translate-y-0.5 hover:border-daftime-yellow/60")
                  }
                >
                  <span aria-hidden className="text-[24px] leading-none">
                    {c.flag}
                  </span>
                  <span className="flex flex-col gap-0">
                    <span className="text-[15px] font-semibold tracking-tight text-black">
                      {c.code}
                    </span>
                    <span className="text-[11px] leading-tight tracking-tight text-daftime-gray-text">
                      {c.name}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Language picker */}
        <div className="relative px-6 pt-5 sm:px-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-black/60">
            {tr.languageLabel}
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {languages.map((l) => {
              const active = language === l.code;
              const available = isLanguageAvailable(country, l.code);
              return (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => available && setLanguage(l.code)}
                  disabled={!available}
                  aria-pressed={active}
                  aria-disabled={!available}
                  title={
                    available
                      ? undefined
                      : "Available only with the Portugal office"
                  }
                  className={
                    "rounded-2xl border px-3 py-3 text-left transition-all duration-200 " +
                    (active
                      ? "border-daftime-yellow bg-white shadow-[0_8px_20px_-10px_rgba(0,0,0,0.18)]"
                      : available
                        ? "border-black/10 bg-white/70 hover:-translate-y-0.5 hover:border-daftime-yellow/60"
                        : "cursor-not-allowed border-black/5 bg-white/40 opacity-50")
                  }
                >
                  <span className="block text-[15px] font-semibold tracking-tight text-black">
                    {l.code}
                  </span>
                  <span className="block text-[11px] leading-tight tracking-tight text-daftime-gray-text">
                    {l.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Confirm */}
        <div className="relative flex items-center justify-end gap-3 px-6 pb-8 pt-6 sm:px-10 sm:pb-10">
          <button
            type="button"
            onClick={confirm}
            className="btn-pill cta-shimmer bg-daftime-yellow text-black hover:opacity-90"
          >
            {tr.confirm}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
