import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/content/services";
import {
  articles,
  getRelatedArticles,
} from "@/content/articles";
import { generateMetadata as createMetadata } from "@/lib/seo";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/خدمات/${service.slug}`,
    ogImage: service.image,
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServiceSlugs
    .map(getServiceBySlug)
    .filter(Boolean);

  const relatedArticles = articles.filter((article) =>
    article.relatedServices.includes(service.slug)
  );

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <Link
              href="/خدمات"
              className="mb-8 inline-flex items-center gap-2 text-sm text-black/45 transition-opacity hover:opacity-60"
            >
              <span>←</span>
              خدمات چاپ
            </Link>

            <p className="mb-7 text-sm font-medium text-black/45">
              خدمات چاپ
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-black/60 md:text-2xl md:leading-10">
              {service.shortDescription}
            </p>

            <p className="mt-8 max-w-3xl text-base leading-8 text-black/50 md:text-lg">
              {service.fullDescription}
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت و مشاوره
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                درباره این روش
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                قبل از انتخاب،
                <br />
                روش را بشناسید.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/65 md:text-xl md:leading-10">
                {service.aboutText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is this method */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              این روش چگونه کار می‌کند؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
              فرآیند چاپ،
              <br />
              از فایل تا خروجی.
            </h2>

            <p className="mt-10 text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              {service.aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              مزایا
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              چرا این روش؟
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="border-b border-black/10 py-8 md:py-10 md:[&:nth-child(odd)]:border-l md:[&:nth-child(odd)]:pl-10 md:[&:nth-child(even)]:pr-10"
              >
                <div className="flex gap-6">
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-lg leading-8 text-black/75">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                مناسب برای
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                اگر پروژه شما
                <br />
                این ویژگی‌ها را دارد.
              </h2>
            </div>

            <div>
              <div className="border-t border-black/10">
                {service.suitableFor.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-6 border-b border-black/10 py-6"
                  >
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-base leading-8 text-black/65 md:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              کاربردها
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              این روش کجا استفاده می‌شود؟
            </h2>
          </div>

          <div className="grid gap-x-12 border-t border-black/10 md:grid-cols-2">
            {service.applications.map((application, index) => (
              <div
                key={application}
                className="flex gap-6 border-b border-black/10 py-8"
              >
                <span className="text-xs text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-lg leading-8 text-black/70">
                  {application}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Considerations */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              نکات مهم
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
              نتیجه خوب،
              <br />
              به انتخاب درست بستگی دارد.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
            {service.keyConsiderations.map((item) => (
              <div
                key={item.label}
                className="bg-[#f5f3ef] p-8 md:p-10"
              >
                <h3 className="text-lg font-medium">
                  {item.label}
                </h3>

                <p className="mt-4 leading-8 text-black/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                روش‌های اجرا
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                بسته به پروژه،
                <br />
                روش مناسب فرق می‌کند.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {service.printingMethods.map((method, index) => (
                <div
                  key={method.name}
                  className="border-b border-black/10 py-8 md:py-10"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-xl font-medium">
                        {method.name}
                      </h3>

                      <p className="mt-4 leading-8 text-black/55">
                        {method.description}
                      </p>

                      <p className="mt-4 text-sm text-black/45">
                        مناسب برای: {method.suitableFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-white/45">
              فرآیند
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
              از فایل اولیه
              <br />
              تا تحویل سفارش.
            </h2>
          </div>

          <div className="grid border-t border-white/15 md:grid-cols-2">
            {service.processSteps.map((step, index) => (
              <div
                key={step}
                className="border-b border-white/15 py-8 md:py-10 md:[&:nth-child(odd)]:border-l md:[&:nth-child(odd)]:pl-10 md:[&:nth-child(even)]:pr-10"
              >
                <div className="flex gap-6">
                  <span className="text-xs text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-lg leading-8 text-white/85">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                قیمت
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                قیمت چاپ
                <br />
                یک عدد ثابت نیست.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60 md:text-xl md:leading-10">
                هزینه نهایی به مشخصات واقعی پروژه بستگی دارد. عواملی مثل
                تیراژ، ابعاد چاپ، تعداد رنگ، نوع متریال، پیچیدگی طرح و روش
                اجرای انتخاب‌شده می‌توانند روی قیمت تأثیر بگذارند.
              </p>

              <div className="mt-10 border-t border-black/10">
                {service.keyConsiderations.map((item) => (
                  <div
                    key={`price-${item.label}`}
                    className="flex items-start justify-between gap-8 border-b border-black/10 py-5"
                  >
                    <span className="text-sm font-medium">
                      {item.label}
                    </span>

                    <span className="max-w-sm text-left text-sm leading-7 text-black/45">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/استعلام-قیمت"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                دریافت قیمت برای پروژه شما
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                سوالات متداول
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                قبل از سفارش،
                <br />
                این‌ها را بدانید.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {service.faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-black/10"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7 md:py-8">
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
            <div className="mb-16 md:mb-24">
              <p className="mb-7 text-sm font-medium text-black/45">
                خدمات مرتبط
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                شاید این خدمات هم به پروژه شما مربوط باشند.
              </h2>
            </div>

            <div className="grid border-t border-black/10 md:grid-cols-2">
              {relatedServices.map((relatedService: any, index) => (
                <Link
                  key={relatedService.slug}
                  href={`/خدمات/${relatedService.slug}`}
                  className="group border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:[&:nth-child(odd)]:border-l md:[&:nth-child(odd)]:pl-10 md:[&:nth-child(even)]:pr-10"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-4 text-2xl font-medium tracking-tight">
                        {relatedService.title}
                      </h3>

                      <p className="mt-3 max-w-xl leading-8 text-black/50">
                        {relatedService.shortDescription}
                      </p>
                    </div>

                    <span className="text-xl transition-transform group-hover:-translate-x-1">
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
            <div className="mb-16 md:mb-24">
              <p className="mb-7 text-sm font-medium text-black/45">
                مقالات مرتبط
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                بیشتر بخوانید.
              </h2>
            </div>

            <div className="grid border-t border-black/10 md:grid-cols-2">
              {getRelatedArticles(
                relatedArticles.map((article) => article.slug)
              ).map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/بلاگ/${article.slug}`}
                  className="group border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:[&:nth-child(odd)]:border-l md:[&:nth-child(odd)]:pl-10 md:[&:nth-child(even)]:pr-10"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")} ·{" "}
                        {article.readingTime}
                      </span>

                      <h3 className="mt-4 text-xl font-medium leading-8 tracking-tight md:text-2xl">
                        {article.title}
                      </h3>

                      <p className="mt-3 max-w-xl leading-8 text-black/50">
                        {article.excerpt}
                      </p>
                    </div>

                    <span className="text-xl transition-transform group-hover:-translate-x-1">
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              شروع پروژه
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl lg:text-6xl">
              پروژه‌ای دارید که
              <br />
              باید چاپ شود؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
              مشخصات پروژه را برای ما بفرستید. اگر هنوز مطمئن نیستید این
              روش برای شما مناسب است، می‌توانیم قبل از سفارش گزینه‌های
              مختلف را بررسی و مقایسه کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
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
