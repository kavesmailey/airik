import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — چاپ تخصصی سیلک و DTF`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "چاپ سیلک",
    "چاپ DTF",
    "چاپ بگ",
    "چاپ لباس",
    "چاپ جعبه پیتزا",
    "چاپ لیوان کاغذی",
    "چاپ ظروف",
    "آیریک",
  ],
  openGraph: {
    title: `${siteConfig.name} — چاپ تخصصی سیلک و DTF`,
    description: siteConfig.description,
    locale: "fa_IR",
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — چاپ تخصصی`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a18",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen overflow-x-hidden">
        <a
          href="#main-content"
          className="fixed right-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-3 text-sm font-medium transition-transform focus:translate-y-0"
          style={{ color: "var(--color-text-dark)" }}
        >
          پرش به محتوا
        </a>

        <JsonLd type="organization" data={siteConfig} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
