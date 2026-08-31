import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { articles, getArticleBySlug } from "@/content/articles";
import { services } from "@/content/services";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({
  params,
}: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {};
  }

  return {
    title: article.meta?.title || article.title,
    description:
      article.meta?.description ||
      article.excerpt ||
      `راهنمای AIRIK درباره ${article.title}`,
    alternates: {
      canonical: `/بلاگ/${article.slug}`,
    },
    openGraph: {
      title: article.meta?.title || article.title,
      description:
        article.meta?.description ||
        article.excerpt ||
        `راهنمای AIRIK درباره ${article.title}`,
      url: `/بلاگ/${article.slug}`,
      type: "article",
      locale: "fa_IR",
      siteName: "AIRIK",
      images: article.featuredImage
        ? [
            {
              url: article.featuredImage,
              alt: article.alt || article.title,
            },
          ]
        : undefined,
    },
  };
}

export default function ArticlePage({
  params,
}: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedServices = services.filter((service) =>
    article.relatedServices?.includes(service.slug)
  );

  const relatedArticles = articles.filter(
    (relatedArticle) =>
      article.relatedArticles?.includes(relatedArticle.slug)
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage
      ? [article.featuredImage]
      : undefined,
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    author: {
      "@type": "Organization",
      name: article.author || "AIRIK",
    },
    publisher: {
      "@type": "Organization",
      name: "AIRIK",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/بلاگ/${article.slug}`,
    },
    inLanguage: "fa-IR",
  };

  return (
    <main dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Article Header */}
      <header className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <Link
              href="/بلاگ"
              className="mb-10 inline-flex items-center gap-3 text-sm text-black/45 transition-opacity hover:opacity-60"
            >
              <span aria-hidden="true">→</span>
              بازگشت به مجله
            </Link>

            <div className="mb-7 flex flex-wrap items-center gap-4 text-sm text-black/40">
              {article.category && (
                <span>{article.category}</span>
              )}

              {article.category && article.readingTime && (
                <span className="h-1 w-1 rounded-full bg-black/20" />
              )}

              {article.readingTime && (
                <span>{article.readingTime} مطالعه</span>
              )}
            </div>

            <h1 className="max-w-5xl text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
                {article.excerpt}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/40">
              {article.author && (
                <span>نویسنده: {article.author}</span>
              )}

              {article.date && <span>{article.date}</span>}

              {article.updatedDate && (
                <span>
                  آخرین به‌روزرسانی: {article.updatedDate}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {article.featuredImage && (
        <section>
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-12">
            <figure>
              <div className="aspect-[16/8] overflow-hidden bg-[#f5f3ef]">
                <img
                  src={article.featuredImage}
                  alt={article.alt || article.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {article.alt && (
                <figcaption className="mt-4 text-xs text-black/35">
                  {article.alt}
                </figcaption>
              )}
            </figure>
          </div>
        </section>
      )}

      {/* Content */}
      <article>
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <div className="prose prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-black prose-p:leading-9 prose-p:text-black/65 prose-li:leading-8 prose-li:text-black/65">
            {article.content}
          </div>
        </div>
      </article>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="border-t border-black/10 bg-[#f5f3ef]">
          <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
            <div className="mb-16 max-w-3xl md:mb-24">
              <p className="mb-7 text-sm font-medium text-black/40">
                خدمات مرتبط
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                اگر این موضوع برایتان
                <br />
                مهم است، این خدمات را ببینید.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {relatedServices.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/خدمات/${service.slug}`}
                  className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-12"
                >
                  <div className="grid gap-6 md:grid-cols-[80px_1fr_40px] md:items-start">
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-3xl text-base leading-8 text-black/50 md:text-lg">
                        {service.shortDescription}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="text-xl transition-transform duration-300 group-hover:-translate-x-1"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
            <div className="mb-16 flex flex-col gap-7 md:mb-24 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-7 text-sm font-medium text-black/40">
                  ادامه مطالعه
                </p>

                <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                  مطالب مرتبط
                </h2>
              </div>

              <Link
                href="/بلاگ"
                className="w-fit text-sm text-black/50 transition-opacity hover:opacity-50"
              >
                مشاهده همه مقالات ↗
              </Link>
            </div>

            <div className="border-t border-black/10">
              {relatedArticles.map((relatedArticle, index) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/بلاگ/${relatedArticle.slug}`}
                  className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-12"
                >
                  <div className="grid gap-6 md:grid-cols-[80px_1fr_40px]">
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="mb-4 text-xs text-black/40">
                        {relatedArticle.category}
                      </p>

                      <h3 className="max-w-4xl text-xl font-medium leading-8 tracking-tight md:text-2xl">
                        {relatedArticle.title}
                      </h3>

                      <p className="mt-4 max-w-3xl leading-8 text-black/50">
                        {relatedArticle.excerpt}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="text-xl transition-transform duration-300 group-hover:-translate-x-1"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              قدم بعدی
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              برای پروژه‌تان
              <br />
              راهکار مناسب می‌خواهید؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              اطلاعات سفارش را برای ما بفرستید. اگر درباره روش چاپ یا
              متریال مطمئن نیستید، بررسی آن را به ما بسپارید.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/تماس-با-ما"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm text-white transition-colors hover:border-white"
              >
                تماس با ما
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
