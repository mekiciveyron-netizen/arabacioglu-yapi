"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  return (
    <section id="iletisim" className="py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          {/* Left: info */}
          <div>
            <FadeIn>
              <span className="block font-sans text-[11px] tracking-[0.4em] uppercase text-stone-400 mb-6">
                İletişim
              </span>
              <h2
                className="font-serif font-light text-stone-900 leading-tight"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
              >
                Projenizi
                <br />
                Hayata
                <br />
                Geçirelim
              </h2>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-12 space-y-8">
              <div>
                <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                  Adres
                </span>
                <p className="font-sans text-[14px] text-stone-600 font-light leading-relaxed">
                  Nispetiye Caddesi No: 12<br />
                  Beşiktaş, İstanbul
                </p>
              </div>
              <div>
                <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                  Telefon
                </span>
                <a
                  href="tel:+902121234567"
                  className="font-sans text-[14px] text-stone-600 font-light hover:text-stone-900 transition-colors"
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
                  className="font-sans text-[14px] text-stone-600 font-light hover:text-stone-900 transition-colors"
                >
                  info@arabaciogluyapi.com
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: form */}
          <FadeIn delay={0.2} direction="left">
            {status === "sent" ? (
              <div className="flex flex-col items-start justify-center h-full py-16">
                <div className="w-12 h-[1px] bg-stone-900 mb-8" />
                <h3 className="font-serif text-3xl font-light text-stone-900 mb-4">
                  Teşekkürler.
                </h3>
                <p className="font-sans text-[14px] text-stone-500 font-light leading-relaxed max-w-sm">
                  Mesajınızı aldık. En kısa sürede size geri döneceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3">
                      Ad Soyad <span className="text-stone-300">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-stone-200 pb-3 font-sans text-[14px] text-stone-900 placeholder-stone-300 outline-none focus:border-stone-900 transition-colors duration-300"
                      placeholder="Adınız"
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
                      className="w-full bg-transparent border-b border-stone-200 pb-3 font-sans text-[14px] text-stone-900 placeholder-stone-300 outline-none focus:border-stone-900 transition-colors duration-300"
                      placeholder="+90"
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
                    className="w-full bg-transparent border-b border-stone-200 pb-3 font-sans text-[14px] text-stone-900 placeholder-stone-300 outline-none focus:border-stone-900 transition-colors duration-300"
                    placeholder="email@adresiniz.com"
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
                    rows={5}
                    className="w-full bg-transparent border-b border-stone-200 pb-3 font-sans text-[14px] text-stone-900 placeholder-stone-300 outline-none focus:border-stone-900 transition-colors duration-300 resize-none"
                    placeholder="Projenizi kısaca anlatın..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative overflow-hidden bg-stone-900 text-white font-sans text-[11px] tracking-[0.3em] uppercase px-12 py-5 hover:bg-stone-800 transition-colors duration-500 disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full border border-white/40 border-t-white animate-spin" />
                        Gönderiliyor...
                      </span>
                    ) : (
                      "Gönder"
                    )}
                  </button>
                </div>

                <p className="font-sans text-[11px] text-stone-400 font-light">
                  Bilgileriniz gizli tutulur ve yalnızca sizinle iletişim kurmak için kullanılır.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
