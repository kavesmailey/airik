import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://airik-xi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AIRIK | چاپ حرفه‌ای",
    template: "%s | AIRIK",
  },

  description:
    "AIRIK یک مجموعه چاپ حرفه‌ای است؛ از انتخاب روش و متریال تا تولید نهایی، برای پروژه‌های چاپی برندها و کسب‌وکارها.",

  applicationName: "AIRIK",

  keywords: [
    "چاپ",
    "چاپخانه",
    "چاپ حرفه‌ای",
    "چاپ سیلک",
    "چاپ DTF",
    "چاپ روی لباس",
    "چاپ روی تیشرت",
    "چاپ روی پارچه",
    "چاپ بسته‌بندی",
    "چاپ بگ",
  ],

  authors: [{ name: "AIRIK" }],
  creator: "AIRIK",
  publisher: "AIRIK",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "AIRIK",
    title: "AIRIK | چاپ حرفه‌ای",
    description:
      "چاپ فقط خروجی فایل نیست؛ بخشی از کیفیت محصول شماست.",
  },

  twitter: {
    card: "summary_large_image",
    title: "AIRIK | چاپ حرفه‌ای",
    description:
      "راهکارهای چاپ برای برندها و کسب‌وکارها؛ از انتخاب روش و متریال تا تولید نهایی.",
  },

  icons: {
    icon: "/icon.svg",
  },

  other: {
    "theme-color": "#F5F3EF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
