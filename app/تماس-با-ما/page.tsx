import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = generateMetadata({
  title: "تماس با ما | آیریک",
  description:
    "راه‌های ارتباطی با آیریک — چاپ تخصصی سیلک و DTF. برای مشاوره و استعلام قیمت تماس بگیرید.",
  path: "/تماس-با-ما",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs items={[{ label: "تماس با ما", href: "/تماس-با-ما" }]} />
          <div className="mt-6 max-w-3xl">
            <h1
              className="text-4xl font-bold sm:text-5xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              تماس با آیریک
            </h1>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
            >
              برای مشاوره، استعلام قیمت یا هر سوالی، از طریق راه‌های زیر با ما در ارتباط باشید.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Contact info */}
            <div className="card-industrial space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
                اطلاعات تماس
              </h2>
              <div className="space-y-4">
                {siteConfig.contact.phoneDisplay ? (
                  <div>
                    <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
                      تلفن
                    </p>
                    <p style={{ color: "var(--color-text)", direction: "ltr" }}>
                      {siteConfig.contact.phoneDisplay}
                    </p>
                  </div>
                ) : (
                  <p style={{ color: "var(--color-text-muted)" }}>
                    شماره تماس به زودی اضافه می‌شود.
                  </p>
                )}
                {siteConfig.contact.email ? (
                  <div>
                    <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
                      ایمیل
                    </p>
                    <p style={{ color: "var(--color-text)", direction: "ltr" }}>
                      {siteConfig.contact.email}
                    </p>
                  </div>
                ) : null}
                {siteConfig.contact.address ? (
                  <div>
                    <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
                      آدرس
                    </p>
                    <p style={{ color: "var(--color-text)" }}>
                      {siteConfig.contact.address}
                    </p>
                  </div>
                ) : (
                  <p style={{ color: "var(--color-text-muted)" }}>
                    آدرس کارگاه به زودی اضافه می‌شود.
                  </p>
                )}
                {siteConfig.contact.workingHours ? (
                  <div>
                    <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
                      ساعات کاری
                    </p>
                    <p style={{ color: "var(--color-text)" }}>
                      {siteConfig.contact.workingHours}
                    </p>
                  </div>
                ) : (
                  <p style={{ color: "var(--color-text-muted)" }}>
                    ساعات کاری اعلام خواهد شد.
                  </p>
                )}
                <p style={{ color: "var(--color-text-muted)" }}>
                  {siteConfig.contact.serviceArea}
                </p>
              </div>

              {/* Social links if available */}
              {(siteConfig.social.instagram || siteConfig.social.telegram || siteConfig.social.whatsapp) && (
                <div className="pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                  <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
                    شبکه‌های اجتماعی
                  </p>
                  <div className="mt-3 flex gap-4">
                    {siteConfig.social.instagram && (
                      <a href={siteConfig.social.instagram} style={{ color: "var(--color-text)" }}>
                        اینستاگرام
                      </a>
                    )}
                    {siteConfig.social.telegram && (
                      <a href={siteConfig.social.telegram} style={{ color: "var(--color-text)" }}>
                        تلگرام
                      </a>
                    )}
                    {siteConfig.social.whatsapp && (
                      <a href={siteConfig.social.whatsapp} style={{ color: "var(--color-text)" }}>
                        واتساپ
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Map placeholder */}
            <div className="card-industrial">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
                موقعیت ما
              </h2>
              <MediaPlaceholder
                aspectRatio="16/9"
                label="نقشه موقعیت — به زودی"
                tone="dark"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="/استعلام-قیمت"
              className="btn-primary"
              style={{ fontSize: "var(--font-size-base)", padding: "1rem 2rem" }}
            >
              دریافت مشاوره و استعلام قیمت
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
