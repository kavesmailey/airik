import Link from "next/link";
import { services } from "@/content/services";

const featuredServiceSlugs = [
  "چاپ-سیلک",
  "چاپ-dtf",
  "چاپ-روی-لباس",
  "چاپ-بگ",
  "چاپ-کارتن",
  "چاپ-جعبه-پیتزا",
];

export default function ServicesPreview() {
  const featuredServices = featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
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
                خدمات چاپ
              </p>
            </div>

            <h2
              className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              style={{
                color: "var(--color-text)",
                lineHeight: "1.2",
              }}
            >
              برای هر محصول،
              <br />
              <span style={{ color: "var(--color-text-muted)" }}>
                یک راه مناسب برای چاپ وجود دارد.
              </span>
            </h2>

            <p
              className="mt-7 max-w-2xl text-base sm:text-lg"
              style={{
                color: "var(--color-text-muted)",
                lineHeight: "2",
              }}
            >
              آیریک مجموعه‌ای از خدمات چاپ برای پوشاک، بسته‌بندی، محصولات
              تبلیغاتی و کسب‌وکارها ارائه می‌کند. اگر هنوز نمی‌دانید کدام روش
              برای سفارش شما مناسب‌تر است، قبل از ثبت سفارش با ما مشورت کنید.
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

        {/* Services Grid */}
        <div
          className="mt-20 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
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

        {/* Bottom note */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="max-w-xl text-sm"
            style={{
              color: "var(--color-text-faint)",
              lineHeight: "1.9",
            }}
          >
            روش چاپ مناسب به نوع محصول، جنس سطح، پیچیدگی طرح، تعداد و نتیجه
            موردنظر شما بستگی دارد.
          </p>

          <Link
            href="/استعلام-قیمت"
            className="shrink-0 text-sm font-bold transition-opacity hover:opacity-60"
            style={{ color: "var(--color-text)" }}
          >
            برای انتخاب روش مناسب با ما صحبت کنید →
          </Link>
        </div>
      </div>
    </section>
  );
}
