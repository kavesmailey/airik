import type { Metadata } from "next";
import Link from "next/link";

import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "نمونه‌کارها | AIRIK",
  description:
    "نمونه پروژه‌های چاپ AIRIK؛ از چاپ بسته‌بندی و محصولات تبلیغاتی تا پروژه‌های اختصاصی برندها و کسب‌وکارها.",
};

export default function ProjectsPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              نمونه‌کارها
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              پروژه‌هایی که
              <br />
              به تولید رسیدند.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              نگاهی به بخشی از پروژه‌های چاپی AIRIK؛ از بسته‌بندی و
              اقلام برند تا راهکارهای چاپی برای کسب‌وکارهای مختلف.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          {projects.length > 0 ? (
            <div className="grid gap-x-8 gap-y-20 md:grid-cols-2 md:gap-y-28">
              {projects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/نمونه-کارها/${project.slug}`}
                  className="group block"
                >
                  <article>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f3ef]">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.imageAlt || project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-black/25">
                          تصویر پروژه
                        </div>
                      )}

                      <div className="absolute right-5 top-5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
                          ↗
                        </span>
                      </div>
                    </div>

                    <div className="mt-7 flex items-start justify-between gap-8">
                      <div>
                        {project.category && (
                          <p className="mb-3 text-xs text-black/40">
                            {project.category}
                          </p>
                        )}

                        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                          {project.title}
                        </h2>

                        {project.description && (
                          <p className="mt-4 max-w-xl leading-8 text-black/50">
                            {project.description}
                          </p>
                        )}
                      </div>

                      <span className="pt-1 text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border-y border-black/10 py-24 text-center">
              <p className="text-black/50">
                هنوز پروژه‌ای برای نمایش ثبت نشده است.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project philosophy */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                رویکرد AIRIK
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                هر پروژه،
                <br />
                یک مسئله متفاوت است.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              <p>
                خروجی خوب فقط به کیفیت چاپ وابسته نیست. روش چاپ، متریال،
                تیراژ، جزئیات فایل و کاربرد نهایی همگی روی نتیجه تأثیر
                دارند.
              </p>

              <p>
                در پروژه‌های AIRIK تلاش می‌کنیم قبل از تولید، مسئله
                اصلی را بفهمیم و راهکاری انتخاب کنیم که با نیاز واقعی
                پروژه هماهنگ باشد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/40">
              پروژه بعدی
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              پروژه‌ای دارید که
              <br />
              باید به چاپ برسد؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
              مشخصات پروژه، تعداد و زمان مورد نیاز را برای ما ارسال
              کنید. اگر هنوز درباره روش چاپ مطمئن نیستید، از همین‌جا
              شروع می‌کنیم.
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
