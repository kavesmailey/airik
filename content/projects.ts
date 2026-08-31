/**
 * ═══════════════════════════════════════════════════════════════
 * PROJECTS DATA — Sample project structures
 * ═══════════════════════════════════════════════════════════════
 * Replace with real project data when available.
 */

export interface Project {
  slug: string;
  title: string;
  brand: string;
  product: string;
  printingMethod: string;
  quantity: string;
  colorCount: string;
  objective: string;
  challenge: string;
  process: string[];
  result: string;
  images: string[];
  meta: {
    title: string;
    description: string;
  };
}

export const projects: Project[] = [
  {
    slug: "چاپ-بگ-برند-نمونه",
    title: "از یک فایل ساده تا ۱۰۰۰ بگ چاپ‌شده",
    brand: "برند نمونه",
    product: "بگ",
    printingMethod: "سیلک",
    quantity: "۱۰۰۰ عدد",
    colorCount: "۲ رنگ",
    objective: "بسته‌بندی اختصاصی برند",
    challenge:
      "ایجاد هویت بصری یکپارچه برای بسته‌بندی که در لحظه تحویل سفارش دیده شود.",
    process: [
      "دریافت فایل",
      "آماده‌سازی شابلون",
      "چاپ",
      "کنترل کیفیت",
      "بسته‌بندی و تحویل",
    ],
    result: "بگ‌های چاپ‌شده با کیفیت یکنواخت و رنگ‌های دقیق.",
    images: [],
    meta: {
      title: "چاپ بگ برند نمونه | آیریک",
      description: "پروژه چاپ ۱۰۰۰ بگ با روش سیلک",
    },
  },
  {
    slug: "چاپ-لباس-برند-نمونه",
    title: "چاپ تیشرت با جزئیات بالا",
    brand: "برند پوشاک نمونه",
    product: "لباس",
    printingMethod: "DTF",
    quantity: "۲۰۰ عدد",
    colorCount: "چند رنگ",
    objective: "چاپ طرح عکسی با جزئیات بالا",
    challenge: "اجرای طرح پیچیده با گرادیان روی پارچه",
    process: [
      "دریافت فایل",
      "چاپ فیلم",
      "انتقال حرارتی",
      "کنترل کیفیت",
      "تحویل",
    ],
    result: "تیشرت‌های چاپ‌شده با جزئیات دقیق و رنگ‌های زنده.",
    images: [],
    meta: {
      title: "چاپ لباس برند نمونه | آیریک",
      description: "پروژه چاپ ۲۰۰ تیشرت با روش DTF",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
