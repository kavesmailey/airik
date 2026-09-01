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
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm text-black/40">
              نمونه‌کارهای آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              بخشی از چیزهایی
              <br />
              که ساخته‌ایم.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/55 md:text-lg md:leading-9">
              نگاهی به بخشی از پروژه‌های چاپ و تولید آیریک برای
              برندها، کسب‌وکارها و مجموعه‌های مختلف.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-sm text-black/40">
                پروژه‌ها
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                انتخابی از کارهای ما
              </h2>
            </div>

            <span className="hidden text-sm text-black/35 md:block">
              {String(projects.length).padStart(2, "0")} پروژه
            </span>
          </div>

          <div className="grid gap-x-6 gap-y-20 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#e7e2d4]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-center">
                        <span className="block text-[10px] tracking-[0.35em] text-black/30">
                          AYRIC
                        </span>

                        <span className="mt-5 block text-8xl font-medium tracking-[-0.08em] text-black/10">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-5 right-5">
                    <span className="inline-flex rounded-full bg-white/70 px-3 py-1.5 text-[11px] text-black/50 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-7 text-black/50">
                        {project.description}
                      </p>
                    </div>

                    <span className="pt-1 text-xs text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / Approach */}
      <section className="border-y border-black/10 bg-[#f7f5f1]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
            <div>
              <p className="mb-5 text-sm text-black/40">
                نگاه آیریک
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                چاپ فقط خروجی نیست؛
                <br />
                بخشی از تجربه است.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-black/60 md:text-lg md:leading-9">
                از انتخاب متریال و روش چاپ تا جزئیات اجرای نهایی،
                هر تصمیم روی چیزی که در دست مخاطب قرار می‌گیرد
                تأثیر می‌گذارد.
              </p>

              <p className="mt-6 text-base leading-8 text-black/60 md:text-lg md:leading-9">
                ما تلاش می‌کنیم این جزئیات درست انتخاب و درست اجرا
                شوند تا نتیجه نهایی همان چیزی باشد که باید باشد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1917] text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm text-white/40">
              پروژه شما
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              پروژه بعدی‌تان را
              <br />
              با ما شروع کنید.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 md:text-lg md:leading-9">
              مشخصات پروژه‌تان را برای ما بفرستید تا درباره
              روش اجرا و هزینه با شما صحبت کنیم.
            </p>

            <a
              href="/استعلام-قیمت"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform duration-300 hover:-translate-y-0.5"
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
