import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/cards/ArticleCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { articles } from "@/content/articles";

export const metadata: Metadata = generateMetadata({
  title: "مجله آیریک",
  description: "مقالات آموزشی درباره چاپ سیلک، DTF، بسته‌بندی و برندینگ",
  path: "/مجله",
});

export default function BlogPage() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs
            items={[{ label: "مجله آیریک", href: "/مجله" }]}
          />
          <div className="mt-6">
            <SectionHeading
              eyebrow="مجله آیریک"
              title="آموزش و راهنمای چاپ"
              description="مقالات کاربردی برای کمک به انتخاب روش چاپ مناسب"
              tone="dark"
            />
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
