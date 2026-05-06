"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { getYouTubeId, type Podcast } from "@/lib/blog";
import { t } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";

export default function PodcastDetail({
  episode,
  prev,
  next,
}: {
  episode: Podcast;
  prev: Podcast | null;
  next: Podcast | null;
}) {
  const locale = useEffectiveLocale("en");
  const tr = t(locale).podcastPage;
  const videoId = getYouTubeId(episode.content);

  return (
    <>
      {/* Rounded dark hero (Daftime grammar) */}
      <section className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="relative overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/assets/cta-bg.png"
              alt=""
              fill
              priority
              className="object-cover opacity-[0.32]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
          </div>
          <div className="pointer-events-none absolute -right-20 -top-20 size-[420px] rounded-full bg-daftime-yellow/12 blur-[120px]" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1100px] -translate-x-1/2 justify-between md:flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-full w-px bg-white/[0.04]" />
            ))}
          </div>

          <div className="relative flex flex-col px-4 pt-5 pb-12 sm:px-6 sm:pt-7 sm:pb-16 md:px-10 md:pt-9 md:pb-20">
            <div className="flex justify-center">
              <Navigation />
            </div>

            <div className="mx-auto mt-12 flex w-full max-w-[1100px] items-center justify-between gap-4 sm:mt-16">
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-daftime-yellow" />
                <span className="label-mono text-daftime-yellow">
                  {tr.episodeEyebrow}
                </span>
              </span>
              <Link
                href="/resources/podcast"
                className="font-mono text-[12px] uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-daftime-yellow"
              >
                {tr.backToList}
              </Link>
            </div>

            <div className="mx-auto mt-8 flex w-full max-w-[920px] flex-col items-center gap-5 text-center sm:mt-10">
              <h1 className="h-hero text-balance fade-up text-white">
                {episode.title}
              </h1>
              {episode.guestName && (
                <div
                  className="fade-up flex items-center gap-3 text-[14px] text-white/70"
                  style={{ animationDelay: "120ms" }}
                >
                  {episode.host && (
                    <span className="relative size-10 overflow-hidden rounded-full bg-white/10">
                      <Image
                        src={episode.host}
                        alt={episode.hostAlt || episode.guestName}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </span>
                  )}
                  <span className="flex flex-col items-start text-left">
                    <span className="text-white">{episode.guestName}</span>
                    {episode.guestPosition && (
                      <span className="text-[12px] text-white/50">
                        {episode.guestPosition}
                      </span>
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Player + transcript area */}
      <section className="bg-white px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 md:px-16 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-[920px]">
          {videoId ? (
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] sm:rounded-3xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={episode.title}
                frameBorder={0}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : episode.image ? (
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-daftime-gray-card sm:rounded-3xl">
              <Image
                src={episode.image}
                alt={episode.imageAlt || episode.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 920px, 100vw"
              />
            </div>
          ) : null}

          {episode.description && (
            <div className="mt-12 flex flex-col gap-4">
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-daftime-yellow" />
                <span className="label-mono text-[#070a33]">
                  {tr.aboutEyebrow}
                </span>
              </span>
              <p className="prose-daftime text-[16px] leading-relaxed sm:text-[17px]">
                {episode.description}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="bg-daftime-gray-bg px-4 py-12 sm:px-8 sm:py-16 md:px-16">
        <div className="mx-auto grid max-w-[1152px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <NeighborCard direction="prev" episode={prev} tr={tr} />
          <NeighborCard direction="next" episode={next} tr={tr} />
        </div>
      </section>
    </>
  );
}

function NeighborCard({
  direction,
  episode,
  tr,
}: {
  direction: "prev" | "next";
  episode: Podcast | null;
  tr: ReturnType<typeof t>["podcastPage"];
}) {
  const isNext = direction === "next";

  if (!episode) {
    return (
      <div
        aria-hidden
        className="flex min-h-[120px] items-center justify-center rounded-2xl border border-daftime-gray-border bg-white/40 p-6 text-[13px] text-daftime-gray-mute"
      >
        {isNext ? tr.endOfSeries : tr.firstEpisode}
      </div>
    );
  }

  return (
    <Link
      href={`/resources/podcast/${episode.slug}`}
      className={
        "card-hover group flex min-h-[120px] flex-col gap-2 rounded-2xl border border-daftime-gray-border bg-white p-5 sm:p-6 " +
        (isNext ? "sm:items-end sm:text-right" : "")
      }
    >
      <span
        className={
          "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-daftime-gray-mute " +
          (isNext ? "sm:flex-row-reverse" : "")
        }
      >
        <span className="size-1 rounded-full bg-daftime-yellow" />
        {isNext ? tr.nextEpisode : tr.previousEpisode}
      </span>
      <h3 className="line-clamp-2 text-[16px] leading-snug tracking-tight text-black transition-colors group-hover:text-[#070a33] sm:text-[17px]">
        {episode.title}
      </h3>
      <span
        className={
          "mt-auto inline-flex items-center gap-2 text-[13px] tracking-tight text-daftime-gray-text " +
          (isNext ? "sm:flex-row-reverse" : "")
        }
      >
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          aria-hidden
          className={isNext ? "" : "rotate-180"}
        >
          <path
            d="M1 5h12M9 1l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {isNext ? tr.watchNext : tr.watchPrevious}
      </span>
    </Link>
  );
}
