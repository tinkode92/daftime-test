import { notFound } from "next/navigation";
import ToolShell from "@/components/blog/ToolShell";
import { getToolBySlug } from "@/lib/blog";

export const metadata = {
  title: "UAE Corporate Tax Calculator — Daftime",
};

export default function Page() {
  const tool = getToolBySlug("corporate-tax");
  if (!tool) notFound();
  return <ToolShell tool={tool} />;
}
