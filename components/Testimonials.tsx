import Image from "next/image";

const collapsed = [
  { avatar: "/assets/testi-2-avatar.png", title: "Was struggling to find a good accounting company" },
  { avatar: "/assets/testi-3-avatar.png", title: "The only true accounting firm in Dubai!" },
  { avatar: "/assets/testi-4-avatar.png", title: "Was struggling to find a good accounting company" },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-12 py-16">
      <div className="mx-auto max-w-[1176px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1 bg-black" />
            <p className="label-mono text-[#070a33]">Testimonial</p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="h-display max-w-[700px] text-black">
              Trusted by entrepreneurs<br />
              around the world
            </h2>
            <p className="max-w-[412px] text-[16px] leading-relaxed tracking-tight text-daftime-gray-text">
              Every mission is a collaboration, every achievement, a shared effort. Their positive feedback reminds us why we do what we do: to create trust, clarity, and long-term value.
            </p>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="mt-16 flex flex-col gap-6">
          <div className="flex items-center gap-5">
            <div className="size-[45px] overflow-hidden rounded-lg">
              <Image
                src="/assets/testi-1-avatar.png"
                alt="Imrane Haniff"
                width={45}
                height={45}
                className="size-full object-cover"
              />
            </div>
            <h3 className="text-[24px] leading-tight tracking-tight text-black">
              We work with the Daftime firm for all of our companies based in Dubai
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div className="relative h-[377px] overflow-hidden rounded-xl">
              <Image
                src="/assets/testi-1-bg.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 580px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
            </div>
            <div className="relative h-[377px] overflow-hidden rounded-xl bg-[#f4f4f4] p-6">
              <span className="absolute left-6 top-1 text-[64px] leading-none text-black">&ldquo;</span>
              <p className="absolute bottom-6 left-6 right-6 text-[18px] leading-relaxed tracking-tight text-daftime-gray-text">
                &ldquo;We work with the Daftime firm for all of our companies based in Dubai, and we would like to highlight the exceptional quality of their support. A very professional and proactive team, Accessible, precise, and competent follow-up, Clear, tailored, and business-oriented advice. Special mention to Sami, a dedicated person who always stays up to date with regulatory developments and supports us with seriousness and responsiveness.
                <br />
                <br />
                <span className="text-black">We highly recommend Daftime without hesitation and truly appreciate their human and expert approach.&rdquo;</span>
              </p>
            </div>
          </div>

          {/* Meta line */}
          <div className="flex flex-wrap items-center justify-between gap-6 text-[24px] tracking-tight">
            <div className="flex items-center gap-6">
              <span className="text-[#919191]">Founder</span>
              <span className="text-black">Imrane Haniff</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[#919191]">Brand</span>
              <span className="text-black">Café Crème</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[#919191]">Location</span>
              <span className="text-black">Dubai</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[#919191]">Year</span>
              <span className="text-black">2019</span>
            </div>
          </div>
        </div>

        {/* Collapsed testimonials */}
        <div className="mt-10 flex flex-col">
          {collapsed.map((t, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-t border-black/10 py-6"
            >
              <div className="flex items-center gap-5">
                <div className="size-11 overflow-hidden rounded-md">
                  <Image src={t.avatar} alt="" width={44} height={44} className="size-full object-cover" />
                </div>
                <p className="text-[24px] leading-tight tracking-tight text-black">{t.title}</p>
              </div>
              <button className="flex size-12 items-center justify-center rounded-xl border border-daftime-yellow bg-daftime-cream">
                <svg viewBox="0 0 24 24" className="size-5 stroke-black" fill="none" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
