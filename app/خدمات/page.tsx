import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { services } from "@/content/services";

export const metadata: Metadata = generateMetadata({
  title: "خدمات چاپ",
  description: "خدمات چاپ سیلک و DTF آیریک روی بگ، لباس، کارتن، جعبه پیتزا، لیوان کاغذی و ظروف گرد",
  path: "/خدمات",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs
            items={[{ label: "خدمات چاپ", href: "/خدمات" }]}
          />
          <div className="mt-6">
            <SectionHeading
              eyebrow="خدمات چاپ"
              title="خدمات چاپ آیریک"
              description="چاپ تخصصی سیلک و DTF روی انواع محصولات با کیفیت بالا و مشاوره قبل از سفارش"
              tone="dark"
            />
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
