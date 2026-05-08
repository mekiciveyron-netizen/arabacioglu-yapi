"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background + parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://arabaciogluyapi.com/img/home-slide-3.jpg"
          alt="Arabacıoğlu Yapı — Efeler, Aydın"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/72" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A96E] z-20" />

      {/* Centered content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-4 md:px-12 max-w-6xl mx-auto text-center"
      >
        <motion.span
          className="block font-sans font-semibold text-xs md:text-sm tracking-[0.55em] uppercase text-[#C9A96E] mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Mimarlık &amp; İnşaat · Efeler, Aydın
        </motion.span>

        <motion.h1
          className="font-serif font-bold text-white leading-none tracking-tight text-4xl sm:text-6xl md:text-8xl lg:text-[9rem]"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Mekânı
          <br />
          <em className="italic text-[#C9A96E]">Sanata</em>
          <br />
          Dönüştürüyoruz
        </motion.h1>

        <motion.div
          className="mt-14 md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
        >
          <a
            href="#projeler"
            className="inline-flex items-center gap-5 font-sans font-bold text-sm tracking-[0.3em] uppercase text-white border border-white/25 px-10 py-5 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-700"
          >
            <span className="w-6 h-[1px] bg-current transition-all duration-500 group-hover:w-10" />
            Projeleri Keşfet
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — bottom center */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="font-sans text-[9px] tracking-[0.45em] uppercase text-zinc-600">
          Kaydır
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A96E]/60 to-transparent" />
      </motion.div>
    </section>
  );
}
