"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import { t as tr, type Locale } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";

type Testimonial = {
  id: string;
  title: string;
  avatar: string;
  bgImage: string;
  quote: string;
  founder: string;
  brand: string;
  location: string;
  year: string;
};

const testimonials: Testimonial[] = [
  {
    id: "imrane",
    title: "We work with the Daftime firm for all of our companies based in Dubai",
    avatar: "/assets/testi-1-avatar.png",
    bgImage: "/assets/testi-1-bg.png",
    quote:
      "We work with the Daftime firm for all of our companies based in Dubai, and we would like to highlight the exceptional quality of their support. A very professional and proactive team, accessible, precise, and competent follow-up, clear, tailored, and business-oriented advice. Special mention to Sami, a dedicated person who always stays up to date with regulatory developments and supports us with seriousness and responsiveness. We highly recommend Daftime without hesitation and truly appreciate their human and expert approach.",
    founder: "Imrane Haniff",
    brand: "Café Crème",
    location: "Dubai",
    year: "2019",
  },
  {
    id: "anass",
    title: "Was struggling to find a good accounting company",
    avatar: "/assets/testi-2-avatar.png",
    bgImage: "/assets/testi-anass-moudrik.svg",
    quote:
      "Was struggling to find a good accounting company since I arrived in the UAE but I finally found the right guys! Efficiency, practice, language, pricepoint this is your go to option if you want a reliable partner.",
    founder: "Anass Moudrik",
    brand: "Bocuse",
    location: "Dubai",
    year: "2024",
  },
  {
    id: "marion",
    title: "The only true accounting firm in Dubai!",
    avatar: "/assets/testi-3-avatar.png",
    bgImage: "/assets/testi-marion-lefebvre.svg",
    quote:
      "Thanks to Daftime for their support, the only true accounting firm in Dubai!",
    founder: "Marion Lefebvre",
    brand: "Cheffe d'oeuvre",
    location: "Dubai",
    year: "2023",
  },
  {
    id: "georges",
    title: "Strong understanding of the context in Dubai",
    avatar: "/assets/testi-4-avatar.png",
    bgImage: "/assets/testi-georges-leguerne.svg",
    quote:
      "Hello, I recommend this firm, with which we have been working since the beginning of 2024. They have a strong understanding of the context and matters in Dubai.",
    founder: "Georges Leguerne",
    brand: "Berexia Advisory",
    location: "Dubai",
    year: "2024",
  },
];

export default function Testimonials({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const [openId, setOpenId] = useState<string | null>("imrane");
  const effectiveLocale = useEffectiveLocale(locale);
  const trans = tr(effectiveLocale).testimonials;

  return (
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1176px]">
        {/* Header */}
        <Reveal className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1 bg-black" />
            <p className="label-mono text-[#070a33]">{trans.eyebrow}</p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="h-display max-w-[700px] text-black">
              {trans.heading[0]}
              <br className="hidden sm:block" />
              {" " + trans.heading[1]}
            </h2>
            <p className="max-w-[412px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text sm:text-[16px]">
              {trans.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Testimonial accordion */}
        <div className="mt-12 flex flex-col sm:mt-16">
          {testimonials.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <Reveal
                key={item.id}
                delay={idx * 80}
                className={
                  "py-5 sm:py-6 " + (idx > 0 ? "border-t border-black/10" : "")
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                    <div className="size-10 shrink-0 overflow-hidden rounded-md sm:size-11">
                      <Image
                        src={item.avatar}
                        alt=""
                        width={44}
                        height={44}
                        className="size-full object-cover"
                      />
                    </div>
                    <p className="text-[18px] leading-tight tracking-tight text-black sm:text-[22px] md:text-[24px]">
                      {item.title}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`testimonial-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-daftime-yellow bg-daftime-cream transition-all duration-300 hover:scale-110 hover:bg-daftime-cream/80 sm:size-12"
                  >
                    <span
                      className="inline-flex transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`testimonial-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: { duration: 0.45, delay: 0.08 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.45,
                            ease: [0.4, 0, 0.6, 1],
                          },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6">
                        <ExpandedTestimonial item={item} meta={trans.meta} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExpandedTestimonial({
  item,
  meta,
}: {
  item: Testimonial;
  meta: { founder: string; brand: string; location: string; year: string };
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 items-stretch gap-2 lg:grid-cols-2">
        {/* Portrait — keeps a consistent aspect across all rows */}
        <div className="relative aspect-[16/11] overflow-hidden rounded-xl">
          <Image
            src={item.bgImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 580px, 100vw"
            className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>
        {/* Quote panel — height adapts to content, text aligned from the top */}
        <div className="relative flex flex-col overflow-hidden rounded-xl bg-[#f4f4f4] p-6 sm:p-8">
          <span
            aria-hidden
            className="block text-[44px] leading-none text-black sm:text-[56px]"
          >
            &ldquo;
          </span>
          <p className="mt-3 text-[15px] leading-relaxed tracking-tight text-black sm:text-[17px] lg:text-[18px]">
            {item.quote}
            <span className="text-daftime-gray-text">&rdquo;</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-4 text-[16px] tracking-tight sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:text-[20px] md:text-[24px]">
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-[#919191]">{meta.founder}</span>
          <span className="text-black">{item.founder}</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-[#919191]">{meta.brand}</span>
          <span className="text-black">{item.brand}</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-[#919191]">{meta.location}</span>
          <span className="text-black">{item.location}</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-[#919191]">{meta.year}</span>
          <span className="text-black">{item.year}</span>
        </div>
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5 stroke-black"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5 stroke-black"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M5 12h14" />
    </svg>
  );
}
