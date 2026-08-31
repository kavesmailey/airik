import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section
      className="py-28 sm:py-32 lg:py-40"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-iric">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-10"
                style={{ backgroundColor: "var(--color-accent)" }}
              />

              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                نمونه‌کارها
              </p>
            </div>

            <h2
              className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              style={{
                color: "var(--color-text)",
                lineHeight: "1.2",
              }}
            >
              چاپ وقتی مهم است
              <br />
              <span style={{ color: "var(--color-text-muted)" }}>
                که روی محصول واقعی دیده شود.
              </span>
            </h2>

            <p
              className="mt-7 max-w-2xl text-base sm:text-lg"
              style={{
                color: "var(--color-text-muted)",
                lineHeight: "2",
              }}
            >
              نمونه‌کارهای آیریک را بر اساس محصول، متریال و روش چاپ ببینید و با
              کیفیت اجرای واقعی پروژه‌ها آشنا شوید.
            </p>
          </div>

          <Link
            href="/نمونه-کارها"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-bold transition-opacity hover:opacity-60"
            style={{ color: "var(--color-text)" }}
          >
            مشاهده همه نمونه‌کارها
            <span aria-hidden="true">←</span>
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/نمونه-کارها/${project.slug}`}
              className="group"
            >
              {/* Image */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-md"
                style={{ backgroundColor: "var(--color-bg-light)" }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  <span className="text-xs">{project.title}</span>
                </div>

                <div
                  className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </div>

              {/* Information */}
              <div className="mt-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      {String(index + 1).padStart(2, "0")} · {project.product}
                    </p>

                    <h3
                      className="mt-3 text-xl font-bold sm:text-2xl"
                      style={{
                        color: "var(--color-text)",
                        lineHeight: "1.4",
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <span
                    className="mt-1 shrink-0 text-xl transition-transform duration-300 group-hover:-translate-x-1"
                    style={{ color: "var(--color-text-faint)" }}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <p
                  className="mt-3 text-sm"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: "1.8",
                  }}
                >
                  {project.objective}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className="mt-20 border-t pt-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="max-w-2xl text-sm"
              style={{
                color: "var(--color-text-faint)",
                lineHeight: "1.9",
              }}
            >
              هر پروژه داستان، محدودیت و نیاز خودش را دارد. جزئیات هر سفارش
              مسیر اجرای آن را مشخص می‌کند.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="shrink-0 text-sm font-bold transition-opacity hover:opacity-60"
              style={{ color: "var(--color-text)" }}
            >
              پروژه شما چیست؟ →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
