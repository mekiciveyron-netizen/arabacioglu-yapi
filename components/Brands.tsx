"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const brands = [
  {
    name: "La Perla",
    logo: "https://arabaciogluyapi.com/img/alt-laperla.png",
    description:
      "Presidential çatı daireleri ve karma kullanımlı prestijli yaşam merkezi. Efeler'e değer katan dev bir proje.",
    detail: "Efeler / Aydın · 2022",
    href: "#projeler",
  },
  {
    name: "Fors Zeybek",
    logo: "https://arabaciogluyapi.com/img/alt-fors.png",
    description:
      "Zemin kat dairelerinde bağımsız yüzme havuzuyla ultra-lüks rezidans yaşamını yeniden tanımlayan proje.",
    detail: "Efeler / Aydın · 2022",
    href: "#projeler",
  },
];

export default function Brands() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <span className="block font-sans text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-4 font-semibold">
            Flagship Projeler
          </span>
          <h2 className="font-serif font-bold text-white text-2xl md:text-4xl leading-tight tracking-wide">
            Öne Çıkan Markalar
          </h2>
        </FadeIn>

        {/* Gold divider */}
        <FadeIn delay={0.1}>
          <div className="mt-10 mb-14 h-[1px] bg-gradient-to-r from-[#C9A96E]/60 via-[#C9A96E]/20 to-transparent" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {brands.map((b, i) => (
            <FadeIn key={b.name} delay={i * 0.12}>
              <a
                href={b.href}
                className="group flex flex-col items-center text-center border border-zinc-900 px-8 py-12 md:px-12 md:py-16 hover:border-[#C9A96E]/50 transition-all duration-700 bg-zinc-950/50"
              >
                {/* Logo */}
                <div className="relative w-full h-16 md:h-24 mb-8">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    fill
                    className="object-contain [filter:brightness(0)_invert(1)]"
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                </div>

                {/* Gold line */}
                <div className="w-10 h-[1px] bg-[#C9A96E] group-hover:w-20 transition-all duration-700 mb-8" />

                <p className="font-sans font-medium text-sm text-zinc-500 leading-relaxed max-w-xs">
                  {b.description}
                </p>
                <span className="mt-5 font-sans text-[10px] tracking-[0.35em] uppercase text-zinc-700 font-semibold">
                  {b.detail}
                </span>

                {/* Hover CTA */}
                <span className="mt-8 font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#C9A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  İncele →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
