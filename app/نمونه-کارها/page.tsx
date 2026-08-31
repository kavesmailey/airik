import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "نمونه‌کارها | پروژه‌های چاپ AIRIK",
  description:
    "نمونه‌ای از پروژه‌های چاپ AIRIK برای برندها، کسب‌وکارها و محصولات مختلف.",
};

export default function ProjectsPage() {
  return (
    <main dir="rtl">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              پروژه‌های AIRIK
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              نمونه‌هایی از
              <br />
              کارهایی که چاپ کرده‌ایم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              مجموعه‌ای از پروژه‌های چاپی برای کاربردها و کسب‌وکارهای مختلف؛
              از بسته‌بندی و اقلام برند تا محصولات چاپی تخصصی.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/نمونه-کارها/${project.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f3ef]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-black/30">
                      تصویر پروژه
                    </div>
                  )}

                  <span className="absolute left-5 top-5 text-xs text-black/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-7 flex items-start justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                      {project.title}
                    </h2>

                    {project.description && (
                      <p className="mt-3 max-w-xl leading-8 text-black/50">
                        {project.description}
                      </p>
                    )}
                  </div>

                  <span className="mt-1 text-xl text-black/30 transition-transform group-hover:-translate-x-1">
                    ↗
                  </span>
                </div>

                {(project.category || project.service) && (
                  <div className="mt-5 flex flex-wrap gap-3 text-xs text-black/35">
                    {project.category && <span>{project.category}</span>}
                    {project.service && <span>{project.service}</span>}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium text-black/45">
              پروژه بعدی
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              پروژه چاپی شما
              <br />
              می‌تواند پروژه بعدی باشد.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
              اطلاعات سفارش، تعداد و کاربرد محصول را برای ما بفرستید تا
              مناسب‌ترین راهکار را بررسی کنیم.
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
