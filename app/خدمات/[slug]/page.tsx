import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Reveal from "@/components/ui/Reveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";

type PageProps = {
  params: {
    slug: string;
  };
};

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

/*
|--------------------------------------------------------------------------
| Static generation
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/*
|--------------------------------------------------------------------------
| SEO Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = getService(params.slug);

  if (!service) {
    return {
      title: "خدمت پیدا نشد | آیریک",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `/خدمات/${service.slug}`;

  return {
    title: service.meta.title,
    description: service.meta.description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      type: "website",
      url: canonicalUrl,
      locale: "fa_IR",
      siteName: siteConfig.name,
      images: service.image
        ? [
            {
              url: service.image,
              alt: service.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: service.meta.title,
      description: service.meta.description,
      images: service.image ? [service.image] : undefined,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default function ServicePage({ params }: PageProps) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServiceSlugs
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  /*
  |--------------------------------------------------------------------------
  | Absolute URL
  |--------------------------------------------------------------------------
  |
  | برای Schema بهتر است URLها absolute باشند.
  | اگر siteConfig.url در پروژه شما وجود داشته باشد از آن استفاده می‌شود.
  |
  */

  const siteUrl =
    "url" in siteConfig && typeof siteConfig.url === "string"
      ? siteConfig.url.replace(/\/$/, "")
      : "";

  const pageUrl = `${siteUrl}/خدمات/${service.slug}`;

  /*
  |--------------------------------------------------------------------------
  | Structured Data
  |--------------------------------------------------------------------------
  */

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: service.title,
    description: service.meta.description,
    url: pageUrl,
    serviceType: service.title,

    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      ...(siteUrl
        ? {
            url: siteUrl,
          }
        : {}),
    },

    areaServed: {
      "@type": "Country",
      name: "ایران",
    },

    inLanguage: "fa-IR",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: service.meta.title,
    description: service.meta.description,
    url: pageUrl,
    inLanguage: "fa-IR",

    ...(siteUrl
      ? {
          isPartOf: {
            "@type": "WebSite",
            "@id": `${siteUrl}#website`,
            name: siteConfig.name,
            url: siteUrl,
          },
        }
      : {}),

    about: {
      "@id": `${pageUrl}#service`,
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
        ...(siteUrl
          ? {
              item: siteUrl,
            }
          : {}),
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "خدمات",
        ...(siteUrl
          ? {
              item: `${siteUrl}/خدمات`,
            }
          : {}),
      },

      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        ...(siteUrl
          ? {
              item: pageUrl,
            }
          : {}),
      },
    ],
  };

  const faqSchema =
    service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${pageUrl}#faq`,
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* Structured Data */}

      <JsonLd type="service" data={serviceSchema} />

      <JsonLd type="webpage" data={webPageSchema} />

      <JsonLd type="breadcrumb" data={breadcrumbSchema} />

      {faqSchema && <JsonLd type="faq" data={faqSchema} />}

      <main dir="rtl">
        {/* ==========================================================
            HERO
        =========================================================== */}

        <section
          className="pt-28 pb-16 sm:pt-32 sm:pb-20"
          style={{
            backgroundColor: "var(--color-bg)",
          }}
        >
          <div className="container-iric">
            <Breadcrumbs
              items={[
                {
                  label: "خدمات",
                  href: "/خدمات",
                },
                {
                  label: service.title,
                  href: `/خدمات/${service.slug}`,
                },
              ]}
            />

            <div className="mt-8 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "var(--color-accent)",
                  }}
                >
                  خدمات چاپ آیریک
                </p>

                <h1
                  className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl"
                  style={{
                    color: "var(--color-text)",
                    lineHeight: "var(--line-height-tight)",
                  }}
                >
                  {service.title}
                </h1>

                <p
                  className="mt-6 max-w-2xl text-lg sm:text-xl"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {service.fullDescription}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/استعلام-قیمت" size="lg">
                    استعلام قیمت
                    <IconArrow direction="left" size={16} />
                  </Button>

                  {service.faqs.length > 0 && (
                    <Button href="#faq" variant="secondary" size="lg">
                      سوالات متداول
                    </Button>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5">
                {service.image ? (
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={service.image}
                      alt={`نمونه ${service.title} در آیریک`}
                      className="h-auto w-full object-cover"
                      loading="eager"
                    />
                  </div>
                ) : (
                  <MediaPlaceholder
                    aspectRatio="4/3"
                    label={`تصویر ${service.title}`}
                    tone="dark"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================
            QUICK ANSWER
            FEO / AI SEARCH
        =========================================================== */}

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

              <h2
                className="mt-4 text-xl font-semibold sm:text-2xl"
                style={{
                  color: "var(--color-text-dark)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                {service.shortDescription}
              </h2>

              <p
                className="mt-4 text-base"
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                اگر درباره انتخاب روش چاپ برای این نوع سفارش مطمئن نیستید،
                مشخصات محصول، طرح و تیراژ را برای آیریک ارسال کنید تا روش
                مناسب بررسی شود.
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================================
            ABOUT
        =========================================================== */}

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
                  eyebrow="درباره این خدمت"
                  title={`${service.title} چیست؟`}
                />
              </div>

              <div className="lg:col-span-8">
                <p
                  className="text-lg"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {service.aboutText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================
            BENEFITS
        =========================================================== */}

        <section
          className="py-16 sm:py-20"
          style={{
            backgroundColor: "var(--color-bg-light)",
          }}
        >
          <div className="container-iric">
            <SectionHeading
              eyebrow="مزایا"
              title={`چرا ${service.title}؟`}
              description="انتخاب روش مناسب چاپ باید بر اساس نوع محصول، طرح، متریال و هدف پروژه انجام شود."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((benefit, index) => (
                <Reveal
                  key={benefit}
                  delay={index * 50}
                >
                  <div
                    className="h-full rounded-md border p-6"
                    style={{
                      borderColor: "var(--color-border-light)",
                      backgroundColor: "var(--color-surface-light)",
                    }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: "var(--color-accent)",
                      }}
                    >
                      {String(index + 1).padStart(2, "۰")}
                    </span>

                    <h3
                      className="mt-4 text-lg font-bold"
                      style={{
                        color: "var(--color-text-dark)",
                      }}
                    >
                      {benefit}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================
            SUITABLE FOR
        =========================================================== */}

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
                  eyebrow="کاربرد"
                  title="برای چه پروژه‌هایی مناسب است؟"
                />
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-x-8 border-t md:grid-cols-2">
                  {service.suitableFor.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-5 border-b py-6"
                      style={{
                        borderColor: "var(--color-border)",
                      }}
                    >
                      <span
                        className="text-xs"
                        style={{
                          color: "var(--color-text-faint)",
                        }}
                      >
                        {String(index + 1).padStart(2, "۰")}
                      </span>

                      <span
                        className="font-medium"
                        style={{
                          color: "var(--color-text)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================
            APPLICATIONS
        =========================================================== */}

        <section
          className="py-16 sm:py-20"
          style={{
            backgroundColor: "var(--color-bg-light)",
          }}
        >
          <div className="container-iric">
            <SectionHeading
              eyebrow="موارد استفاده"
              title={`${service.title} در چه محصولاتی استفاده می‌شود؟`}
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.applications.map((application, index) => (
                <Reveal
                  key={application}
                  delay={index * 40}
                >
                  <div
                    className="rounded-md border p-5"
                    style={{
                      borderColor: "var(--color-border-light)",
                      backgroundColor: "var(--color-surface-light)",
                    }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: "var(--color-accent)",
                      }}
                    >
                      {String(index + 1).padStart(2, "۰")}
                    </span>

                    <p
                      className="mt-4 font-semibold"
                      style={{
                        color: "var(--color-text-dark)",
                      }}
                    >
                      {application}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================
            KEY CONSIDERATIONS
        =========================================================== */}

        <section
          className="py-16 sm:py-20"
          style={{
            backgroundColor: "var(--color-bg)",
          }}
        >
          <div className="container-iric">
            <SectionHeading
              eyebrow="نکات مهم"
              title="قبل از سفارش چه چیزهایی مهم است؟"
              description="انتخاب روش چاپ فقط به ظاهر طرح محدود نمی‌شود. مشخصات تولید روی نتیجه نهایی تأثیر دارند."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.keyConsiderations.map(
                (consideration, index) => (
                  <Reveal
                    key={consideration.label}
                    delay={index * 60}
                  >
                    <div className="card-industrial h-full">
                      <span
                        className="text-xs"
                        style={{
                          color: "var(--color-accent)",
                        }}
                      >
                        {String(index + 1).padStart(2, "۰")}
                      </span>

                      <h3
                        className="mt-4 text-lg font-bold"
                        style={{
                          color: "var(--color-text)",
                        }}
                      >
                        {consideration.label}
                      </h3>

                      <p
                        className="mt-3 text-sm"
                        style={{
                          color: "var(--color-text-muted)",
                          lineHeight: "var(--line-height-relaxed)",
                        }}
                      >
                        {consideration.description}
                      </p>
                    </div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* ==========================================================
            PRINTING METHODS
        =========================================================== */}

        {service.printingMethods.length > 0 && (
          <section
            className="py-16 sm:py-20"
            style={{
              backgroundColor: "var(--color-bg-light)",
            }}
          >
            <div className="container-iric">
              <SectionHeading
                eyebrow="روش اجرا"
                title="روش چاپ"
              />

              <div className="mt-10 grid gap-4">
                {service.printingMethods.map(
                  (method, index) => (
                    <div
                      key={method.name}
                      className="grid gap-5 rounded-md border p-6 md:grid-cols-[80px_0.8fr_1.2fr]"
                      style={{
                        borderColor: "var(--color-border-light)",
                        backgroundColor:
                          "var(--color-surface-light)",
                      }}
                    >
                      <span
                        className="text-xs"
                        style={{
                          color: "var(--color-accent)",
                        }}
                      >
                        {String(index + 1).padStart(2, "۰")}
                      </span>

                      <h3
                        className="font-bold"
                        style={{
                          color: "var(--color-text-dark)",
                        }}
                      >
                        {method.name}
                      </h3>

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
                          className="mt-3 text-sm font-medium"
                          style={{
                            color:
                              "var(--color-text-dark)",
                          }}
                        >
                          مناسب برای:{" "}
                          <span
                            style={{
                              color:
                                "var(--color-text-dark-muted)",
                            }}
                          >
                            {method.suitableFor}
                          </span>
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* ==========================================================
            PROCESS
        =========================================================== */}

        <section
          className="py-16 sm:py-20"
          style={{
            backgroundColor: "var(--color-bg)",
          }}
        >
          <div className="container-iric">
            <SectionHeading
              eyebrow="فرآیند"
              title="فرآیند اجرای سفارش"
              description="از دریافت مشخصات تا کنترل کیفیت، مراحل سفارش بر اساس نوع خدمت و محصول انجام می‌شود."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {service.processSteps.map((step, index) => (
                <Reveal
                  key={step}
                  delay={index * 40}
                >
                  <div className="card-industrial h-full">
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: "var(--color-accent)",
                      }}
                    >
                      {String(index + 1).padStart(2, "۰")}
                    </span>

                    <p
                      className="mt-4 font-medium"
                      style={{
                        color: "var(--color-text)",
                        lineHeight:
                          "var(--line-height-relaxed)",
                      }}
                    >
                      {step}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================
            FAQ
        =========================================================== */}

        {service.faqs.length > 0 && (
          <section
            id="faq"
            className="py-16 sm:py-20"
            style={{
              backgroundColor: "var(--color-bg-light)",
            }}
          >
            <div className="container-iric">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-4">
                  <SectionHeading
                    eyebrow="سوالات متداول"
                    title={`سوالات درباره ${service.title}`}
                  />
                </div>

                <div className="lg:col-span-8">
                  <Accordion
                    items={service.faqs.map((faq, index) => ({
                      id: `${service.slug}-faq-${index}`,
                      title: faq.question,
                      content: faq.answer,
                    }))}
                    tone="light"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==========================================================
            RELATED SERVICES
        =========================================================== */}

        {relatedServices.length > 0 && (
          <section
            className="py-16 sm:py-20"
            style={{
              backgroundColor: "var(--color-bg)",
            }}
          >
            <div className="container-iric">
              <SectionHeading
                eyebrow="خدمات مرتبط"
                title="ممکن است این خدمات هم برای شما مناسب باشند"
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((relatedService, index) => (
                  <Reveal
                    key={relatedService.slug}
                    delay={index * 50}
                  >
                    <Link
                      href={`/خدمات/${relatedService.slug}`}
                      className="group block h-full rounded-md border p-6 transition-transform duration-300 hover:-translate-y-1"
                      style={{
                        borderColor: "var(--color-border)",
                        textDecoration: "none",
                      }}
                    >
                      <span
                        className="text-xs"
                        style={{
                          color: "var(--color-text-faint)",
                        }}
                      >
                        {String(index + 1).padStart(2, "۰")}
                      </span>

                      <h3
                        className="mt-5 text-lg font-bold"
                        style={{
                          color: "var(--color-text)",
                        }}
                      >
                        {relatedService.title}
                      </h3>

                      <p
                        className="mt-3 text-sm"
                        style={{
                          color: "var(--color-text-muted)",
                          lineHeight:
                            "var(--line-height-relaxed)",
                        }}
                      >
                        {relatedService.shortDescription}
                      </p>

                      <div
                        className="mt-6 flex items-center gap-2 text-sm font-medium"
                        style={{
                          color: "var(--color-text)",
                        }}
                      >
                        <span>مشاهده خدمت</span>

                        <span
                          className="transition-transform duration-300 group-hover:-translate-x-1"
                          aria-hidden="true"
                        >
                          <IconArrow
                            direction="left"
                            size={16}
                          />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==========================================================
            FINAL CTA
        =========================================================== */}

        <section
          className="py-20 sm:py-24"
          style={{
            backgroundColor: "var(--color-accent)",
          }}
        >
          <div className="container-iric text-center">
            <p
              className="text-sm font-medium"
              style={{
                color: "var(--color-text)",
              }}
            >
              آماده شروع پروژه هستید؟
            </p>

            <h2
              className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{
                color: "var(--color-text)",
                lineHeight: "var(--line-height-tight)",
              }}
            >
              مشخصات پروژه‌تان را بفرستید تا مناسب‌ترین راهکار را بررسی کنیم.
            </h2>

            <p
              className="mx-auto mt-5 max-w-2xl text-base"
              style={{
                color: "var(--color-text-muted)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              نوع محصول، تعداد، ابعاد، فایل طرح و هر اطلاعاتی که درباره پروژه
              دارید را ارسال کنید.
            </p>

            <div className="mt-8 flex justify-center">
              <Button href="/استعلام-قیمت" size="lg">
                استعلام قیمت
                <IconArrow direction="left" size={16} />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
