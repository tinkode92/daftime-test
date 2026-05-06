import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceTabs from "@/components/ServiceTabs";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import GuideCTA from "@/components/GuideCTA";
import BookConsultationCTA from "@/components/BookConsultationCTA";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/lib/blog";

export default function Home() {
  const articles = getAllArticles().slice().sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
  return (
    <main className="min-h-screen w-full bg-white">
      <Hero />
      <Services />
      <ServiceTabs />
      <Blog articles={articles} />
      <Testimonials />
      <GuideCTA />
      <BookConsultationCTA />
      <Footer />
    </main>
  );
}
