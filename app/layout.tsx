import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Arabacıoğlu Yapı | Tasarım & İnşaat — Aydın",
  description:
    "Aydın Efeler'de yenilikçi konut ve ticari projeler geliştiren Arabacıoğlu Yapı Tasarım İnşaat Ltd.Şti. Geleceği İnşa Ediyoruz.",
  keywords: "arabacıoğlu yapı, inşaat, konut, aydın, efeler, la perla, fors zeybek, villalar",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-stone-50 overflow-x-hidden">{children}</body>
    </html>
  );
}
