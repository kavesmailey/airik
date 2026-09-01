import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "پروژه پیدا نشد | Ayric",
    };
  }

  return {
    title: `${project.title} | Ayric`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <Link
            href="/نمونه-کارها"
            className="mb-14 inline-flex items-center gap-3 text-sm text-black/40 transition-opacity hover:opacity-60"
          >
            <span aria-hidden="true">→</span>
            بازگشت به نمونه‌کارها
          </Link>

          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                {project.category}
              </p>

              <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </div>

            <p className="text-lg leading-9 text-black/60 md:text-xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Visual */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[2rem] bg-[#e7e2d4]">
            <div className="text-center">
              <span className="block text-xs tracking-[0.3em] text-black/30">
                AYRIC
              </span>

              <span className="mt-6 block text-[9rem] font-medium leading-none tracking-[-0.08em] text-black/10 md:text-[15rem]">
                {project.title.slice(0, 1)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                درباره پروژه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                یک پروژه،
                <br />
                چند تصمیم.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60 md:text-xl md:leading-10">
                این پروژه با هدف تبدیل نیاز اولیه به یک خروجی فیزیکی
                قابل استفاده و باکیفیت اجرا شده است. در این مسیر،
                جزئیات محصول، متریال، روش تولید و کیفیت نهایی در کنار
                یکدیگر بررسی شده‌اند.
              </p>

              <p className="mt-8 text-lg leading-9 text-black/60 md:text-xl md:leading-10">
                نتیجه، محصولی است که نه‌تنها از نظر فنی درست اجرا شده،
                بلکه با نیاز و شخصیت پروژه نیز هماهنگ است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              جزئیات اجرا
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              پشت صحنه پروژه
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "نیاز",
                text: "شناخت محصول و نیاز اصلی پروژه پیش از انتخاب روش اجرا.",
              },
              {
                number: "02",
                title: "راهکار",
                text: "انتخاب روش چاپ و متریال متناسب با کاربرد و نتیجه مورد انتظار.",
              },
              {
                number: "03",
                title: "اجرا",
                text: "تولید نهایی با تمرکز بر جزئیات، کیفیت و هماهنگی خروجی.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-b border-black/10 px-0 py-9 md:border-l md:px-8 md:py-10 md:first:border-r-0 md:last:border-l-0"
              >
                <span className="text-xs text-black/30">
                  {item.number}
                </span>

                <h3 className="mt-7 text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-black/50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-[#d0d5ec]">
              <span className="text-xs tracking-[0.25em] text-black/30">
                PROJECT IMAGE 01
              </span>
            </div>

            <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-[#ead8c5]">
              <span className="text-xs tracking-[0.25em] text-black/30">
                PROJECT IMAGE 02
              </span>
            </div>

            <div className="flex aspect-[2/1] items-center justify-center rounded-[1.5rem] bg-[#e7e2d4] md:col-span-2">
              <span className="text-xs tracking-[0.25em] text-black/30">
                PROJECT IMAGE 03
              </span>
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
              شما هم پروژه‌ای
              <br />
              برای اجرا دارید؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات پروژه‌تان را برای ما ارسال کنید تا درباره روش
              اجرا و هزینه با شما صحبت کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Back */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <Link
            href="/نمونه-کارها"
            className="inline-flex items-center gap-3 text-sm text-black/40 transition-opacity hover:opacity-60"
          >
            <span aria-hidden="true">→</span>
            مشاهده همه نمونه‌کارها
          </Link>
        </div>
      </section>
    </main>
  );
}
