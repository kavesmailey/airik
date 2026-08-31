import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = generateMetadata({
  title: "درباره آیریک",
  description: "آشنایی با آیریک — چاپ تخصصی سیلک و DTF برای برندهایی که کیفیت اهمیت دارد",
  path: "/درباره-آیریک",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs
            items={[{ label: "درباره آیریک", href: "/درباره-آیریک" }]}
          />
          <div className="mt-6 max-w-3xl">
            <SectionHeading
              eyebrow="درباره آیریک"
              title="چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد"
              description="آیریک با تمرکز بر کیفیت، دقت و مشاوره تخصصی، خدمات چاپ سیلک و DTF را برای کسب‌وکارها فراهم می‌کند."
              tone="dark"
            />
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric max-w-3xl">
          <div className="space-y-6" style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}>
            <p>
              آیریک با درک نیاز برندها به چاپ باکیفیت، خدمات تخصصی چاپ سیلک و DTF را روی انواع محصولات ارائه می‌دهد.
            </p>
            <p>
              ما معتقدیم چاپ خوب فقط یک فرآیند فنی نیست؛ بخشی از هویت برند شماست. به همین دلیل قبل از هر سفارش، مشاوره تخصصی ارائه می‌دهیم تا بهترین روش چاپ متناسب با محصول، تیراژ و بودجه شما انتخاب شود.
            </p>
            <p>
              تمرکز ما روی کیفیت اجرا، کنترل دقیق جزئیات و تحویل به‌موقع است.
            </p>
          </div>

          <div className="mt-12">
            <Button href="/استعلام-قیمت" size="lg">
              شروع همکاری با آیریک
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
