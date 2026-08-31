import Link from "next/link";

export const metadata = {
  title: "نمونه‌کارها | آیریک",
  description:
    "نمونه‌ای از پروژه‌های چاپ آیریک برای برندها، کسب‌وکارها و محصولات مختلف.",
};

const projects = [
  {
    number: "۰۱",
    title: "پروژه پوشاک",
    category: "چاپ روی لباس",
    description:
      "اجرای چاپ برای یک مجموعه پوشاک با تمرکز بر کیفیت جزئیات و هماهنگی طرح با محصول.",
  },
  {
    number: "۰۲",
    title: "هویت روی بسته‌بندی",
    category: "چاپ بسته‌بندی",
    description:
      "اجرای هویت بصری روی بسته‌بندی با هدف ایجاد یک تجربه یکپارچه‌تر برای محصول.",
  },
  {
    number: "۰۳",
    title: "محصول تبلیغاتی",
    category: "چاپ سفارشی",
    description:
      "تولید محصولات چاپی برای یک کمپین تبلیغاتی با تیراژ مشخص و زمان‌بندی محدود.",
  },
  {
    number: "۰۴",
    title: "برند غذایی",
    category: "بسته‌بندی",
    description:
      "چاپ روی محصولات و بسته‌بندی یک مجموعه غذایی با تمرکز بر خوانایی و کیفیت خروجی.",
  },
  {
    number: "۰۵",
    title: "سفارش سازمانی",
    category: "چاپ سازمانی",
    description:
      "اجرای سفارش چاپی در تیراژ بالا برای یک مجموعه سازمانی.",
  },
  {
    number: "۰۶",
    title: "چاپ روی پارچه",
    category: "چاپ پارچه",
    description:
      "اجرای طرح روی پارچه با توجه به جنس متریال و کاربرد نهایی محصول.",
  },
];

export default function PortfolioPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              نمونه‌کارها
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              چاپ وقتی تمام می‌شود
              <br />
              که روی محصول دیده شود.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              بخشی از پروژه‌هایی که در آیریک اجرا شده‌اند؛ از پوشاک و
              بسته‌بندی تا سفارش‌های سازمانی و محصولات سفارشی.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              پروژه‌ها
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              بخشی از کارهایی که انجام داده‌ایم.
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.number} className="group">
                <div
                  className={`aspect-[4/3] overflow-hidden rounded-2xl ${
                    index % 3 === 0
                      ? "bg-[#e9e5de]"
                      : index % 3 === 1
                        ? "bg-[#eeeae3]"
                        : "bg-[#e5e1da]"
                  }`}
                >
                  <div className="flex h-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                    <span className="text-sm text-black/25">
                      تصویر پروژه
                    </span>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between">
                  <span className="text-xs text-black/40">
                    {project.category}
                  </span>

                  <span className="text-xs text-black/30">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl leading-8 text-black/50">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                پشت هر پروژه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                نتیجه خوب
                <br />
                اتفاقی نیست.
              </h2>
            </div>

            <div className="text-lg leading-9 text-black/60">
              <p>
                هر پروژه قبل از اجرا نیاز به تصمیم‌های درست دارد. اینکه چه
                روشی انتخاب شود، چه متریالی استفاده شود و فایل چگونه برای
                چاپ آماده شود، همه روی نتیجه نهایی تأثیر می‌گذارند.
              </p>

              <p className="mt-7">
                به همین دلیل تلاش می‌کنیم قبل از شروع تولید، شرایط پروژه را
                درست بررسی کنیم و راهکاری متناسب با نیاز واقعی آن پیدا
                کنیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business projects */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="border-t border-black/10 pt-16 md:pt-24">
            <div className="grid gap-12 md:grid-cols-[1fr_1fr_auto] md:items-end md:gap-16">
              <div>
                <p className="mb-6 text-sm font-medium text-black/45">
                  پروژه‌های سازمانی
                </p>

                <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-4xl">
                  برای سفارش‌های بزرگ‌تر،
                  <br />
                  فرآیند مهم‌تر می‌شود.
                </h2>
              </div>

              <p className="text-lg leading-9 text-black/55">
                اگر برای برند، شرکت، فروشگاه یا مجموعه خود به چاپ مستمر یا
                تیراژ بالا نیاز دارید، می‌توانیم درباره نیاز و فرآیند
                همکاری صحبت کنیم.
              </p>

              <Link
                href="/برای-کسب-و-کارها"
                className="inline-flex w-fit items-center gap-3 text-sm font-medium"
              >
                راهکارهای کسب‌وکارها
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              پروژه بعدی
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
              شاید پروژه بعدی
              <br />
              اینجا جای داشته باشد.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
              اگر ایده‌ای برای چاپ دارید، اطلاعات اولیه پروژه را برای ما
              بفرستید تا درباره بهترین مسیر اجرا صحبت کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              شروع پروژه
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
