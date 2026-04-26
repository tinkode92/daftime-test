const tabs = [
  { label: "Legal Services", active: true },
  { label: "Accounting and tax", active: false },
  { label: "CFO & Advisory services", active: false },
];

const cards = [
  {
    title: "Business setup",
    subtitle: "(Mainland & Free Zone)",
    description:
      "Company structuring, license acquisition, corporate amendments, with legal guidance provided by lawyers.",
    illustration: "folders",
  },
  {
    title: "Opening a business",
    subtitle: "bank account",
    description:
      "Assistance in choosing a bank, preparing KYC documents, and managing the account opening process.",
    illustration: "card",
  },
  {
    title: "Creation and structuring of investment vehicles (SPVs, holdings, trusts)",
    subtitle: "",
    description:
      "Structures designed to secure your investments, optimize governance, and support your long-term strategy.",
    illustration: "vault",
  },
  {
    title: "Corporate secretarial",
    subtitle: "services in the UAE",
    description: "Emirates ID, residence visas, Golden Visa, family sponsorship.",
    illustration: "shield",
  },
];

export default function ServiceTabs() {
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
                key={tab.label}
                className={
                  tab.active
                    ? "flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-[18px] tracking-tight text-white"
                    : "flex items-center justify-center rounded-md px-2.5 py-2.5 text-[18px] tracking-tight text-daftime-dark"
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Big title card */}
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

          {/* Subtitle bar */}
          <div className="rounded-2xl bg-white px-8 py-6">
            <p className="text-[18px] tracking-tight text-black">Our Business Setup services include:</p>
          </div>

          {/* 4 cards with illustrations */}
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl bg-white p-2">
                <div className="relative h-[170px] overflow-hidden rounded-xl bg-[#f7f7f7]">
                  <Illustration kind={c.illustration as IllustrationKind} />
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

          {/* Tailored support footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white px-8 py-4">
            <span className="rounded-full border border-daftime-cream-border bg-daftime-cream px-4 py-2 text-[16px] tracking-tight text-[#776509]">
              Tailored support
            </span>
            <p className="max-w-[504px] text-[16px] leading-relaxed tracking-tight text-[#010101]">
              All our services are offered on a quote basis, ensuring a secure, compliant, and perfectly tailored establishment in Dubai that meets your objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type IllustrationKind = "folders" | "card" | "vault" | "shield";

function Illustration({ kind }: { kind: IllustrationKind }) {
  if (kind === "folders") {
    return (
      <div className="absolute inset-0 flex items-end justify-center pb-2">
        <div className="relative h-[140px] w-[80%]">
          {/* Back folder */}
          <div className="absolute inset-x-2 top-3 h-[100px] rounded-xl bg-daftime-yellow/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] backdrop-blur" />
          {/* Mid folder */}
          <div className="absolute inset-x-1 top-6 h-[100px] rounded-xl bg-white/80 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)] backdrop-blur" />
          {/* Front folder with yellow tab */}
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
