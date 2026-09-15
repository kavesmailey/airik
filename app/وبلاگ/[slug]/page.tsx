import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IconArrow from "@/components/ui/IconArrow";

import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/site";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: ArticlePageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "مطلب پیدا نشد | آیریک",
    };
  }

  const canonicalUrl = `${siteConfig.siteUrl}/وبلاگ/${post.slug}`;
  const imageUrl = `${siteConfig.siteUrl}${post.image}`;

  return {
    title: `${post.title} | آیریک`,
    description: post.excerpt,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: `${post.title} | آیریک`,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "fa_IR",
      type: "article",
      publishedTime: post.dateISO,
      modifiedTime: post.dateISO,
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${post.title} | آیریک`,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

function JsonLd({
  data,
}: {
  data: Record<string, unknown>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, index) => {
    const text = block.trim();

    if (!text) return null;

    if (text.startsWith("### ")) {
      return (
        <h2
          key={index}
          className="mb-5 mt-14 text-2xl font-medium tracking-[-0.015em] text-[#021408] md:text-3xl"
          style={{ lineHeight: 1.5 }}
        >
          {text.replace("### ", "")}
        </h2>
      );
    }

    return (
      <p
        key={index}
        className="mb-7 text-lg text-[#022F12]/70"
        style={{ lineHeight: 2.1 }}
      >
        {text}
      </p>
    );
  });
}

export default function ArticlePage({
  params,
}: ArticlePageProps) {
  const post = blogPosts.find(
    (item) => item.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  const articleUrl = `${siteConfig.siteUrl}/وبلاگ/${post.slug}`;
  const blogUrl = `${siteConfig.siteUrl}/وبلاگ`;
  const imageUrl = `${siteConfig.siteUrl}${post.image}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    articleSection: post.category,
    inLanguage: "fa-IR",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },

    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خانه",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "بلاگ",
        item: blogUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  const relatedPosts = blogPosts
    .filter(
      (item) =>
        item.slug !== post.slug &&
        item.category === post.category
    )
    .slice(0, 2);

  return (
    <main dir="rtl">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Article header */}
      <section className="container mx-auto px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-5xl">
          <Reveal direction="right">
            <nav
              aria-label="مسیر صفحه"
              className="mb-10 flex flex-wrap items-center gap-2 text-xs text-[#022F12]/40"
            >
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-[#022F12]"
              >
                خانه
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/وبلاگ"
                className="transition-colors duration-300 hover:text-[#022F12]"
              >
                بلاگ
              </Link>

              <span aria-hidden="true">/</span>

              <span className="line-clamp-1">
                {post.title}
              </span>
            </nav>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#022F12]/45">
              <span>{post.category}</span>

              <span aria-hidden="true">·</span>

              <time dateTime={post.dateISO}>
                {post.date}
              </time>
            </div>
          </Reveal>

          <Reveal direction="up" delay={180}>
            <h1
              className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.025em] text-[#021408] sm:text-5xl lg:text-6xl"
              style={{ lineHeight: 1.35 }}
            >
              {post.title}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p
              className="mt-7 max-w-3xl text-base text-[#022F12]/60 sm:text-lg"
              style={{ lineHeight: 2 }}
            >
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="container mx-auto px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <Reveal direction="up" delay={150}>
          <div className="overflow-hidden rounded-[28px]">
            <ParallaxImage
              src={post.image}
              alt={post.title}
              strength={18}
              priority
              className="h-[280px] sm:h-[440px] lg:h-[620px]"
            />
          </div>
        </Reveal>
      </section>

      {/* Summary */}
      <section className="bg-[#E4F0CC]">
        <div className="container mx-auto px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <Reveal direction="right">
            <div className="grid gap-7 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
              <p className="text-sm font-medium text-[#022F12]/50">
                خلاصه مطلب
              </p>

              <p
                className="max-w-3xl text-lg text-[#022F12]/75 sm:text-xl"
                style={{ lineHeight: 2 }}
              >
                {post.excerpt}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article content */}
      <article className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl py-20 sm:py-24 lg:py-32">
          <Reveal direction="up">
            <div>{renderContent(post.content)}</div>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <div className="mt-16 border-y border-[#022F12]/10 py-8">
              <p
                className="text-sm text-[#022F12]/50"
                style={{ lineHeight: 2 }}
              >
                برای انتخاب روش مناسب چاپ، فقط یک عامل تعیین‌کننده
                نیست؛ نوع محصول، متریال، تیراژ و نتیجه مورد انتظار
                هم باید در نظر گرفته شوند.
              </p>

              <Link
                href="/خدمات"
                className="group mt-5 inline-flex items-center gap-3 text-sm font-medium text-[#021408]"
              >
                مشاهده خدمات چاپ

                <span className="transition-transform duration-500 group-hover:-translate-x-1">
                  <IconArrow direction="left" size={17} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {/* CTA */}
      <section className="container mx-auto px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[28px] bg-[#022F12] p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#8BC53D]/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="mb-5 text-sm font-medium text-[#8BC53D]">
                برای پروژه خودتان
              </p>

              <h2
                className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.4 }}
              >
                هنوز نمی‌دانید کدام روش چاپ مناسب‌تر است؟
              </h2>

              <p
                className="mt-6 max-w-2xl text-base text-white/60 sm:text-lg"
                style={{ lineHeight: 2 }}
              >
                مشخصات پروژه را بفرستید تا بر اساس محصول،
                متریال، تیراژ و نتیجه مورد انتظار، گزینه مناسب
                را بررسی کنیم.
              </p>

              <Link
                href="/استعلام-قیمت"
                className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#8BC53D] px-6 py-4 text-sm font-medium text-[#021408] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              >
                استعلام قیمت

                <span className="transition-transform duration-500 group-hover:-translate-x-1">
                  <IconArrow direction="left" size={18} />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <Reveal direction="up">
            <div className="mb-10">
              <p className="mb-4 text-sm font-medium text-[#8BC53D]">
                مطالب مرتبط
              </p>

              <h2
                className="text-3xl font-semibold text-[#021408] sm:text-4xl"
                style={{ lineHeight: 1.35 }}
              >
                بیشتر بخوانید
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2">
            {relatedPosts.map((related, index) => (
              <Reveal
                key={related.slug}
                direction="up"
                delay={index * 120}
              >
                <Link
                  href={`/وبلاگ/${related.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[24px]">
                    <ParallaxImage
                      src={related.image}
                      alt={related.title}
                      strength={12}
                      className="h-[280px] sm:h-[340px]"
                    />
                  </div>

                  <div className="mt-5 border-t border-[#022F12]/10 pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs text-[#022F12]/40">
                        {related.category}
                      </p>

                      <span className="text-[#022F12]/40 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <IconArrow direction="up-left" size={17} />
                      </span>
                    </div>

                    <h3
                      className="mt-4 text-xl font-medium text-[#021408] transition-transform duration-500 group-hover:-translate-x-1"
                      style={{ lineHeight: 1.6 }}
                    >
                      {related.title}
                    </h3>

                    <p
                      className="mt-3 text-sm text-[#022F12]/50"
                      style={{ lineHeight: 1.9 }}
                    >
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Back to blog */}
      <section className="border-t border-[#022F12]/10">
        <div className="container mx-auto px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
          <Reveal direction="right">
            <Link
              href="/وبلاگ"
              className="group inline-flex items-center gap-3 text-sm text-[#022F12]/50 transition-colors duration-300 hover:text-[#021408]"
            >
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                <IconArrow direction="right" size={17} />
              </span>

              بازگشت به بلاگ
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
