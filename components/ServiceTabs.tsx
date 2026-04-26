"use client";

import { useState } from "react";

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
    <section id="services" className="bg-daftime-gray-bg px-12 py-20">
      <div className="mx-auto max-w-[1176px]">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="size-1 bg-black" />
              <p className="label-mono text-black">Services</p>
            </div>
            <p className="max-w-[506px] text-[16px] leading-relaxed tracking-tight text-daftime-gray-text">
              Every mission is a collaboration, every achievement, a shared effort. Their positive feedback reminds us why we do what we do: to create trust, clarity, and long-term value.
            </p>
          </div>
          <h2 className="h-display max-w-[555px] text-black">
            Supporting entrepreneurs<br />
            wherever they operate
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-col gap-1">
          <div className="flex items-center gap-5 rounded-2xl bg-white px-8 py-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={
                  active === tab.key
                    ? "flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-[18px] tracking-tight text-white transition-colors"
                    : "flex items-center justify-center rounded-md px-2.5 py-2.5 text-[18px] tracking-tight text-daftime-dark transition-colors hover:bg-black/[0.04]"
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

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
        <div className="flex h-[153px] items-center rounded-2xl bg-white px-8 py-6">
          <h3 className="max-w-[434px] text-[28px] leading-tight tracking-tight text-black">
            Create and structure your company in the Emirates securely and compliantly
          </h3>
        </div>
        <div className="flex h-[153px] items-center rounded-2xl bg-white px-8 py-6">
          <p className="text-[14px] leading-relaxed tracking-tight text-daftime-gray-mute">
            At Daftime, we support entrepreneurs through every stage of setting up a business in Dubai: analyzing your project, choosing the best structure (Mainland/Freezone), legal and tax optimization, and full compliance.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white px-8 py-6">
        <p className="text-[18px] tracking-tight text-black">Our Business Setup services include:</p>
      </div>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {legalCards.map((c) => (
          <div key={c.title} className="flex flex-col rounded-2xl bg-white p-2">
            <div className="relative h-[170px] overflow-hidden rounded-xl bg-[#f7f7f7]">
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
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white px-8 py-4">
        <span className="rounded-full border border-daftime-cream-border bg-daftime-cream px-4 py-2 text-[16px] tracking-tight text-[#776509]">
          Tailored support
        </span>
        <p className="max-w-[504px] text-[16px] leading-relaxed tracking-tight text-[#010101]">
          All our services are offered on a quote basis, ensuring a secure, compliant, and perfectly tailored establishment in Dubai that meets your objectives.
        </p>
      </div>
    </>
  );
}

function AccountingContent() {
  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr_482px]">
        <div className="flex h-[153px] items-center rounded-2xl bg-white px-8 py-6">
          <h3 className="max-w-[471px] text-[28px] leading-tight tracking-tight text-black">
            Compliant, optimized accounting and tax management tailored to UAE standards
          </h3>
        </div>
        <div className="flex h-[153px] items-center rounded-2xl bg-white px-8 py-6">
          <p className="text-[14px] leading-relaxed tracking-tight text-daftime-gray-mute">
            At Daftime, we provide comprehensive accounting and tax management services in accordance with UAE requirements: financial statements in accordance with local standards, VAT (UAE VAT), corporate tax, reporting, and operational monitoring. Our services are tailored to the volume of transactions and the level of support required.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white px-8 py-6">
        <p className="text-[18px] tracking-tight text-black">Our accounting packages</p>
      </div>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {accountingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      <div className="h-[82px] rounded-2xl bg-white" />
    </>
  );
}

function CFOContent() {
  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr_376px]">
        <div className="flex h-[153px] items-center rounded-2xl bg-white px-8 py-6">
          <h3 className="max-w-[471px] text-[28px] leading-tight tracking-tight text-black">
            Strategic consulting &amp; Flexible financial management
          </h3>
        </div>
        <div className="flex h-[153px] items-center rounded-2xl bg-white px-8 py-6">
          <p className="text-[14px] leading-relaxed tracking-tight text-daftime-gray-mute">
            Our advisory and part-time CFO (fractional CFO) services provide you with the expertise you need to drive growth, optimize performance, and improve financial visibility in the United Arab Emirates.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white px-8 py-6">
        <p className="text-[18px] tracking-tight text-black">Our accounting packages</p>
      </div>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
        {cfoPlans.map((plan) => (
          <CFOCard key={plan.name} plan={plan} />
        ))}
      </div>

      <div className="h-[82px] rounded-2xl bg-white" />
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
    <div className={`flex h-[318px] flex-col gap-6 rounded-2xl p-2 ${palette.bg}`}>
      <div className="flex flex-col gap-3 px-2 pt-2">
        <div className="flex items-center gap-3">
          <div className={`flex size-10 items-center justify-center rounded-xl ${palette.iconBg}`}>
            <RocketIcon />
          </div>
          <p className={`label-mono ${palette.titleColor}`}>{plan.name}</p>
        </div>
        <p className={`text-[16px] tracking-tight ${palette.rangeColor}`}>{plan.range}</p>
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
    <div className="flex h-[318px] flex-col gap-6 rounded-2xl bg-white p-2">
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
    <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-white" strokeWidth="1.5" aria-hidden>
      <path d="M3 21V7a2 2 0 0 1 2-2h6V3h8v18" strokeLinejoin="round" />
      <path d="M3 21h18" strokeLinecap="round" />
      <path d="M7 9h2M7 13h2M7 17h2M14 9h2M14 13h2M14 17h2" strokeLinecap="round" />
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
  if (kind === "folders") {
    return (
      <div className="absolute inset-0 flex items-end justify-center pb-2">
        <div className="relative h-[140px] w-[80%]">
          <div className="absolute inset-x-2 top-3 h-[100px] rounded-xl bg-daftime-yellow/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] backdrop-blur" />
          <div className="absolute inset-x-1 top-6 h-[100px] rounded-xl bg-white/80 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)] backdrop-blur" />
          <div className="absolute inset-x-0 bottom-0 h-[100px] overflow-hidden rounded-xl bg-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)]">
            <div className="absolute left-0 top-0 h-1/3 w-1/3 rounded-br-md bg-daftime-yellow/80" />
          </div>
        </div>
      </div>
    );
  }
  if (kind === "card") {
    return (
      <div className="absolute inset-0 flex items-end justify-center pb-0">
        <div className="relative h-[110px] w-[78%] rounded-3xl bg-daftime-yellow/30 shadow-[0_0_0_4px_rgba(235,198,10,0.5)] backdrop-blur-md">
          <div className="absolute bottom-3 left-4 flex items-center gap-1">
            <div className="h-1 w-4 rounded-full bg-white/80" />
            <div className="h-1 w-4 rounded-full bg-white/80" />
            <div className="h-1 w-9 rounded-full bg-white/80" />
          </div>
          <div className="absolute right-3 top-3 h-7 w-12 rounded-md bg-[#262419]" />
        </div>
      </div>
    );
  }
  if (kind === "vault") {
    return (
      <div className="absolute inset-0 flex items-end justify-center pb-0">
        <div className="relative h-[110px] w-[200px] rounded-t-2xl rounded-b-3xl bg-daftime-yellow/30 shadow-[0_0_0_4px_rgba(235,198,10,0.5)] backdrop-blur-md">
          <div className="absolute -top-3 left-1/2 size-12 -translate-x-1/2 rounded-full border-4 border-daftime-yellow bg-white shadow-md" />
          <div className="absolute bottom-2 left-1/2 size-7 -translate-x-1/2 rounded-full border-2 border-daftime-yellow bg-white" />
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="absolute -inset-3 rounded-full bg-[#f6efcc] blur-md" />
        <div className="relative flex size-[60px] items-center justify-center rounded-full bg-[#f6efcc]">
          <svg viewBox="0 0 24 24" className="size-7 fill-daftime-yellow-dark">
            <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          </svg>
        </div>
        <div className="absolute -inset-x-8 -bottom-6 h-12 rounded-2xl border border-white bg-white/80 backdrop-blur-sm">
          <div className="mt-2 flex items-center justify-center gap-1">
            <div className="h-1 w-3.5 rounded-full bg-daftime-yellow/70" />
            <div className="h-1 w-3.5 rounded-full bg-daftime-yellow/70" />
            <div className="h-1 w-9 rounded-full bg-daftime-yellow/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
