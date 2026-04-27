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
        {/* Left: cream-yellow CTA panel (6194:3061) */}
        <div className="flex flex-col bg-[#fffced] p-8 sm:p-10 md:min-h-[672px] md:p-[52px]">
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
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3.5 2.5L8 6l-4.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Stats row anchored at bottom */}
          <dl className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-16">
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

        {/* Right: gray panel with magazine image (6194:3084) */}
        <div className="relative min-h-[420px] overflow-hidden bg-[#f3f3f3] md:min-h-[672px]">
          {/* Magazine fills the whole panel */}
          <Image
            src="/assets/guide-book.png"
            alt="Open Daftime 2026 magazine"
            fill
            priority={false}
            className="object-cover object-center"
            sizes="(min-width: 768px) 50vw, 100vw"
          />

          {/* Floating badge top-left */}
          <div className="absolute left-10 top-[42px] z-10 flex items-center gap-3">
            <span className="flex size-[54px] shrink-0 items-center justify-center rounded-[10px] border-[1.111px] border-[rgba(218,195,78,0.2)] bg-[rgba(255,233,123,0.3)] backdrop-blur-[13px]">
              <Image
                src="/assets/daftime-logo-blue.svg"
                alt="Daftime"
                width={26}
                height={27}
                className="h-[27px] w-[26px] object-contain"
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
        </div>
      </div>
    </section>
  );
}
