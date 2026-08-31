import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBusinessTypeBySlug, businessTypes } from "@/content/business";
import { getServiceBySlug } from "@/content/services";
import { getArticleBySlug } from "@/content/articles";

interface BusinessPageProps {
  params: { slug: string };
}

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
  };
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const business = getBusinessTypeBySlug(params.slug);

  if (!business) {
    notFound();
  }

  const relevantServices = business.relevantServices
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const relevantArticles = business.relevantArticles
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  const businessName = business.title.replace(/^برای\s+/, "");

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <Link
              href="/برای-کسب-و-کارها"
              className="mb-8 inline-block text-sm font-medium text-black/45 transition-opacity hover:opacity-60"
            >
              برای کسب‌وکارها
            </Link>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              {business.title}
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              {business.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span>↗</span>
              </Link>

              <Link
                href="/خدمات"
                className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:bg-black/5"
              >
                مشاهده خدمات
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business problem */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                مسئله
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چاپ باید با مدل
                <br />
                کسب‌وکار شما هماهنگ باشد.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60">
              <p>
                برای {businessName}، چاپ فقط یک خروجی فیزیکی نیست. بخشی از
                بسته‌بندی، محصول، هویت برند یا تجربه‌ای است که مشتری در نهایت
                می‌بیند و لمس می‌کند.
              </p>

              <p>
                انتخاب متریال، روش چاپ، تعداد، ابعاد و حتی آماده‌سازی فایل
                می‌تواند روی کیفیت و هزینه نهایی تأثیر بگذارد.
              </p>

              <p>
                به همین دلیل بهتر است قبل از تولید، مشخص شود چه راهکاری با
                محصول و نیاز واقعی کسب‌وکار شما تناسب دارد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended products */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              راهکارهای مناسب
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              چاپ را بر اساس
              <br />
              نیاز واقعی پروژه انتخاب کنید.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {relevantServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group border-b border-black/10 py-12 md:p-14"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-black/30 transition-transform group-hover:-translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-medium tracking-tight md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-black/55">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we approach the project */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                فرآیند همکاری
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                اول پروژه را
                <br />
                می‌فهمیم، بعد چاپ می‌کنیم.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  number: "۰۱",
                  title: "شناخت سفارش",
                  text: "محصول، کاربرد، تعداد، ابعاد و اطلاعاتی که برای شروع پروژه در اختیار دارید بررسی می‌شود.",
                },
                {
                  number: "۰۲",
                  title: "انتخاب راهکار",
                  text: "بر اساس نیاز پروژه، متریال و روش چاپ مناسب مشخص می‌شود. اگر روش چاپ را ندانید، لازم نیست از ابتدا آن را انتخاب کنید.",
                },
                {
                  number: "۰۳",
                  title: "آماده‌سازی تولید",
                  text: "فایل و مشخصات سفارش بررسی می‌شود تا قبل از ورود به تولید، موارد مهم مشخص باشند.",
                },
                {
                  number: "۰۴",
                  title: "تولید و کنترل",
                  text: "سفارش وارد فرآیند تولید می‌شود و خروجی نهایی پیش از تحویل بررسی می‌شود.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[70px_180px_1fr] md:items-start md:gap-8"
                >
                  <span className="text-xs text-black/35">
                    {step.number}
                  </span>

                  <h3 className="text-lg font-medium">{step.title}</h3>

                  <p className="leading-8 text-black/55">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ordering considerations */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              قبل از سفارش
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              چند تصمیم ساده،
              <br />
              نتیجه بهتری می‌سازد.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {[
              {
                number: "۰۱",
                title: "محصول",
                text: "دقیقاً مشخص کنید چه چیزی قرار است چاپ شود و چاپ چه نقشی در محصول نهایی دارد.",
              },
              {
                number: "۰۲",
                title: "تعداد",
                text: "تیراژ سفارش می‌تواند روی انتخاب روش چاپ و هزینه نهایی اثر بگذارد.",
              },
              {
                number: "۰۳",
                title: "ابعاد و متریال",
                text: "سطح چاپ، اندازه و جنس محصول از عوامل مهم در انتخاب راهکار مناسب هستند.",
              },
              {
                number: "۰۴",
                title: "زمان مورد نیاز",
                text: "اگر سفارش برای کمپین، افتتاحیه یا زمان مشخصی لازم است، بهتر است از ابتدا اعلام شود.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="border-b border-black/10 py-10 md:p-14"
              >
                <span className="text-xs text-black/35">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-medium tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-black/55">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      {relevantArticles.length > 0 && (
        <section>
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
            <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-7 text-sm font-medium text-black/45">
                  راهنمای چاپ
                </p>

                <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                  قبل از سفارش،
                  <br />
                  بیشتر بدانید.
                </h2>
              </div>

              <Link
                href="/بلاگ"
                className="w-fit text-sm text-black/55 transition-colors hover:text-black"
              >
                مشاهده همه مقالات ↗
              </Link>
            </div>

            <div className="grid border-t border-black/10 md:grid-cols-2">
              {relevantArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/بلاگ/${article.slug}`}
                  className="group border-b border-black/10 py-10 md:p-12"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-black/30 transition-transform group-hover:-translate-x-1">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-medium leading-8 md:text-2xl">
                    {article.title}
                  </h3>

                  {article.excerpt && (
                    <p className="mt-5 leading-8 text-black/50">
                      {article.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-6 text-sm font-medium text-black/45">
                شروع سفارش
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                نیاز چاپی کسب‌وکارتان را
                <br />
                با ما در میان بگذارید.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
                نوع محصول، تعداد، ابعاد، زمان مورد نیاز و هر اطلاعاتی که درباره
                پروژه دارید برای ما بفرستید. اگر روش چاپ را نمی‌دانید، انتخاب
                آن را به ما بسپارید.
              </p>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
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
