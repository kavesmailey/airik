import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { getServiceBySlug, getRelatedServices } from "@/content/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Accordion from "@/components/ui/Accordion";
import JsonLd from "@/components/seo/JsonLd";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return generateMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/خدمات/${service.slug}`,
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service.relatedServiceSlugs);

  return (
    <>
      <JsonLd type="service" data={service} />

      {/* Hero */}
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs
            items={[
              { label: "خدمات چاپ", href: "/خدمات" },
              { label: service.title, href: `/خدمات/${service.slug}` },
            ]}
          />
          <div className="mt-6">
            <h1
              className="text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              {service.title}
            </h1>
            <p
              className="mt-5 max-w-3xl text-lg"
              style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
            >
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2
                className="text-3xl font-bold"
                style={{ color: "var(--color-text)" }}
              >
                مزایا
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="card-industrial"
                    style={{ color: "var(--color-text)" }}
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable for */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2
                className="text-3xl font-bold"
                style={{ color: "var(--color-text-dark)" }}
              >
                مناسب برای
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.suitableFor.map((item) => (
                  <li
                    key={item}
                    className="card-industrial"
                    style={{ color: "var(--color-text-dark)", backgroundColor: "var(--color-surface-light)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Printing methods */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--color-text)" }}
          >
            روش‌های چاپ
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {service.printingMethods.map((method) => (
              <div key={method.name} className="card-industrial">
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  {method.name}
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--color-text-dark)" }}
          >
            فرآیند کار
          </h2>
          <ol className="mt-8 space-y-4">
            {service.processSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4"
                style={{ color: "var(--color-text-dark)" }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: "var(--color-accent)", color: "var(--color-accent-contrast)" }}
                >
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="container-iric max-w-3xl">
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--color-text)" }}
            >
              سوالات متداول
            </h2>
            <div className="mt-8">
              <Accordion
                items={service.faqs.map((faq, index) => ({
                  id: `service-faq-${index}`,
                  title: faq.question,
                  content: faq.answer,
                }))}
                tone="dark"
              />
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
          <div className="container-iric">
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--color-text-dark)" }}
            >
              خدمات مرتبط
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard key={related.slug} service={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="container-iric text-center">
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ color: "var(--color-accent-contrast)" }}
          >
            آماده شروع سفارش {service.title} هستید؟
          </h2>
          <div className="mt-6 flex justify-center">
            <Button href="/استعلام-قیمت" size="lg">
              دریافت مشاوره و استعلام قیمت
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
