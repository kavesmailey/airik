import Link from "next/link";
import { Service } from "@/content/services";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import IconArrow from "@/components/ui/IconArrow";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/خدمات/${service.slug}`}
      className="group card-industrial block transition-transform hover:-translate-y-1"
      style={{ textDecoration: "none" }}
    >
      <MediaPlaceholder
        aspectRatio="4/3"
        label={service.title}
        tone="dark"
        className="mb-4"
      />
      <h3
        className="text-xl font-bold"
        style={{ color: "var(--color-text)" }}
      >
        {service.title}
      </h3>
      <p
        className="mt-2 text-sm"
        style={{ color: "var(--color-text-muted)" }}
      >
        {service.shortDescription}
      </p>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: "var(--color-accent)" }}>
        مشاهده جزئیات
        <IconArrow direction="left" size={16} />
      </div>
    </Link>
  );
}
