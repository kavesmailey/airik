/**
 * ═══════════════════════════════════════════════════════════════
 * SERVICES DATA — All print services offered by آیریک
 * ═══════════════════════════════════════════════════════════════
 * Add/remove services by editing this array.
 */

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  suitableFor: string[];
  printingMethods: { name: string; description: string }[];
  processSteps: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  relatedServiceSlugs: string[];
  meta: {
    title: string;
    description: string;
  };
}

export const services: Service[] = [
  {
    slug: "چاپ-بگ",
    title: "چاپ روی بگ",
    shortDescription: "چاپ سیلک و DTF روی انواع بگ پارچه‌ای، متقال و سوزنی",
    fullDescription:
      "چاپ روی بگ یکی از پرکاربردترین روش‌های برندینگ برای کسب‌وکارهاست. آیریک با استفاده از چاپ سیلک و DTF، کیفیت و ماندگاری چاپ را تضمین می‌کند.",
    benefits: [
      "کیفیت چاپ بالا با جزئیات دقیق",
      "ماندگاری رنگ در شست‌وشو",
      "اجرای تیراژهای مختلف",
      "مشاوره انتخاب نوع بگ",
    ],
    suitableFor: [
      "برندهای پوشاک",
      "بوتیک‌ها",
      "فروشگاه‌های اینترنتی",
      "کافه‌ها و رستوران‌ها",
    ],
    printingMethods: [
      {
        name: "چاپ سیلک",
        description:
          "مناسب برای تیراژ بالا، طرح‌های ساده تا متوسط با رنگ‌های محدود",
      },
      {
        name: "چاپ DTF",
        description:
          "مناسب برای طرح‌های پیچیده با جزئیات بالا و تیراژ پایین",
      },
    ],
    processSteps: [
      "دریافت فایل و مشاوره",
      "آماده‌سازی طرح و انتخاب روش چاپ",
      "اجرای چاپ",
      "کنترل کیفیت",
      "بسته‌بندی و تحویل",
    ],
    faqs: [
      {
        question: "چه نوع بگ‌هایی برای چاپ مناسب هستند؟",
        answer:
          "بگ‌های پارچه‌ای (متقال، سوزنی، کتان) بهترین سطح را برای چاپ دارند. نوع پارچه بر روش چاپ تأثیر می‌گذارد.",
      },
      {
        question: "حداقل تیراژ سفارش چقدر است؟",
        answer:
          "تیراژهای مختلف را بررسی می‌کنیم. برای دریافت پیشنهاد مناسب، مشخصات سفارش خود را از طریق فرم استعلام ارسال کنید.",
      },
    ],
    image: "/images/services/bag-printing.jpg",
    relatedServiceSlugs: ["چاپ-روی-لباس", "چاپ-dtf"],
    meta: {
      title: "چاپ روی بگ | آیریک",
      description: "چاپ سیلک و DTF روی انواع بگ پارچه‌ای با کیفیت بالا",
    },
  },
  {
    slug: "چاپ-روی-لباس",
    title: "چاپ روی لباس",
    shortDescription: "چاپ تخصصی روی تیشرت، هودی و انواع پوشاک",
    fullDescription:
      "چاپ روی لباس با روش‌های سیلک و DTF، مناسب برای برندهای پوشاک، تیم‌ها و کسب‌وکارها.",
    benefits: [
      "جزئیات دقیق در طرح",
      "رنگ‌بندی زنده و ماندگار",
      "مناسب تیراژ پایین و بالا",
    ],
    suitableFor: ["برندهای پوشاک", "تیم‌های ورزشی", "رویدادها"],
    printingMethods: [
      {
        name: "چاپ سیلک",
        description: "مناسب تیراژ بالا، رنگ‌های تخت",
      },
      {
        name: "چاپ DTF",
        description: "مناسب طرح‌های عکسی و جزئیات بالا",
      },
    ],
    processSteps: [
      "دریافت فایل",
      "آماده‌سازی طرح",
      "اجرای چاپ",
      "کنترل کیفیت",
      "تحویل",
    ],
    faqs: [
      {
        question: "کدام روش برای چاپ عکس روی لباس بهتر است؟",
        answer:
          "برای طرح‌های عکسی و جزئیات بالا، DTF کیفیت بهتری ارائه می‌دهد.",
      },
    ],
    image: "/images/services/clothing-printing.jpg",
    relatedServiceSlugs: ["چاپ-بگ", "چاپ-dtf"],
    meta: {
      title: "چاپ روی لباس | آیریک",
      description: "چاپ تخصصی روی تیشرت و هودی با سیلک و DTF",
    },
  },
  {
    slug: "چاپ-کارتن",
    title: "چاپ روی کارتن",
    shortDescription: "چاپ لوگو و برند روی کارتن‌های بسته‌بندی",
    fullDescription:
      "چاپ روی کارتن بسته‌بندی، هویت برند شما را در لحظه تحویل سفارش تقویت می‌کند.",
    benefits: [
      "افزایش شناخت برند",
      "بسته‌بندی حرفه‌ای",
      "مناسب ارسال سفارش",
    ],
    suitableFor: [
      "فروشگاه‌های اینترنتی",
      "تولیدکننده‌ها",
      "برندهای پوشاک",
    ],
    printingMethods: [
      {
        name: "چاپ سیلک",
        description: "مناسب لوگو و طرح‌های ساده",
      },
    ],
    processSteps: [
      "دریافت فایل",
      "آماده‌سازی",
      "چاپ",
      "کنترل کیفیت",
      "تحویل",
    ],
    faqs: [],
    image: "/images/services/carton-printing.jpg",
    relatedServiceSlugs: ["چاپ-جعبه-پیتزا", "چاپ-بگ"],
    meta: {
      title: "چاپ روی کارتن | آیریک",
      description: "چاپ لوگو و برند روی کارتن‌های بسته‌بندی",
    },
  },
  {
    slug: "چاپ-جعبه-پیتزا",
    title: "چاپ روی جعبه پیتزا",
    shortDescription: "چاپ برند و طرح روی جعبه‌های پیتزا",
    fullDescription:
      "جعبه پیتزا اولین نقطه تماس مشتری با برند شماست. چاپ با کیفیت بالا تجربه سفارش را ارتقا می‌دهد.",
    benefits: [
      "برندینگ در لحظه تحویل",
      "کیفیت چاپ بالا",
      "مناسب رستوران‌ها",
    ],
    suitableFor: ["رستوران‌ها", "فست‌فودها", "کافه‌ها"],
    printingMethods: [
      {
        name: "چاپ سیلک",
        description: "مناسب لوگو و طرح‌های ساده",
      },
    ],
    processSteps: [
      "دریافت فایل",
      "آماده‌سازی",
      "چاپ",
      "کنترل کیفیت",
      "تحویل",
    ],
    faqs: [],
    image: "/images/services/pizza-box-printing.jpg",
    relatedServiceSlugs: ["چاپ-ظروف-گرد", "چاپ-کارتن"],
    meta: {
      title: "چاپ روی جعبه پیتزا | آیریک",
      description: "چاپ برند و طرح روی جعبه‌های پیتزا",
    },
  },
  {
    slug: "چاپ-لیوان-کاغذی",
    title: "چاپ روی لیوان کاغذی",
    shortDescription: "چاپ برند روی لیوان‌های کاغذی یکبار مصرف",
    fullDescription:
      "لیوان کاغذی با لوگوی برند شما، هر بار نوشیدن قهوه را به تجربه‌ای از برند شما تبدیل می‌کند.",
    benefits: ["برندینگ روزانه", "مناسب کافه‌ها", "کیفیت چاپ بالا"],
    suitableFor: ["کافه‌ها", "رستوران‌ها", "دفاتر"],
    printingMethods: [
      {
        name: "چاپ سیلک",
        description: "مناسب لوگو و طرح‌های ساده",
      },
    ],
    processSteps: [
      "دریافت فایل",
      "آماده‌سازی",
      "چاپ",
      "کنترل کیفیت",
      "تحویل",
    ],
    faqs: [],
    image: "/images/services/paper-cup-printing.jpg",
    relatedServiceSlugs: ["چاپ-ظروف-گرد", "چاپ-جعبه-پیتزا"],
    meta: {
      title: "چاپ روی لیوان کاغذی | آیریک",
      description: "چاپ برند روی لیوان‌های کاغذی",
    },
  },
  {
    slug: "چاپ-ظروف-گرد",
    title: "چاپ روی ظروف گرد",
    shortDescription: "چاپ روی ظروف و بسته‌بندی‌های گرد",
    fullDescription:
      "چاپ روی ظروف گرد، برند شما را در هر استفاده متمایز می‌کند.",
    benefits: ["برندینگ ماندگار", "مناسب محصولات غذایی"],
    suitableFor: ["تولیدکننده‌ها", "برندهای غذایی"],
    printingMethods: [
      {
        name: "چاپ سیلک",
        description: "مناسب طرح‌های ساده",
      },
    ],
    processSteps: [
      "دریافت فایل",
      "آماده‌سازی",
      "چاپ",
      "کنترل کیفیت",
      "تحویل",
    ],
    faqs: [],
    image: "/images/services/round-container-printing.jpg",
    relatedServiceSlugs: ["چاپ-لیوان-کاغذی", "چاپ-جعبه-پیتزا"],
    meta: {
      title: "چاپ روی ظروف گرد | آیریک",
      description: "چاپ برند روی ظروف گرد",
    },
  },
  {
    slug: "چاپ-dtf",
    title: "چاپ DTF",
    shortDescription: "چاپ انتقال حرارتی با جزئیات بالا و رنگ‌های زنده",
    fullDescription:
      "چاپ DTF برای طرح‌های پیچیده، عکس و جزئیات بالا مناسب است. این روش روی انواع پارچه و سطوح قابل اجراست.",
    benefits: [
      "جزئیات بسیار بالا",
      "رنگ‌های زنده",
      "مناسب تیراژ پایین",
      "قابل اجرا روی انواع پارچه",
    ],
    suitableFor: [
      "برندهای پوشاک",
      "بوتیک‌ها",
      "فروشگاه‌های اینترنتی",
    ],
    printingMethods: [
      {
        name: "چاپ DTF",
        description: "انتقال حرارتی با کیفیت بالا",
      },
    ],
    processSteps: [
      "دریافت فایل",
      "چاپ فیلم",
      "انتقال حرارتی",
      "کنترل کیفیت",
      "تحویل",
    ],
    faqs: [
      {
        question: "DTF برای چه طرح‌هایی مناسب است؟",
        answer:
          "طرح‌های عکسی، گرادیان، جزئیات ریز و رنگ‌های زیاد. هر چیزی که با سیلک سخت اجرا می‌شود.",
      },
    ],
    image: "/images/services/dtf-printing.jpg",
    relatedServiceSlugs: ["چاپ-بگ", "چاپ-روی-لباس"],
    meta: {
      title: "چاپ DTF | آیریک",
      description: "چاپ انتقال حرارتی با جزئیات بالا",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
