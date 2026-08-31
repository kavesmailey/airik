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
  title: "بلاگ",
  description: "مقالات آموزشی درباره چاپ سیلک، DTF و نکات برندینگ.",
  path: "/بلاگ",
});

export default function BlogIndexPage() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs items={[{ label: "بلاگ", href: "/بلاگ" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl" style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}>
              بلاگ آیریک
            </h1>
            <p className="mt-5 text-lg" style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}>
              دانش چاپ سیلک و DTF را با هم به اشتراک می‌گذاریم.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Reveal>
            <Link href={`/بلاگ/${featuredArticle.slug}`} className="group block" style={{ textDecoration: "none" }}>
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
                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl" style={{ color: "var(--color-text)" }}>
                      {featuredArticle.title}
                    </h2>
                    <p className="mt-4 text-base" style={{ color: "var(--color-text-muted)" }}>
                      {featuredArticle.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: "var(--color-accent)" }}>
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

      {/* Rest of categories and articles similar to previous blog index */}
      {/* ... */}
    </>
  );
}
