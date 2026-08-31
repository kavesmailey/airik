import Link from "next/link";

export const metadata = {
  title: "چاپ برای کسب‌وکارها | آیریک",
  description:
    "راهکارهای چاپ آیریک برای برندها و کسب‌وکارهایی که به چاپ منظم، دقیق و قابل اتکا نیاز دارند.",
};

const solutions = [
  {
    number: "۰۱",
    title: "تولید و بسته‌بندی",
    text: "برای محصولاتی که چاپ بخشی از بسته‌بندی یا تجربه نهایی مشتری است؛ از جعبه و کارتن تا بگ و دیگر اقلام بسته‌بندی.",
  },
  {
    number: "۰۲",
    title: "پوشاک و محصولات پارچه‌ای",
    text: "چاپ روی تیشرت، لباس، پارچه و محصولات پوشیدنی برای برندهای پوشاک، مجموعه‌ها، کمپین‌ها و تولیدکنندگان.",
  },
  {
    number: "۰۳",
    title: "برندینگ و تبلیغات",
    text: "تبدیل هویت بصری برند به محصولات فیزیکی؛ از اقلام تبلیغاتی تا بسته‌بندی و محصولات چاپی مورد نیاز برند.",
  },
  {
    number: "۰۴",
    title: "سفارش‌های تکرارشونده",
    text: "برای کسب‌وکارهایی که چاپ یک فعالیت مقطعی نیست و به شکل منظم به تولید و تأمین اقلام چاپی نیاز دارند.",
  },
];

const benefits = [
  "ارتباط و هماهنگی ساده‌تر",
  "انتخاب روش چاپ متناسب با پروژه",
  "امکان برنامه‌ریزی برای سفارش‌های تکراری",
  "توجه به کیفیت و ثبات خروجی",
  "مناسب برای سفارش‌های کوچک و تیراژ بالاتر",
];

export default function BusinessSolutionsPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              برای کسب‌وکارها
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              چاپ را از یک سفارش،
              <br />
              به یک همکاری تبدیل کنیم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              وقتی یک کسب‌وکار مرتب به چاپ نیاز دارد، هر سفارش نباید دوباره
              از صفر شروع شود. آیریک برای همین ساخته شده؛ تا چاپ بتواند
              بخشی ساده و قابل اتکا از فرآیند کاری شما باشد.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                مسئله
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چاپ نباید یکی از
                <br />
                دغدغه‌های روزمره شما باشد.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60">
              <p>
                برای یک کسب‌وکار، یک سفارش چاپ فقط انتخاب یک سرویس نیست.
                باید مشخص باشد چه چیزی چاپ می‌شود، روی چه متریالی، با چه
                روشی، در چه تیراژی و چه زمانی آماده خواهد شد.
              </p>

              <p>
                وقتی این فرآیند مرتب تکرار می‌شود، کوچک‌ترین بی‌نظمی می‌تواند
                زمان و انرژی زیادی از تیم شما بگیرد.
              </p>

              <p>
                ما تلاش می‌کنیم این بخش را تا جای ممکن ساده کنیم؛ با
                ارتباط روشن، بررسی درست پروژه و فرآیندی که برای سفارش‌های
                بعدی هم قابل استفاده باشد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              راهکارها
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              برای هر مرحله‌ای که
              <br />
              چاپ وارد کسب‌وکار شما می‌شود.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="border-b border-black/10 py-12 md:p-14"
              >
                <span className="text-xs text-black/35">
                  {solution.number}
                </span>

                <h3 className="mt-8 text-2xl font-medium tracking-tight md:text-3xl">
                  {solution.title}
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-black/55">
                  {solution.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                همکاری با آیریک
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                قرار نیست فقط
                <br />
                چاپ تحویل بگیرید.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-9 text-black/60">
                هدف ما این است که تجربه سفارش برای تیم شما ساده‌تر شود.
                به‌خصوص زمانی که یک نوع چاپ یا محصول را بارها و بارها
                سفارش می‌دهید.
              </p>

              <ul className="mt-12 border-t border-black/10">
                {benefits.map((benefit, index) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-5 border-b border-black/10 py-6"
                  >
                    <span className="text-xs text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Repeat orders */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              سفارش‌های تکراری
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
              یک بار توضیح بدهید.
              <br />
              دفعات بعد ساده‌تر سفارش دهید.
            </h2>

            <p className="mt-9 max-w-3xl text-lg leading-9 text-black/60">
              اگر یک محصول را مرتب چاپ می‌کنید، مشخصات آن سفارش می‌تواند
              تبدیل به یک نقطه شروع برای دفعات بعد شود. این یعنی زمان کمتر
              برای هماهنگی و تمرکز بیشتر روی خود کسب‌وکار.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-14">
            <p className="mb-7 text-sm font-medium text-black/45">
              مناسب برای
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              اگر بخشی از کار شما
              <br />
              با چاپ گره خورده است.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-3">
            {[
              "برندهای پوشاک",
              "فروشگاه‌ها و مجموعه‌های تجاری",
              "کافه‌ها و رستوران‌ها",
              "برندهای مواد غذایی",
              "آژانس‌ها و تیم‌های تبلیغاتی",
              "کسب‌وکارهای در حال رشد",
            ].map((item) => (
              <div
                key={item}
                className="bg-white px-7 py-8 text-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-6 text-sm font-medium text-black/45">
                شروع همکاری
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                نیاز چاپی کسب‌وکارتان را
                <br />
                با ما در میان بگذارید.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
                نوع محصول، تعداد، زمان مورد نیاز و هر اطلاعاتی که درباره
                پروژه دارید برای ما بفرستید.
              </p>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              درخواست همکاری
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
