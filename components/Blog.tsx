import Image from "next/image";

const articles = [
  {
    image: "/assets/blog-1.png",
    date: "Mar 25, 2026",
    title: "A-t-on besoin d'un comptable à Dubaï ? Guide 2026",
    description: "A-t-on besoin d'un comptable à Dubaï ? Guide 2026",
  },
  {
    image: "/assets/blog-2.png",
    date: "Mar 25, 2026",
    title: "Accounting Services in Dubai: How to Choose the Right Provider",
    description: "Accounting Services in Dubai: How to Choose the Right Provider",
  },
  {
    image: "/assets/blog-3.png",
    date: "Mar 25, 2026",
    title: "Financial Mistakes Startups Make in Dubai 2026",
    description: "Financial Mistakes Startups Make in Dubai 2026",
  },
  {
    image: "/assets/blog-4.png",
    date: "Mar 25, 2026",
    title: "Choisir un comptable à Dubaï : guide 2026 et avis",
    description: "Choisir un comptable à Dubaï : guide 2026 et avis",
  },
  {
    image: "/assets/blog-5.png",
    date: "Mar 25, 2026",
    title: "Accounting for Small Businesses in Dubai",
    description: "Accounting for Small Businesses in Dubai",
  },
  {
    image: "/assets/blog-6.png",
    date: "Mar 25, 2026",
    title: "Bookkeeping in Dubai: 2026 pro guide for business growth",
    description: "Bookkeeping in Dubai: 2026 pro guide for business growth",
  },
];

const filters = [
  { label: "All", active: true },
  { label: "English", active: false },
  { label: "Français", active: false },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-daftime-gray-bg px-16 pt-0 pb-16">
      <div className="mx-auto max-w-[1152px]">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="size-1 bg-[#131313]" />
              <p className="label-mono text-[#070a33]">Blog</p>
            </div>
            <h2 className="h-display max-w-[668px] text-black">
              Built for business without borders
            </h2>
            <p className="max-w-[482px] text-[16px] leading-relaxed tracking-tight text-daftime-gray-text">
              Built on collaboration and shared success, our work is guided by a clear purpose: delivering trust, clarity, and long-term value.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap items-start gap-2">
            {filters.map((f) => (
              <button
                key={f.label}
                className={
                  "flex items-center gap-1 rounded-full pl-1 pr-4 py-1 backdrop-blur " +
                  (f.active ? "bg-daftime-yellow" : "bg-white")
                }
              >
                <span
                  className={
                    "flex size-8 items-center justify-center rounded-full " +
                    (f.active ? "bg-daftime-yellow-dark" : "bg-black")
                  }
                >
                  <svg viewBox="0 0 16 16" className="size-3.5 fill-white" aria-hidden>
                    <path d="M8 1.5l1.6 4.5h4.7l-3.8 2.9 1.5 4.6L8 11l-3.9 2.5 1.5-4.6L1.7 6h4.7L8 1.5z" />
                  </svg>
                </span>
                <span className="px-1 text-[14px] tracking-tight text-[#131313]">
                  {f.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative h-[228px] m-4 overflow-hidden rounded-xl bg-daftime-gray-card">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-4 pb-4 pt-0">
                <p className="text-[14px] tracking-tight text-daftime-gray-text">{a.date}</p>
                <h3 className="mt-2 text-[20px] leading-tight tracking-tight text-black">
                  {a.title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed tracking-tight text-daftime-gray-text">
                  {a.description}
                </p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-xl border border-black/10 bg-black/[0.04] px-5 py-3 text-[14px] tracking-tight text-black transition-colors hover:bg-black/10">
                  Read More
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden>
                    <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-90 4 3)" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex h-10 items-center justify-center rounded-lg bg-black px-4 text-[14px] tracking-tight text-white transition-opacity hover:opacity-90">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
