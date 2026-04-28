"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

type TabKey = "legal" | "accounting" | "cfo";

const tabs: { key: TabKey; label: string }[] = [
  { key: "legal", label: "Legal Services" },
  { key: "accounting", label: "Accounting and tax" },
  { key: "cfo", label: "CFO & Advisory services" },
];

const legalCards = [
  {
    title: "Business setup",
    subtitle: "(Mainland & Free Zone)",
    description:
      "Company structuring, license acquisition, corporate amendments, with legal guidance provided by lawyers.",
    illustration: "folders" as const,
  },
  {
    title: "Opening a business",
    subtitle: "bank account",
    description:
      "Assistance in choosing a bank, preparing KYC documents, and managing the account opening process.",
    illustration: "card" as const,
  },
  {
    title: "Creation and structuring of investment vehicles (SPVs, holdings, trusts)",
    subtitle: "",
    description:
      "Structures designed to secure your investments, optimize governance, and support your long-term strategy.",
    illustration: "vault" as const,
  },
  {
    title: "Corporate secretarial",
    subtitle: "services in the UAE",
    description:
      "Emirates ID, residence visas, Golden Visa, family sponsorship.",
    illustration: "shield" as const,
  },
];

type AccountingPlanVariant = "white" | "yellow" | "gray";
type AccountingPlan = {
  name: string;
  range: string;
  features: string[];
  variant: AccountingPlanVariant;
};

const accountingPlans: AccountingPlan[] = [
  {
    name: "Basic",
    range: "0 to 50 transactions/month",
    variant: "white",
    features: [
      "Financial statements (UAE standards)",
      "VAT & Corporate Tax Management UAE",
      "Phone support",
      "Management tool",
    ],
  },
  {
    name: "Intermediate",
    range: "51 to 100 transactions/month",
    variant: "yellow",
    features: [
      "UAE financial statements",
      "VAT & Corporate Tax",
      "Phone support",
      "Dedicated Customer Success",
      "Multi-currency management tool",
    ],
  },
  {
    name: "Premium",
    range: "0 to 50 transactions/month",
    variant: "gray",
    features: [
      "UAE financial statements",
      "VAT & Corporate Tax",
      "Dedicated Customer Success",
      "Multi-currency tool",
      "Regular strategic review meetings",
    ],
  },
  {
    name: "Large entreprises",
    range: "0 to 50 transactions/month",
    variant: "white",
    features: [
      "Financial statements (UAE standards)",
      "VAT & Corporate Tax Management UAE",
      "Phone support",
      "Management tool",
    ],
  },
];

type CFOPlan = {
  name: string;
  features: string[];
};

const cfoPlans: CFOPlan[] = [
  {
    name: "Financial reporting\nand management (UAE)",
    features: [
      "KPI dashboards",
      "Cost & Margin Analysis",
      "Break-even point",
      "Steering committee meetings",
    ],
  },
  {
    name: "Office Management Dubai",
    features: [
      "Dedicated administrative assistant",
      "Administrative management, purchasing, sales & banking",
      "Recruitment support",
      "Executive schedule management",
    ],
  },
  {
    name: "CFO Part-Time UAE",
    features: [
      "Financial reporting, cost analysis",
      "Digitization of the finance function",
      "Strategic support",
      "Due diligence",
    ],
  },
];

export default function ServiceTabs() {
  const [active, setActive] = useState<TabKey>("legal");

  return (
    <section
      id="services"
      className="bg-daftime-gray-bg px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-[1176px]">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-12">
          <Reveal className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="size-1 bg-black" />
              <p className="label-mono text-black">Services</p>
            </div>
            <p className="max-w-[506px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text sm:text-[16px]">
              Every mission is a collaboration, every achievement, a shared
              effort. Their positive feedback reminds us why we do what we do:
              to create trust, clarity, and long-term value.
            </p>
          </Reveal>
          <Reveal as="h2" delay={120} className="block">
            <span className="h-display block max-w-[555px] text-black">
              Supporting entrepreneurs
              <br />
              wherever they operate
            </span>
          </Reveal>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-col gap-1 sm:mt-12">
          <Reveal className="flex flex-wrap items-center gap-2 rounded-2xl bg-white px-4 py-4 sm:gap-5 sm:px-8 sm:py-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={
                  "transition-all duration-300 " +
                  (active === tab.key
                    ? "flex items-center justify-center rounded-xl bg-black px-4 py-2 text-[15px] tracking-tight text-white sm:px-5 sm:py-2.5 sm:text-[18px]"
                    : "flex items-center justify-center rounded-md px-2.5 py-2 text-[15px] tracking-tight text-daftime-dark hover:bg-black/5 sm:py-2.5 sm:text-[18px]")
                }
              >
                {tab.label}
              </button>
            ))}
          </Reveal>

          {active === "legal" && <LegalContent />}
          {active === "accounting" && <AccountingContent />}
          {active === "cfo" && <CFOContent />}
        </div>
      </div>
    </section>
  );
}

function LegalContent() {
  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr_358px]">
        <Reveal className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]">
          <h3 className="max-w-[434px] text-[22px] leading-tight tracking-tight text-black sm:text-[26px] md:text-[28px]">
            Create and structure your company in the Emirates securely and
            compliantly
          </h3>
        </Reveal>
        <Reveal
          delay={120}
          className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]"
        >
          <p className="text-[14px] leading-relaxed tracking-tight text-daftime-gray-mute">
            At Daftime, we support entrepreneurs through every stage of setting
            up a business in Dubai: analyzing your project, choosing the best
            structure (Mainland/Freezone), legal and tax optimization, and full
            compliance.
          </p>
        </Reveal>
      </div>

      <Reveal className="rounded-2xl bg-white px-5 py-4 sm:px-8 sm:py-6">
        <p className="text-[16px] tracking-tight text-black sm:text-[18px]">
          Our Business Setup services include:
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {legalCards.map((c, idx) => (
          <Reveal
            key={c.title}
            delay={idx * 100}
            className="card-hover flex flex-col rounded-2xl bg-white p-2"
          >
            <div className="relative h-[160px] overflow-hidden rounded-xl bg-[#f7f7f7] sm:h-[170px]">
              <Illustration kind={c.illustration} />
            </div>
            <div className="flex flex-col gap-2 px-2 pt-4 pb-3">
              <p className="text-[16px] leading-tight tracking-tight text-black">
                {c.title}
                {c.subtitle && (
                  <>
                    <br />
                    {c.subtitle}
                  </>
                )}
              </p>
              <p className="text-[14px] leading-relaxed tracking-tight text-[#9e9e9e]">
                {c.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 sm:px-8">
        <span className="rounded-full border border-daftime-cream-border bg-daftime-cream px-4 py-2 text-[15px] tracking-tight text-[#776509] sm:text-[16px]">
          Tailored support
        </span>
        <p className="max-w-[504px] text-[15px] leading-relaxed tracking-tight text-[#010101] sm:text-[16px]">
          All our services are offered on a quote basis, ensuring a secure,
          compliant, and perfectly tailored establishment in Dubai that meets
          your objectives.
        </p>
      </Reveal>
    </>
  );
}

function AccountingContent() {
  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr_482px]">
        <Reveal className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]">
          <h3 className="max-w-[471px] text-[22px] leading-tight tracking-tight text-black sm:text-[26px] md:text-[28px]">
            Compliant, optimized accounting and tax management tailored to UAE
            standards
          </h3>
        </Reveal>
        <Reveal
          delay={120}
          className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]"
        >
          <p className="text-[14px] leading-relaxed tracking-tight text-daftime-gray-mute">
            At Daftime, we provide comprehensive accounting and tax management
            services in accordance with UAE requirements: financial statements
            in accordance with local standards, VAT (UAE VAT), corporate tax,
            reporting, and operational monitoring. Our services are tailored to
            the volume of transactions and the level of support required.
          </p>
        </Reveal>
      </div>

      <Reveal className="rounded-2xl bg-white px-5 py-4 sm:px-8 sm:py-6">
        <p className="text-[16px] tracking-tight text-black sm:text-[18px]">
          Our accounting packages
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {accountingPlans.map((plan, idx) => (
          <Reveal key={plan.name} delay={idx * 100}>
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>

      <div className="h-[60px] rounded-2xl bg-white sm:h-[82px]" />
    </>
  );
}

function CFOContent() {
  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr_376px]">
        <Reveal className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]">
          <h3 className="max-w-[471px] text-[22px] leading-tight tracking-tight text-black sm:text-[26px] md:text-[28px]">
            Strategic consulting &amp; Flexible financial management
          </h3>
        </Reveal>
        <Reveal
          delay={120}
          className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]"
        >
          <p className="text-[14px] leading-relaxed tracking-tight text-daftime-gray-mute">
            Our advisory and part-time CFO (fractional CFO) services provide you
            with the expertise you need to drive growth, optimize performance,
            and improve financial visibility in the United Arab Emirates.
          </p>
        </Reveal>
      </div>

      <Reveal className="rounded-2xl bg-white px-5 py-4 sm:px-8 sm:py-6">
        <p className="text-[16px] tracking-tight text-black sm:text-[18px]">
          Our accounting packages
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
        {cfoPlans.map((plan, idx) => (
          <Reveal key={plan.name} delay={idx * 100}>
            <CFOCard plan={plan} />
          </Reveal>
        ))}
      </div>

      <div className="h-[60px] rounded-2xl bg-white sm:h-[82px]" />
    </>
  );
}

function PricingCard({ plan }: { plan: AccountingPlan }) {
  const palette = {
    white: {
      bg: "bg-white",
      titleColor: "text-black",
      rangeColor: "text-daftime-gray-mute",
      iconBg: "bg-daftime-yellow",
    },
    yellow: {
      bg: "bg-daftime-yellow",
      titleColor: "text-black",
      rangeColor: "text-black",
      iconBg: "bg-[#b79b0b]",
    },
    gray: {
      bg: "bg-[#e6e6e6]",
      titleColor: "text-black",
      rangeColor: "text-daftime-gray-mute",
      iconBg: "bg-daftime-yellow",
    },
  }[plan.variant];

  return (
    <div
      className={`card-hover flex min-h-[300px] flex-col gap-6 rounded-2xl p-2 sm:h-[318px] ${palette.bg}`}
    >
      <div className="flex flex-col gap-3 px-2 pt-2">
        <div className="flex items-center gap-3">
          <div
            className={`flex size-10 items-center justify-center rounded-xl ${palette.iconBg}`}
          >
            <RocketIcon />
          </div>
          <p className={`label-mono ${palette.titleColor}`}>{plan.name}</p>
        </div>
        <p className={`text-[16px] tracking-tight ${palette.rangeColor}`}>
          {plan.range}
        </p>
      </div>

      <ul className="flex flex-col gap-4 px-2 pb-2">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 size-5 shrink-0 fill-black" />
            <span className="text-[14px] leading-tight tracking-tight text-black">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CFOCard({ plan }: { plan: CFOPlan }) {
  return (
    <div className="card-hover flex min-h-[300px] flex-col gap-6 rounded-2xl bg-white p-2 sm:h-[318px]">
      <div className="flex flex-col gap-3 px-2 pt-2">
        <div className="flex size-10 items-center justify-center rounded-xl bg-daftime-yellow">
          <BuildingIcon />
        </div>
        <p className="label-mono whitespace-pre-line text-black">{plan.name}</p>
      </div>

      <ul className="flex flex-col gap-4 px-2 pb-2">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 size-5 shrink-0 fill-black" />
            <span className="text-[14px] leading-tight tracking-tight text-black">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden>
      <path d="M14.65 2.36c-.94.31-1.84.74-2.65 1.27-2.96 1.93-4.96 4.83-5.81 8.07L4 11l-2 2 4 2 .9.45a18.4 18.4 0 0 0 0 3.1L6 19l1 1 .55-.9c.99.13 2 .13 3 0L11 20l1-1-.55-.9.45-.9 2 4 2-2-.7-2.18a13.4 13.4 0 0 0 8.07-5.82c.53-.81.96-1.71 1.27-2.65A14.7 14.7 0 0 0 14.65 2.36zM15.5 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5 fill-none stroke-white"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M3 21V7a2 2 0 0 1 2-2h6V3h8v18" strokeLinejoin="round" />
      <path d="M3 21h18" strokeLinecap="round" />
      <path
        d="M7 9h2M7 13h2M7 17h2M14 9h2M14 13h2M14 17h2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" />
    </svg>
  );
}

type IllustrationKind = "folders" | "card" | "vault" | "shield";

function Illustration({ kind }: { kind: IllustrationKind }) {
  if (kind === "folders") return <FolderIllustration />;
  if (kind === "card") return <CardIllustration />;
  if (kind === "vault") return <PlantIllustration />;
  return <SealIllustration />;
}

/* ============= 6194:518 — Folder with paper ============= */
function FolderIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F1F1F1]">
      <Image
        src="/assets/folder.svg"
        alt=""
        width={218}
        height={170}
        className="absolute left-1/2 top-1/2 h-auto w-[80%] max-w-[218px] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}

/* ============= 6194:545 — Credit card with chip ============= */
function CardIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F1F1F1]">
      <Image
        src="/assets/opening-a-business.svg"
        alt=""
        width={234}
        height={161}
        className="absolute left-1/2 top-1/2 h-auto w-[90%] max-w-[260px] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}

/* ============= 6194:560 — Creation & structuring of investment vehicles ============= */
function PlantIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F1F1F1]">
      <Image
        src="/assets/creation-structuring.svg"
        alt=""
        width={234}
        height={187}
        className="absolute left-1/2 top-1/2 h-auto w-[78%] max-w-[234px] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}

/* ============= 6194:577 — Corporate secretarial ============= */
function SealIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F1F1F1]">
      <Image
        src="/assets/corporate-secretarial.svg"
        alt=""
        width={234}
        height={184}
        className="absolute left-1/2 top-1/2 h-auto w-[78%] max-w-[234px] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}
