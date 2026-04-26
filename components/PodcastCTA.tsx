import Image from "next/image";

export default function PodcastCTA() {
  return (
    <section className="bg-white px-2 py-2 sm:px-3 sm:py-3">
      <div className="relative overflow-hidden rounded-2xl bg-daftime-dark px-6 py-12 sm:rounded-3xl sm:px-10 sm:py-16 md:px-16 md:py-20">
        {/* Bar chart visual */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-end justify-end gap-1.5 pr-10 opacity-60 md:flex">
          {Array.from({ length: 28 }).map((_, i) => {
            const h = 30 + Math.sin(i * 0.7) * 30 + Math.random() * 50;
            return (
              <span
                key={i}
                className="w-3 rounded-t bg-gradient-to-t from-white/10 to-white/40"
                style={{ height: `${h}%` }}
              />
            );
          })}
        </div>

        <div className="relative flex flex-col gap-6">
          <Image
            src="/assets/logo-wordmark.png"
            alt="Daftime"
            width={180}
            height={48}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
          <h2 className="h-display max-w-[640px] text-balance text-white">
            Chartered Accountant
            <br />
            &amp; Lawyers | FR - UAE
          </h2>
          <div>
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-daftime-yellow px-6 text-[14px] tracking-tight text-black transition-opacity hover:opacity-90"
            >
              Watch Podcast
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
