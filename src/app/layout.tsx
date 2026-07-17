import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { company, siteUrl } from "@/lib/constants";
import { SitePreferences } from "@/components/providers/SitePreferences";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nuranova Solutions | Business Websites & Online Solutions Sri Lanka",
  description: "Professional websites, e-commerce systems, online ordering, hotel booking websites and custom web solutions for Sri Lankan businesses.",
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    email: company.email,
    telephone: company.phoneInternational,
    url: siteUrl,
  };
  return (
    <html lang="si" className={`${inter.variable} ${manrope.variable}`}>
      <body className="safe-bottom">
        <SitePreferences>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {process.env.VERCEL ? <Analytics /> : null}
        {process.env.VERCEL ? <SpeedInsights /> : null}
        </SitePreferences>
      </body>
    </html>
  );
}
