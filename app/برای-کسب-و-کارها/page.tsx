import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import BusinessTypeCard from "@/components/cards/BusinessTypeCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { businessTypes } from "@/content/business";

export const metadata: Metadata = generateMetadata({
  title: "برای کسب‌وکارها",
  description: "راهکارهای چاپ تخصصی برای انواع کسب‌وکارها",
  path: "/برای-کسب-و-کارها",
});

export default function ForBusinessPage() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs
            items={[{ label: "برای کسب‌وکارها", href: "/برای-کسب-و-کارها" }]}
          />
          <div className="mt-6">
            <SectionHeading
              eyebrow="برای کسب‌وکارها"
              title="راهکارهای چاپ برای کسب‌وکار شما"
              description="خدمات چاپ تخصصی متناسب با نیاز هر کسب‌وکار"
              tone="dark"
            />
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((business) => (
              <BusinessTypeCard key={business.slug} business={business} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
