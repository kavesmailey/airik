import SectionHeading from "@/components/ui/SectionHeading";
import BusinessTypeCard from "@/components/cards/BusinessTypeCard";
import { businessTypes } from "@/content/business";
import Link from "next/link";
import IconArrow from "@/components/ui/IconArrow";

export default function BusinessSolutions() {
  return (
    <section className="section-iric" style={{ backgroundColor: "var(--color-bg-light)" }}>
      <div className="container-iric">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="برای کسب‌وکارها"
            title="راهکارهای چاپ برای کسب‌وکار شما"
            tone="light"
          />
          <Link
            href="/برای-کسب-و-کارها"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--color-text-dark)" }}
          >
            مشاهده همه
            <IconArrow direction="left" size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {businessTypes.slice(0, 6).map((business) => (
            <BusinessTypeCard key={business.slug} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
}
