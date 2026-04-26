import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex items-start gap-2">
      <div className="flex items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.14] p-3 backdrop-blur-md">
        <Image
          src="/assets/logo-daftime.png"
          alt="Daftime"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
      </div>
      <div className="flex w-[510px] items-center justify-between rounded-xl border border-white/10 bg-white/[0.14] p-1 backdrop-blur-md">
        <ul className="flex items-center gap-1 px-2 text-white">
          <li className="rounded-lg px-2 py-1 text-[16px] tracking-tight transition-colors hover:bg-white/10">
            <a href="#what">What we do</a>
          </li>
          <li className="rounded-lg px-2 py-1 text-[16px] tracking-tight transition-colors hover:bg-white/10">
            <a href="#services">Services</a>
          </li>
          <li className="flex items-center gap-2 rounded-lg px-2 py-1 text-[16px] tracking-tight transition-colors hover:bg-white/10">
            <a href="#blog">Resources</a>
            <ChevronDown />
          </li>
        </ul>
        <div className="flex items-center gap-4 pr-1">
          <button className="flex items-center gap-1 text-[16px] text-white">
            <GlobeIcon />
            <span>EN</span>
            <ChevronDown />
          </button>
          <a
            href="#contact"
            className="flex h-10 items-center justify-center rounded-lg bg-daftime-yellow px-4 text-[14px] tracking-tight text-black transition-opacity hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

function ChevronDown() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
