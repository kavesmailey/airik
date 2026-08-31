export const siteConfig = {
  name: "آیریک",
  englishName: "IRIC",

  tagline: "چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد",

  description:
    "آیریک یک مجموعه تخصصی چاپ برای برندها، کسب‌وکارها و سازمان‌هاست؛ از چاپ سیلک و DTF روی لباس و پارچه تا چاپ روی بگ، بسته‌بندی و محصولات تبلیغاتی.",

  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://airik-xi.vercel.app",

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

  logo: "/images/logo/iric-logo.svg",

  navigation: [
    {
      label: "خانه",
      href: "/",
    },
    {
      label: "خدمات چاپ",
      href: "/خدمات",
    },
    {
      label: "نمونه‌کارها",
      href: "/نمونه-کارها",
    },
    {
      label: "بلاگ",
      href: "/بلاگ",
    },
    {
      label: "درباره ما",
      href: "/درباره-ما",
    },
    {
      label: "تماس با ما",
      href: "/تماس-با-ما",
    },
  ],

  cta: {
    label: "استعلام قیمت",
    href: "/استعلام-قیمت",
  },
};

export type SiteConfig = typeof siteConfig;
