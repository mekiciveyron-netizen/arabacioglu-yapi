"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Projeler", href: "#projeler" },
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "İletişim", href: "#iletisim" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-zinc-900"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-20 md:h-28">

          {/* Logo */}
          <Link href="/" className="relative block h-12 md:h-[72px] w-44 md:w-72 flex-shrink-0">
            <Image
              src="https://arabaciogluyapi.com/img/arabacioglulogo.png"
              alt="Arabacıoğlu Yapı"
              fill
              priority
              className="object-contain object-left"
              sizes="288px"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-[#C9A96E] transition-colors duration-500"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#iletisim"
              className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-black bg-[#C9A96E] px-6 py-2.5 hover:bg-[#A8894F] transition-colors duration-500"
            >
              İletişim
            </a>
          </nav>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[6px] w-11 h-11 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            <span
              className={`block h-[1.5px] w-7 transition-all duration-300 origin-center bg-white ${
                menuOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-7 transition-opacity duration-300 bg-white ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-7 transition-all duration-300 origin-center bg-white ${
                menuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A96E]" />

            <nav className="flex flex-col items-center gap-6 w-full">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl font-bold text-white py-3 w-full text-center border-b border-zinc-900 last:border-0 hover:text-[#C9A96E] transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="absolute bottom-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="tel:4440913"
                className="block font-sans text-sm font-semibold tracking-[0.2em] text-[#C9A96E] mb-2"
              >
                444 09 13
              </a>
              <a
                href="mailto:info@arabaciogluyapi.com"
                className="block font-sans text-sm font-medium tracking-[0.1em] text-zinc-500"
              >
                info@arabaciogluyapi.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
