import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "خدمات چاپ | Ayric",
  description:
    "خدمات چاپ آیریک برای برندها و کسب‌وکارها؛ از چاپ روی لباس و پارچه تا بسته‌بندی، چاپ روی محصولات و اقلام تبلیغاتی.",
};

const services = [
  {
    number: "01",
    title: "چاپ روی لباس",
    slug: "چاپ-روی-لباس",
    description:
      "چاپ طرح، لوگو و گرافیک روی انواع لباس برای برندها، تیم‌ها، رویدادها و پروژه‌های شخصی.",
  },
  {
    number: "02",
    title: "چاپ روی پارچه",
    slug: "چاپ-روی-پارچه",
    description:
      "راهکارهای چاپ روی پارچه با توجه به جنس متریال، نوع طرح، کاربرد و تیراژ پروژه.",
  },
  {
    number: "03",
    title: "بسته‌بندی",
    slug: "بسته-بندی",
    description:
      "تولید بسته‌بندی چاپی برای برندها؛ از جعبه و کیسه تا سایر نقاط تماس محصول با مشتری.",
  },
  {
    number: "04",
    title: "چاپ روی محصول",
    slug: "چاپ-روی-محصول",
    description:
      "چاپ روی محصولات و سطوح مختلف برای ساخت محصول برندشده، هدیه سازمانی و پروژه‌های تبلیغاتی.",
  },
  {
    number: "05",
    title: "اقلام تبلیغاتی",
    slug: "اقلام-تبلیغاتی",
    description:
      "تولید اقلام چاپی برای کمپین‌ها، رویدادها، معرفی برند و ارتباط مستقیم با مخاطب.",
  },
  {
    number: "06",
    title: "چاپ کاغذ و مقوا",
    slug: "چاپ-کاغذ-و-مقوا",
    description:
      "چاپ انواع متریال کاغذی و مقوایی برای کاربردهای تجاری، تبلیغاتی و سازمانی.",
  },
];

export default function ServicesPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              خدمات چاپ آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              چاپ،
              <br />
              فقط چاپ نیست.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              ما برای هر پروژه، بر اساس محصول، متریال، تیراژ و کاربرد
              نهایی، راهکار مناسب چاپ را پیدا می‌کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              چه کاری انجام می‌دهیم؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              راهکارهایی برای
              <br />
              نیازهای مختلف چاپ.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group block border-b border-black/10 py-10 transition-opacity hover:opacity-60 md:py-14"
              >
                <div className="grid gap-7 md:grid-cols-[90px_0.9fr_1.1fr_40px] md:items-center">
                  <span className="text-xs text-black/30">
                    {service.number}
                  </span>

                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="text-base leading-8 text-black/50">
                    {service.description}
                  </p>

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

      {/* Approach */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                رویکرد آیریک
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                اول مسئله،
                <br />
                بعد روش چاپ.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-lg leading-9 text-black/60">
                ما از قبل تصمیم نمی‌گیریم که هر پروژه باید با چه روشی
                چاپ شود. ابتدا محصول و نیاز آن را می‌شناسیم و بعد
                مناسب‌ترین مسیر تولید را انتخاب می‌کنیم.
              </p>

              <p className="text-lg leading-9 text-black/60">
                نتیجه باید بین کیفیت، هزینه، سرعت و کاربرد واقعی
                محصول تعادل ایجاد کند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              فرآیند همکاری
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              از ایده
              <br />
              تا خروجی نهایی.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {[
              {
                number: "01",
                title: "نیازسنجی",
                description:
                  "نوع محصول، تعداد، ابعاد، متریال و کاربرد نهایی را بررسی می‌کنیم.",
              },
              {
                number: "02",
                title: "انتخاب راهکار",
                description:
                  "بر اساس مشخصات پروژه، روش چاپ و مسیر تولید مناسب مشخص می‌شود.",
              },
              {
                number: "03",
                title: "تأیید",
                description:
                  "جزئیات فنی، قیمت و زمان‌بندی قبل از شروع تولید نهایی می‌شود.",
              },
              {
                number: "04",
                title: "تولید",
                description:
                  "سفارش مطابق مشخصات تأییدشده تولید و آماده تحویل می‌شود.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="grid gap-6 border-b border-black/10 py-9 md:grid-cols-[90px_0.8fr_1.2fr] md:items-center md:py-12"
              >
                <span className="text-xs text-black/30">
                  {step.number}
                </span>

                <h3 className="text-xl font-medium md:text-2xl">
                  {step.title}
                </h3>

                <p className="leading-8 text-black/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/40">
              برای کسب‌وکارها
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              چاپی که با
              <br />
              کسب‌وکار شما کار کند.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
              اگر برای برند یا کسب‌وکارتان به سفارش‌های چاپی مستمر،
              بسته‌بندی یا اقلام تبلیغاتی نیاز دارید، راهکارهای
              مخصوص کسب‌وکارها را ببینید.
            </p>

            <Link
              href="/برای-کسب-و-کارها"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
            >
              راهکارهای کسب‌وکار
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              شروع پروژه
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              نمی‌دانید کدام
              <br />
              روش مناسب شماست؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              محصول و نیازتان را توضیح دهید. انتخاب روش چاپ را به ما
              بسپارید.
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
