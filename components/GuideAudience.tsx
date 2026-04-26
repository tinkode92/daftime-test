import Image from "next/image";

const audience = [
  {
    title: "Entrepreneurs",
    description:
      "Founders setting up in the UAE and looking to structure their business properly from day one.",
    image: "/assets/icon-accounting.svg",
    bg: "bg-daftime-gray-light",
  },
  {
    title: "Executives",
    description:
      "C-level operators expanding cross-border operations and aligning compliance with growth.",
    image: "/assets/icon-advisory.svg",
    bg: "bg-daftime-cream",
  },
  {
    title: "Investors",
    description:
      "VCs, family offices and angels evaluating the UAE as a base for portfolio companies.",
    image: "/assets/icon-legal.svg",
    bg: "bg-daftime-gray-light",
  },
  {
    title: "Founder & Business Owners",
    description:
      "Owners of established companies refining structures, holding strategy, or optimising taxes.",
    image: "/assets/icon-accounting.svg",
    bg: "bg-daftime-gray-light",
  },
];

export default function GuideAudience() {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1152px]">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-daftime-yellow">
            <span className="size-1 rounded-full bg-daftime-yellow" />
            Audience
          </span>
          <h2 className="h-display max-w-[640px] text-balance text-daftime-dark">
            Who this guide is for
          </h2>
          <p className="mt-2 max-w-[480px] text-[15px] leading-relaxed text-daftime-gray-text">
            A clear knowledge base for builders crossing borders in 2026.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {audience.map((a) => (
            <article
              key={a.title}
              className={`flex flex-col overflow-hidden rounded-3xl border border-daftime-gray-border ${a.bg}`}
            >
              <div className="relative h-[200px] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-90">
                  <Image
                    src={a.image}
                    alt=""
                    width={120}
                    height={120}
                    className="h-24 w-24 object-contain"
                  />
                </div>
              </div>
              <div className="border-t border-daftime-gray-border bg-white p-6">
                <h3 className="text-[22px] tracking-tight text-daftime-dark">
                  {a.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-daftime-gray-text">
                  {a.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
