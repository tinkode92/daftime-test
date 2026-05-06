import Image from "next/image";
import Navigation from "./Navigation";
import BrandMarquee from "./BrandMarquee";

const avatars = [
  { src: "/assets/avatar-1.png", bg: "#ebebeb" },
  { src: "/assets/avatar-2.png", bg: "#ffecc0" },
  { src: "/assets/avatar-3.png", bg: "#c0d5ff" },
  { src: "/assets/avatar-4.png", bg: "#c0eaff" },
  { src: "/assets/avatar-5.png", bg: "#cac0ff" },
  { src: "/assets/avatar-6.png", bg: "#ffc0c5" },
];

export default function GuideHero() {
  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
        {/* Guide-specific background art */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/daftime-guide-background.svg"
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

        <div className="relative flex min-h-[560px] flex-col px-4 pt-5 pb-0 sm:px-6 sm:pt-7 md:min-h-[620px] md:px-10 md:pt-9 lg:min-h-[660px]">
          <div className="flex justify-center">
            <Navigation />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center pt-12 pb-10 text-center sm:pt-16 md:pt-24">
            {/* Avatars + label */}
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
                10K+ Client Collaboration
              </p>
            </div>

            {/* Headline */}
            <h1
              className="h-hero fade-up max-w-[860px] text-balance text-white"
              style={{ animationDelay: "120ms" }}
            >
              Structuring businesses in the UAE with clarity and vision
            </h1>
            <p
              className="fade-up mt-4 max-w-[640px] text-[15px] tracking-tight text-white/80 sm:mt-6 sm:text-[16px]"
              style={{ animationDelay: "240ms" }}
            >
              Editorial overviews from Daftime experts: legal, accounting and
              advisory foundations to set up and grow in the UAE.
            </p>

            {/* CTA */}
            <div
              className="fade-up mt-6 sm:mt-8"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href="#download"
                className="btn-pill cta-shimmer bg-daftime-yellow text-black hover:opacity-90"
              >
                Download the Daftime Guide 2026
                <ArrowRight />
              </a>
            </div>
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
