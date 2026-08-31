import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "بلاگ چاپ | راهنمای انتخاب روش چاپ و متریال | AIRIK",
  description:
    "راهنمای چاپ AIRIK؛ آموزش روش‌های چاپ، انتخاب متریال، آماده‌سازی فایل، تیراژ، قیمت و نکات مهم برای سفارش چاپ.",
};

export default function BlogPage() {
  return (
    <main dir="rtl">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              راهنمای AIRIK
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              درباره چاپ
              <br />
              بیشتر بدانید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              راهنماها و مطالبی برای اینکه قبل از سفارش، روش چاپ، متریال،
              تیراژ و جزئیات تولید را بهتر بشناسید و انتخاب دقیق‌تری داشته
              باشید.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              مقالات
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              از انتخاب روش چاپ
              <br />
              تا اجرای نهایی.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/بلاگ/${article.slug}`}
                className="group grid gap-6 border-b border-black/10 py-10 md:grid-cols-[90px_1fr_auto] md:items-start md:gap-10 md:py-14"
              >
                <span className="text-xs text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-medium leading-[1.5] tracking-tight md:text-3xl">
                    {article.title}
                  </h3>

                  {article.excerpt && (
                    <p className="mt-4 max-w-3xl leading-8 text-black/50">
                      {article.excerpt}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-black/35">
                    {article.category && <span>{article.category}</span>}
                    {article.readingTime && (
                      <span>{article.readingTime} دقیقه مطالعه</span>
                    )}
                  </div>
                </div>

                <span className="text-xl text-black/30 transition-transform group-hover:-translate-x-1">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium text-black/45">
              هنوز سؤال دارید؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              لازم نیست از ابتدا
              <br />
              روش چاپ را بدانید.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
              اطلاعات پروژه‌تان را برای ما بفرستید. بر اساس محصول، تیراژ،
              متریال و کاربرد نهایی، راهکار مناسب را بررسی می‌کنیم.
            </p>

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
