import type { Metadata } from "next";

import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

import IconArrow from "@/components/ui/IconArrow";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/نمونه-کارها`;

export const metadata: Metadata = {
  title: "نمونه‌کارهای چاپ آیریک | پروژه‌های چاپ برندها",
  description:
    "نمونه‌ای از پروژه‌های چاپ آیریک برای برندها و کسب‌وکارها؛ از چاپ روی پوشاک و بگ تا بسته‌بندی و محصولات مختلف.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "نمونه‌کارهای چاپ آیریک",
    description:
      "بخشی از پروژه‌های چاپ آیریک برای برندها و کسب‌وکارها.",
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
            alt: "نمونه‌کارهای آیریک",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "نمونه‌کارهای چاپ آیریک",
    description:
      "بخشی از پروژه‌های چاپ آیریک برای برندها و کسب‌وکارها.",
  },
};

export default function ProjectsPage() {
  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "نمونه‌کارهای آیریک",
    description: "پروژه‌های چاپ آیریک برای برندها و کسب‌وکارها.",
    url: canonicalUrl,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.description,
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
        name: "نمونه‌کارها",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main dir="rtl">
      <JsonLd type="service" data={projectListSchema} />
      <JsonLd type="breadcrumb" data={breadcrumbSchema} />

      {/* HERO */}
      <section
        className="pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32"
        style={{
          backgroundColor: "var(--color-white)",
        }}
      >
        <div className="container-iric">
          <div className="max-w-5xl">
            <Reveal>
              <p
                className="text-sm font-medium"
                style={{
                  color: "var(--color-primary)",
                }}
              >
                نمونه‌کارها
              </p>

              <h1
                className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "var(--line-height-tight)",
                }}
              >
                بخشی از پروژه‌هایی که
                <br />
                برای برندها اجرا کرده‌ایم.
              </h1>

              <p
                className="mt-8 max-w-2xl text-lg sm:text-xl"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.68,
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                از انتخاب روش چاپ و متریال تا اجرای نهایی، هر پروژه بر اساس
                نیاز واقعی محصول و برند بررسی و اجرا می‌شود.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        className="py-24 sm:py-32 lg:py-40"
        style={{
          backgroundColor: "var(--color-soft-green)",
        }}
        aria-labelledby="projects-heading"
      >
        <div className="container-iric">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "var(--color-dark-green)",
                  }}
                >
                  پروژه‌ها
                </p>

                <h2
                  id="projects-heading"
                  className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
                  style={{
                    color: "var(--color-dark-green)",
                    lineHeight: "var(--line-height-tight)",
                  }}
                >
                  چاپ در دنیای واقعی.
                </h2>
              </div>

              <span
                className="text-sm"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.55,
                }}
              >
                {projects.length} پروژه
              </span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:mt-20 lg:gap-x-10 lg:gap-y-20">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 80}>
                <article className="group">
                  <div
                    className="block"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <div className="overflow-hidden">
                      <MediaPlaceholder
                        src={project.image}
                        alt={project.title}
                        aspectRatio="4/3"
                        label={project.title}
                        tone="dark"
                        className="transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      />
                    </div>

                    <div className="mt-6">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p
                            className="text-xs"
                            style={{
                              color: "var(--color-dark-green)",
                              opacity: 0.48,
                            }}
                          >
                            {String(index + 1).padStart(2, "0")} ·{" "}
                            {project.category}
                          </p>

                          <h3
                            className="mt-3 text-xl font-bold sm:text-2xl"
                            style={{
                              color: "var(--color-dark-green)",
                            }}
                          >
                            {project.title}
                          </h3>

                          <p
                            className="mt-3 max-w-xl text-sm sm:text-base"
                            style={{
                              color: "var(--color-dark-green)",
                              opacity: 0.64,
                              lineHeight: "var(--line-height-relaxed)",
                            }}
                          >
                            {project.description}
                          </p>
                        </div>

                        <span
                          className="mt-1 shrink-0 opacity-30 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
                          style={{
                            color: "var(--color-dark-green)",
                          }}
                          aria-hidden="true"
                        >
                          <IconArrow direction="up-left" size={22} />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS CTA */}
      <section
        className="py-24 sm:py-32 lg:py-40"
        style={{
          backgroundColor: "var(--color-white)",
        }}
      >
        <div className="container-iric">
          <div
            className="rounded-3xl p-8 sm:p-12 lg:p-16"
            style={{
              backgroundColor: "var(--color-dark-green)",
            }}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
              <Reveal>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: "var(--color-primary)",
                    }}
                  >
                    پروژه شما
                  </p>

                  <h2
                    className="mt-5 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl"
                    style={{
                      color: "var(--color-white)",
                      lineHeight: "var(--line-height-tight)",
                    }}
                  >
                    پروژه بعدی می‌تواند همین‌جا باشد.
                  </h2>

                  <p
                    className="mt-6 max-w-2xl text-base sm:text-lg"
                    style={{
                      color: "var(--color-white)",
                      opacity: 0.7,
                      lineHeight: "var(--line-height-relaxed)",
                    }}
                  >
                    مشخصات محصول و نیاز چاپی‌تان را برای ما بفرستید تا درباره
                    روش مناسب اجرا، زمان و هزینه با شما صحبت کنیم.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <Button
                  href="/استعلام-قیمت"
                  variant="outline"
                  size="lg"
                  className="border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#022F12]"
                >
                  استعلام قیمت
                  <IconArrow direction="left" size={16} />
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
