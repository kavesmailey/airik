import Link from "next/link";

export const metadata = {
  title: "درباره آیریک | چاپ حرفه‌ای برای کسب‌وکارها",
  description:
    "آیریک یک مجموعه چاپ است که به کسب‌وکارها کمک می‌کند برای هر پروژه، روش چاپ مناسب و نتیجه‌ای حرفه‌ای انتخاب کنند.",
};

export default function AboutPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              درباره آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              چاپ فقط انتقال جوهر
              <br />
              روی یک سطح نیست.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              چاپ بخشی از تجربه‌ای است که مخاطب از یک محصول، یک برند و یک
              کسب‌وکار دریافت می‌کند. ما در آیریک تلاش می‌کنیم این بخش را
              درست، دقیق و متناسب با هدف هر پروژه اجرا کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="text-sm font-medium text-black/45">
                نگاه ما
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                از انتخاب روش چاپ شروع می‌کنیم، نه از دستگاه.
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-black/60">
                <p>
                  هر سفارش چاپ شرایط خودش را دارد. محصول، جنس سطح، تعداد،
                  ابعاد، رنگ، نوع استفاده و بودجه، همگی روی نتیجه نهایی
                  تأثیر می‌گذارند.
                </p>

                <p>
                  به همین دلیل تلاش می‌کنیم قبل از اجرا، مسئله را درست
                  بفهمیم و مناسب‌ترین روش را برای آن پیدا کنیم. نتیجه خوب
                  فقط به کیفیت دستگاه وابسته نیست؛ انتخاب درست از همان
                  ابتدای پروژه اتفاق می‌افتد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              چه کار می‌کنیم؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              راهکارهای چاپ برای محصول، برند و کسب‌وکار.
            </h2>

            <p className="mt-8 text-lg leading-9 text-black/60">
              از چاپ روی پوشاک و بسته‌بندی گرفته تا سفارش‌های تبلیغاتی و
              سازمانی، خدمات آیریک برای پروژه‌هایی طراحی شده که کیفیت اجرا
              و نتیجه نهایی اهمیت دارد.
            </p>
          </div>

          <div className="mt-20 grid border-t border-black/10 md:grid-cols-2">
            <div className="border-b border-black/10 py-10 md:border-l md:pl-12">
              <span className="text-sm text-black/40">۰۱</span>
              <h3 className="mt-5 text-2xl font-medium">چاپ روی لباس</h3>
              <p className="mt-4 max-w-md leading-8 text-black/55">
                چاپ سیلک، DTF و روش‌های مناسب برای انواع پوشاک و پارچه.
              </p>
            </div>

            <div className="border-b border-black/10 py-10 md:pr-12">
              <span className="text-sm text-black/40">۰۲</span>
              <h3 className="mt-5 text-2xl font-medium">چاپ بسته‌بندی</h3>
              <p className="mt-4 max-w-md leading-8 text-black/55">
                چاپ روی جعبه، کارتن، بگ و سایر اقلام بسته‌بندی.
              </p>
            </div>

            <div className="border-b border-black/10 py-10 md:border-l md:pl-12">
              <span className="text-sm text-black/40">۰۳</span>
              <h3 className="mt-5 text-2xl font-medium">چاپ تبلیغاتی</h3>
              <p className="mt-4 max-w-md leading-8 text-black/55">
                تولید اقلام چاپی برای کمپین‌ها، رویدادها و فعالیت‌های
                تبلیغاتی.
              </p>
            </div>

            <div className="border-b border-black/10 py-10 md:pr-12">
              <span className="text-sm text-black/40">۰۴</span>
              <h3 className="mt-5 text-2xl font-medium">
                سفارش‌های سازمانی
              </h3>
              <p className="mt-4 max-w-md leading-8 text-black/55">
                مدیریت سفارش‌های چندمحصولی و تیراژهای بالاتر برای
                کسب‌وکارها و سازمان‌ها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="text-sm font-medium text-black/45">
                چرا آیریک؟
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-medium">
                  قبل از چاپ، مسئله را می‌فهمیم.
                </h3>
                <p className="mt-4 leading-8 text-black/55">
                  به جای پیشنهاد یک راه‌حل ثابت برای همه، شرایط هر پروژه را
                  بررسی می‌کنیم.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium">
                  کیفیت فقط ظاهر نیست.
                </h3>
                <p className="mt-4 leading-8 text-black/55">
                  دوام، دقت، جنس، رنگ و تناسب روش چاپ با محصول، بخشی از
                  کیفیت واقعی یک سفارش هستند.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium">
                  همکاری باید ساده باشد.
                </h3>
                <p className="mt-4 leading-8 text-black/55">
                  هدف ما این است که مسیر سفارش از مشاوره تا تحویل، روشن و
                  قابل پیش‌بینی باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm text-white/45">
              پروژه بعدی شما
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              اگر پروژه‌ای برای چاپ دارید،
              <br />
              از همین‌جا شروع کنیم.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات سفارش را برای ما بفرستید تا روش مناسب چاپ و مسیر اجرای
              پروژه را با هم بررسی کنیم.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
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
