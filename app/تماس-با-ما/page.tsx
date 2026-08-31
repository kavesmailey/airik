import Link from "next/link";

export const metadata = {
  title: "تماس با ما | آیریک",
  description:
    "برای مشاوره، استعلام قیمت و هماهنگی سفارش‌های چاپ با آیریک در تماس باشید.",
};

export default function ContactPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              تماس با ما
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              بیایید درباره
              <br />
              پروژه‌تان صحبت کنیم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              برای استعلام قیمت، مشاوره درباره روش چاپ یا هماهنگی یک سفارش،
              با آیریک در تماس باشید. اگر هنوز جزئیات پروژه مشخص نیست، اشکالی
              ندارد؛ از همان اطلاعات اولیه شروع می‌کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                راه‌های ارتباطی
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                یک پیام کافی است
                <br />
                تا شروع کنیم.
              </h2>

              <p className="mt-8 max-w-xl leading-8 text-black/55">
                برای اینکه سریع‌تر راهنمایی‌تان کنیم، اگر امکان دارد نوع
                محصول، تعداد تقریبی، روش چاپ موردنظر و زمان موردنیاز را
                هنگام تماس اعلام کنید.
              </p>
            </div>

            <div className="border-t border-black/10">
              {/* Phone */}
              <div className="border-b border-black/10 py-8">
                <p className="text-sm text-black/40">تلفن</p>

                <a
                  href="tel:"
                  className="mt-3 block text-xl font-medium transition-opacity hover:opacity-60"
                >
                  شماره تماس را وارد کنید
                </a>
              </div>

              {/* Email */}
              <div className="border-b border-black/10 py-8">
                <p className="text-sm text-black/40">ایمیل</p>

                <a
                  href="mailto:"
                  className="mt-3 block text-xl font-medium transition-opacity hover:opacity-60"
                >
                  ایمیل را وارد کنید
                </a>
              </div>

              {/* Working hours */}
              <div className="border-b border-black/10 py-8">
                <p className="text-sm text-black/40">ساعات پاسخ‌گویی</p>

                <p className="mt-3 text-xl font-medium">
                  شنبه تا چهارشنبه
                </p>

                <p className="mt-2 text-black/50">
                  ساعت کاری را در اینجا وارد کنید
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:items-end md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                استعلام قیمت
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                اگر قیمت می‌خواهید،
                <br />
                از اینجا شروع کنید.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                مشخصات سفارش را برای ما ارسال کنید تا بتوانیم بر اساس نوع
                چاپ، محصول و تیراژ، برآورد دقیق‌تری ارائه کنیم.
              </p>

              <Link
                href="/استعلام-قیمت"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                آدرس
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-4xl">
                ما را پیدا کنید.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                آدرس دقیق مجموعه را در این بخش وارد کنید. بهتر است اطلاعات
                آدرس، منطقه، شهر و در صورت نیاز لینک مسیریابی در این قسمت
                قرار بگیرد.
              </p>

              <div className="mt-8 aspect-[16/9] bg-[#eeebe5]">
                <div className="flex h-full items-center justify-center text-sm text-black/25">
                  نقشه
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-medium text-black/45">
              آماده‌ایم
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              یک سفارش خوب،
              <br />
              از یک گفت‌وگوی خوب شروع می‌شود.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
