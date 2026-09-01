import type { Metadata } from "next";
import Link from "next/link";

import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "نمونه‌کارها | Ayric",
  description:
    "نمونه‌ای از پروژه‌های چاپ و تولید Ayric برای برندها، کسب‌وکارها و پروژه‌های خلاقانه.",
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
              چیزهایی که
              <br />
              ساخته‌ایم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              نگاهی به بخشی از پروژه‌هایی که برای برندها و کسب‌وکارها
              طراحی و تولید کرده‌ایم؛ از ایده اولیه تا خروجی نهایی.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="border-t border-black/10">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/نمونه-کارها/${project.slug}`}
                className="group block border-b border-black/10 py-10 transition-opacity hover:opacity-60 md:py-14"
              >
                <div className="grid gap-8 md:grid-cols-[90px_1fr_1fr_40px] md:items-center">
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="mb-4 text-xs text-black/40">
                      {project.category}
                    </p>

                    <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                      {project.title}
                    </h2>
                  </div>

                  <p className="hidden text-base leading-8 text-black/50 md:block">
                    {project.description}
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

      {/* Approach */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                رویکرد
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                هر پروژه،
                <br />
                مسئله خودش را دارد.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-lg leading-9 text-black/60">
                ما از یک نسخه ثابت برای تمام پروژه‌ها استفاده نمی‌کنیم.
                نوع محصول، مخاطب، تیراژ، متریال و کاربرد نهایی تعیین
                می‌کنند که چه راهکاری مناسب‌تر است.
              </p>

              <p className="text-lg leading-9 text-black/60">
                نتیجه باید فقط زیبا نباشد؛ باید در دنیای واقعی قابل
                تولید، قابل استفاده و متناسب با نیاز کسب‌وکار باشد.
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
              پروژه بعدی
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              شاید پروژه بعدی،
              <br />
              پروژه شما باشد.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات پروژه چاپی خود را برای ما بفرستید تا درباره
              بهترین راهکار برای تولید آن صحبت کنیم.
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
