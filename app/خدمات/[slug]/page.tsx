import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const services = [
  {
    slug: "چاپ-روی-لباس",
    title: "چاپ روی لباس",
    eyebrow: "چاپ روی لباس",
    description:
      "چاپ طرح، لوگو و گرافیک روی انواع لباس برای برندها، تیم‌ها، رویدادها و پروژه‌های شخصی.",
    intro:
      "لباس فقط یک سطح برای چاپ نیست. جنس پارچه، نوع استفاده، تعداد و کیفیت مورد انتظار، همگی روی انتخاب روش مناسب تأثیر می‌گذارند.",
    applications: [
      "لباس برندها",
      "یونیفرم سازمانی",
      "لباس رویداد",
      "تیشرت و هودی",
      "لباس تبلیغاتی",
    ],
  },
  {
    slug: "چاپ-روی-پارچه",
    title: "چاپ روی پارچه",
    eyebrow: "چاپ روی پارچه",
    description:
      "راهکارهای چاپ روی پارچه با توجه به جنس متریال، نوع طرح، کاربرد و تیراژ پروژه.",
    intro:
      "برای چاپ روی پارچه، جنس و ساختار پارچه اهمیت زیادی دارد. روش مناسب باید با نوع پارچه، طرح و کاربرد نهایی هماهنگ باشد.",
    applications: [
      "پارچه پوشاک",
      "پارچه دکوراتیو",
      "پارچه تبلیغاتی",
      "تولیدات فشن",
      "محصولات پارچه‌ای",
    ],
  },
  {
    slug: "بسته-بندی",
    title: "بسته‌بندی",
    eyebrow: "بسته‌بندی",
    description:
      "تولید بسته‌بندی چاپی برای برندها؛ از جعبه و کیسه تا سایر نقاط تماس محصول با مشتری.",
    intro:
      "بسته‌بندی اولین تجربه فیزیکی بسیاری از مشتریان با محصول است. کیفیت چاپ، متریال و جزئیات اجرا باید در کنار هویت برند دیده شوند.",
    applications: [
      "جعبه محصول",
      "پاکت و کیسه",
      "لیبل",
      "بسته‌بندی فروشگاهی",
      "بسته‌بندی اختصاصی برند",
    ],
  },
  {
    slug: "چاپ-روی-محصول",
    title: "چاپ روی محصول",
    eyebrow: "چاپ روی محصول",
    description:
      "چاپ روی محصولات و سطوح مختلف برای ساخت محصول برندشده، هدیه سازمانی و پروژه‌های تبلیغاتی.",
    intro:
      "هر محصول سطح، فرم و محدودیت خودش را دارد. روش چاپ باید با شکل، جنس و کاربرد محصول هماهنگ شود.",
    applications: [
      "محصولات برندشده",
      "هدایای سازمانی",
      "محصولات تبلیغاتی",
      "لوازم فروشگاهی",
      "پروژه‌های اختصاصی",
    ],
  },
  {
    slug: "اقلام-تبلیغاتی",
    title: "اقلام تبلیغاتی",
    eyebrow: "اقلام تبلیغاتی",
    description:
      "تولید اقلام چاپی برای کمپین‌ها، رویدادها، معرفی برند و ارتباط مستقیم با مخاطب.",
    intro:
      "اقلام تبلیغاتی زمانی مؤثرند که فقط لوگو را روی یک محصول قرار ندهند؛ بلکه بخشی از تجربه برند باشند.",
    applications: [
      "کمپین تبلیغاتی",
      "رویدادها",
      "هدایای تبلیغاتی",
      "اقلام نمایشگاهی",
      "پکیج‌های برند",
    ],
  },
  {
    slug: "چاپ-کاغذ-و-مقوا",
    title: "چاپ کاغذ و مقوا",
    eyebrow: "چاپ کاغذ و مقوا",
    description:
      "چاپ انواع متریال کاغذی و مقوایی برای کاربردهای تجاری، تبلیغاتی و سازمانی.",
    intro:
      "از یک کارت ساده تا یک مجموعه کامل چاپی، انتخاب کاغذ، تکنیک چاپ و پرداخت نهایی می‌تواند تفاوت بزرگی در نتیجه ایجاد کند.",
    applications: [
      "کارت ویزیت",
      "بروشور",
      "کاتالوگ",
      "فولدر",
      "اقلام سازمانی",
    ],
  },
];

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "خدمت پیدا نشد | Ayric",
    };
  }

  return {
    title: `${service.title} | Ayric`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <Link
            href="/خدمات"
            className="mb-14 inline-flex items-center gap-3 text-sm text-black/40 transition-opacity hover:opacity-60"
          >
            <span aria-hidden="true">→</span>
            بازگشت به خدمات
          </Link>

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                {service.eyebrow}
              </p>

              <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
                {service.title}
              </h1>
            </div>

            <p className="text-lg leading-9 text-black/60 md:text-xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Visual Placeholder */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] bg-[#f5f3ef] md:min-h-[620px]">
            <div className="text-center">
              <span className="block text-xs tracking-[0.2em] text-black/30">
                AYRIC
              </span>

              <span className="mt-5 block text-5xl font-medium tracking-tight text-black/10 md:text-8xl">
                {service.title.slice(0, 1)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                درباره این خدمت
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                روش مناسب،
                <br />
                برای نتیجه بهتر.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60 md:text-xl md:leading-10">
                {service.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              کاربردها
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              برای چه پروژه‌هایی؟
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {service.applications.map((application, index) => (
              <div
                key={application}
                className="flex items-center gap-6 border-b border-black/10 py-8 md:py-10 md:[&:nth-child(odd)]:border-l md:[&:nth-child(odd)]:pl-10 md:[&:nth-child(even)]:pr-10"
              >
                <span className="text-xs text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xl font-medium">
                  {application}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                فرآیند
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                از مشخصات
                <br />
                تا تولید.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  title: "بررسی",
                  text: "نوع محصول، متریال، تعداد و کاربرد نهایی بررسی می‌شود.",
                },
                {
                  title: "پیشنهاد",
                  text: "راهکار و روش مناسب بر اساس نیاز پروژه پیشنهاد می‌شود.",
                },
                {
                  title: "تأیید",
                  text: "جزئیات فنی، هزینه و زمان‌بندی پیش از تولید نهایی می‌شود.",
                },
                {
                  title: "اجرا",
                  text: "سفارش طبق مشخصات تأییدشده تولید و آماده تحویل می‌شود.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[80px_0.7fr_1.3fr] md:items-center md:py-10"
                >
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xl font-medium">
                    {step.title}
                  </h3>

                  <p className="leading-8 text-black/50">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              شروع پروژه
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              برای این خدمت
              <br />
              استعلام قیمت بگیرید.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات پروژه‌تان را ارسال کنید تا بر اساس نوع محصول،
              تعداد و شرایط تولید، قیمت مناسب را برایتان بررسی کنیم.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/تماس-با-ما"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm transition-colors hover:border-white"
              >
                تماس با ما
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <Link
            href="/خدمات"
            className="inline-flex items-center gap-3 text-sm text-black/40 transition-opacity hover:opacity-60"
          >
            <span aria-hidden="true">→</span>
            مشاهده همه خدمات
          </Link>
        </div>
      </section>
    </main>
  );
}
