import type { Metadata, Viewport } from "next";
import { Playfair_Display, Syne } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="tr" className={`${playfair.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-stone-50 overflow-x-hidden">{children}</body>
    </html>
  );
}
