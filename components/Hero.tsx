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

export default function Hero() {
  return (
    <section className="px-3 pt-3">
      <div className="relative overflow-hidden rounded-3xl bg-black">
        {/* Planet background */}
        <div className="pointer-events-none absolute inset-x-0 top-[8%] flex justify-center">
          <Image
            src="/assets/hero-planet.png"
            alt=""
            width={1379}
            height={1332}
            priority
            className="w-[110%] max-w-none object-contain opacity-90"
          />
        </div>

        {/* Vertical lines decoration */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 flex w-[1100px] -translate-x-1/2 justify-between">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-white/[0.04]" />
          ))}
        </div>

        {/* Bottom blur fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[305px] rounded-b-3xl bg-gradient-to-b from-transparent to-black/50 backdrop-blur-[2px]" />

        <div className="relative flex min-h-[800px] flex-col px-10 pt-9 pb-0">
          <div className="flex justify-center">
            <Navigation />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center pt-24 pb-16 text-center">
            {/* Avatars + counter */}
            <div className="mb-8 flex items-center gap-4">
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
              <p className="text-[20px] tracking-tight text-white">
                12k+ Client Collaboration
              </p>
            </div>

            {/* Headline */}
            <h1 className="h-hero max-w-[760px] text-balance text-white">
              Your international partner for structuring your business
            </h1>
            <p className="mt-6 text-[20px] tracking-tight text-white/90">
              Where law meets accounting, and strategy drives growth.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#what"
                className="btn-pill bg-daftime-yellow text-black hover:opacity-90"
              >
                Learn More
                <ArrowRight />
              </a>
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
