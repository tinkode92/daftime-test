import { notFound } from "next/navigation";
import ToolShell from "@/components/blog/ToolShell";
import { getToolBySlug } from "@/lib/blog";

export const metadata = {
  title: "WPS SIF Generator — Daftime",
};

export default function Page() {
  const tool = getToolBySlug("wps-sif-generator");
  if (!tool) notFound();
  return <ToolShell tool={tool} />;
}
