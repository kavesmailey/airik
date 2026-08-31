import type { Metadata } from "next";
import Link from "next/link";

import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "خدمات چاپ | AIRIK",
  description:
    "خدمات چاپ AIRIK برای پوشاک، بسته‌بندی، محصولات تبلیغاتی و سفارش‌های تخصصی؛ با انتخاب روش و متریال متناسب با پروژه.",
};

export default function ServicesPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              خدمات AIRIK
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              چاپ، وقتی مهم است
              <br />
              که درست انتخاب شود.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              هر پروژه چاپی نیاز متفاوتی دارد. نوع متریال، تیراژ، جزئیات
              طرح و کاربرد نهایی تعیین می‌کنند کدام روش چاپ انتخاب بهتری
              است.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
            <div>
              <p className="mb-6 text-sm font-medium text-black/40">
                سرویس‌ها
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                چه چیزی می‌توانیم چاپ کنیم؟
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/50">
              از چاپ روی پوشاک و پارچه تا بسته‌بندی و محصولات سفارشی،
              سرویس‌ها بر اساس نیاز پروژه قابل بررسی و ترکیب هستند.
            </p>
          </div>

          <div className="border-t border-black/10">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-12"
              >
                <div className="grid gap-6 md:grid-cols-[80px_1fr_40px] md:items-start">
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-base leading-8 text-black/50 md:text-lg">
                      {service.shortDescription}
                    </p>
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

      {/* Selection Guide */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-6 text-sm font-medium text-black/40">
                انتخاب روش
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                نمی‌دانید کدام
                <br />
                روش مناسب است؟
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60 md:text-xl md:leading-10">
                لازم نیست قبل از شروع پروژه همه جزئیات فنی را بدانید.
                کاربرد محصول، جنس متریال، تعداد، ابعاد و نتیجه‌ای که از
                چاپ انتظار دارید، برای شروع کافی است.
              </p>

              <p className="mt-7 text-lg leading-9 text-black/60 md:text-xl md:leading-10">
                این اطلاعات کمک می‌کنند روش چاپ، متریال و فرآیند مناسب
                برای پروژه مشخص شود.
              </p>

              <Link
                href="/استعلام-قیمت"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                مشاوره و استعلام قیمت
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="border-t border-black/10 pt-10 md:pt-14">
            <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
              <div>
                <p className="mb-6 text-sm font-medium text-black/40">
                  برای کسب‌وکارها
                </p>

                <h2 className="max-w-4xl text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                  سفارش‌های مستمر،
                  <br />
                  تیراژ بالا و همکاری بلندمدت.
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-black/55 md:text-lg">
                  اگر چاپ بخشی از فرآیند مداوم کسب‌وکار شماست، AIRIK
                  می‌تواند در انتخاب روش، تولید و مدیریت سفارش‌های
                  تکرارشونده همراه شما باشد.
                </p>
              </div>

              <Link
                href="/برای-کسب-و-کارها"
                className="inline-flex shrink-0 items-center gap-3 text-sm transition-opacity hover:opacity-50"
              >
                راهکارهای کسب‌وکار
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              شروع پروژه
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              آماده‌اید درباره
              <br />
              پروژه صحبت کنیم؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات پروژه‌تان را ارسال کنید. بر اساس نیاز، روش چاپ و
              مسیر مناسب تولید را بررسی می‌کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
