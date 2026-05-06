"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { getYouTubeId, type Podcast } from "@/lib/blog";

export default function PodcastGrid({
  episodes,
}: {
  episodes: Podcast[];
}) {
  const [visible, setVisible] = useState(9);
  const shown = episodes.slice(0, visible);
  const hasMore = visible < episodes.length;

  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1152px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2">
            <span className="size-1 rounded-full bg-daftime-yellow" />
            <span className="label-mono text-daftime-yellow">All episodes</span>
          </span>
          <h2 className="h-display max-w-[760px] text-balance text-black">
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
            <PodcastCard
              key={ep.slug + i}
              episode={ep}
              delay={(i % 3) * 80}
            />
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + 6)}
              className="flex h-11 items-center justify-center rounded-lg border border-daftime-gray-border bg-white px-6 text-[14px] tracking-tight text-black transition-colors hover:bg-daftime-gray-bg"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PodcastCard({
  episode,
  delay,
}: {
  episode: Podcast;
  delay: number;
}) {
  const hasVideo = !!getYouTubeId(episode.content);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/resources/podcast/${episode.slug}`}
        className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-daftime-gray-border bg-white text-left"
      >
        <div className="relative aspect-video overflow-hidden bg-daftime-dark">
          {episode.image ? (
            <Image
              src={episode.image}
              alt={episode.imageAlt || episode.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
          {hasVideo && (
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="grid size-14 place-items-center rounded-full bg-daftime-yellow text-black shadow-xl">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor">
                  <path d="M2 1l12 8L2 17V1z" />
                </svg>
              </span>
            </span>
          )}
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#070a33]">
            Podcast
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="line-clamp-2 text-[16px] font-medium leading-snug tracking-tight text-black">
            {episode.title}
          </h3>
          {episode.description && (
            <p className="line-clamp-2 text-[13px] leading-relaxed text-daftime-gray-text">
              {episode.description}
            </p>
          )}
          {episode.guestName && (
            <div className="mt-auto flex items-center gap-2 pt-2 text-[12px] tracking-tight text-daftime-gray-mute">
              <span className="size-1 rounded-full bg-daftime-yellow" />
              <span>{episode.guestName}</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
