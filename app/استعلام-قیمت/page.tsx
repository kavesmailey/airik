import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import QuoteForm from "./QuoteForm";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import IconArrow from "@/components/ui/IconArrow";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/استعلام-قیمت`;

export const metadata: Metadata = {
  title: "استعلام قیمت چاپ | آیریک",
  description:
    "برای استعلام قیمت خدمات چاپ آیریک، نوع محصول، تعداد، ابعاد و زمان مورد نیاز پروژه را ارسال کنید.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "استعلام قیمت چاپ | آیریک",
    description:
      "مشخصات پروژه چاپی خود را برای آیریک ارسال کنید و برای انتخاب روش چاپ و برآورد قیمت راهنمایی بگیرید.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "استعلام قیمت چاپ | آیریک",
    description:
      "مشخصات پروژه چاپی خود را برای آیریک ارسال کنید و برای انتخاب روش چاپ و برآورد قیمت راهنمایی بگیرید.",
  },
};

const faqs = [
  {
    question: "برای استعلام قیمت چاپ چه اطلاعاتی لازم است؟",
    answer:
      "برای شروع، نوع محصول، تعداد تقریبی، ابعاد و زمان مورد نیاز پروژه کافی است. اگر اطلاعات دیگری مثل جنس متریال یا روش چاپ را می‌دانید، می‌توانید آن را هم در توضیحات وارد کنید.",
  },
  {
    question: "اگر روش چاپ مناسب را ندانم چه؟",
    answer:
      "نیازی نیست روش چاپ را از قبل مشخص کنید. کافی است محصول و کاربرد آن را توضیح دهید تا بر اساس مشخصات پروژه، روش مناسب چاپ بررسی شود.",
  },
  {
    question: "قیمت چاپ بر چه اساسی تعیین می‌شود؟",
    answer:
      "قیمت نهایی به عواملی مانند نوع چاپ، محصول یا متریال، تعداد، ابعاد، تعداد رنگ، جزئیات اجرا و زمان مورد نیاز بستگی دارد.",
  },
  {
    question: "آیا برای سفارش‌های برندها و کسب‌وکارها هم استعلام قیمت انجام می‌شود؟",
    answer:
      "بله. سفارش‌های چاپی برندها، کسب‌وکارها و پروژه‌های سازمانی قابل بررسی هستند.",
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
      name: "استعلام قیمت",
      item: canonicalUrl,
    },
  ],
};

const quotePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "استعلام قیمت چاپ",
  description:
    "صفحه استعلام قیمت خدمات چاپ آیریک برای سفارش‌های چاپی برندها و کسب‌وکارها.",
  url: canonicalUrl,
  inLanguage: "fa-IR",
  mainEntity: {
    "@type": "Service",
    name: "استعلام قیمت خدمات چاپ",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: "کرج",
    },
    serviceType: "خدمات چاپ",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const projectDetails = [
  "نوع محصول",
  "تعداد تقریبی",
  "ابعاد",
  "زمان مورد نیاز",
];

const processSteps = [
  {
    title: "بررسی پروژه",
    text: "اطلاعات ارسال‌شده بررسی می‌شوند.",
  },
  {
    title: "انتخاب روش مناسب",
    text: "در صورت نیاز، روش چاپ و مشخصات فنی مناسب پروژه مشخص می‌شود.",
  },
  {
    title: "برآورد قیمت",
    text: "بر اساس مشخصات پروژه، هزینه و شرایط اجرا بررسی می‌شود.",
  },
  {
    title: "تماس و ادامه فرایند",
    text: "برای هماهنگی جزئیات و ادامه سفارش با شما ارتباط برقرار می‌کنیم.",
  },
];

export default function QuotePage() {
  return (
    <main dir="rtl">
      <JsonLd type="breadcrumb" data={breadcrumbSchema} />
      <JsonLd type="organization" data={quotePageSchema} />
      <JsonLd type="faq" data={faqSchema} />

      {/* HERO */}
      <section
        className="border-b"
        style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
      >
        <div className="container-iric pb-24 pt-32 sm:pb-28 sm:pt-40 lg:pb-36 lg:pt-44">
          <div className="max-w-5xl">
            <Reveal direction="up">
              <p
                className="mb-6 text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                استعلام قیمت چاپ
              </p>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: 1.35,
                }}
              >
                مشخصات پروژه را
                <br />
                برای ما بفرستید.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={220}>
              <p
                className="mt-7 max-w-3xl text-base sm:text-lg"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.68,
                  lineHeight: 2,
                }}
              >
                برای دریافت برآورد قیمت خدمات چاپ، مشخصات اولیه پروژه
                خود را ارسال کنید. نوع محصول، تعداد، ابعاد و زمان مورد
                نیاز به ما کمک می‌کند تا درخواست شما را دقیق‌تر بررسی
                کنیم.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section
        className="border-b"
        style={{
          backgroundColor: "var(--color-soft-green)",
          borderColor: "rgba(2, 47, 18, 0.12)",
        }}
      >
        <div className="container-iric py-16 sm:py-20">
          <Reveal direction="right">
            <div className="max-w-4xl">
              <p
                className="mb-4 text-sm font-medium"
                style={{ color: "var(--color-dark-green)" }}
              >
                استعلام قیمت چاپ
              </p>

              <p
                className="text-lg sm:text-xl"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.68,
                  lineHeight: 2,
                }}
              >
                برای استعلام قیمت چاپ در آیریک، کافی است نوع محصول،
                تعداد تقریبی، ابعاد و زمان مورد نیاز را مشخص کنید.
                توضیحات فنی پروژه را نیز می‌توانید در فرم وارد کنید
                تا امکان بررسی دقیق‌تر وجود داشته باشد.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORM */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric py-20 sm:py-24 md:py-32 lg:py-40">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-24 lg:gap-28">
            {/* INTRO */}
            <Reveal direction="right">
              <div>
                <p
                  className="mb-7 text-sm font-medium"
                  style={{ color: "var(--color-primary)" }}
                >
                  اطلاعات پروژه
                </p>

                <h2
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{
                    color: "var(--color-dark-green)",
                    lineHeight: 1.45,
                  }}
                >
                  هرچه اطلاعات
                  <br />
                  دقیق‌تر باشد،
                  <br />
                  برآورد دقیق‌تر است.
                </h2>

                <p
                  className="mt-8 max-w-md text-base"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.55,
                    lineHeight: 2,
                  }}
                >
                  اگر هنوز بعضی از مشخصات پروژه را نمی‌دانید، مشکلی
                  نیست. اطلاعاتی که در اختیار دارید را وارد کنید و
                  جزئیات باقی‌مانده را در ادامه بررسی می‌کنیم.
                </p>

                <div
                  className="mt-12 border-t"
                  style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
                >
                  {projectDetails.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-5 border-b py-5"
                      style={{
                        borderColor: "rgba(2, 47, 18, 0.12)",
                      }}
                    >
                      <span
                        className="text-xs"
                        style={{
                          color: "var(--color-dark-green)",
                          opacity: 0.3,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="text-sm"
                        style={{ color: "var(--color-dark-green)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <Reveal direction="left" delay={120}>
              <div>
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="border-y"
        style={{
          backgroundColor: "var(--color-soft-green)",
          borderColor: "rgba(2, 47, 18, 0.12)",
        }}
      >
        <div className="container-iric py-20 sm:py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-24 lg:gap-28">
            <Reveal direction="right">
              <div>
                <p
                  className="mb-7 text-sm font-medium"
                  style={{ color: "var(--color-primary)" }}
                >
                  بعد از ارسال درخواست
                </p>

                <h2
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{
                    color: "var(--color-dark-green)",
                    lineHeight: 1.45,
                  }}
                >
                  از درخواست
                  <br />
                  تا برآورد.
                </h2>
              </div>
            </Reveal>

            <div
              className="border-t"
              style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
            >
              {processSteps.map((item, index) => (
                <Reveal
                  key={item.title}
                  direction="up"
                  delay={index * 90}
                >
                  <div
                    className="grid gap-5 border-b py-8 sm:grid-cols-[60px_1fr]"
                    style={{
                      borderColor: "rgba(2, 47, 18, 0.12)",
                    }}
                  >
                    <span
                      className="text-xs"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.3,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--color-dark-green)" }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-3 max-w-xl text-sm"
                        style={{
                          color: "var(--color-dark-green)",
                          opacity: 0.55,
                          lineHeight: 2,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric py-20 sm:py-24 md:py-32 lg:py-40">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-24 lg:gap-28">
            <Reveal direction="right">
              <div>
                <p
                  className="mb-7 text-sm font-medium"
                  style={{ color: "var(--color-primary)" }}
                >
                  سوالات متداول
                </p>

                <h2
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{
                    color: "var(--color-dark-green)",
                    lineHeight: 1.45,
                  }}
                >
                  قبل از
                  <br />
                  استعلام قیمت.
                </h2>

                <p
                  className="mt-7 max-w-sm text-sm"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.5,
                    lineHeight: 2,
                  }}
                >
                  پاسخ چند سؤال رایج درباره قیمت‌گذاری و ثبت درخواست
                  چاپ.
                </p>
              </div>
            </Reveal>

            <div
              className="border-t"
              style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
            >
              {faqs.map((faq, index) => (
                <Reveal
                  key={faq.question}
                  direction="up"
                  delay={index * 80}
                >
                  <details
                    className="group border-b"
                    style={{
                      borderColor: "rgba(2, 47, 18, 0.12)",
                    }}
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
                          className="text-base font-medium leading-8 sm:text-lg"
                          style={{
                            color: "var(--color-dark-green)",
                          }}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className="text-xl transition-transform duration-500 group-open:rotate-45"
                        style={{
                          color: "var(--color-dark-green)",
                          opacity: 0.4,
                        }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>

                    <p
                      className="pb-8 pr-9 text-sm sm:text-base md:pr-10"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.55,
                        lineHeight: 2,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="border-t"
        style={{
          backgroundColor: "var(--color-dark-green)",
          borderColor: "rgba(2, 47, 18, 0.12)",
        }}
      >
        <div className="container-iric py-20 sm:py-24 md:py-32 lg:py-36">
          <Reveal direction="up">
            <div className="max-w-4xl">
              <p
                className="mb-7 text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                هنوز مطمئن نیستید؟
              </p>

              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                style={{
                  color: "var(--color-white)",
                  lineHeight: 1.45,
                }}
              >
                لازم نیست همه‌چیز
                <br />
                را از قبل بدانید.
              </h2>

              <p
                className="mt-7 max-w-2xl text-base sm:text-lg"
                style={{
                  color: "var(--color-white)",
                  opacity: 0.62,
                  lineHeight: 2,
                }}
              >
                اگر هنوز درباره روش چاپ، متریال یا مشخصات پروژه
                مطمئن نیستید، می‌توانید قبل از ثبت سفارش با ما تماس
                بگیرید و درباره پروژه صحبت کنید.
              </p>

              <Link
                href="/تماس-با-ما"
                className="group mt-10 inline-flex items-center gap-4 rounded-full px-7 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-deep-green)",
                }}
              >
                تماس با ما

                <span className="transition-transform duration-500 group-hover:-translate-x-1">
                  <IconArrow direction="left" size={18} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
