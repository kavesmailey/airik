import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { getProjectBySlug } from "@/content/projects";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return generateMetadata({
    title: project.meta.title,
    description: project.meta.description,
    path: `/نمونه-کارها/${project.slug}`,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd type="service" data={project} />

      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs
            items={[
              { label: "نمونه‌کارها", href: "/نمونه-کارها" },
              { label: project.title, href: `/نمونه-کارها/${project.slug}` },
            ]}
          />

          <div className="mt-6">
            <h1
              className="text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project info */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <MediaPlaceholder
                aspectRatio="4/3"
                label={project.title}
                tone="dark"
              />
            </div>
            <div className="lg:col-span-7">
              <dl className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "محصول", value: project.product },
                  { label: "روش چاپ", value: project.printingMethod },
                  { label: "تعداد", value: project.quantity },
                  { label: "تعداد رنگ", value: project.colorCount },
                  { label: "هدف پروژه", value: project.objective },
                  { label: "برند", value: project.brand },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="card-industrial"
                  >
                    <dt className="text-xs" style={{ color: "var(--color-text-faint)" }}>
                      {item.label}
                    </dt>
                    <dd
                      className="mt-1 text-lg font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Result */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-dark)" }}>
                چالش
              </h2>
              <p className="mt-4" style={{ color: "var(--color-text-dark-muted)", lineHeight: "var(--line-height-relaxed)" }}>
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-dark)" }}>
                نتیجه
              </h2>
              <p className="mt-4" style={{ color: "var(--color-text-dark-muted)", lineHeight: "var(--line-height-relaxed)" }}>
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <h2 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
            فرآیند اجرا
          </h2>
          <ol className="mt-8 space-y-4">
            {project.process.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4"
                style={{ color: "var(--color-text)" }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: "var(--color-accent)", color: "var(--color-accent-contrast)" }}
                >
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
