import type { Project } from "@/content/projects";

import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import IconArrow from "@/components/ui/IconArrow";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group block">
      <MediaPlaceholder
        aspectRatio="4/3"
        label={project.title}
        tone="dark"
        className="mb-4"
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="mb-2 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            {project.category}
          </p>

          <h3
            className="text-lg font-bold"
            style={{ color: "var(--color-text)" }}
          >
            {project.title}
          </h3>

          <p
            className="mt-2 text-sm"
            style={{
              color: "var(--color-text-muted)",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            {project.description}
          </p>
        </div>

        <span
          className="mt-1 shrink-0 opacity-40 transition-transform duration-300 group-hover:-translate-x-1"
          style={{ color: "var(--color-text-faint)" }}
          aria-hidden="true"
        >
          <IconArrow direction="up-left" size={20} />
        </span>
      </div>
    </article>
  );
}
