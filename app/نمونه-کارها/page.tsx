import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { projects } from "@/content/projects";

export const metadata: Metadata = generateMetadata({
  title: "نمونه‌کارها",
  description: "نمونه‌کارهای چاپ آیریک — پروژه‌های چاپ سیلک و DTF روی انواع محصولات",
  path: "/نمونه-کارها",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs
            items={[{ label: "نمونه‌کارها", href: "/نمونه-کارها" }]}
          />
          <div className="mt-6">
            <SectionHeading
              eyebrow="نمونه‌کارها"
              title="پروژه‌های آیریک"
              description="هر پروژه یک داستان تولید است — از دریافت فایل تا تحویل نهایی"
              tone="dark"
            />
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
