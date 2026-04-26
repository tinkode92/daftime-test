const offices = [
  {
    country: "France",
    flag: (
      <span className="flex h-6 w-6 overflow-hidden rounded-full">
        <span className="h-full w-1/3 bg-[#0055A4]" />
        <span className="h-full w-1/3 bg-white" />
        <span className="h-full w-1/3 bg-[#EF4135]" />
      </span>
    ),
    address: "33 Place du Général Leclerc, 80480 Pont-de-Metz",
    phone: "+33 7 86 27 28 23",
    email: "Stephane@daftime.fr",
  },
  {
    country: "United Arab Emirates",
    flag: (
      <span className="grid h-6 w-6 grid-cols-[8px_1fr] overflow-hidden rounded-full">
        <span className="row-span-3 bg-[#FF0000]" />
        <span className="bg-[#00732F]" />
        <span className="bg-white" />
        <span className="bg-black" />
      </span>
    ),
    address: "Jumeirah 1, Immeuble Jumeirah Terrace, Bureau 411",
    phone: "+971 5 05 28 43 43",
    email: "Hello@daftime.ae",
  },
  {
    country: "Portugal",
    flag: (
      <span className="flex h-6 w-6 overflow-hidden rounded-full">
        <span className="h-full w-2/5 bg-[#006600]" />
        <span className="h-full w-3/5 bg-[#FF0000]" />
      </span>
    ),
    address: "Lorem",
    phone: "xxxxxxxx",
    email: "Hello@daftime.ae",
  },
];

const dots = [
  { left: 48, top: 38 }, // France
  { left: 60, top: 50 }, // UAE
  { left: 45, top: 42 }, // Portugal
];

export default function PodcastWorldMap() {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1152px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-daftime-yellow">
            <span className="size-1 rounded-full bg-daftime-yellow" />
            Global Presence
          </span>
          <h2 className="h-display max-w-[640px] text-balance text-daftime-dark">
            Your cross-border business partner
          </h2>
        </div>

        {/* Map */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-daftime-gray-border bg-daftime-dark">
          <div
            className="aspect-[16/9] w-full bg-[length:auto_120%] bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
              backgroundSize: "8px 8px",
            }}
          />
          {dots.map((d, i) => (
            <span
              key={i}
              className="absolute size-3 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${d.left}%`, top: `${d.top}%` }}
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-daftime-yellow opacity-75" />
              <span className="relative block size-3 rounded-full bg-daftime-yellow" />
            </span>
          ))}
        </div>

        {/* Offices */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {offices.map((o) => (
            <div
              key={o.country}
              className="rounded-2xl border border-daftime-gray-border bg-daftime-gray-light p-5"
            >
              <div className="flex items-center gap-3">
                {o.flag}
                <p className="text-[18px] tracking-tight text-daftime-dark">
                  {o.country}
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-3 text-[13px] leading-snug text-daftime-dark">
                <p>{o.address}</p>
                <p>{o.phone}</p>
                <p>{o.email}</p>
              </div>
              <button
                type="button"
                className="mt-5 flex h-9 w-full items-center justify-center rounded-md bg-daftime-yellow text-[13px] tracking-tight text-black transition-opacity hover:opacity-90"
              >
                Contact Office
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
