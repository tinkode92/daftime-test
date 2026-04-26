"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const services = [
  "Accounting",
  "Tax & Legal",
  "CFO & Advisory",
  "Audit",
  "International Setup",
];

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

export default function LearnMoreModal({ open, onClose }: Props) {
  const [service, setService] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-end bg-black/30 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="learn-more-title"
    >
      <div
        className="relative my-2.5 mr-2.5 flex w-full max-w-[460px] flex-col overflow-hidden rounded-xl border border-[#e8e8e9] bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 border-b border-[#e8e8e9] py-3 pl-4 pr-3">
          <p
            id="learn-more-title"
            className="flex-1 text-base tracking-tight text-[#1b1b1b]"
          >
            Let’s Start The Conversation
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex items-center justify-center rounded-full border border-[#e8e8e9] bg-white p-1.5 transition-colors hover:bg-[#f7f7f7]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 4l8 8M12 4l-8 8"
                stroke="#1b1b1b"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="flex flex-1 flex-col overflow-hidden"
        >
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-4 p-4">
              <p className="text-sm tracking-tight text-[#595959]">
                Ready to take the next step? Schedule a complimentary
                consultation with our team and discover how we can help you
                achieve your goals.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Field label="First Name">
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full bg-transparent text-sm tracking-tight text-[#1b1b1b] placeholder:text-[#919191] focus:outline-none"
                  />
                </Field>
                <Field label="Last Name">
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-transparent text-sm tracking-tight text-[#1b1b1b] placeholder:text-[#919191] focus:outline-none"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Phone">
                  <input
                    type="tel"
                    placeholder="+123 476 9789"
                    className="w-full bg-transparent text-sm tracking-tight text-[#1b1b1b] placeholder:text-[#919191] focus:outline-none"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    placeholder="jane@email.com"
                    className="w-full bg-transparent text-sm tracking-tight text-[#1b1b1b] placeholder:text-[#919191] focus:outline-none"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Your Company Name">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-transparent text-sm tracking-tight text-[#1b1b1b] placeholder:text-[#919191] focus:outline-none"
                  />
                </Field>
                <Field label="Service You Are Interested In">
                  <div className="flex w-full items-center gap-2">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full appearance-none bg-transparent text-sm tracking-tight text-[#1b1b1b] focus:outline-none"
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                      className="shrink-0"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="#1b1b1b"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Field>
              </div>

              <Field label="Describe what you're interested in">
                <textarea
                  rows={3}
                  placeholder="I'd like to learn more about..."
                  className="h-[67px] w-full resize-none bg-transparent text-sm tracking-tight text-[#1b1b1b] placeholder:text-[#919191] focus:outline-none"
                />
              </Field>

              <div className="flex flex-col gap-4">
                {offices.map((o) => (
                  <div
                    key={o.country}
                    className="overflow-hidden rounded-[15px] border border-[#e5e5e5] bg-[#f3f3f3] p-4"
                  >
                    <div className="flex items-center gap-5">
                      {o.flag}
                      <p className="text-[20px] tracking-tight text-black">
                        {o.country}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                      <Row icon={<MapPinIcon />}>{o.address}</Row>
                      <Row icon={<PhoneIcon />}>{o.phone}</Row>
                      <Row icon={<MailIcon />}>{o.email}</Row>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 border-t border-[#e8e8e9] px-4 pt-3 pb-4">
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 items-center justify-center rounded-lg border border-[#e8e8e9] bg-white px-4 text-sm tracking-tight text-[#1b1b1b] transition-colors hover:bg-[#f7f7f7]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex h-10 items-center justify-center rounded-lg bg-daftime-yellow px-4 text-sm tracking-tight text-black transition-opacity hover:opacity-90"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm tracking-tight text-[#1b1b1b]">{label}</span>
      <span className="flex items-center gap-2 rounded-xl border border-[#e8e8e9] bg-white p-3">
        {children}
      </span>
    </label>
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
      <span className="mt-0.5 shrink-0 text-black">{icon}</span>
      <p className="flex-1 text-sm leading-[1.4] tracking-tight text-black">
        {children}
      </p>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 11a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 18.75c4-3.75 6.25-6.65 6.25-9.75a6.25 6.25 0 10-12.5 0c0 3.1 2.25 6 6.25 9.75z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
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
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
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
