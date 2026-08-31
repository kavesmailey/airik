import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/content/services";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return {
      title: "خدمت پیدا نشد | آیریک",
    };
  }

  return {
    title: `${service.title} | آیریک`,
    description:
      service.description ||
      `اطلاعات کامل درباره ${service.title} و خدمات چاپ آیریک.`,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-5xl">
            <Link
              href="/خدمات"
              className="mb-10 inline-flex items-center gap-2 text-sm text-black/45 transition-colors hover:text-black"
            >
              <span>→</span>
              بازگشت به خدمات
            </Link>

            <p className="mb-7 text-sm font-medium text-black/45">
              خدمات چاپ آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            {service.description && (
              <p className="mt-9 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
                {service.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
            <div>
              <p className="text-sm font-medium text-black/45">
                درباره این خدمت
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-4xl">
                اجرای درست، از شناخت درست پروژه شروع می‌شود.
              </h2>

              <p className="mt-8 text-lg leading-9 text-black/60">
                هر سفارش چاپ شرایط متفاوتی دارد. جنس سطح، رنگ، ابعاد،
                جزئیات طرح، تیراژ و نوع استفاده، روی نتیجه نهایی تأثیر
                می‌گذارند. به همین دلیل قبل از اجرا، مشخصات سفارش بررسی
                می‌شود تا روش مناسب برای آن انتخاب شود.
              </p>

              <p className="mt-6 text-lg leading-9 text-black/60">
                اگر فایل آماده دارید یا هنوز در مرحله انتخاب روش چاپ هستید،
                می‌توانید اطلاعات پروژه را برای ما ارسال کنید تا درباره
                مناسب‌ترین روش اجرا راهنمایی‌تان کنیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we consider */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-16 max-w-3xl">
            <p className="mb-6 text-sm font-medium text-black/45">
              قبل از اجرا
            </p>

            <h2 className="text-3xl font-medium leading-[1.35] tracking-tight md:text-5xl">
              چند عامل، نتیجه نهایی چاپ را تعیین می‌کنند.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "جنس و سطح",
                text: "نوع پارچه، کاغذ، مقوا، پلاستیک یا سطح موردنظر، روی انتخاب تکنیک چاپ تأثیر مستقیم دارد.",
              },
              {
                number: "02",
                title: "تیراژ",
                text: "تعداد سفارش یکی از عوامل اصلی در انتخاب فرآیند و رسیدن به هزینه منطقی برای هر واحد است.",
              },
              {
                number: "03",
                title: "طرح و رنگ",
                text: "تعداد رنگ‌ها، جزئیات و ویژگی‌های فایل طراحی می‌تواند مناسب‌ترین روش اجرا را تغییر دهد.",
              },
              {
                number: "04",
                title: "نتیجه مورد انتظار",
                text: "دوام، ظاهر، میزان پوشش، بافت و کیفیت نهایی باید متناسب با کاربرد محصول انتخاب شوند.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-[#f5f3ef] p-8 md:p-12"
              >
                <span className="text-sm text-black/35">
                  {item.number}
                </span>

                <h3 className="mt-10 text-2xl font-medium md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-black/55 md:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              آماده شروع هستید؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              مشخصات پروژه را بفرستید تا بهترین روش اجرا را با هم پیدا کنیم.
            </h2>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
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
