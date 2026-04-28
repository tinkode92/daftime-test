"use client";

import {
  useEffect,
  useState,
  type FormEvent,
  type ChangeEvent,
} from "react";
import { t, type Locale } from "@/lib/translations";

type Props = {
  open: boolean;
  onClose: () => void;
  locale?: Locale;
};

const PDF_URL = "/assets/daftime-guide-2026.pdf";

export default function GuideDownloadModal({
  open,
  onClose,
  locale = "en",
}: Props) {
  const tr = t(locale).download;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setSubmitted(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "Daftime-Guide-2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const setter =
    (fn: (v: string) => void) => (e: ChangeEvent<HTMLInputElement>) =>
      fn(e.target.value);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-download-title"
      onClick={onClose}
      className="fade-up fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[520px] overflow-hidden rounded-3xl bg-daftime-yellow-light shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]"
      >
        {/* Decorative leaf in the background */}
        <div className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-daftime-yellow/30 blur-3xl" />

        {/* Close */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full text-black/70 transition-colors hover:bg-black/[0.06]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
          >
            <path
              d="M2 2l10 10M12 2L2 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="relative px-6 pt-8 sm:px-10 sm:pt-10">
          <div className="flex items-center gap-2">
            <span className="size-1 rounded-full bg-black" />
            <p className="label-mono text-black">{tr.eyebrow}</p>
          </div>
          <h2
            id="guide-download-title"
            className="h-display mt-4 text-black"
          >
            {tr.title[0]}
            <br />
            {tr.title[1]}
          </h2>
          <p className="mt-3 max-w-[420px] text-[15px] leading-relaxed tracking-tight text-daftime-gray-text">
            {tr.subtitle}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative mt-6 flex flex-col gap-4 px-6 pb-8 sm:mt-8 sm:px-10 sm:pb-10"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              id="firstName"
              label={tr.firstName}
              placeholder="Jane"
              value={firstName}
              onChange={setter(setFirstName)}
              required
            />
            <Field
              id="lastName"
              label={tr.lastName}
              placeholder="Smith"
              value={lastName}
              onChange={setter(setLastName)}
              required
            />
          </div>
          <Field
            id="email"
            label={tr.email}
            type="email"
            placeholder="jane@email.com"
            value={email}
            onChange={setter(setEmail)}
            required
          />

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[12px] text-daftime-gray-mute">
              {tr.privacy}
            </p>
            <button
              type="submit"
              className="btn-pill cta-shimmer bg-daftime-yellow text-black hover:opacity-90"
            >
              {submitted ? tr.submitted : tr.submit}
              {submitted ? <CheckIcon /> : <ArrowRight />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

function Field({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[13px] tracking-tight text-daftime-gray-text"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-black/10 bg-white px-3 text-[14px] text-black outline-none transition-shadow placeholder:text-[#9e9e9e] focus:border-daftime-yellow focus:shadow-[0_0_0_3px_rgba(214,179,3,0.2)]"
      />
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7L7.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7l3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
