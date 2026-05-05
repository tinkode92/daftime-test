"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import { t, type Locale } from "@/lib/translations";
import { useEffectiveLocale } from "@/lib/useEffectiveLocale";
import { useStoredCountry } from "./CountryGate";

type TabKey = "legal" | "accounting" | "cfo";
const TAB_KEYS: TabKey[] = ["legal", "accounting", "cfo"];

type LegalCardKey = "businessSetup" | "openBank" | "spv" | "corporate";
const LEGAL_CARD_KEYS: LegalCardKey[] = [
  "businessSetup",
  "openBank",
  "spv",
  "corporate",
];
type IllustrationKind = "folders" | "card" | "vault" | "shield";
const LEGAL_ILLUSTRATIONS: Record<LegalCardKey, IllustrationKind> = {
  businessSetup: "folders",
  openBank: "card",
  spv: "vault",
  corporate: "shield",
};

type AccountingPlanVariant = "white" | "yellow" | "gray";
type AccountingPlanKey = "basic" | "intermediate" | "premium" | "large";
const ACCOUNTING_PLAN_KEYS: AccountingPlanKey[] = [
  "basic",
  "intermediate",
  "premium",
  "large",
];
const ACCOUNTING_PLAN_VARIANTS: Record<AccountingPlanKey, AccountingPlanVariant> =
  {
    basic: "white",
    intermediate: "yellow",
    premium: "gray",
    large: "white",
  };

type CFOPlanKey = "reporting" | "office" | "fractional";
const CFO_PLAN_KEYS: CFOPlanKey[] = ["reporting", "office", "fractional"];

export default function ServiceTabs({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const [active, setActive] = useState<TabKey>("legal");
  const effectiveLocale = useEffectiveLocale(locale);
  const tr = t(effectiveLocale).serviceTabs;

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
              <p className="label-mono text-black">{tr.eyebrow}</p>
            </div>
            <p className="max-w-[506px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text sm:text-[16px]">
              {tr.intro}
            </p>
          </Reveal>
          <Reveal as="h2" delay={120} className="block">
            <span className="h-display block max-w-[555px] text-black">
              {tr.heading[0]}
              <br />
              {tr.heading[1]}
            </span>
          </Reveal>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-col gap-1 sm:mt-12">
          <Reveal className="relative flex flex-wrap items-center gap-2 rounded-2xl bg-white px-4 py-4 sm:gap-5 sm:px-8 sm:py-6">
            {TAB_KEYS.map((key) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className="relative flex items-center justify-center rounded-xl px-4 py-2 text-[15px] tracking-tight transition-colors sm:px-5 sm:py-2.5 sm:text-[18px]"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-tab-bg"
                      className="absolute inset-0 rounded-xl bg-black"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span
                    className={
                      "relative z-10 " +
                      (isActive ? "text-white" : "text-daftime-dark")
                    }
                  >
                    {tr.tabs[key]}
                  </span>
                </button>
              );
            })}
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-1"
            >
              {active === "legal" && <LegalContent locale={effectiveLocale} />}
              {active === "accounting" && (
                <AccountingContent locale={effectiveLocale} />
              )}
              {active === "cfo" && <CFOContent locale={effectiveLocale} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function LegalContent({ locale }: { locale: Locale }) {
  const tr = t(locale).serviceTabs.legal;
  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr_358px]">
        <Reveal className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]">
          <h3 className="max-w-[434px] text-[22px] leading-tight tracking-tight text-black sm:text-[26px] md:text-[28px]">
            {tr.heading}
          </h3>
        </Reveal>
        <Reveal
          delay={120}
          className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]"
        >
          <p className="text-[14px] leading-relaxed tracking-tight text-daftime-gray-mute">
            {tr.body}
          </p>
        </Reveal>
      </div>

      <Reveal className="rounded-2xl bg-white px-5 py-4 sm:px-8 sm:py-6">
        <p className="text-[16px] tracking-tight text-black sm:text-[18px]">
          {tr.listLabel}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {LEGAL_CARD_KEYS.map((cardKey, idx) => {
          const card = tr.cards[cardKey];
          return (
            <Reveal
              key={cardKey}
              delay={idx * 100}
              className="card-hover flex flex-col rounded-2xl bg-white p-2"
            >
              <div className="relative h-[160px] overflow-hidden rounded-xl bg-[#f7f7f7] sm:h-[170px]">
                <Illustration kind={LEGAL_ILLUSTRATIONS[cardKey]} />
              </div>
              <div className="flex flex-col gap-2 px-2 pt-4 pb-3">
                <p className="text-[16px] leading-tight tracking-tight text-black">
                  {card.title}
                  {card.subtitle && (
                    <>
                      <br />
                      {card.subtitle}
                    </>
                  )}
                </p>
                <p className="text-[14px] leading-relaxed tracking-tight text-[#9e9e9e]">
                  {card.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 sm:px-8">
        <span className="rounded-full border border-daftime-cream-border bg-daftime-cream px-4 py-2 text-[15px] tracking-tight text-[#776509] sm:text-[16px]">
          {tr.tailored}
        </span>
        <p className="max-w-[504px] text-[15px] leading-relaxed tracking-tight text-[#010101] sm:text-[16px]">
          {tr.tailoredText}
        </p>
      </Reveal>
    </>
  );
}

function AccountingContent({ locale }: { locale: Locale }) {
  const country = useStoredCountry();
  const showPrice = country === "AE";
  const tr = t(locale).serviceTabs.accounting;
  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr_482px]">
        <Reveal className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]">
          <h3 className="max-w-[471px] text-[22px] leading-tight tracking-tight text-black sm:text-[26px] md:text-[28px]">
            {tr.heading}
          </h3>
        </Reveal>
        <Reveal
          delay={120}
          className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]"
        >
          <p className="text-[14px] leading-relaxed tracking-tight text-daftime-gray-mute">
            {tr.body}
          </p>
        </Reveal>
      </div>

      <Reveal className="rounded-2xl bg-white px-5 py-4 sm:px-8 sm:py-6">
        <p className="text-[16px] tracking-tight text-black sm:text-[18px]">
          {tr.listLabel}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {ACCOUNTING_PLAN_KEYS.map((planKey, idx) => (
          <Reveal key={planKey} delay={idx * 100}>
            <PricingCard
              plan={tr.plans[planKey]}
              variant={ACCOUNTING_PLAN_VARIANTS[planKey]}
              showPrice={showPrice}
            />
          </Reveal>
        ))}
      </div>

      <div className="h-[60px] rounded-2xl bg-white sm:h-[82px]" />
    </>
  );
}

function CFOContent({ locale }: { locale: Locale }) {
  const tr = t(locale).serviceTabs.cfo;
  return (
    <>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr_376px]">
        <Reveal className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]">
          <h3 className="max-w-[471px] text-[22px] leading-tight tracking-tight text-black sm:text-[26px] md:text-[28px]">
            {tr.heading}
          </h3>
        </Reveal>
        <Reveal
          delay={120}
          className="flex min-h-[120px] items-center rounded-2xl bg-white px-5 py-5 sm:min-h-[140px] sm:px-8 sm:py-6 lg:h-[153px]"
        >
          <p className="text-[14px] leading-relaxed tracking-tight text-daftime-gray-mute">
            {tr.body}
          </p>
        </Reveal>
      </div>

      <Reveal className="rounded-2xl bg-white px-5 py-4 sm:px-8 sm:py-6">
        <p className="text-[16px] tracking-tight text-black sm:text-[18px]">
          {tr.listLabel}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
        {CFO_PLAN_KEYS.map((planKey, idx) => (
          <Reveal key={planKey} delay={idx * 100}>
            <CFOCard plan={tr.plans[planKey]} />
          </Reveal>
        ))}
      </div>

      <div className="h-[60px] rounded-2xl bg-white sm:h-[82px]" />
    </>
  );
}

type AccountingPlanData = {
  name: string;
  range: string;
  price?: string;
  features: string[];
};

function PricingCard({
  plan,
  variant,
  showPrice,
}: {
  plan: AccountingPlanData;
  variant: AccountingPlanVariant;
  showPrice: boolean;
}) {
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
  }[variant];

  return (
    <div
      className={`card-hover flex h-full min-h-[340px] flex-col gap-6 rounded-2xl p-2 ${palette.bg}`}
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
        <div className="flex flex-col gap-1">
          <p className={`text-[16px] tracking-tight ${palette.rangeColor}`}>
            {plan.range}
          </p>
          {showPrice && plan.price && (
            <p
              className={`text-[15px] font-semibold tracking-tight ${palette.titleColor}`}
            >
              {plan.price}
            </p>
          )}
        </div>
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

type CFOPlanData = { name: string; features: string[] };

function CFOCard({ plan }: { plan: CFOPlanData }) {
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

function Illustration({ kind }: { kind: IllustrationKind }) {
  if (kind === "folders") return <FolderIllustration />;
  if (kind === "card") return <CardIllustration />;
  if (kind === "vault") return <PlantIllustration />;
  return <SealIllustration />;
}

/* ============= 6194:518 — Business setup (folder) ============= */
function FolderIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F1F1F1]">
      <Image
        src="/assets/business-setup-v3.svg"
        alt=""
        width={275}
        height={170}
        className="absolute left-1/2 top-1/2 h-auto w-[90%] max-w-[275px] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}

/* ============= 6194:545 — Opening a business bank account ============= */
function CardIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F1F1F1]">
      <Image
        src="/assets/opening-a-business-v3.svg"
        alt=""
        width={275}
        height={170}
        className="absolute left-1/2 top-1/2 h-auto w-[90%] max-w-[275px] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}

/* ============= 6194:560 — Creation & structuring of investment vehicles ============= */
function PlantIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F1F1F1]">
      <Image
        src="/assets/creation-structuring-v3.svg"
        alt=""
        width={275}
        height={170}
        className="absolute left-1/2 top-1/2 h-auto w-[90%] max-w-[275px] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}

/* ============= 6194:577 — Corporate secretarial ============= */
function SealIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F1F1F1]">
      <Image
        src="/assets/corporate-secretarial-v3.svg"
        alt=""
        width={275}
        height={170}
        className="absolute left-1/2 top-1/2 h-auto w-[90%] max-w-[275px] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}
