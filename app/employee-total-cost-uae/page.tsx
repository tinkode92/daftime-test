import { notFound } from "next/navigation";
import ToolShell from "@/components/blog/ToolShell";
import { getToolBySlug } from "@/lib/blog";

export const metadata = {
  title: "Employee Total Cost UAE — Daftime",
};

export default function Page() {
  const tool = getToolBySlug("employee-total-cost");
  if (!tool) notFound();
  return <ToolShell tool={tool} />;
}
