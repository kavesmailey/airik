import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/content/articles";

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
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main dir="rtl">
      <article>
        <header className="border-b border-black/10">
          <div className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
            <Link
              href="/بلاگ"
              className="mb-10 inline-block text-sm text-black/45 transition-colors hover:text-black"
            >
              ← بازگشت به بلاگ
            </Link>

            {article.category && (
              <p className="mb-7 text-sm font-medium text-black/45">
                {article.category}
              </p>
            )}

            <h1 className="text-4xl font-medium leading-[1.35] tracking-tight md:text-6xl">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
                {article.excerpt}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-5 text-xs text-black/40">
              {article.readingTime && (
                <span>{article.readingTime} دقیقه مطالعه</span>
              )}

              {article.date && <span>{article.date}</span>}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <div className="prose prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-9 prose-p:text-black/65 prose-li:leading-8 prose-li:text-black/65">
            {Array.isArray(article.content) ? (
              article.content.map((section, index) => {
                if (typeof section === "string") {
                  return <p key={index}>{section}</p>;
                }

                if (
                  typeof section === "object" &&
                  section !== null &&
                  "type" in section
                ) {
                  if (section.type === "heading") {
                    return (
                      <h2 key={index} className="mt-16 text-3xl">
                        {section.content}
                      </h2>
                    );
                  }

                  if (section.type === "paragraph") {
                    return <p key={index}>{section.content}</p>;
                  }

                  if (section.type === "list") {
                    return (
                      <ul key={index}>
                        {section.items?.map(
                          (item: string, itemIndex: number) => (
                            <li key={itemIndex}>{item}</li>
                          ),
                        )}
                      </ul>
                    );
                  }
                }

                return null;
              })
            ) : (
              <div>{article.content}</div>
            )}
          </div>
        </div>
      </article>

      <section className="border-t border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-6 text-sm font-medium text-black/45">
                قدم بعدی
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                برای پروژه‌تان
                <br />
                راهکار مناسب می‌خواهید؟
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
                اطلاعات سفارش را برای ما بفرستید. اگر درباره روش چاپ یا
                متریال مطمئن نیستید، بررسی آن را به ما بسپارید.
              </p>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
