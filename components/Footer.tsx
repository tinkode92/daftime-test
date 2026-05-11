"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { t, type Locale } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const effectiveLocale = useEffectiveLocale(locale);
  const tr = t(effectiveLocale).footer;
  return (
    <footer className="bg-white p-2 sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl bg-black px-5 py-10 sm:px-6 sm:py-14 md:h-[420px] md:py-16"
      >
        {/* World-map dotted background */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/footer-background.svg"
            alt=""
            fill
            unoptimized
            className="object-cover object-bottom opacity-30"
          />
        </div>

        {/* Vertical lines decoration */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1176px] -translate-x-1/2 justify-between md:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-white/[0.04]" />
          ))}
        </div>

        <div className="relative flex h-full flex-col justify-between gap-8 md:gap-0">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Image
              src="/assets/logo-wordmark.png"
              alt="Daftime"
              width={144}
              height={40}
              className="h-9 w-auto object-contain brightness-0 invert sm:h-10"
            />
            <p className="text-[12px] uppercase tracking-wider text-white sm:text-[14px] md:text-[16px]">
              {tr.rights}
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 text-[14px] uppercase tracking-wider text-white sm:text-[16px] md:flex-row md:items-end">
            <div className="flex flex-wrap items-center gap-6 sm:gap-12">
              <a
                href="https://www.instagram.com/daftime.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/sami-sehrine-9287b860/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@Daftime"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                Youtube
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-12">
              <a href="#" className="transition-opacity hover:opacity-60">
                {tr.privacy}
              </a>
              <a href="#" className="transition-opacity hover:opacity-60">
                {tr.terms}
              </a>
              <span>{tr.copyright}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
