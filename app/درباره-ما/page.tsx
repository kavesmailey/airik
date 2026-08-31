import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = generateMetadata({
  title: "درباره ما | آیریک",
  description:
    "آشنایی با آیریک — چاپ تخصصی سیلک و DTF برای برندهایی که کیفیت اهمیت دارد. داستان، رویکرد و فلسفه ما.",
  path: "/درباره-ما",
});

const values = [
  {
    title: "کیفیت در اجرا",
    description: "هر سفارش با دقت و کنترل کیفیت در تمام مراحل انجام می‌شود.",
  },
  {
    title: "مشاوره قبل از سفارش",
    description: "قبل از هر چاپ، مشاوره تخصصی برای انتخاب روش مناسب ارائه می‌دهیم.",
  },
  {
    title: "توجه به جزئیات",
    description: "از آماده‌سازی فایل تا بسته‌بندی، به جزئیات اهمیت می‌دهیم.",
  },
  {
    title: "همکاری با برندها",
    description: "با برندهایی کار می‌کنیم که کیفیت برایشان اهمیت دارد.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs items={[{ label: "درباره ما", href: "/درباره-ما" }]} />
          <div className="mt-6 max-w-3xl">
            <h1
              className="text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              درباره آیریک
            </h1>
            <p
              className="mt-6 text-lg"
              style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
            >
              آیریک یک مجموعه چاپ تخصصی است که با تمرکز بر چاپ سیلک و DTF،
              به برندها کمک می‌کند تا محصولات خود را با کیفیتی حرفه‌ای ارائه دهند.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <MediaPlaceholder
                aspectRatio="4/3"
                label="کارگاه آیریک"
                tone="light"
              />
            </div>
            <div className="lg:col-span-7">
              <h2
                className="text-3xl font-bold"
                style={{ color: "var(--color-text-dark)" }}
              >
                داستان ما
              </h2>
              <p
                className="mt-4 text-lg"
                style={{ color: "var(--color-text-dark-muted)", lineHeight: "var(--line-height-relaxed)" }}
              >
                آیریک با هدف ارائه خدمات چاپ با کیفیت و قابل اعتماد برای کسب‌وکارها ایجاد شد.
                ما معتقدیم چاپ خوب فقط یک فرآیند فنی نیست، بلکه بخشی از هویت برند است.
                به همین دلیل با هر مشتری به صورت اختصاصی کار می‌کنیم و قبل از هر چاپ،
                مشاوره تخصصی ارائه می‌دهیم تا بهترین نتیجه حاصل شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <SectionHeading
            eyebrow="رویکرد"
            title="چطور کار می‌کنیم؟"
            tone="dark"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="card-industrial h-full">
                  <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>
                    {String(index + 1).padStart(2, "۰")}
                  </span>
                  <h3 className="mt-3 text-xl font-bold" style={{ color: "var(--color-text)" }}>
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Philosophy */}
      <section className="py-16" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="container-iric">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "var(--color-text-dark)" }}>
                تجربه ما
              </h2>
              <p
                className="mt-4 text-lg"
                style={{ color: "var(--color-text-dark-muted)", lineHeight: "var(--line-height-relaxed)" }}
              >
                تیم آیریک با تجربه در زمینه چاپ صنعتی و برندینگ، توانایی اجرای
                پروژه‌های متنوع چاپ را دارد. ما با شناخت متریال‌ها و روش‌های چاپ،
                بهترین راهکار را برای هر سفارش پیشنهاد می‌دهیم.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "var(--color-text-dark)" }}>
                فلسفه ما
              </h2>
              <p
                className="mt-4 text-lg"
                style={{ color: "var(--color-text-dark-muted)", lineHeight: "var(--line-height-relaxed)" }}
              >
                باور داریم که کیفیت چاپ مستقیماً بر درک مشتری از برند تأثیر می‌گذارد.
                بنابراین هر سفارش را با دقت و حساسیت بالا انجام می‌دهیم.
                هدف ما ساختن روابط بلندمدت با برندهایی است که به کیفیت اهمیت می‌دهند.
              </p>
            </div>
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
            می‌خواهید با آیریک همکاری کنید؟
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/استعلام-قیمت" size="lg">
              شروع مشاوره
              <IconArrow direction="up-left" size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
