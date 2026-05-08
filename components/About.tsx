"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const stats = [
  { value: "5+", label: "Yıllık Deneyim" },
  { value: "10+", label: "Tamamlanan Proje" },
  { value: "400+", label: "Konut" },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 md:py-44 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-24 md:items-start">

          {/* ── Left column ── */}
          <div>
            <FadeIn>
              <span className="block font-sans text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-5 font-semibold">
                Biz Kimiz
              </span>
              <h2 className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide">
                Tasarım,
                <br />
                <em className="italic text-[#C9A96E]">Mühendislik</em>
                <br />
                ve Ustalık
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mt-8 relative h-52 sm:h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src="https://arabaciogluyapi.com/img/home-grid-image-9.jpg"
                  alt="Arabacıoğlu Yapı — Efeler, Aydın"
                  fill
                  className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/35" />
                {/* Gold bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A96E]" />
              </div>
            </FadeIn>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-zinc-800">
              {stats.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.1}>
                  <span className="block font-serif font-bold text-3xl md:text-4xl text-[#C9A96E]">
                    {s.value}
                  </span>
                  <span className="block font-sans text-[9px] tracking-[0.25em] uppercase text-zinc-600 mt-1.5 font-semibold">
                    {s.label}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-8">
            <FadeIn>
              <div className="space-y-5 font-sans font-medium text-zinc-500 leading-relaxed text-sm">
                <p>
                  Aydın Efeler&apos;de kurulu Arabacıoğlu Yapı Tasarım İnşaat Ltd.Şti, lüks konut ve
                  karma kullanımlı projeler geliştirerek yaşam standartlarını yükseltmeyi hedeflemektedir.
                  Mimari yenilikler ve teknolojiyi birleştirerek özgün yaşam alanları tasarlıyoruz.
                </p>
                <p>
                  La Perla ve Fors Zeybek gibi öncü projelerimizle Efeler&apos;in kentsel
                  dönüşümüne katkı sağlıyoruz. Bağımsız yüzme havuzlu rezidanslardan prestijli
                  çatı dairelerine kadar her projede mükemmeliyeti esas alıyoruz.
                </p>
                <p>
                  Müşterilerimize en yüksek kalitede hizmet sunmak için mimarlık, mühendislik ve
                  ustalığı tek çatı altında buluşturuyoruz. Her projemiz, Aydın&apos;a değer katan
                  kalıcı bir eser olarak tasarlanır.
                </p>
              </div>
            </FadeIn>

            {/* Second photo */}
            <FadeIn delay={0.12}>
              <div className="relative h-52 sm:h-64 w-full overflow-hidden">
                <Image
                  src="https://arabaciogluyapi.com/img/icmekan01.jpg"
                  alt="La Perla iç mekan"
                  fill
                  className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              <a
                href="#iletisim"
                className="inline-flex items-center gap-4 font-sans font-bold text-sm tracking-[0.3em] uppercase text-black bg-[#C9A96E] px-8 py-4 hover:bg-[#A8894F] transition-colors duration-500"
              >
                Projenizi Konuşalım
              </a>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
