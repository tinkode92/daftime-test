"use client";

import Image from "next/image";
import { useState } from "react";

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
    <section className="bg-white px-12 py-16">
      <div className="mx-auto max-w-[1176px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1 bg-black" />
            <p className="label-mono text-[#070a33]">Testimonial</p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="h-display max-w-[700px] text-black">
              Trusted by entrepreneurs<br />
              around the world
            </h2>
            <p className="max-w-[412px] text-[16px] leading-relaxed tracking-tight text-daftime-gray-text">
              Every mission is a collaboration, every achievement, a shared effort. Their positive feedback reminds us why we do what we do: to create trust, clarity, and long-term value.
            </p>
          </div>
        </div>

        {/* Testimonial accordion */}
        <div className="mt-16 flex flex-col">
          {testimonials.map((t, idx) => {
            const isOpen = openId === t.id;
            return (
              <div
                key={t.id}
                className={
                  "py-6 " + (idx > 0 ? "border-t border-black/10" : "")
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-5">
                    <div className="size-11 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={t.avatar}
                        alt=""
                        width={44}
                        height={44}
                        className="size-full object-cover"
                      />
                    </div>
                    <p className="text-[24px] leading-tight tracking-tight text-black">
                      {t.title}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`testimonial-${t.id}`}
                    onClick={() => setOpenId(isOpen ? null : t.id)}
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-daftime-yellow bg-daftime-cream transition-colors hover:bg-daftime-cream/80"
                  >
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </button>
                </div>

                <div
                  id={`testimonial-${t.id}`}
                  className={
                    "grid overflow-hidden transition-all duration-300 ease-out " +
                    (isOpen
                      ? "mt-6 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="min-h-0">
                    <ExpandedTestimonial t={t} />
                  </div>
                </div>
              </div>
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
        <div className="relative h-[377px] overflow-hidden rounded-xl">
          <Image
            src={t.bgImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 580px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>
        <div className="relative h-[377px] overflow-hidden rounded-xl bg-[#f4f4f4] p-6">
          <span className="absolute left-6 top-1 text-[64px] leading-none text-black">
            &ldquo;
          </span>
          <p className="absolute bottom-6 left-6 right-6 text-[18px] leading-relaxed tracking-tight text-daftime-gray-text">
            &ldquo;{t.quote}
            <br />
            <br />
            <span className="text-black">{t.closing}&rdquo;</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 text-[24px] tracking-tight">
        <div className="flex items-center gap-6">
          <span className="text-[#919191]">Founder</span>
          <span className="text-black">{t.founder}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[#919191]">Brand</span>
          <span className="text-black">{t.brand}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[#919191]">Location</span>
          <span className="text-black">{t.location}</span>
        </div>
        <div className="flex items-center gap-6">
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
