import Link from "next/link";

export const metadata = {
  title: "بلاگ آیریک | راهنمای چاپ",
  description:
    "راهنماها و مطالب کاربردی آیریک درباره روش‌های چاپ، انتخاب متریال، آماده‌سازی فایل و سفارش چاپ.",
};

const articles = [
  {
    number: "۰۱",
    category: "راهنمای چاپ",
    title: "چطور روش چاپ مناسب پروژه‌مان را انتخاب کنیم؟",
    description:
      "قبل از انتخاب روش چاپ، چه چیزهایی را باید در نظر بگیریم؟ از جنس محصول و نوع طرح تا تیراژ و کاربرد نهایی.",
    href: "/بلاگ/انتخاب-روش-چاپ",
  },
  {
    number: "۰۲",
    category: "چاپ روی لباس",
    title: "چاپ DTF چیست و چه زمانی انتخاب مناسبی است؟",
    description:
      "با روش چاپ DTF، مزایا، محدودیت‌ها و کاربردهای آن برای چاپ روی لباس و محصولات مختلف آشنا شوید.",
    href: "/بلاگ/چاپ-dtf",
  },
  {
    number: "۰۳",
    category: "چاپ سیلک",
    title: "چاپ سیلک چیست؟",
    description:
      "چاپ سیلک چگونه انجام می‌شود و برای چه نوع پروژه‌هایی می‌تواند انتخاب مناسبی باشد؟",
    href: "/بلاگ/چاپ-سیلک",
  },
  {
    number: "۰۴",
    category: "بسته‌بندی",
    title: "چطور برای بسته‌بندی محصول چاپ مناسب انتخاب کنیم؟",
    description:
      "بسته‌بندی فقط یک جعبه نیست. انتخاب متریال، روش چاپ و کیفیت اجرا روی تجربه نهایی محصول تأثیر می‌گذارد.",
    href: "/بلاگ/چاپ-بسته-بندی",
  },
  {
    number: "۰۵",
    category: "راهنمای سفارش",
    title: "قبل از سفارش چاپ چه اطلاعاتی لازم داریم؟",
    description:
      "یک چک‌لیست ساده برای آماده کردن اطلاعاتی که باعث می‌شود استعلام قیمت و شروع پروژه سریع‌تر و دقیق‌تر انجام شود.",
    href: "/بلاگ/راهنمای-سفارش-چاپ",
  },
  {
    number: "۰۶",
    category: "طراحی و چاپ",
    title: "فایل طراحی را چطور برای چاپ آماده کنیم؟",
    description:
      "چند نکته مهم درباره فایل، رنگ، ابعاد و جزئیاتی که بهتر است قبل از ارسال پروژه بررسی شوند.",
    href: "/بلاگ/آماده-سازی-فایل-چاپ",
  },
];

export default function BlogPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              بلاگ آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              چاپ را بهتر بشناسید.
              <br />
              قبل از اینکه سفارش دهید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              قرار نیست برای سفارش چاپ متخصص باشید. اینجا مطالبی جمع کرده‌ایم
              که کمک می‌کنند روش‌های چاپ، متریال و فرآیند سفارش را بهتر
              بشناسید و انتخاب آگاهانه‌تری داشته باشید.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-14">
            <p className="text-sm font-medium text-black/45">
              پیشنهاد می‌کنیم از اینجا شروع کنید
            </p>
          </div>

          <Link
            href={articles[0].href}
            className="group grid overflow-hidden rounded-2xl bg-[#f5f3ef] md:grid-cols-2"
          >
            <div className="aspect-[4/3] bg-[#e9e5de] md:aspect-auto">
              <div className="flex h-full min-h-[320px] items-center justify-center">
                <span className="text-sm text-black/25">
                  تصویر مقاله
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
              <div>
                <span className="text-xs text-black/40">
                  {articles[0].category}
                </span>

                <h2 className="mt-7 text-2xl font-medium leading-[1.5] tracking-tight md:text-4xl">
                  {articles[0].title}
                </h2>

                <p className="mt-6 text-base leading-8 text-black/55">
                  {articles[0].description}
                </p>
              </div>

              <span className="mt-12 text-xl transition-transform group-hover:-translate-x-1">
                ↗
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              همه مطالب
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              راهنماها و مطالب چاپ
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {articles.slice(1).map((article) => (
              <Link
                key={article.number}
                href={article.href}
                className="group"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#eeeae3]">
                  <div className="flex h-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                    <span className="text-sm text-black/25">
                      تصویر مقاله
                    </span>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between">
                  <span className="text-xs text-black/40">
                    {article.category}
                  </span>

                  <span className="text-xs text-black/30">
                    {article.number}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-medium leading-[1.5] tracking-tight">
                  {article.title}
                </h3>

                <p className="mt-4 leading-8 text-black/50">
                  {article.description}
                </p>

                <span className="mt-6 block text-lg transition-transform group-hover:-translate-x-1">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO / Educational */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                چرا این مطالب؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                تصمیم بهتر،
                <br />
                از اطلاعات بهتر شروع می‌شود.
              </h2>
            </div>

            <div className="text-lg leading-9 text-black/60">
              <p>
                تفاوت روش‌های چاپ همیشه از روی ظاهر قابل تشخیص نیست. بعضی
                روش‌ها برای تیراژ بالا مناسب‌ترند، بعضی برای طرح‌های
                پیچیده و بعضی برای متریال خاص.
              </p>

              <p className="mt-7">
                هدف این بخش این است که قبل از سفارش، دید واضح‌تری نسبت به
                گزینه‌های موجود داشته باشید؛ نه اینکه شما را با اصطلاحات
                فنی پیچیده‌تر کنیم.
              </p>

              <Link
                href="/خدمات"
                className="mt-9 inline-flex items-center gap-3 text-sm font-medium"
              >
                مشاهده خدمات چاپ
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                آماده سفارش هستید؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                اطلاعات پروژه‌تان را
                <br />
                برای ما بفرستید.
              </h2>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
