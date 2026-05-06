import { notFound } from "next/navigation";
import ToolShell from "@/components/blog/ToolShell";
import { getToolBySlug } from "@/lib/blog";

export const metadata = {
  title: "VAT Calculator UAE — Daftime",
};

export default function Page() {
  const tool = getToolBySlug("vat-calculator");
  if (!tool) notFound();
  return <ToolShell tool={tool} />;
}
