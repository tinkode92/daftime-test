import PodcastHero from "@/components/PodcastHero";
import PodcastGrid from "@/components/PodcastGrid";
import PodcastFeatured from "@/components/PodcastFeatured";
import PodcastCTA from "@/components/PodcastCTA";
import PodcastWorldMap from "@/components/PodcastWorldMap";
import Footer from "@/components/Footer";
import { getAllPodcasts } from "@/lib/blog";

export const metadata = {
  title: "Podcast — Daftime",
  description:
    "Voices behind smarter business — interviews with founders, lawyers and accountants from the Daftime network.",
};

export default function PodcastPage() {
  const all = getAllPodcasts();
  const [featured, ...rest] = all;

  return (
    <main className="min-h-screen w-full bg-white">
      <PodcastHero />
      {featured && <PodcastFeatured episode={featured} />}
      <PodcastGrid episodes={rest} />
      <PodcastCTA />
      <PodcastWorldMap />
      <Footer />
    </main>
  );
}
