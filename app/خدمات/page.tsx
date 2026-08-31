import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import Accordion from "@/components/ui/Accordion";
import { services } from "@/content/services";
import { generalFaqs } from "@/content/faq";

export const metadata: Metadata = generateMetadata({
  title: "خدمات چاپ",
  description:
    "خدمات چاپ سیلک و DTF آیریک روی بگ، لباس، کارتن، جعبه پیتزا، لیوان کاغذی و ظروف گرد. مشاوره تخصصی قبل از سفارش.",
  path: "/خدمات",
});

const printingMethods = [
  {
    name: "چاپ سیلک",
    description:
      "روش کلاسیک و ماندگار برای چاپ روی انواع سطوح. مناسب تیراژ بالا و طرح‌های ساده تا متوسط.",
    suitableFor: "لوگو، طرح‌های تخت، تیراژ بالا",
  },
  {
    name: "چاپ DTF",
    description:
      "روش مدرن با جزئیات فوق‌العاده بالا. مناسب طرح‌های پیچیده، عکس و تیراژ پایین.",
    suitableFor: "عکس، گرادیان، جزئیات ریز، تیراژ پایین",
  },
];

const capabilities = [
  {
    title: "کیفیت اجرا",
    description: "تمرکز بر دقت و ثبات کیفیت در تمام مراحل چاپ.",
  },
  {
    title: "انتخاب روش مناسب",
    description: "مشاوره برای انتخاب بهترین روش چاپ متناسب با محصول و بودجه.",
  },
  {
    title: "توجه به متریال",
    description: "بررسی نوع سطح و متریال برای بهترین نتیجه چاپ.",
  },
  {
    title: "اجرای سفارش",
    description: "مدیریت سفارش از دریافت فایل تا تحویل نهایی.",
  },
];

const processSteps = [
  { title: "بررسی نیاز", description: "شناخت محصول، تیراژ و هدف برند" },
  { title: "انتخاب روش چاپ", description: "پیشنهاد بهترین روش بر اساس نیاز" },
  { title: "آماده‌سازی", description: "آماده‌سازی فایل و تجهیزات چاپ" },
  { title: "اجرا", description: "چاپ با دقت و کنترل کیفیت" },
  { title: "کنترل نهایی", description: "بررسی کیفیت و بسته‌بندی" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="pt-28 pb-16"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-iric">
          <Breadcrumbs items={[{ label: "خدمات چاپ", href: "/خدمات" }]} />
          <div className="mt-6 max-w-4xl">
            <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
              خدمات چاپ آیریک
            </p>
            <h1
              className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              چاپی که برند شما را
              <br />
              حرفه‌ای‌تر نشان می‌دهد
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg"
              style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
            >
              چاپ سیلک و DTF روی بگ، لباس، کارتن، جعبه پیتزا، لیوان کاغذی و ظروف گرد.
              با مشاوره تخصصی قبل از سفارش، بهترین روش چاپ را برای محصول خود انتخاب کنید.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/استعلام-قیمت" size="lg">
                استعلام قیمت
                <IconArrow direction="up-left" size={16} />
              </Button>
              <Button href="#services-list" variant="secondary" size="lg">
                مشاهده خدمات
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ────────────────────────────────── */}
      <section
        id="services-list"
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-light)" }}
      >
        <div className="container-iric">
          <SectionHeading
            eyebrow="کاربردها"
            title="چه محصولاتی را چاپ می‌کنیم؟"
            description="هر محصول نیازمند روش چاپ متفاوتی است. آیریک با مشاوره تخصصی، بهترین روش را برای محصول شما انتخاب می‌کند."
            tone="light"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Printing Methods ─────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="روش‌های چاپ"
            title="دو روش تخصصی چاپ"
            description="آیریک با دو روش چاپ سیلک و DTF، پاسخگوی نیازهای مختلف برندهاست. انتخاب روش مناسب به نوع طرح، تیراژ و محصول بستگی دارد."
            tone="dark"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {printingMethods.map((method, index) => (
              <Reveal key={method.name} delay={index * 100}>
                <div className="card-industrial h-full">
                  <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>
                    {String(index + 1).padStart(2, "۰")}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold" style={{ color: "var(--color-text)" }}>
                    {method.name}
                  </h3>
                  <p
                    className="mt-3 text-base"
                    style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
                  >
                    {method.description}
                  </p>
                  <p className="mt-4 text-sm" style={{ color: "var(--color-text-faint)" }}>
                    مناسب برای: {method.suitableFor}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="چرا آیریک؟"
            title="تعهد به کیفیت"
            description="هر سفارش با دقت بررسی می‌شود تا بهترین نتیجه حاصل شود."
            tone="light"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div
                  className="card-industrial h-full"
                  style={{ backgroundColor: "var(--color-surface-light)" }}
                >
                  <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>
                    {String(index + 1).padStart(2, "۰")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold" style={{ color: "var(--color-text-dark)" }}>
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--color-text-dark-muted)", lineHeight: "var(--line-height-relaxed)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="فرآیند کار"
            title="از نیاز تا تحویل"
            description="فرآیند ساده و شفاف برای اجرای هر سفارش."
            tone="dark"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
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

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric max-w-3xl">
          <SectionHeading
            eyebrow="سوالات متداول"
            title="پاسخ به سوالات شما"
            tone="light"
          />
          <div className="mt-12">
            <Accordion
              items={generalFaqs.map((faq, index) => ({
                id: `services-faq-${index}`,
                title: faq.question,
                content: faq.answer,
              }))}
              tone="light"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="container-iric">
          <Reveal className="text-center">
            <h2
              className="text-4xl font-bold sm:text-5xl"
              style={{ color: "var(--color-accent-contrast)", lineHeight: "var(--line-height-tight)" }}
            >
              نمی‌دونید چه نوع چاپی مناسبته؟
            </h2>
            <p
              className="mt-5 text-lg mx-auto max-w-2xl"
              style={{ color: "var(--color-accent-contrast)", opacity: 0.75, lineHeight: "var(--line-height-relaxed)" }}
            >
              اگر نمی‌دانید برای محصول، تیراژ و بودجه شما چه نوع چاپی مناسب است،
              قبل از سفارش با ما مشورت کنید.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/استعلام-قیمت" size="lg">
                مشاوره رایگان قبل از سفارش
                <IconArrow direction="up-left" size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
