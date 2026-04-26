import Image from "next/image";

const brands = [
  { name: "Synergy", icon: "/assets/brand-1.svg" },
  { name: "Horizon", icon: "/assets/brand-2.svg" },
  { name: "Phoenix", icon: "/assets/brand-3.svg" },
  { name: "Pulse", icon: "/assets/brand-4.svg" },
  { name: "Solaris", icon: "/assets/brand-5.svg" },
  { name: "Synergy", icon: "/assets/brand-1.svg" },
  { name: "Horizon", icon: "/assets/brand-2.svg" },
  { name: "Phoenix", icon: "/assets/brand-3.svg" },
  { name: "Pulse", icon: "/assets/brand-4.svg" },
];

export default function BrandMarquee() {
  return (
    <div className="overflow-hidden">
      <div className="marquee-track gap-12 px-6">
        {[...brands, ...brands].map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="flex shrink-0 items-center gap-2 px-3 py-3"
          >
            <Image
              src={brand.icon}
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px] object-contain"
            />
            <span className="whitespace-nowrap text-[18px] font-medium text-white">
              {brand.name}
              <span className="ml-0.5 align-super text-[10px]">™</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
