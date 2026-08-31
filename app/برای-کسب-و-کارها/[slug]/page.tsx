import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/seo";
import { getBusinessTypeBySlug } from "@/content/business";
import { getServiceBySlug } from "@/content/services";
import { getArticleBySlug } from "@/content/articles";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ServiceCard from "@/components/cards/ServiceCard";
import ArticleCard from "@/components/cards/ArticleCard";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";

interface BusinessPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: BusinessPageProps): Metadata {
  const business = getBusinessTypeBySlug(params.slug);
  if (!business) return {};
  return createMetadata({
    title: business.meta.title,
    description: business.meta.description,
    path: `/برای-کسب-و-کارها/${business.slug}`,
  });
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const business = getBusinessTypeBySlug(params.slug);
  if (!business) notFound();

  const relevantServices = business.relevantServices
    .map(getServiceBySlug)
    .filter(Boolean);

  const relevantArticles = business.relevantArticles
    .map(getArticleBySlug)
    .filter(Boolean);

  return (
    <>
      <section
        className="pt-28 pb-16"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <Breadcrumbs
            items={[
              { label: "برای کسب‌وکارها", href: "/برای-کسب-و-کارها" },
              { label: business.title, href: `/برای-کسب-و-کارها/${business.slug}` },
            ]}
          />
          <div className="mt-6">
            <h1
              className="text-4xl font-bold sm:text-5xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              {business.title}
            </h1>
            <p
              className="mt-5 max-w-3xl text-lg"
              style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
            >
              {business.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <MediaPlaceholder
            aspectRatio="16/9"
            label={business.title}
            tone="dark"
            className="mb-12"
          />

          {relevantServices.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
                خدمات مرتبط
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relevantServices.map((service: any) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          )}

          {relevantArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
                مقالات مرتبط
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {relevantArticles.map((article: any) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="container-iric text-center">
          <h2 className="text-3xl font-bold" style={{ color: "var(--color-accent-contrast)" }}>
            برای {business.title} آماده همکاری هستیم
          </h2>
          <div className="mt-6 flex justify-center">
            <Button href="/استعلام-قیمت" size="lg">
              دریافت مشاوره
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
