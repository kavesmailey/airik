import Link from "next/link";

import { BusinessType } from "@/content/business";

import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import IconArrow from "@/components/ui/IconArrow";

interface BusinessTypeCardProps {
  business: BusinessType;
}

export default function BusinessTypeCard({
  business,
}: BusinessTypeCardProps) {
  return (
    <Link
      href={`/برای-کسب-و-کارها/${business.slug}`}
      className="group block"
      style={{ textDecoration: "none" }}
    >
      <article
        className="card-industrial transition-transform duration-300 group-hover:-translate-y-1"
        style={{
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          padding: "var(--space-lg)",
        }}
      >
        <div className="overflow-hidden">
          <MediaPlaceholder
            aspectRatio="16/9"
            label={business.title}
            tone="dark"
            className="mb-5 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <h3
          className="text-xl font-bold"
          style={{ color: "var(--color-text)" }}
        >
          {business.title}
        </h3>

        <p
          className="mt-3 text-sm"
          style={{
            color: "var(--color-text-muted)",
            lineHeight: "var(--line-height-relaxed)",
          }}
        >
          {business.description}
        </p>

        <div
          className="mt-6 flex items-center gap-2 text-sm font-medium transition-transform duration-300 group-hover:-translate-x-1"
          style={{ color: "var(--color-accent)" }}
        >
          <span>مشاهده</span>
          <IconArrow direction="left" size={16} />
        </div>
      </article>
    </Link>
  );
}
