import Image from "next/image";

const meta = [
  { label: "Founder", value: "Sam Sefren" },
  { label: "Client", value: "Daftime" },
  { label: "Localisation", value: "Dubaï" },
];

export default function GuideVision() {
  return (
    <section className="bg-daftime-gray-light px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1152px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <h2 className="h-display max-w-[420px] text-balance text-daftime-dark">
            A Structured Vision
          </h2>
          <p className="max-w-[420px] text-[15px] leading-relaxed text-daftime-gray-text">
            Editorial direction by the Daftime founders — a reflection of how
            we structure our advisory and accounting practice today.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-daftime-gray-border bg-white lg:grid-cols-[460px_1fr]">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <Image
              src="/assets/testi-1-bg.png"
              alt="Sam Sefren"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 460px, 100vw"
            />
          </div>
          <div className="flex flex-col gap-6 p-6 sm:p-8 md:p-10">
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              aria-hidden
              className="text-daftime-yellow"
            >
              <path
                d="M0 24V14C0 6.27 5.6 0.67 13.33 0v4.27C8.27 4.93 5.07 8.4 4.8 13.33H10.67V24H0zm21.33 0V14c0-7.73 5.6-13.33 13.34-14v4.27c-5.07.66-8.27 4.13-8.54 9.06H32V24H21.33z"
                fill="currentColor"
              />
            </svg>
            <p className="text-[18px] leading-relaxed text-daftime-dark sm:text-[20px]">
              We wrote this guide because too many founders arrive in the UAE
              without a clear structure. The 2026 edition reflects what we
              practise daily — clarity, precision, and the long view.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-daftime-gray-border pt-6">
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-daftime-gray-mute">
                    {m.label}
                  </span>
                  <span className="text-[15px] text-daftime-dark">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
