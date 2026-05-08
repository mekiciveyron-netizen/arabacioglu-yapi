"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  return (
    <section id="iletisim" className="py-24 md:py-44 px-4 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col gap-14 md:grid md:grid-cols-2 md:gap-24">

          {/* ── Info column ── */}
          <div>
            <FadeIn>
              <span className="block font-sans text-xs tracking-[0.5em] uppercase text-[#C9A96E] mb-5 font-semibold">
                İletişim
              </span>
              <h2 className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide">
                Projenizi
                <br />
                <em className="italic text-[#C9A96E]">Hayata</em>
                <br />
                Geçirelim
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mt-10 space-y-7">
                <div className="border-l-2 border-[#C9A96E] pl-5">
                  <span className="block font-sans text-[10px] tracking-[0.35em] uppercase text-zinc-600 mb-1.5 font-semibold">
                    Adres
                  </span>
                  <p className="font-sans text-sm text-zinc-300 font-medium leading-relaxed">
                    Girne Mahallesi<br />Efeler / Aydın, 09100
                  </p>
                </div>
                <div className="border-l-2 border-zinc-800 pl-5">
                  <span className="block font-sans text-[10px] tracking-[0.35em] uppercase text-zinc-600 mb-1.5 font-semibold">
                    Telefon
                  </span>
                  <a
                    href="tel:4440913"
                    className="font-sans text-sm text-zinc-300 font-medium hover:text-[#C9A96E] transition-colors duration-300"
                  >
                    444 09 13
                  </a>
                </div>
                <div className="border-l-2 border-zinc-800 pl-5">
                  <span className="block font-sans text-[10px] tracking-[0.35em] uppercase text-zinc-600 mb-1.5 font-semibold">
                    E-posta
                  </span>
                  <a
                    href="mailto:info@arabaciogluyapi.com"
                    className="font-sans text-sm text-zinc-300 font-medium hover:text-[#C9A96E] transition-colors duration-300 break-all"
                  >
                    info@arabaciogluyapi.com
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Form column ── */}
          <div>
            {status === "sent" ? (
              <FadeIn>
                <div className="py-10">
                  <div className="w-10 h-[2px] bg-[#C9A96E] mb-8" />
                  <h3 className="font-serif text-3xl font-bold text-white mb-4 tracking-wide">
                    Teşekkürler.
                  </h3>
                  <p className="font-sans text-sm text-zinc-500 font-medium leading-relaxed">
                    Mesajınızı aldık. En kısa sürede size geri döneceğiz.
                  </p>
                </div>
              </FadeIn>
            ) : (
              <FadeIn delay={0.12}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.35em] uppercase text-zinc-600 mb-3 font-semibold">
                        Ad Soyad <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Adınız"
                        className="w-full bg-transparent border-b border-zinc-800 pb-3 font-sans text-sm text-white placeholder-zinc-700 outline-none focus:border-[#C9A96E] transition-colors duration-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.35em] uppercase text-zinc-600 mb-3 font-semibold">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+90"
                        className="w-full bg-transparent border-b border-zinc-800 pb-3 font-sans text-sm text-white placeholder-zinc-700 outline-none focus:border-[#C9A96E] transition-colors duration-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-[0.35em] uppercase text-zinc-600 mb-3 font-semibold">
                      E-posta <span className="text-[#C9A96E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="email@adresiniz.com"
                      className="w-full bg-transparent border-b border-zinc-800 pb-3 font-sans text-sm text-white placeholder-zinc-700 outline-none focus:border-[#C9A96E] transition-colors duration-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-[0.35em] uppercase text-zinc-600 mb-3 font-semibold">
                      Proje Hakkında <span className="text-[#C9A96E]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Projenizi kısaca anlatın..."
                      className="w-full bg-transparent border-b border-zinc-800 pb-3 font-sans text-sm text-white placeholder-zinc-700 outline-none focus:border-[#C9A96E] transition-colors duration-500 resize-none font-medium"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full sm:w-auto min-h-[52px] flex items-center justify-center gap-3 bg-[#C9A96E] text-black font-sans font-bold text-sm tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#A8894F] transition-colors duration-500 disabled:opacity-50"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-3 h-3 rounded-full border border-black/30 border-t-black animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        "Gönder"
                      )}
                    </button>
                  </div>

                  <p className="font-sans text-xs text-zinc-700 font-medium">
                    Bilgileriniz gizli tutulur ve yalnızca sizinle iletişim kurmak için kullanılır.
                  </p>
                </form>
              </FadeIn>
            )}
          </div>

        </div>

        {/* ── Google Maps — dark style ── */}
        <FadeIn delay={0.12} className="mt-20 md:mt-28">
          <span className="block font-sans text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-5 font-semibold">
            Konum
          </span>
          <div className="relative w-full overflow-hidden border border-zinc-900" style={{ height: "380px" }}>
            <iframe
              title="Arabacioglu Yapı Konum"
              src="https://maps.google.com/maps?q=Arabac%C4%B1o%C4%9Flu+Yap%C4%B1+Ta%C5%9Far%C4%B1m+%C4%B0n%C5%9Faat+Efeler+Ayd%C4%B1n&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{
                border: 0,
                filter: "invert(0.9) hue-rotate(180deg) saturate(0.25) brightness(0.75)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
