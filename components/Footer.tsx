import Image from "next/image";
import { t, type Locale } from "@/lib/translations";

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const tr = t(locale).footer;
  return (
    <footer className="bg-white p-2 sm:p-4">
      <div className="relative overflow-hidden rounded-2xl bg-daftime-yellow px-5 py-8 sm:px-6 sm:py-10 md:h-[254px]">
        <div className="pointer-events-none absolute inset-0 -translate-y-[40%] opacity-[0.06]">
          <Image
            src="/assets/logo-daftime.png"
            alt=""
            width={1263}
            height={1290}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="relative flex h-full flex-col justify-between gap-8 md:gap-0">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Image
              src="/assets/logo-wordmark.png"
              alt="Daftime"
              width={144}
              height={40}
              className="h-9 w-auto object-contain sm:h-10"
            />
            <p className="text-[12px] uppercase tracking-wider text-black sm:text-[14px] md:text-[16px]">
              {tr.rights}
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 text-[14px] uppercase tracking-wider text-black sm:text-[16px] md:flex-row md:items-end">
            <div className="flex flex-wrap items-center gap-6 sm:gap-12">
              <a
                href="https://www.instagram.com/daftime.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                Instagram
              </a>
              <a href="#" className="transition-opacity hover:opacity-60">
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@Daftime"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                Youtube
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-12">
              <a href="#" className="transition-opacity hover:opacity-60">
                {tr.privacy}
              </a>
              <a href="#" className="transition-opacity hover:opacity-60">
                {tr.terms}
              </a>
              <span>{tr.copyright}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
