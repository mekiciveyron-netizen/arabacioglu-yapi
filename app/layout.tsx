import type { Metadata, Viewport } from "next";
import { Cinzel, Syne } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${cinzel.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-black overflow-x-hidden">{children}</body>
    </html>
  );
}
