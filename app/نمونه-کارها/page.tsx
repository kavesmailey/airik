import type { Metadata } from "next";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "نمونه‌کارها | آیریک",
  description:
    "نمونه‌ای از پروژه‌های چاپ و تولید آیریک برای برندها و کسب‌وکارها.",
};

export default function ProjectsPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              نمونه‌کارهای آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              آنچه ساخته‌ایم،
              <br />
              بخشی از داستان ماست.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              مجموعه‌ای از پروژه‌های چاپ و تولید که برای برندها و
              کسب‌وکارهای مختلف اجرا کرده‌ایم.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              پروژه‌ها
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              انتخابی از پروژه‌های آیریک
            </h2>
          </div>

          <div className="grid gap-x-6 gap-y-20 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.slug} className="group">
                {/* Project Image */}
                <div
                  className={`relative mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] ${
                    index % 3 === 0
                      ? "bg-[#e7e2d4]"
                      : index % 3 === 1
                        ? "bg-[#d0d5ec]"
                        : "bg-[#ead8c5]"
                  }`}
                >
                  <div className="text-center transition-transform duration-500 group-hover:scale-105">
                    <span className="block text-xs tracking-[0.25em] text-black/30">
                      AYRIC
                    </span>

                    <span className="mt-4 block text-7xl font-medium leading-none tracking-[-0.08em] text-black/10 md:text-8xl">
                      {project.title.slice(0, 1)}
                    </span>
                  </div>

                  <span className="absolute bottom-6 right-6 text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Info */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-2 text-xs text-black/35">
                      {project.category}
                    </p>

                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                      {project.title}
                    </h3>

                    {project.description && (
                      <p className="mt-3 max-w-xl text-sm leading-7 text-black/50">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                نگاه ما به پروژه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                خروجی خوب،
                <br />
                اتفاقی نیست.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60 md:text-xl md:leading-10">
                هر پروژه از یک نیاز مشخص شروع می‌شود. انتخاب متریال،
                روش چاپ، جزئیات اجرا و کنترل کیفیت، همه بخشی از فرآیندی
                هستند که به نتیجه نهایی شکل می‌دهند.
              </p>

              <p className="mt-8 text-lg leading-9 text-black/60 md:text-xl md:leading-10">
                به همین دلیل نمونه‌کارها برای ما فقط یک گالری نیستند؛
                نشانه‌ای از کیفیت تصمیم‌هایی هستند که پشت هر خروجی
                گرفته شده است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              پروژه شما
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              شاید پروژه بعدی،
              <br />
              پروژه شما باشد.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات پروژه‌تان را برای ما بفرستید تا درباره بهترین
              روش اجرا و هزینه با شما صحبت کنیم.
            </p>

            <a
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
