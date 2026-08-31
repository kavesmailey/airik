import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  businessTypes,
  getBusinessTypeBySlug,
} from "@/content/business";

import { services } from "@/content/services";
import { articles } from "@/content/articles";

type BusinessPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return businessTypes.map((business) => ({
    slug: business.slug,
  }));
}

export function generateMetadata({
  params,
}: BusinessPageProps): Metadata {
  const business = getBusinessTypeBySlug(params.slug);

  if (!business) {
    return {};
  }

  return {
    title: business.meta.title,
    description: business.meta.description,
    alternates: {
      canonical: `/برای-کسب-و-کارها/${business.slug}`,
    },
    openGraph: {
      title: business.meta.title,
      description: business.meta.description,
      type: "website",
      locale: "fa_IR",
      siteName: "AIRIK",
      url: `/برای-کسب-و-کارها/${business.slug}`,
      images: [
        {
          url: business.image,
          alt: business.title,
        },
      ],
    },
  };
}

export default function BusinessDetailPage({
  params,
}: BusinessPageProps) {
  const business = getBusinessTypeBySlug(params.slug);

  if (!business) {
    notFound();
  }

  const relatedServices = services.filter((service) =>
    business.relevantServices.includes(service.slug)
  );

  const relatedArticles = articles.filter((article) =>
    business.relevantArticles.includes(article.slug)
  );

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <Link
              href="/برای-کسب-و-کارها"
              className="mb-10 inline-flex items-center gap-3 text-sm text-black/45 transition-opacity hover:opacity-60"
            >
              <span>→</span>
              همه راهکارهای کسب‌وکار
            </Link>

            <p className="mb-7 text-sm font-medium text-black/40">
              راهکارهای کسب‌وکار
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              {business.title}
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              {business.description}
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                چاپ برای کسب‌وکار شما
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چاپ فقط یک خروجی نیست؛
                <br />
                بخشی از تجربه برند است.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              <p>
                برای هر کسب‌وکار، نیاز چاپی از یک نقطه متفاوت شروع
                می‌شود. ممکن است هدف، بسته‌بندی بهتر باشد، یا ایجاد
                هویت یکپارچه در محصولات، لباس‌ها و اقلامی که مشتری
                هر روز با آن‌ها روبه‌رو می‌شود.
              </p>

              <p>
                AIRIK کمک می‌کند این نیاز به یک راهکار قابل اجرا تبدیل
                شود؛ از انتخاب سرویس مناسب تا بررسی جزئیات تولید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      {relatedServices.length > 0 && (
        <section className="border-y border-black/10 bg-[#f5f3ef]">
          <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
            <div className="mb-16 md:mb-24">
              <p className="mb-7 text-sm font-medium text-black/40">
                خدمات پیشنهادی
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                خدماتی که برای این
                <br />
                نوع کسب‌وکار مناسب‌اند.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {relatedServices.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/خدمات/${service.slug}`}
                  className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-12"
                >
                  <div className="grid gap-6 md:grid-cols-[80px_1fr_40px]">
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-3xl leading-8 text-black/50 md:text-lg">
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
      )}

      {/* Why these services */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                انتخاب راهکار
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                انتخاب درست،
                <br />
                از شناخت نیاز شروع می‌شود.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                [
                  "محصول",
                  "مشخص کنید قرار است چه چیزی چاپ شود و مشتری چگونه با آن تعامل خواهد داشت.",
                ],
                [
                  "تیراژ",
                  "تعداد سفارش روی انتخاب روش چاپ و هزینه نهایی تأثیر مستقیم دارد.",
                ],
                [
                  "متریال",
                  "جنس سطح چاپ یکی از مهم‌ترین عوامل در انتخاب روش و مواد مصرفی است.",
                ],
                [
                  "کاربرد",
                  "چاپ برای استفاده روزمره، بسته‌بندی، تبلیغات یا فروش محصول می‌تواند نیازهای متفاوتی داشته باشد.",
                ],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[70px_160px_1fr] md:gap-8"
                >
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-medium">
                    {title}
                  </h3>

                  <p className="leading-8 text-black/55">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-white/40">
              فرآیند همکاری
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              ساده شروع می‌کنیم،
              <br />
              دقیق تولید می‌کنیم.
            </h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-2">
            {[
              {
                title: "نیاز شما",
                text: "نوع محصول، تعداد، ابعاد، متریال و زمان مورد نیاز را مشخص می‌کنیم.",
              },
              {
                title: "پیشنهاد راهکار",
                text: "روش چاپ و گزینه‌های مناسب بر اساس مشخصات پروژه بررسی می‌شوند.",
              },
              {
                title: "آماده‌سازی",
                text: "فایل و جزئیات سفارش برای ورود به مرحله تولید بررسی می‌شود.",
              },
              {
                title: "تولید و تحویل",
                text: "سفارش تولید شده و پس از کنترل، برای تحویل آماده می‌شود.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="border-b border-white/15 py-9 md:py-11 md:[&:nth-child(odd)]:border-l md:[&:nth-child(odd)]:pl-10 md:[&:nth-child(even)]:pr-10"
              >
                <div className="flex gap-6">
                  <span className="text-xs text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-white/55">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      {relatedArticles.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
            <div className="mb-16 md:mb-24">
              <p className="mb-7 text-sm font-medium text-black/40">
                راهنمای مرتبط
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                قبل از سفارش بیشتر بدانید.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {relatedArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/بلاگ/${article.slug}`}
                  className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-11"
                >
                  <div className="grid gap-6 md:grid-cols-[80px_1fr_40px]">
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-xl font-medium leading-8 tracking-tight md:text-2xl">
                        {article.title}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-8 text-black/50">
                        {article.excerpt}
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
      )}

      {/* FAQ */}
      <section className="border-t border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                سوالات متداول
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چند سوال قبل از
                <br />
                شروع همکاری.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  question: "برای دریافت قیمت چه اطلاعاتی لازم است؟",
                  answer:
                    "نوع محصول، تعداد، ابعاد، متریال و زمان مورد نیاز برای شروع کافی است. اگر روش چاپ را نمی‌دانید، لازم نیست از قبل آن را مشخص کنید.",
                },
                {
                  question: "آیا سفارش‌های تیراژ بالا انجام می‌شود؟",
                  answer:
                    "بله. تیراژ یکی از عوامل اصلی در انتخاب روش چاپ است و سفارش‌های مختلف بر اساس مشخصات پروژه بررسی می‌شوند.",
                },
                {
                  question: "اگر فایل نهایی آماده نباشد چه؟",
                  answer:
                    "می‌توانید مشخصات پروژه را ارسال کنید تا درباره آماده‌سازی فایل و الزامات فنی چاپ راهنمایی دریافت کنید.",
                },
                {
                  question: "چطور روش چاپ مناسب را انتخاب کنیم؟",
                  answer:
                    "روش مناسب به محصول، متریال، تعداد، طرح و کاربرد نهایی بستگی دارد. این موارد هنگام بررسی پروژه در نظر گرفته می‌شوند.",
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

      {/* CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/40">
              شروع همکاری
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              برای کسب‌وکارتان
              <br />
              پروژه چاپی دارید؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
              مشخصات پروژه را برای AIRIK ارسال کنید. بر اساس نیاز شما،
              خدمات و مسیر مناسب تولید را بررسی می‌کنیم.
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
                تماس با AIRIK
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
