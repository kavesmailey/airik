import Link from "next/link";

export const metadata = {
  title: "تماس با ما | آیریک",
  description:
    "برای دریافت مشاوره، استعلام قیمت و ثبت سفارش چاپ با آیریک در تماس باشید.",
};

export default function ContactPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              تماس با آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              درباره پروژه‌تان
              <br />
              با ما صحبت کنید.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-black/60 md:text-xl">
              چه فایل آماده داشته باشید و چه هنوز در مرحله انتخاب روش چاپ
              باشید، می‌توانید با ما در تماس باشید. اطلاعات پروژه را ارسال
              کنید تا بتوانیم دقیق‌تر راهنمایی‌تان کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                راه‌های ارتباطی
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                از هر مسیری که برایتان راحت‌تر است.
              </h2>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              <a
                href="tel:+9821XXXXXXXX"
                className="group flex items-center justify-between py-7"
              >
                <div>
                  <p className="text-sm text-black/40">تلفن</p>
                  <p className="mt-2 text-lg font-medium">
                    ۰۲۱ — XXXXXXXX
                  </p>
                </div>

                <span className="text-xl transition-transform group-hover:-translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="mailto:info@airik.ir"
                className="group flex items-center justify-between py-7"
              >
                <div>
                  <p className="text-sm text-black/40">ایمیل</p>
                  <p className="mt-2 text-lg font-medium">
                    info@airik.ir
                  </p>
                </div>

                <span className="text-xl transition-transform group-hover:-translate-x-1">
                  ↗
                </span>
              </a>

              <div className="flex items-center justify-between py-7">
                <div>
                  <p className="text-sm text-black/40">ساعات پاسخگویی</p>
                  <p className="mt-2 text-lg font-medium">
                    شنبه تا پنجشنبه · ۹ تا ۱۸
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              استعلام قیمت
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              مشخصات سفارش را بفرستید؛
              <br />
              از همین‌جا شروع می‌کنیم.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/60">
              نوع محصول، تعداد، ابعاد، جنس و هر اطلاعات دیگری که درباره
              پروژه دارید را ارسال کنید. هرچه اطلاعات کامل‌تر باشد،
              بررسی و برآورد دقیق‌تر خواهد بود.
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

      {/* Location */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                محل فعالیت
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                چاپخانه آیریک
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                برای دریافت آدرس دقیق و هماهنگی مراجعه حضوری، پیش از مراجعه
                با ما تماس بگیرید.
              </p>

              <Link
                href="/درباره-ما"
                className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-sm font-medium"
              >
                درباره آیریک
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
