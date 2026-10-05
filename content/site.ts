export const siteConfig = {
  name: "آیریک",
  englishName: "Ayric",

  tagline: "چاپ تخصصی برای برندهایی که به کیفیت اهمیت می‌دهند",

  description:
    "آیریک یک مجموعه تخصصی چاپ در کرج است؛ با تمرکز بر چاپ سیلک و چاپ DTF و ارائه خدمات چاپ روی لباس، پارچه، بگ و سایر سطوح و محصولات تعریف‌شده در مجموعه.",

  siteUrl: "https://ayricchap.ir",

  contact: {
    phone: "+989128583216",
    phoneDisplay: "+98 912 858 3216",
    email: "",
    address: "کرج، میدان شهدا، خیابان مظاهری، خیابان فیضی، پلاک ۳۰",
    city: "کرج",
    country: "ایران",
    workingHours: "",
    mapEmbedUrl:
      "https://www.google.com/maps?q=35.81545165240275,50.996401599760084&output=embed",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&destination=35.81545165240275,50.996401599760084",
    serviceArea: "ارسال به سراسر ایران",
  },

  social: {
    instagram: "https://www.instagram.com/ayric_chap/",
    linkedin: "",
    telegram: "https://t.me/+989128583216",
    whatsapp: "https://wa.me/989128583216",
  },

  logo: "/images/brand/logo.svg",
  logoMark: "/images/brand/logo.svg",
  ogImage: "",

  navigation: [
    { label: "خانه", href: "/" },
    { label: "خدمات چاپ", href: "/خدمات" },
    {
      label: "چاپ برای کسب‌وکارها",
      href: "/برای-کسب-و-کارها",
    },
    { label: "نمونه‌کارها", href: "/نمونه-کارها" },
    { label: "بلاگ", href: "/وبلاگ" },
    { label: "درباره ما", href: "/درباره-ما" },
    { label: "تماس با ما", href: "/تماس-با-ما" },
  ],

  cta: {
    label: "استعلام قیمت",
    href: "/استعلام-قیمت",
  },
};

export type SiteConfig = typeof siteConfig;