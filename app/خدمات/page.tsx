import type { Metadata } from "next";
import Link from "next/link";

import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import SectionHeading from "@/components/ui/SectionHeading";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "خدمات چاپ آیریک | چاپ لباس، پارچه، بسته‌بندی و محصولات",
  description:
    "خدمات چاپ آیریک برای برندها و کسب‌وکارها؛ از چاپ سیلک و DTF تا چاپ روی لباس، پارچه، بگ، بسته‌بندی و محصولات. انتخاب روش چاپ بر اساس محصول، متریال، طرح و تیراژ.",
  alternates: {
    canonical: "/خدمات",
  },
  openGraph: {
    title: "خدمات چاپ آیریک | راهکارهای چاپ برای برندها و کسب‌وکارها",
    description:
      "از انتخاب روش چاپ تا تولید نهایی؛ خدمات چاپ آیریک برای پوشاک، پارچه، بسته‌بندی، محصولات و اقلام تبلیغاتی.",
    type: "website",
    url: "/خدمات",
  },
};

export default function ServicesPage() {
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "خدمات چاپ آیریک",
    description:
      "فهرست خدمات چاپ آیریک برای برندها و کسب‌وکارها.",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `/خدمات/${service.slug}`,
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
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "خدمات",
        item: "/خدمات",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: "/",
  };

  return (
    <main dir="rtl">
      <JsonLd
        type="service"
        data={serviceListSchema}
      />

      <JsonLd
        type="breadcrumb"
        data={breadcrumbSchema}
      />

      <JsonLd
        type="organization"
        data={organizationSchema}
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="pt-28 pb-16 sm:pt-32 sm:pb-20"
        style={{
          backgroundColor: "var(--color-bg)",
        }}
      >
        <div className="container-iric">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <p
                className="text-sm font-medium"
                style={{
                  color: "var(--color-accent)",
                }}
              >
                خدمات چاپ آیریک
              </p>

              <h1
                className="mt-5 max-w-5xl text-4xl font-bold sm:text-5xl lg:text-7xl"
                style={{
                  color: "var(--color-text)",
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
                  color: "var(--color-text-muted)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                ما برای هر پروژه، بر اساس محصول، متریال، طرح، تیراژ و
                کاربرد نهایی، مناسب‌ترین راهکار چاپ را انتخاب می‌کنیم.
              </p>
            </div>

            <div className="lg:col-span-4">
              <MediaPlaceholder
                aspectRatio="4/3"
                label="تصویر خدمات چاپ آیریک"
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK ANSWER — FEO / AI SEARCH
      ====================================================== */}

      <section
        className="py-14 sm:py-16"
        style={{
          backgroundColor: "var(--color-bg-light)",
        }}
      >
        <div className="container-iric">
          <div
            className="max-w-4xl border-r-2 pr-6 sm:pr-8"
            style={{
              borderColor: "var(--color-accent)",
            }}
          >
            <p
              className="text-sm font-medium"
              style={{
                color: "var(--color-accent)",
              }}
            >
              پاسخ کوتاه
            </p>

            <p
              className="mt-4 text-xl font-semibold sm:text-2xl"
              style={{
                color: "var(--color-text-dark)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              آیریک مجموعه‌ای از خدمات چاپ برای لباس، پارچه، بگ،
              بسته‌بندی، محصولات و اقلام تبلیغاتی ارائه می‌دهد. روش
              مناسب چاپ بر اساس نوع محصول، جنس متریال، طرح، تعداد رنگ
              و تیراژ انتخاب می‌شود.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        className="py-16 sm:py-20"
        id="services"
        style={{
          backgroundColor: "var(--color-bg)",
        }}
      >
        <div className="container-iric">
          <SectionHeading
            eyebrow="خدمات"
            title="راهکارهایی برای نیازهای مختلف چاپ."
            description="هر پروژه الزاماً به یک روش چاپ نیاز ندارد. خدمات آیریک بر اساس نیاز واقعی پروژه تعریف شده‌اند."
            tone="dark"
          />

          <div className="mt-10 border-t">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 40}
              >
                <Link
                  href={`/خدمات/${service.slug}`}
                  className="group block border-b py-8 transition-opacity hover:opacity-70 sm:py-10"
                  style={{
                    borderColor: "var(--color-border)",
                    textDecoration: "none",
                  }}
                >
                  <div className="grid gap-5 md:grid-cols-[80px_1fr_1.2fr_32px] md:items-center">
                    <span
                      className="text-xs"
                      style={{
                        color: "var(--color-text-faint)",
                      }}
                    >
                      {String(index + 1).padStart(2, "۰")}
                    </span>

                    <h2
                      className="text-2xl font-semibold tracking-tight sm:text-3xl"
                      style={{
                        color: "var(--color-text)",
                      }}
                    >
                      {service.title}
                    </h2>

                    <p
                      className="text-sm sm:text-base"
                      style={{
                        color: "var(--color-text-muted)",
                        lineHeight:
                          "var(--line-height-relaxed)",
                      }}
                    >
                      {service.shortDescription}
                    </p>

                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform duration-300 group-hover:-translate-x-1"
                      style={{
                        color: "var(--color-text)",
                      }}
                    >
                      <IconArrow
                        direction="left"
                        size={18}
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINTING METHOD / DECISION
      ====================================================== */}

      <section
        className="py-16 sm:py-20"
        style={{
          backgroundColor: "var(--color-bg-light)",
        }}
      >
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="انتخاب روش"
                title="کدام روش چاپ برای پروژه شما مناسب است؟"
                tone="light"
              />
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-0 border-t">
                {services
                  .filter(
                    (service) =>
                      service.printingMethods.length > 0
                  )
                  .slice(0, 6)
                  .map((service, index) => {
                    const method =
                      service.printingMethods[0];

                    return (
                      <div
                        key={service.slug}
                        className="grid gap-5 border-b py-7 md:grid-cols-[70px_0.7fr_1.3fr]"
                        style={{
                          borderColor:
                            "var(--color-border-light)",
                        }}
                      >
                        <span
                          className="text-xs"
                          style={{
                            color:
                              "var(--color-text-faint)",
                          }}
                        >
                          {String(index + 1).padStart(
                            2,
                            "۰"
                          )}
                        </span>

                        <div>
                          <h3
                            className="font-semibold"
                            style={{
                              color:
                                "var(--color-text-dark)",
                            }}
                          >
                            {method.name}
                          </h3>

                          <Link
                            href={`/خدمات/${service.slug}`}
                            className="mt-2 inline-flex text-xs"
                            style={{
                              color:
                                "var(--color-accent)",
                            }}
                          >
                            مشاهده خدمت
                          </Link>
                        </div>

                        <div>
                          <p
                            className="text-sm"
                            style={{
                              color:
                                "var(--color-text-dark-muted)",
                              lineHeight:
                                "var(--line-height-relaxed)",
                            }}
                          >
                            {method.description}
                          </p>

                          <p
                            className="mt-2 text-sm"
                            style={{
                              color:
                                "var(--color-text-dark-muted)",
                            }}
                          >
                            مناسب برای:{" "}
                            {method.suitableFor}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ====================================================== */}

      <section
        className="py-16 sm:py-20"
        style={{
          backgroundColor: "var(--color-bg)",
        }}
      >
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="رویکرد آیریک"
                title="اول مسئله، بعد روش چاپ."
                tone="dark"
              />
            </div>

            <div className="lg:col-span-8">
              <div className="max-w-3xl">
                <p
                  className="text-lg"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight:
                      "var(--line-height-relaxed)",
                  }}
                >
                  انتخاب روش چاپ فقط بر اساس ظاهر طرح انجام نمی‌شود.
                  جنس محصول، تعداد، ابعاد چاپ، تعداد رنگ، میزان جزئیات
                  و کاربرد نهایی همگی روی انتخاب روش تأثیر دارند.
                </p>

                <p
                  className="mt-6 text-lg"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight:
                      "var(--line-height-relaxed)",
                  }}
                >
                  هدف ما این است که بین کیفیت، هزینه، سرعت تولید و
                  نتیجه نهایی تعادل مناسبی ایجاد شود؛ بنابراین قبل از
                  تولید، مشخصات پروژه بررسی می‌شود.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "محصول",
                    description:
                      "چه چیزی قرار است چاپ شود؟",
                  },
                  {
                    title: "متریال",
                    description:
                      "سطح چاپ چه ویژگی‌هایی دارد؟",
                  },
                  {
                    title: "طرح",
                    description:
                      "تعداد رنگ و میزان جزئیات چقدر است؟",
                  },
                  {
                    title: "تیراژ",
                    description:
                      "چه تعداد محصول نیاز دارید؟",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-md border p-5"
                    style={{
                      borderColor:
                        "var(--color-border)",
                    }}
                  >
                    <span
                      className="text-xs"
                      style={{
                        color:
                          "var(--color-accent)",
                      }}
                    >
                      {String(index + 1).padStart(
                        2,
                        "۰"
                      )}
                    </span>

                    <h3
                      className="mt-4 font-semibold"
                      style={{
                        color:
                          "var(--color-text)",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-2 text-sm"
                      style={{
                        color:
                          "var(--color-text-muted)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        className="py-16 sm:py-20"
        style={{
          backgroundColor: "var(--color-bg-light)",
        }}
      >
        <div className="container-iric">
          <SectionHeading
            eyebrow="فرآیند همکاری"
            title="از نیازسنجی تا تولید."
            description="فرآیند سفارش با بررسی مشخصات پروژه شروع می‌شود و پس از تأیید وارد مرحله تولید می‌شود."
            tone="light"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "۰۱",
                title: "نیازسنجی",
                description:
                  "محصول، متریال، تعداد، ابعاد و کاربرد نهایی بررسی می‌شود.",
              },
              {
                number: "۰۲",
                title: "انتخاب راهکار",
                description:
                  "بر اساس مشخصات پروژه، روش مناسب چاپ مشخص می‌شود.",
              },
              {
                number: "۰۳",
                title: "تأیید",
                description:
                  "جزئیات فنی، قیمت و زمان‌بندی پیش از تولید نهایی می‌شود.",
              },
              {
                number: "۰۴",
                title: "تولید",
                description:
                  "سفارش مطابق مشخصات تأییدشده تولید و آماده تحویل می‌شود.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-md border p-6"
                style={{
                  borderColor:
                    "var(--color-border-light)",
                  backgroundColor:
                    "var(--color-surface-light)",
                }}
              >
                <span
                  className="text-sm font-bold"
                  style={{
                    color:
                      "var(--color-accent)",
                  }}
                >
                  {step.number}
                </span>

                <h3
                  className="mt-5 text-lg font-bold"
                  style={{
                    color:
                      "var(--color-text-dark)",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-3 text-sm"
                  style={{
                    color:
                      "var(--color-text-dark-muted)",
                    lineHeight:
                      "var(--line-height-relaxed)",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS
      ====================================================== */}

      <section
        className="py-20 sm:py-24"
        style={{
          backgroundColor: "var(--color-bg)",
        }}
      >
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p
                className="text-sm font-medium"
                style={{
                  color:
                    "var(--color-accent)",
                }}
              >
                برای برندها و کسب‌وکارها
              </p>

              <h2
                className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
                style={{
                  color:
                    "var(--color-text)",
                  lineHeight:
                    "var(--line-height-tight)",
                }}
              >
                چاپی که با کسب‌وکار شما کار کند.
              </h2>

              <p
                className="mt-6 max-w-2xl text-lg"
                style={{
                  color:
                    "var(--color-text-muted)",
                  lineHeight:
                    "var(--line-height-relaxed)",
                }}
              >
                از تولید سفارش‌های تکی تا پروژه‌های مستمر برند،
                می‌توانیم بر اساس نیاز شما روش مناسب تولید را
                مشخص کنیم.
              </p>
            </div>

            <div className="flex items-end lg:col-span-5 lg:justify-end">
              <Button
                href="/برای-کسب-و-کارها"
                size="lg"
              >
                راهکارهای کسب‌وکار
                <IconArrow
                  direction="left"
                  size={16}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="py-20 sm:py-24"
        style={{
          backgroundColor:
            "var(--color-accent)",
        }}
      >
        <div className="container-iric">
          <div className="max-w-4xl">
            <p
              className="text-sm font-medium"
              style={{
                color:
                  "var(--color-text)",
              }}
            >
              شروع پروژه
            </p>

            <h2
              className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{
                color:
                  "var(--color-text)",
                lineHeight:
                  "var(--line-height-tight)",
              }}
            >
              نمی‌دانید کدام روش چاپ مناسب شماست؟
            </h2>

            <p
              className="mt-6 max-w-2xl text-lg"
              style={{
                color:
                  "var(--color-text-muted)",
                lineHeight:
                  "var(--line-height-relaxed)",
              }}
            >
              مشخصات محصول، تعداد، ابعاد و فایل طرح را بفرستید تا
              مناسب‌ترین مسیر چاپ برای پروژه شما بررسی شود.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/استعلام-قیمت"
                size="lg"
              >
                استعلام قیمت
                <IconArrow
                  direction="left"
                  size={16}
                />
              </Button>

              <Button
                href="/تماس-با-ما"
                variant="secondary"
                size="lg"
              >
                تماس با ما
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
