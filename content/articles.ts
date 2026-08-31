/**
 * ═══════════════════════════════════════════════════════════════
 * ARTICLES DATA — Blog articles for مجله آیریک
 * ═══════════════════════════════════════════════════════════════
 * Add new articles by adding entries to this array.
 */

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updatedDate?: string;
  readingTime: string;
  author: string;
  featuredImage: string;
  content: string;
  relatedSlugs: string[];
  meta: {
    title: string;
    description: string;
  };
}

export const articles: Article[] = [
  {
    slug: "چاپ-سیلک-چیست",
    title: "چاپ سیلک چیست؟",
    excerpt:
      "آشنایی با روش چاپ سیلک، کاربردها، مزایا و محدودیت‌های آن برای چاپ روی محصولات مختلف.",
    category: "راهنمای چاپ",
    date: "۱۴۰۳/۰۸/۰۱",
    readingTime: "۵ دقیقه",
    author: "تیم آیریک",
    featuredImage: "/images/blog/screen-printing.jpg",
    content: "محتوای مقاله در فاز بعدی تکمیل می‌شود.",
    relatedSlugs: ["چاپ-dtf-چیست", "تفاوت-چاپ-سیلک-و-dtf"],
    meta: {
      title: "چاپ سیلک چیست؟ | مجله آیریک",
      description: "آشنایی کامل با روش چاپ سیلک",
    },
  },
  {
    slug: "چاپ-dtf-چیست",
    title: "چاپ DTF چیست؟",
    excerpt:
      "معرفی روش چاپ DTF، مزایا، محدودیت‌ها و موارد استفاده از این روش چاپ.",
    category: "راهنمای چاپ",
    date: "۱۴۰۳/۰۸/۰۵",
    readingTime: "۶ دقیقه",
    author: "تیم آیریک",
    featuredImage: "/images/blog/dtf-printing.jpg",
    content: "محتوای مقاله در فاز بعدی تکمیل می‌شود.",
    relatedSlugs: ["چاپ-سیلک-چیست", "تفاوت-چاپ-سیلک-و-dtf"],
    meta: {
      title: "چاپ DTF چیست؟ | مجله آیریک",
      description: "آشنایی کامل با روش چاپ DTF",
    },
  },
  {
    slug: "تفاوت-چاپ-سیلک-و-dtf",
    title: "تفاوت چاپ سیلک و DTF چیست؟",
    excerpt:
      "مقایسه دو روش محبوب چاپ برای کمک به انتخاب روش مناسب بر اساس محصول و تیراژ.",
    category: "راهنمای چاپ",
    date: "۱۴۰۳/۰۸/۱۰",
    readingTime: "۷ دقیقه",
    author: "تیم آیریک",
    featuredImage: "/images/blog/screen-vs-dtf.jpg",
    content: "محتوای مقاله در فاز بعدی تکمیل می‌شود.",
    relatedSlugs: ["چاپ-سیلک-چیست", "چاپ-dtf-چیست"],
    meta: {
      title: "تفاوت چاپ سیلک و DTF | مجله آیریک",
      description: "مقایسه روش‌های چاپ سیلک و DTF",
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return articles.filter((a) => slugs.includes(a.slug));
}
