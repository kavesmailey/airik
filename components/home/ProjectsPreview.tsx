import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/content/projects";
import IconArrow from "@/components/ui/IconArrow";

export default function ProjectsPreview() {
  return (
    <section className="section-iric" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-iric">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="نمونه‌کارها"
            title="پروژه‌های آیریک"
            tone="dark"
          />
          <Link
            href="/نمونه-کارها"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "var(--color-text)" }}
          >
            مشاهده همه پروژه‌ها
            <IconArrow direction="left" size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
