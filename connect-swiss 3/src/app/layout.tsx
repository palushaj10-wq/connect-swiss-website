import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { company } from "@/lib/data";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700", "800"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: "connect.swiss — Swiss Telecom Solutions",
    template: "%s | connect.swiss",
  },
  description:
    "connect.swiss – Ihr Partner für FTTH-Begehungen, Glasfaserplanung und technische Projektunterstützung. Schweizweit tätig, FTTH-Spezialisten.",
  keywords: ["FTTH", "Glasfaser", "LWL Begehung", "Fiberplanung", "Telekom Schweiz", "connect.swiss", "FTTB"],
  authors: [{ name: "connect.swiss" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: company.website,
    siteName: "connect.swiss",
    title: "connect.swiss — Swiss Telecom Solutions",
    description: "Ihr Partner für FTTH-Begehungen, Glasfaserplanung und technische Projektunterstützung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "connect.swiss — Swiss Telecom Solutions",
    description: "Ihr Partner für FTTH-Begehungen, Glasfaserplanung und technische Projektunterstützung.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${sora.variable} ${manrope.variable} font-body antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
