import { notFound } from "next/navigation";
import ToolShell from "@/components/blog/ToolShell";
import { getToolBySlug } from "@/lib/blog";

export const metadata = {
  title: "Tax Invoice Generator — Daftime",
};

export default function Page() {
  const tool = getToolBySlug("tax-invoice-generator");
  if (!tool) notFound();
  return <ToolShell tool={tool} />;
}
