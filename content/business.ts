/**
 * ═══════════════════════════════════════════════════════════════
 * BUSINESS TYPES — Landing page data for different customer types
 * ═══════════════════════════════════════════════════════════════
 */

export interface BusinessType {
  slug: string;
  title: string;
  description: string;
  relevantServices: string[];
  relevantArticles: string[];
  image: string;
  meta: {
    title: string;
    description: string;
  };
}

export const businessTypes: BusinessType[] = [
  {
    slug: "برندهای-پوشاک",
    title: "برای برندهای پوشاک",
    description:
      "چاپ تخصصی روی لباس، بگ و بسته‌بندی برای برندهای پوشاک که کیفیت برایشان اهمیت دارد.",
    relevantServices: ["چاپ-روی-لباس", "چاپ-بگ", "چاپ-dtf"],
    relevantArticles: ["چاپ-سیلک-چیست", "چاپ-dtf-چیست"],
    image: "/images/business/clothing-brands.jpg",
    meta: {
      title: "چاپ برای برندهای پوشاک | آیریک",
      description: "خدمات چاپ تخصصی برای برندهای پوشاک",
    },
  },
  {
    slug: "بوتیک-ها",
    title: "برای بوتیک‌ها",
    description:
      "بگ اختصاصی و چاپ برند برای بوتیک‌هایی که می‌خواهند هویت متمایزی داشته باشند.",
    relevantServices: ["چاپ-بگ", "چاپ-dtf"],
    relevantArticles: ["بهترین-روش-چاپ-روی-بگ"],
    image: "/images/business/boutiques.jpg",
    meta: {
      title: "چاپ برای بوتیک‌ها | آیریک",
      description: "خدمات چاپ تخصصی برای بوتیک‌ها",
    },
  },
  {
    slug: "کافه-ها",
    title: "برای کافه‌ها",
    description:
      "چاپ لیوان، ظروف و بسته‌بندی برای کافه‌هایی که تجربه مشتری را کامل می‌کنند.",
    relevantServices: ["چاپ-لیوان-کاغذی", "چاپ-ظروف-گرد", "چاپ-بگ"],
    relevantArticles: ["چاپ-روی-لیوان-کاغذی"],
    image: "/images/business/cafes.jpg",
    meta: {
      title: "چاپ برای کافه‌ها | آیریک",
      description: "خدمات چاپ تخصصی برای کافه‌ها",
    },
  },
  {
    slug: "رستوران-ها",
    title: "برای رستوران‌ها و فست‌فودها",
    description:
      "چاپ جعبه پیتزا، ظروف و بسته‌بندی برای رستوران‌هایی که برندشان را جدی می‌گیرند.",
    relevantServices: ["چاپ-جعبه-پیتزا", "چاپ-ظروف-گرد", "چاپ-کارتن"],
    relevantArticles: ["چاپ-روی-جعبه-پیتزا"],
    image: "/images/business/restaurants.jpg",
    meta: {
      title: "چاپ برای رستوران‌ها | آیریک",
      description: "خدمات چاپ تخصصی برای رستوران‌ها",
    },
  },
  {
    slug: "فروشگاه-های-اینترنتی",
    title: "برای فروشگاه‌های اینترنتی",
    description:
      "بسته‌بندی حرفه‌ای برای ارسال سفارش که تجربه مشتری را ارتقا می‌دهد.",
    relevantServices: ["چاپ-کارتن", "چاپ-بگ", "چاپ-dtf"],
    relevantArticles: ["فایل-مناسب-برای-چاپ"],
    image: "/images/business/online-stores.jpg",
    meta: {
      title: "چاپ برای فروشگاه‌های اینترنتی | آیریک",
      description: "خدمات چاپ تخصصی برای فروشگاه‌های اینترنتی",
    },
  },
  {
    slug: "تولیدکننده-ها",
    title: "برای تولیدکننده‌ها",
    description:
      "چاپ در تیراژ بالا با کیفیت یکنواخت برای تولیدکننده‌هایی که نیاز به برندینگ دارند.",
    relevantServices: ["چاپ-کارتن", "چاپ-ظروف-گرد", "چاپ-لیوان-کاغذی"],
    relevantArticles: ["چاپ-سیلک-چیست"],
    image: "/images/business/manufacturers.jpg",
    meta: {
      title: "چاپ برای تولیدکننده‌ها | آیریک",
      description: "خدمات چاپ تخصصی برای تولیدکننده‌ها",
    },
  },
];

export function getBusinessTypeBySlug(slug: string): BusinessType | undefined {
  return businessTypes.find((b) => b.slug === slug);
}
