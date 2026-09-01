import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { articles, getArticle } from "@/content/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "مقاله پیدا نشد | AIRIK",
    };
  }

  return {
    title: `${article.title} | AIRIK`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main dir="rtl">
      {/* Header */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-36">
          <Link
            href="/بلاگ"
            className="mb-12 inline-flex items-center gap-3 text-sm text-black/40 transition-opacity hover:opacity-60"
          >
            <span aria-hidden="true">→</span>
            بازگشت به مجله
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-4 text-xs text-black/40">
            <span>{article.category}</span>
            <span className="h-1 w-1 rounded-full bg-black/20" />
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-black/20" />
            <span>{article.readingTime} مطالعه</span>
          </div>

          <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
        <div className="prose prose-lg max-w-none">
          <p>
            انتخاب روش چاپ یکی از مهم‌ترین تصمیم‌ها در مسیر تولید یک
            محصول چاپی است. نتیجه نهایی فقط به دستگاه یا تکنولوژی چاپ
            وابسته نیست؛ جنس سطح، تیراژ، جزئیات طرح، تعداد رنگ و کاربرد
            محصول همگی روی این انتخاب تأثیر دارند.
          </p>

          <h2>اول باید محصول را بشناسیم</h2>

          <p>
            قبل از انتخاب روش چاپ باید مشخص شود قرار است چه چیزی چاپ
            شود و این محصول در چه شرایطی استفاده خواهد شد. چاپ روی
            پارچه، کاغذ، مقوا، پلاستیک یا سطوح مختلف، محدودیت‌ها و
            امکانات متفاوتی دارد.
          </p>

          <p>
            به همین دلیل یک روش چاپ نمی‌تواند برای تمام پروژه‌ها
            بهترین گزینه باشد. روش مناسب، روشی است که بین کیفیت،
            هزینه، تیراژ و کاربرد تعادل ایجاد کند.
          </p>

          <h2>تیراژ چه نقشی دارد؟</h2>

          <p>
            تعداد سفارش یکی از عوامل مهم در انتخاب روش چاپ است. بعضی
            روش‌ها برای تیراژ پایین انعطاف بیشتری دارند، در حالی که
            برخی روش‌ها زمانی اقتصادی‌تر می‌شوند که تعداد تولید بالا
            باشد.
          </p>

          <p>
            بنابراین قبل از مقایسه قیمت هر واحد، بهتر است هزینه کل
            آماده‌سازی و تولید را در نظر بگیریم.
          </p>

          <h2>کیفیت فقط به رزولوشن مربوط نیست</h2>

          <p>
            کیفیت چاپ مجموعه‌ای از عوامل مختلف است. وضوح فایل، نوع
            رنگ، جنس سطح، جذب متریال و تکنولوژی چاپ همگی روی نتیجه
            نهایی تأثیر دارند.
          </p>

          <p>
            یک فایل با کیفیت بالا لزوماً روی هر متریالی نتیجه یکسانی
            ایجاد نمی‌کند. انتخاب درست فرآیند چاپ باید همزمان با
            انتخاب متریال انجام شود.
          </p>

          <h2>اگر هنوز مطمئن نیستید</h2>

          <p>
            لازم نیست قبل از تماس با چاپخانه همه جزئیات فنی را بدانید.
            کافی است محصول، تعداد تقریبی، ابعاد و کاربرد نهایی را
            مشخص کنید.
          </p>

          <p>
            بر اساس همین اطلاعات می‌توان روش‌های مناسب را بررسی و
            گزینه‌ای متناسب با پروژه پیشنهاد کرد.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-36">
          <p className="mb-7 text-sm font-medium text-black/40">
            پروژه چاپ دارید؟
          </p>

          <h2 className="max-w-3xl text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
            حالا که اطلاعات بیشتری دارید،
            <br />
            پروژه را شروع کنیم.
          </h2>

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
      </section>

      {/* More articles */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-sm font-medium text-black/40">
                ادامه مطالعه
              </p>

              <h2 className="text-3xl font-medium tracking-tight">
                مطالب مرتبط
              </h2>
            </div>

            <Link
              href="/بلاگ"
              className="hidden text-sm text-black/50 transition-opacity hover:opacity-60 md:block"
            >
              همه مقالات ↗
            </Link>
          </div>

          <div className="border-t border-black/10">
            {articles
              .filter((item) => item.slug !== article.slug)
              .slice(0, 3)
              .map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/بلاگ/${item.slug}`}
                  className="group flex items-start justify-between gap-8 border-b border-black/10 py-8 transition-opacity hover:opacity-60"
                >
                  <div className="flex gap-6">
                    <span className="pt-1 text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="mb-3 text-xs text-black/40">
                        {item.category}
                      </p>

                      <h3 className="text-xl font-medium tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform group-hover:-translate-x-1"
                  >
                    ↗
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
