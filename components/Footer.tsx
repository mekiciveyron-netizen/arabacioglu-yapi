export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif text-sm font-light tracking-[0.15em] uppercase text-stone-500">
          Arabacioglu Yapı
        </span>

        <div className="flex items-center gap-8">
          <a
            href="#projeler"
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 transition-colors"
          >
            Projeler
          </a>
          <a
            href="#hakkimizda"
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 transition-colors"
          >
            Hakkımızda
          </a>
          <a
            href="#iletisim"
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 transition-colors"
          >
            İletişim
          </a>
        </div>

        <p className="font-sans text-[10px] text-stone-400 font-light tracking-wide">
          © {year} Arabacioglu Yapı. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
