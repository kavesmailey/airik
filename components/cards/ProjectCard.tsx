import Link from "next/link";
import { Project } from "@/content/projects";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import IconArrow from "@/components/ui/IconArrow";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/نمونه-کارها/${project.slug}`}
      className="group block"
      style={{ textDecoration: "none" }}
    >
      <MediaPlaceholder
        aspectRatio="4/3"
        label={project.title}
        tone="dark"
        className="mb-4"
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className="text-lg font-bold"
            style={{ color: "var(--color-text)" }}
          >
            {project.title}
          </h3>
          <p
            className="mt-1 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            {project.product} · {project.printingMethod}
          </p>
        </div>
        <span style={{ color: "var(--color-text-faint)" }}>
          <IconArrow direction="up-left" size={20} />
        </span>
      </div>
    </Link>
  );
}
