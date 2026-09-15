import Link from "next/link";

import IconArrow from "@/components/ui/IconArrow";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-white)",
        color: "var(--color-dark-green)",
      }}
    >
      <div className="container-iric w-full pb-16 pt-6 sm:pb-24 sm:pt-8 lg:pb-28 lg:pt-10">
        <div className="max-w-6xl">
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span
              className="h-px w-8 sm:w-10"
              style={{ backgroundColor: "var(--color-primary)" }}
            />

            <p
              className="text-xs font-medium sm:text-sm"
              style={{ color: "var(--color-dark-green)" }}
            >
              آیریک — چاپ برای برندهایی که به جزئیات اهمیت می‌دهند
            </p>
          </div>

          <h1
            className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
            style={{
              color: "var(--color-dark-green)",
              lineHeight: "1.42",
            }}
          >
            چاپ فقط روی محصول نیست؛
            <br />
            <span style={{ color: "var(--color-primary)" }}>
              بخشی از تجربه برند شماست.
            </span>
          </h1>

          <div className="mt-5 max-w-2xl sm:mt-6">
            <p
              className="text-base sm:text-lg"
              style={{
                color: "var(--color-dark-green)",
                opacity: 0.72,
                lineHeight: "2",
              }}
            >
              از چاپ سیلک و DTF روی پوشاک و بگ تا چاپ روی بسته‌بندی و محصولات
              تبلیغاتی، آیریک کنار شماست تا متناسب با محصول، تیراژ، متریال و
              بودجه، راهکار چاپی درست را انتخاب و با دقت اجرا کنید.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/استعلام-قیمت"
              className="inline-flex min-h-14 items-center justify-center rounded-md px-7 text-sm font-bold transition-all hover:-translate-y-0.5 hover:opacity-90 sm:text-base"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-white)",
              }}
            >
              استعلام قیمت
            </Link>

            <Link
              href="/نمونه-کارها"
              className="inline-flex min-h-14 items-center justify-center rounded-md border px-7 text-sm font-bold transition-all hover:-translate-y-0.5 sm:text-base"
              style={{
                borderColor: "var(--color-dark-green)",
                color: "var(--color-dark-green)",
              }}
            >
              مشاهده نمونه‌کارها
            </Link>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src="/images/hero.jpg"
                alt="نمونه‌ای از خدمات چاپ آیریک"
                className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-[400px] lg:h-[500px]"
              />

              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(2, 20, 8, 0.62)" }}
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <p
                    className="text-xs font-medium uppercase tracking-[0.12em] sm:text-sm"
                    style={{
                      color: "var(--color-white)",
                      opacity: 0.82,
                    }}
                  >
                    Printing solutions for brands &amp; businesses
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base">
                    {[
                      "چاپ سیلک",
                      "چاپ DTF",
                      "بسته‌بندی",
                      "پوشاک",
                      "محصولات تبلیغاتی",
                    ].map((item, index) => (
                      <span key={item} className="flex items-center gap-3">
                        <span style={{ color: "var(--color-white)" }}>
                          {item}
                        </span>

                        {index < 4 && (
                          <span
                            aria-hidden="true"
                            style={{ color: "var(--color-primary)" }}
                          >
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <IconArrow
                    direction="up-left"
                    size={24}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--color-soft-green)",
          opacity: 0.7,
        }}
      />
    </section>
  );
}
