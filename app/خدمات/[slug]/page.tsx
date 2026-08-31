import Link from "next/link";

export const metadata = {
  title: "خدمات چاپ | آیریک",
  description:
    "خدمات چاپ آیریک؛ از چاپ سیلک و DTF تا چاپ روی لباس، پارچه، بگ، کارتن، جعبه و دیگر محصولات.",
};

const services = [
  {
    number: "۰۱",
    title: "چاپ سیلک",
    slug: "/خدمات/چاپ-سیلک",
    description:
      "چاپی مناسب برای تیراژهای مختلف و طرح‌هایی که به خروجی بادوام و یکدست نیاز دارند.",
  },
  {
    number: "۰۲",
    title: "چاپ DTF",
    slug: "/خدمات/چاپ-dtf",
    description:
      "راهکاری انعطاف‌پذیر برای چاپ طرح‌های رنگی و جزئیات‌دار روی انواع محصولات و پوشاک.",
  },
  {
    number: "۰۳",
    title: "چاپ روی لباس",
    slug: "/خدمات/چاپ-روی-لباس",
    description:
      "اجرای طرح و هویت بصری روی تیشرت، لباس و محصولات پوشیدنی برای برندها و مجموعه‌ها.",
  },
  {
    number: "۰۴",
    title: "چاپ روی پارچه",
    slug: "/خدمات/چاپ-روی-پارچه",
    description:
      "چاپ برای پروژه‌هایی که پارچه بخشی از محصول یا تجربه نهایی آن است.",
  },
  {
    number: "۰۵",
    title: "چاپ بگ",
    slug: "/خدمات/چاپ-بگ",
    description:
      "چاپ روی انواع بگ برای فروشگاه‌ها، برندها، رویدادها و بسته‌بندی محصولات.",
  },
  {
    number: "۰۶",
    title: "چاپ کارتن",
    slug: "/خدمات/چاپ-کارتن",
    description:
      "چاپ روی کارتن و بسته‌بندی برای محصولاتی که ظاهر بسته‌بندی بخشی از هویت برند است.",
  },
  {
    number: "۰۷",
    title: "چاپ جعبه پیتزا",
    slug: "/خدمات/چاپ-جعبه-پیتزا",
    description:
      "چاپ سفارشی جعبه برای رستوران‌ها، پیتزافروشی‌ها و برندهای غذایی.",
  },
  {
    number: "۰۸",
    title: "چاپ لیوان کاغذی",
    slug: "/خدمات/چاپ-لیوان-کاغذی",
    description:
      "چاپ لیوان‌های کاغذی برای کافه‌ها، رستوران‌ها، رویدادها و برندها.",
  },
  {
    number: "۰۹",
    title: "چاپ ظروف گرد",
    slug: "/خدمات/چاپ-ظروف-گرد",
    description:
      "راهکار چاپ برای ظروف و محصولات گرد که به اجرای تمیز و متناسب با فرم محصول نیاز دارند.",
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
              هر چیزی که قرار است
              <br />
              دیده شود، می‌تواند چاپ شود.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              از پوشاک و پارچه تا بسته‌بندی و محصولات تبلیغاتی؛ خدمات آیریک
              برای پروژه‌هایی طراحی شده‌اند که چاپ بخشی از محصول، برند یا
              تجربه مشتری است.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              خدمات
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              روش مناسب را برای پروژه‌تان پیدا کنید.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.slug}
                className="group grid gap-6 border-b border-black/10 py-10 transition-opacity hover:opacity-60 md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:gap-10 md:py-12"
              >
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
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                انتخاب روش چاپ
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                لازم نیست
                <br />
                از قبل جواب را بدانید.
              </h2>
            </div>

            <div className="text-lg leading-9 text-black/60">
              <p>
                روش چاپ مناسب به چند عامل بستگی دارد؛ جنس محصول، نوع طرح،
                تعداد، رنگ‌ها، میزان جزئیات و کاربرد نهایی.
              </p>

              <p className="mt-7">
                اگر بین چند روش مردد هستید، کافی است مشخصات پروژه را برای
                ما بفرستید. می‌توانیم گزینه‌های مناسب را بررسی و مقایسه
                کنیم تا انتخاب منطقی‌تری داشته باشید.
              </p>

              <Link
                href="/استعلام-قیمت"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                مشاوره و استعلام قیمت
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                برای کسب‌وکارها
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                اگر چاپ بخشی از
                <br />
                کار شماست، با ما صحبت کنید.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                برای برندها و کسب‌وکارهایی که سفارش چاپشان تکرار می‌شود،
                مهم است که فرآیند سفارش هر بار از صفر شروع نشود.
              </p>

              <p className="mt-7 text-lg leading-9 text-black/60">
                آیریک می‌تواند برای سفارش‌های مستمر، تولید محصولات چاپی و
                نیازهای مختلف برند در کنار شما باشد.
              </p>

              <Link
                href="/برای-کسب-و-کارها"
                className="mt-9 inline-flex items-center gap-3 text-sm font-medium"
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
              شروع کنید
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
              پروژه‌ای دارید که باید
              <br />
              چاپ شود؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
              مشخصات پروژه را برای ما بفرستید. اگر هنوز نمی‌دانید کدام
              سرویس مناسب شماست، از همین‌جا شروع می‌کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
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
