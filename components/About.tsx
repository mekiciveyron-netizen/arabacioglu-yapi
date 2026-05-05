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
    <section id="hakkimizda" className="py-16 md:py-40 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-24 md:items-start">

          {/* ── Left column ── */}
          <div>
            <FadeIn>
              <span className="block font-sans text-[11px] tracking-[0.4em] uppercase text-stone-400 mb-5">
                Biz Kimiz
              </span>
              <h2 className="font-serif font-light text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
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
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85&auto=format&fit=crop"
                  alt="Mimarlık detay"
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
                  <span className="block font-serif font-light text-3xl md:text-4xl text-white">
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
                  1997&apos;den bu yana Türkiye&apos;nin dört bir yanında konut, ticari ve karma
                  kullanımlı projeler tasarlıyoruz. Her yapıda mekânın özünü keşfetmeyi, işlevselliği
                  ve estetiği tek bir dilde buluşturmayı hedefliyoruz.
                </p>
                <p>
                  Tasarım sürecimiz arazi ile diyalogdan başlar. Topoğrafya, iklim, ışık ve kentsel
                  doku — bunların her biri binanın formunu ve ruhunu şekillendirir.
                </p>
                <p>
                  Müşterilerimizle kurduğumuz derin iş birliği, her projeyi benzersiz kılar. Taşın,
                  camın ve betonun ötesinde bir hikâye anlatıyoruz.
                </p>
              </div>
            </FadeIn>

            {/* Second photo */}
            <FadeIn delay={0.1}>
              <div className="relative h-52 sm:h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85&auto=format&fit=crop"
                  alt="Mimari iç mekan detayı"
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
                className="inline-flex items-center font-sans text-[11px] tracking-[0.3em] uppercase text-white border border-stone-700 px-7 py-4 hover:bg-white hover:text-stone-900 transition-all duration-500"
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
