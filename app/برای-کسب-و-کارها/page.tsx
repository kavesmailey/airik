import type { Metadata } from "next";
import Link from "next/link";

import { businessSolutions } from "@/content/business";
import { siteConfig } from "@/content/site";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/برای-کسب-و-کارها`;

export const metadata: Metadata = {
  title: "چاپ برای کسب‌وکارها | خدمات چاپ تخصصی آیریک",
  description:
    "خدمات و راهکارهای چاپ آیریک برای رستوران‌ها، کافه‌ها، برندهای پوشاک، فروشگاه‌ها، برندها، شرکت‌ها، رویدادها و کسب‌وکارهای آنلاین.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "چاپ برای کسب‌وکارها | خدمات چاپ تخصصی آیریک",
    description:
      "خدمات و راهکارهای چاپ آیریک برای انواع کسب‌وکارها؛ از چاپ روی لباس و بسته‌بندی تا لیوان، بگ، جعبه و سایر محصولات چاپی.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "چاپ برای کسب‌وکارها | خدمات چاپ تخصصی آیریک",
    description:
      "خدمات و راهکارهای چاپ آیریک برای انواع کسب‌وکارها.",
  },
};

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
      name: "چاپ برای کسب‌وکارها",
      item: canonicalUrl,
    },
  ],
};

const businessPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "چاپ برای کسب‌وکارها",
  description:
    "خدمات و راهکارهای چاپ آیریک برای انواع کسب‌وکارها.",
  url: canonicalUrl,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
  },
  about: {
    "@type": "Thing",
    name: "خدمات چاپ برای کسب‌وکارها",
  },
};

const faqItems = [
  {
    q: "آیا برای کسب‌وکارها سفارش‌های مستمر چاپ انجام می‌دهید؟",
    a: "بله. اگر چاپ بخشی از نیاز مستمر کسب‌وکار شما باشد، جزئیات پروژه، محصول، تیراژ و زمان‌بندی بررسی می‌شود.",
  },
  {
    q: "برای انتخاب روش چاپ مناسب چه اطلاعاتی لازم است؟",
    a: "نوع محصول، متریال، تعداد، ابعاد، کاربرد نهایی و زمان مورد نیاز برای شروع اطلاعات مناسبی برای بررسی پروژه هستند.",
  },
  {
    q: "آیا می‌توانیم انتخاب روش چاپ را به آیریک بسپاریم؟",
    a: "بله. می‌توانید مشخصات پروژه و محصول موردنظر را اعلام کنید تا روش مناسب چاپ بر اساس نیاز پروژه بررسی شود.",
  },
  {
    q: "آیا امکان استعلام قیمت وجود دارد؟",
    a: "بله. برای دریافت اطلاعات و استعلام قیمت می‌توانید از طریق صفحه استعلام قیمت درخواست خود را ارسال کنید.",
  },
];

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

const businessLinks: Record<string, string[]> = {
  restaurants: [
    "چاپ جعبه پیتزا",
    "چاپ روی لیوان کاغذی",
    "چاپ روی ظروف گرد",
    "چاپ سیلک",
  ],
  cafes: [
    "چاپ روی لیوان کاغذی",
    "چاپ لیوان",
    "چاپ روی ظروف گرد",
    "چاپ سیلک",
  ],
  fashion: [
    "چاپ روی لباس",
    "چاپ روی تیشرت",
    "چاپ روی پارچه",
    "چاپ DTF",
  ],
  retail: [
    "چاپ روی بگ",
    "چاپ کیسه پارچه‌ای",
    "تولید و چاپ توت‌بگ",
    "چاپ روی کارتن",
  ],
  brands: [
    "چاپ سیلک",
    "چاپ DTF",
    "چاپ روی بگ",
    "چاپ روی کارتن",
  ],
  companies: [
    "چاپ سیلک",
    "چاپ DTF",
    "چاپ روی لباس",
    "چاپ روی بگ",
  ],
  events: [
    "چاپ روی لباس",
    "چاپ روی تیشرت",
    "چاپ روی بگ",
    "چاپ سیلک",
  ],
  "online-businesses": [
    "چاپ روی کارتن",
    "چاپ روی بگ",
    "چاپ کیسه پارچه‌ای",
    "تولید و چاپ توت‌بگ",
  ],
};

const serviceSlugMap: Record<string, string> = {
  "چاپ جعبه پیتزا": "چاپ-جعبه-پیتزا",
  "چاپ روی لیوان کاغذی": "چاپ-لیوان-کاغذی",
  "چاپ روی ظروف گرد": "چاپ-ظروف-گرد",
  "چاپ سیلک": "چاپ-سیلک",
  "چاپ لیوان": "چاپ-لیوان",
  "چاپ روی لباس": "چاپ-روی-لباس",
  "چاپ روی تیشرت": "چاپ-روی-تیشرت",
  "چاپ روی پارچه": "چاپ-روی-پارچه",
  "چاپ DTF": "چاپ-dtf",
  "چاپ روی بگ": "چاپ-بگ",
  "چاپ کیسه پارچه‌ای": "چاپ-کیسه-پارچه-ای",
  "تولید و چاپ توت‌بگ": "تولید-و-چاپ-توت-بگ",
  "چاپ روی کارتن": "چاپ-کارتن",
};

export default function BusinessPage() {
  return (
    <main dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              چاپ برای کسب‌وکارها
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              چاپ برای کسب‌وکارهایی
              <br />
              که کیفیت اهمیت دارد.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              هر کسب‌وکار نیاز چاپی متفاوتی دارد. از بسته‌بندی و لیوان
              گرفته تا لباس، بگ، کارتن و محصولات تبلیغاتی؛ آیریک کمک
              می‌کند راهکار چاپ متناسب با محصول و نیاز شما انتخاب شود.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/خدمات"
                className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
              >
                مشاهده خدمات چاپ
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              برای چه کسب‌وکارهایی؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              نیاز هر کسب‌وکار
              <br />
              متفاوت است.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/55 md:text-lg">
              بخشی از خدمات و راهکارهای چاپ آیریک را می‌توانید بر اساس
              نوع کسب‌وکار خود پیدا کنید. این دسته‌بندی برای ساده‌تر
              شدن مسیر انتخاب خدمات ایجاد شده است.
            </p>
          </div>

          <div className="border-t border-black/10">
            {businessSolutions.map((solution, index) => (
              <article
                key={solution.slug}
                className="border-b border-black/10 py-10 md:py-14"
              >
                <div className="grid gap-8 md:grid-cols-[90px_1fr]">
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                      {solution.title}
                    </h2>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-black/55 md:text-lg">
                      {solution.description}
                    </p>

                    {businessLinks[solution.slug]?.length ? (
                      <div className="mt-7 flex flex-wrap gap-2">
                        {businessLinks[solution.slug].map((service) => {
                          const slug = serviceSlugMap[service];

                          if (!slug) {
                            return null;
                          }

                          return (
                            <Link
                              key={service}
                              href={`/خدمات/${slug}`}
                              className="rounded-full border border-black/10 px-4 py-2.5 text-sm transition-colors hover:border-black/40"
                            >
                              {service}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ayric */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                همکاری با آیریک
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                وقتی چاپ بخشی
                <br />
                از کسب‌وکار شماست.
              </h2>
            </div>

            <div className="space-y-10">
              <div className="border-t border-black/10 pt-7">
                <p className="mb-3 text-xs text-black/40">
                  01 — انتخاب
                </p>

                <h3 className="text-xl font-medium">
                  انتخاب روش مناسب چاپ
                </h3>

                <p className="mt-4 leading-8 text-black/55">
                  نوع محصول، متریال، تیراژ و کاربرد نهایی در انتخاب
                  روش چاپ اهمیت دارند. پروژه بر اساس همین نیازها
                  بررسی می‌شود.
                </p>
              </div>

              <div className="border-t border-black/10 pt-7">
                <p className="mb-3 text-xs text-black/40">
                  02 — اجرا
                </p>

                <h3 className="text-xl font-medium">
                  تمرکز روی خروجی نهایی
                </h3>

                <p className="mt-4 leading-8 text-black/55">
                  هدف فقط چاپ کردن نیست؛ خروجی باید با محصول و کاربرد
                  نهایی آن هماهنگ باشد.
                </p>
              </div>

              <div className="border-t border-black/10 pt-7">
                <p className="mb-3 text-xs text-black/40">
                  03 — همکاری
                </p>

                <h3 className="text-xl font-medium">
                  مناسب برای نیازهای مستمر
                </h3>

                <p className="mt-4 leading-8 text-black/55">
                  اگر محصولات چاپی بخشی از عملیات کسب‌وکار شما هستند،
                  می‌توانید نیاز و مشخصات پروژه را برای بررسی ارسال
                  کنید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-32 md:px-10 md:py-40">
          <div className="mb-16">
            <p className="mb-7 text-sm font-medium text-black/40">
              سوالات متداول
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              قبل از شروع
              <br />
              پروژه بدانید.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {faqItems.map((item, index) => (
              <details
                key={item.q}
                className="group border-b border-black/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 text-lg font-medium marker:hidden md:py-9 md:text-xl">
                  <span>
                    <span className="ml-4 text-xs font-normal text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.q}
                  </span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="pb-8 pr-8 text-base leading-8 text-black/55 md:pr-12 md:text-lg">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="rounded-[2rem] bg-black px-7 py-16 text-white md:px-14 md:py-20">
            <div className="max-w-3xl">
              <p className="mb-7 text-sm text-white/45">
                پروژه شما چیست؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.35] tracking-tight md:text-5xl">
                محصول، تیراژ و نیازتان را بگویید.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                مشخصات پروژه را ارسال کنید تا برای انتخاب روش چاپ و
                استعلام قیمت بررسی شود.
              </p>

              <Link
                href="/استعلام-قیمت"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
