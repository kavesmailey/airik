import Link from "next/link";

import { services } from "@/content/services";

import IconArrow from "@/components/ui/IconArrow";

const featuredSlugs = ["چاپ-سیلک", "چاپ-dtf"];

export default function ServicesPreview() {
  const featuredServices = featuredSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);

  const otherServices = services.filter(
    (service) => !featuredSlugs.includes(service.slug)
  );

  return (
    <section
      className="py-24 sm:py-32 lg:py-40"
      style={{
        backgroundColor: "var(--color-soft-green)",
      }}
      aria-labelledby="services-preview-heading"
    >
      <div className="container-iric">
        {/* Section header */}
        <div className="max-w-3xl">
          <p
            className="text-sm font-medium"
            style={{ color: "var(--color-dark-green)" }}
          >
            خدمات آیریک
          </p>

          <h2
            id="services-preview-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{
              color: "var(--color-dark-green)",
              lineHeight: "var(--line-height-tight)",
            }}
          >
            چاپ را متناسب با محصولتان انتخاب کنید.
          </h2>

          <p
            className="mt-6 max-w-2xl text-base sm:text-lg"
            style={{
              color: "var(--color-dark-green)",
              opacity: 0.72,
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            از روش‌های تخصصی چاپ روی پوشاک و بگ تا متریال‌های مختلف، خدمات آیریک
            برای نیازهای واقعی برندها و کسب‌وکارها طراحی شده است.
          </p>
        </div>

        {/* Featured services */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20">
          {featuredServices.map((service, index) => {
            if (!service) return null;

            return (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10 lg:p-12"
                style={{
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-dark-green)",
                }}
              >
                <div className="flex min-h-[300px] flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-medium"
                        style={{
                          color: "var(--color-dark-green)",
                          opacity: 0.5,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                        style={{ color: "var(--color-primary)" }}
                        aria-hidden="true"
                      >
                        <IconArrow direction="up-left" size={22} />
                      </span>
                    </div>

                    <h3
                      className="mt-14 text-3xl font-bold sm:text-4xl"
                      style={{
                        color: "var(--color-dark-green)",
                        lineHeight: "var(--line-height-tight)",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="mt-5 max-w-lg text-sm sm:text-base"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.68,
                        lineHeight: "var(--line-height-relaxed)",
                      }}
                    >
                      {service.shortDescription}
                    </p>
                  </div>

                  <div
                    className="mt-10 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{
                      backgroundColor: "var(--color-primary)",
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Other services */}
        <div className="mt-20 border-t pt-10 lg:mt-28 lg:pt-12">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3
              className="text-xl font-bold sm:text-2xl"
              style={{ color: "var(--color-dark-green)" }}
            >
              سایر خدمات
            </h3>

            <span
              className="text-sm"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.55,
              }}
            >
              {otherServices.length} خدمت تخصصی دیگر
            </span>
          </div>

          <div className="grid border-t sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group flex min-h-20 items-center justify-between gap-4 border-b py-5 transition-colors duration-200 sm:px-4 lg:min-h-24"
                style={{
                  borderColor: "rgba(2, 47, 18, 0.12)",
                }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.38,
                    }}
                  >
                    {String(index + 3).padStart(2, "0")}
                  </span>

                  <span
                    className="text-sm font-medium sm:text-base"
                    style={{
                      color: "var(--color-dark-green)",
                    }}
                  >
                    {service.title}
                  </span>
                </div>

                <span
                  className="shrink-0 opacity-30 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
                  style={{
                    color: "var(--color-dark-green)",
                  }}
                  aria-hidden="true"
                >
                  <IconArrow direction="up-left" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* All services CTA */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <Link
            href="/خدمات"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--color-dark-green)",
              color: "var(--color-white)",
            }}
          >
            مشاهده همه خدمات

            <span
              className="transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            >
              <IconArrow direction="left" size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
