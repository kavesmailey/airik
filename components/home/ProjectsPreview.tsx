import Link from "next/link";

import { projects } from "@/content/projects";

import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import IconArrow from "@/components/ui/IconArrow";

export default function ProjectsPreview() {
  return (
    <section
      className="py-24 sm:py-32 lg:py-40"
      style={{ backgroundColor: "var(--color-bg)" }}
      aria-labelledby="projects-preview-heading"
    >
      <div className="container-iric">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-accent)" }}
            >
              نمونه‌کارها
            </p>

            <h2
              id="projects-preview-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{
                color: "var(--color-text)",
                lineHeight: "var(--line-height-tight)",
              }}
            >
              بخشی از کارهای ما
            </h2>
          </div>

          <Link
            href="/نمونه-کارها"
            className="group inline-flex w-fit items-center gap-3 text-sm font-medium"
            style={{
              color: "var(--color-text)",
              textDecoration: "none",
            }}
          >
            <span>مشاهده همه نمونه‌کارها</span>

            <span
              className="transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            >
              <IconArrow direction="left" size={18} />
            </span>
          </Link>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <article key={project.slug} className="group">
              <div className="overflow-hidden">
                <MediaPlaceholder
                  aspectRatio="4/3"
                  label={project.title}
                  tone="dark"
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      {String(index + 1).padStart(2, "0")} ·{" "}
                      {project.category}
                    </p>

                    <h3
                      className="mt-3 text-xl font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mt-3 max-w-xl text-sm"
                      style={{
                        color: "var(--color-text-muted)",
                        lineHeight: "var(--line-height-relaxed)",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <span
                    className="mt-1 shrink-0 opacity-40 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
                    style={{ color: "var(--color-text)" }}
                    aria-hidden="true"
                  >
                    <IconArrow direction="up-left" size={20} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
