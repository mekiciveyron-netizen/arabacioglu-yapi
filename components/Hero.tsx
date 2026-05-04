"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&q=90&auto=format&fit=crop"
          alt="Modern mimari villa"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/30 to-stone-900/10" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28"
      >
        <motion.span
          className="block font-sans text-[11px] tracking-[0.4em] uppercase text-stone-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Mimarlık &amp; İnşaat
        </motion.span>

        <motion.h1
          className="font-serif font-light text-white leading-[1.05]"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Mekânı
          <br />
          <em className="not-italic text-stone-300">Sanata</em>
          <br />
          Dönüştürüyoruz
        </motion.h1>

        <motion.div
          className="flex items-center gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#projeler"
            className="group flex items-center gap-3 font-sans text-[11px] tracking-[0.25em] uppercase text-white"
          >
            <span className="w-12 h-[1px] bg-white/40 group-hover:w-20 group-hover:bg-white transition-all duration-500" />
            Projeleri Keşfet
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-12 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone-400 rotate-90 origin-center mb-6">
          Kaydır
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </section>
  );
}
