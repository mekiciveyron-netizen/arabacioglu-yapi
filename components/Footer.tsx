export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0 mb-10">
          <span className="font-serif text-sm font-semibold tracking-[0.25em] uppercase text-zinc-400">
            Arabacıoğlu Yapı
          </span>

          <nav className="flex items-center gap-8 md:gap-10">
            {["#projeler", "#hakkimizda", "#iletisim"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-zinc-700 hover:text-[#C9A96E] transition-colors duration-400"
              >
                {["Projeler", "Hakkımızda", "İletişim"][i]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="mailto:info@arabaciogluyapi.com"
              className="font-sans font-medium text-xs tracking-wide text-zinc-700 hover:text-[#C9A96E] transition-colors duration-300"
            >
              info@arabaciogluyapi.com
            </a>
            <a
              href="tel:4440913"
              className="font-sans font-semibold text-xs tracking-[0.15em] text-zinc-600 hover:text-[#C9A96E] transition-colors duration-300"
            >
              444 09 13
            </a>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-[1px] bg-gradient-to-r from-[#C9A96E]/40 via-[#C9A96E]/10 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <p className="font-sans text-[10px] text-zinc-800 font-medium tracking-wide">
            © {year} Arabacıoğlu Yapı Tasarım İnşaat Ltd.Şti. Tüm hakları saklıdır.
          </p>
          <p className="font-sans text-[10px] text-zinc-800 font-medium tracking-wide">
            Girne Mahallesi · Efeler / Aydın
          </p>
        </div>

      </div>
    </footer>
  );
}
