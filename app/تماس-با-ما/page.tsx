import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/تماس-با-ما`;

export const metadata: Metadata = {
  title: "تماس با آیریک | سفارش و استعلام قیمت چاپ",
  description:
    "برای سفارش چاپ، دریافت مشاوره یا استعلام قیمت خدمات چاپ آیریک با ما در ارتباط باشید.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "تماس با آیریک | سفارش و استعلام قیمت چاپ",
    description:
      "برای سفارش چاپ، دریافت مشاوره یا استعلام قیمت پروژه با آیریک در ارتباط باشید.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تماس با آیریک | سفارش و استعلام قیمت چاپ",
    description:
      "برای سفارش چاپ، دریافت مشاوره یا استعلام قیمت پروژه با آیریک در ارتباط باشید.",
  },
};

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
      <section
        className="border-b"
        style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
      >
        <div className="container-iric py-32 sm:py-40 lg:py-48">
          <div className="max-w-5xl">
            <p
              className="mb-8 text-sm font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              تماس با آیریک
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "1.15",
              }}
            >
              درباره پروژه‌تان
              <br />
              صحبت کنیم.
            </h1>

            <p
              className="mt-10 max-w-3xl text-lg sm:text-xl"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.68,
                lineHeight: "2",
              }}
            >
              برای سفارش چاپ، دریافت مشاوره یا استعلام قیمت، مشخصات
              پروژه‌تان را برای ما ارسال کنید. اطلاعات شما بررسی می‌شود و
              برای انتخاب روش مناسب چاپ و ادامه فرایند با شما در ارتباط
              خواهیم بود.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section
        className="border-b"
        style={{
          backgroundColor: "var(--color-soft-green)",
          borderColor: "rgba(2, 47, 18, 0.12)",
        }}
      >
        <div className="container-iric py-16 sm:py-20">
          <div className="max-w-4xl">
            <p
              className="mb-4 text-sm font-medium"
              style={{ color: "var(--color-dark-green)" }}
            >
              ارتباط با آیریک
            </p>

            <p
              className="text-lg sm:text-xl"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.68,
                lineHeight: "2",
              }}
            >
              آیریک برای سفارش‌های چاپی برندها و کسب‌وکارها، مشاوره، بررسی
              مشخصات پروژه و استعلام قیمت ارائه می‌دهد. برای شروع کافی است
              نوع محصول، تعداد تقریبی، ابعاد و زمان مورد نیاز خود را با ما
              در میان بگذارید.
            </p>
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric py-20 sm:py-24 md:py-32 lg:py-40">
          <div className="grid gap-20 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            {/* Contact Info */}
            <div>
              <p
                className="mb-7 text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                اطلاعات تماس
              </p>

              <div
                className="border-t"
                style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
              >
                <div
                  className="border-b py-7"
                  style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
                >
                  <p
                    className="mb-3 text-xs"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.45,
                    }}
                  >
                    تلفن
                  </p>

                  <a
                    href="tel:+9821XXXXXXXX"
                    className="text-lg font-medium transition-opacity hover:opacity-60"
                    style={{ color: "var(--color-dark-green)" }}
                    dir="ltr"
                  >
                    +98 21 XXX XXXX
                  </a>
                </div>

                <div
                  className="border-b py-7"
                  style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
                >
                  <p
                    className="mb-3 text-xs"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.45,
                    }}
                  >
                    ایمیل
                  </p>

                  <a
                    href="mailto:hello@ayric.ir"
                    className="text-lg font-medium transition-opacity hover:opacity-60"
                    style={{ color: "var(--color-dark-green)" }}
                    dir="ltr"
                  >
                    hello@ayric.ir
                  </a>
                </div>

                <div
                  className="border-b py-7"
                  style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
                >
                  <p
                    className="mb-3 text-xs"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.45,
                    }}
                  >
                    ساعات پاسخگویی
                  </p>

                  <p
                    className="text-lg font-medium"
                    style={{ color: "var(--color-dark-green)" }}
                  >
                    شنبه تا پنجشنبه
                    <br />
                    ۹:۰۰ تا ۱۸:۰۰
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <p
                  className="text-sm"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.52,
                    lineHeight: "2",
                  }}
                >
                  اگر هنوز درباره روش چاپ، متریال یا تعداد مناسب مطمئن
                  نیستید، می‌توانید اطلاعات اولیه پروژه را ارسال کنید.
                  قبل از ثبت سفارش، جزئیات بررسی می‌شود.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <p
                className="mb-7 text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                درخواست شما
              </p>

              <form
                method="post"
                className="border-t"
                style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
              >
                <div className="grid gap-8 py-8 md:grid-cols-2">
                  <label className="block">
                    <span
                      className="mb-3 block text-sm"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.55,
                      }}
                    >
                      نام و نام خانوادگی
                    </span>

                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="نام شما"
                      className="w-full border-b bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:opacity-30"
                      style={{
                        borderColor: "rgba(2, 47, 18, 0.15)",
                        color: "var(--color-dark-green)",
                      }}
                    />
                  </label>

                  <label className="block">
                    <span
                      className="mb-3 block text-sm"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.55,
                      }}
                    >
                      شماره تماس
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="۰۹۱۲..."
                      className="w-full border-b bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:opacity-30"
                      style={{
                        borderColor: "rgba(2, 47, 18, 0.15)",
                        color: "var(--color-dark-green)",
                      }}
                    />
                  </label>
                </div>

                <label
                  className="block border-t py-8"
                  style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
                >
                  <span
                    className="mb-3 block text-sm"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.55,
                    }}
                  >
                    ایمیل
                  </span>

                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    dir="ltr"
                    className="w-full border-b bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:opacity-30"
                    style={{
                      borderColor: "rgba(2, 47, 18, 0.15)",
                      color: "var(--color-dark-green)",
                    }}
                  />
                </label>

                <label
                  className="block border-t py-8"
                  style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
                >
                  <span
                    className="mb-3 block text-sm"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.55,
                    }}
                  >
                    نوع پروژه
                  </span>

                  <select
                    name="projectType"
                    defaultValue=""
                    className="w-full border-b bg-transparent px-0 py-4 text-base outline-none transition-colors"
                    style={{
                      borderColor: "rgba(2, 47, 18, 0.15)",
                      color: "var(--color-dark-green)",
                    }}
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

                <label
                  className="block border-t py-8"
                  style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
                >
                  <span
                    className="mb-3 block text-sm"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.55,
                    }}
                  >
                    توضیحات پروژه
                  </span>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="نوع محصول، تعداد، ابعاد، زمان مورد نیاز و هر اطلاعاتی که درباره پروژه دارید..."
                    className="w-full resize-none border-b bg-transparent px-0 py-4 text-base leading-8 outline-none transition-colors placeholder:opacity-30"
                    style={{
                      borderColor: "rgba(2, 47, 18, 0.15)",
                      color: "var(--color-dark-green)",
                    }}
                  />
                </label>

                <div
                  className="border-t pt-8"
                  style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
                >
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-white)",
                    }}
                  >
                    ارسال درخواست
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section
        className="border-y"
        style={{
          backgroundColor: "var(--color-soft-green)",
          borderColor: "rgba(2, 47, 18, 0.12)",
        }}
      >
        <div className="container-iric py-24 sm:py-32 lg:py-40">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p
                className="mb-7 text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                استعلام قیمت
              </p>

              <h2
                className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "1.4",
                }}
              >
                برای دریافت قیمت،
                <br />
                از مشخصات پروژه شروع کنید.
              </h2>

              <p
                className="mt-7 max-w-2xl text-base"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.58,
                  lineHeight: "2",
                }}
              >
                نوع محصول، تعداد، ابعاد و زمان مورد نیاز را مشخص کنید تا
                بتوانیم قیمت و روش مناسب اجرای پروژه را دقیق‌تر بررسی کنیم.
              </p>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit items-center gap-3 rounded-full border px-7 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-dark-green)",
                color: "var(--color-dark-green)",
              }}
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric py-20 sm:py-24 md:py-32 lg:py-40">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p
                className="mb-7 text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                قبل از تماس
              </p>

              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "1.45",
                }}
              >
                چند سؤال
                <br />
                متداول.
              </h2>
            </div>

            <div
              className="border-t"
              style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
            >
              {faqItems.map((item, index) => (
                <details
                  key={item.q}
                  className="group border-b"
                  style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                    <div className="flex gap-5">
                      <span
                        className="pt-1 text-xs"
                        style={{
                          color: "var(--color-dark-green)",
                          opacity: 0.3,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="text-lg font-medium leading-8"
                        style={{ color: "var(--color-dark-green)" }}
                      >
                        {item.q}
                      </span>
                    </div>

                    <span
                      className="text-xl transition-transform group-open:rotate-45"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.4,
                      }}
                    >
                      +
                    </span>
                  </summary>

                  <p
                    className="pb-8 pr-9 text-sm sm:text-base"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.55,
                      lineHeight: "2",
                    }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
