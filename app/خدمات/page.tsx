import Link from "next/link";

export const metadata = {
  title: "خدمات چاپ | آیریک",
  description:
    "خدمات چاپ آیریک؛ از چاپ سیلک و DTF تا چاپ روی لباس، پارچه، بگ، کارتن، جعبه و محصولات مختلف.",
};

const services = [
  {
    number: "۰۱",
    title: "چاپ سیلک",
    slug: "چاپ-سیلک",
    description:
      "چاپی دقیق و بادوام برای تیراژهای مختلف؛ مناسب لباس، پارچه و بسیاری از محصولات تبلیغاتی.",
  },
  {
    number: "۰۲",
    title: "چاپ DTF",
    slug: "چاپ-dtf",
    description:
      "راهکاری مناسب برای طرح‌های رنگی و جزئیات بالا، با امکان اجرا روی انواع مختلف پوشاک.",
  },
  {
    number: "۰۳",
    title: "چاپ روی لباس",
    slug: "چاپ-روی-لباس",
    description:
      "اجرای طرح روی تیشرت، هودی، لباس کار و دیگر محصولات پوشیدنی با توجه به جنس و کاربرد محصول.",
  },
  {
    number: "۰۴",
    title: "چاپ روی پارچه",
    slug: "چاپ-روی-پارچه",
    description:
      "چاپ برای پروژه‌هایی که پارچه بخشی از هویت یا محصول نهایی است؛ از تولیدات کوچک تا سفارش‌های تیراژدار.",
  },
  {
    number: "۰۵",
    title: "چاپ بگ",
    slug: "چاپ-بگ",
    description:
      "چاپ روی انواع بگ و کیسه برای بسته‌بندی، فروشگاه‌ها، رویدادها و استفاده تبلیغاتی.",
  },
  {
    number: "۰۶",
    title: "چاپ کارتن",
    slug: "چاپ-کارتن",
    description:
      "چاپ و اجرای بسته‌بندی‌های کارتنی برای محصولاتی که بسته‌بندی بخشی از تجربه برند است.",
  },
  {
    number: "۰۷",
    title: "چاپ جعبه پیتزا",
    slug: "چاپ-جعبه-پیتزا",
    description:
      "چاپ جعبه‌های پیتزا و بسته‌بندی غذا با امکان اجرای هویت بصری برند روی محصول.",
  },
  {
    number: "۰۸",
    title: "چاپ لیوان کاغذی",
    slug: "چاپ-لیوان-کاغذی",
    description:
      "چاپ روی لیوان‌های کاغذی برای کافه‌ها، رستوران‌ها، رویدادها و برندهایی که جزئیات مهم است.",
  },
  {
    number: "۰۹",
    title: "چاپ ظروف گرد",
    slug: "چاپ-ظروف-گرد",
    description:
      "چاپ روی ظروف و محصولات گرد با توجه به فرم، جنس و روش مناسب اجرای طرح.",
  },
  {
    number: "۱۰",
    title: "چاپ روی تیشرت",
    slug: "چاپ-روی-تیشرت",
    description:
      "چاپ سفارشی روی تیشرت برای برندها، مجموعه‌ها، کمپین‌ها، رویدادها و سفارش‌های شخصی.",
  },
];

export default function ServicesPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              خدمات چاپ
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              برای هر چیزی که قرار است
              <br />
              دیده شود، راهی برای چاپ هست.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              از چاپ روی لباس و پارچه تا بسته‌بندی و محصولات تبلیغاتی،
              آیریک مجموعه‌ای از خدمات چاپ را برای نیازهای مختلف کسب‌وکارها
              ارائه می‌کند. روش چاپ همیشه از خود محصول شروع می‌شود؛ نه برعکس.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              خدمات آیریک
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              روش درست را برای
              <br />
              پروژه‌تان پیدا کنید.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/خدمات/${service.slug}`}
                className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-12"
              >
                <div className="grid gap-7 md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:gap-10">
                  <span className="text-xs text-black/35">
                    {service.number}
                  </span>

                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="max-w-xl leading-8 text-black/50">
                    {service.description}
                  </p>

                  <span className="text-xl transition-transform group-hover:-translate-x-1">
                    ←
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we choose */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                فقط انتخاب سرویس نیست
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                مهم است بدانیم
                <br />
                چطور چاپ کنیم.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60">
              <p>
                یک طرح ممکن است روی دو محصول مختلف به دو روش کاملاً متفاوت
                نیاز داشته باشد. جنس سطح، تعداد رنگ، میزان جزئیات، تیراژ و
                کاربرد نهایی همگی روی انتخاب روش چاپ تأثیر دارند.
              </p>

              <p>
                اگر بین چند روش مردد هستید، لازم نیست قبل از تماس پاسخ را
                بدانید. مشخصات پروژه را با ما در میان بگذارید تا مناسب‌ترین
                گزینه را بررسی کنیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business solutions */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-14 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                برای کسب‌وکارها
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                سفارش چاپ وقتی
                <br />
                تکرار می‌شود، داستان فرق می‌کند.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                اگر برای برند، فروشگاه، رستوران، کافه یا مجموعه خود به
                سفارش‌های چاپی منظم نیاز دارید، می‌توانیم همکاری را بر اساس
                نیازهای تکرارشونده شما شکل دهیم.
              </p>

              <Link
                href="/برای-کسب-و-کارها"
                className="mt-8 inline-flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-50"
              >
                راهکارهای آیریک برای کسب‌وکارها
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-6 text-sm font-medium text-black/45">
                مطمئن نیستید کدام روش مناسب است؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                پروژه را برای ما توضیح دهید.
                <br />
                انتخاب روش را بسپارید به ما.
              </h2>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
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
