import Image from "next/image";
import Reveal from "./Reveal";

const services = [
  {
    icon: "/assets/icon-legal.svg",
    title: "Legal",
    description:
      "From setup to scale: legal solutions that secure your assets and simplify your operations across borders managed by lawyers.",
  },
  {
    icon: "/assets/icon-advisory.svg",
    title: "Advisory",
    description:
      "Strategy meets execution. We help you make smart decisions, optimize performance, and scale sustainably.",
  },
  {
    icon: "/assets/icon-accounting.svg",
    title: "Accounting",
    description:
      "Reliable, compliant, and forward-thinking accounting and taxation managed by real chartered accountants, so you can focus on growth while we handle the numbers.",
  },
];

const marqueeWords = [
  "Legal",
  "Advisory",
  "Accounting",
  "Advisory",
  "Legal",
  "Accounting",
];

export default function Services() {
  return (
    <section id="what" className="bg-white px-2 pt-3 sm:px-4 sm:pt-4">
      {/* Yellow card with marquee */}
      <div className="relative overflow-hidden rounded-2xl bg-daftime-yellow">
        {/* Vertical lines decoration (hidden on small) */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1176px] -translate-x-1/2 justify-between md:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-black/[0.04]" />
          ))}
        </div>

        {/* Marquee */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
          <div className="marquee-track items-center gap-4 sm:gap-6">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map(
              (word, idx) => (
                <div
                  key={idx}
                  className="flex shrink-0 items-center gap-4 sm:gap-6"
                >
                  <span className="whitespace-nowrap text-[36px] leading-[1.1] tracking-[-0.04em] text-daftime-yellow-dark sm:text-[48px] md:text-[64px]">
                    {word}
                  </span>
                  <span className="size-[10px] shrink-0 rounded-full bg-daftime-yellow-dark/70 sm:size-[13px]" />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Leaf logo */}
        <div className="absolute left-1/2 top-[26%] -translate-x-1/2 sm:top-[28%]">
          <Image
            src="/assets/yellow-leaf.png"
            alt=""
            width={309}
            height={309}
            className="size-[140px] object-contain sm:size-[200px] md:size-[309px]"
          />
        </div>

        {/* Header */}
        <div className="relative flex flex-col items-start justify-between gap-6 px-5 pt-10 pb-[260px] sm:gap-8 sm:px-8 sm:pt-12 sm:pb-[340px] md:flex-row md:flex-wrap md:px-10 md:pt-14 md:pb-[420px]">
          <Reveal className="flex items-center gap-2">
            <div className="size-1 rounded-full bg-[#070a33]" />
            <p className="label-mono text-[#070a33]">What We Do</p>
          </Reveal>
          <Reveal as="h2" delay={120} className="block">
            <span className="h-display block max-w-[874px] flex-1 text-black md:text-right">
              Everything you need to grow with confidence
            </span>
          </Reveal>
        </div>

        {/* Subtext at bottom */}
        <div className="relative px-5 pb-8 sm:px-8 sm:pb-10 md:px-10 md:pb-12">
          <Reveal>
            <p className="text-[18px] leading-snug tracking-tight text-black sm:text-[20px] md:text-[24px]">
              Accounting, legal, and advisory support designed to help
              entrepreneurs thrive — locally and abroad.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Three cards below */}
      <div className="grid grid-cols-1 gap-10 px-2 py-12 sm:px-4 md:grid-cols-3 md:gap-12 md:px-12 md:py-16">
        {services.map((s, idx) => (
          <Reveal
            key={s.title}
            delay={idx * 120}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex size-16 items-center justify-center overflow-hidden rounded-xl border border-daftime-gray-border transition-transform duration-300 hover:scale-105 sm:size-20">
                <Image
                  src={s.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="size-10 object-contain sm:size-12"
                />
              </div>
              <h3 className="text-[22px] tracking-tight text-black sm:text-[25px]">
                {s.title}
              </h3>
            </div>
            <p className="text-[15px] leading-relaxed tracking-tight text-black sm:text-[16px]">
              {s.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
