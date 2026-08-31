import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
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
  title: "چاپ سیلک | آیریک",
  description:
    "خدمات چاپ سیلک (اسکرین) حرفه‌ای روی انواع پارچه، لباس، بگ، کارتن، جعبه پیتزا و ظروف. مشاوره تخصصی و کیفیت بالا.",
  path: "/خدمات/چاپ-سیلک",
});

const advantages = [
  "کیفیت چاپ ثابت و یکنواخت",
  "مناسب برای تیراژ بالا",
  "ماندگاری بالا روی انواع متریال",
  "امکان چاپ روی سطوح مختلف",
  "هزینه مناسب در تیراژ بالا",
];

const suitableProducts = [
  "بگ پارچه‌ای",
  "تیشرت و هودی",
  "کارتن بسته‌بندی",
  "جعبه پیتزا",
  "لیوان کاغذی",
  "ظروف گرد",
  "پارچه و منسوجات",
];

const processSteps = [
  { title: "مشاوره و بررسی نیاز", description: "شناخت محصول، طرح و تیراژ" },
  { title: "آماده‌سازی فایل", description: "بررسی و آماده‌سازی طرح برای چاپ" },
  { title: "شابلون‌سازی", description: "تهیه شابلون بر اساس طرح" },
  { title: "ترکیب رنگ", description: "آماده‌سازی رنگ‌های مورد نیاز" },
  { title: "اجرای چاپ", description: "چاپ با دقت و کنترل کیفیت" },
  { title: "خشک‌کردن و تثبیت", description: "تثبیت چاپ برای ماندگاری" },
  { title: "کنترل نهایی", description: "بررسی کیفیت و بسته‌بندی" },
];

const faqs = [
  {
    question: "چاپ سیلک برای چه طرح‌هایی مناسب است؟",
    answer:
      "چاپ سیلک برای طرح‌هایی با تعداد رنگ محدود (معمولاً ۱ تا ۴ رنگ) و بدون گرادیان یا عکس مناسب است. لوگوها و طرح‌های ساده بهترین نتیجه را می‌دهند.",
  },
  {
    question: "آیا چاپ سیلک برای تیراژ کم هم صرفه دارد؟",
    answer:
      "برای تیراژ خیلی کم، هزینه آماده‌سازی شابلون ممکن است نسبت به تعداد بالا بیشتر باشد، اما برای تیراژ متوسط به بالا بسیار به‌صرفه است. تیراژهای مختلف بررسی می‌شوند.",
  },
  {
    question: "چاپ سیلک روی چه موادی قابل اجراست؟",
    answer:
      "روی انواع پارچه، کاغذ، کارتن، پلاستیک، چوب و بسیاری سطوح دیگر قابل اجراست. نوع مرکب بسته به جنس سطح انتخاب می‌شود.",
  },
  {
    question: "آیا امکان چاپ روی لباس‌های تیره وجود دارد؟",
    answer:
      "بله، با انتخاب مرکب مناسب و روش صحیح، چاپ روی لباس‌های تیره با کیفیت بالا انجام می‌شود.",
  },
];

const relatedServices = [
  { slug: "چاپ-dtf", title: "چاپ DTF" },
  { slug: "چاپ-بگ", title: "چاپ روی بگ" },
  { slug: "چاپ-روی-لباس", title: "چاپ روی لباس" },
  { slug: "چاپ-کارتن", title: "چاپ روی کارتن" },
];

export default function ScreenPrintingPage() {
  const serviceData = {
    title: "چاپ سیلک",
    shortDescription:
      "روش کلاسیک و ماندگار چاپ برای تیراژ بالا و طرح‌های ساده",
    fullDescription:
      "چاپ سیلک (اسکرین) یکی از پرکاربردترین روش‌های چاپ صنعتی است که برای چاپ روی انواع سطوح استفاده می‌شود. آیریک با استفاده از تجهیزات حرفه‌ای و تجربه کافی، خدمات چاپ سیلک با کیفیت بالا ارائه می‌دهد.",
  };

  return (
    <>
      <JsonLd
        type="service"
        data={{
          name: "چاپ سیلک",
          description: serviceData.fullDescription,
          provider: { "@type": "Organization", name: siteConfig.name },
        }}
      />
      <JsonLd
        type="faq"
        data={{ items: faqs }}
      />
      <JsonLd
        type="breadcrumb"
        data={{
          items: [
            { label: "خانه", href: "/" },
            { label: "خدمات چاپ", href: "/خدمات" },
            { label: "چاپ سیلک", href: "/خدمات/چاپ-سیلک" },
          ],
        }}
      />

      {/* Hero */}
      <section
        className="pt-28 pb-16"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <Breadcrumbs
            items={[
              { label: "خدمات چاپ", href: "/خدمات" },
              { label: "چاپ سیلک", href: "/خدمات/چاپ-سیلک" },
            ]}
          />
          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="text-4xl font-bold sm:text-5xl lg:text-6xl"
                style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
              >
                چاپ سیلک
              </h1>
              <p
                className="mt-6 max-w-2xl text-lg"
                style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
              >
                {serviceData.fullDescription}
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
            <div className="lg:col-span-4">
              <MediaPlaceholder
                aspectRatio="4/3"
                label="چاپ سیلک"
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Screen Printing */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2
                className="text-3xl font-bold"
                style={{ color: "var(--color-text-dark)" }}
              >
                چاپ سیلک چیست؟
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p
                className="text-lg"
                style={{ color: "var(--color-text-dark-muted)", lineHeight: "var(--line-height-relaxed)" }}
              >
                چاپ سیلک (اسکرین پرینتینگ) روشی است که در آن مرکب از طریق یک شابلون توری
                بر روی سطح مورد نظر منتقل می‌شود. این روش امکان چاپ طرح‌های با کیفیت بالا
                و ماندگاری طولانی را بر روی انواع متریال فراهم می‌کند.
              </p>
              <p
                className="mt-4 text-lg"
                style={{ color: "var(--color-text-dark-muted)", lineHeight: "var(--line-height-relaxed)" }}
              >
                آیریک با بهره‌گیری از این روش، خدمات چاپ حرفه‌ای برای کسب‌وکارها ارائه می‌دهد.
                از چاپ لوگو روی بگ و لباس تا چاپ روی کارتن و بسته‌بندی، همه با دقت و کنترل کیفیت انجام می‌شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="مزایا"
            title="چرا چاپ سیلک؟"
            tone="dark"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <Reveal key={advantage} delay={index * 70}>
                <div className="card-industrial h-full">
                  <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>
                    {String(index + 1).padStart(2, "۰")}
                  </span>
                  <p
                    className="mt-3 text-lg font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {advantage}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable Products */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="محصولات قابل چاپ"
            title="روی چه چیزهایی می‌توان چاپ کرد؟"
            tone="light"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {suitableProducts.map((product) => (
              <span
                key={product}
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium"
                style={{
                  backgroundColor: "var(--color-surface-light)",
                  border: "1px solid var(--color-border-light)",
                  color: "var(--color-text-dark)",
                }}
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="فرآیند"
            title="مراحل چاپ سیلک"
            tone="dark"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 60}>
                <div className="card-industrial h-full">
                  <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>
                    {String(index + 1).padStart(2, "۰")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold" style={{ color: "var(--color-text)" }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric max-w-3xl">
          <SectionHeading
            eyebrow="سوالات متداول"
            title="پاسخ به سوالات شما"
            tone="light"
          />
          <div className="mt-10">
            <Accordion
              items={faqs.map((faq, index) => ({
                id: `silk-faq-${index}`,
                title: faq.question,
                content: faq.answer,
              }))}
              tone="light"
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="خدمات مرتبط"
            title="شاید به این خدمات هم نیاز داشته باشید"
            tone="dark"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="card-industrial block transition-transform hover:-translate-y-1"
                style={{ textDecoration: "none" }}
              >
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  {service.title}
                </h3>
                <div
                  className="mt-3 flex items-center gap-2 text-sm font-medium"
                  style={{ color: "var(--color-accent)" }}
                >
                  مشاهده
                  <IconArrow direction="left" size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="container-iric text-center">
          <h2
            className="text-4xl font-bold sm:text-5xl"
            style={{ color: "var(--color-accent-contrast)", lineHeight: "var(--line-height-tight)" }}
          >
            آماده شروع چاپ سیلک هستید؟
          </h2>
          <p
            className="mt-5 text-lg mx-auto max-w-2xl"
            style={{ color: "var(--color-accent-contrast)", opacity: 0.75 }}
          >
            مشخصات سفارش خود را ارسال کنید تا مشاوره تخصصی دریافت کنید.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/استعلام-قیمت" size="lg">
              دریافت مشاوره و استعلام قیمت
              <IconArrow direction="up-left" size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
