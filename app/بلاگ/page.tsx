import type { Metadata } from "next";
import Link from "next/link";

import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "مجله چاپ | AIRIK",
  description:
    "راهنمای چاپ AIRIK؛ از شناخت روش‌های چاپ و انتخاب متریال تا آماده‌سازی فایل، تیراژ، قیمت و سفارش.",
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
              دقیق‌تر بدانید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              راهنماها و مطالب کاربردی درباره روش‌های چاپ، متریال،
              آماده‌سازی فایل، بسته‌بندی و انتخاب راهکار مناسب برای
              پروژه‌های مختلف.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-6 text-sm font-medium text-black/40">
                مقالات
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                راهنماهای چاپ
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/50">
              مطالبی برای اینکه قبل از سفارش، روش چاپ و مشخصات پروژه را
              بهتر بشناسید.
            </p>
          </div>

          {articles.length > 0 ? (
            <div className="border-t border-black/10">
              {articles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/بلاگ/${article.slug}`}
                  className="group block border-b border-black/10 py-10 transition-opacity hover:opacity-60 md:py-14"
                >
                  <article className="grid gap-7 md:grid-cols-[90px_1fr_40px] md:items-start">
                    <div className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      {article.category && (
                        <p className="mb-5 text-xs text-black/40">
                          {article.category}
                        </p>
                      )}

                      <h3 className="max-w-4xl text-2xl font-medium leading-[1.5] tracking-tight md:text-3xl">
                        {article.title}
                      </h3>

                      {article.excerpt && (
                        <p className="mt-5 max-w-3xl text-base leading-8 text-black/50 md:text-lg">
                          {article.excerpt}
                        </p>
                      )}

                      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/35">
                        {article.readTime && (
                          <span>{article.readTime}</span>
                        )}

                        {article.publishedAt && (
                          <span>{article.publishedAt}</span>
                        )}
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="text-xl transition-transform duration-300 group-hover:-translate-x-1"
                    >
                      ↗
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border-y border-black/10 py-20 text-center">
              <p className="text-black/50">
                هنوز مقاله‌ای منتشر نشده است.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Topics */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
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

            <div className="border-t border-black/10">
              {[
                {
                  number: "۰۱",
                  title: "روش‌های چاپ",
                  text: "شناخت تفاوت روش‌هایی مثل DTF، سیلک و سایر تکنیک‌های چاپ.",
                },
                {
                  number: "۰۲",
                  title: "انتخاب متریال",
                  text: "بررسی جنس، سطح و ویژگی‌هایی که روی نتیجه نهایی چاپ تأثیر می‌گذارند.",
                },
                {
                  number: "۰۳",
                  title: "آماده‌سازی فایل",
                  text: "نکات فنی مهم قبل از ارسال فایل برای چاپ.",
                },
                {
                  number: "۰۴",
                  title: "قیمت و تیراژ",
                  text: "عواملی که روی هزینه چاپ و انتخاب روش مناسب اثر دارند.",
                },
              ].map((topic) => (
                <div
                  key={topic.number}
                  className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[70px_180px_1fr] md:gap-8"
                >
                  <span className="text-xs text-black/30">
                    {topic.number}
                  </span>

                  <h3 className="text-lg font-medium">
                    {topic.title}
                  </h3>

                  <p className="leading-8 text-black/55">
                    {topic.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service discovery */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                نیاز به چاپ دارید؟
              </p>

              <h2 className="max-w-4xl text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                اول روش مناسب را بشناسید،
                <br />
                بعد سفارش دهید.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-black/55">
                اگر هنوز نمی‌دانید کدام سرویس برای پروژه شما مناسب
                است، خدمات چاپ AIRIK را بررسی کنید.
              </p>
            </div>

            <Link
              href="/خدمات"
              className="inline-flex w-fit items-center gap-3 text-sm transition-opacity hover:opacity-50"
            >
              مشاهده خدمات چاپ
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              شروع پروژه
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              سوالی درباره چاپ دارید؟
              <br />
              با ما در میان بگذارید.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              اگر پاسخ سوالتان را در مجله پیدا نکردید، مشخصات پروژه را
              برای ما بفرستید تا راهکار مناسب را بررسی کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
