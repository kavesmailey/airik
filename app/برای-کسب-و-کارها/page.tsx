import type { Metadata } from "next";
import Link from "next/link";

import { businessTypes } from "@/content/business";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "راهکارهای چاپ برای کسب‌وکارها | AIRIK",
  description:
    "راهکارهای چاپ AIRIK برای برندهای پوشاک، بوتیک‌ها، کافه‌ها، رستوران‌ها، فروشگاه‌های اینترنتی و تولیدکننده‌ها.",
};

const advantages = [
  {
    number: "۰۱",
    title: "انتخاب روش مناسب",
    text: "لازم نیست از ابتدا بدانید چه تکنولوژی چاپی برای پروژه شما مناسب است. اطلاعات سفارش را بررسی می‌کنیم و راهکار مناسب را پیشنهاد می‌دهیم.",
  },
  {
    number: "۰۲",
    title: "مناسب برای سفارش‌های مستمر",
    text: "اگر کسب‌وکار شما به چاپ مداوم نیاز دارد، فرآیند سفارش می‌تواند بر اساس نیازهای تکرارشونده شما تنظیم شود.",
  },
  {
    number: "۰۳",
    title: "توجه به جزئیات تولید",
    text: "متریال، ابعاد، تیراژ، فایل و کاربرد نهایی همگی روی نتیجه اثر دارند و در تصمیم‌گیری در نظر گرفته می‌شوند.",
  },
  {
    number: "۰۴",
    title: "راهکار به‌جای محصول",
    text: "هدف فقط تولید یک آیتم چاپی نیست؛ هدف این است که خروجی نهایی با نیاز واقعی کسب‌وکار شما هماهنگ باشد.",
  },
];

export default function BusinessPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              AIRIK برای کسب‌وکارها
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              چاپی که بخشی از
              <br />
              کسب‌وکار شماست.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              از بسته‌بندی و اقلام تبلیغاتی تا محصولات چاپی روزمره،
              راهکار مناسب چاپ برای هر کسب‌وکار متفاوت است. AIRIK کمک
              می‌کند این انتخاب بر اساس محصول، تیراژ، متریال و کاربرد
              واقعی انجام شود.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
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

      {/* Problem */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                مسئله چیست؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                نیاز چاپی هر کسب‌وکار
                <br />
                یکسان نیست.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              <p>
                یک رستوران به بسته‌بندی، لیبل و اقلام چاپی روزمره نیاز
                دارد؛ یک برند پوشاک ممکن است به چاپ روی پارچه یا لباس
                نیاز داشته باشد و یک شرکت، بیشتر به اقلام هویت بصری و
                چاپ سازمانی احتیاج داشته باشد.
              </p>

              <p>
                به همین دلیل AIRIK خدمات چاپ را فقط بر اساس تکنولوژی
                دسته‌بندی نمی‌کند. نوع کسب‌وکار و مسئله‌ای که قرار است
                حل شود هم بخشی از انتخاب راهکار است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              انتخاب حوزه
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              کسب‌وکار خود را
              <br />
              انتخاب کنید.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {businessTypes.map((business, index) => (
              <Link
                key={business.slug}
                href={`/برای-کسب-و-کارها/${business.slug}`}
                className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-12"
              >
                <div className="grid gap-6 md:grid-cols-[80px_1fr_40px] md:items-start">
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                      {business.title}
                    </h3>

                    <p className="mt-4 max-w-3xl leading-8 text-black/50 md:text-lg">
                      {business.description}
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

      {/* Why AIRIK */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                همکاری با AIRIK
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                یک چاپخانه،
                <br />
                برای نیازهای واقعی تولید.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {advantages.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[70px_180px_1fr] md:items-start md:gap-8"
                >
                  <span className="text-xs text-black/30">
                    {item.number}
                  </span>

                  <h3 className="text-lg font-medium">
                    {item.title}
                  </h3>

                  <p className="leading-8 text-black/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Services */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                خدمات چاپ
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                خدماتی برای
                <br />
                پروژه‌های مختلف.
              </h2>
            </div>

            <Link
              href="/خدمات"
              className="w-fit text-sm text-black/55 transition-opacity hover:opacity-50"
            >
              مشاهده همه خدمات ↗
            </Link>
          </div>

          <div className="border-t border-black/10">
            {services.slice(0, 6).map((service, index) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group block border-b border-black/10 py-8 transition-opacity hover:opacity-60 md:py-10"
              >
                <div className="grid gap-5 md:grid-cols-[70px_1fr_40px] md:items-start md:gap-8">
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-8 text-black/50">
                      {service.shortDescription}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform group-hover:-translate-x-1"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                فرآیند همکاری
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                از نیاز اولیه
                <br />
                تا تولید.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  number: "۰۱",
                  title: "شناخت نیاز",
                  text: "نوع محصول، کاربرد، تعداد، ابعاد و زمان مورد نیاز مشخص می‌شود.",
                },
                {
                  number: "۰۲",
                  title: "انتخاب راهکار",
                  text: "بر اساس مشخصات پروژه، روش چاپ و متریال مناسب بررسی می‌شود.",
                },
                {
                  number: "۰۳",
                  title: "بررسی فایل و تولید",
                  text: "فایل نهایی و جزئیات تولید بررسی شده و سفارش وارد فرآیند اجرا می‌شود.",
                },
                {
                  number: "۰۴",
                  title: "تحویل",
                  text: "خروجی نهایی پس از کنترل تولید برای تحویل آماده می‌شود.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[70px_180px_1fr] md:items-start md:gap-8"
                >
                  <span className="text-xs text-black/30">
                    {step.number}
                  </span>

                  <h3 className="text-lg font-medium">
                    {step.title}
                  </h3>

                  <p className="leading-8 text-black/55">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/40">
              شروع همکاری
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              پروژه چاپی دارید؟
              <br />
              از همین‌جا شروع کنیم.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
              نوع محصول، تعداد، ابعاد و زمان مورد نیاز را برای ما
              بفرستید. اگر درباره روش چاپ مطمئن نیستید، اطلاعات پروژه
              برای شروع کافی است.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/تماس-با-ما"
                className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
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
