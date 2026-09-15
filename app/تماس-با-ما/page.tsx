"use client";

import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import JsonLd from "@/components/seo/JsonLd";

import Reveal from "@/components/ui/Reveal";
import IconArrow from "@/components/ui/IconArrow";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/تماس-با-ما`;

const faqItems = [
  {
    q: "برای دریافت قیمت چه اطلاعاتی لازم است؟",
    a: "نوع محصول، تعداد تقریبی، ابعاد، متریال در صورت مشخص بودن و زمان مورد نیاز برای شروع کافی است.",
  },
  {
    q: "اگر روش چاپ مناسب را ندانیم چه؟",
    a: "اشکالی ندارد. کافی است محصول و کاربرد آن را توضیح دهید؛ روش مناسب چاپ را می‌توان بر اساس مشخصات پروژه پیشنهاد کرد.",
  },
  {
    q: "آیا امکان سفارش برای کسب‌وکارها وجود دارد؟",
    a: "بله. سفارش‌های برندها، کسب‌وکارها و مجموعه‌های سازمانی قابل بررسی هستند.",
  },
  {
    q: "آیا قبل از سفارش می‌توان درباره پروژه مشاوره گرفت؟",
    a: "بله. می‌توانید مشخصات اولیه پروژه را ارسال کنید تا درباره روش چاپ، متریال و جزئیات اجرا راهنمایی دریافت کنید.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "خانه",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "تماس با ما",
      item: canonicalUrl,
    },
  ],
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "تماس با آیریک",
  description:
    "راه‌های ارتباط با آیریک برای سفارش چاپ، دریافت مشاوره و استعلام قیمت.",
  url: canonicalUrl,
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    email: "hello@ayric.ir",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@ayric.ir",
      availableLanguage: ["fa"],
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function ContactPage() {
  return (
    <main dir="rtl">
      <JsonLd type="breadcrumb" data={breadcrumbSchema} />
      <JsonLd type="organization" data={contactSchema} />
      <JsonLd type="faq" data={faqSchema} />

      {/* Hero */}
      <section className="container mx-auto px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="max-w-5xl">
          <Reveal direction="up">
            <p className="mb-6 text-sm font-medium text-[#8BC53D]">
              تماس با آیریک
            </p>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1
              className="text-4xl font-semibold tracking-[-0.025em] text-[#021408] sm:text-5xl lg:text-6xl"
              style={{ lineHeight: 1.35 }}
            >
              درباره پروژه‌تان
              <br />
              صحبت کنیم.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={220}>
            <p
              className="mt-7 max-w-3xl text-base text-[#022F12]/65 sm:text-lg"
              style={{ lineHeight: 2 }}
            >
              برای سفارش چاپ، دریافت مشاوره یا استعلام قیمت، مشخصات
              پروژه‌تان را برای ما ارسال کنید. اطلاعات شما بررسی می‌شود
              و برای انتخاب روش مناسب چاپ و ادامه فرایند با شما در
              ارتباط خواهیم بود.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="bg-[#E4F0CC]">
        <div className="container mx-auto px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <Reveal direction="right">
            <div className="grid gap-6 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
              <p className="text-sm font-medium text-[#022F12]/45">
                ارتباط با آیریک
              </p>

              <p
                className="max-w-4xl text-lg text-[#022F12]/70 sm:text-xl"
                style={{ lineHeight: 2 }}
              >
                آیریک برای سفارش‌های چاپی برندها و کسب‌وکارها،
                مشاوره، بررسی مشخصات پروژه و استعلام قیمت ارائه
                می‌دهد. برای شروع کافی است نوع محصول، تعداد تقریبی،
                ابعاد و زمان مورد نیاز خود را با ما در میان بگذارید.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="bg-white">
        <div className="container mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-24 lg:gap-28">
            {/* Contact Info */}
            <Reveal direction="right">
              <div>
                <p className="mb-7 text-sm font-medium text-[#8BC53D]">
                  اطلاعات تماس
                </p>

                <div className="border-t border-[#022F12]/10">
                  <div className="border-b border-[#022F12]/10 py-7">
                    <p className="mb-3 text-xs text-[#022F12]/40">
                      تلفن
                    </p>

                    <a
                      href="tel:+9821XXXXXXXX"
                      className="text-lg font-medium text-[#022F12] transition-opacity duration-300 hover:opacity-60"
                      dir="ltr"
                    >
                      +98 21 XXX XXXX
                    </a>
                  </div>

                  <div className="border-b border-[#022F12]/10 py-7">
                    <p className="mb-3 text-xs text-[#022F12]/40">
                      ایمیل
                    </p>

                    <a
                      href="mailto:hello@ayric.ir"
                      className="text-lg font-medium text-[#022F12] transition-opacity duration-300 hover:opacity-60"
                      dir="ltr"
                    >
                      hello@ayric.ir
                    </a>
                  </div>

                  <div className="border-b border-[#022F12]/10 py-7">
                    <p className="mb-3 text-xs text-[#022F12]/40">
                      ساعات پاسخگویی
                    </p>

                    <p className="text-lg font-medium leading-8 text-[#022F12]">
                      شنبه تا پنجشنبه
                      <br />
                      ۹:۰۰ تا ۱۸:۰۰
                    </p>
                  </div>
                </div>

                <p
                  className="mt-10 text-sm text-[#022F12]/50"
                  style={{ lineHeight: 2 }}
                >
                  اگر هنوز درباره روش چاپ، متریال یا تعداد مناسب
                  مطمئن نیستید، می‌توانید اطلاعات اولیه پروژه را
                  ارسال کنید. قبل از ثبت سفارش، جزئیات بررسی می‌شود.
                </p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="left" delay={120}>
              <div>
                <p className="mb-7 text-sm font-medium text-[#8BC53D]">
                  درخواست شما
                </p>

                <form
                  method="post"
                  className="border-t border-[#022F12]/10"
                >
                  <div className="grid gap-8 py-8 md:grid-cols-2">
                    <label className="block">
                      <span className="mb-3 block text-sm text-[#022F12]/55">
                        نام و نام خانوادگی
                      </span>

                      <input
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="نام شما"
                        className="w-full border-b border-[#022F12]/15 bg-transparent px-0 py-4 text-base text-[#022F12] outline-none transition-colors placeholder:text-[#022F12]/25 focus:border-[#8BC53D]"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-3 block text-sm text-[#022F12]/55">
                        شماره تماس
                      </span>

                      <input
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        placeholder="۰۹۱۲..."
                        className="w-full border-b border-[#022F12]/15 bg-transparent px-0 py-4 text-base text-[#022F12] outline-none transition-colors placeholder:text-[#022F12]/25 focus:border-[#8BC53D]"
                      />
                    </label>
                  </div>

                  <label className="block border-t border-[#022F12]/10 py-8">
                    <span className="mb-3 block text-sm text-[#022F12]/55">
                      ایمیل
                    </span>

                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      dir="ltr"
                      className="w-full border-b border-[#022F12]/15 bg-transparent px-0 py-4 text-base text-[#022F12] outline-none transition-colors placeholder:text-[#022F12]/25 focus:border-[#8BC53D]"
                    />
                  </label>

                  <label className="block border-t border-[#022F12]/10 py-8">
                    <span className="mb-3 block text-sm text-[#022F12]/55">
                      نوع پروژه
                    </span>

                    <select
                      name="projectType"
                      defaultValue=""
                      className="w-full border-b border-[#022F12]/15 bg-transparent px-0 py-4 text-base text-[#022F12] outline-none transition-colors focus:border-[#8BC53D]"
                    >
                      <option value="" disabled>
                        انتخاب کنید
                      </option>

                      <option value="silk">چاپ سیلک</option>
                      <option value="dtf">چاپ DTF</option>
                      <option value="clothing">چاپ روی لباس</option>
                      <option value="bag">چاپ روی بگ</option>
                      <option value="packaging">چاپ روی کارتن</option>
                      <option value="pizza-box">چاپ روی جعبه پیتزا</option>
                      <option value="paper-cup">چاپ روی لیوان کاغذی</option>
                      <option value="round-containers">
                        چاپ روی ظروف گرد
                      </option>
                      <option value="tshirt">چاپ روی تیشرت</option>
                      <option value="fabric">چاپ روی پارچه</option>
                      <option value="other">سایر</option>
                    </select>
                  </label>

                  <label className="block border-t border-[#022F12]/10 py-8">
                    <span className="mb-3 block text-sm text-[#022F12]/55">
                      توضیحات پروژه
                    </span>

                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="نوع محصول، تعداد، ابعاد، زمان مورد نیاز و هر اطلاعاتی که درباره پروژه دارید..."
                      className="w-full resize-none border-b border-[#022F12]/15 bg-transparent px-0 py-4 text-base leading-8 text-[#022F12] outline-none transition-colors placeholder:text-[#022F12]/25 focus:border-[#8BC53D]"
                    />
                  </label>

                  <div className="border-t border-[#022F12]/10 pt-8">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-4 rounded-full bg-[#8BC53D] px-7 py-4 text-sm font-medium text-[#021408] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#022F12]/10"
                    >
                      ارسال درخواست

                      <span className="transition-transform duration-500 group-hover:-translate-x-1">
                        <IconArrow direction="left" size={18} />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-[#E4F0CC]">
        <div className="container mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <Reveal direction="up">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-6 text-sm font-medium text-[#8BC53D]">
                  استعلام قیمت
                </p>

                <h2
                  className="max-w-4xl text-3xl font-semibold tracking-[-0.02em] text-[#021408] sm:text-4xl md:text-5xl"
                  style={{ lineHeight: 1.4 }}
                >
                  برای دریافت قیمت،
                  <br />
                  از مشخصات پروژه شروع کنید.
                </h2>

                <p
                  className="mt-6 max-w-2xl text-base text-[#022F12]/55"
                  style={{ lineHeight: 2 }}
                >
                  نوع محصول، تعداد، ابعاد و زمان مورد نیاز را مشخص
                  کنید تا بتوانیم قیمت و روش مناسب اجرای پروژه را
                  دقیق‌تر بررسی کنیم.
                </p>
              </div>

              <Link
                href="/استعلام-قیمت"
                className="group inline-flex w-fit items-center gap-4 rounded-full border border-[#022F12] px-7 py-4 text-sm font-medium text-[#022F12] transition-all duration-500 hover:-translate-y-1 hover:bg-[#022F12] hover:text-white"
              >
                استعلام قیمت

                <span className="transition-transform duration-500 group-hover:-translate-x-1">
                  <IconArrow direction="left" size={18} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
            <Reveal direction="right">
              <div>
                <p className="mb-6 text-sm font-medium text-[#8BC53D]">
                  قبل از تماس
                </p>

                <h2
                  className="text-3xl font-semibold tracking-[-0.02em] text-[#021408] sm:text-4xl md:text-5xl"
                  style={{ lineHeight: 1.45 }}
                >
                  چند سؤال
                  <br />
                  متداول.
                </h2>
              </div>
            </Reveal>

            <div className="border-t border-[#022F12]/10">
              {faqItems.map((item, index) => (
                <Reveal
                  key={item.q}
                  direction="up"
                  delay={index * 80}
                >
                  <details className="group border-b border-[#022F12]/10">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                      <div className="flex gap-5">
                        <span className="pt-1 text-xs text-[#022F12]/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-base font-medium leading-8 text-[#022F12] sm:text-lg">
                          {item.q}
                        </span>
                      </div>

                      <span className="shrink-0 text-xl text-[#022F12]/35 transition-transform duration-500 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p
                      className="pb-8 pr-9 text-sm text-[#022F12]/55 sm:text-base"
                      style={{ lineHeight: 2 }}
                    >
                      {item.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
