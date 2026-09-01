import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
