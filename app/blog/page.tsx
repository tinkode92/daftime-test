import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogIndex from "@/components/blog/BlogIndex";
import { getAllArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Daftime",
  description:
    "Insights, guides and analysis from Daftime — written for entrepreneurs structuring their business in the UAE.",
};

export default function BlogPage() {
  const articles = getAllArticles().sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
  return (
    <main className="min-h-screen w-full bg-white">
      <Navigation />
      <BlogIndex articles={articles} />
      <Footer />
    </main>
  );
}
