"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import BrandMarquee from "./BrandMarquee";
import LearnMoreModal from "./LearnMoreModal";

const avatars = [
  { src: "/assets/avatar-1.png", bg: "#ebebeb" },
  { src: "/assets/avatar-2.png", bg: "#ffecc0" },
  { src: "/assets/avatar-3.png", bg: "#c0d5ff" },
  { src: "/assets/avatar-4.png", bg: "#c0eaff" },
  { src: "/assets/avatar-5.png", bg: "#cac0ff" },
  { src: "/assets/avatar-6.png", bg: "#ffc0c5" },
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
        {/* Planet background (with subtle floating) */}
        <div className="pointer-events-none absolute inset-x-0 top-[6%] flex justify-center sm:top-[8%]">
          <div className="float-slow w-[140%] sm:w-[120%] md:w-[110%]">
            <Image
              src="/assets/hero-planet.png"
              alt=""
              width={1379}
              height={1332}
              priority
              className="w-full max-w-none object-contain opacity-90"
            />
          </div>
        </div>

        {/* Vertical lines decoration (hidden on small screens) */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1100px] -translate-x-1/2 justify-between md:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-white/[0.04]" />
          ))}
        </div>

        {/* Bottom blur fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] rounded-b-2xl bg-gradient-to-b from-transparent to-black/50 backdrop-blur-[2px] sm:h-[305px] sm:rounded-b-3xl" />

        <div className="relative flex min-h-[640px] flex-col px-4 pt-5 pb-0 sm:px-6 sm:pt-7 md:min-h-[720px] md:px-10 md:pt-9 lg:min-h-[800px]">
          <div className="flex justify-center">
            <Navigation />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center pt-12 pb-12 text-center sm:pt-16 md:pt-24 md:pb-16">
            {/* Avatars + counter */}
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
                12k+ Client Collaboration
              </p>
            </div>

            {/* Headline */}
            <h1
              className="h-hero fade-up max-w-[760px] text-balance text-white"
              style={{ animationDelay: "120ms" }}
            >
              Your international partner for structuring your business
            </h1>
            <p
              className="fade-up mt-4 max-w-[600px] text-[16px] tracking-tight text-white/90 sm:mt-6 sm:text-[18px] md:text-[20px]"
              style={{ animationDelay: "240ms" }}
            >
              Where law meets accounting, and strategy drives growth.
            </p>

            {/* Buttons */}
            <div
              className="fade-up mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: "360ms" }}
            >
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn-pill cta-shimmer bg-daftime-yellow text-black hover:opacity-90"
              >
                Learn More
                <ArrowRight />
              </button>
              <a
                href="#contact"
                className="btn-pill border border-white/10 bg-black/10 text-white backdrop-blur hover:bg-white/10"
              >
                Lets Talk
              </a>
            </div>
          </div>

          {/* Brand marquee */}
          <div className="relative">
            <BrandMarquee />
          </div>
        </div>
      </div>

      <LearnMoreModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
  );
}
