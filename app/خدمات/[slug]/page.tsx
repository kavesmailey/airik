import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/seo";
import { getServiceBySlug, getRelatedServices, getAllServiceSlugs } from "@/content/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Accordion from "@/components/ui/Accordion";
import JsonLd from "@/components/seo/JsonLd";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Reveal from "@/components/ui/Reveal";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return createMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/خدمات/${service.slug}`,
    ogImage: service.image,
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service.relatedServiceSlugs);

  return (
    <>
      <JsonLd type="service" data={service} />
      {service.faqs.length > 0 && (
        <JsonLd type="faq" data={{ items: service.faqs }} />
      )}

      {/* Hero */}
      <section
        className="pt-28 pb-16"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <Breadcrumbs
            items={[
              { label: "خدمات چاپ", href: "/خدمات" },
              { label: service.title, href: `/خدمات/${service.slug}` },
            ]}
          />
          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="text-4xl font-bold sm:text-5xl lg:text-6xl"
                style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
              >
                {service.title}
              </h1>
              <p
                className="mt-6 max-w-2xl text-lg"
                style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
              >
                {service.fullDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/استعلام-قیمت" size="lg">
                  استعلام قیمت {service.title}
                  <IconArrow direction="up-left" size={16} />
                </Button>
              </div>
            </div>
            <div className="lg:col-span-4">
              <MediaPlaceholder
                aspectRatio="4/3"
                label={service.title}
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2
                className="text-3xl font-bold"
                style={{ color: "var(--color-text-dark)" }}
              >
                درباره این خدمت
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p
                className="text-lg"
                style={{ color: "var(--color-text-dark-muted)", lineHeight: "var(--line-height-relaxed)" }}
              >
                {service.aboutText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="روش چاپ"
            title="روش‌های قابل استفاده"
            tone="dark"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {service.printingMethods.map((method, index) => (
              <Reveal key={method.name} delay={index * 100}>
                <div className="card-industrial h-full">
                  <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>
                    {String(index + 1).padStart(2, "۰")}
                  </span>
                  <h3 className="mt-4 text-xl font-bold" style={{ color: "var(--color-text)" }}>
                    {method.name}
                  </h3>
                  <p
                    className="mt-3 text-base"
                    style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
                  >
                    {method.description}
                  </p>
                  <p className="mt-4 text-sm" style={{ color: "var(--color-text-faint)" }}>
                    مناسب برای: {method.suitableFor}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2
                className="text-3xl font-bold"
                style={{ color: "var(--color-text-dark)" }}
              >
                کاربردها
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.applications.map((application) => (
                  <li
                    key={application}
                    className="card-industrial"
                    style={{
                      backgroundColor: "var(--color-surface-light)",
                      color: "var(--color-text-dark)",
                    }}
                  >
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="نکات مهم"
            title="ملاحظات کلیدی"
            description="مواردی که قبل از سفارش باید در نظر بگیرید."
            tone="dark"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.keyConsiderations.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <div className="card-industrial h-full">
                  <h3 className="text-lg font-bold" style={{ color: "var(--color-text)" }}>
                    {item.label}
                  </h3>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2
                className="text-3xl font-bold"
                style={{ color: "var(--color-text-dark)" }}
              >
                مزایا
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3"
                    style={{ color: "var(--color-text-dark)" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      className="mt-1 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="فرآیند"
            title="مراحل اجرا"
            tone="dark"
          />
          <ol className="mt-10 space-y-4">
            {service.processSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4"
                style={{ color: "var(--color-text)" }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: "var(--color-accent)", color: "var(--color-accent-contrast)" }}
                >
                  {index + 1}
                </span>
                <span className="text-lg">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
          <div className="container-iric max-w-3xl">
            <SectionHeading
              eyebrow="سوالات متداول"
              title={`سوالات ${service.title}`}
              tone="light"
            />
            <div className="mt-10">
              <Accordion
                items={service.faqs.map((faq, index) => ({
                  id: `service-faq-${index}`,
                  title: faq.question,
                  content: faq.answer,
                }))}
                tone="light"
              />
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="container-iric">
            <SectionHeading
              eyebrow="خدمات مرتبط"
              title="شاید به این خدمات هم نیاز داشته باشید"
              tone="dark"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard key={related.slug} service={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="container-iric text-center">
          <Reveal>
            <h2
              className="text-4xl font-bold sm:text-5xl"
              style={{ color: "var(--color-accent-contrast)", lineHeight: "var(--line-height-tight)" }}
            >
              آماده شروع سفارش {service.title} هستید؟
            </h2>
            <p
              className="mt-5 text-lg mx-auto max-w-2xl"
              style={{ color: "var(--color-accent-contrast)", opacity: 0.75 }}
            >
              مشخصات سفارش خود را ارسال کنید تا مشاوره تخصصی دریافت کنید.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/استعلام-قیمت" size="lg">
                دریافت مشاوره و استعلام قیمت
                <IconArrow direction="up-left" size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
