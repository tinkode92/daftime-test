import { notFound } from "next/navigation";
import ToolShell from "@/components/blog/ToolShell";
import { getToolBySlug } from "@/lib/blog";

export const metadata = {
  title: "UAE Dividend Distribution Calculator — Daftime",
};

export default function Page() {
  const tool = getToolBySlug("dividend-distribution");
  if (!tool) notFound();
  return <ToolShell tool={tool} />;
}
