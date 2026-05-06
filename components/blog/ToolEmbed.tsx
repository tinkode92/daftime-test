"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Embeds a static HTML tool from /public/tools/<slug>.html inside a
 * sandboxed iframe and auto-resizes the iframe to match the inner
 * document height. Avoids CSS bleed between the tool's styles and the
 * Daftime site styles, while keeping deep-linking to a top-level URL.
 */
export default function ToolEmbed({ slug }: { slug: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(900);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const measure = () => {
      try {
        const doc = iframe.contentDocument;
        if (!doc) return;
        const h = Math.max(
          doc.documentElement.scrollHeight,
          doc.body?.scrollHeight ?? 0,
        );
        if (h && Math.abs(h - height) > 4) setHeight(h);
      } catch {
        // cross-origin or not yet loaded; ignore
      }
    };

    const onLoad = () => {
      measure();
      // observe size changes inside the iframe document
      try {
        const doc = iframe.contentDocument;
        if (!doc) return;
        const ro = new ResizeObserver(measure);
        ro.observe(doc.documentElement);
        // also re-measure when the user interacts (forms expanding, etc.)
        doc.addEventListener("input", measure);
        doc.addEventListener("click", measure);
        // store cleanup on the iframe element
        (iframe as unknown as { _cleanup?: () => void })._cleanup = () => {
          ro.disconnect();
          doc.removeEventListener("input", measure);
          doc.removeEventListener("click", measure);
        };
      } catch {
        // ignore
      }
    };

    iframe.addEventListener("load", onLoad);
    if (iframe.contentDocument?.readyState === "complete") onLoad();

    return () => {
      iframe.removeEventListener("load", onLoad);
      const cleanup = (iframe as unknown as { _cleanup?: () => void })._cleanup;
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white px-2 sm:px-3">
      <div className="mx-auto max-w-[1176px]">
        <iframe
          ref={ref}
          src={`/tools/${slug}.html`}
          title={slug}
          loading="lazy"
          className="block w-full rounded-2xl border border-daftime-gray-border bg-white sm:rounded-3xl"
          style={{ height: `${height}px` }}
        />
      </div>
    </div>
  );
}
