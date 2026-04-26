"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLLIElement>(null);

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
      <a
        href="#"
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
      </a>

      {/* Desktop nav */}
      <div className="hidden w-full max-w-[560px] items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.14] p-1 backdrop-blur-md md:flex">
        <ul className="flex shrink items-center gap-1 px-2 text-white">
          <li className="rounded-lg px-2 py-1 text-[15px] tracking-tight transition-colors hover:bg-white/10 lg:text-[16px]">
            <a href="#what" className="whitespace-nowrap">What we do</a>
          </li>
          <li className="rounded-lg px-2 py-1 text-[15px] tracking-tight transition-colors hover:bg-white/10 lg:text-[16px]">
            <a href="#services" className="whitespace-nowrap">Services</a>
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
              Resources
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
                  Podcast
                </Link>
                <Link
                  role="menuitem"
                  href="/resources/guide-2026"
                  onClick={() => setResourcesOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[14px] text-white transition-colors hover:bg-white/10"
                >
                  2026 Daftime Guide
                </Link>
                <a
                  role="menuitem"
                  href="#blog"
                  onClick={() => setResourcesOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[14px] text-white transition-colors hover:bg-white/10"
                >
                  Blog
                </a>
              </div>
            )}
          </li>
        </ul>
        <div className="flex shrink-0 items-center gap-3 pr-1 lg:gap-4">
          <button
            type="button"
            className="flex items-center gap-1 text-[15px] text-white lg:text-[16px]"
          >
            <GlobeIcon />
            <span>EN</span>
            <ChevronDown />
          </button>
          <a
            href="#contact"
            className="flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-daftime-yellow px-4 text-[14px] tracking-tight text-black transition-all duration-300 hover:scale-[1.03] hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile burger */}
      <div className="ml-auto flex items-center gap-2 md:hidden">
        <a
          href="#contact"
          className="flex h-10 items-center justify-center rounded-lg bg-daftime-yellow px-3 text-[13px] tracking-tight text-black"
        >
          Contact
        </a>
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
                <a
                  onClick={() => setOpen(false)}
                  href="#what"
                  className="block rounded-lg px-3 py-3 hover:bg-white/10"
                >
                  What we do
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  href="#services"
                  className="block rounded-lg px-3 py-3 hover:bg-white/10"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  href="#blog"
                  className="block rounded-lg px-3 py-3 hover:bg-white/10"
                >
                  Resources
                </a>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href="/resources/podcast"
                  className="block rounded-lg px-3 py-3 pl-6 text-white/80 hover:bg-white/10"
                >
                  → Podcast
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href="/resources/guide-2026"
                  className="block rounded-lg px-3 py-3 pl-6 text-white/80 hover:bg-white/10"
                >
                  → 2026 Daftime Guide
                </Link>
              </li>
            </ul>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="mt-4 flex h-12 items-center justify-center rounded-xl bg-daftime-yellow text-[15px] text-black"
            >
              Contact Us
            </a>
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

function GlobeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
        stroke="currentColor"
        strokeWidth="1.5"
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
