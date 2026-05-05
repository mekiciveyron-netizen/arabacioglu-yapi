"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const stats = [
  { value: "28+", label: "Yıllık Deneyim" },
  { value: "140+", label: "Tamamlanan Proje" },
  { value: "12", label: "Ödül" },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-16 md:py-40 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-start">
          {/* Left */}
          <div>
            <FadeIn>
              <span className="block font-sans text-[11px] tracking-[0.4em] uppercase text-stone-400 mb-5">
                Biz Kimiz
              </span>
              <h2 className="font-serif font-light leading-tight text-white text-3xl sm:text-4xl md:text-5xl">
                Tasarım,
                <br />
                <em className="text-stone-400">Mühendislik</em>
                <br />
                ve Ustalık
              </h2>
            </FadeIn>

            {/* Photo */}
            <FadeIn delay={0.15} className="mt-8 md:mt-12 relative h-52 sm:h-64 md:h-80 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85&auto=format&fit=crop"
                alt="Mimarlık detay"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-stone-900/20" />
            </FadeIn>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-8 md:pt-10 border-t border-stone-800">
              {stats.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.1}>
                  <div>
                    <span className="block font-serif font-light text-3xl md:text-4xl text-white">
                      {s.value}
                    </span>
                    <span className="block font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-stone-500 mt-1 md:mt-2">
                      {s.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right */}
          <FadeIn delay={0.2} direction="left" className="flex flex-col gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8 font-sans font-light text-stone-400 leading-loose text-[13px] md:text-[14px]">
              <p>
                1997&apos;den bu yana Türkiye&apos;nin dört bir yanında konut, ticari ve karma kullanımlı
                projeler tasarlıyoruz. Her yapıda mekânın özünü keşfetmeyi, işlevselliği ve estetiği
                tek bir dilde buluşturmayı hedefliyoruz.
              </p>
              <p>
                Tasarım sürecimiz, arazi ile diyalogdan başlar. Topoğrafya, iklim, ışık ve kentsel doku
                — bunların her biri binanın formunu ve ruhunu şekillendirir.
              </p>
              <p>
                Müşterilerimizle kurduğumuz derin iş birliği, her projeyi benzersiz kılar. Taşın, camın
                ve betonun ötesinde bir hikâye anlatıyoruz.
              </p>
            </div>

            {/* Second photo */}
            <div className="relative h-52 sm:h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85&auto=format&fit=crop"
                alt="Mimari iç mekan detayı"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-stone-900/30" />
            </div>

            <div>
              <a
                href="#iletisim"
                className="inline-flex items-center gap-4 font-sans text-[11px] tracking-[0.3em] uppercase text-white border border-stone-700 px-6 md:px-8 py-4 hover:bg-white hover:text-stone-900 transition-all duration-500"
              >
                Projenizi Konuşalım
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
