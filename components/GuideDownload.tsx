import Image from "next/image";

export default function GuideDownload() {
  return (
    <section
      id="download"
      className="bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-[1152px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left: copy */}
          <div className="rounded-3xl border border-daftime-cream-border bg-daftime-yellow-light p-8 sm:p-10">
            <span className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-daftime-yellow">
              <span className="size-1 rounded-full bg-daftime-yellow" />
              The Guide
            </span>
            <h2 className="h-display mt-3 max-w-[420px] text-balance text-daftime-dark">
              Get Your 2026 Daftime Guide
            </h2>
            <p className="mt-4 max-w-[440px] text-[14px] leading-relaxed text-daftime-gray-text">
              Free editorial overview of the legal, accounting and advisory
              foundations to grow a UAE-based business.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-daftime-dark px-6 text-[14px] tracking-tight text-white transition-colors hover:bg-black"
            >
              Download the Guide
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v8m0 0L3.5 5.5M7 9l3.5-3.5M2 12h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-daftime-cream-border pt-6">
              <Stat label="Edition" value="2026" />
              <Stat label="Pages" value="60+" />
              <Stat label="Focus" value="Corporate Tax" />
            </dl>
          </div>

          {/* Right: book mockup */}
          <div className="relative overflow-hidden rounded-3xl border border-daftime-gray-border bg-daftime-gray-light p-6 sm:p-10">
            <div className="absolute left-6 top-6 flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-daftime-gray-mute">
              <span className="size-1 rounded-full bg-daftime-yellow" />
              The 2026 Daftime Guide
            </div>
            <Image
              src="/assets/guide-book.png"
              alt="Daftime 2026 Guide"
              width={560}
              height={420}
              className="ml-auto mt-12 h-auto w-full max-w-[480px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-[11px] uppercase tracking-[0.18em] text-daftime-gray-mute">
        {label}
      </dt>
      <dd className="text-[18px] tracking-tight text-daftime-dark">{value}</dd>
    </div>
  );
}
