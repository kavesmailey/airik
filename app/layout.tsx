import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/content/site";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "آیریک | راهکارهای چاپ",
    template: "%s | آیریک",
  },

  description:
    "آیریک؛ ارائه‌دهنده راهکارهای چاپ برای برندها و کسب‌وکارها، از چاپ روی لباس و پارچه تا بسته‌بندی و اقلام تبلیغاتی.",

  keywords: [
    "آیریک",
    "Ayric",
    "چاپ",
    "چاپخانه",
    "چاپ روی لباس",
    "چاپ روی پارچه",
    "بسته بندی",
    "چاپ تبلیغاتی",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "آیریک | راهکارهای چاپ",
    description:
      "آیریک؛ ارائه‌دهنده راهکارهای چاپ برای برندها و کسب‌وکارها، از چاپ روی لباس و پارچه تا بسته‌بندی و اقلام تبلیغاتی.",
    url: siteUrl,
    siteName: "آیریک",
    locale: "fa_IR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "آیریک | راهکارهای چاپ",
    description:
      "آیریک؛ ارائه‌دهنده راهکارهای چاپ برای برندها و کسب‌وکارها، از چاپ روی لباس و پارچه تا بسته‌بندی و اقلام تبلیغاتی.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-[#f7f5f1] text-black antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
