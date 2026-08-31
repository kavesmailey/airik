import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = generateMetadata({
  title: "تماس با ما",
  description: "راه‌های ارتباطی با آیریک",
  path: "/تماس-با-ما",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs
            items={[{ label: "تماس با ما", href: "/تماس-با-ما" }]}
          />
          <div className="mt-6">
            <SectionHeading
              eyebrow="تماس با ما"
              title="با آیریک در ارتباط باشید"
              description="برای مشاوره، استعلام قیمت یا همکاری با ما تماس بگیرید"
              tone="dark"
            />
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Contact info */}
            <div className="card-industrial space-y-4">
              <h2 className="text-xl font-bold" style={{ color: "var(--color-text)" }}>
                اطلاعات تماس
              </h2>
              {siteConfig.contact.phoneDisplay && (
                <p style={{ color: "var(--color-text-muted)", direction: "ltr" }}>
                  {siteConfig.contact.phoneDisplay}
                </p>
              )}
              {siteConfig.contact.email && (
                <p style={{ color: "var(--color-text-muted)", direction: "ltr" }}>
                  {siteConfig.contact.email}
                </p>
              )}
              <p style={{ color: "var(--color-text-muted)" }}>
                {siteConfig.contact.serviceArea}
              </p>
            </div>

            {/* Map placeholder */}
            <div className="card-industrial">
              <h2 className="text-xl font-bold" style={{ color: "var(--color-text)" }}>
                موقعیت
              </h2>
              <p
                className="mt-4 text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                آدرس کارگاه به زودی اضافه می‌شود.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
