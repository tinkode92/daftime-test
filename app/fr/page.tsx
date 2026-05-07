import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceTabs from "@/components/ServiceTabs";
import BlogAEFROnly from "@/components/BlogAEFROnly";
import Testimonials from "@/components/Testimonials";
import GuideCTA from "@/components/GuideCTA";
import BookConsultationCTA from "@/components/BookConsultationCTA";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/lib/blog";

export const metadata = {
  title: "Daftime France — Votre partenaire international",
  description:
    "Daftime accompagne entrepreneurs et investisseurs sur les volets juridique, fiscal, comptable et conseil à Dubaï et à l'international.",
};

export default function HomeFR() {
  const articles = getAllArticles().slice().sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
  return (
    <main className="min-h-screen w-full bg-white">
      <Hero locale="fr" />
      <Services locale="fr" />
      <ServiceTabs locale="fr" />
      <BlogAEFROnly articles={articles} />
      <Testimonials locale="fr" />
      <GuideCTA locale="fr" />
      <BookConsultationCTA locale="fr" />
      <Footer locale="fr" />
    </main>
  );
}
