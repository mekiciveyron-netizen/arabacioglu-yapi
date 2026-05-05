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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Projeler", href: "#projeler" },
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "İletişim", href: "#iletisim" },
  ];

  // Burger bars are white on dark hero, dark after scroll or when menu is open
  const barColor = scrolled || menuOpen ? "bg-stone-900" : "bg-white";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-stone-50/95 backdrop-blur-sm border-b border-stone-200"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative block h-9 md:h-11 w-36 md:w-44 flex-shrink-0">
            {/* Color logo — hero (dark) state */}
            <Image
              src="https://arabaciogluyapi.com/img/arabacioglulogo.png"
              alt="Arabacıoğlu Yapı"
              fill
              priority
              className={`object-contain object-left transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
              sizes="176px"
            />
            {/* Dark logo — scrolled (light) state */}
            <Image
              src="https://arabaciogluyapi.com/img/logo-siyah.png"
              alt="Arabacıoğlu Yapı"
              fill
              className={`object-contain object-left transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
              sizes="176px"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-sans text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-stone-600 hover:text-stone-900"
                    : "text-stone-200 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            <span
              className={`block h-[1px] w-6 transition-all duration-300 origin-center ${barColor} ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1px] w-6 transition-opacity duration-300 ${barColor} ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1px] w-6 transition-all duration-300 origin-center ${barColor} ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-stone-50 flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col items-center gap-6 w-full">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl font-bold text-stone-900 py-2 w-full text-center border-b border-stone-100 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            {/* Contact info at bottom */}
            <motion.div
              className="absolute bottom-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="tel:4440913"
                className="block font-sans text-[12px] tracking-[0.2em] text-stone-400 mb-2"
              >
                444 09 13
              </a>
              <a
                href="mailto:info@arabaciogluyapi.com"
                className="block font-sans text-[11px] tracking-[0.15em] text-stone-400"
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
