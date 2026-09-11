import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");

const homeDescription =
  "آیریک ارائه‌دهنده راهکارهای چاپ برای برندها و کسب‌وکارها؛ تخصص ما چاپ سیلک و چاپ DTF است.";

export const metadata: Metadata = {
  title: "آیریک | راهکارهای چاپ برای برندها و کسب‌وکارها",
  description: homeDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "آیریک | راهکارهای چاپ برای برندها و کسب‌وکارها",
    description: homeDescription,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "آیریک | راهکارهای چاپ برای برندها و کسب‌وکارها",
    description: homeDescription,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: siteConfig.name,
  url: siteUrl,
  logo: `${siteUrl}${siteConfig.logo}`,
  description: siteConfig.description,
  areaServed: {
    "@type": "Country",
    name: "ایران",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  inLanguage: "fa-IR",
  publisher: {
    "@id": `${siteUrl}#organization`,
  },
};

const services = [
  {
    number: "01",
    title: "چاپ سیلک",
    text: "چاپ با کیفیت و ماندگار برای لباس، پارچه، بگ و بسته‌بندی.",
    href: "/خدمات/چاپ-سیلک",
  },
  {
    number: "02",
    title: "چاپ DTF",
    text: "چاپ طرح‌های رنگی، تصویری و متنوع روی لباس و بگ.",
    href: "/خدمات/چاپ-dtf",
  },
];

const otherServices = [
  {
    title: "چاپ روی لباس",
    href: "/خدمات/چاپ-روی-لباس",
  },
  {
    title: "چاپ روی بگ",
    href: "/خدمات/چاپ-بگ",
  },
  {
    title: "چاپ روی کارتن",
    href: "/خدمات/چاپ-کارتن",
  },
  {
    title: "چاپ روی جعبه پیتزا",
    href: "/خدمات/چاپ-جعبه-پیتزا",
  },
  {
    title: "چاپ روی لیوان کاغذی",
    href: "/خدمات/چاپ-لیوان-کاغذی",
  },
  {
    title: "چاپ روی ظروف گرد",
    href: "/خدمات/چاپ-ظروف-گرد",
  },
  {
    title: "چاپ روی تیشرت",
    href: "/خدمات/چاپ-روی-تیشرت",
  },
  {
    title: "چاپ روی پارچه",
    href: "/خدمات/چاپ-روی-پارچه",
  },
  {
    title: "ساخت شابلون چاپ سیلک",
    href: "/خدمات/ساخت-شابلون-چاپ-سیلک",
  },
  {
    title: "توری‌کشی و عکاسی",
    href: "/خدمات/توری-کشی-و-عکاسی",
  },
  {
    title: "طراحی اختصاصی چاپ سیلک",
    href: "/خدمات/طراحی-اختصاصی-چاپ-سیلک",
  },
  {
    title: "چاپ کیسه پارچه‌ای",
    href: "/خدمات/چاپ-کیسه-پارچه-ای",
  },
  {
    title: "چاپ نایلون",
    href: "/خدمات/چاپ-نایلون",
  },
  {
    title: "تولید و چاپ توت‌بگ",
    href: "/خدمات/تولید-و-چاپ-توت-بگ",
  },
  {
    title: "چاپ لیوان",
    href: "/خدمات/چاپ-لیوان",
  },
  {
    title: "چاپ روی فلز",
    href: "/خدمات/چاپ-روی-فلز",
  },
  {
    title: "چاپ روی چوب",
    href: "/خدمات/چاپ-روی-چوب",
  },
  {
    title: "چاپ روی استیل",
    href: "/خدمات/چاپ-روی-استیل",
  },
  {
    title: "چاپ روی پلکسی",
    href: "/خدمات/چاپ-روی-پلکسی",
  },
];

const principles = [
  {
    number: "01",
    title: "کیفیت",
    text: "خروجی نهایی باید همان چیزی باشد که در ذهن شماست.",
  },
  {
    number: "02",
    title: "دقت",
    text: "جزئیات فنی و اجرایی از همان ابتدا بررسی می‌شوند.",
  },
  {
    number: "03",
    title: "راهکار",
    text: "به‌جای یک روش ثابت، بهترین مسیر برای هر پروژه را پیدا می‌کنیم.",
  },
];

export default function HomePage() {
  return (
    <main dir="rtl" className="overflow-x-hidden">
      <JsonLd type="organization" data={organizationSchema} />
      <JsonLd type="organization" data={websiteSchema} />

      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 md:px-10 md:py-40 lg:px-12 lg:py-48">
          <div className="grid gap-12 sm:gap-16 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-16">
            <div className="min-w-0">
              <p className="mb-6 text-sm font-medium text-black/40 sm:mb-8">
                آیریک · راهکارهای چاپ
              </p>

              <h1 className="max-w-5xl text-[3.25rem] font-medium leading-[1.12] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
                چیزی که
                <br />
                چاپ می‌کنیم،
                <br />
                دیده می‌شود.
              </h1>
            </div>

            <div className="max-w-md">
              <p className="text-base leading-8 text-black/60 sm:text-lg sm:leading-9 md:text-xl">
                آیریک به برندها و کسب‌وکارها کمک می‌کند ایده‌هایشان را
                به محصولات و تجربه‌های فیزیکی تبدیل کنند.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
                <Link
                  href="/استعلام-قیمت"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm text-white transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-4"
                >
                  استعلام قیمت
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/خدمات"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-black/15 px-6 py-3.5 text-sm transition-colors hover:border-black sm:px-7 sm:py-4"
                >
                  دیدن خدمات
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 sm:gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-20 lg:gap-28">
            <div>
              <p className="text-sm font-medium text-black/40">
                چرا آیریک؟
              </p>
            </div>

            <div className="min-w-0">
              <h2 className="max-w-5xl text-2xl font-medium leading-[1.5] tracking-tight sm:text-3xl md:text-5xl md:leading-[1.45] lg:text-6xl">
                ما فقط فایل شما را چاپ نمی‌کنیم.
                <br />
                به این فکر می‌کنیم که
                <span className="text-black/35"> نتیجه نهایی </span>
                چطور باید دیده و تجربه شود.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-[#e7e2d4] sm:min-h-[480px] sm:rounded-[2rem] md:min-h-[680px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-[10px] tracking-[0.3em] text-black/30 sm:text-xs">
                  AYRIC
                </span>

                <span className="mt-4 block text-[7rem] font-medium leading-none tracking-[-0.08em] text-black/10 sm:mt-6 sm:text-[9rem] md:text-[14rem]">
                  A
                </span>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 max-w-[13rem] sm:bottom-7 sm:right-7 sm:max-w-xs md:bottom-10 md:right-10">
              <p className="text-xs leading-6 text-black/45 sm:text-sm sm:leading-7">
                این بخش می‌تواند بعداً با تصویر واقعی یکی از پروژه‌های
                آیریک جایگزین شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:mb-24 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm font-medium text-black/40 sm:mb-7">
                خدمات
              </p>

              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-5xl">
                راهکارهای چاپ
                <br />
                برای نیازهای واقعی.
              </h2>
            </div>

            <Link
              href="/خدمات"
              className="inline-flex w-fit items-center gap-3 text-sm text-black/50 transition-colors hover:text-black"
            >
              مشاهده همه خدمات
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Featured Services */}
          <div className="border-t border-black/10">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group block border-b border-black/10 py-7 transition-opacity hover:opacity-60 sm:py-9 md:py-12"
              >
                <div className="grid gap-5 sm:gap-6 md:grid-cols-[70px_0.9fr_1.1fr_30px] md:items-center lg:grid-cols-[90px_0.9fr_1.1fr_30px]">
                  <span className="text-xs text-black/30">
                    {service.number}
                  </span>

                  <h3 className="text-xl font-medium sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-7 text-black/45 sm:text-base sm:leading-8">
                    {service.text}
                  </p>

                  <span
                    aria-hidden="true"
                    className="hidden text-xl transition-transform group-hover:-translate-x-1 md:block"
                  >
                    ↗
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-lg text-black/40 transition-transform group-hover:-translate-x-1 md:hidden"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Other Services */}
          <div className="mt-20 border-t border-black/10 pt-8 sm:mt-24 sm:pt-10 md:mt-32 md:pt-12">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-medium text-black/40 sm:mb-4">
                  سایر خدمات آیریک
                </p>

                <h3 className="text-xl font-medium tracking-tight sm:text-2xl md:text-3xl">
                  خدمات چاپ و تولید
                </h3>
              </div>

              <Link
                href="/خدمات"
                className="inline-flex w-fit items-center gap-3 text-sm text-black/50 transition-colors hover:text-black"
              >
                مشاهده همه خدمات
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <nav
              aria-label="سایر خدمات آیریک"
              className="grid grid-cols-1 border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {otherServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group border-b border-black/10 py-4 text-sm transition-opacity hover:opacity-50 sm:px-4 sm:py-5 md:px-5 lg:px-6"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="min-w-0">{service.title}</span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-black/30 transition-transform group-hover:-translate-x-1"
                    >
                      ↗
                    </span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-12 sm:gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:gap-28">
            <div>
              <p className="mb-5 text-sm font-medium text-black/40 sm:mb-7">
                طرز فکر آیریک
              </p>

              <h2 className="text-2xl font-medium leading-[1.45] tracking-tight sm:text-3xl md:text-5xl">
                خوب چاپ شدن
                <br />
                کافی نیست.
              </h2>
            </div>

            <div>
              <div className="border-t border-black/10">
                {principles.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-4 border-b border-black/10 py-7 sm:gap-6 sm:py-9 md:grid-cols-[70px_0.7fr_1.3fr] md:items-center"
                  >
                    <span className="text-xs text-black/30">
                      {item.number}
                    </span>

                    <h3 className="text-lg font-medium sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-black/50 sm:text-base sm:leading-8">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:mb-24 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm font-medium text-black/40 sm:mb-7">
                نمونه‌کارها
              </p>

              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-5xl">
                چیزی که ساخته‌ایم،
                <br />
                حرف بیشتری می‌زند.
              </h2>
            </div>

            <Link
              href="/نمونه-کارها"
              className="inline-flex w-fit items-center gap-3 text-sm text-black/50 transition-colors hover:text-black"
            >
              مشاهده نمونه‌کارها
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <Link
              href="/نمونه-کارها"
              className="group overflow-hidden rounded-[1.25rem] bg-[#e7e2d4] sm:rounded-[1.5rem]"
            >
              <div className="flex min-h-[340px] items-end p-6 transition-transform duration-500 group-hover:scale-[1.02] sm:min-h-[420px] sm:p-8 md:min-h-[560px]">
                <div>
                  <span className="text-xs text-black/35">
                    پروژه منتخب
                  </span>

                  <h3 className="mt-2 text-xl font-medium sm:mt-3 sm:text-2xl">
                    پروژه‌های آیریک
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              href="/نمونه-کارها"
              className="group overflow-hidden rounded-[1.25rem] bg-[#d0d5ec] sm:rounded-[1.5rem]"
            >
              <div className="flex min-h-[340px] items-end p-6 transition-transform duration-500 group-hover:scale-[1.02] sm:min-h-[420px] sm:p-8 md:min-h-[560px]">
                <div>
                  <span className="text-xs text-black/35">
                    پروژه منتخب
                  </span>

                  <h3 className="mt-2 text-xl font-medium sm:mt-3 sm:text-2xl">
                    اجرای چاپ و تولید
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm font-medium text-white/40 sm:mb-8">
              پروژه بعدی
            </p>

            <h2 className="text-3xl font-medium leading-[1.25] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
              چیزی برای چاپ دارید؟
              <br />
              شروع کنیم.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:mt-9 sm:text-lg sm:leading-9">
              مشخصات پروژه‌تان را برای ما بفرستید. اگر هنوز نمی‌دانید
              چه روش چاپی مناسب شماست، در انتخاب آن کمکتان می‌کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm text-black transition-transform hover:-translate-y-0.5 sm:mt-10 sm:px-8 sm:py-4"
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
