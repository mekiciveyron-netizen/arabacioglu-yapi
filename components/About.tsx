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
    <section id="hakkimizda" className="py-14 md:py-40 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-24 md:items-start">

          {/* ── Left column ── */}
          <div>
            <FadeIn>
              <span className="block font-sans text-[11px] tracking-[0.4em] uppercase text-stone-400 mb-5">
                Biz Kimiz
              </span>
              <h2 className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
                Tasarım,
                <br />
                <em className="text-stone-400">Mühendislik</em>
                <br />
                ve Ustalık
              </h2>
            </FadeIn>

            {/* Photo — plain div so Next Image fill works reliably */}
            <FadeIn delay={0.1}>
              <div className="mt-8 relative h-52 sm:h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src="https://arabaciogluyapi.com/img/home-grid-image-9.jpg"
                  alt="Arabacıoğlu Yapı — Efeler, Aydın"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-stone-900/20" />
              </div>
            </FadeIn>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-stone-800">
              {stats.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.1}>
                  <span className="block font-serif font-bold text-3xl md:text-4xl text-white">
                    {s.value}
                  </span>
                  <span className="block font-sans text-[9px] tracking-[0.2em] uppercase text-stone-500 mt-1">
                    {s.label}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-8">
            <FadeIn>
              <div className="space-y-5 font-sans font-light text-stone-400 leading-relaxed text-[13px] md:text-[14px]">
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
            <FadeIn delay={0.1}>
              <div className="relative h-52 sm:h-64 w-full overflow-hidden">
                <Image
                  src="https://arabaciogluyapi.com/img/icmekan01.jpg"
                  alt="La Perla iç mekan"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-stone-900/30" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <a
                href="#iletisim"
                className="inline-flex items-center font-sans font-semibold text-[11px] tracking-[0.3em] uppercase text-white border border-stone-700 px-7 py-4 hover:bg-white hover:text-stone-900 transition-all duration-500"
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
