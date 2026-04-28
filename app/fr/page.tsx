import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceTabs from "@/components/ServiceTabs";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import GuideCTA from "@/components/GuideCTA";
import BookConsultationCTA from "@/components/BookConsultationCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Daftime France — Votre partenaire international",
  description:
    "Daftime accompagne entrepreneurs et investisseurs sur les volets juridique, fiscal, comptable et conseil à Dubaï et à l'international.",
};

export default function HomeFR() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Hero locale="fr" />
      <Services locale="fr" />
      <ServiceTabs locale="fr" />
      <Blog locale="fr" />
      <Testimonials locale="fr" />
      <GuideCTA locale="fr" />
      <BookConsultationCTA locale="fr" />
      <Footer locale="fr" />
    </main>
  );
}
