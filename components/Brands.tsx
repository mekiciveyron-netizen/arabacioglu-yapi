"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const brands = [
  {
    name: "La Perla",
    logo: "https://arabaciogluyapi.com/img/alt-laperla-siyah.png",
    description:
      "Presidential çatı daireleri ve karma kullanımlı prestijli yaşam merkezi. Efeler'e değer katan dev bir proje.",
    detail: "Efeler / Aydın · 2022",
    href: "#projeler",
  },
  {
    name: "Fors Zeybek",
    logo: "https://arabaciogluyapi.com/img/alt-fors-siyah.png",
    description:
      "Zemin kat dairelerinde bağımsız yüzme havuzuyla ultra-lüks rezidans yaşamını yeniden tanımlayan proje.",
    detail: "Efeler / Aydın · 2022",
    href: "#projeler",
  },
];

export default function Brands() {
  return (
    <section className="py-14 md:py-24 px-4 md:px-12 bg-stone-50 border-t border-stone-100">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="block font-sans text-[11px] tracking-[0.4em] uppercase text-stone-400 mb-4">
            Flagship Projeler
          </span>
          <h2 className="font-serif font-light text-stone-900 text-2xl md:text-4xl leading-tight">
            Öne Çıkan Markalar
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-10 md:mt-14">
          {brands.map((b, i) => (
            <FadeIn key={b.name} delay={i * 0.1}>
              <a
                href={b.href}
                className="group flex flex-col items-center text-center border border-stone-200 px-8 py-10 md:px-12 md:py-14 hover:border-stone-400 hover:shadow-sm transition-all duration-500"
              >
                {/* Logo */}
                <div className="relative w-full h-16 md:h-24 mb-6">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                </div>

                <div className="w-8 h-[1px] bg-stone-300 group-hover:w-16 group-hover:bg-stone-500 transition-all duration-500 mb-6" />

                <p className="font-sans font-light text-[13px] text-stone-500 leading-relaxed max-w-xs">
                  {b.description}
                </p>
                <span className="mt-4 font-sans text-[10px] tracking-[0.25em] uppercase text-stone-400">
                  {b.detail}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
