import Image from "next/image";

const avatars = [
  { src: "/assets/avatar-1.png", bg: "#ebebeb" },
  { src: "/assets/avatar-2.png", bg: "#ffecc0" },
  { src: "/assets/avatar-3.png", bg: "#c0d5ff" },
  { src: "/assets/avatar-4.png", bg: "#c0eaff" },
  { src: "/assets/avatar-5.png", bg: "#cac0ff" },
  { src: "/assets/avatar-6.png", bg: "#ffc0c5" },
];

export default function GuideCTA() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left text */}
        <div className="flex flex-col justify-between gap-12 bg-daftime-yellow-light p-14">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2">
              <div className="size-1 bg-black" />
              <p className="label-mono text-black">Guide</p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="h-display text-black">Introducing the 2026 Daftime Guide</h2>
              <p className="text-[16px] leading-relaxed tracking-tight text-black">
                Designed for entrepreneurs, executives, and investors, the Daftime Guide provides a clear and methodical reading of the regulatory and fiscal frameworks shaping business operations in the Emirates.
              </p>
            </div>

            <a
              href="#guide"
              className="btn-pill self-start bg-daftime-yellow text-black hover:opacity-90"
            >
              Explore the Guide
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="-mr-1 size-[24px] overflow-hidden rounded-full border-[3px] border-white"
                  style={{ background: a.bg }}
                >
                  <Image src={a.src} alt="" width={24} height={24} className="size-full rounded-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-[20px] tracking-tight text-black">12k+ Client Collaboration</p>
          </div>
        </div>

        {/* Right image */}
        <div className="relative overflow-hidden bg-[#f3f3f3] min-h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rotate-[14deg]">
              <Image
                src="/assets/guide-book.png"
                alt="2026 Daftime Guide"
                width={961}
                height={618}
                className="w-[110%] max-w-none object-contain"
              />
            </div>
          </div>
          <div className="absolute left-10 top-10 flex items-center gap-3">
            <div className="flex items-center justify-center rounded-xl border border-[rgba(218,195,78,0.2)] bg-[rgba(255,233,123,0.3)] p-3 backdrop-blur">
              <Image src="/assets/logo-daftime.png" alt="Daftime" width={26} height={26} className="size-[26px] object-contain" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-tight tracking-tight text-[#9e9e9e]">2026 Edition</p>
              <p className="text-[24px] leading-tight tracking-tight text-black">The 2026 Daftime Guide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
