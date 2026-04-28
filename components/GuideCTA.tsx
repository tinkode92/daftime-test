import Image from "next/image";
import Reveal from "./Reveal";

const avatars = [
  { src: "/assets/avatar-1.png", bg: "#ebebeb" },
  { src: "/assets/avatar-2.png", bg: "#ffecc0" },
  { src: "/assets/avatar-3.png", bg: "#c0d5ff" },
  { src: "/assets/avatar-4.png", bg: "#c0eaff" },
  { src: "/assets/avatar-5.png", bg: "#cac0ff" },
  { src: "/assets/avatar-6.png", bg: "#ffc0c5" },
];

export default function GuideCTA() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left text */}
        <Reveal
          variant="left"
          className="flex flex-col justify-between gap-10 bg-daftime-yellow-light p-6 sm:p-10 md:p-14"
        >
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="size-1 bg-black" />
              <p className="label-mono text-black">Guide</p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="h-display text-black">
                Introducing the 2026 Daftime Guide
              </h2>
              <p className="text-[15px] leading-relaxed tracking-tight text-black sm:text-[16px]">
                Designed for entrepreneurs, executives, and investors, the
                Daftime Guide provides a clear and methodical reading of the
                regulatory and fiscal frameworks shaping business operations in
                the Emirates.
              </p>
            </div>

            <a
              href="#guide"
              className="btn-pill cta-shimmer self-start bg-daftime-yellow text-black hover:opacity-90"
            >
              Explore the Guide
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="-mr-1 size-[24px] overflow-hidden rounded-full border-[3px] border-white"
                  style={{ background: a.bg }}
                >
                  <Image
                    src={a.src}
                    alt=""
                    width={24}
                    height={24}
                    className="size-full rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-[16px] tracking-tight text-black sm:text-[18px] md:text-[20px]">
              12k+ Client Collaboration
            </p>
          </div>
        </Reveal>

        {/* Right image */}
        <Reveal
          variant="right"
          delay={120}
          className="relative min-h-[320px] overflow-hidden bg-[#f3f3f3] sm:min-h-[400px] lg:min-h-[500px]"
        >
          <div className="absolute inset-x-0 bottom-0 top-[140px] flex items-center justify-center sm:top-[160px]">
            <div className="float-slow rotate-[14deg]">
              <Image
                src="/assets/guide-book.png"
                alt="2026 Daftime Guide"
                width={961}
                height={618}
                className="w-[110%] max-w-none object-contain"
              />
            </div>
          </div>
          <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-10 sm:top-10">
            <div className="flex items-center justify-center rounded-xl border border-[rgba(22,21,53,0.15)] bg-white/70 p-2.5 backdrop-blur sm:p-3">
              <Image
                src="/assets/daftime-logo-blue.svg"
                alt="Daftime"
                width={26}
                height={26}
                className="size-[22px] object-contain sm:size-[26px]"
              />
            </div>
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <p className="text-[12px] font-medium leading-tight tracking-tight text-[#161535]/70 sm:text-[14px]">
                2026 Edition
              </p>
              <p className="text-[18px] leading-tight tracking-tight text-[#161535] sm:text-[22px] md:text-[24px]">
                The 2026 Daftime Guide
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
