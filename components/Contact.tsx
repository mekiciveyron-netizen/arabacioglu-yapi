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
    <section id="iletisim" className="py-16 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Stack on mobile, side-by-side on md+ */}
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-24">

          {/* ── Info column ── */}
          <div>
            <FadeIn>
              <span className="block font-sans text-[11px] tracking-[0.4em] uppercase text-stone-400 mb-5">
                İletişim
              </span>
              <h2 className="font-serif font-light text-stone-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
                Projenizi
                <br />
                Hayata
                <br />
                Geçirelim
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-8 space-y-6">
                <div>
                  <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                    Adres
                  </span>
                  <p className="font-sans text-[13px] text-stone-600 font-light leading-relaxed">
                    Nispetiye Caddesi No: 12<br />Beşiktaş, İstanbul
                  </p>
                </div>
                <div>
                  <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                    Telefon
                  </span>
                  <a
                    href="tel:+902121234567"
                    className="font-sans text-[13px] text-stone-600 font-light hover:text-stone-900 transition-colors"
                  >
                    +90 212 123 45 67
                  </a>
                </div>
                <div>
                  <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                    E-posta
                  </span>
                  <a
                    href="mailto:info@arabaciogluyapi.com"
                    className="font-sans text-[13px] text-stone-600 font-light hover:text-stone-900 transition-colors break-all"
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
                  <div className="w-10 h-[1px] bg-stone-900 mb-7" />
                  <h3 className="font-serif text-3xl font-light text-stone-900 mb-4">
                    Teşekkürler.
                  </h3>
                  <p className="font-sans text-[13px] text-stone-500 font-light leading-relaxed">
                    Mesajınızı aldık. En kısa sürede size geri döneceğiz.
                  </p>
                </div>
              </FadeIn>
            ) : (
              <FadeIn delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3">
                        Ad Soyad <span className="text-stone-300">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Adınız"
                        className="w-full bg-transparent border-b border-stone-200 pb-3 font-sans text-[14px] text-stone-900 placeholder-stone-300 outline-none focus:border-stone-900 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+90"
                        className="w-full bg-transparent border-b border-stone-200 pb-3 font-sans text-[14px] text-stone-900 placeholder-stone-300 outline-none focus:border-stone-900 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3">
                      E-posta <span className="text-stone-300">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="email@adresiniz.com"
                      className="w-full bg-transparent border-b border-stone-200 pb-3 font-sans text-[14px] text-stone-900 placeholder-stone-300 outline-none focus:border-stone-900 transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3">
                      Proje Hakkında <span className="text-stone-300">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Projenizi kısaca anlatın..."
                      className="w-full bg-transparent border-b border-stone-200 pb-3 font-sans text-[14px] text-stone-900 placeholder-stone-300 outline-none focus:border-stone-900 transition-colors duration-300 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full sm:w-auto min-h-[52px] flex items-center justify-center gap-3 bg-stone-900 text-white font-sans text-[11px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-stone-700 transition-colors duration-500 disabled:opacity-50"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-3 h-3 rounded-full border border-white/40 border-t-white animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        "Gönder"
                      )}
                    </button>
                  </div>

                  <p className="font-sans text-[11px] text-stone-400 font-light">
                    Bilgileriniz gizli tutulur ve yalnızca sizinle iletişim kurmak için kullanılır.
                  </p>
                </form>
              </FadeIn>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
