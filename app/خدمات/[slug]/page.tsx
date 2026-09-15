import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

import Accordion from "@/components/ui/Accordion";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import JsonLd from "@/components/seo/JsonLd";

type PageProps = {
  params: {
    slug: string;
  };
};

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

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

  const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const canonicalUrl = `${siteUrl}/خدمات/${service.slug}`;
  const imageUrl = service.image
    ? service.image.startsWith("http")
      ? service.image
      : `${siteUrl}${service.image}`
    : undefined;

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
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 900,
              alt: service.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: service.meta.title,
      description: service.meta.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const pageUrl = `${siteUrl}/خدمات/${service.slug}`;

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
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: "کرج",
      addressCountry: "IR",
    },
    inLanguage: "fa-IR",
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
        item: `${siteUrl}/خدمات`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: pageUrl,
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
      <JsonLd type="service" data={serviceSchema} />
      <JsonLd type="breadcrumb" data={breadcrumbSchema} />

      {faqSchema && <JsonLd type="faq" data={faqSchema} />}

      <main dir="rtl">
        {/* HERO */}
        <section
          className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
          style={{
            backgroundColor: "var(--color-white)",
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

            <div className="mt-10 grid items-end gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-7">
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
                    className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                    style={{
                      color: "var(--color-dark-green)",
                      lineHeight: "var(--line-height-tight)",
                    }}
                  >
                    {service.title}
                  </h1>

                  <p
                    className="mt-7 max-w-3xl text-lg sm:text-xl"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.7,
                      lineHeight: "var(--line-height-relaxed)",
                    }}
                  >
                    {service.fullDescription}
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Button href="/استعلام-قیمت" size="lg" variant="primary">
                      استعلام قیمت
                      <IconArrow direction="left" size={16} />
                    </Button>

                    {service.faqs.length > 0 && (
                      <Button
                        href="#faq"
                        size="lg"
                        variant="outline"
                      >
                        سوالات متداول
                      </Button>
                    )}
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={100}>
                  {service.image ? (
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={`نمونه ${service.title} در آیریک`}
                        className="h-full w-full object-cover"
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

                <h2
                  className="mt-4 text-xl font-bold sm:text-2xl"
                  style={{
                    color: "var(--color-dark-green)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {service.shortDescription}
                </h2>

                <p
                  className="mt-4 text-base"
                  style={{
                    color: "var(--color-dark-green)",
                    opacity: 0.68,
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  اگر درباره انتخاب روش چاپ برای این نوع سفارش مطمئن نیستید،
                  مشخصات محصول، طرح و تیراژ را برای آیریک ارسال کنید تا روش
                  مناسب بررسی شود.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section
          className="py-24 sm:py-32"
          style={{
            backgroundColor: "var(--color-white)",
          }}
        >
          <div className="container-iric">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <Reveal>
                  <SectionHeading
                    eyebrow="درباره این خدمت"
                    title={`${service.title} چیست؟`}
                  />
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                <Reveal delay={100}>
                  <p
                    className="max-w-3xl text-lg sm:text-xl"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.7,
                      lineHeight: "var(--line-height-relaxed)",
                    }}
                  >
                    {service.aboutText}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          className="py-24 sm:py-32"
          style={{
            backgroundColor: "var(--color-soft-green)",
          }}
        >
          <div className="container-iric">
            <Reveal>
              <SectionHeading
                eyebrow="مزایا"
                title={`چرا ${service.title}؟`}
                description="انتخاب روش مناسب چاپ باید بر اساس نوع محصول، طرح، متریال و هدف پروژه انجام شود."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((benefit, index) => (
                <Reveal key={benefit} delay={index * 40}>
                  <div
                    className="h-full rounded-2xl border p-7 sm:p-8"
                    style={{
                      borderColor: "rgba(2, 47, 18, 0.14)",
                      backgroundColor: "var(--color-white)",
                    }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: "var(--color-primary)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="mt-6 text-lg font-bold"
                      style={{
                        color: "var(--color-dark-green)",
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

        {/* SUITABLE FOR */}
        <section
          className="py-24 sm:py-32"
          style={{
            backgroundColor: "var(--color-white)",
          }}
        >
          <div className="container-iric">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <Reveal>
                  <SectionHeading
                    eyebrow="کاربرد"
                    title="برای چه پروژه‌هایی مناسب است؟"
                  />
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-x-8 border-t md:grid-cols-2">
                  {service.suitableFor.map((item, index) => (
                    <Reveal key={item} delay={index * 30}>
                      <div
                        className="flex gap-5 border-b py-6"
                        style={{
                          borderColor: "rgba(2, 47, 18, 0.14)",
                        }}
                      >
                        <span
                          className="text-xs"
                          style={{
                            color: "var(--color-dark-green)",
                            opacity: 0.4,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className="font-medium"
                          style={{
                            color: "var(--color-dark-green)",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section
          className="py-24 sm:py-32"
          style={{
            backgroundColor: "var(--color-soft-green)",
          }}
        >
          <div className="container-iric">
            <Reveal>
              <SectionHeading
                eyebrow="موارد استفاده"
                title={`${service.title} در چه محصولاتی استفاده می‌شود؟`}
              />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.applications.map((application, index) => (
                <Reveal key={application} delay={index * 35}>
                  <div
                    className="rounded-2xl border p-6"
                    style={{
                      borderColor: "rgba(2, 47, 18, 0.14)",
                      backgroundColor: "var(--color-white)",
                    }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: "var(--color-primary)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="mt-5 font-semibold"
                      style={{
                        color: "var(--color-dark-green)",
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

        {/* KEY CONSIDERATIONS */}
        <section
          className="py-24 sm:py-32"
          style={{
            backgroundColor: "var(--color-white)",
          }}
        >
          <div className="container-iric">
            <Reveal>
              <SectionHeading
                eyebrow="نکات مهم"
                title="قبل از سفارش چه چیزهایی مهم است؟"
                description="انتخاب روش چاپ فقط به ظاهر طرح محدود نمی‌شود. مشخصات تولید روی نتیجه نهایی تأثیر دارند."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {service.keyConsiderations.map((item, index) => (
                <Reveal key={item.label} delay={index * 50}>
                  <div
                    className="h-full rounded-2xl border p-7 sm:p-8"
                    style={{
                      borderColor: "rgba(2, 47, 18, 0.14)",
                      backgroundColor: "var(--color-soft-green)",
                    }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: "var(--color-primary)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="mt-5 text-lg font-bold"
                      style={{
                        color: "var(--color-dark-green)",
                      }}
                    >
                      {item.label}
                    </h3>

                    <p
                      className="mt-3 text-sm"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.65,
                        lineHeight: "var(--line-height-relaxed)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRINTING METHODS */}
        {service.printingMethods.length > 0 && (
          <section
            className="py-24 sm:py-32"
            style={{
              backgroundColor: "var(--color-soft-green)",
            }}
          >
            <div className="container-iric">
              <Reveal>
                <SectionHeading
                  eyebrow="روش اجرا"
                  title="روش چاپ"
                />
              </Reveal>

              <div className="mt-12 grid gap-4">
                {service.printingMethods.map((method, index) => (
                  <Reveal key={method.name} delay={index * 50}>
                    <div
                      className="grid gap-6 rounded-2xl border p-7 md:grid-cols-[70px_0.8fr_1.2fr] md:p-8"
                      style={{
                        borderColor: "rgba(2, 47, 18, 0.14)",
                        backgroundColor: "var(--color-white)",
                      }}
                    >
                      <span
                        className="text-xs font-bold"
                        style={{
                          color: "var(--color-primary)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className="font-bold"
                        style={{
                          color: "var(--color-dark-green)",
                        }}
                      >
                        {method.name}
                      </h3>

                      <div>
                        <p
                          className="text-sm"
                          style={{
                            color: "var(--color-dark-green)",
                            opacity: 0.68,
                            lineHeight: "var(--line-height-relaxed)",
                          }}
                        >
                          {method.description}
                        </p>

                        <p
                          className="mt-4 text-sm font-medium"
                          style={{
                            color: "var(--color-dark-green)",
                          }}
                        >
                          مناسب برای:{" "}
                          <span
                            style={{
                              opacity: 0.68,
                            }}
                          >
                            {method.suitableFor}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PROCESS */}
        <section
          className="py-24 sm:py-32"
          style={{
            backgroundColor: "var(--color-white)",
          }}
        >
          <div className="container-iric">
            <Reveal>
              <SectionHeading
                eyebrow="فرآیند"
                title="فرآیند اجرای سفارش"
                description="از دریافت مشخصات تا کنترل کیفیت، مراحل سفارش بر اساس نوع خدمت و محصول انجام می‌شود."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.processSteps.map((step, index) => (
                <Reveal key={step} delay={index * 35}>
                  <div
                    className="h-full rounded-2xl border p-7"
                    style={{
                      borderColor: "rgba(2, 47, 18, 0.14)",
                      backgroundColor: "var(--color-soft-green)",
                    }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: "var(--color-primary)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="mt-5 font-medium"
                      style={{
                        color: "var(--color-dark-green)",
                        lineHeight: "var(--line-height-relaxed)",
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

        {/* FAQ */}
        {service.faqs.length > 0 && (
          <section
            id="faq"
            className="scroll-mt-24 py-24 sm:py-32"
            style={{
              backgroundColor: "var(--color-soft-green)",
            }}
          >
            <div className="container-iric">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-4">
                  <Reveal>
                    <SectionHeading
                      eyebrow="سوالات متداول"
                      title={`سوالات درباره ${service.title}`}
                    />
                  </Reveal>
                </div>

                <div className="lg:col-span-8">
                  <Reveal delay={100}>
                    <Accordion
                      items={service.faqs.map((faq, index) => ({
                        id: `${service.slug}-faq-${index}`,
                        title: faq.question,
                        content: faq.answer,
                      }))}
                      tone="light"
                    />
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* RELATED SERVICES */}
        {relatedServices.length > 0 && (
          <section
            className="py-24 sm:py-32"
            style={{
              backgroundColor: "var(--color-white)",
            }}
          >
            <div className="container-iric">
              <Reveal>
                <SectionHeading
                  eyebrow="خدمات مرتبط"
                  title="ممکن است این خدمات هم برای شما مناسب باشند"
                />
              </Reveal>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((relatedService, index) => (
                  <Reveal key={relatedService.slug} delay={index * 40}>
                    <Link
                      href={`/خدمات/${relatedService.slug}`}
                      className="group block h-full rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1"
                      style={{
                        borderColor: "rgba(2, 47, 18, 0.14)",
                        backgroundColor: "var(--color-white)",
                        textDecoration: "none",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs"
                          style={{
                            color: "var(--color-dark-green)",
                            opacity: 0.4,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className="transition-transform duration-300 group-hover:-translate-x-1"
                          style={{
                            color: "var(--color-primary)",
                          }}
                          aria-hidden="true"
                        >
                          <IconArrow direction="left" size={18} />
                        </span>
                      </div>

                      <h3
                        className="mt-8 text-lg font-bold"
                        style={{
                          color: "var(--color-dark-green)",
                        }}
                      >
                        {relatedService.title}
                      </h3>

                      <p
                        className="mt-3 text-sm"
                        style={{
                          color: "var(--color-dark-green)",
                          opacity: 0.64,
                          lineHeight: "var(--line-height-relaxed)",
                        }}
                      >
                        {relatedService.shortDescription}
                      </p>

                      <div
                        className="mt-7 text-sm font-medium"
                        style={{
                          color: "var(--color-dark-green)",
                        }}
                      >
                        مشاهده خدمت
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        <section
          className="py-28 sm:py-36 lg:py-44"
          style={{
            backgroundColor: "var(--color-primary)",
          }}
        >
          <div className="container-iric">
            <Reveal>
              <div className="mx-auto max-w-4xl text-center">
                <p
                  className="text-xs font-bold tracking-[0.18em]"
                  style={{
                    color: "var(--color-white)",
                  }}
                >
                  آماده شروع پروژه هستید؟
                </p>

                <h2
                  className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
                  style={{
                    color: "var(--color-dark-green)",
                    lineHeight: "var(--line-height-tight)",
                  }}
                >
                  مشخصات پروژه‌تان را بفرستید تا مناسب‌ترین راهکار را بررسی
                  کنیم.
                </h2>

                <p
                  className="mx-auto mt-6 max-w-2xl text-base sm:text-lg"
                  style={{
                    color: "var(--color-white)",
                    opacity: 0.86,
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  نوع محصول، تعداد، ابعاد، فایل طرح و هر اطلاعاتی که درباره
                  پروژه دارید را ارسال کنید.
                </p>

                <div className="mt-10 flex justify-center">
                  <Button
                    href="/استعلام-قیمت"
                    size="lg"
                    variant="outline"
                    className="border-[#022F12] text-[#022F12] hover:bg-[#022F12] hover:text-[#FFFFFF]"
                  >
                    استعلام قیمت
                    <IconArrow direction="left" size={16} />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
