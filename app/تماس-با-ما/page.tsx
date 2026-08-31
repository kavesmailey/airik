import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تماس با AIRIK",
  description:
    "برای مشاوره، استعلام قیمت و شروع پروژه چاپی با AIRIK در تماس باشید.",
};

const contactMethods = [
  {
    title: "استعلام قیمت",
    description:
      "برای دریافت قیمت، مشخصات پروژه، تعداد و زمان مورد نیاز را ارسال کنید.",
    href: "/استعلام-قیمت",
    action: "ارسال درخواست",
  },
  {
    title: "پروژه و همکاری",
    description:
      "اگر برای برند یا کسب‌وکارتان به یک همکاری چاپی مستمر نیاز دارید، درباره پروژه صحبت کنیم.",
    href: "/برای-کسب-و-کارها",
    action: "راهکارهای کسب‌وکار",
  },
];

export default function ContactPage() {
  return (
    <main dir="rtl">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              تماس با AIRIK
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              درباره پروژه‌تان
              <br />
              صحبت کنیم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              چه برای یک سفارش مشخص به قیمت نیاز داشته باشید و چه بخواهید
              درباره یک همکاری مستمر صحبت کنید، از همین‌جا شروع کنید.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-10">
            {contactMethods.map((method, index) => (
              <article
                key={method.title}
                className="border-t border-black/10 pt-8 md:pt-10"
              >
                <span className="text-xs text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-8 text-2xl font-medium tracking-tight md:text-3xl">
                  {method.title}
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-black/55">
                  {method.description}
                </p>

                <Link
                  href={method.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-black transition-opacity hover:opacity-50"
                >
                  {method.action}
                  <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                قبل از تماس
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چه اطلاعاتی
                <br />
                مفید است؟
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                ["نوع محصول", "چه چیزی قرار است چاپ شود؟"],
                ["تعداد", "حدوداً چه تیراژی نیاز دارید؟"],
                ["ابعاد", "اندازه یا ابعاد تقریبی محصول چیست؟"],
                ["متریال", "اگر متریال مشخصی مدنظر دارید، آن را ذکر کنید."],
                ["زمان", "چه زمانی به سفارش نیاز دارید؟"],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="grid gap-3 border-b border-black/10 py-7 md:grid-cols-[180px_1fr]"
                >
                  <span className="text-sm font-medium">{title}</span>

                  <span className="text-sm leading-7 text-black/50">
                    {description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                AIRIK
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                اگر روش چاپ را
                <br />
                نمی‌دانید، مشکلی نیست.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60">
              <p>
                لازم نیست قبل از تماس درباره تفاوت DTF، سیلک، چاپ دیجیتال یا
                متریال‌های مختلف تصمیم گرفته باشید.
              </p>

              <p>
                اطلاعات پروژه را در اختیار ما بگذارید. بر اساس کاربرد، تعداد،
                سطح چاپ و نتیجه مورد انتظار، گزینه‌های مناسب را بررسی
                می‌کنیم.
              </p>

              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
