export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <span className="font-serif text-sm font-light tracking-[0.15em] uppercase text-stone-500">
          Arabacıoğlu Yapı
        </span>

        <div className="flex items-center gap-6 md:gap-8">
          {["#projeler", "#hakkimizda", "#iletisim"].map((href, i) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 transition-colors"
            >
              {["Projeler", "Hakkımızda", "İletişim"][i]}
            </a>
          ))}
        </div>

        <p className="font-sans text-[10px] text-stone-400 font-light tracking-wide text-center md:text-right">
          © {year} Arabacıoğlu Yapı.
        </p>
      </div>
    </footer>
  );
}
