import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/برای-کسب-و-کارها`;

export const metadata: Metadata = {
  title: "راهکارهای چاپ برای کسب‌وکارها | آیریک",
  description:
    "راهکارهای چاپ آیریک برای برندها و کسب‌وکارها؛ از چاپ روی پوشاک و بگ تا بسته‌بندی و محصولات تبلیغاتی.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "راهکارهای چاپ برای کسب‌وکارها | آیریک",
    description:
      "راهکارهای چاپ آیریک برای برندها و کسب‌وکارها، متناسب با محصول، متریال، تیراژ و نیاز پروژه.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "راهکارهای چاپ برای کسب‌وکارها | آیریک",
    description:
      "راهکارهای چاپ آیریک برای برندها و کسب‌وکارها، متناسب با محصول، متریال، تیراژ و نیاز پروژه.",
  },
};

const solutions = [
  {
    number: "01",
    title: "پوشاک و یونیفرم",
    text: "چاپ روی تیشرت، لباس و پارچه برای برندها، تیم‌ها، مجموعه‌ها و کمپین‌ها.",
  },
  {
    number: "02",
    title: "بگ و محصولات پارچه‌ای",
    text: "چاپ و تولید بگ، توت‌بگ و کیسه‌های پارچه‌ای برای استفاده روزمره یا هویت برند.",
  },
  {
    number: "03",
    title: "بسته‌بندی",
    text: "راهکارهای چاپ روی کارتن، جعبه پیتزا، لیوان کاغذی و دیگر محصولات بسته‌بندی.",
  },
  {
    number: "04",
    title: "محصولات تبلیغاتی",
    text: "چاپ روی متریال‌ها و محصولات مختلف برای کمپین‌ها، رویدادها و ارتباطات برند.",
  },
  {
    number: "05",
    title: "تولید اختصاصی",
    text: "از شابلون و توری‌کشی تا طراحی اختصاصی چاپ سیلک برای پروژه‌هایی که نیاز به اجرای دقیق‌تری دارند.",
  },
  {
    number: "06",
    title: "چاپ روی متریال‌های مختلف",
    text: "چاپ روی فلز، چوب، استیل، پلکسی و دیگر سطوح متناسب با نیاز پروژه.",
  },
];

const process = [
  {
    number: "01",
    title: "شناخت پروژه",
    text: "اول محصول، کاربرد، تیراژ و محدودیت‌های پروژه را بررسی می‌کنیم.",
  },
  {
    number: "02",
    title: "انتخاب روش",
    text: "روش چاپ و متریال مناسب بر اساس نتیجه مورد انتظار انتخاب می‌شود.",
  },
  {
    number: "03",
    title: "بررسی جزئیات",
    text: "فایل، ابعاد، رنگ، تعداد و جزئیات اجرایی قبل از تولید بررسی می‌شوند.",
  },
  {
    number: "04",
    title: "اجرا",
    text: "پس از تأیید جزئیات، پروژه وارد مرحله تولید و چاپ می‌شود.",
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
      name: "برای کسب‌وکارها",
      item: canonicalUrl,
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "راهکارهای چاپ برای کسب‌وکارها",
  description:
    "راهکارهای چاپ آیریک برای برندها و کسب‌وکارها.",
  url: canonicalUrl,
  inLanguage: "fa-IR",
  about: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteUrl,
  },
};

export default function BusinessSolutionsPage() {
  return (
    <main dir="rtl">
      <JsonLd type="breadcrumb" data={breadcrumbSchema} />
      <JsonLd type="organization" data={pageSchema} />

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
              برای کسب‌وکارها
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "1.12",
              }}
            >
              چاپی که برای
              <br />
              کسب‌وکار شما کار کند.
            </h1>

            <p
              className="mt-10 max-w-3xl text-lg sm:text-xl"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.68,
                lineHeight: "2",
              }}
            >
              اگر چاپ بخشی از محصول، بسته‌بندی، لباس یا ارتباطات برند شماست،
              آیریک کمک می‌کند روش مناسب را متناسب با محصول، تیراژ، متریال و
              نتیجه‌ای که می‌خواهید انتخاب کنید.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-white)",
                }}
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/خدمات"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border px-8 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--color-dark-green)",
                  color: "var(--color-dark-green)",
                }}
              >
                مشاهده خدمات
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
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
              راهکار چاپ برای کسب‌وکار
            </p>

            <p
              className="text-lg sm:text-xl"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.68,
                lineHeight: "2",
              }}
            >
              آیریک خدمات چاپ را بر اساس محصول و نیاز واقعی پروژه ارائه
              می‌کند؛ از چاپ روی پوشاک و بگ تا بسته‌بندی، محصولات تبلیغاتی و
              چاپ روی متریال‌های مختلف.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric py-24 sm:py-32 lg:py-40">
          <div className="mb-14 max-w-3xl sm:mb-20">
            <p
              className="mb-6 text-sm font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              چه کاری می‌توانیم انجام دهیم؟
            </p>

            <h2
              className="text-3xl font-bold tracking-tight sm:text-5xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "1.4",
              }}
            >
              راهکار را از محصول
              <br />
              شروع می‌کنیم.
            </h2>
          </div>

          <div
            className="grid border-t md:grid-cols-2"
            style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
          >
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="border-b py-10 sm:py-14 md:px-8"
                style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
              >
                <span
                  className="text-xs"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.35,
                  }}
                >
                  {solution.number}
                </span>

                <h3
                  className="mt-7 text-2xl font-bold"
                  style={{ color: "var(--color-dark-green)" }}
                >
                  {solution.title}
                </h3>

                <p
                  className="mt-5 max-w-xl text-sm sm:text-base"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.62,
                    lineHeight: "2",
                  }}
                >
                  {solution.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Selection */}
      <section
        className="border-y"
        style={{
          backgroundColor: "var(--color-soft-green)",
          borderColor: "rgba(2, 47, 18, 0.12)",
        }}
      >
        <div className="container-iric py-24 sm:py-32 lg:py-40">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            <div>
              <p
                className="mb-7 text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                انتخاب روش چاپ
              </p>

              <h2
                className="text-3xl font-bold tracking-tight sm:text-5xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "1.4",
                }}
              >
                یک روش چاپ
                <br />
                برای همه پروژه‌ها نیست.
              </h2>
            </div>

            <div className="space-y-8">
              <p
                className="text-lg sm:text-xl"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.68,
                  lineHeight: "2",
                }}
              >
                محصول، جنس سطح، تیراژ، تعداد رنگ، جزئیات طرح و کاربرد نهایی
                همگی روی انتخاب روش چاپ تأثیر دارند.
              </p>

              <p
                className="text-base"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.55,
                  lineHeight: "2",
                }}
              >
                به همین دلیل پیشنهاد ما همیشه از خود محصول شروع می‌شود؛
                نه از اینکه یک روش چاپ خاص را برای همه سفارش‌ها تکرار کنیم.
              </p>

              <Link
                href="/خدمات"
                className="inline-flex items-center gap-3 text-sm font-bold"
                style={{ color: "var(--color-dark-green)" }}
              >
                بررسی همه خدمات
                <span aria-hidden="true">↙</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric py-24 sm:py-32 lg:py-40">
          <div className="mb-14 max-w-3xl sm:mb-20">
            <p
              className="mb-6 text-sm font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              فرایند همکاری
            </p>

            <h2
              className="text-3xl font-bold tracking-tight sm:text-5xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "1.4",
              }}
            >
              از ایده تا
              <br />
              خروجی واقعی.
            </h2>
          </div>

          <div
            className="border-t"
            style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
          >
            {process.map((item) => (
              <div
                key={item.number}
                className="grid gap-6 border-b py-8 sm:grid-cols-[80px_0.7fr_1.3fr] sm:items-start sm:py-10"
                style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
              >
                <span
                  className="text-xs"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.35,
                  }}
                >
                  {item.number}
                </span>

                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--color-dark-green)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm sm:text-base"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.58,
                    lineHeight: "2",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="container-iric py-32 sm:py-40 lg:py-52">
          <div className="max-w-4xl">
            <p
              className="mb-7 text-sm font-bold"
              style={{ color: "var(--color-white)" }}
            >
              شروع همکاری
            </p>

            <h2
              className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "1.4",
              }}
            >
              پروژه‌ای دارید که
              <br />
              باید درست اجرا شود؟
            </h2>

            <p
              className="mt-8 max-w-2xl text-lg"
              style={{
                color: "var(--color-white)",
                opacity: 0.88,
                lineHeight: "2",
              }}
            >
              مشخصات اولیه پروژه را بفرستید تا درباره روش چاپ، متریال،
              زمان اجرا و هزینه با شما صحبت کنیم.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border px-8 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--color-dark-green)",
                  color: "var(--color-dark-green)",
                }}
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/تماس-با-ما"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border px-8 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--color-dark-green)",
                  color: "var(--color-dark-green)",
                }}
              >
                تماس با آیریک
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
