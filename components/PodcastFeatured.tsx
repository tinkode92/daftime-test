import Image from "next/image";
import Link from "next/link";
import { getYouTubeId, type Podcast } from "@/lib/blog";

export default function PodcastFeatured({
  episode,
}: {
  episode: Podcast;
}) {
  const hasVideo = !!getYouTubeId(episode.content);

  return (
    <section className="bg-daftime-gray-bg px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1152px]">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-daftime-yellow" />
              <span className="label-mono text-daftime-yellow">
                Latest episode
              </span>
            </span>
            <h2 className="h-display max-w-[560px] text-balance text-black">
              {episode.title}
            </h2>
          </div>
          {episode.description && (
            <p className="max-w-[420px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text">
              {episode.description}
            </p>
          )}
        </div>

        {/* Featured player card */}
        <Link
          href={`/resources/podcast/${episode.slug}`}
          className="card-hover mt-12 grid w-full grid-cols-1 overflow-hidden rounded-3xl border border-daftime-gray-border bg-white text-left lg:grid-cols-[640px_1fr]"
        >
          <div className="group relative aspect-video lg:aspect-auto lg:min-h-[360px]">
            {episode.image ? (
              <Image
                src={episode.image}
                alt={episode.imageAlt || episode.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 640px, 100vw"
              />
            ) : (
              <div className="size-full bg-daftime-dark" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="grid size-16 place-items-center rounded-full bg-daftime-yellow text-black shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:size-20">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="currentColor">
                    <path d="M2 1.5v21l18-10.5L2 1.5z" />
                  </svg>
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 md:p-10">
            <div className="flex flex-col gap-4">
              {episode.guestName && (
                <div className="flex items-center gap-3">
                  {episode.host && (
                    <span className="relative size-12 overflow-hidden rounded-full bg-daftime-gray-card">
                      <Image
                        src={episode.host}
                        alt={episode.hostAlt || episode.guestName}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </span>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[14px] tracking-tight text-black">
                      {episode.guestName}
                    </span>
                    {episode.guestPosition && (
                      <span className="text-[12px] tracking-tight text-daftime-gray-mute">
                        {episode.guestPosition}
                      </span>
                    )}
                  </div>
                </div>
              )}
              <h3 className="text-[20px] leading-tight tracking-tight text-black sm:text-[24px]">
                {episode.title}
              </h3>
              {episode.description && (
                <p className="line-clamp-3 text-[14px] leading-relaxed text-daftime-gray-text sm:text-[15px]">
                  {episode.description}
                </p>
              )}
            </div>
            <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-tight text-black">
              Watch episode
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path
                  d="M1 5h12M9 1l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
