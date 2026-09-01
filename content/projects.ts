export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "packaging",
    title: "پروژه بسته‌بندی",
    category: "بسته‌بندی",
    description:
      "طراحی و تولید بسته‌بندی با تمرکز بر کیفیت اجرا، متریال و تجربه نهایی محصول.",
  },
  {
    slug: "fashion-print",
    title: "چاپ برای برند پوشاک",
    category: "چاپ روی لباس",
    description:
      "تولید چاپ روی لباس و پارچه با توجه به جنس متریال، جزئیات طرح و تیراژ سفارش.",
  },
  {
    slug: "restaurant",
    title: "هویت چاپی رستوران",
    category: "رستوران",
    description:
      "تولید مجموعه‌ای از اقلام چاپی برای یک کسب‌وکار غذایی با تمرکز بر تجربه برند.",
  },
  {
    slug: "cafe",
    title: "اقلام چاپی کافه",
    category: "کافه",
    description:
      "چاپ و تولید اقلام مورد استفاده در فضای کافه و سفارش‌های بیرون‌بر.",
  },
  {
    slug: "corporate",
    title: "پروژه سازمانی",
    category: "سازمانی",
    description:
      "تولید اقلام چاپی برای استفاده سازمانی، رویدادها و ارتباطات برند.",
  },
  {
    slug: "promotional",
    title: "محصولات تبلیغاتی",
    category: "تبلیغات",
    description:
      "تولید محصولات و متریال‌های چاپی برای کمپین‌ها، رویدادها و فعالیت‌های تبلیغاتی.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
