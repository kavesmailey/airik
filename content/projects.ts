export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string | null;
};

export const projects: Project[] = [
  {
    slug: "packaging",
    title: "پروژه بسته‌بندی",
    category: "بسته‌بندی",
    description: "نمونه‌ای از پروژه‌های چاپ و تولید بسته‌بندی.",
    image: null,
  },
  {
    slug: "fashion-print",
    title: "چاپ برای برند پوشاک",
    category: "پوشاک",
    description: "اجرای چاپ برای محصولات یک برند پوشاک.",
    image: null,
  },
  {
    slug: "restaurant-print",
    title: "هویت چاپی رستوران",
    category: "رستوران",
    description: "مجموعه‌ای از اقلام چاپی برای یک مجموعه رستورانی.",
    image: null,
  },
  {
    slug: "cafe-print",
    title: "اقلام چاپی کافه",
    category: "کافه",
    description: "تولید اقلام چاپی برای یک مجموعه کافه.",
    image: null,
  },
  {
    slug: "corporate-print",
    title: "پروژه سازمانی",
    category: "سازمانی",
    description: "اجرای اقلام چاپی برای یک مجموعه سازمانی.",
    image: null,
  },
  {
    slug: "promotional-products",
    title: "محصولات تبلیغاتی",
    category: "تبلیغاتی",
    description: "تولید محصولات و اقلام تبلیغاتی.",
    image: null,
  },
];
