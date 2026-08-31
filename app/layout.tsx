import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "آیریک — چاپ تخصصی سیلک و DTF",
    template: "%s | آیریک",
  },
  description:
    "چاپ سیلک و DTF روی بگ، لباس، کارتن، جعبه پیتزا، لیوان کاغذی و ظروف گرد؛ با تمرکز بر کیفیت، اجرای دقیق و مشاوره قبل از سفارش.",
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
    title: "آیریک — چاپ تخصصی سیلک و DTF",
    description: "چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد.",
    locale: "fa_IR",
    type: "website",
    siteName: "آیریک",
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
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="min-h-screen overflow-x-hidden bg-bg font-sans text-text antialiased">
        <a
          href="#main-content"
          className="fixed right-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-3 text-sm font-medium text-text-dark transition-transform focus:translate-y-0"
        >
          پرش به محتوا
        </a>

        <Header />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
