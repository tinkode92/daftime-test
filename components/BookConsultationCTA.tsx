import Image from "next/image";

export default function BookConsultationCTA() {
  return (
    <section id="contact" className="bg-white px-4 pt-4">
      <div className="relative overflow-hidden rounded-2xl bg-black p-10">
        <div className="absolute inset-0">
          <Image
            src="/assets/cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative flex h-[417px] flex-col justify-between">
          <div className="flex items-center gap-2">
            <div className="size-1 rounded-full bg-white" />
            <p className="label-mono text-white">Ready to take the next step?</p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="h-display whitespace-pre-line text-white">
              {"Let's talk — book\na free consultation"}
            </h2>
            <a
              href="#schedule"
              className="btn-pill bg-white text-black hover:opacity-90"
            >
              Schedule a meeting
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
