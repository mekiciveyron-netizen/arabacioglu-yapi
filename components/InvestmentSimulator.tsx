"use client";

import { useState, useMemo, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Plane, Car, Building2, AlertTriangle, TrendingUp, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types & Config ───────────────────────────────────────────────────────────

type Currency = "TL" | "USD" | "EUR";

const CFG = {
  TL:  { symbol: "₺", prefix: false, growth: 0.45, min: 1_000_000,  max: 20_000_000, step: 500_000, dflt: 5_000_000 },
  USD: { symbol: "$", prefix: true,  growth: 0.05, min: 50_000,     max: 1_000_000,  step: 25_000,  dflt: 250_000  },
  EUR: { symbol: "€", prefix: true,  growth: 0.05, min: 50_000,     max: 1_000_000,  step: 25_000,  dflt: 250_000  },
} as const;

const RENT_RATE = 0.06;
const GOLD      = "#C9A96E";
const GOLD_DIM  = "#A8894F";
const AMBER     = "#F59E0B";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number, cur: Currency): string {
  const { symbol, prefix } = CFG[cur];
  const s = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(Math.round(n));
  return prefix ? `${symbol} ${s}` : `${s} ${symbol}`;
}

function fmtAxis(n: number, cur: Currency): string {
  if (cur === "TL") {
    if (n >= 1_000_000_000) return `${+(n / 1_000_000_000).toFixed(1)}Mrd`;
    if (n >= 1_000_000)     return `${+(n / 1_000_000).toFixed(0)}M`;
    return `${+(n / 1_000).toFixed(0)}B`;
  }
  const s = CFG[cur].symbol;
  if (n >= 1_000_000) return `${s}${+(n / 1_000_000).toFixed(1)}M`;
  return `${s}${+(n / 1_000).toFixed(0)}K`;
}

function calcData(budget: number, cur: Currency) {
  const g = CFG[cur].growth;
  let rentAcc = 0;
  const rows = Array.from({ length: 10 }, (_, i) => {
    const y    = i + 1;
    const pv   = budget * Math.pow(1 + g, y);
    rentAcc   += budget * Math.pow(1 + g, y - 1) * RENT_RATE;
    return { label: `Y${y}`, yearLabel: `Yıl ${y}`, pv: Math.round(pv), rent: Math.round(rentAcc) };
  });
  const last = rows[rows.length - 1];
  return {
    rows,
    finalPV:    last.pv,
    finalRent:  last.rent,
    finalTotal: last.pv + last.rent,
    multiplier: +((last.pv + last.rent) / budget).toFixed(1),
    roi:        Math.round(((last.pv + last.rent) / budget - 1) * 100),
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ChartTip({ active, payload, currency }: { active?: boolean; payload?: any[]; currency: Currency }) {
  if (!active || !payload?.length) return null;
  const pv   = payload[0]?.value ?? 0;
  const rent = payload[1]?.value ?? 0;
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-sm px-4 py-3 shadow-2xl shadow-black/70 text-xs">
      <p className="text-zinc-500 tracking-[0.3em] uppercase font-semibold mb-2.5">
        {payload[0]?.payload?.yearLabel}
      </p>
      <p className="text-zinc-300 font-medium mb-1">
        Gayrimenkul:&nbsp;
        <span className="font-bold" style={{ color: GOLD }}>{fmt(pv, currency)}</span>
      </p>
      <p className="text-zinc-300 font-medium mb-1">
        Kira Birikimi:&nbsp;
        <span className="font-bold text-amber-400">{fmt(rent, currency)}</span>
      </p>
      <div className="border-t border-zinc-700/70 mt-2 pt-2">
        <p className="text-white font-bold">
          Toplam:&nbsp;
          <span style={{ color: GOLD }}>{fmt(pv + rent, currency)}</span>
        </p>
      </div>
    </div>
  );
}

function LifeCard({ icon: Icon, tag, body, delay }: { icon: React.ElementType; tag: string; body: string; delay: number }) {
  return (
    <motion.div
      className="group flex flex-col gap-5 bg-zinc-900/60 border border-zinc-800 hover:border-[#C9A96E]/40 p-7 md:p-8 transition-colors duration-500"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="w-11 h-11 flex items-center justify-center border border-[#C9A96E]/25 group-hover:border-[#C9A96E]/60 transition-colors duration-500"
      >
        <Icon className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase font-semibold mb-2" style={{ color: GOLD }}>
          {tag}
        </p>
        <p className="font-sans text-sm text-zinc-400 leading-relaxed font-medium">{body}</p>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function InvestmentSimulator() {
  const [currency, setCurrency] = useState<Currency>("TL");
  const [budget,   setBudget]   = useState<number>(CFG.TL.dflt);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const { min, max, step } = CFG[currency];
  const sliderPct = useMemo(() => ((budget - min) / (max - min)) * 100, [budget, min, max]);

  const { rows, finalPV, finalRent, finalTotal, multiplier, roi } = useMemo(
    () => calcData(budget, currency),
    [budget, currency]
  );

  function switchCurrency(c: Currency) {
    setCurrency(c);
    setBudget(CFG[c].dflt);
  }

  return (
    <section
      id="simulasyon"
      className="relative py-24 md:py-40 px-4 md:px-12 bg-zinc-950 overflow-hidden"
    >
      {/* Ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="block font-sans text-xs tracking-[0.55em] uppercase font-semibold mb-5"
            style={{ color: GOLD }}
          >
            Dijital Yatırım Simülatörü
          </span>
          <h2 className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide mb-5">
            Geleceğinize Hükmedin
          </h2>
          <div className="w-10 h-[1px] mx-auto mb-6" style={{ background: GOLD }} />
          <p className="font-sans text-sm md:text-base text-zinc-500 font-medium max-w-xl mx-auto leading-relaxed">
            Sadece bütçenizi seçin ve{" "}
            <span style={{ color: GOLD }}>10 yıl sonraki servetinizi</span> keşfedin.
          </p>
        </motion.div>

        {/* ── Input Card ── */}
        <motion.div
          className="relative border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-6 md:p-10 mb-5 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Gold top edge accent */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(to right, ${GOLD}, transparent 70%)` }}
          />

          {/* Currency toggle */}
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="flex bg-zinc-950 border border-zinc-800 p-1 gap-1">
              {(["TL", "USD", "EUR"] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => switchCurrency(c)}
                  className={`relative px-5 py-2 font-sans text-xs font-bold tracking-[0.3em] uppercase transition-colors duration-300 min-w-[56px] ${
                    currency === c ? "text-black" : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {currency === c && (
                    <motion.span
                      layoutId="currency-pill"
                      className="absolute inset-0"
                      style={{ background: GOLD }}
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className="relative z-10">{c}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Label */}
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-semibold text-center mb-4">
            Yatırım Bütçeniz (Liste Fiyatı Üzerinden)
          </p>

          {/* Big number */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${budget}-${currency}`}
              className="text-center mb-8 md:mb-10 select-none"
              initial={{ opacity: 0, scale: 0.94, y: 8 }}
              animate={{ opacity: 1, scale: 1,    y: 0 }}
              exit={{    opacity: 0, scale: 1.06,  y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <span
                className="font-serif font-bold leading-none tracking-tight"
                style={{ color: GOLD, fontSize: "clamp(2.4rem, 8vw, 5rem)" }}
              >
                {fmt(budget, currency)}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Slider */}
          <div className="px-1">
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="sim-slider w-full h-[3px] rounded-full cursor-pointer outline-none"
              style={{
                background: `linear-gradient(to right, ${GOLD} ${sliderPct}%, #27272a ${sliderPct}%)`,
              }}
            />
            <div className="flex justify-between mt-3">
              <span className="font-sans text-[10px] text-zinc-700 font-medium">{fmt(min, currency)}</span>
              <span className="font-sans text-[10px] text-zinc-700 font-medium">{fmt(max, currency)}</span>
            </div>
          </div>

          {/* Rate footnote */}
          <div className="mt-7 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" style={{ color: GOLD }} />
              <span className="font-sans text-xs text-zinc-500 font-medium">
                Yıllık değer artışı:{" "}
                <span className="font-bold" style={{ color: GOLD }}>
                  %{Math.round(CFG[currency].growth * 100)}
                </span>
                {currency === "TL" && (
                  <span className="text-zinc-700 ml-1">(enflasyon + reel büyüme)</span>
                )}
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-zinc-800" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-sans text-xs text-zinc-500 font-medium">
                Yıllık kira getirisi:{" "}
                <span className="font-bold text-amber-400">%{Math.round(RENT_RATE * 100)}</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Chart Card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`chart-${currency}`}
            className="border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-6 md:p-10 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-semibold mb-6">
              10 Yıllık Büyüme Projeksiyonu
            </p>

            {mounted ? (
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={rows} margin={{ top: 8, right: 8, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gPV" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor={GOLD}  stopOpacity={0.55} />
                      <stop offset="95%" stopColor={GOLD}  stopOpacity={0.04} />
                    </linearGradient>
                    <linearGradient id="gRent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor={AMBER} stopOpacity={0.45} />
                      <stop offset="95%" stopColor={AMBER} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis
                    dataKey="label"
                    tick={{ fill: "#71717a", fontSize: 11, fontWeight: 500, fontFamily: "var(--font-syne, sans-serif)" }}
                    axisLine={{ stroke: "#3f3f46" }}
                    tickLine={false}
                  />
                  <YAxis
                    tickFormatter={(v) => fmtAxis(v, currency)}
                    tick={{ fill: "#71717a", fontSize: 10, fontFamily: "var(--font-syne, sans-serif)" }}
                    axisLine={false}
                    tickLine={false}
                    width={72}
                  />
                  <Tooltip content={<ChartTip currency={currency} />} cursor={{ stroke: GOLD, strokeWidth: 1, strokeOpacity: 0.3 }} />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="s"
                    stroke={GOLD}
                    strokeWidth={2}
                    fill="url(#gPV)"
                    animationDuration={900}
                    animationEasing="ease-out"
                  />
                  <Area
                    type="monotone"
                    dataKey="rent"
                    stackId="s"
                    stroke={AMBER}
                    strokeWidth={1.5}
                    strokeDasharray="5 3"
                    fill="url(#gRent)"
                    animationDuration={900}
                    animationEasing="ease-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center">
                <div className="w-7 h-7 rounded-full border border-[#C9A96E]/20 border-t-[#C9A96E] animate-spin" />
              </div>
            )}

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-5">
              <div className="flex items-center gap-2">
                <span className="w-7 inline-block" style={{ height: 2, background: GOLD }} />
                <span className="font-sans text-[10px] text-zinc-500 font-medium">Gayrimenkul Değeri</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-7 inline-block border-t-2 border-dashed border-amber-400" />
                <span className="font-sans text-[10px] text-zinc-500 font-medium">Kira Birikimi</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Final Wealth Callout ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`wealth-${finalTotal}-${currency}`}
            className="mb-5 p-6 md:p-8 border"
            style={{
              borderColor: `${GOLD}35`,
              background: "linear-gradient(135deg, rgba(201,169,110,0.07) 0%, transparent 60%)",
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

              {/* Total */}
              <div className="text-center md:text-left">
                <p
                  className="font-sans text-[10px] tracking-[0.45em] uppercase font-semibold mb-2"
                  style={{ color: GOLD }}
                >
                  10 Yıl Sonundaki Toplam Varlığınız
                </p>
                <p
                  className="font-serif font-bold text-white leading-none"
                  style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)" }}
                >
                  {fmt(finalTotal, currency)}
                </p>
              </div>

              {/* Stat pills */}
              <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
                <div className="text-center">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-semibold mb-1.5">Getiri Katı</p>
                  <p className="font-serif font-bold text-2xl" style={{ color: GOLD }}>×{multiplier}</p>
                </div>
                <div className="w-px h-10 bg-zinc-800" />
                <div className="text-center">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-semibold mb-1.5">Toplam ROI</p>
                  <p className="font-serif font-bold text-2xl text-amber-400">+%{roi}</p>
                </div>
                <div className="w-px h-10 bg-zinc-800" />
                <div className="text-center">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-semibold mb-1.5">10Y Kira</p>
                  <p className="font-serif font-bold text-xl text-zinc-300">{fmt(finalRent, currency)}</p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Lifestyle Section ── */}
        <div className="mt-16 md:mt-24">
          <motion.div
            className="text-center mb-10 md:mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="block font-sans text-[10px] tracking-[0.5em] uppercase font-semibold mb-4"
              style={{ color: GOLD }}
            >
              Yaşam Değişimi
            </span>
            <h3 className="font-serif font-bold text-white text-2xl md:text-3xl leading-tight tracking-wide">
              Bu Kazanç Sizin İçin Ne İfade Ediyor?
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <LifeCard
              icon={Plane}
              tag="Sınırsız Özgürlük"
              body="Ailenizle ertelediğiniz o dünya turuna çıkın. Pasif geliriniz sizi beklerken seyahat edin."
              delay={0}
            />
            <LifeCard
              icon={Car}
              tag="Premium Yaşam"
              body="Garajınızdaki aracı sadece pasif kira gelirinizle yenileyin. Cebinizden para çıkmadan."
              delay={0.1}
            />
            <LifeCard
              icon={Building2}
              tag="Katlanan Portföy"
              body="Yeni VIP projelerimizden cebinizden para çıkmadan 2. evinizi alın. Portföyünüz katlanır."
              delay={0.2}
            />
          </div>
        </div>

        {/* ── FOMO + CTA ── */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Warning banner */}
          <div className="border border-amber-500/40 bg-amber-500/5 px-5 py-4 mb-10 flex items-start gap-3.5 max-w-2xl mx-auto text-left">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="font-sans text-sm text-amber-200/75 leading-relaxed font-medium">
              <span className="font-bold text-amber-400">Bilgi:</span> Yukarıdaki muazzam tablo,
              standart liste fiyatlarıyla hesaplanmıştır.{" "}
              <span className="font-semibold text-amber-300">
                Özel lansman indirimimiz ile başlangıç değeriniz daha yüksek, getiriniz çok daha büyük.
              </span>
            </p>
          </div>

          {/* CTA button */}
          <div className="relative inline-block">
            {/* Outer pulse rings */}
            <motion.span
              className="absolute inset-0 pointer-events-none"
              style={{ border: `1.5px solid ${GOLD}`, borderRadius: 2 }}
              animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute inset-0 pointer-events-none"
              style={{ border: `1.5px solid ${GOLD}`, borderRadius: 2 }}
              animate={{ scale: [1, 1.34, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
            />

            <motion.a
              href="https://wa.me/905555555555?text=Merhaba,%20sim%C3%BCl%C3%A4t%C3%B6r%20%C3%BCzerinden%20yat%C4%B1r%C4%B1m%20projeksiyonumu%20inceledim.%20Projenizdeki%20%C3%B6zel%20lan%C5%9Fman%20fiyatlar%C4%B1n%C4%B1%20ve%20indirim%20oran%C4%B1n%C4%B1%20%C3%B6%C4%9Frenmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3.5 font-sans font-bold text-sm tracking-[0.2em] uppercase text-black px-8 py-5 md:px-12 md:py-6"
              style={{ background: GOLD }}
              whileHover={{ backgroundColor: GOLD_DIM }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              Özel İndirimli Lansman Fiyatını Görmek İçin Tıklayın
              <ArrowRight className="w-4 h-4 shrink-0" />
            </motion.a>
          </div>

          <p className="mt-5 font-sans text-xs text-zinc-600 font-medium">
            WhatsApp üzerinden anlık yanıt · Ücretsiz danışmanlık
          </p>
        </motion.div>

      </div>
    </section>
  );
}
