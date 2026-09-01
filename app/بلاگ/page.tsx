import type { Metadata } from "next";
import Link from "next/link";

import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "مجله چاپ | AIRIK",
  description:
    "راهنماها، مقالات و نکات کاربردی درباره چاپ، انتخاب روش چاپ، آماده‌سازی فایل، بسته‌بندی و چاپ روی لباس و محصولات.",
};

export default function BlogPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              مجله AIRIK
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              درباره چاپ،
              <br />
              بهتر تصمیم بگیرید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              راهنماها و مطالب کاربردی برای انتخاب روش چاپ، آماده‌سازی
              فایل، بسته‌بندی، چاپ روی لباس و تصمیم‌گیری بهتر برای
              پروژه‌های چاپی.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      {articles.length > 0 && (
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12">
            <div className="mb-10 flex items-center justify-between">
              <p className="text-sm font-medium text-black/40">
                پیشنهاد سردبیر
              </p>

              <span className="text-xs text-black/30">
                01
              </span>
            </div>

            <Link
              href={`/بلاگ/${articles[0].slug}`}
              className="group block rounded-[2rem] border border-black/10 p-8 transition-colors hover:bg-[#f5f3ef] md:p-12"
            >
              <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-end">
                <div>
                  <div className="mb-7 flex flex-wrap gap-3 text-xs text-black/40">
                    <span>{articles[0].category}</span>
                    <span>•</span>
                    <span>{articles[0].date}</span>
                    <span>•</span>
                    <span>{articles[0].readingTime} مطالعه</span>
                  </div>

                  <h2 className="max-w-4xl text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                    {articles[0].title}
                  </h2>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-black/55 md:text-lg">
                    {articles[0].excerpt}
                  </p>
                </div>

                <div className="flex items-end justify-between border-t border-black/10 pt-6 md:border-t-0 md:pt-0">
                  <span className="text-sm text-black/40">
                    مطالعه مقاله
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-3xl transition-transform duration-300 group-hover:-translate-x-2"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                همه مطالب
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                دانش چاپ،
                <br />
                بدون پیچیدگی.
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-black/50">
              از انتخاب تکنولوژی چاپ تا آماده‌سازی فایل و شناخت
              متریال؛ مطالبی برای اینکه قبل از سفارش، انتخاب دقیق‌تری
              داشته باشید.
            </p>
          </div>

          <div className="border-t border-black/10">
            {articles.slice(1).map((article, index) => (
              <Link
                key={article.slug}
                href={`/بلاگ/${article.slug}`}
                className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-11"
              >
                <div className="grid gap-6 md:grid-cols-[80px_1fr_1fr_40px] md:items-center">
                  <span className="text-xs text-black/30">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="mb-3 text-xs text-black/40">
                      {article.category}
                    </p>

                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                      {article.title}
                    </h3>
                  </div>

                  <p className="hidden text-sm leading-7 text-black/45 md:block">
                    {article.excerpt}
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

      {/* Topics */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                موضوعات
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                از کجا
                <br />
                شروع کنیم؟
              </h2>
            </div>

            <div className="grid grid-cols-2 border-t border-black/10">
              {[
                "راهنمای چاپ",
                "روش‌های چاپ",
                "چاپ روی لباس",
                "چاپ پارچه",
                "بسته‌بندی",
                "آماده‌سازی فایل",
                "قیمت و تیراژ",
                "چاپ محصولات",
              ].map((topic, index) => (
                <div
                  key={topic}
                  className="border-b border-black/10 py-7 text-base font-medium md:text-lg"
                >
                  <span className="ml-4 text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              نیاز به راهنمایی دارید؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              لازم نیست همه چیز
              <br />
              را خودتان بدانید.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات پروژه‌تان را بفرستید. درباره روش چاپ، تیراژ و
              متریال مناسب با شما صحبت می‌کنیم.
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
