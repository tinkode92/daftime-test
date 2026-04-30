"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { openCountryGate, useStoredCountry } from "./CountryGate";
import { t, type Locale } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";

const COUNTRY_FLAGS = {
  AE: "🇦🇪",
  FR: "🇫🇷",
  PT: "🇵🇹",
} as const;

function localeFromPath(path: string): Locale {
  if (path === "/fr" || path.startsWith("/fr/")) return "fr";
  if (path === "/pt" || path.startsWith("/pt/")) return "pt";
  return "en";
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  // The home (URL) we link back to follows the chosen COUNTRY (URL routing).
  // The displayed text follows the chosen LANGUAGE (preference).
  const country = useStoredCountry();
  const home =
    country === "FR" ? "/fr" : country === "PT" ? "/pt" : "/";
  const locale = useEffectiveLocale(localeFromPath(pathname || "/"));
  const tr = t(locale).nav;
  const currentLocale = locale.toUpperCase();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!resourcesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target as Node)
      ) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [resourcesOpen]);

  return (
    <nav className="flex w-full items-start gap-2 md:w-auto">
      {/* Logo pill */}
      <Link
        href={home}
        aria-label="Daftime"
        className="flex shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.14] p-2.5 backdrop-blur-md transition-transform duration-300 hover:scale-105 md:p-3"
      >
        <Image
          src="/assets/daftime-logo.svg"
          alt="Daftime"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
          priority
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden w-full max-w-[720px] items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.14] p-1 pl-2 backdrop-blur-md md:flex">
        <ul className="flex shrink items-center gap-1 px-1 text-white">
          <li className="rounded-lg px-2 py-1 text-[15px] tracking-tight transition-colors hover:bg-white/10 lg:text-[16px]">
            <Link href={`${home}#what`} className="whitespace-nowrap">
              {tr.whatWeDo}
            </Link>
          </li>
          <li className="rounded-lg px-2 py-1 text-[15px] tracking-tight transition-colors hover:bg-white/10 lg:text-[16px]">
            <Link href={`${home}#services`} className="whitespace-nowrap">
              {tr.services}
            </Link>
          </li>
          <li
            ref={resourcesRef}
            className="relative rounded-lg text-[15px] tracking-tight lg:text-[16px]"
          >
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              aria-expanded={resourcesOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 whitespace-nowrap rounded-lg px-2 py-1 transition-colors hover:bg-white/10"
            >
              {tr.resources}
              <ChevronDown />
            </button>
            {resourcesOpen && (
              <div
                role="menu"
                className="absolute left-0 top-[calc(100%+8px)] z-50 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d]/95 p-1 shadow-2xl backdrop-blur-md"
              >
                <Link
                  role="menuitem"
                  href="/resources/podcast"
                  onClick={() => setResourcesOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[14px] text-white transition-colors hover:bg-white/10"
                >
                  {tr.podcast}
                </Link>
                <Link
                  role="menuitem"
                  href="/resources/guide-2026"
                  onClick={() => setResourcesOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[14px] text-white transition-colors hover:bg-white/10"
                >
                  {tr.guide2026}
                </Link>
                <Link
                  role="menuitem"
                  href={`${home}#blog`}
                  onClick={() => setResourcesOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[14px] text-white transition-colors hover:bg-white/10"
                >
                  {tr.blog}
                </Link>
              </div>
            )}
          </li>
        </ul>
        <div className="flex shrink-0 items-center gap-3 pr-1 lg:gap-4">
          <button
            type="button"
            onClick={openCountryGate}
            aria-label="Change country / language"
            className="flex items-center gap-1.5 rounded-lg px-2 py-0.5 text-[15px] text-white transition-colors hover:bg-white/10 lg:text-[16px]"
          >
            <span aria-hidden className="text-[14px] leading-none">
              {COUNTRY_FLAGS[country]}
            </span>
            <span>{currentLocale}</span>
            <ChevronDown />
          </button>
          <Link
            href={`${home}#contact`}
            className="flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-daftime-yellow px-4 text-[14px] tracking-tight text-black transition-all duration-300 hover:scale-[1.03] hover:opacity-90"
          >
            {tr.contactUs}
          </Link>
        </div>
      </div>

      {/* Mobile burger */}
      <div className="ml-auto flex items-center gap-2 md:hidden">
        <Link
          href={`${home}#contact`}
          className="flex h-10 items-center justify-center rounded-lg bg-daftime-yellow px-3 text-[13px] tracking-tight text-black"
        >
          {tr.contact}
        </Link>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.14] text-white backdrop-blur-md"
        >
          <span className="sr-only">Toggle menu</span>
          <BurgerIcon open={open} />
        </button>
      </div>

      {/* Mobile menu sheet */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute left-3 right-3 top-3 rounded-2xl border border-white/10 bg-[#0d0d0d]/95 p-5 text-white shadow-2xl fade-up"
          >
            <div className="flex items-center justify-between">
              <Image
                src="/assets/daftime-logo.svg"
                alt="Daftime"
                width={28}
                height={28}
                className="size-7 object-contain"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex size-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.06]"
              >
                <CloseIcon />
              </button>
            </div>
            <ul className="mt-6 flex flex-col gap-1 text-[18px]">
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href={`${home}#what`}
                  className="block rounded-lg px-3 py-3 hover:bg-white/10"
                >
                  {tr.whatWeDo}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href={`${home}#services`}
                  className="block rounded-lg px-3 py-3 hover:bg-white/10"
                >
                  {tr.services}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href={`${home}#blog`}
                  className="block rounded-lg px-3 py-3 hover:bg-white/10"
                >
                  {tr.resources}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href="/resources/podcast"
                  className="block rounded-lg px-3 py-3 pl-6 text-white/80 hover:bg-white/10"
                >
                  → {tr.podcast}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href="/resources/guide-2026"
                  className="block rounded-lg px-3 py-3 pl-6 text-white/80 hover:bg-white/10"
                >
                  → {tr.guide2026}
                </Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openCountryGate();
              }}
              className="mt-4 flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] text-[14px] text-white transition-colors hover:bg-white/[0.12]"
            >
              <span aria-hidden className="text-[16px] leading-none">
                {COUNTRY_FLAGS[country]}
              </span>
              <span>
                {country} · {currentLocale}
              </span>
            </button>
            <Link
              onClick={() => setOpen(false)}
              href={`${home}#contact`}
              className="mt-2 flex h-12 items-center justify-center rounded-xl bg-daftime-yellow text-[15px] text-black"
            >
              {tr.contactUs}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function ChevronDown() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      aria-hidden
      className="transition-transform duration-300"
    >
      <path
        d={open ? "M3 3l14 8M3 11l14-8" : "M2 2h16M2 7h16M2 12h16"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2 2l10 10M12 2L2 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

