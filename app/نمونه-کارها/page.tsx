import type { Metadata } from "next";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "نمونه‌کارها | آیریک",
  description:
    "نمونه‌ای از پروژه‌های چاپ و تولید آیریک برای برندها و کسب‌وکارها.",
};

export default function ProjectsPage() {
  return (
    <main dir="rtl" className="overflow-hidden">
      {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12 lg:py-40">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs font-medium tracking-wide text-black/40 sm:text-sm">
              نمونه‌کارهای آیریک
            </p>

            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[1.12] tracking-[-0.045em]">
              بخشی از چیزهایی
              <br />
              که ساخته‌ایم.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/55 sm:mt-10 sm:text-lg sm:leading-9">
              نگاهی به بخشی از پروژه‌های چاپ و تولید آیریک برای
              برندها، کسب‌وکارها و مجموعه‌های مختلف.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          PORTFOLIO
      ───────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          {/* Section heading */}
          <div className="mb-12 flex items-end justify-between gap-8 sm:mb-16">
            <div>
              <p className="mb-4 text-xs font-medium text-black/40 sm:text-sm">
                پروژه‌ها
              </p>

              <h2 className="text-2xl font-medium tracking-[-0.025em] sm:text-3xl md:text-4xl">
                انتخابی از کارهای ما
              </h2>
            </div>

            <span className="hidden text-xs text-black/30 sm:block">
              {String(projects.length).padStart(2, "0")} پروژه
            </span>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:gap-y-20 md:grid-cols-2 md:gap-y-24">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="group"
              >
                {/* Project image */}
                <div
                  className={[
                    "relative aspect-[4/3] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]",
                    index % 3 === 0
                      ? "bg-[#e7e2d4]"
                      : index % 3 === 1
                        ? "bg-[#d0d5ec]"
                        : "bg-[#ead8c5]",
                  ].join(" ")}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-center transition-transform duration-700 ease-out group-hover:scale-105">
                        <span className="block text-[9px] font-medium tracking-[0.4em] text-black/30 sm:text-[10px]">
                          AYRIC
                        </span>

                        <span className="mt-4 block text-[5rem] font-medium leading-none tracking-[-0.08em] text-black/10 sm:text-8xl">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Category */}
                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
                    <span className="inline-flex rounded-full bg-white/70 px-3 py-1.5 text-[10px] text-black/55 shadow-sm backdrop-blur-md sm:text-[11px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Number */}
                  <span className="absolute left-4 top-4 text-[10px] text-black/30 sm:left-5 sm:top-5 sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project information */}
                <div className="mt-5 sm:mt-6">
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium tracking-[-0.02em] sm:text-xl md:text-2xl">
                        {project.title}
                      </h3>

                      {project.description && (
                        <p className="mt-2.5 max-w-xl text-sm leading-7 text-black/50 sm:mt-3">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <span className="shrink-0 pt-1 text-[10px] text-black/25 sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          APPROACH
      ───────────────────────────────────────── */}
      <section className="border-y border-black/10 bg-[#f7f5f1]">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:gap-32">
            <div>
              <p className="mb-5 text-xs font-medium text-black/40 sm:text-sm">
                نگاه آیریک
              </p>

              <h2 className="text-3xl font-medium leading-[1.35] tracking-[-0.035em] sm:text-4xl md:text-5xl">
                چاپ فقط خروجی نیست؛
                <br />
                بخشی از تجربه است.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-black/60 sm:text-lg sm:leading-9">
                از انتخاب متریال و روش چاپ تا جزئیات اجرای نهایی،
                هر تصمیم روی چیزی که در دست مخاطب قرار می‌گیرد
                تأثیر می‌گذارد.
              </p>

              <p className="mt-6 text-base leading-8 text-black/60 sm:text-lg sm:leading-9">
                ما تلاش می‌کنیم این جزئیات درست انتخاب و درست اجرا
                شوند تا نتیجه نهایی همان چیزی باشد که باید باشد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CTA
      ───────────────────────────────────────── */}
      <section className="bg-[#1a1917] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-medium text-white/40 sm:text-sm">
              پروژه شما
            </p>

            <h2 className="text-3xl font-medium leading-[1.35] tracking-[-0.035em] sm:text-4xl md:text-5xl lg:text-6xl">
              پروژه بعدی‌تان را
              <br />
              با ما شروع کنید.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg sm:leading-9">
              مشخصات پروژه‌تان را برای ما بفرستید تا درباره روش
              اجرا و هزینه با شما صحبت کنیم.
            </p>

            <a
              href="/استعلام-قیمت"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span>استعلام قیمت</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
