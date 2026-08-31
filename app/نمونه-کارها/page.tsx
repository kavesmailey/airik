import Link from "next/link";

export const metadata = {
  title: "نمونه‌کارها | آیریک",
  description:
    "نمونه‌ای از پروژه‌های چاپ آیریک برای برندها، کسب‌وکارها و سفارش‌های تبلیغاتی.",
};

const projects = [
  {
    number: "۰۱",
    title: "چاپ سیلک روی پوشاک",
    category: "چاپ روی لباس",
    description:
      "اجرای چاپ سیلک برای تولید یکدست و باکیفیت روی تیراژ بالای پوشاک.",
  },
  {
    number: "۰۲",
    title: "چاپ DTF",
    category: "چاپ روی لباس",
    description:
      "چاپ طرح‌های رنگی و جزئیات‌دار برای اجرای مستقیم روی انواع پوشاک.",
  },
  {
    number: "۰۳",
    title: "بسته‌بندی اختصاصی",
    category: "چاپ بسته‌بندی",
    description:
      "اجرای چاپ برای بسته‌بندی محصول با تمرکز بر کیفیت، خوانایی و ظاهر نهایی.",
  },
  {
    number: "۰۴",
    title: "چاپ بگ",
    category: "چاپ تبلیغاتی",
    description:
      "تولید بگ‌های چاپی برای استفاده فروشگاهی، تبلیغاتی و رویدادها.",
  },
  {
    number: "۰۵",
    title: "چاپ روی پارچه",
    category: "چاپ پارچه",
    description:
      "انتخاب و اجرای روش مناسب چاپ متناسب با جنس و کاربرد پارچه.",
  },
  {
    number: "۰۶",
    title: "سفارش سازمانی",
    category: "سفارش اختصاصی",
    description:
      "مدیریت سفارش چندمحصولی برای یک مجموعه با نیازهای چاپی متفاوت.",
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
              نتیجه خوب،
              <br />
              خودش صحبت می‌کند.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              بخشی از پروژه‌های چاپی آیریک را اینجا می‌بینید. هر پروژه با
              توجه به محصول، جنس، تیراژ و هدف سفارش بررسی شده و روش مناسب
              برای اجرای آن انتخاب شده است.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid border-t border-black/10 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group border-b border-black/10 py-12 md:p-14 md:first:pl-14 md:nth-[odd]:border-l"
              >
                {/* Placeholder visual */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eeebe5]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-black/25">
                      تصویر پروژه
                    </span>
                  </div>

                  <div className="absolute right-5 top-5 text-xs text-black/35">
                    {project.number}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-black/40">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-2xl font-medium tracking-tight">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-lg leading-8 text-black/55">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services link */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                خدمات چاپ
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                پروژه شما چه نوع چاپی نیاز دارد؟
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                اگر هنوز مطمئن نیستید کدام روش چاپ برای پروژه شما مناسب
                است، خدمات مختلف آیریک را ببینید یا مشخصات سفارش را برای
                ما ارسال کنید.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/خدمات"
                  className="inline-flex items-center gap-3 rounded-full border border-black/15 px-6 py-3.5 text-sm transition-colors hover:bg-black hover:text-white"
                >
                  مشاهده خدمات
                  <span>↗</span>
                </Link>

                <Link
                  href="/استعلام-قیمت"
                  className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  استعلام قیمت
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
