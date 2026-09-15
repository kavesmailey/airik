import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/درباره-ما`;

export const metadata: Metadata = {
  title: "درباره ما | آیریک",
  description:
    "درباره آیریک؛ مجموعه‌ای برای ارائه راهکارهای چاپ و تولید برای برندها و کسب‌وکارها.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "درباره ما | آیریک",
    description:
      "درباره آیریک؛ مجموعه‌ای برای ارائه راهکارهای چاپ و تولید برای برندها و کسب‌وکارها.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "درباره ما | آیریک",
    description:
      "درباره آیریک؛ مجموعه‌ای برای ارائه راهکارهای چاپ و تولید برای برندها و کسب‌وکارها.",
  },
};

const values = [
  {
    number: "01",
    title: "دقت",
    text: "جزئیات کوچک می‌توانند تفاوت بزرگی در نتیجه نهایی ایجاد کنند.",
  },
  {
    number: "02",
    title: "کیفیت",
    text: "کیفیت برای ما فقط مشخصات فنی نیست؛ تجربه‌ای است که محصول منتقل می‌کند.",
  },
  {
    number: "03",
    title: "راهکار",
    text: "هر پروژه مسئله متفاوتی دارد و باید راهکار متناسب خودش را پیدا کند.",
  },
  {
    number: "04",
    title: "همراهی",
    text: "از اولین گفتگو تا تحویل نهایی، کنار پروژه می‌مانیم.",
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
      name: "درباره ما",
      item: canonicalUrl,
    },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${canonicalUrl}#about`,
  url: canonicalUrl,
  name: "درباره ما | آیریک",
  description:
    "درباره آیریک؛ مجموعه‌ای برای ارائه راهکارهای چاپ و تولید برای برندها و کسب‌وکارها.",
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    url: siteUrl,
    name: siteConfig.name,
  },
  about: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteUrl,
  },
};

export default function AboutPage() {
  return (
    <main dir="rtl">
      <JsonLd type="breadcrumb" data={breadcrumbSchema} />
      <JsonLd type="organization" data={aboutPageSchema} />

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
              درباره آیریک
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "1.15",
              }}
            >
              چاپ را از
              <br />
              زاویه دیگری می‌بینیم.
            </h1>

            <p
              className="mt-10 max-w-3xl text-lg sm:text-xl"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.68,
                lineHeight: "2",
              }}
            >
              آیریک برای برندها و کسب‌وکارهایی ساخته شده که خروجی فیزیکی را
              بخشی از تجربه برند خود می‌دانند، نه صرفاً یک محصول چاپ‌شده.
            </p>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric py-32 sm:py-40 lg:py-48">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                نگاه ما
              </p>
            </div>

            <div>
              <p
                className="text-3xl font-bold tracking-tight sm:text-5xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "1.5",
                }}
              >
                ما معتقدیم چاپ فقط انتقال یک تصویر روی یک سطح نیست.
                <span
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.35,
                  }}
                >
                  {" "}
                  بخشی از چیزی است که مخاطب لمس می‌کند، می‌بیند و به خاطر
                  می‌سپارد.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric">
          <div
            className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-[2rem] md:min-h-[650px]"
            style={{
              backgroundColor: "var(--color-soft-green)",
              border: "1px solid rgba(2, 47, 18, 0.12)",
            }}
          >
            <div className="text-center">
              <span
                className="block text-xs tracking-[0.3em]"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.45,
                }}
              >
                AYRIC
              </span>

              <span
                className="mt-5 block text-[9rem] font-bold leading-none tracking-[-0.1em] md:text-[15rem]"
                style={{
                  color: "var(--color-primary)",
                  opacity: 0.45,
                }}
              >
                A
              </span>
            </div>

            <p
              className="absolute bottom-7 right-7 max-w-xs text-sm leading-7 md:bottom-10 md:right-10"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.55,
              }}
            >
              جایی که ایده به یک چیز واقعی تبدیل می‌شود.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric py-32 sm:py-40 lg:py-48">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            <div>
              <p
                className="mb-7 text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                داستان آیریک
              </p>

              <h2
                className="text-3xl font-bold tracking-tight sm:text-5xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "1.45",
                }}
              >
                از یک سفارش
                <br />
                تا یک رابطه.
              </h2>
            </div>

            <div
              className="space-y-8 text-lg sm:text-xl"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.68,
                lineHeight: "2",
              }}
            >
              <p>
                آیریک با یک نگاه ساده شکل گرفته است: اینکه فرآیند چاپ نباید
                فقط از دریافت فایل و تحویل محصول تشکیل شود.
              </p>

              <p>
                ما می‌خواهیم قبل از تولید، مسئله را بفهمیم؛ متریال و روش مناسب
                را پیدا کنیم و مطمئن شویم نتیجه نهایی با چیزی که برند در ذهن
                دارد فاصله‌ای ندارد.
              </p>

              <p>
                به همین دلیل هر پروژه برای ما فرصتی است برای پیدا کردن راهی
                بهتر برای تبدیل یک ایده به یک تجربه فیزیکی.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="border-y"
        style={{
          backgroundColor: "var(--color-soft-green)",
          borderColor: "rgba(2, 47, 18, 0.12)",
        }}
      >
        <div className="container-iric py-32 sm:py-40 lg:py-48">
          <div className="mb-16 max-w-3xl sm:mb-24">
            <p
              className="mb-7 text-sm font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              اصول ما
            </p>

            <h2
              className="text-3xl font-bold tracking-tight sm:text-5xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "1.4",
              }}
            >
              چیزهایی که
              <br />
              کوتاه نمی‌آیند.
            </h2>
          </div>

          <div
            className="grid border-t md:grid-cols-2"
            style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
          >
            {values.map((value) => (
              <div
                key={value.number}
                className="border-b py-10 sm:py-14 md:px-10"
                style={{ borderColor: "rgba(2, 47, 18, 0.12)" }}
              >
                <span
                  className="text-xs"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.4,
                  }}
                >
                  {value.number}
                </span>

                <h3
                  className="mt-7 text-2xl font-bold"
                  style={{ color: "var(--color-dark-green)" }}
                >
                  {value.title}
                </h3>

                <p
                  className="mt-5 max-w-md leading-8"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.62,
                  }}
                >
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-iric py-32 sm:py-40 lg:py-48">
          <div className="max-w-5xl">
            <p
              className="mb-8 text-sm font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              چرا آیریک؟
            </p>

            <h2
              className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "1.45",
              }}
            >
              چون بین یک فایل خوب
              <br />
              و یک خروجی خوب،
              <br />
              تفاوت زیادی وجود دارد.
            </h2>

            <p
              className="mt-10 max-w-3xl text-lg sm:text-xl"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.65,
                lineHeight: "2",
              }}
            >
              تجربه، شناخت متریال، انتخاب روش درست و توجه به جزئیات اجرایی
              همان چیزی است که یک خروجی معمولی را از یک خروجی درست و قابل
              اعتماد جدا می‌کند.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "var(--color-primary)",
        }}
      >
        <div className="container-iric py-32 sm:py-40 lg:py-52">
          <div className="max-w-4xl">
            <p
              className="mb-7 text-sm font-bold"
              style={{ color: "var(--color-white)" }}
            >
              همکاری
            </p>

            <h2
              className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "1.4",
              }}
            >
              یک پروژه دارید؟
              <br />
              با هم شروعش کنیم.
            </h2>

            <p
              className="mt-8 max-w-2xl text-lg"
              style={{
                color: "var(--color-white)",
                opacity: 0.88,
                lineHeight: "2",
              }}
            >
              درباره پروژه‌تان با ما صحبت کنید. حتی اگر هنوز جزئیات کامل را
              نمی‌دانید.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border px-8 py-4 text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--color-dark-green)",
                  color: "var(--color-dark-green)",
                  backgroundColor: "transparent",
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
                  backgroundColor: "transparent",
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
