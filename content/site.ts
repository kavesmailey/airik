/**
 * ═══════════════════════════════════════════════════════════════
 * SITE CONFIGURATION — Central place for all site-wide data
 * ═══════════════════════════════════════════════════════════════
 * Edit this file to update navigation, contact info, social links.
 * Replace placeholder values with real data when available.
 */

export const siteConfig = {
  name: "آیریک",
  englishName: "IRIC",
  tagline: "چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد",
  description:
    "چاپ سیلک و DTF روی بگ، لباس، کارتن، جعبه پیتزا، لیوان کاغذی و ظروف گرد؛ با تمرکز بر کیفیت، اجرای دقیق و مشاوره قبل از سفارش.",

  // Contact — replace with real data when available
  contact: {
    phone: "",
    phoneDisplay: "",
    email: "",
    address: "",
    city: "",
    workingHours: "",
    mapEmbedUrl: "",
    serviceArea: "ارسال به سراسر ایران",
  },

  // Social links — replace with real URLs
  social: {
    instagram: "",
    linkedin: "",
    telegram: "",
    whatsapp: "",
  },

  // Navigation — main menu items
  navigation: [
    { label: "خانه", href: "/" },
    { label: "خدمات چاپ", href: "/خدمات" },
    { label: "نمونه‌کارها", href: "/نمونه-کارها" },
    { label: "مجله آیریک", href: "/مجله" },
    { label: "درباره آیریک", href: "/درباره-آیریک" },
    { label: "تماس با ما", href: "/تماس-با-ما" },
  ],

  // Primary CTA
  cta: {
    label: "استعلام قیمت",
    href: "/استعلام-قیمت",
  },
};

export type SiteConfig = typeof siteConfig;
