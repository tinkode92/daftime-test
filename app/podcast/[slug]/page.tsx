import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PodcastDetail from "@/components/PodcastDetail";
import {
  getAllPodcasts,
  getPodcastBySlug,
  getPodcastNeighbors,
} from "@/lib/blog";

export function generateStaticParams() {
  return getAllPodcasts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const ep = getPodcastBySlug(params.slug);
  if (!ep) return {};
  return {
    title: `${ep.title} — Daftime Podcast`,
    description: ep.description,
    openGraph: {
      title: ep.title,
      description: ep.description,
      images: ep.image ? [{ url: ep.image }] : undefined,
      type: "video.other",
    },
  };
}

export default function PodcastEpisodePage({
  params,
}: {
  params: { slug: string };
}) {
  const episode = getPodcastBySlug(params.slug);
  if (!episode) notFound();
  const { prev, next } = getPodcastNeighbors(params.slug);
  return (
    <main className="min-h-screen w-full bg-white">
      <PodcastDetail episode={episode} prev={prev} next={next} />
      <Footer />
    </main>
  );
}
