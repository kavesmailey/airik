import type { Metadata } from "next";
import Link from "next/link";
import { businessTypes } from "@/content/business";

export const metadata: Metadata = {
  title: "راهکارهای چاپ برای کسب‌وکارها | AIRIK",
  description:
    "راهکارهای چاپ AIRIK برای برندها، فروشگاه‌ها، رستوران‌ها، کافه‌ها و کسب‌وکارهایی که به تولید چاپی مستمر و حرفه‌ای نیاز دارند.",
};

export default function BusinessPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              AIRIK برای کسب‌وکارها
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              چاپی که بخشی از
              <br />
              کسب‌وکار شماست.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              از بسته‌بندی و اقلام تبلیغاتی تا محصولات چاپی روزمره، راهکار
              مناسب چاپ برای هر کسب‌وکار متفاوت است. AIRIK کمک می‌کند این
              انتخاب بر اساس محصول، تیراژ، متریال و کاربرد واقعی انجام شود.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span>↗</span>
              </Link>

              <Link
                href="/خدمات"
                className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:bg-black/5"
              >
                مشاهده خدمات
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                برای هر مدل کسب‌وکار
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                نیاز چاپی هر کسب‌وکار
                <br />
                یکسان نیست.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60">
              <p>
                یک رستوران به بسته‌بندی، لیبل و اقلام چاپی روزمره نیاز دارد؛
                یک برند پوشاک ممکن است به چاپ روی پارچه یا تیشرت نیاز داشته
                باشد و یک شرکت، بیشتر به اقلام هویت بصری و چاپ سازمانی احتیاج
                داشته باشد.
              </p>

              <p>
                به همین دلیل AIRIK خدمات چاپ را فقط بر اساس تکنولوژی دسته‌بندی
                نمی‌کند. نوع کسب‌وکار و مسئله‌ای که قرار است حل شود هم بخشی از
                انتخاب راهکار است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              انتخاب حوزه
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              کسب‌وکار خود را
              <br />
              انتخاب کنید.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {businessTypes.map((business, index) => (
              <Link
                key={business.slug}
                href={`/برای-کسب-و-کارها/${business.slug}`}
                className="group grid gap-6 border-b border-black/10 py-10 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-10 md:py-14"
              >
                <span className="text-xs text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {business.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-8 text-black/50">
                    {business.description}
                  </p>
                </div>

                <span className="text-xl text-black/30 transition-transform group-hover:-translate-x-1">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why AIRIK */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                همکاری با AIRIK
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                یک چاپخانه،
                <br />
                برای نیازهای واقعی تولید.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  number: "۰۱",
                  title: "انتخاب روش مناسب",
                  text: "لازم نیست از ابتدا بدانید چه تکنولوژی چاپی برای پروژه شما مناسب است. اطلاعات سفارش را بررسی می‌کنیم و راهکار مناسب را پیشنهاد می‌دهیم.",
                },
                {
                  number: "۰۲",
                  title: "مناسب برای سفارش‌های مستمر",
                  text: "اگر کسب‌وکار شما به چاپ مداوم نیاز دارد، می‌توان فرآیند سفارش را بر اساس نیازهای تکرارشونده شما تنظیم کرد.",
                },
                {
                  number: "۰۳",
                  title: "توجه به جزئیات تولید",
                  text: "متریال، ابعاد، تیراژ، فایل و کاربرد نهایی همگی روی نتیجه اثر دارند و در تصمیم‌گیری در نظر گرفته می‌شوند.",
                },
                {
                  number: "۰۴",
                  title: "راهکار به‌جای محصول",
                  text: "هدف فقط تولید یک آیتم چاپی نیست؛ هدف این است که خروجی نهایی با نیاز واقعی کسب‌وکار شما هماهنگ باشد.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[70px_180px_1fr] md:items-start md:gap-8"
                >
                  <span className="text-xs text-black/35">
                    {item.number}
                  </span>

                  <h3 className="text-lg font-medium">{item.title}</h3>

                  <p className="leading-8 text-black/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                خدمات چاپ
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                خدماتی برای
                <br />
                پروژه‌های مختلف.
              </h2>
            </div>

            <Link
              href="/خدمات"
              className="w-fit text-sm text-black/55 transition-colors hover:text-black"
            >
              مشاهده همه خدمات ↗
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-medium text-black/45">
              شروع همکاری
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              پروژه چاپی دارید؟
              <br />
              از همین‌جا شروع کنیم.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
              نوع محصول، تعداد، ابعاد و زمان مورد نیاز را برای ما بفرستید.
              اگر درباره روش چاپ مطمئن نیستید، اطلاعات پروژه برای شروع کافی
              است.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
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
