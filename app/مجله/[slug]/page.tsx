import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { getArticleBySlug, getRelatedArticles } from "@/content/articles";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ArticleCard from "@/components/cards/ArticleCard";
import JsonLd from "@/components/seo/JsonLd";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return generateMetadata({
    title: article.meta.title,
    description: article.meta.description,
    path: `/مجله/${article.slug}`,
  });
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article.relatedSlugs);

  return (
    <>
      <JsonLd type="article" data={article} />

      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "مجله آیریک", href: "/مجله" },
              { label: article.title, href: `/مجله/${article.slug}` },
            ]}
          />

          <div className="mt-6">
            <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
              {article.category} · {article.readingTime} · {article.date}
            </p>
            <h1
              className="mt-4 text-4xl font-bold sm:text-5xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric max-w-4xl">
          <MediaPlaceholder
            aspectRatio="16/9"
            label={article.title}
            tone="dark"
            className="mb-8"
          />
          <div
            className="prose prose-invert max-w-none"
            style={{ color: "var(--color-text)", lineHeight: "var(--line-height-relaxed)" }}
          >
            <p>{article.content}</p>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--color-text)" }}
              >
                مقالات مرتبط
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {relatedArticles.map((related) => (
                  <ArticleCard key={related.slug} article={related} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
