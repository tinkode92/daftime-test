"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

type Testimonial = {
  id: string;
  title: string;
  avatar: string;
  bgImage: string;
  quote: string;
  closing: string;
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
      "We work with the Daftime firm for all of our companies based in Dubai, and we would like to highlight the exceptional quality of their support. A very professional and proactive team, Accessible, precise, and competent follow-up, Clear, tailored, and business-oriented advice. Special mention to Sami, a dedicated person who always stays up to date with regulatory developments and supports us with seriousness and responsiveness.",
    closing:
      "We highly recommend Daftime without hesitation and truly appreciate their human and expert approach.",
    founder: "Imrane Haniff",
    brand: "Café Crème",
    location: "Dubai",
    year: "2019",
  },
  {
    id: "rashid",
    title: "Was struggling to find a good accounting company",
    avatar: "/assets/testi-2-avatar.png",
    bgImage: "/assets/testi-1-bg.png",
    quote:
      "I had been struggling for months to find an accounting firm that truly understood my structure across the Mainland and Free Zone setups. The Daftime team listened, simplified everything, and put a clear, audit-ready process in place from day one. Their reactivity and transparency made a real difference.",
    closing:
      "I now run a much tighter operation and finally trust the numbers I report to my partners.",
    founder: "Rashid Al-Mansouri",
    brand: "Mansouri Trading",
    location: "Abu Dhabi",
    year: "2021",
  },
  {
    id: "sophie",
    title: "The only true accounting firm in Dubai!",
    avatar: "/assets/testi-3-avatar.png",
    bgImage: "/assets/testi-1-bg.png",
    quote:
      "After cycling through three providers, I had almost given up on finding a partner who could handle both UAE compliance and our group reporting. Daftime nailed it from the first month. The team is responsive, the deliverables are sharp, and the strategic advice helped us restructure two entities tax-efficiently.",
    closing:
      "If you want a real accounting firm rather than a license-renewal shop, this is the one.",
    founder: "Sophie Marchand",
    brand: "Atelier Lumière",
    location: "Dubai",
    year: "2022",
  },
  {
    id: "kareem",
    title: "Was struggling to find a good accounting company",
    avatar: "/assets/testi-4-avatar.png",
    bgImage: "/assets/testi-1-bg.png",
    quote:
      "We were juggling spreadsheets, an offshore bookkeeper, and zero strategic visibility on cash flow. Daftime onboarded us in two weeks, set up clean monthly reporting, and now their part-time CFO sits in our quarterly board reviews. It changed how we make decisions as a team.",
    closing:
      "Honest, sharp, and genuinely invested in our growth — exactly what a founder needs.",
    founder: "Kareem Saleh",
    brand: "NorthLane Logistics",
    location: "Sharjah",
    year: "2023",
  },
];

export default function Testimonials() {
  const [openId, setOpenId] = useState<string | null>("imrane");

  return (
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1176px]">
        {/* Header */}
        <Reveal className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1 bg-black" />
            <p className="label-mono text-[#070a33]">Testimonial</p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="h-display max-w-[700px] text-black">
              Trusted by entrepreneurs
              <br className="hidden sm:block" />
              {" around the world"}
            </h2>
            <p className="max-w-[412px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text sm:text-[16px]">
              Every mission is a collaboration, every achievement, a shared
              effort. Their positive feedback reminds us why we do what we do:
              to create trust, clarity, and long-term value.
            </p>
          </div>
        </Reveal>

        {/* Testimonial accordion */}
        <div className="mt-12 flex flex-col sm:mt-16">
          {testimonials.map((t, idx) => {
            const isOpen = openId === t.id;
            return (
              <Reveal
                key={t.id}
                delay={idx * 80}
                className={
                  "py-5 sm:py-6 " + (idx > 0 ? "border-t border-black/10" : "")
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                    <div className="size-10 shrink-0 overflow-hidden rounded-md sm:size-11">
                      <Image
                        src={t.avatar}
                        alt=""
                        width={44}
                        height={44}
                        className="size-full object-cover"
                      />
                    </div>
                    <p className="text-[18px] leading-tight tracking-tight text-black sm:text-[22px] md:text-[24px]">
                      {t.title}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`testimonial-${t.id}`}
                    onClick={() => setOpenId(isOpen ? null : t.id)}
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

                <div
                  id={`testimonial-${t.id}`}
                  className={
                    "grid overflow-hidden transition-all duration-500 ease-out " +
                    (isOpen
                      ? "mt-6 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="min-h-0">
                    <ExpandedTestimonial t={t} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExpandedTestimonial({ t }: { t: Testimonial }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="relative h-[260px] overflow-hidden rounded-xl sm:h-[330px] lg:h-[377px]">
          <Image
            src={t.bgImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 580px, 100vw"
            className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-[#f4f4f4] p-5 sm:p-6 lg:h-[377px]">
          <span className="absolute left-5 top-1 text-[56px] leading-none text-black sm:left-6 sm:text-[64px]">
            &ldquo;
          </span>
          <p className="mt-12 text-[15px] leading-relaxed tracking-tight text-daftime-gray-text sm:mt-14 sm:text-[17px] lg:absolute lg:bottom-6 lg:left-6 lg:right-6 lg:mt-0 lg:text-[18px]">
            &ldquo;{t.quote}
            <br />
            <br />
            <span className="text-black">{t.closing}&rdquo;</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-4 text-[16px] tracking-tight sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:text-[20px] md:text-[24px]">
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-[#919191]">Founder</span>
          <span className="text-black">{t.founder}</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-[#919191]">Brand</span>
          <span className="text-black">{t.brand}</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-[#919191]">Location</span>
          <span className="text-black">{t.location}</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-[#919191]">Year</span>
          <span className="text-black">{t.year}</span>
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
