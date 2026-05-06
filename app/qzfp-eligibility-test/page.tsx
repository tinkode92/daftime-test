import { notFound } from "next/navigation";
import ToolShell from "@/components/blog/ToolShell";
import { getToolBySlug } from "@/lib/blog";

export const metadata = {
  title: "QFZP Eligibility Test — Daftime",
};

export default function Page() {
  const tool = getToolBySlug("qfzp-eligibility-test");
  if (!tool) notFound();
  return <ToolShell tool={tool} />;
}
