import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تماس با ما | AIRIK",
  description:
    "برای استعلام قیمت، مشاوره چاپ یا شروع یک پروژه با AIRIK در تماس باشید.",
};

export default function ContactPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              تماس با AIRIK
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              درباره پروژه‌تان
              <br />
              صحبت کنیم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              برای استعلام قیمت، انتخاب روش چاپ، مشاوره یا شروع یک
              پروژه، اطلاعات اولیه را برای ما ارسال کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                راه‌های ارتباطی
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                هرجا که برای
                <br />
                شروع راحت‌ترید.
              </h2>
            </div>

            <div className="border-t border-black/10">
              <a
                href="tel:+982100000000"
                className="group block border-b border-black/10 py-8 transition-opacity hover:opacity-60 md:py-10"
              >
                <p className="mb-3 text-xs text-black/40">
                  تلفن
                </p>

                <div className="flex items-center justify-between gap-8">
                  <span className="text-xl font-medium">
                    ۰۲۱-۰۰۰۰۰۰۰۰
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform group-hover:-translate-x-1"
                  >
                    ↗
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@airik.ir"
                className="group block border-b border-black/10 py-8 transition-opacity hover:opacity-60 md:py-10"
              >
                <p className="mb-3 text-xs text-black/40">
                  ایمیل
                </p>

                <div className="flex items-center justify-between gap-8">
                  <span className="text-xl font-medium" dir="ltr">
                    info@airik.ir
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform group-hover:-translate-x-1"
                  >
                    ↗
                  </span>
                </div>
              </a>

              <div className="border-b border-black/10 py-8 md:py-10">
                <p className="mb-3 text-xs text-black/40">
                  آدرس
                </p>

                <p className="text-lg font-medium leading-8">
                  تهران، ایران
                </p>
              </div>

              <div className="border-b border-black/10 py-8 md:py-10">
                <p className="mb-3 text-xs text-black/40">
                  ساعات پاسخ‌گویی
                </p>

                <p className="text-lg font-medium leading-8">
                  شنبه تا چهارشنبه، ۹ تا ۱۸
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-4xl">
              <p className="mb-7 text-sm font-medium text-black/40">
                استعلام قیمت
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                اگر پروژه مشخصی دارید،
                <br />
                مستقیم برایمان بفرستید.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
                نوع محصول، تعداد، ابعاد، متریال و زمان مورد نیاز را
                بنویسید. اگر هنوز روش چاپ را نمی‌دانید، همان اطلاعات
                اولیه پروژه کافی است.
              </p>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                قبل از تماس
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چند سوال
                <br />
                متداول.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  question: "برای استعلام قیمت چه اطلاعاتی لازم است؟",
                  answer:
                    "نوع محصول، تعداد، ابعاد، متریال و زمان مورد نیاز برای شروع کافی است. اگر روش چاپ را نمی‌دانید، لازم نیست آن را از قبل مشخص کنید.",
                },
                {
                  question: "آیا قبل از سفارش مشاوره می‌دهید؟",
                  answer:
                    "بله. انتخاب روش چاپ به محصول، متریال، تیراژ و کاربرد نهایی بستگی دارد و می‌توانیم در این مرحله راهنمایی کنیم.",
                },
                {
                  question: "آیا سفارش‌های کسب‌وکارها و تیراژ بالا انجام می‌شود؟",
                  answer:
                    "بله. سفارش‌های B2B و تولیدهای مستمر بر اساس مشخصات پروژه بررسی می‌شوند.",
                },
                {
                  question: "اگر فایل آماده نباشد چه کار کنیم؟",
                  answer:
                    "مشخصات پروژه را ارسال کنید تا الزامات فایل و آماده‌سازی مورد نیاز را مشخص کنیم.",
                },
              ].map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-black/10"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-medium leading-8">
                        {faq.question}
                      </span>
                    </div>

                    <span className="text-xl text-black/40 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="pb-8 pr-9 text-base leading-8 text-black/55 md:pr-10">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              AIRIK
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              آماده‌اید پروژه را
              <br />
              شروع کنیم؟
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/خدمات"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm text-white transition-colors hover:border-white"
              >
                مشاهده خدمات
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
