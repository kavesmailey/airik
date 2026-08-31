import { categories } from "./categories";

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
  alt: string;
  content: React.ReactNode;
  relatedServices: string[];
  relatedArticles: string[];
  meta: {
    title: string;
    description: string;
  };
}

export const articles: Article[] = [
  {
    slug: "چاپ-سیلک-چیست",
    title: "چاپ سیلک چیست؟ راهنمای کامل چاپ سیلک روی لباس",
    excerpt:
      "آشنایی کامل با فرآیند چاپ سیلک، مراحل اجرا، مزایا و کاربردهای آن برای چاپ روی لباس و پارچه.",
    category: "چاپ-سیلک",
    date: "۱۴۰۳/۰۸/۰۱",
    readingTime: "۸ دقیقه",
    author: "تیم آیریک",
    featuredImage: "/images/blog/silk-printing-guide.jpg",
    alt: "راهنمای چاپ سیلک روی لباس",
    content: (
      <>
        <p>
          محتوای کامل این مقاله در فاز ۹ (Content Population) اضافه خواهد شد.
          در این نسخه، ساختار و بخش‌های اصلی آماده شده‌اند.
        </p>
        <h2>چاپ سیلک چیست؟</h2>
        <p>توضیحات تکمیلی به‌زودی...</p>
        <h2>مراحل انجام چاپ سیلک</h2>
        <p>توضیحات تکمیلی به‌زودی...</p>
        <h2>مزایای چاپ سیلک</h2>
        <p>توضیحات تکمیلی به‌زودی...</p>
      </>
    ),
    relatedServices: ["چاپ-سیلک", "چاپ-روی-لباس", "چاپ-روی-تیشرت"],
    relatedArticles: ["انتخاب-روش-چاپ-روی-لباس"],
    meta: {
      title: "چاپ سیلک چیست؟ راهنمای کامل چاپ سیلک روی لباس | آیریک",
      description:
        "راهنمای جامع چاپ سیلک روی لباس: تعریف، مراحل، مزایا و کاربردها.",
    },
  },
  {
    slug: "چاپ-روی-تیشرت",
    title: "چاپ روی تیشرت؛ از انتخاب پارچه تا اجرای چاپ",
    excerpt:
      "بررسی نکات کلیدی در چاپ روی تیشرت، از انتخاب پارچه مناسب تا روش‌های چاپ.",
    category: "آموزش-چاپ",
    date: "۱۴۰۳/۰۸/۰۵",
    readingTime: "۷ دقیقه",
    author: "تیم آیریک",
    featuredImage: "/images/blog/t-shirt-printing.jpg",
    alt: "چاپ روی تیشرت",
    content: (
      <>
        <p>
          محتوای کامل این مقاله در فاز ۹ اضافه خواهد شد.
        </p>
        <h2>انتخاب پارچه مناسب</h2>
        <p>توضیحات تکمیلی به‌زودی...</p>
        <h2>روش‌های چاپ روی تیشرت</h2>
        <p>توضیحات تکمیلی به‌زودی...</p>
      </>
    ),
    relatedServices: ["چاپ-روی-تیشرت", "چاپ-روی-لباس", "چاپ-سیلک"],
    relatedArticles: ["چاپ-سیلک-چیست"],
    meta: {
      title: "چاپ روی تیشرت؛ از انتخاب پارچه تا اجرای چاپ | آیریک",
      description:
        "راهنمای تخصصی چاپ روی تیشرت: پارچه، روش چاپ و نکات اجرایی.",
    },
  },
  {
    slug: "چاپ-سیلک-برای-چه-محصولاتی-مناسب-است",
    title: "چاپ سیلک برای چه محصولاتی مناسب است؟",
    excerpt:
      "معرفی محصولات و سطوحی که چاپ سیلک روی آن‌ها بهترین نتیجه را می‌دهد.",
    category: "راهنمای-انتخاب-چاپ",
    date: "۱۴۰۳/۰۸/۱۰",
    readingTime: "۶ دقیقه",
    author: "تیم آیریک",
    featuredImage: "/images/blog/silk-suitable-products.jpg",
    alt: "محصولات مناسب چاپ سیلک",
    content: (
      <>
        <p>
          محتوای کامل این مقاله در فاز ۹ اضافه خواهد شد.
        </p>
        <h2>پارچه و پوشاک</h2>
        <p>توضیحات تکمیلی به‌زودی...</p>
        <h2>بسته‌بندی و کاغذ</h2>
        <p>توضیحات تکمیلی به‌زودی...</p>
      </>
    ),
    relatedServices: ["چاپ-سیلک", "چاپ-روی-پارچه", "چاپ-کارتن"],
    relatedArticles: ["چاپ-سیلک-چیست"],
    meta: {
      title: "چاپ سیلک برای چه محصولاتی مناسب است؟ | آیریک",
      description:
        "بررسی محصولات و متریال‌های مناسب برای چاپ سیلک.",
    },
  },
  {
    slug: "انتخاب-روش-چاپ-روی-لباس",
    title: "چطور روش مناسب چاپ روی لباس را انتخاب کنیم؟",
    excerpt:
      "راهنمای انتخاب بین چاپ سیلک، DTF و سایر روش‌ها برای چاپ روی لباس.",
    category: "راهنمای-انتخاب-چاپ",
    date: "۱۴۰۳/۰۸/۱۵",
    readingTime: "۹ دقیقه",
    author: "تیم آیریک",
    featuredImage: "/images/blog/choosing-printing-method.jpg",
    alt: "انتخاب روش چاپ روی لباس",
    content: (
      <>
        <p>
          محتوای کامل این مقاله در فاز ۹ اضافه خواهد شد.
        </p>
        <h2>مقایسه روش‌ها</h2>
        <p>توضیحات تکمیلی به‌زودی...</p>
        <h2>نکات تصمیم‌گیری</h2>
        <p>توضیحات تکمیلی به‌زودی...</p>
      </>
    ),
    relatedServices: ["چاپ-روی-لباس", "چاپ-سیلک", "چاپ-dtf"],
    relatedArticles: ["چاپ-سیلک-چیست", "چاپ-روی-تیشرت"],
    meta: {
      title: "چطور روش مناسب چاپ روی لباس را انتخاب کنیم؟ | آیریک",
      description:
        "راهنمای انتخاب بهترین روش چاپ روی لباس با توجه به طرح، تیراژ و بودجه.",
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return articles.filter((a) => slugs.includes(a.slug));
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
