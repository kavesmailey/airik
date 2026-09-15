import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        color: "#021408",
      }}
    >
      <div className="container-iric">
        <div className="grid min-h-screen items-center gap-12 py-28 sm:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-36">
          {/* Content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span
                className="h-px w-10"
                style={{ backgroundColor: "#8BC53D" }}
              />

              <p
                className="text-sm font-medium"
                style={{ color: "#022F12" }}
              >
                آیریک — چاپ تخصصی برای برندها
              </p>
            </div>

            {/* Main heading */}
            <h1
              className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
              style={{
                color: "#021408",
                lineHeight: "1.08",
              }}
            >
              چاپ فقط روی محصول نیست؛
              <br />
              <span style={{ color: "#8BC53D" }}>
                بخشی از تجربه برند شماست.
              </span>
            </h1>

            {/* Description */}
            <div className="mt-8 max-w-2xl">
              <p
                className="text-base sm:text-lg"
                style={{
                  color: "#022F12",
                  lineHeight: "2",
                }}
              >
                از چاپ سیلک و DTF تا چاپ روی لباس، بگ، پارچه، بسته‌بندی و
                سطوح مختلف؛ آیریک راهکار چاپی متناسب با نیاز برند شما را
                انتخاب و با دقت اجرا می‌کند.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex min-h-14 items-center justify-center rounded-md px-7 text-base font-bold transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#8BC53D",
                  color: "#021408",
                }}
              >
                استعلام قیمت
              </Link>

              <Link
                href="/نمونه-کارها"
                className="inline-flex min-h-14 items-center justify-center rounded-md border px-7 text-base font-bold transition-colors hover:bg-[#E4F0CC]"
                style={{
                  borderColor: "#022F12",
                  color: "#022F12",
                }}
              >
                مشاهده نمونه‌کارها
              </Link>
            </div>

            {/* Bottom information */}
            <div
              className="mt-20 border-t pt-6 sm:mt-28"
              style={{ borderColor: "#E4F0CC" }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: "#022F12" }}
                >
                  Printing solutions for brands & businesses
                </p>

                <div
                  className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
                  style={{ color: "#022F12" }}
                >
                  <span>چاپ سیلک</span>
                  <span>·</span>
                  <span>چاپ DTF</span>
                  <span>·</span>
                  <span>چاپ روی لباس</span>
                  <span>·</span>
                  <span>چاپ روی بگ</span>
                  <span>·</span>
                  <span>چاپ روی پارچه</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative z-10">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{
                backgroundColor: "#E4F0CC",
              }}
            >
              <div className="aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">
                <img
                  src="/images/hero.jpg"
                  alt="نمونه اجرای چاپ آیریک"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Image label */}
              <div
                className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.88)",
                  color: "#021408",
                }}
              >
                <span className="text-sm font-semibold">
                  چاپ تخصصی آیریک
                </span>

                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "#8BC53D" }}
                />
              </div>
            </div>

            {/* Decorative shape */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full"
              style={{
                backgroundColor: "#E4F0CC",
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </div>

      {/* Large subtle brand field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full opacity-70"
        style={{ backgroundColor: "#E4F0CC" }}
      />
    </section>
  );
}
