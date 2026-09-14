import Link from "next/link";
import { services } from "@/content/services";

const FEATURED_SLUGS = ["چاپ-سیلک", "چاپ-dtf"];

export default function ServicesPreview() {
  const featuredServices = FEATURED_SLUGS.map((slug) =>
    services.find((s) => s.slug === slug)
  ).filter((s): s is (typeof services)[number] => Boolean(s));

  const otherServices = services.filter(
    (s) => !FEATURED_SLUGS.includes(s.slug)
  );

  return (
    <>
      {/* ========== Featured Services (فقط سیلک + DTF) ========== */}
      <section
        className="py-28 sm:py-32 lg:py-40"
        style={{ backgroundColor: "var(--color-bg-light)" }}
      >
        <div className="container-iric">
          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-10"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  خدمات اصلی
                </p>
              </div>

              <h2
                className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                style={{
                  color: "var(--color-text)",
                  lineHeight: "1.2",
                }}
              >
                دو روش اصلی
                <br />
                <span style={{ color: "var(--color-text-muted)" }}>
                  چاپ سیلک و چاپ DTF
                </span>
              </h2>

              <p
                className="mt-7 max-w-2xl text-base sm:text-lg"
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "2",
                }}
              >
                آیریک روی دو روش تخصصی تمرکز دارد. بسته به نوع طرح، تیراژ و
                متریال، یکی از این دو روش یا ترکیب آن‌ها انتخاب می‌شود.
              </p>
            </div>

            <Link
              href="/خدمات"
              className="inline-flex shrink-0 items-center gap-3 text-sm font-bold transition-opacity hover:opacity-60"
              style={{ color: "var(--color-text)" }}
            >
              مشاهده همه خدمات
              <span aria-hidden="true">←</span>
            </Link>
          </div>

          {/* Featured Grid – فقط ۲ مورد */}
          <div
            className="mt-20 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="grid md:grid-cols-2">
              {featuredServices.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/خدمات/${service.slug}`}
                  className="group relative border-b py-10 transition-colors sm:py-12 lg:min-h-[310px] lg:px-8 lg:py-12"
                  style={{
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="text-xl transition-transform duration-300 group-hover:-translate-x-1"
                      style={{ color: "var(--color-text-faint)" }}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="mt-14">
                    <h3
                      className="text-xl font-bold sm:text-2xl"
                      style={{
                        color: "var(--color-text)",
                        lineHeight: "1.4",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="mt-4 max-w-sm text-sm sm:text-base"
                      style={{
                        color: "var(--color-text-muted)",
                        lineHeight: "1.9",
                      }}
                    >
                      {service.shortDescription}
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== سایر خدمات آیریک (فقط نام + لینک) ========== */}
      <section
        className="py-20 sm:py-24 lg:py-28"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-10"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                سایر خدمات آیریک
              </p>
            </div>

            <h2
              className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl"
              style={{
                color: "var(--color-text)",
                lineHeight: "1.3",
              }}
            >
              خدمات تخصصی دیگر
            </h2>
          </div>

          {/* لیست ساده – فقط نام + لینک */}
          <div
            className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
            style={{ borderColor: "var(--color-border)" }}
          >
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group flex items-center justify-between border-b py-4 transition-colors"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span
                  className="text-sm font-medium transition-colors group-hover:opacity-70"
                  style={{ color: "var(--color-text)" }}
                >
                  {service.title}
                </span>
                <span
                  className="text-sm opacity-40 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
                  style={{ color: "var(--color-text)" }}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/خدمات"
              className="inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-60"
              style={{ color: "var(--color-text)" }}
            >
              مشاهده تمام خدمات
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
