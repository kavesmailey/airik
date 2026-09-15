export const siteConfig = {
  name: "آیریک",
  englishName: "Ayric",

  tagline: "چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد",

  description:
    "آیریک یک مجموعه تخصصی چاپ در کرج است؛ با تمرکز بر چاپ سیلک و چاپ DTF و ارائه خدمات چاپ روی لباس، پارچه، بگ و سایر سطوح و محصولات تعریف‌شده در مجموعه.",

  siteUrl: "https://ayricchap.ir",

  contact: {
    phone: "",
    phoneDisplay: "",
    email: "",
    address: "",
    city: "کرج",
    country: "ایران",
    workingHours: "",
    mapEmbedUrl: "",
    serviceArea: "ارسال به سراسر ایران",
  },

  social: {
    instagram: "",
    linkedin: "",
    telegram: "",
    whatsapp: "",
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
