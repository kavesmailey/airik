import Link from "next/link";

const services = [
  {
    number: "01",
    title: "چاپ روی لباس",
    text: "برای برندها، تیم‌ها، رویدادها و پروژه‌های شخصی.",
    href: "/خدمات/چاپ-روی-لباس",
  },
  {
    number: "02",
    title: "چاپ روی پارچه",
    text: "راهکار چاپ متناسب با جنس پارچه، طرح و تیراژ.",
    href: "/خدمات/چاپ-روی-پارچه",
  },
  {
    number: "03",
    title: "بسته‌بندی",
    text: "بسته‌بندی چاپی که بخشی از تجربه برند باشد.",
    href: "/خدمات/بسته-بندی",
  },
  {
    number: "04",
    title: "چاپ روی محصول",
    text: "برای محصولات برندشده و پروژه‌های اختصاصی.",
    href: "/خدمات/چاپ-روی-محصول",
  },
];

const principles = [
  {
    number: "01",
    title: "کیفیت",
    text: "خروجی نهایی باید همان چیزی باشد که در ذهن شماست.",
  },
  {
    number: "02",
    title: "دقت",
    text: "جزئیات فنی و اجرایی از همان ابتدا بررسی می‌شوند.",
  },
  {
    number: "03",
    title: "راهکار",
    text: "به‌جای یک روش ثابت، بهترین مسیر برای هر پروژه را پیدا می‌کنیم.",
  },
];

export default function HomePage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12 lg:py-48">
          <div className="grid gap-16 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <p className="mb-8 text-sm font-medium text-black/40">
                آیریک · راهکارهای چاپ
              </p>

              <h1 className="max-w-5xl text-5xl font-medium leading-[1.18] tracking-[-0.04em] md:text-7xl lg:text-8xl">
                چیزی که
                <br />
                چاپ می‌کنیم،
                <br />
                دیده می‌شود.
              </h1>
            </div>

            <div className="max-w-md">
              <p className="text-lg leading-9 text-black/60 md:text-xl">
                آیریک به برندها و کسب‌وکارها کمک می‌کند ایده‌هایشان را
                به محصولات و تجربه‌های فیزیکی تبدیل کنند.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/استعلام-قیمت"
                  className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  استعلام قیمت
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/خدمات"
                  className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
                >
                  دیدن خدمات
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            <div>
              <p className="text-sm font-medium text-black/40">
                چرا آیریک؟
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl lg:text-6xl">
                ما فقط فایل شما را چاپ نمی‌کنیم.
                <br />
                به این فکر می‌کنیم که
                <span className="text-black/35">
                  {" "}
                  نتیجه نهایی
                </span>{" "}
                چطور باید دیده و تجربه شود.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section>
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#e7e2d4] md:min-h-[680px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-xs tracking-[0.3em] text-black/30">
                  AYRIC
                </span>

                <span className="mt-6 block text-[8rem] font-medium leading-none tracking-[-0.08em] text-black/10 md:text-[14rem]">
                  A
                </span>
              </div>
            </div>

            <div className="absolute bottom-7 right-7 max-w-xs md:bottom-10 md:right-10">
              <p className="text-sm leading-7 text-black/45">
                این بخش می‌تواند بعداً با تصویر واقعی یکی از پروژه‌های
                آیریک جایگزین شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                خدمات
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                راهکارهای چاپ
                <br />
                برای نیازهای واقعی.
              </h2>
            </div>

            <Link
              href="/خدمات"
              className="inline-flex w-fit items-center gap-3 text-sm text-black/50 transition-colors hover:text-black"
            >
              مشاهده همه خدمات
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="border-t border-black/10">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group block border-b border-black/10 py-9 transition-opacity hover:opacity-60 md:py-12"
              >
                <div className="grid gap-5 md:grid-cols-[90px_0.9fr_1.1fr_30px] md:items-center">
                  <span className="text-xs text-black/30">
                    {service.number}
                  </span>

                  <h3 className="text-xl font-medium md:text-2xl">
                    {service.title}
                  </h3>

                  <p className="leading-8 text-black/45">
                    {service.text}
                  </p>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform group-hover:-translate-x-1"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                طرز فکر آیریک
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                خوب چاپ شدن
                <br />
                کافی نیست.
              </h2>
            </div>

            <div>
              <div className="border-t border-black/10">
                {principles.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-6 border-b border-black/10 py-9 md:grid-cols-[70px_0.7fr_1.3fr] md:items-center"
                  >
                    <span className="text-xs text-black/30">
                      {item.number}
                    </span>

                    <h3 className="text-xl font-medium">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-black/50">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                نمونه‌کارها
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                چیزی که ساخته‌ایم،
                <br />
                حرف بیشتری می‌زند.
              </h2>
            </div>

            <Link
              href="/نمونه-کارها"
              className="inline-flex w-fit items-center gap-3 text-sm text-black/50 transition-colors hover:text-black"
            >
              مشاهده نمونه‌کارها
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/نمونه-کارها"
              className="group overflow-hidden rounded-[1.5rem] bg-[#e7e2d4]"
            >
              <div className="flex min-h-[420px] items-end p-8 transition-transform duration-500 group-hover:scale-[1.02] md:min-h-[560px]">
                <div>
                  <span className="text-xs text-black/35">
                    پروژه منتخب
                  </span>

                  <h3 className="mt-3 text-2xl font-medium">
                    پروژه‌های آیریک
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              href="/نمونه-کارها"
              className="group overflow-hidden rounded-[1.5rem] bg-[#d0d5ec]"
            >
              <div className="flex min-h-[420px] items-end p-8 transition-transform duration-500 group-hover:scale-[1.02] md:min-h-[560px]">
                <div>
                  <span className="text-xs text-black/35">
                    پروژه منتخب
                  </span>

                  <h3 className="mt-3 text-2xl font-medium">
                    اجرای چاپ و تولید
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-white/40">
              پروژه بعدی
            </p>

            <h2 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              چیزی برای چاپ دارید؟
              <br />
              شروع کنیم.
            </h2>

            <p className="mt-9 max-w-2xl text-lg leading-9 text-white/50">
              مشخصات پروژه‌تان را برای ما بفرستید. اگر هنوز نمی‌دانید
              چه روش چاپی مناسب شماست، در انتخاب آن کمکتان می‌کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
