import Image from "next/image";

const stats = [
  { label: "Edition", value: "2026" },
  { label: "Pages", value: "60+" },
  { label: "Updated for", value: "Corporate Tax" },
];

export default function GuideDownload() {
  return (
    <section id="download" className="bg-[#f4eff5]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 md:grid-cols-2">
        {/* Left: cream-yellow CTA */}
        <div className="flex flex-col justify-between gap-12 bg-[#fffced] p-8 sm:p-10 md:p-[52px]">
          <div className="flex flex-col gap-10">
            {/* Eyebrow */}
            <span className="flex items-center gap-2 font-mono text-[14px] uppercase leading-[20px] tracking-[0.12em] text-black">
              <span className="size-1 rounded-full bg-black" />
              Download
            </span>

            {/* Title + description */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[40px] leading-[1.1] tracking-[-0.04em] text-black sm:text-[48px]">
                Get Your 2026
                <br />
                Daftime Guide
              </h2>
              <p className="max-w-[349px] text-[16px] leading-[1.5] tracking-tight text-black">
                A structured reading designed to secure legal, fiscal, and
                strategic decisions in the UAE.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex h-[52px] items-center justify-center gap-3 self-start rounded-xl bg-daftime-yellow px-6 text-[16px] tracking-tight text-black transition-opacity hover:opacity-90"
            >
              Download the magazine (PDF)
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M2.5 3.5L6 7l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <dl className="flex flex-wrap items-end justify-between gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-3">
                <dt className="text-[20px] leading-[1.1] tracking-[-0.04em] text-[#919191] sm:text-[24px]">
                  {s.label}
                </dt>
                <dd className="text-[26px] leading-[1.1] tracking-[-0.04em] text-black sm:text-[32px]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: gray panel with magazine image */}
        <div className="relative min-h-[420px] overflow-hidden bg-[#f3f3f3] md:min-h-[672px]">
          {/* Floating badge top-left */}
          <div className="absolute left-6 top-6 z-10 flex items-center gap-3 sm:left-10 sm:top-[42px]">
            <span className="flex size-[54px] items-center justify-center rounded-[10px] border border-[rgba(218,195,78,0.2)] bg-[rgba(255,233,123,0.3)] p-3 backdrop-blur-md">
              <Image
                src="/assets/daftime-logo.svg"
                alt="Daftime"
                width={26}
                height={27}
                className="h-auto w-[26px] object-contain brightness-0"
              />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[14px] leading-[1.4] tracking-tight text-[#9e9e9e]">
                2026 Edition
              </span>
              <span className="text-[20px] leading-[1.2] tracking-tight text-black sm:text-[24px]">
                The 2026 Daftime Guide
              </span>
            </span>
          </div>

          {/* Magazine image */}
          <Image
            src="/assets/guide-book.png"
            alt="Open Daftime 2026 magazine"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
