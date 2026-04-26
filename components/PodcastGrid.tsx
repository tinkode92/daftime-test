"use client";

import Image from "next/image";
import { useState } from "react";

type Episode = {
  date: string;
  title: string;
  description: string;
};

const episodes: Episode[] = [
  {
    date: "Dec 30, 2025",
    title: "Understanding VAT in Emirates: Essential guide by Daftime",
    description:
      "A practical breakdown of VAT obligations, registration thresholds and filing.",
  },
  {
    date: "Dec 26, 2025",
    title: "Create a Professional Ecosystem",
    description:
      "How to build a sustainable network around your international business.",
  },
  {
    date: "Dec 22, 2025",
    title: "Understanding VAT in the UAE: Essential Guide by Daftime",
    description:
      "Recurring questions on cross-border VAT and how Daftime handles them.",
  },
  {
    date: "Dec 18, 2025",
    title: "Can I deduct for car and personal expenses from the Corporate Tax?",
    description:
      "What qualifies and what doesn't when deducting expenses in the UAE.",
  },
  {
    date: "Dec 14, 2025",
    title: "Can I Deduct My Salary Under Corporate Tax?",
    description:
      "Owner-manager salaries: what's allowed and how to structure them.",
  },
  {
    date: "Dec 10, 2025",
    title: "Freelancer with Mr. Tax?",
    description:
      "Freelancing in the UAE — visas, licensing and compliance essentials.",
  },
  {
    date: "Dec 06, 2025",
    title: "A serious investor analysis in Dubai? The well-known autopsy",
    description:
      "Lessons from real founder mistakes when investing across borders.",
  },
  {
    date: "Dec 02, 2025",
    title: "Is it complicated to close my company in the UAE?",
    description:
      "Step-by-step on shutting down an entity cleanly and avoiding fines.",
  },
  {
    date: "Nov 28, 2025",
    title: "Avoid Paying Corporate Tax in the UAE",
    description:
      "Strategies and structures, with the limits everyone should know.",
  },
  {
    date: "Nov 24, 2025",
    title: "Optimising your French holding from abroad",
    description:
      "Cross-border holding strategies for entrepreneurs based outside France.",
  },
  {
    date: "Nov 20, 2025",
    title: "Setting up a Free Zone vs Mainland company",
    description:
      "Which UAE structure fits your business — pros, cons, hidden costs.",
  },
  {
    date: "Nov 16, 2025",
    title: "Tax residency: how to actually prove it",
    description:
      "Documents, ties, and the practical bar to clear in 2026.",
  },
];

export default function PodcastGrid() {
  const [visible, setVisible] = useState(9);
  const shown = episodes.slice(0, visible);
  const hasMore = visible < episodes.length;

  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1152px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-daftime-yellow">
            <span className="size-1 rounded-full bg-daftime-yellow" />
            Blog
          </span>
          <h2 className="h-display max-w-[760px] text-balance text-daftime-dark">
            Built for business without borders
          </h2>
          <p className="mt-2 max-w-[480px] text-[15px] leading-relaxed text-daftime-gray-text">
            Founders, accountants and lawyers share what&apos;s working today
            across France, the UAE and Portugal.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((ep, i) => (
            <PodcastCard key={`${ep.date}-${i}`} episode={ep} />
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + 6)}
              className="flex h-11 items-center justify-center rounded-lg border border-daftime-gray-border bg-white px-6 text-[14px] tracking-tight text-daftime-dark transition-colors hover:bg-daftime-gray-light"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PodcastCard({ episode }: { episode: Episode }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-daftime-gray-border bg-white transition-shadow hover:shadow-md">
      {/* Cover */}
      <div className="relative h-[180px] overflow-hidden bg-daftime-dark">
        {/* Decorative planet */}
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <Image
            src="/assets/hero-planet.png"
            alt=""
            width={600}
            height={600}
            className="h-full w-full scale-[1.4] object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        <span className="absolute left-4 top-4 text-[12px] uppercase tracking-[0.18em] text-white/70">
          {episode.date}
        </span>

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end gap-1 p-4 text-center">
          <Image
            src="/assets/logo-wordmark.png"
            alt="Daftime"
            width={96}
            height={20}
            className="h-5 w-auto object-contain brightness-0 invert"
          />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white">
            Podcast
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-[16px] font-medium leading-snug tracking-tight text-daftime-dark">
          {episode.title}
        </h3>
        <p className="line-clamp-2 text-[13px] leading-relaxed text-daftime-gray-text">
          {episode.description}
        </p>
        <div className="mt-auto pt-2">
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-md bg-daftime-yellow px-4 text-[13px] tracking-tight text-black transition-opacity hover:opacity-90"
          >
            Visit Podcast
          </button>
        </div>
      </div>
    </article>
  );
}
