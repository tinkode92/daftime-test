import GuideHero from "@/components/GuideHero";
import GuideSections from "@/components/GuideSections";
import GuideAudience from "@/components/GuideAudience";
import GuideVision from "@/components/GuideVision";
import GuideCTA from "@/components/GuideCTA";
import PodcastWorldMap from "@/components/PodcastWorldMap";
import Footer from "@/components/Footer";

export const metadata = {
  title: "2026 Daftime Guide",
  description:
    "Editorial overview of the legal, accounting and advisory foundations to structure a business in the UAE in 2026.",
};

export default function GuidePage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <GuideHero />
      <GuideSections />
      <GuideAudience />
      <GuideVision />
      <GuideCTA />
      <PodcastWorldMap />
      <Footer />
    </main>
  );
}
