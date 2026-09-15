import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import QuoteForm from "./QuoteForm";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/استعلام-قیمت`;

export const metadata: Metadata = {
  title: "استعلام قیمت چاپ | آیریک",
  description:
    "برای استعلام قیمت خدمات چاپ آیریک، نوع محصول، تعداد، ابعاد و زمان مورد نیاز پروژه را ارسال کنید تا درخواست شما بررسی شود.",
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

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export default function QuotePage() {
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
    mainEntity: {
      "@type": "Service",
      name: "استعلام قیمت خدمات چاپ",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      areaServed: {
        "@type": "Country",
        name: "Iran",
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

  return (
    <main dir="rtl">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={quotePageSchema} />
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12 lg:py-40">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
              استعلام قیمت چاپ
            </p>

            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[1.12] tracking-[-0.045em]">
              مشخصات پروژه را
              <br />
              برای ما بفرستید.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-black/55 sm:mt-10 sm:text-lg sm:leading-9">
              برای دریافت برآورد قیمت خدمات چاپ، مشخصات اولیه پروژه
              خود را ارسال کنید. نوع محصول، تعداد، ابعاد و زمان مورد
              نیاز به ما کمک می‌کند تا درخواست شما را دقیق‌تر بررسی
              کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER / FEO */}
      <section className="border-b border-black/10 bg-[#E4F0CC]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-medium text-black/40 sm:text-sm">
              استعلام قیمت چاپ
            </p>

            <p className="text-lg leading-9 text-black/65 sm:text-xl">
              برای استعلام قیمت چاپ در آیریک، کافی است نوع محصول،
              تعداد تقریبی، ابعاد و زمان مورد نیاز را مشخص کنید.
              توضیحات فنی پروژه را نیز می‌توانید در فرم وارد کنید
              تا امکان بررسی دقیق‌تر وجود داشته باشد.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-20 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            {/* INTRO */}
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                اطلاعات پروژه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight sm:text-4xl">
                هرچه اطلاعات
                <br />
                دقیق‌تر باشد،
                <br />
                برآورد دقیق‌تر است.
              </h2>

              <p className="mt-8 max-w-md text-base leading-8 text-black/50">
                اگر هنوز بعضی از مشخصات پروژه را نمی‌دانید، مشکلی
                نیست. اطلاعاتی که در اختیار دارید را وارد کنید و
                جزئیات باقی‌مانده را در ادامه بررسی می‌کنیم.
              </p>

              <div className="mt-12 border-t border-black/10">
                {[
                  "نوع محصول",
                  "تعداد تقریبی",
                  "ابعاد",
                  "زمان مورد نیاز",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-b border-black/10 py-5"
                  >
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-black/10 bg-[#E4F0CC]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                بعد از ارسال درخواست
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight sm:text-4xl">
                از درخواست
                <br />
                تا برآورد.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
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
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[60px_1fr]"
                >
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>

                    <p className="mt-3 max-w-xl text-sm leading-8 text-black/50">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                سوالات متداول
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight sm:text-4xl">
                قبل از
                <br />
                استعلام قیمت.
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-8 text-black/45">
                پاسخ چند سؤال رایج درباره قیمت‌گذاری و ثبت درخواست
                چاپ.
              </p>
            </div>

            <div className="border-t border-black/10">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-black/10"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-base font-medium leading-8 sm:text-lg">
                        {faq.question}
                      </span>
                    </div>

                    <span className="text-xl text-black/40 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="pb-8 pr-9 text-sm leading-8 text-black/50 sm:text-base md:pr-10">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-black/10 bg-[#E4F0CC]">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
              هنوز مطمئن نیستید؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight sm:text-4xl md:text-5xl">
              لازم نیست همه‌چیز
              <br />
              را از قبل بدانید.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/50 sm:text-lg sm:leading-9">
              اگر هنوز درباره روش چاپ، متریال یا مشخصات پروژه
              مطمئن نیستید، می‌توانید قبل از ثبت سفارش با ما تماس
              بگیرید و درباره پروژه صحبت کنید.
            </p>

            <Link
              href="/تماس-با-ما"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
            >
              تماس با ما
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
