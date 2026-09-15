import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        backgroundColor: "var(--color-white)",
        color: "var(--color-dark-green)",
      }}
    >
      <div className="container-iric w-full pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-44 lg:pb-36">
        <div className="max-w-6xl">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "var(--color-primary)" }}
            />

            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-dark-green)" }}
            >
              آیریک — چاپ برای برندهایی که به جزئیات اهمیت می‌دهند
            </p>
          </div>

          {/* Main heading */}
          <h1
            className="max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              color: "var(--color-dark-green)",
              lineHeight: "1.08",
            }}
          >
            چاپ فقط روی محصول نیست؛
            <br />
            <span style={{ color: "var(--color-primary)" }}>
              بخشی از تجربه برند شماست.
            </span>
          </h1>

          {/* Description */}
          <div className="mt-10 max-w-2xl">
            <p
              className="text-lg sm:text-xl"
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

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/استعلام-قیمت"
              className="inline-flex min-h-14 items-center justify-center rounded-md px-7 text-base font-bold transition-all hover:-translate-y-0.5 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-white)",
              }}
            >
              استعلام قیمت
            </Link>

            <Link
              href="/نمونه-کارها"
              className="inline-flex min-h-14 items-center justify-center rounded-md border px-7 text-base font-bold transition-all hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-dark-green)",
                color: "var(--color-dark-green)",
              }}
            >
              مشاهده نمونه‌کارها
            </Link>
          </div>

          {/* Bottom information */}
          <div
            className="mt-24 border-t pt-7 sm:mt-32"
            style={{
              borderColor: "var(--color-dark-green)",
              opacity: 0.18,
            }}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p
                className="text-xs font-medium uppercase tracking-wide"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.75,
                }}
              >
                Printing solutions for brands & businesses
              </p>

              <div
                className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.72,
                }}
              >
                <span>چاپ سیلک</span>
                <span>·</span>
                <span>چاپ DTF</span>
                <span>·</span>
                <span>بسته‌بندی</span>
                <span>·</span>
                <span>پوشاک</span>
                <span>·</span>
                <span>محصولات تبلیغاتی</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle decorative element */}
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
