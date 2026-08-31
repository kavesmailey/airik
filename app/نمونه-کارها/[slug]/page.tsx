import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getProjectBySlug,
  projects,
} from "@/content/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: project.meta.title,
    description: project.meta.description,
    alternates: {
      canonical: `/نمونه-کارها/${project.slug}`,
    },
    openGraph: {
      title: project.meta.title,
      description: project.meta.description,
      type: "article",
      locale: "fa_IR",
      siteName: "AIRIK",
      url: `/نمونه-کارها/${project.slug}`,
      images:
        project.images.length > 0
          ? project.images.map((image) => ({
              url: image,
              alt: project.title,
            }))
          : undefined,
    },
  };
}

export default function ProjectPage({
  params,
}: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.meta.description,
    brand: {
      "@type": "Brand",
      name: project.brand,
    },
    about: project.product,
    inLanguage: "fa-IR",
  };

  return (
    <main dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />

      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <Link
            href="/نمونه-کارها"
            className="mb-12 inline-flex items-center gap-3 text-sm text-black/45 transition-opacity hover:opacity-60"
          >
            <span aria-hidden="true">→</span>
            بازگشت به نمونه‌کارها
          </Link>

          <div className="max-w-5xl">
            <p className="mb-7 text-sm font-medium text-black/40">
              {project.brand}
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              {project.objective}
            </p>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid border-y border-black/10 md:grid-cols-3">
            <div className="border-b border-black/10 py-8 md:border-b-0 md:border-l md:py-10 md:pl-10">
              <p className="mb-4 text-xs text-black/40">
                محصول
              </p>

              <p className="text-lg font-medium">
                {project.product}
              </p>
            </div>

            <div className="border-b border-black/10 py-8 md:border-b-0 md:border-l md:px-10">
              <p className="mb-4 text-xs text-black/40">
                روش چاپ
              </p>

              <p className="text-lg font-medium">
                {project.printingMethod}
              </p>
            </div>

            <div className="py-8 md:py-10 md:pr-10">
              <p className="mb-4 text-xs text-black/40">
                تیراژ
              </p>

              <p className="text-lg font-medium">
                {project.quantity}
              </p>
            </div>
          </div>

          <div className="mt-10 grid border-b border-black/10 md:grid-cols-2">
            <div className="border-b border-black/10 py-8 md:border-b-0 md:border-l md:py-10 md:pl-10">
              <p className="mb-4 text-xs text-black/40">
                تعداد رنگ
              </p>

              <p className="text-lg font-medium">
                {project.colorCount}
              </p>
            </div>

            <div className="py-8 md:py-10 md:pr-10">
              <p className="mb-4 text-xs text-black/40">
                هدف پروژه
              </p>

              <p className="text-lg font-medium leading-8">
                {project.objective}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Images */}
      {project.images.length > 0 && (
        <section className="border-y border-black/10 bg-[#f5f3ef]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
            <div
              className={
                project.images.length === 1
                  ? "mx-auto max-w-5xl"
                  : "grid gap-6 md:grid-cols-2"
              }
            >
              {project.images.map((image, index) => (
                <figure
                  key={`${image}-${index}`}
                  className="overflow-hidden bg-white"
                >
                  <img
                    src={image}
                    alt={`${project.title} — تصویر ${index + 1}`}
                    className="h-auto w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                چالش پروژه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                مسئله‌ای که باید
                <br />
                حل می‌شد.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-10 text-black/65 md:text-xl">
                {project.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              فرآیند تولید
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              پروژه چگونه
              <br />
              به خروجی رسید؟
            </h2>
          </div>

          <div className="border-t border-black/10">
            {project.process.map((step, index) => (
              <div
                key={`${step}-${index}`}
                className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[90px_1fr] md:items-center md:py-10"
              >
                <span className="text-xs text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-xl font-medium tracking-tight md:text-2xl">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                نتیجه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                خروجی نهایی
                <br />
                پروژه.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-10 text-black/65 md:text-xl">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="border-y border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <p className="mb-4 text-xs text-white/40">
                برند
              </p>

              <p className="text-lg font-medium">
                {project.brand}
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs text-white/40">
                محصول
              </p>

              <p className="text-lg font-medium">
                {project.product}
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs text-white/40">
                روش چاپ
              </p>

              <p className="text-lg font-medium">
                {project.printingMethod}
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs text-white/40">
                تیراژ
              </p>

              <p className="text-lg font-medium">
                {project.quantity}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <p className="mb-7 text-sm font-medium text-black/40">
                پروژه بعدی
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
                پروژه چاپی شما
                <br />
                می‌تواند بعدی باشد.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
                مشخصات پروژه، تعداد و زمان مورد نیاز را برای ما ارسال
                کنید تا راهکار مناسب را بررسی کنیم.
              </p>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
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
