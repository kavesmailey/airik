import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/content/site";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");

const logoUrl = siteConfig.logo.startsWith("http")
  ? siteConfig.logo
  : `${siteUrl}${siteConfig.logo}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "آیریک",
    "Ayric",
    "چاپ آیریک",
    "چاپ سیلک",
    "چاپ DTF",
    "چاپ روی لباس",
    "چاپ روی پارچه",
    "چاپ روی بگ",
    "چاپ در کرج",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: logoUrl,
        alt: "لوگوی آیریک",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [logoUrl],
  },

  icons: {
    icon: siteConfig.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-white text-[#022F12] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
