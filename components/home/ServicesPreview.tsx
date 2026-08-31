import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/content/services";
import IconArrow from "@/components/ui/IconArrow";

export default function ServicesPreview() {
  return (
    <section className="section-iric" style={{ backgroundColor: "var(--color-bg-light)" }}>
      <div className="container-iric">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="خدمات چاپ"
            title="خدمات چاپ آیریک"
            tone="light"
          />
          <Link
            href="/خدمات"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "var(--color-text-dark)" }}
          >
            مشاهده همه خدمات
            <IconArrow direction="left" size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
