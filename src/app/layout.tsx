import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";

const heading = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "FAMBENE SÉCURITÉ | Protection premium",
    template: "%s | FAMBENE SÉCURITÉ",
  },
  description:
    "Gardiennage humain, télésurveillance 24/7 et solutions de sécurité intégrées pour sites sensibles et événements.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable}`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen bg-night pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
          <AnalyticsScripts />
        </Providers>
      </body>
    </html>
  );
}
