import type { Metadata } from "next";
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
  title: "Arabacioglu Yapı | Mimarlık & İnşaat",
  description:
    "Tasarım ve yapım süreçlerini ustalıkla birleştiren mimarlık ve inşaat firması. Yaşam alanlarınızı hayata geçiriyoruz.",
  keywords: "mimarlık, inşaat, proje, yapı, arabacioglu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-stone-50">{children}</body>
    </html>
  );
}
