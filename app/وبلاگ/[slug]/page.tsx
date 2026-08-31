import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { getArticleBySlug, getRelatedArticles, getAllArticleSlugs } from "@/content/articles";
import { getServiceBySlug } from "@/content/services";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import ArticleCard from "@/components/cards/ArticleCard";
import ServiceCard from "@/components/cards/ServiceCard";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return generateMetadata({
    title: article.meta.title,
    description: article.meta.description,
    path: `/وبلاگ/${article.slug}`,
  });
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article.relatedArticles);
  const relatedServices = article.relatedServices
    .map(getServiceBySlug)
    .filter(Boolean);

  const jsonLdArticle = {
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    author: { name: article.author },
    publisher: { name: "آیریک" },
  };

  return (
    <>
      <JsonLd type="article" data={jsonLdArticle} />
      <JsonLd
        type="breadcrumb"
        data={{
          items: [
            { label: "خانه", href: "/" },
            { label: "وبلاگ", href: "/وبلاگ" },
            { label: article.title, href: `/وبلاگ/${article.slug}` },
          ],
        }}
      />

      {/* Hero */}
      <section className="pt-28 pb-12" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "وبلاگ", href: "/وبلاگ" },
              { label: article.title, href: `/وبلاگ/${article.slug}` },
            ]}
          />
          <div className="mt-6">
            <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
              {article.category} · {article.readingTime} · {article.date}
            </p>
            <h1
              className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              {article.title}
            </h1>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
            >
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric max-w-4xl">
          <img
            src={article.featuredImage}
            alt={article.alt}
            className="mb-8 w-full rounded-md object-cover"
            loading="lazy"
          />
          <div
            className="article-content"
            style={{
              color: "var(--color-text)",
              lineHeight: "2",
              fontSize: "1.125rem",
            }}
          >
            {article.content}
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-16">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--color-text)" }}
              >
                خدمات مرتبط
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((service: any) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--color-text)" }}
              >
                مقالات مرتبط
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedArticles.map((related) => (
                  <ArticleCard key={related.slug} article={related} />
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button href="/استعلام-قیمت" size="lg">
              دریافت مشاوره و استعلام قیمت
              <IconArrow direction="up-left" size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
