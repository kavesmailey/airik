/**
 * Blog categories
 */
export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "چاپ-سیلک",
    name: "چاپ سیلک",
    description: "مقالات آموزشی درباره چاپ سیلک، مزایا و کاربردها",
  },
  {
    slug: "آموزش-چاپ",
    name: "آموزش چاپ",
    description: "راهنمای گام‌به‌گام برای درک فرآیند چاپ",
  },
  {
    slug: "طراحی-و-آماده‌سازی",
    name: "طراحی و آماده‌سازی",
    description: "نکات طراحی فایل برای بهترین نتیجه چاپ",
  },
  {
    slug: "راهنمای-انتخاب-چاپ",
    name: "راهنمای انتخاب چاپ",
    description: "کمک به انتخاب روش مناسب چاپ برای محصول شما",
  },
  {
    slug: "نگهداری-و-مراقبت",
    name: "نگهداری و مراقبت",
    description: "چطور از محصولات چاپ‌شده مراقبت کنیم",
  },
];
