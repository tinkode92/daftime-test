import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white p-4">
      <div className="relative h-[254px] overflow-hidden rounded-2xl bg-daftime-yellow px-6 py-10">
        <div className="pointer-events-none absolute inset-0 -translate-y-[40%] opacity-[0.06]">
          <Image
            src="/assets/logo-daftime.png"
            alt=""
            width={1263}
            height={1290}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/logo-wordmark.png"
              alt="Daftime"
              width={144}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <p className="text-[16px] uppercase tracking-wider text-black">
              © 2026 Daftime All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 text-[16px] uppercase tracking-wider text-black md:flex-row md:items-end">
            <div className="flex items-center gap-12">
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Youtube</a>
            </div>
            <div className="flex items-center gap-12">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms &amp; Conditions</a>
              <span>© 2025 Daftime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
