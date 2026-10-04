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
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteUrl,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressCountry: siteConfig.contact.country,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.telegram,
      siteConfig.social.whatsapp,
    ].filter(Boolean),
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

      {/* HERO */}
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

      {/* QUICK ANSWER */}
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

      {/* CONTACT */}
      <section className="bg-white">
        <div className="container mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* CONTACT INFO */}
            <Reveal direction="right">
              <div>
                <p className="mb-7 text-sm font-medium text-[#8BC53D]">
                  اطلاعات تماس
                </p>

                <div className="border-t border-[#022F12]/10">
                  {/* PHONE */}
                  <div className="border-b border-[#022F12]/10 py-7">
                    <p className="mb-3 text-xs text-[#022F12]/40">
                      تلفن
                    </p>

                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-lg font-medium text-[#022F12] transition-opacity duration-300 hover:opacity-60"
                      dir="ltr"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>

                  {/* WHATSAPP */}
                  <div className="border-b border-[#022F12]/10 py-7">
                    <p className="mb-3 text-xs text-[#022F12]/40">
                      واتساپ
                    </p>

                    <a
                      href={siteConfig.social.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium text-[#022F12] transition-opacity duration-300 hover:opacity-60"
                      dir="ltr"
                    >
                      WhatsApp
                    </a>
                  </div>

                  {/* TELEGRAM */}
                  <div className="border-b border-[#022F12]/10 py-7">
                    <p className="mb-3 text-xs text-[#022F12]/40">
                      تلگرام
                    </p>

                    <a
                      href={siteConfig.social.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium text-[#022F12] transition-opacity duration-300 hover:opacity-60"
                      dir="ltr"
                    >
                      Telegram
                    </a>
                  </div>

                  {/* INSTAGRAM */}
                  <div className="border-b border-[#022F12]/10 py-7">
                    <p className="mb-3 text-xs text-[#022F12]/40">
                      اینستاگرام
                    </p>

                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium text-[#022F12] transition-opacity duration-300 hover:opacity-60"
                      dir="ltr"
                    >
                      @ayric_chap
                    </a>
                  </div>

                  {/* ADDRESS */}
                  <div className="border-b border-[#022F12]/10 py-7">
                    <p className="mb-3 text-xs text-[#022F12]/40">
                      آدرس
                    </p>

                    <p
                      className="text-lg font-medium leading-9 text-[#022F12]"
                      style={{ lineHeight: 2 }}
                    >
                      {siteConfig.contact.address}
                    </p>

                    <a
                      href={siteConfig.contact.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-[#8BC53D] transition-opacity hover:opacity-60"
                    >
                      مسیریابی روی نقشه
                      <span aria-hidden="true">↗</span>
                    </a>
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

            {/* MAP */}
            <Reveal direction="left" delay={120}>
              <div>
                <div className="mb-7 flex items-end justify-between gap-6">
                  <div>
                    <p className="mb-3 text-sm font-medium text-[#8BC53D]">
                      موقعیت آیریک
                    </p>

                    <h2 className="text-2xl font-semibold text-[#021408] sm:text-3xl">
                      ما را روی نقشه پیدا کنید.
                    </h2>
                  </div>

                  <a
                    href={siteConfig.contact.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden shrink-0 items-center gap-2 rounded-full border border-[#022F12] px-5 py-3 text-sm font-medium text-[#022F12] transition-all duration-300 hover:bg-[#022F12] hover:text-white sm:inline-flex"
                  >
                    مسیریابی
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="overflow-hidden border border-[#022F12]/10 bg-[#E4F0CC]">
                  <iframe
                    src={siteConfig.contact.mapEmbedUrl}
                    title="موقعیت آیریک روی نقشه"
                    className="h-[420px] w-full border-0 sm:h-[500px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href={siteConfig.contact.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-[#022F12] sm:hidden"
                >
                  باز کردن مسیر روی Google Maps
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
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
