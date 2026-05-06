"use client";

import Image from "next/image";
import Navigation from "./Navigation";
import BrandMarquee from "./BrandMarquee";
import { t } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";

const avatars = [
  { src: "/assets/avatar-1.png", bg: "#ebebeb" },
  { src: "/assets/avatar-2.png", bg: "#ffecc0" },
  { src: "/assets/avatar-3.png", bg: "#c0d5ff" },
  { src: "/assets/avatar-4.png", bg: "#c0eaff" },
  { src: "/assets/avatar-5.png", bg: "#cac0ff" },
  { src: "/assets/avatar-6.png", bg: "#ffc0c5" },
];

export default function PodcastHero() {
  const locale = useEffectiveLocale("en");
  const tr = t(locale).podcastPage;
  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
        {/* Hero background art */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/podcast-hero-background.svg"
            alt=""
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Vertical lines */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1100px] -translate-x-1/2 justify-between md:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-white/[0.04]" />
          ))}
        </div>

        {/* Bottom blur fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[160px] rounded-b-2xl bg-gradient-to-b from-transparent to-black/50 backdrop-blur-[2px] sm:h-[240px] sm:rounded-b-3xl" />

        <div className="relative flex min-h-[560px] flex-col px-4 pt-5 pb-0 sm:px-6 sm:pt-7 md:min-h-[620px] md:px-10 md:pt-9 lg:min-h-[660px]">
          <div className="flex justify-center">
            <Navigation />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center pt-12 pb-10 text-center sm:pt-16 md:pt-24">
            {/* Avatars + small label */}
            <div className="fade-up mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
              <div className="flex">
                {avatars.map((a, i) => (
                  <div
                    key={i}
                    className="-mr-1 size-[24px] overflow-hidden rounded-full border-[3px] border-white/10"
                    style={{ background: a.bg }}
                  >
                    <Image
                      src={a.src}
                      alt=""
                      width={24}
                      height={24}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[15px] tracking-tight text-white sm:text-[18px] md:text-[20px]">
                {tr.heroEyebrow}
              </p>
            </div>

            {/* Headline */}
            <h1
              className="h-hero fade-up max-w-[860px] text-balance text-white"
              style={{ animationDelay: "120ms" }}
            >
              {tr.heroHeading}
            </h1>
          </div>

          {/* Brand marquee */}
          <div className="relative">
            <BrandMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
