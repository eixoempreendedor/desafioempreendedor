import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://desafioempreendedor.com.br"),
  title: {
    default: "Desafio Empreendedor — Alexânia",
    template: "%s | Desafio Empreendedor",
  },
  description:
    "7 meses de trabalho real no seu negócio. Programa presencial para donos de PME em Alexânia e região.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Desafio Empreendedor",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
