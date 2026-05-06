import { notFound } from "next/navigation";
import ToolShell from "@/components/blog/ToolShell";
import { getToolBySlug } from "@/lib/blog";

export const metadata = {
  title: "Dubai Real Estate ROI Calculator — Daftime",
};

export default function Page() {
  const tool = getToolBySlug("dubai-real-estate-roi");
  if (!tool) notFound();
  return <ToolShell tool={tool} />;
}
