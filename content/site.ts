export const siteConfig = {
  name: "آیریک",
  englishName: "Ayric",

  tagline: "چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد",

  description:
    "آیریک یک مجموعه تخصصی چاپ برای برندها، کسب‌وکارها و سازمان‌هاست؛ از چاپ سیلک و DTF روی لباس و پارچه تا چاپ روی بگ، بسته‌بندی و محصولات تبلیغاتی.",

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

  /**
   * Brand assets
   *
   * These paths are intentionally empty until the actual
   * brand assets are added to /public/images/brand/.
   */
  logo: "",
  logoMark: "",
  ogImage: "",

  navigation: [
    { label: "خانه", href: "/" },
    { label: "خدمات چاپ", href: "/خدمات" },
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
