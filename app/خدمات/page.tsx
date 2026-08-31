import Link from "next/link";
import { services } from "@/content/services";

export const metadata = {
  title: "خدمات چاپ | آیریک",
  description:
    "خدمات تخصصی چاپ آیریک شامل چاپ سیلک، DTF، چاپ روی لباس، بگ، بسته‌بندی و محصولات تبلیغاتی.",
};

export default function ServicesPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-8 text-sm font-medium tracking-wide text-black/50">
              خدمات چاپ آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              برای هر محصول،
              <br />
              روش درست چاپ را پیدا می‌کنیم.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-black/60 md:text-xl">
              چاپ فقط انتخاب یک دستگاه یا تکنیک نیست. جنس محصول، تیراژ،
              پیچیدگی طرح، تعداد رنگ و نتیجه‌ای که از چاپ انتظار دارید،
              همگی روی انتخاب روش مناسب تأثیر می‌گذارند.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-black/50">
              آیریک قبل از اجرا، پروژه را بررسی می‌کند تا راهکاری انتخاب شود
              که از نظر کیفیت، هزینه و نتیجه نهایی برای شما منطقی باشد.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-20 max-w-3xl">
            <p className="mb-6 text-sm font-medium tracking-wide text-black/50">
              خدمات
            </p>

            <h2 className="text-3xl font-medium leading-[1.35] tracking-tight md:text-5xl">
              از چاپ روی پوشاک تا بسته‌بندی و محصولات برندشده.
            </h2>

            <p className="mt-7 text-lg leading-9 text-black/60">
              خدمات آیریک برای پروژه‌های مختلف طراحی شده‌اند؛ از سفارش‌های
              کوچک و فروشگاهی تا تولیدات برندها، کمپین‌ها و سفارش‌های تیراژ
              بالا.
            </p>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group block py-10 transition-opacity hover:opacity-70 md:py-14"
              >
                <div className="grid gap-8 md:grid-cols-[100px_1fr_auto] md:items-start">
                  <span className="text-sm text-black/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-tight md:text-4xl">
                      {service.title}
                    </h3>

                    {service.description && (
                      <p className="mt-5 max-w-2xl text-base leading-8 text-black/55 md:text-lg">
                        {service.description}
                      </p>
                    )}
                  </div>

                  <span className="hidden text-2xl transition-transform group-hover:-translate-x-2 md:block">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Decision section */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/50">
                انتخاب روش چاپ
              </p>

              <h2 className="text-3xl font-medium leading-[1.35] tracking-tight md:text-5xl">
                لازم نیست از قبل بدانید چه روشی برای شما مناسب است.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-lg leading-9 text-black/65">
                اگر بین سیلک، DTF یا روش‌های دیگر مردد هستید، کافی است
                مشخصات پروژه را برای ما بفرستید. محصول، تعداد، جنس سطح،
                فایل طراحی و نتیجه موردنظر را بررسی می‌کنیم و مناسب‌ترین
                روش را پیشنهاد می‌دهیم.
              </p>

              <p className="mt-6 text-lg leading-9 text-black/65">
                هدف فقط پایین آوردن هزینه یا انتخاب سریع‌ترین روش نیست؛
                هدف رسیدن به تعادل درست بین کیفیت، دوام، ظاهر نهایی و
                هزینه اجرای پروژه است.
              </p>

              <Link
                href="/استعلام-قیمت"
                className="mt-10 inline-flex items-center gap-3 border-b border-black pb-2 text-base font-medium"
              >
                پروژه‌تان را بررسی کنیم
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="border-t border-black/10 pt-16 md:pt-20">
            <p className="mb-6 text-sm font-medium text-black/50">
              برای برندها و کسب‌وکارها
            </p>

            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
              <h2 className="text-3xl font-medium leading-[1.35] tracking-tight md:text-5xl">
                چاپی که قرار است بخشی از تجربه برند شما باشد، باید از ابتدا
                درست طراحی و اجرا شود.
              </h2>

              <div>
                <p className="text-lg leading-9 text-black/60">
                  اگر سفارش شما تکرارشونده است یا بخشی از هویت برندتان روی
                  محصولات، لباس یا بسته‌بندی دیده می‌شود، می‌توانیم یک
                  فرآیند مشخص و قابل تکرار برای تولید تعریف کنیم.
                </p>

                <Link
                  href="/استعلام-قیمت"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  شروع یک پروژه
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
