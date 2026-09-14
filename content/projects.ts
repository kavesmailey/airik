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
    image: "/images/portfolio/packaging.jpg",
  },
  {
    slug: "fashion-print",
    title: "چاپ برای برند پوشاک",
    category: "پوشاک",
    description: "اجرای چاپ برای محصولات یک برند پوشاک.",
    image: "/images/portfolio/fashion-print.jpg",
  },
  {
    slug: "restaurant-print",
    title: "هویت چاپی رستوران",
    category: "رستوران",
    description: "مجموعه‌ای از اقلام چاپی برای یک مجموعه رستورانی.",
    image: "/images/portfolio/restaurant-print.jpg",
  },
  {
    slug: "cafe-print",
    title: "اقلام چاپی کافه",
    category: "کافه",
    description: "تولید اقلام چاپی برای یک مجموعه کافه.",
    image: "/images/portfolio/cafe-print.jpg",
  },
  {
    slug: "corporate-print",
    title: "پروژه سازمانی",
    category: "سازمانی",
    description: "اجرای اقلام چاپی برای یک مجموعه سازمانی.",
    image: "/images/portfolio/corporate-print.jpg",
  },
  {
    slug: "promotional-products",
    title: "محصولات تبلیغاتی",
    category: "تبلیغاتی",
    description: "تولید محصولات و اقلام تبلیغاتی.",
    image: "/images/portfolio/promotional-products.jpg",
  },
];
