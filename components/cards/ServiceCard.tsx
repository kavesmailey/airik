import Link from "next/link";
import { Service } from "@/content/services";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import IconArrow from "@/components/ui/IconArrow";

interface ServiceCardProps {
  service: Service;
  tone?: "dark" | "light";
}

export default function ServiceCard({ service, tone = "dark" }: ServiceCardProps) {
  const isDark = tone === "dark";

  return (
    <Link
      href={`/خدمات/${service.slug}`}
      className="group block"
      style={{ textDecoration: "none" }}
    >
      <div
        className="card-industrial group-hover:border-strong transition-all"
        style={{
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          backgroundColor: isDark ? "var(--color-surface)" : "var(--color-surface-light)",
          padding: "var(--space-lg)",
          transition: "transform 300ms var(--ease-default), border-color 300ms",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.borderColor = "var(--color-border-strong)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "var(--color-border)";
        }}
      >
        <MediaPlaceholder
          aspectRatio="4/3"
          label={service.title}
          tone={isDark ? "dark" : "light"}
          className="mb-4"
        />
        <h3
          className="text-xl font-bold"
          style={{ color: isDark ? "var(--color-text)" : "var(--color-text-dark)" }}
        >
          {service.title}
        </h3>
        <p
          className="mt-2 text-sm"
          style={{
            color: isDark ? "var(--color-text-muted)" : "var(--color-text-dark-muted)",
            lineHeight: "var(--line-height-relaxed)",
          }}
        >
          {service.shortDescription}
        </p>
        <div
          className="mt-4 flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--color-accent)" }}
        >
          مشاهده جزئیات
          <IconArrow direction="left" size={16} />
        </div>
      </div>
    </Link>
  );
}
