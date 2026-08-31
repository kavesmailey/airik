export const siteConfig = {
  name: "آیریک",
  englishName: "IRIC",
  tagline: "چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد",
  description:
    "چاپ سیلک و DTF روی بگ، لباس، کارتن، جعبه پیتزا، لیوان کاغذی و ظروف گرد؛ با تمرکز بر کیفیت، اجرای دقیق و مشاوره قبل از سفارش.",

  // SITE_URL — replace with your actual domain when live
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://iric.print",

  contact: {
    phone: "",
    phoneDisplay: "",
    email: "",
    address: "",
    city: "",
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

  // Logo path (placed in /public)
  logo: "/images/logo/iric-logo.svg",

  navigation: [
    { label: "خانه", href: "/" },
    { label: "خدمات چاپ", href: "/خدمات" },
    { label: "نمونه‌کارها", href: "/نمونه-کارها" },
    { label: "وبلاگ", href: "/وبلاگ" },
    { label: "درباره ما", href: "/درباره-ما" },
    { label: "تماس با ما", href: "/تماس-با-ما" },
  ],

  cta: {
    label: "استعلام قیمت",
    href: "/استعلام-قیمت",
  },
};

export type SiteConfig = typeof siteConfig;
