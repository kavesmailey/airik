import type { Metadata } from "next";
import Link from "next/link";

import { businessSolutions } from "@/content/business";

export const metadata: Metadata = {
  title: "راهکارهای چاپ برای کسب‌وکارها | AIRIK",
  description:
    "راهکارهای چاپ AIRIK برای برندها، فروشگاه‌ها، رستوران‌ها، کافه‌ها و شرکت‌هایی که به تولید مستمر و قابل اتکا نیاز دارند.",
};

export default function BusinessPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              راهکارهای کسب‌وکار
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              چاپ برای کسب‌وکارهایی
              <br />
              که تولید مستمر دارند.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              وقتی چاپ بخشی از عملیات روزمره یک کسب‌وکار است، موضوع فقط
              تولید یک سفارش نیست. ثبات کیفیت، زمان‌بندی، تیراژ و انتخاب
              درست روش چاپ اهمیت پیدا می‌کند.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                شروع یک پروژه
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/خدمات"
                className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
              >
                مشاهده خدمات
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              برای چه کسب‌وکارهایی؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              یک راهکار ثابت
              <br />
              برای همه وجود ندارد.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {businessSolutions.map((solution, index) => (
              <Link
                key={solution.slug}
                href={`/برای-کسب-و-کارها/${solution.slug}`}
                className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-12"
              >
                <div className="grid gap-6 md:grid-cols-[90px_1fr_40px] md:items-start">
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                      {solution.title}
                    </h3>

                    {solution.description && (
                      <p className="mt-4 max-w-3xl text-base leading-8 text-black/50 md:text-lg">
                        {solution.description}
                      </p>
                    )}
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform duration-300 group-hover:-translate-x-1"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why AIRIK */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                همکاری B2B
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                وقتی سفارش چاپ
                <br />
                تکرار می‌شود.
              </h2>
            </div>

            <div className="space-y-10">
              <div className="border-t border-black/10 pt-7">
                <p className="mb-3 text-xs text-black/40">
                  01 — ثبات
                </p>

                <h3 className="text-xl font-medium">
                  کیفیت قابل تکرار
                </h3>

                <p className="mt-4 leading-8 text-black/55">
                  در سفارش‌های مستمر، نتیجه هر بار باید تا حد ممکن
                  قابل پیش‌بینی باشد. انتخاب روش و متریال مناسب از
                  ابتدا بخشی از این فرآیند است.
                </p>
              </div>

              <div className="border-t border-black/10 pt-7">
                <p className="mb-3 text-xs text-black/40">
                  02 — برنامه‌ریزی
                </p>

                <h3 className="text-xl font-medium">
                  تولید متناسب با زمان‌بندی
                </h3>

                <p className="mt-4 leading-8 text-black/55">
                  برای کسب‌وکارها، زمان تحویل بخشی از مسئله تولید است.
                  سفارش‌ها بر اساس تیراژ و زمان مورد نیاز بررسی
                  می‌شوند.
                </p>
              </div>

              <div className="border-t border-black/10 pt-7">
                <p className="mb-3 text-xs text-black/40">
                  03 — مقیاس
                </p>

                <h3 className="text-xl font-medium">
                  مناسب برای سفارش‌های مستمر
                </h3>

                <p className="mt-4 leading-8 text-black/55">
                  اگر محصولات چاپی بخشی از عملیات کسب‌وکار شما هستند،
                  می‌توانیم سفارش را بر اساس نیاز واقعی و تیراژ
                  موردنظر بررسی کنیم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              فرآیند همکاری
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              از مشخصات اولیه
              <br />
              تا تولید.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {[
              {
                title: "شناخت نیاز",
                text: "نوع محصول، کاربرد، تیراژ و زمان‌بندی مشخص می‌شود.",
              },
              {
                title: "انتخاب راهکار",
                text: "روش چاپ و متریال متناسب با پروژه بررسی و پیشنهاد می‌شود.",
              },
              {
                title: "نمونه و تأیید",
                text: "جزئیات تولید و خروجی مورد انتظار پیش از تولید نهایی مشخص می‌شود.",
              },
              {
                title: "تولید",
                text: "پس از تأیید، سفارش طبق مشخصات نهایی وارد فرآیند تولید می‌شود.",
              },
              {
                title: "تحویل",
                text: "خروجی نهایی بر اساس زمان‌بندی توافق‌شده آماده و تحویل می‌شود.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="grid gap-6 border-b border-black/10 py-9 md:grid-cols-[90px_0.8fr_1.2fr] md:items-center md:py-12"
              >
                <span className="text-xs text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                  {step.title}
                </h3>

                <p className="leading-8 text-black/50">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                کاربردها
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چاپ بخشی از
                <br />
                تجربه برند است.
              </h2>
            </div>

            <div className="grid grid-cols-2 border-t border-black/10">
              {[
                "برندها",
                "فروشگاه‌ها",
                "رستوران‌ها",
                "کافه‌ها",
                "شرکت‌ها",
                "فروش آنلاین",
                "رویدادها",
                "محصولات تبلیغاتی",
              ].map((item, index) => (
                <div
                  key={item}
                  className="border-b border-black/10 py-7 text-lg font-medium"
                >
                  <span className="ml-4 text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                سوالات متداول
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                قبل از شروع
                <br />
                همکاری.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  q: "آیا سفارش‌های تیراژ بالا انجام می‌دهید؟",
                  a: "بله. تیراژ یکی از عوامل اصلی در انتخاب روش چاپ و برآورد پروژه است و سفارش‌های حجیم به‌صورت جداگانه بررسی می‌شوند.",
                },
                {
                  q: "آیا امکان سفارش مستمر وجود دارد؟",
                  a: "بله. برای کسب‌وکارهایی که به تولید چاپی مداوم نیاز دارند، امکان بررسی همکاری مستمر وجود دارد.",
                },
                {
                  q: "آیا می‌توانیم روش چاپ را به شما بسپاریم؟",
                  a: "بله. کافی است محصول، متریال، تعداد و کاربرد نهایی را مشخص کنید. انتخاب روش چاپ را می‌توان بر اساس این عوامل انجام داد.",
                },
                {
                  q: "برای شروع چه اطلاعاتی لازم است؟",
                  a: "نوع محصول، تعداد تقریبی، ابعاد، متریال در صورت مشخص بودن و زمان مورد نیاز برای شروع کافی است.",
                },
              ].map((item, index) => (
                <details
                  key={item.q}
                  className="group border-b border-black/10"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-medium leading-8">
                        {item.q}
                      </span>
                    </div>

                    <span className="text-xl text-black/40 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="pb-8 pr-9 text-base leading-8 text-black/55 md:pr-10">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              همکاری با AIRIK
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              اگر چاپ بخشی از
              <br />
              کسب‌وکار شماست، شروع کنیم.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات پروژه یا نیاز چاپی خود را ارسال کنید. بر اساس
              محصول، تیراژ و زمان‌بندی، راهکار مناسب را بررسی می‌کنیم.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/تماس-با-ما"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm text-white transition-colors hover:border-white"
              >
                تماس با ما
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
