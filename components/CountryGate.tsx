"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const STORAGE_KEY = "daftime-country";
export const OPEN_GATE_EVENT = "daftime-open-country-gate";

export function openCountryGate() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_GATE_EVENT));
}

type Country = {
  code: "AE" | "FR" | "PT";
  name: string;
  path: string;
  flag: string;
};

const countries: Country[] = [
  { code: "AE", name: "United Arab Emirates", path: "/", flag: "🇦🇪" },
  { code: "FR", name: "France", path: "/fr", flag: "🇫🇷" },
  { code: "PT", name: "Portugal", path: "/pt", flag: "🇵🇹" },
];

const localePaths = ["/fr", "/pt"];

function getLocaleFromPath(path: string): "AE" | "FR" | "PT" {
  if (path === "/fr" || path.startsWith("/fr/")) return "FR";
  if (path === "/pt" || path.startsWith("/pt/")) return "PT";
  return "AE";
}

export default function CountryGate() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY) as Country["code"] | null;
    const current = getLocaleFromPath(pathname);
    if (!stored) {
      // First visit — ask
      setOpen(true);
      return;
    }
    // If they've previously picked a different locale than the URL, send them there
    if (stored !== current) {
      const target = countries.find((c) => c.code === stored);
      if (target && target.path !== pathname) {
        // Avoid bouncing infinitely on already-correct pages
        const samePrefix =
          stored === "AE"
            ? !localePaths.some((p) => pathname.startsWith(p))
            : pathname === target.path || pathname.startsWith(`${target.path}/`);
        if (!samePrefix) router.replace(target.path);
      }
    }
  }, [pathname, router]);

  // Re-open from anywhere via window.dispatchEvent(new CustomEvent("daftime-open-country-gate"))
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_GATE_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_GATE_EVENT, onOpen);
  }, []);

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

  const choose = (country: Country) => {
    try {
      localStorage.setItem(STORAGE_KEY, country.code);
    } catch {
      // ignore quota / privacy mode errors
    }
    setOpen(false);
    if (country.path !== pathname) {
      router.push(country.path);
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
        className="relative w-full max-w-[520px] overflow-hidden rounded-3xl bg-daftime-yellow-light shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]"
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
            <p className="label-mono text-black">Welcome</p>
          </div>
          <h2
            id="country-gate-title"
            className="h-display mt-4 text-balance text-black"
          >
            Choose your country
          </h2>
          <p className="mt-3 max-w-[420px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text">
            Pick your region to browse Daftime in the version closest to your
            market.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-2 px-6 pb-8 pt-6 sm:grid-cols-3 sm:px-10 sm:pb-10">
          {countries.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => choose(c)}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-daftime-yellow hover:shadow-[0_10px_24px_-10px_rgba(0,0,0,0.18)]"
            >
              <span aria-hidden className="text-[28px] leading-none">
                {c.flag}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[18px] font-semibold tracking-tight text-black">
                  {c.code}
                </span>
                <span className="text-[12px] leading-tight tracking-tight text-daftime-gray-text">
                  {c.name}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
