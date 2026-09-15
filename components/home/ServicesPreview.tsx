import Link from "next/link";

import { services } from "@/content/services";
import { toPersianDigits } from "@/lib/format";
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
      className="py-16 sm:py-24 lg:py-28"
      style={{ backgroundColor: "var(--color-soft-green)" }}
      aria-labelledby="services-preview-heading"
    >
      <div className="container-iric">
        <div className="max-w-3xl">
          <p
            className="text-sm font-medium"
            style={{ color: "var(--color-dark-green)" }}
          >
            خدمات آیریک
          </p>

          <h2
            id="services-preview-heading"
            className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl"
            style={{
              color: "var(--color-dark-green)",
              lineHeight: "1.45",
            }}
          >
            چاپ را متناسب با محصولتان انتخاب کنید.
          </h2>

          <p
            className="mt-4 max-w-2xl text-base sm:text-lg"
            style={{
              color: "var(--color-dark-green)",
              opacity: 0.72,
              lineHeight: "2",
            }}
          >
            از روش‌های تخصصی چاپ روی پوشاک و بگ تا متریال‌های مختلف، خدمات آیریک
            برای نیازهای واقعی برندها و کسب‌وکارها طراحی شده است.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:mt-12">
          {featuredServices.map((service, index) => {
            if (!service) return null;

            return (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group relative min-h-[320px] overflow-hidden rounded-2xl sm:min-h-[400px]"
              >
                <img
                  src={service.image}
                  alt={`${service.title} | آیریک`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />

                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                />

                <div className="relative flex h-full flex-col justify-between p-6 sm:p-8 lg:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "var(--color-white)",
                        opacity: 0.72,
                      }}
                    >
                      {toPersianDigits(
                        String(index + 1).padStart(2, "0")
                      )}
                    </span>

                    <span
                      className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                      style={{ color: "var(--color-white)" }}
                    >
                      <IconArrow direction="up-left" size={26} />
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-bold sm:text-3xl lg:text-4xl"
                      style={{
                        color: "var(--color-white)",
                        lineHeight: "1.45",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="mt-3 max-w-lg text-sm sm:text-base"
                      style={{
                        color: "var(--color-white)",
                        opacity: 0.78,
                        lineHeight: "2",
                      }}
                    >
                      {service.shortDescription}
                    </p>

                    <div
                      className="mt-6 h-px w-14 transition-all duration-500 group-hover:w-28"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 border-t pt-8 lg:mt-18 lg:pt-9">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3
              className="text-lg font-bold sm:text-xl"
              style={{ color: "var(--color-dark-green)" }}
            >
              سایر خدمات
            </h3>

            <p
              className="text-sm"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.62,
              }}
            >
              خدمات تخصصی‌تر برای نیازهای متفاوت
            </p>
          </div>

          <div className="grid border-t sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group flex min-h-20 items-center justify-between gap-5 border-b py-5 transition-all duration-300 hover:px-2"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: "var(--color-dark-green)",
                      opacity: 0.42,
                    }}
                  >
                    {toPersianDigits(
                      String(index + 3).padStart(2, "0")
                    )}
                  </span>

                  <span
                    className="text-sm font-medium sm:text-base"
                    style={{ color: "var(--color-dark-green)" }}
                  >
                    {service.title}
                  </span>
                </div>

                <span
                  className="shrink-0 opacity-40 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  style={{ color: "var(--color-dark-green)" }}
                >
                  <IconArrow direction="up-left" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-9 flex justify-center lg:mt-11">
          <Link
            href="/خدمات"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--color-dark-green)",
              color: "var(--color-white)",
            }}
          >
            مشاهده همه خدمات
            <IconArrow direction="left" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
