import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/content/projects";

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
    title: project.meta?.title || `${project.title} | AIRIK`,
    description:
      project.meta?.description ||
      project.description ||
      `جزئیات پروژه ${project.title} در AIRIK`,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main dir="rtl">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <Link
            href="/نمونه-کارها"
            className="mb-10 inline-block text-sm text-black/45 transition-colors hover:text-black"
          >
            ← بازگشت به نمونه‌کارها
          </Link>

          <div className="max-w-5xl">
            {project.category && (
              <p className="mb-7 text-sm font-medium text-black/45">
                {project.category}
              </p>
            )}

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            {project.description && (
              <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
                {project.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {project.image && (
        <section>
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-12">
            <div className="overflow-hidden bg-[#f5f3ef]">
              <img
                src={project.image}
                alt={project.title}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            <div>
              <p className="text-sm font-medium text-black/45">
                درباره پروژه
              </p>
            </div>

            <div className="space-y-10 text-lg leading-9 text-black/65">
              {project.challenge && (
                <div>
                  <h2 className="mb-4 text-xl font-medium text-black">
                    چالش
                  </h2>
                  <p>{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h2 className="mb-4 text-xl font-medium text-black">
                    راهکار
                  </h2>
                  <p>{project.solution}</p>
                </div>
              )}

              {project.outcome && (
                <div>
                  <h2 className="mb-4 text-xl font-medium text-black">
                    نتیجه
                  </h2>
                  <p>{project.outcome}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {(project.service || project.material || project.application) && (
        <section className="border-y border-black/10 bg-[#f5f3ef]">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
            <div className="grid gap-12 md:grid-cols-3">
              {project.service && (
                <div>
                  <p className="mb-4 text-xs text-black/40">نوع چاپ</p>
                  <p className="text-lg font-medium">{project.service}</p>
                </div>
              )}

              {project.material && (
                <div>
                  <p className="mb-4 text-xs text-black/40">متریال</p>
                  <p className="text-lg font-medium">{project.material}</p>
                </div>
              )}

              {project.application && (
                <div>
                  <p className="mb-4 text-xs text-black/40">کاربرد</p>
                  <p className="text-lg font-medium">
                    {project.application}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-6 text-sm font-medium text-black/45">
                پروژه بعدی
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                برای پروژه چاپی
                <br />
                خودتان آماده‌اید؟
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
                اطلاعات پروژه‌تان را برای ما بفرستید تا راهکار مناسب را
                بررسی کنیم.
              </p>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
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
