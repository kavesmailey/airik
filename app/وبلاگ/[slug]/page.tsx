import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";

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

  return {
    title: `${post.title} | آیریک`,
    description: post.excerpt,
    alternates: {
      canonical: `/وبلاگ/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | آیریک`,
      description: post.excerpt,
      type: "article",
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
          className="mt-14 mb-5 text-2xl font-medium leading-[1.5] tracking-tight md:text-3xl"
        >
          {text.replace("### ", "")}
        </h2>
      );
    }

    return (
      <p
        key={index}
        className="mb-7 text-lg leading-[2.1] text-black/70"
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

  const articleUrl = `/وبلاگ/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: "fa-IR",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    author: {
      "@type": "Organization",
      name: "آیریک",
    },

    publisher: {
      "@type": "Organization",
      name: "آیریک",
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
        item: "/",
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "مجله چاپ",
        item: "/وبلاگ",
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

      {/* HEADER */}

      <section className="border-b border-black/10">

        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">

          <nav
            aria-label="مسیر صفحه"
            className="mb-12 flex flex-wrap items-center gap-2 text-xs text-black/40"
          >
            <Link href="/">
              خانه
            </Link>

            <span aria-hidden="true">
              /
            </span>

            <Link href="/وبلاگ">
              مجله چاپ
            </Link>

            <span aria-hidden="true">
              /
            </span>

            <span className="line-clamp-1">
              {post.title}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-sm text-black/40">

            <span>
              {post.category}
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <time>
              {post.date}
            </time>

          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.35] tracking-tight md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-9 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
            {post.excerpt}
          </p>

        </div>

      </section>


      {/* QUICK ANSWER — FEO / GEO */}

      <section className="border-b border-black/10 bg-[#f5f3ef]">

        <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">

          <div className="grid gap-6 md:grid-cols-[0.3fr_1fr] md:gap-14">

            <p className="text-sm font-medium text-black/45">
              خلاصه مطلب
            </p>

            <p className="text-lg leading-9 text-black/65 md:text-xl">
              {post.excerpt}
            </p>

          </div>

        </div>

      </section>


      {/* ARTICLE */}

      <article>

        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">

          <div>
            {renderContent(post.content)}
          </div>


          {/* INTERNAL LINK */}

          <div className="mt-16 border-y border-black/10 py-8">

            <p className="text-sm leading-8 text-black/50">

              برای انتخاب روش مناسب چاپ، فقط یک عامل تعیین‌کننده
              نیست؛ نوع محصول، متریال، تیراژ و نتیجه مورد انتظار
              هم باید در نظر گرفته شوند.

            </p>

            <Link
              href="/خدمات"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium"
            >
              مشاهده خدمات چاپ

              <span aria-hidden="true">
                ↗
              </span>

            </Link>

          </div>

        </div>

      </article>


      {/* CTA */}

      <section className="bg-[#f5f3ef]">

        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">

          <div className="max-w-3xl">

            <p className="mb-6 text-sm font-medium text-black/45">
              برای پروژه خودتان
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              هنوز نمی‌دانید کدام روش چاپ مناسب‌تر است؟
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-black/60">

              مشخصات پروژه را بفرستید تا بر اساس محصول،
              متریال، تیراژ و نتیجه مورد انتظار، گزینه مناسب
              را بررسی کنیم.

            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت

              <span aria-hidden="true">
                ↗
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* RELATED ARTICLES */}

      {relatedPosts.length > 0 && (

        <section>

          <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">

            <div className="mb-12">

              <p className="mb-5 text-sm font-medium text-black/45">
                مطالب مرتبط
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                بیشتر بخوانید
              </h2>

            </div>


            <div className="grid gap-8 md:grid-cols-2">

              {relatedPosts.map((related) => (

                <Link
                  key={related.slug}
                  href={`/وبلاگ/${related.slug}`}
                  className="group border-t border-black/10 pt-6"
                >

                  <p className="text-xs text-black/40">
                    {related.category}
                  </p>

                  <h3 className="mt-4 text-xl font-medium leading-8 transition-opacity group-hover:opacity-60">
                    {related.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/50">
                    {related.excerpt}
                  </p>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}


      {/* BACK TO BLOG */}

      <section className="border-t border-black/10">

        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">

          <Link
            href="/وبلاگ"
            className="inline-flex items-center gap-2 text-sm text-black/50 transition-colors hover:text-black"
          >

            <span aria-hidden="true">
              →
            </span>

            بازگشت به مجله چاپ

          </Link>

        </div>

      </section>

    </main>
  );
}
