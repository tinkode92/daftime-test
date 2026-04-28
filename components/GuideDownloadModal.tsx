"use client";

import {
  useEffect,
  useState,
  type FormEvent,
  type ChangeEvent,
} from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const PDF_URL = "/assets/daftime-guide-2026.pdf";

export default function GuideDownloadModal({ open, onClose }: Props) {
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

  // Reset transient state on close so the next open is fresh
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
    // Trigger the PDF download
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
        className="relative w-full max-w-[560px] overflow-hidden rounded-[28px] bg-daftime-yellow-light shadow-2xl"
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-[#161535] transition-colors hover:bg-black/[0.06]"
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
        <div className="px-6 pt-8 sm:px-10 sm:pt-10">
          <h2
            id="guide-download-title"
            className="text-[26px] font-bold leading-[1.05] tracking-tight text-[#161535] sm:text-[34px]"
          >
            Access the
            <br />
            2026 Daftime Guide
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#161535]/60 sm:text-[15px]">
            Enter your details to receive the full edition in PDF format.
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="mx-6 mb-6 mt-6 rounded-[20px] bg-[#0e1432] p-5 sm:mx-10 sm:mb-10 sm:mt-8 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              id="firstName"
              label="First Name"
              placeholder="Jane"
              value={firstName}
              onChange={setter(setFirstName)}
              required
            />
            <Field
              id="lastName"
              label="Last Name"
              placeholder="Smith"
              value={lastName}
              onChange={setter(setLastName)}
              required
            />
          </div>
          <div className="mt-4">
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="jane@email.com"
              value={email}
              onChange={setter(setEmail)}
              required
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#6b5d20] px-6 text-[14px] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#7c6c25]"
            >
              {submitted ? "Downloaded ✓" : "Get access"}
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
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[14px] text-white">
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
        className="h-11 rounded-md bg-white px-3 text-[14px] text-[#161535] outline-none placeholder:text-[#9e9e9e] focus:ring-2 focus:ring-daftime-yellow/60"
      />
    </div>
  );
}
