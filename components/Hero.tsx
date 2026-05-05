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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background image + parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://arabaciogluyapi.com/img/home-slide-3.jpg"
          alt="Arabacıoğlu Yapı — Efeler, Aydın"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent" />
      </motion.div>

      {/* Text content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-4 md:px-12 pb-14 md:pb-28 max-w-7xl mx-auto"
      >
        <motion.span
          className="block font-sans font-semibold text-xs md:text-sm tracking-[0.35em] uppercase text-stone-300 mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Mimarlık &amp; İnşaat
        </motion.span>

        <motion.h1
          className="font-serif font-bold text-white leading-[1.08] text-3xl sm:text-5xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Mekânı
          <br />
          <em className="italic text-stone-300">Sanata</em>
          <br />
          Dönüştürüyoruz
        </motion.h1>

        <motion.div
          className="mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#projeler"
            className="group inline-flex items-center gap-3 font-sans font-bold text-sm tracking-[0.2em] uppercase text-white"
          >
            <span className="w-8 h-[1px] bg-white/50 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
            Projeleri Keşfet
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone-400 [writing-mode:vertical-rl] mb-3">
          Kaydır
        </span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </section>
  );
}
