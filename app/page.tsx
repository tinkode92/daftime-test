import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceTabs from "@/components/ServiceTabs";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import GuideCTA from "@/components/GuideCTA";
import BookConsultationCTA from "@/components/BookConsultationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Hero />
      <Services />
      <ServiceTabs />
      <Blog />
      <Testimonials />
      <GuideCTA />
      <BookConsultationCTA />
      <Footer />
    </main>
  );
}
