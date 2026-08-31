import Link from "next/link";

export const metadata = {
  title: "خدمات چاپ برای کسب‌وکارها | آیریک",
  description:
    "راهکارهای چاپ آیریک برای برندها، فروشگاه‌ها و کسب‌وکارهایی که به کیفیت و اجرای منظم نیاز دارند.",
};

const solutions = [
  {
    number: "۰۱",
    title: "تولید مستمر",
    text: "برای سفارش‌هایی که قرار است به‌صورت منظم تکرار شوند، کیفیت و مشخصات اجرا را ثابت نگه می‌داریم.",
  },
  {
    number: "۰۲",
    title: "سفارش‌های تیراژ بالا",
    text: "سفارش‌های عمده با برنامه‌ریزی دقیق‌تر تولید می‌شوند تا زمان و کیفیت اجرا قابل کنترل باشد.",
  },
  {
    number: "۰۳",
    title: "چاپ چندمحصولی",
    text: "اگر برای یک کمپین یا مجموعه محصول به چند نوع چاپ نیاز دارید، می‌توانیم کل سفارش را یکجا مدیریت کنیم.",
  },
  {
    number: "۰۴",
    title: "تولید اختصاصی",
    text: "برای پروژه‌هایی که نیاز به بررسی جنس، روش چاپ یا اجرای متفاوت دارند، راهکار متناسب با پروژه طراحی می‌کنیم.",
  },
];

const benefits = [
  "مشاوره برای انتخاب روش چاپ",
  "بررسی جنس و مشخصات محصول",
  "مدیریت سفارش‌های چندبخشی",
  "توجه به ثبات کیفیت در سفارش‌های تکرارشونده",
  "هماهنگی برای تیراژهای مختلف",
  "پشتیبانی در طول فرآیند سفارش",
];

export default function BusinessSolutionsPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-14 md:grid-cols-2 md:items-end md:gap-24">
            <div>
              <p className="mb-8 text-sm font-medium text-black/45">
                برای کسب‌وکارها
              </p>

              <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
                چاپ فقط یک سفارش نیست.
                <br />
                بخشی از کسب‌وکار شماست.
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-9 text-black/60 md:text-xl">
              وقتی چاپ بخشی از فرآیند تولید و فروش یک کسب‌وکار است، کیفیت
              اتفاقی قابل قبول نیست. آیریک برای برندها و کسب‌وکارهایی طراحی
              شده که به اجرای منظم، کیفیت قابل اتکا و همکاری بلندمدت نیاز
              دارند.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              همکاری با آیریک
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
              شما روی کسب‌وکارتان تمرکز کنید؛
              <br />
              ما بخش چاپ را مدیریت می‌کنیم.
            </h2>

            <p className="mt-9 max-w-3xl text-lg leading-9 text-black/60">
              از انتخاب روش مناسب چاپ تا تولید نهایی، هدف ما این است که
              فرآیند برای شما ساده و قابل پیش‌بینی باشد. به جای اینکه برای
              هر سفارش از صفر شروع کنید، می‌توانید روی یک فرآیند مشخص و
              یکپارچه حساب کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-2xl md:mb-24">
            <p className="mb-6 text-sm font-medium text-black/45">
              چه کاری انجام می‌دهیم؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              راهکار چاپی متناسب با مدل کاری شما.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {solutions.map((item) => (
              <article
                key={item.number}
                className="border-b border-black/10 py-12 md:p-14 md:nth-[odd]:border-l"
              >
                <span className="text-xs text-black/35">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-medium tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-lg leading-8 text-black/55">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                یک فرآیند ساده
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                از ایده تا خروجی،
                <br />
                بدون پیچیدگی اضافه.
              </h2>
            </div>

            <div>
              <div className="border-t border-black/10">
                <div className="border-b border-black/10 py-7">
                  <span className="text-xs text-black/35">۰۱</span>
                  <h3 className="mt-3 text-xl font-medium">
                    شناخت سفارش
                  </h3>
                  <p className="mt-3 leading-8 text-black/55">
                    محصول، جنس، تعداد، کاربرد و زمان‌بندی سفارش را بررسی
                    می‌کنیم.
                  </p>
                </div>

                <div className="border-b border-black/10 py-7">
                  <span className="text-xs text-black/35">۰۲</span>
                  <h3 className="mt-3 text-xl font-medium">
                    انتخاب روش اجرا
                  </h3>
                  <p className="mt-3 leading-8 text-black/55">
                    مناسب‌ترین روش چاپ را با توجه به نیاز واقعی پروژه
                    پیشنهاد می‌دهیم.
                  </p>
                </div>

                <div className="border-b border-black/10 py-7">
                  <span className="text-xs text-black/35">۰۳</span>
                  <h3 className="mt-3 text-xl font-medium">
                    تولید و تحویل
                  </h3>
                  <p className="mt-3 leading-8 text-black/55">
                    پس از تأیید، سفارش وارد فرآیند تولید می‌شود و تا تحویل
                    نهایی پیگیری می‌شود.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-14 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                چرا آیریک؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                همکاری‌ای که قرار نیست
                <br />
                هر بار از اول شروع شود.
              </h2>
            </div>

            <div>
              <ul className="border-t border-black/10">
                {benefits.map((benefit, index) => (
                  <li
                    key={benefit}
                    className="flex items-center justify-between gap-6 border-b border-black/10 py-5"
                  >
                    <span className="text-base text-black/70">
                      {benefit}
                    </span>

                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              شروع همکاری
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              اگر چاپ بخشی از کار شماست،
              <br />
              بیایید درباره‌اش صحبت کنیم.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
              مشخصات سفارش یا نیاز کسب‌وکارتان را برای ما بفرستید. اگر هنوز
              روش چاپ مناسب را نمی‌دانید، از همان‌جا شروع می‌کنیم.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span>↗</span>
              </Link>

              <Link
                href="/تماس-با-ما"
                className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:bg-black hover:text-white"
              >
                تماس با ما
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
