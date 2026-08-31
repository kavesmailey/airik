import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ArticleCard from "@/components/cards/ArticleCard";
import Reveal from "@/components/ui/Reveal";
import { articles } from "@/content/articles";
import { categories } from "@/content/categories";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";

export const metadata: Metadata = generateMetadata({
  title: "وبلاگ",
  description:
    "مقالات آموزشی درباره چاپ سیلک، DTF، بسته‌بندی و نکات برندینگ برای کسب‌وکارها.",
  path: "/وبلاگ",
});

export default function BlogIndexPage() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs items={[{ label: "وبلاگ", href: "/وبلاگ" }]} />
          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
              مقالات آموزشی
            </p>
            <h1
              className="mt-4 text-4xl font-bold sm:text-5xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              وبلاگ آیریک
            </h1>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
            >
              دانش چاپ سیلک و DTF را با هم به اشتراک می‌گذاریم. راهنماهای عملی برای انتخاب روش چاپ،
              طراحی و مراقبت از محصولات چاپ‌شده.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Reveal>
            <Link
              href={`/وبلاگ/${featuredArticle.slug}`}
              className="group block"
              style={{ textDecoration: "none" }}
            >
              <div className="card-industrial overflow-hidden" style={{ padding: 0 }}>
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-64">
                    <img
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
                      {featuredArticle.category} · {featuredArticle.readingTime}
                    </p>
                    <h2
                      className="mt-3 text-2xl font-bold sm:text-3xl"
                      style={{ color: "var(--color-text)" }}
                    >
                      {featuredArticle.title}
                    </h2>
                    <p
                      className="mt-4 text-base"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {featuredArticle.excerpt}
                    </p>
                    <div
                      className="mt-5 flex items-center gap-2 text-sm font-medium"
                      style={{ color: "var(--color-accent)" }}
                    >
                      مطالعه مقاله
                      <IconArrow direction="left" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-dark)" }}>
            دسته‌بندی‌ها
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category.slug}
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium"
                style={{
                  backgroundColor: "var(--color-surface-light)",
                  border: "1px solid var(--color-border-light)",
                  color: "var(--color-text-dark)",
                }}
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 80}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="container-iric text-center">
          <h2
            className="text-4xl font-bold"
            style={{ color: "var(--color-accent-contrast)", lineHeight: "var(--line-height-tight)" }}
          >
            سوالی درباره چاپ دارید؟
          </h2>
          <p
            className="mt-5 text-lg mx-auto max-w-2xl"
            style={{ color: "var(--color-accent-contrast)", opacity: 0.75 }}
          >
            مشاوره تخصصی قبل از سفارش، بهترین نتیجه را برای شما به ارمغان می‌آورد.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/استعلام-قیمت" size="lg">
              دریافت مشاوره رایگان
              <IconArrow direction="up-left" size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
