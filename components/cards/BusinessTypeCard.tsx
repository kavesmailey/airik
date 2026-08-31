import Link from "next/link";
import { BusinessType } from "@/content/business";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import IconArrow from "@/components/ui/IconArrow";

interface BusinessTypeCardProps {
  business: BusinessType;
}

export default function BusinessTypeCard({ business }: BusinessTypeCardProps) {
  return (
    <Link
      href={`/برای-کسب-و-کارها/${business.slug}`}
      className="group card-industrial block"
      style={{ textDecoration: "none" }}
    >
      <MediaPlaceholder
        aspectRatio="16/9"
        label={business.title}
        tone="dark"
        className="mb-4"
      />
      <h3
        className="text-xl font-bold"
        style={{ color: "var(--color-text)" }}
      >
        {business.title}
      </h3>
      <p
        className="mt-2 text-sm"
        style={{ color: "var(--color-text-muted)" }}
      >
        {business.description}
      </p>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: "var(--color-accent)" }}>
        مشاهده
        <IconArrow direction="left" size={16} />
      </div>
    </Link>
  );
}
