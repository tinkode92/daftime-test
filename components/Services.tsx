import Image from "next/image";

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

const marqueeWords = ["Legal", "Advisory", "Accounting", "Advisory", "Legal", "Accounting"];

export default function Services() {
  return (
    <section id="what" className="bg-white px-4 pt-4">
      {/* Yellow card with marquee */}
      <div className="relative overflow-hidden rounded-2xl bg-daftime-yellow">
        {/* Vertical lines decoration */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 flex w-[1176px] -translate-x-1/2 justify-between">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-full w-px bg-black/[0.04]" />
          ))}
        </div>

        {/* Marquee */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
          <div className="marquee-track items-center gap-6">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, idx) => (
              <div key={idx} className="flex shrink-0 items-center gap-6">
                <span className="whitespace-nowrap text-[64px] leading-[1.1] tracking-[-0.04em] text-daftime-yellow-dark">
                  {word}
                </span>
                <span className="size-[13px] shrink-0 rounded-full bg-daftime-yellow-dark/70" />
              </div>
            ))}
          </div>
        </div>

        {/* Leaf logo */}
        <div className="absolute left-1/2 top-[28%] -translate-x-1/2">
          <Image
            src="/assets/yellow-leaf.png"
            alt=""
            width={309}
            height={309}
            className="size-[200px] object-contain md:size-[309px]"
          />
        </div>

        {/* Header */}
        <div className="relative flex flex-wrap items-start justify-between gap-8 px-10 pt-14 pb-[420px]">
          <div className="flex items-center gap-2">
            <div className="size-1 rounded-full bg-[#070a33]" />
            <p className="label-mono text-[#070a33]">What We Do</p>
          </div>
          <h2 className="h-display max-w-[874px] flex-1 text-black">
            Everything you need to grow with confidence
          </h2>
        </div>

        {/* Subtext at bottom */}
        <div className="relative px-10 pb-12">
          <p className="text-[24px] leading-snug tracking-tight text-black">
            Accounting, legal, and advisory support designed to help entrepreneurs thrive — locally and abroad.
          </p>
        </div>
      </div>

      {/* Three cards below */}
      <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-3 md:px-12">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="flex size-20 items-center justify-center overflow-hidden rounded-xl border border-daftime-gray-border">
                <Image
                  src={s.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
              </div>
              <h3 className="text-[25px] tracking-tight text-black">{s.title}</h3>
            </div>
            <p className="text-[16px] leading-relaxed tracking-tight text-black">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
