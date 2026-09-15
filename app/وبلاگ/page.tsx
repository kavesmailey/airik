import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "بلاگ | راهنمای چاپ و انتخاب روش چاپ",
  description:
    "راهنما و مطالب کاربردی درباره چاپ، چاپ سیلک، چاپ DTF، چاپ روی لباس، پارچه و سایر خدمات چاپی آیریک.",
  alternates: {
    canonical: "/وبلاگ",
  },
  openGraph: {
    title: "بلاگ | آیریک",
    description:
      "راهنما و مطالب کاربردی درباره روش‌های چاپ و انتخاب تکنیک مناسب برای هر پروژه.",
    type: "website",
  },
};

const categories = [
  "همه مطالب",
  "راهنمای چاپ",
  "تکنیک‌های چاپ",
];

const faqItems = [
  {
    question: "برای انتخاب روش چاپ مناسب از کجا شروع کنیم؟",
    answer:
      "ابتدا نوع محصول یا متریال، تعداد مورد نیاز، ابعاد، نوع طرح، کیفیت مورد انتظار و زمان تحویل را مشخص کنید. این اطلاعات معمولاً برای مقایسه روش‌های مختلف چاپ کافی هستند.",
  },
  {
    question: "چاپ سیلک برای چه پروژه‌هایی مناسب است؟",
    answer:
      "چاپ سیلک برای بسیاری از پروژه‌های چاپ روی لباس، پارچه و برخی محصولات مناسب است. انتخاب نهایی به جنس سطح، تیراژ و ویژگی‌های طرح بستگی دارد.",
  },
  {
    question: "چاپ سیلک یا DTF؛ کدام بهتر است؟",
    answer:
      "هیچ‌کدام همیشه بهتر نیستند. نوع طرح، متریال، تعداد رنگ، تیراژ و نتیجه مورد انتظار مشخص می‌کنند کدام روش برای پروژه مناسب‌تر است.",
  },
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export default function BlogPage() {
  const articleListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "بلاگ آیریک",
    description:
      "راهنما و مطالب کاربردی درباره روش‌های چاپ و انتخاب روش مناسب برای پروژه‌های چاپی.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `/وبلاگ/${post.slug}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خانه",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "بلاگ",
        item: "/وبلاگ",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main dir="rtl">
      <JsonLd data={articleListSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              بلاگ آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              راهنمای چاپ؛
              <br />
              قبل از چاپ بهتر بدانید.
            </h1>

            <p className="mt-9 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              درباره روش‌های چاپ، کاربردها، محدودیت‌ها و نکاتی که به شما
              کمک می‌کنند برای پروژه‌تان انتخاب دقیق‌تری داشته باشید.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="border-b border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 md:grid-cols-[0.35fr_1fr] md:gap-16">
            <p className="text-sm font-medium text-black/45">
              راهنمای سریع
            </p>

            <p className="max-w-4xl text-lg leading-9 text-black/65 md:text-xl">
              انتخاب روش چاپ به عواملی مثل جنس متریال، تیراژ، نوع طرح، کیفیت
              مورد انتظار، زمان تولید و بودجه بستگی دارد. در بلاگ آیریک این
              معیارها را به زبان ساده بررسی می‌کنیم تا قبل از سفارش بتوانید
              گزینه‌های مناسب را مقایسه کنید.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-sm font-medium text-black/45">
                آخرین مطالب
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                راهنمای چاپ
              </h2>
            </div>

            <p className="text-sm text-black/40">
              {blogPosts.length} مطلب
            </p>
          </div>

          {/* CATEGORIES */}
          <nav
            aria-label="دسته‌بندی مطالب"
            className="mb-16 flex flex-wrap gap-2"
          >
            {categories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-5 py-2.5 text-xs ${
                  index === 0
                    ? "border-black bg-black text-white"
                    : "border-black/10 text-black/55"
                }`}
              >
                {category}
              </span>
            ))}
          </nav>

          {/* BLOG GRID */}
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  href={`/وبلاگ/${post.slug}`}
                  className="block"
                >
                  {/* BLOG IMAGE */}
                  <div className="relative mb-7 aspect-[16/10] overflow-hidden bg-[#f5f3ef]">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.04]" />
                  </div>

                  {/* META */}
                  <div className="flex items-center gap-3 text-xs text-black/40">
                    <span>{post.category}</span>

                    <span aria-hidden="true">·</span>

                    <time>{post.date}</time>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-xl font-medium leading-[1.5] tracking-tight transition-opacity group-hover:opacity-60 md:text-2xl">
                    {post.title}
                  </h3>

                  {/* EXCERPT */}
                  <p className="mt-4 line-clamp-3 text-base leading-8 text-black/50">
                    {post.excerpt}
                  </p>

                  {/* READ MORE */}
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    مطالعه مطلب

                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:-translate-x-1"
                    >
                      ↗
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL / SEO CONTENT */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                چرا این بلاگ؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                قبل از سفارش،
                <br />
                تصمیم درست بگیرید.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-lg leading-9 text-black/60">
                تفاوت روش‌های چاپ همیشه از روی ظاهر نهایی مشخص نیست. یک روش
                ممکن است برای تیراژ پایین، انتخاب خوبی باشد اما برای سفارش
                بزرگ هزینه بیشتری ایجاد کند. نوع متریال و جزئیات طرح هم
                می‌توانند نتیجه را تغییر دهند.
              </p>

              <p className="mt-6 text-lg leading-9 text-black/60">
                مطالب این بخش برای پاسخ به همین سؤال‌ها نوشته می‌شوند: چه
                روشی مناسب است، چه زمانی باید از آن استفاده کرد و قبل از
                سفارش چه نکاتی را باید بدانیم.
              </p>

              <Link
                href="/خدمات"
                className="mt-9 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-medium"
              >
                مشاهده خدمات چاپ

                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                سوالات متداول
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                سؤال‌هایی که
                <br />
                قبل از چاپ داریم.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {faqItems.map((item, index) => (
                <details
                  key={item.question}
                  className="group border-b border-black/10"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-base font-medium leading-8 md:text-lg">
                        {item.question}
                      </span>
                    </div>

                    <span className="pt-1 text-lg text-black/30 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="pb-7 pr-10 text-base leading-8 text-black/55">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
