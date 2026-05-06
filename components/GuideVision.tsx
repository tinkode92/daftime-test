"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { t } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";

export default function GuideVision() {
  const locale = useEffectiveLocale("en");
  const tr = t(locale).guidePage;
  const meta = [
    { label: tr.visionMeta.founder, value: tr.visionMeta.founderName },
    { label: tr.visionMeta.brand, value: tr.visionMeta.brandName },
    { label: tr.visionMeta.location, value: tr.visionMeta.locationName },
    { label: tr.visionMeta.year, value: tr.visionMeta.yearValue },
  ];
  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto flex max-w-[1176px] flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 font-mono text-[14px] uppercase leading-[20px] tracking-[0.12em] text-[#070a33]">
            <span className="size-1 rounded-full bg-[#070a33]" />
            {tr.visionEyebrow}
          </span>
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
            <h2 className="flex-1 text-[40px] leading-[1.1] tracking-[-0.04em] text-black sm:text-[48px]">
              {tr.visionHeading}
            </h2>
            <p className="max-w-[319px] text-[16px] leading-[1.5] tracking-tight text-[#595959]">
              {tr.visionSubtitle}
            </p>
          </div>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[580/377] overflow-hidden rounded-xl bg-daftime-gray-card lg:aspect-auto lg:h-[377px]"
          >
            <Image
              src="/assets/guide-vision-sami.svg"
              alt="Sami Sehrine"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              sizes="(min-width: 1024px) 580px, 100vw"
            />
          </motion.div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-xl bg-[#f4f4f4] px-6 py-6 lg:h-[377px]"
          >
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
              <p>“{tr.visionQuote1}</p>
              <p>
                <span className="text-black">{tr.visionQuote2}</span>
                ”
              </p>
            </div>
          </motion.div>
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
