import type { Metadata } from "next";

import { generateMetadata } from "@/lib/seo";

import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import Accordion from "@/components/ui/Accordion";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";

import { siteConfig } from "@/content/site";

export const metadata: Metadata = generateMetadata({
  title: "چاپ سیلک؛ چاپ روی لباس، بگ و بسته‌بندی | آیریک",
  description:
    "خدمات چاپ سیلک و اسکرین آیریک برای چاپ روی لباس، بگ، پارچه، کارتن، بسته‌بندی و محصولات تبلیغاتی. مناسب برای طرح‌های ساده و تیراژ متوسط تا بالا.",
  path: "/خدمات/چاپ-سیلک",
});

const advantages = [
  {
    title: "ماندگاری بالا",
    description:
      "چاپ سیلک در صورت انتخاب مرکب و روش اجرای مناسب، چاپی بادوام و مناسب برای استفاده مکرر ایجاد می‌کند.",
  },
  {
    title: "مناسب برای تیراژ",
    description:
      "هزینه آماده‌سازی شابلون باعث می‌شود چاپ سیلک در تیراژهای متوسط و بالا انتخاب اقتصادی‌تری باشد.",
  },
  {
    title: "رنگ‌های پوشاننده",
    description:
      "امکان استفاده از مرکب‌های مناسب برای ایجاد رنگ‌های پررنگ و پوشاننده، حتی روی برخی سطوح و لباس‌های تیره.",
  },
  {
    title: "تنوع متریال",
    description:
      "بسته به نوع مرکب و سطح، چاپ سیلک روی پارچه، لباس، کاغذ، کارتن، پلاستیک و برخی متریال دیگر قابل اجراست.",
  },
  {
    title: "مناسب برای هویت برند",
    description:
      "برای چاپ لوگو، نوشته و عناصر گرافیکی ساده روی محصولات تبلیغاتی و بسته‌بندی کاربرد زیادی دارد.",
  },
  {
    title: "تکرارپذیری",
    description:
      "پس از آماده‌سازی شابلون، امکان اجرای تعداد زیادی چاپ با طرح یکسان و کنترل‌شده وجود دارد.",
  },
];

const suitableProducts = [
  "تیشرت",
  "هودی",
  "لباس و پوشاک",
  "بگ پارچه‌ای",
  "پارچه و منسوجات",
  "کارتن",
  "بسته‌بندی",
  "جعبه پیتزا",
  "لیوان کاغذی",
  "محصولات تبلیغاتی",
];

const bestFor = [
  "لوگو و نشانه‌های برند",
  "نوشته و تایپوگرافی",
  "طرح‌های گرافیکی ساده",
  "طرح‌های چندرنگ با رنگ‌های مشخص",
  "سفارش‌های تیراژ متوسط و بالا",
];

const notIdealFor = [
  "عکس‌های واقع‌گرایانه",
  "تصاویر دارای جزئیات بسیار زیاد",
  "گرادیان‌های پیچیده",
  "سفارش‌های بسیار کم‌تیراژ که هزینه شابلون برایشان توجیه ندارد",
];

const processSteps = [
  {
    title: "بررسی سفارش",
    description:
      "نوع محصول، جنس سطح، ابعاد چاپ، تعداد رنگ و تیراژ بررسی می‌شود.",
  },
  {
    title: "بررسی فایل",
    description:
      "فایل گرافیکی بررسی می‌شود تا مشخص شود طرح برای چاپ سیلک مناسب است یا نیاز به آماده‌سازی دارد.",
  },
  {
    title: "تفکیک رنگ",
    description:
      "در طرح‌های چندرنگ، رنگ‌ها برای آماده‌سازی شابلون تفکیک و تنظیم می‌شوند.",
  },
  {
    title: "ساخت شابلون",
    description:
      "برای هر رنگ، شابلون مناسب آماده می‌شود تا طرح روی سطح منتقل شود.",
  },
  {
    title: "آماده‌سازی مرکب",
    description:
      "نوع مرکب و رنگ متناسب با جنس محصول و نتیجه مورد انتظار انتخاب می‌شود.",
  },
  {
    title: "اجرای چاپ",
    description:
      "چاپ با کنترل جای‌گذاری، رنگ و کیفیت اجرا انجام می‌شود.",
  },
  {
    title: "کنترل نهایی",
    description:
      "نمونه‌ها و خروجی نهایی بررسی می‌شوند تا کیفیت چاپ و یکنواختی آن کنترل شود.",
  },
];

const faqs = [
  {
    id: "what-is-screen-printing",
    title: "چاپ سیلک چیست؟",
    content:
      "چاپ سیلک یا Screen Printing روشی برای انتقال مرکب از طریق یک توری و شابلون روی سطح مورد نظر است. این روش برای چاپ لوگو، نوشته و طرح‌های گرافیکی روی لباس، بگ، پارچه، بسته‌بندی و برخی محصولات تبلیغاتی کاربرد دارد.",
  },
  {
    id: "screen-printing-products",
    title: "چاپ سیلک روی چه محصولاتی انجام می‌شود؟",
    content:
      "بسته به جنس سطح و نوع مرکب، چاپ سیلک می‌تواند روی محصولاتی مانند تیشرت و هودی، بگ پارچه‌ای، پارچه و منسوجات، کارتن، برخی بسته‌بندی‌ها، جعبه پیتزا، لیوان کاغذی و بعضی محصولات تبلیغاتی انجام شود.",
  },
  {
    id: "screen-printing-design",
    title: "چه طرح‌هایی برای چاپ سیلک مناسب‌تر هستند؟",
    content:
      "لوگو، نوشته، تایپوگرافی و طرح‌های گرافیکی با رنگ‌های مشخص معمولاً گزینه‌های مناسبی برای چاپ سیلک هستند. طرح‌های عکسی، گرادیان‌های پیچیده و تصاویر بسیار پرجزئیات ممکن است برای این روش مناسب نباشند یا به آماده‌سازی متفاوتی نیاز داشته باشند.",
  },
  {
    id: "screen-printing-quantity",
    title: "چاپ سیلک برای چه تیراژی مناسب است؟",
    content:
      "به دلیل هزینه آماده‌سازی شابلون، چاپ سیلک معمولاً برای تیراژ متوسط و بالا اقتصادی‌تر می‌شود. با این حال، مناسب بودن آن به محصول، تعداد رنگ، ابعاد چاپ و نوع سفارش بستگی دارد.",
  },
  {
    id: "screen-printing-dark-clothes",
    title: "آیا امکان چاپ سیلک روی لباس تیره وجود دارد؟",
    content:
      "بله. چاپ سیلک روی لباس‌های تیره قابل انجام است، اما انتخاب مرکب، رنگ زمینه، تعداد لایه‌ها و روش اجرا روی نتیجه نهایی تأثیر مستقیم دارد.",
  },
  {
    id: "screen-printing-price",
    title: "قیمت چاپ سیلک چگونه محاسبه می‌شود؟",
    content:
      "قیمت چاپ سیلک به عواملی مانند نوع محصول، جنس سطح، ابعاد چاپ، تعداد رنگ، تیراژ و آماده‌سازی مورد نیاز بستگی دارد. برای اعلام قیمت دقیق، مشخصات سفارش باید بررسی شود.",
  },
];

const relatedServices = [
  {
    slug: "چاپ-dtf",
    title: "چاپ DTF",
    description: "برای طرح‌های رنگی و جزئیات بیشتر روی لباس و پارچه.",
  },
  {
    slug: "چاپ-بگ",
    title: "چاپ روی بگ",
    description: "چاپ لوگو و هویت بصری روی انواع بگ و کیسه تبلیغاتی.",
  },
  {
    slug: "چاپ-روی-لباس",
    title: "چاپ روی لباس",
    description: "راهکارهای چاپ برای تیشرت، هودی و محصولات پوشیدنی.",
  },
  {
    slug: "چاپ-کارتن",
    title: "چاپ روی کارتن",
    description: "چاپ اطلاعات و هویت برند روی بسته‌بندی و کارتن.",
  },
];

export default function ScreenPrintingPage() {
  const serviceName = "چاپ سیلک";

  const serviceDescription =
    "خدمات چاپ سیلک و اسکرین برای چاپ لوگو، نوشته و طرح‌های گرافیکی روی لباس، بگ، پارچه، بسته‌بندی و محصولات تبلیغاتی؛ مناسب برای سفارش‌هایی که دوام چاپ، تکرارپذیری و تیراژ اهمیت دارد.";

  return (
    <>
      {/* Service structured data */}
      <JsonLd
        type="service"
        data={{
          name: serviceName,
          description: serviceDescription,
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
          },
          areaServed: {
            "@type": "Country",
            name: "ایران",
          },
          serviceType: "چاپ سیلک و اسکرین",
        }}
      />

      {/* FAQ structured data */}
      <JsonLd
        type="faq"
        data={{
          items: faqs.map((faq) => ({
            question: faq.title,
            answer: faq.content,
          })),
        }}
      />

      {/* Breadcrumb structured data */}
      <JsonLd
        type="breadcrumb"
        data={{
          items: [
            {
              label: "خانه",
              href: "/",
            },
            {
              label: "خدمات چاپ",
              href: "/خدمات",
            },
            {
              label: "چاپ سیلک",
              href: "/خدمات/چاپ-سیلک",
            },
          ],
        }}
      />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section
        className="pt-28 pb-16 sm:pt-32 sm:pb-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <Breadcrumbs
            items={[
              {
                label: "خدمات چاپ",
                href: "/خدمات",
              },
              {
                label: "چاپ سیلک",
                href: "/خدمات/چاپ-سیلک",
              },
            ]}
          />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-accent)" }}
              >
                چاپ سیلک / Screen Printing
              </p>

              <h1
                className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl"
                style={{
                  color: "var(--color-text)",
                  lineHeight: "var(--line-height-tight)",
                }}
              >
                چاپ سیلک برای لباس، بگ و بسته‌بندی
              </h1>

              <p
                className="mt-6 max-w-2xl text-lg sm:text-xl"
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                {serviceDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/استعلام-قیمت" size="lg">
                  استعلام قیمت چاپ سیلک
                  <IconArrow direction="up-left" size={16} />
                </Button>

                <Button href="#faq" variant="secondary" size="lg">
                  سوالات متداول
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <MediaPlaceholder
                aspectRatio="4/3"
                label="تصویر اجرای چاپ سیلک"
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK ANSWER — FEO / AI SEARCH
      ========================================================== */}
      <section
        className="py-14 sm:py-16"
        style={{ backgroundColor: "var(--color-bg-light)" }}
      >
        <div className="container-iric">
          <div
            className="max-w-4xl border-r-2 pr-6 sm:pr-8"
            style={{ borderColor: "var(--color-accent)" }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-accent)" }}
            >
              پاسخ کوتاه
            </p>

            <p
              className="mt-4 text-xl font-semibold sm:text-2xl"
              style={{
                color: "var(--color-text-dark)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              چاپ سیلک یکی از روش‌های مناسب برای چاپ لوگو، نوشته و طرح‌های
              گرافیکی روی لباس، بگ، پارچه و برخی بسته‌بندی‌هاست؛ به‌خصوص زمانی
              که ماندگاری چاپ و اجرای تیراژ متوسط یا بالا اهمیت داشته باشد.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT IS
      ========================================================== */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="شناخت روش"
                title="چاپ سیلک چیست؟"
                tone="dark"
              />
            </div>

            <div className="lg:col-span-8">
              <p
                className="text-lg"
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                چاپ سیلک یا Screen Printing روشی است که در آن مرکب از طریق یک
                توری و شابلون روی سطح مورد نظر منتقل می‌شود. هر رنگ در طرح
                معمولاً به آماده‌سازی جداگانه نیاز دارد و نتیجه نهایی به نوع
                سطح، مرکب، فایل و روش اجرای چاپ وابسته است.
              </p>

              <p
                className="mt-5 text-lg"
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                این روش برای چاپ هویت بصری برند روی محصولاتی مانند لباس و بگ
                و همچنین برخی انواع بسته‌بندی کاربرد دارد. انتخاب چاپ سیلک
                باید بر اساس جنس محصول، تعداد رنگ، ابعاد طرح و تیراژ انجام شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUITABLE PRODUCTS
      ========================================================== */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-bg-light)" }}
      >
        <div className="container-iric">
          <SectionHeading
            eyebrow="کاربردها"
            title="چاپ سیلک روی چه محصولاتی انجام می‌شود؟"
            description="بسته به جنس سطح و نوع مرکب، چاپ سیلک برای طیف مختلفی از محصولات قابل استفاده است."
            tone="light"
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {suitableProducts.map((product, index) => (
              <Reveal key={product} delay={index * 40}>
                <div
                  className="h-full rounded-md border p-5"
                  style={{
                    borderColor: "var(--color-border-light)",
                    backgroundColor: "var(--color-surface-light)",
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {String(index + 1).padStart(2, "۰")}
                  </span>

                  <p
                    className="mt-4 font-semibold"
                    style={{ color: "var(--color-text-dark)" }}
                  >
                    {product}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BEST / NOT IDEAL
      ========================================================== */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <SectionHeading
            eyebrow="انتخاب روش"
            title="آیا چاپ سیلک برای پروژه شما مناسب است؟"
            tone="dark"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="card-industrial">
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-accent)" }}
              >
                انتخاب مناسب برای
              </p>

              <ul className="mt-6 space-y-4">
                {bestFor.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                    style={{ color: "var(--color-text)" }}
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-industrial">
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                ممکن است انتخاب ایده‌آلی نباشد برای
              </p>

              <ul className="mt-6 space-y-4">
                {notIdealFor.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-text-faint)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ADVANTAGES
      ========================================================== */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-bg-light)" }}
      >
        <div className="container-iric">
          <SectionHeading
            eyebrow="مزایا"
            title="چرا چاپ سیلک؟"
            description="چاپ سیلک زمانی ارزش خود را نشان می‌دهد که روش چاپ با نوع محصول و حجم سفارش هماهنگ باشد."
            tone="light"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <Reveal key={advantage.title} delay={index * 60}>
                <div
                  className="h-full rounded-md border p-6"
                  style={{
                    borderColor: "var(--color-border-light)",
                    backgroundColor: "var(--color-surface-light)",
                  }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {String(index + 1).padStart(2, "۰")}
                  </span>

                  <h3
                    className="mt-4 text-lg font-bold"
                    style={{ color: "var(--color-text-dark)" }}
                  >
                    {advantage.title}
                  </h3>

                  <p
                    className="mt-3 text-sm"
                    style={{
                      color: "var(--color-text-dark-muted)",
                      lineHeight: "var(--line-height-relaxed)",
                    }}
                  >
                    {advantage.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <SectionHeading
            eyebrow="فرآیند سفارش"
            title="چاپ سیلک چگونه انجام می‌شود؟"
            description="از بررسی فایل تا کنترل نهایی، هر سفارش بر اساس محصول و مشخصات چاپ آماده می‌شود."
            tone="dark"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 50}>
                <div className="card-industrial h-full">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {String(index + 1).padStart(2, "۰")}
                  </span>

                  <h3
                    className="mt-4 text-lg font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-3 text-sm"
                    style={{
                      color: "var(--color-text-muted)",
                      lineHeight: "var(--line-height-relaxed)",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section
        id="faq"
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-bg-light)" }}
      >
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="سوالات متداول"
                title="درباره چاپ سیلک"
                description="پاسخ سوالات رایجی که قبل از سفارش چاپ سیلک ممکن است داشته باشید."
                tone="light"
              />
            </div>

            <div className="lg:col-span-8">
              <Accordion
                items={faqs}
                tone="light"
                defaultOpenId="what-is-screen-printing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED SERVICES
      ========================================================== */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <SectionHeading
            eyebrow="خدمات مرتبط"
            title="روش مناسب چاپ را انتخاب کنید"
            description="اگر چاپ سیلک برای طرح یا محصول شما مناسب نیست، روش‌های دیگر چاپ را هم بررسی کنید."
            tone="dark"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <a
                  href={`/خدمات/${service.slug}`}
                  className="group block h-full rounded-md border p-6 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--color-border)",
                    textDecoration: "none",
                  }}
                >
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-text-faint)" }}
                  >
                    {String(index + 1).padStart(2, "۰")}
                  </span>

                  <h3
                    className="mt-5 text-lg font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="mt-3 text-sm"
                    style={{
                      color: "var(--color-text-muted)",
                      lineHeight: "var(--line-height-relaxed)",
                    }}
                  >
                    {service.description}
                  </p>

                  <div
                    className="mt-6 flex items-center gap-2 text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    <span>مشاهده خدمت</span>

                    <span
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                      aria-hidden="true"
                    >
                      <IconArrow direction="left" size={16} />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section
        className="py-20 sm:py-24"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <div className="container-iric text-center">
          <p
            className="text-sm font-medium"
            style={{ color: "var(--color-text)" }}
          >
            آماده سفارش هستید؟
          </p>

          <h2
            className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{
              color: "var(--color-text)",
              lineHeight: "var(--line-height-tight)",
            }}
          >
            مشخصات پروژه‌تان را بفرستید تا روش مناسب چاپ را بررسی کنیم.
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-base"
            style={{
              color: "var(--color-text-muted)",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            نوع محصول، تعداد، ابعاد چاپ و فایل طرح را اعلام کنید تا بتوانیم
            مناسب‌ترین روش چاپ و برآورد هزینه را بررسی کنیم.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="/استعلام-قیمت" size="lg">
              استعلام قیمت چاپ سیلک
              <IconArrow direction="up-left" size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
