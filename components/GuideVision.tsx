import Image from "next/image";

const meta = [
  { label: "Founder", value: "Sami Sehrine" },
  { label: "Brand", value: "Daftime" },
  { label: "Location", value: "Dubai" },
  { label: "Year", value: "-" },
];

export default function GuideVision() {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto flex max-w-[1176px] flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 font-mono text-[14px] uppercase leading-[20px] tracking-[0.12em] text-[#070a33]">
            <span className="size-1 rounded-full bg-[#070a33]" />
            Why It Exists
          </span>
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
            <h2 className="flex-1 text-[40px] leading-[1.1] tracking-[-0.04em] text-black sm:text-[48px]">
              A Structured Vision
            </h2>
            <p className="max-w-[319px] text-[16px] leading-[1.5] tracking-tight text-[#595959]">
              A reflection on why clarity, legal coherence, and long-term
              alignment are essential to building sustainable businesses in
              the UAE.
            </p>
          </div>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Photo */}
          <div className="relative aspect-[580/377] overflow-hidden rounded-xl bg-daftime-gray-card lg:aspect-auto lg:h-[377px]">
            <Image
              src="/assets/guide-vision-sami.svg"
              alt="Sami Sehrine"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 580px, 100vw"
            />
          </div>

          {/* Quote card */}
          <div className="relative overflow-hidden rounded-xl bg-[#f4f4f4] px-6 py-6 lg:h-[377px]">
            {/* Big opening quote */}
            <span
              className="block text-[64px] leading-[44px] tracking-[-0.04em] text-black"
              aria-hidden
            >
              “
            </span>

            {/* Daftime wordmark */}
            <div className="mt-12 flex items-center">
              <Image
                src="/assets/daftime-wordmark-blue.svg"
                alt="Daftime — International Law & Accounting"
                width={132}
                height={36}
                className="h-9 w-auto select-none"
                priority={false}
              />
            </div>

            {/* Quote body */}
            <div className="mt-6 flex flex-col gap-5 text-[16px] leading-[1.5] tracking-tight text-[#595959] sm:text-[18px]">
              <p>
                “Every project begins with a clear vision and a solid
                structure. Through this guide, we share the essential
                foundations for creating, structuring and developing a company
                in the UAE — with method, rigor and long-term perspective.
              </p>
              <p>
                <span className="text-black">
                  Our objective is not to simplify complexity, but to bring
                  clarity to it.
                </span>
                ”
              </p>
            </div>
          </div>
        </div>

        {/* Footer meta row */}
        <div className="flex flex-col gap-4 border-t border-daftime-gray-border pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:border-t-0 sm:pt-0">
          {meta.map((m) => (
            <div key={m.label} className="flex items-center gap-6">
              <span className="text-[18px] leading-[1.1] tracking-[-0.04em] text-[#919191] sm:text-[24px]">
                {m.label}
              </span>
              <span className="text-[18px] leading-[1.1] tracking-[-0.04em] text-black sm:text-[24px]">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
