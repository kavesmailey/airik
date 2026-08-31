import Link from "next/link";

export default function Consultation() {
  return (
    <section
      className="py-28 sm:py-32 lg:py-40"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-iric">
        <div
          className="grid overflow-hidden rounded-lg lg:grid-cols-12"
          style={{
            backgroundColor: "var(--color-text)",
          }}
        >
          {/* Content */}
          <div className="px-7 py-12 sm:px-10 sm:py-16 lg:col-span-8 lg:px-16 lg:py-20">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-10"
                style={{ backgroundColor: "var(--color-accent)" }}
              />

              <p
                className="text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                مشاوره قبل از سفارش
              </p>
            </div>

            <h2
              className="mt-7 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{
                color: "var(--color-bg)",
                lineHeight: "1.25",
              }}
            >
              نمی‌دانید سیلک بهتر است
              <br />
              یا DTF؟
            </h2>

            <p
              className="mt-7 max-w-2xl text-base sm:text-lg"
              style={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: "2",
              }}
            >
              لازم نیست قبل از تماس با ما همه چیز را درباره چاپ بدانید. کافی
              است محصول، طرح، تعداد و زمان موردنظرتان را بگویید. ما گزینه‌های
              مناسب را بررسی می‌کنیم و بر اساس شرایط پروژه، روش چاپ مناسب را
              پیشنهاد می‌دهیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-9 inline-flex min-h-14 items-center justify-center rounded-md px-7 text-base font-bold transition-opacity hover:opacity-85"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-accent-contrast)",
              }}
            >
              مشاوره قبل از سفارش
            </Link>
          </div>

          {/* Side information */}
          <div
            className="flex flex-col justify-between border-t px-7 py-10 sm:px-10 sm:py-12 lg:col-span-4 lg:border-r lg:border-t-0 lg:px-10 lg:py-12"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            <div>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                برای شروع فقط این موارد را آماده کنید
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  "نوع محصول",
                  "تعداد تقریبی",
                  "طرح یا فایل طراحی",
                  "زمان موردنظر برای تحویل",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-sm"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p
              className="mt-12 text-xs"
              style={{
                color: "rgba(255,255,255,0.35)",
                lineHeight: "1.8",
              }}
            >
              اگر هنوز همه اطلاعات را ندارید، مشکلی نیست. برای شروع، همان
              اطلاعاتی که در اختیار دارید کافی است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
