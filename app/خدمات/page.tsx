import type { Metadata } from "next";
import Link from "next/link";

import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/خدمات`;

export const metadata: Metadata = {
  title: "خدمات چاپ آیریک | چاپ لباس، پارچه، بگ و محصولات",
  description:
    "خدمات چاپ آیریک برای برندها و کسب‌وکارها؛ از چاپ سیلک و DTF تا چاپ روی لباس، پارچه، بگ، بسته‌بندی و محصولات مختلف.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "خدمات چاپ آیریک | راهکارهای چاپ برای برندها و کسب‌وکارها",
    description:
      "از انتخاب روش چاپ تا تولید نهایی؛ خدمات چاپ آیریک برای پوشاک، پارچه، بسته‌بندی و محصولات مختلف.",
    type: "website",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "fa_IR",
    images: siteConfig.ogImage
      ? [
          {
            url: `${siteUrl}${siteConfig.ogImage}`,
            width: 1200,
            height: 630,
            alt: "آیریک — خدمات چاپ",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات چاپ آیریک | راهکارهای چاپ برای برندها و کسب‌وکارها",
    description:
      "از انتخاب روش چاپ تا تولید نهایی؛ خدمات چاپ آیریک برای پوشاک، پارچه، بسته‌بندی و محصولات مختلف.",
  },
};

export default function ServicesPage() {
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "خدمات چاپ آیریک",
    description: "فهرست خدمات چاپ آیریک برای برندها و کسب‌وکارها.",
    url: canonicalUrl,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteUrl}/خدمات/${service.slug}`,
      description: service.shortDescription,
    })),
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
        name: "خدمات",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main dir="rtl">
      <JsonLd type="service" data={serviceListSchema} />
      <JsonLd type="breadcrumb" data={breadcrumbSchema} />

      {/* HERO */}
      <section
        className="pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32"
        style={{
          backgroundColor: "var(--color-white)",
        }}
      >
        <div className="container-iric">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-8">
              <Reveal>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "var(--color-primary)",
                  }}
                >
                  خدمات چاپ آیریک
                </p>

                <h1
                  className="mt-5 max-w-5xl text-4xl font-bold sm:text-6xl lg:text-7xl"
                  style={{
                    color: "var(--color-dark-green)",
                    lineHeight: "var(--line-height-tight)",
                  }}
                >
                  چاپ،
                  <br />
                  فقط چاپ نیست.
                </h1>

                <p
                  className="mt-8 max-w-3xl text-lg sm:text-xl"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.68,
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  ما برای هر پروژه، بر اساس محصول، متریال، طرح، تیراژ و
                  کاربرد نهایی، مناسب‌ترین راهکار چاپ را انتخاب می‌کنیم.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={120}>
                <MediaPlaceholder
                  src="/images/services/services-hero.jpg"
                  alt="خدمات چاپ آیریک"
                  aspectRatio="4/3"
                  tone="dark"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section
        className="py-16 sm:py-20"
        style={{
          backgroundColor: "var(--color-soft-green)",
        }}
      >
        <div className="container-iric">
          <Reveal>
            <div
              className="max-w-4xl border-r-2 pr-6 sm:pr-8"
              style={{
                borderColor: "var(--color-primary)",
              }}
            >
              <p
                className="text-sm font-medium"
                style={{
                  color: "var(--color-dark-green)",
                }}
              >
                پاسخ کوتاه
              </p>

              <p
                className="mt-4 text-xl font-semibold sm:text-2xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                آیریک مجموعه‌ای از خدمات چاپ برای لباس، پارچه، بگ، بسته‌بندی،
                محصولات و اقلام تبلیغاتی ارائه می‌دهد. روش مناسب چاپ بر اساس
                نوع محصول، جنس متریال، طرح و تیراژ انتخاب می‌شود.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section
        id="services"
        className="py-24 sm:py-32 lg:py-40"
        style={{
          backgroundColor: "var(--color-white)",
        }}
      >
        <div className="container-iric">
          <Reveal>
            <div className="max-w-3xl">
              <p
                className="text-sm font-medium"
                style={{
                  color: "var(--color-primary)",
                }}
              >
                فهرست خدمات
              </p>

              <h2
                className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "var(--line-height-tight)",
                }}
              >
                راهکارهایی برای نیازهای مختلف چاپ.
              </h2>

              <p
                className="mt-6 text-base sm:text-lg"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.68,
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                هر پروژه الزاماً به یک روش چاپ نیاز ندارد. خدمات آیریک بر اساس
                نیاز واقعی محصول و کسب‌وکار انتخاب می‌شوند.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 border-t lg:mt-20">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 30}>
                <Link
                  href={`/خدمات/${service.slug}`}
                  className="group block border-b py-7 transition-all duration-300 hover:px-2 sm:py-9"
                  style={{
                    borderColor: "rgba(2, 47, 18, 0.14)",
                    textDecoration: "none",
                  }}
                >
                  <div className="grid gap-5 md:grid-cols-[70px_1fr_1.2fr_32px] md:items-center md:gap-8">
                    <span
                      className="text-xs"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.4,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2
                      className="text-xl font-bold tracking-tight sm:text-2xl"
                      style={{
                        color: "var(--color-dark-green)",
                      }}
                    >
                      {service.title}
                    </h2>

                    <p
                      className="text-sm sm:text-base"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.64,
                        lineHeight: "var(--line-height-relaxed)",
                      }}
                    >
                      {service.shortDescription}
                    </p>

                    <span
                      aria-hidden="true"
                      className="transition-all duration-300 group-hover:-translate-x-1"
                      style={{
                        color: "var(--color-primary)",
                      }}
                    >
                      <IconArrow direction="left" size={20} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section
        className="py-24 sm:py-32 lg:py-40"
        style={{
          backgroundColor: "var(--color-soft-green)",
        }}
      >
        <div className="container-iric">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "var(--color-dark-green)",
                  }}
                >
                  انتخاب روش چاپ
                </p>

                <h2
                  className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
                  style={{
                    color: "var(--color-dark-green)",
                    lineHeight: "var(--line-height-tight)",
                  }}
                >
                  کدام روش چاپ برای پروژه شما مناسب است؟
                </h2>

                <p
                  className="mt-6 max-w-xl text-base sm:text-lg"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.68,
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  انتخاب روش چاپ به عواملی مثل جنس سطح، نوع طرح، تعداد رنگ،
                  تیراژ و نتیجه‌ای که انتظار دارید بستگی دارد.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div
                className="border-t"
                style={{
                  borderColor: "rgba(2, 47, 18, 0.16)",
                }}
              >
                {services
                  .filter((service) => service.printingMethods.length > 0)
                  .slice(0, 6)
                  .map((service, index) => {
                    const method = service.printingMethods[0];

                    return (
                      <Reveal key={service.slug} delay={index * 40}>
                        <div
                          className="grid gap-4 border-b py-7 sm:grid-cols-[60px_1fr_1.2fr] sm:gap-6"
                          style={{
                            borderColor: "rgba(2, 47, 18, 0.16)",
                          }}
                        >
                          <span
                            className="text-xs"
                            style={{
                              color: "var(--color-dark-green)",
                              opacity: 0.42,
                            }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <p
                              className="font-bold"
                              style={{
                                color: "var(--color-dark-green)",
                              }}
                            >
                              {method.name}
                            </p>

                            <p
                              className="mt-2 text-xs"
                              style={{
                                color: "var(--color-dark-green)",
                                opacity: 0.5,
                              }}
                            >
                              {service.title}
                            </p>
                          </div>

                          <p
                            className="text-sm"
                            style={{
                              color: "var(--color-dark-green)",
                              opacity: 0.66,
                              lineHeight: "var(--line-height-relaxed)",
                            }}
                          >
                            {method.description}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="py-24 sm:py-32 lg:py-40"
        style={{
          backgroundColor: "var(--color-white)",
        }}
      >
        <div className="container-iric">
          <Reveal>
            <div className="max-w-3xl">
              <p
                className="text-sm font-medium"
                style={{
                  color: "var(--color-primary)",
                }}
              >
                فرآیند همکاری
              </p>

              <h2
                className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "var(--line-height-tight)",
                }}
              >
                از نیازسنجی تا تولید.
              </h2>

              <p
                className="mt-6 max-w-2xl text-base sm:text-lg"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.68,
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                فرآیند سفارش با بررسی مشخصات پروژه شروع می‌شود و پس از تأیید
                وارد مرحله تولید می‌شود.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "نیازسنجی",
                description:
                  "محصول، متریال، تعداد، ابعاد و کاربرد نهایی بررسی می‌شود.",
              },
              {
                number: "02",
                title: "انتخاب راهکار",
                description:
                  "بر اساس مشخصات پروژه، روش مناسب چاپ مشخص می‌شود.",
              },
              {
                number: "03",
                title: "تأیید",
                description:
                  "جزئیات فنی، قیمت و زمان‌بندی پیش از تولید نهایی می‌شود.",
              },
              {
                number: "04",
                title: "تولید",
                description:
                  "سفارش مطابق مشخصات تأییدشده تولید و آماده تحویل می‌شود.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="p-7 sm:p-8 lg:p-9"
                style={{
                  backgroundColor: "var(--color-soft-green)",
                }}
              >
                <span
                  className="text-xs font-bold"
                  style={{
                    color: "var(--color-primary)",
                  }}
                >
                  {step.number}
                </span>

                <h3
                  className="mt-6 text-lg font-bold"
                  style={{
                    color: "var(--color-dark-green)",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-3 text-sm"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.66,
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section
        className="py-24 sm:py-32"
        style={{
          backgroundColor: "var(--color-dark-green)",
        }}
      >
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-20">
            <div className="lg:col-span-8">
              <Reveal>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "var(--color-primary)",
                  }}
                >
                  برای برندها و کسب‌وکارها
                </p>

                <h2
                  className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
                  style={{
                    color: "var(--color-white)",
                    lineHeight: "var(--line-height-tight)",
                  }}
                >
                  چاپی که با کسب‌وکار شما کار کند.
                </h2>

                <p
                  className="mt-6 max-w-2xl text-base sm:text-lg"
                  style={{
                    color: "var(--color-white)",
                    opacity: 0.72,
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  از سفارش‌های تکی تا پروژه‌های مستمر برند، می‌توانیم بر اساس
                  نیاز شما روش مناسب تولید را مشخص کنیم.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Reveal delay={100}>
                <Button
                  href="/برای-کسب-و-کارها"
                  variant="outline"
                  size="lg"
                  className="border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#022F12]"
                >
                  راهکارهای کسب‌وکار
                  <IconArrow direction="left" size={16} />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-28 sm:py-36 lg:py-44"
        style={{
          backgroundColor: "var(--color-primary)",
        }}
      >
        <div className="container-iric">
          <Reveal>
            <div className="max-w-4xl">
              <p
                className="text-xs font-bold tracking-[0.18em]"
                style={{
                  color: "var(--color-white)",
                }}
              >
                شروع پروژه
              </p>

              <h2
                className="mt-5 text-3xl font-bold sm:text-4xl lg:text-6xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "var(--line-height-tight)",
                }}
              >
                نمی‌دانید کدام روش چاپ مناسب شماست؟
              </h2>

              <p
                className="mt-6 max-w-2xl text-base sm:text-lg"
                style={{
                  color: "var(--color-white)",
                  opacity: 0.86,
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                مشخصات محصول، تعداد، ابعاد و فایل طرح را بفرستید تا مناسب‌ترین
                مسیر چاپ برای پروژه شما بررسی شود.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/استعلام-قیمت"
                  variant="outline"
                  size="lg"
                  className="border-[#022F12] text-[#022F12] hover:bg-[#022F12] hover:text-[#FFFFFF]"
                >
                  استعلام قیمت
                  <IconArrow direction="left" size={16} />
                </Button>

                <Button
                  href="/تماس-با-ما"
                  variant="outline"
                  size="lg"
                  className="border-[#022F12] text-[#022F12] hover:bg-[#022F12] hover:text-[#FFFFFF]"
                >
                  تماس با آیریک
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
