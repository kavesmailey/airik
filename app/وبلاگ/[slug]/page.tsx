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

export function generateMetadata({ params }: ArticlePageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "مطلب پیدا نشد | آیریک",
    };
  }

  return {
    title: `${post.title} | آیریک`,
    description:
      post.excerpt ||
      `مطالعه مطلب ${post.title} در مجله آیریک.`,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main dir="rtl">
      {/* Article header */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-36">
          <Link
            href="/وبلاگ"
            className="mb-12 inline-flex items-center gap-2 text-sm text-black/45 transition-colors hover:text-black"
          >
            <span>→</span>
            بازگشت به مجله
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-black/40">
            {post.category && <span>{post.category}</span>}
            {post.category && post.date && <span>·</span>}
            {post.date && <span>{post.date}</span>}
          </div>

          <h1 className="mt-7 text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-9 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Article */}
      <article>
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          {"content" in post && typeof post.content === "string" ? (
            <div className="whitespace-pre-line text-lg leading-[2.1] text-black/70">
              {post.content}
            </div>
          ) : (
            <div className="text-lg leading-[2.1] text-black/70">
              <p>
                در این مطلب درباره «{post.title}» صحبت می‌کنیم و نکات مهمی را
                که قبل از انتخاب روش چاپ باید بدانید بررسی می‌کنیم.
              </p>

              <p className="mt-8">
                انتخاب روش مناسب چاپ به عوامل مختلفی مثل جنس محصول، تیراژ،
                جزئیات طرح، تعداد رنگ و نتیجه مورد انتظار بستگی دارد.
              </p>

              <p className="mt-8">
                اگر برای پروژه خودتان هنوز مطمئن نیستید کدام روش مناسب‌تر
                است، می‌توانید مشخصات سفارش را برای تیم آیریک ارسال کنید تا
                بهترین گزینه را بررسی کنیم.
              </p>
            </div>
          )}
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
              هنوز نمی‌دانید کدام روش چاپ برای شما مناسب است؟
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-black/60">
              مشخصات پروژه را بفرستید تا بر اساس محصول، تیراژ و نتیجه‌ای که
              می‌خواهید، راهکار مناسب را بررسی کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white"
            >
              استعلام قیمت
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <Link
            href="/وبلاگ"
            className="inline-flex items-center gap-2 text-sm text-black/50 transition-colors hover:text-black"
          >
            <span>→</span>
            مشاهده مطالب بیشتر
          </Link>
        </div>
      </section>
    </main>
  );
}
