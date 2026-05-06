import { notFound } from "next/navigation";
import ToolShell from "@/components/blog/ToolShell";
import { getToolBySlug } from "@/lib/blog";

export const metadata = {
  title: "FTA UAE Penalties Calculator — Daftime",
};

export default function Page() {
  const tool = getToolBySlug("fta-penalties-calculator");
  if (!tool) notFound();
  return <ToolShell tool={tool} />;
}
