import Image from "next/image";

import { CALENDAR_URLS } from "@/lib/calendarUrl";

type Office = {
  country: string;
  flag: React.ReactNode;
  address: React.ReactNode;
  phone: string;
  email: string;
  calendarUrl: string;
};

const offices: Office[] = [
  {
    country: "France",
    flag: <FranceFlag />,
    address: "33 Place du Général Leclerc, 80480 Pont-de-Metz",
    phone: "+33 7 86 27 28 23",
    email: "Stephane@daftime.fr",
    calendarUrl: CALENDAR_URLS.FR,
  },
  {
    country: "United Arab Emirates",
    flag: <UAEFlag />,
    address: (
      <>
        Jumeirah 1, Immeuble Jumeirah Terrace,
        <br />
        Bureau 411
      </>
    ),
    phone: "+971 5 05 28 43 43",
    email: "Hello@daftime.ae",
    calendarUrl: CALENDAR_URLS.AE,
  },
  {
    country: "Portugal",
    flag: <PortugalFlag />,
    address: "Address upon request",
    phone: "+ 00",
    email: "Hello@daftime.pr",
    calendarUrl: CALENDAR_URLS.PT,
  },
];

// The 3 office dots (Paris / Lisbon / Dubai) live inside world-map.svg
// itself and pulse via SMIL animations baked into the file.

export default function PodcastWorldMap() {
  return (
    <section className="bg-white px-4 py-9 sm:px-6 md:px-9">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <span className="flex items-center gap-2 font-mono text-[14px] uppercase leading-[20px] tracking-[0.12em] text-black">
            <span className="size-1 rounded-full bg-black" />
            Global Presence
          </span>
          <div className="flex max-w-[694px] flex-col gap-4">
            <h2 className="text-[40px] leading-[1.1] tracking-[-0.04em] text-black sm:text-[48px]">
              Your cross-border business partner
            </h2>
            <p className="text-[16px] leading-[1.5] tracking-tight text-[#939393]">
              Bridging Europe and the Middle East with integrated accounting,
              legal, and advisory expertise.
            </p>
          </div>
        </div>

        {/* World map — SVG carries the dotted continents + 3 pulsing
            yellow office markers (SMIL animations baked in). */}
        <div className="relative aspect-[1248/454] overflow-hidden rounded-2xl bg-black">
          <Image
            src="/assets/world-map.svg"
            alt="Daftime offices around the world"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1248px) 1248px, 100vw"
            unoptimized
          />
        </div>

        {/* Office cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {offices.map((o) => (
            <article
              key={o.country}
              className="flex flex-col justify-between gap-12 overflow-hidden rounded-[15px] border border-[#e5e5e5] bg-[#f3f3f3] p-6"
            >
              <div className="flex items-center gap-5">
                <span className="size-8 shrink-0">{o.flag}</span>
                <h3 className="text-[20px] leading-none tracking-tight text-black sm:text-[24px]">
                  {o.country}
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 text-[14px] leading-[1.4] tracking-tight text-black sm:text-[16px]">
                  <Row icon={<MapPinIcon />}>{o.address}</Row>
                  <Row icon={<PhoneIcon />}>{o.phone}</Row>
                  <Row icon={<MailIcon />}>{o.email}</Row>
                </div>
                <a
                  href={o.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 items-center justify-center self-start rounded-lg bg-daftime-yellow px-4 text-[14px] tracking-tight text-black transition-opacity hover:opacity-90"
                >
                  Schedule a call
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 size-5 shrink-0 text-black">{icon}</span>
      <p className="flex-1">{children}</p>
    </div>
  );
}

/* ============= Flags ============= */
function FranceFlag() {
  return (
    <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
      <rect width="32" height="32" rx="16" fill="#f3f3f3" />
      <g clipPath="url(#fr-clip)">
        <rect x="3" y="6" width="9" height="20" fill="#0055A4" />
        <rect x="11" y="6" width="10" height="20" fill="#FFFFFF" />
        <rect x="20" y="6" width="9" height="20" fill="#EF4135" />
      </g>
      <defs>
        <clipPath id="fr-clip">
          <circle cx="16" cy="16" r="13" />
        </clipPath>
      </defs>
    </svg>
  );
}

function UAEFlag() {
  return (
    <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
      <defs>
        <clipPath id="ae-clip">
          <circle cx="16" cy="16" r="13" />
        </clipPath>
      </defs>
      <g clipPath="url(#ae-clip)">
        <rect x="3" y="6" width="6.5" height="20" fill="#E2231A" />
        <rect x="9.5" y="6" width="20" height="6.66" fill="#159040" />
        <rect x="9.5" y="12.66" width="20" height="6.66" fill="#FFFFFF" />
        <rect x="9.5" y="19.32" width="20" height="6.66" fill="#000000" />
      </g>
    </svg>
  );
}

function PortugalFlag() {
  return (
    <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
      <defs>
        <clipPath id="pt-clip">
          <circle cx="16" cy="16" r="13" />
        </clipPath>
      </defs>
      <g clipPath="url(#pt-clip)">
        <rect x="3" y="6" width="11" height="20" fill="#006600" />
        <rect x="14" y="6" width="15" height="20" fill="#D52B1E" />
        <circle
          cx="14"
          cy="16"
          r="3"
          fill="#FFE800"
          stroke="#FFFFFF"
          strokeWidth="0.6"
        />
      </g>
    </svg>
  );
}

/* ============= Icons ============= */
function MapPinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-full">
      <path
        d="M10 11.25a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 18.79c4-3.75 6.25-6.65 6.25-9.75a6.25 6.25 0 10-12.5 0c0 3.1 2.25 6 6.25 9.75z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-full">
      <rect
        x="5.5"
        y="2.5"
        width="9"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 15h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-full">
      <rect
        x="2.5"
        y="3.75"
        width="15"
        height="12.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 5l7 6 7-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
