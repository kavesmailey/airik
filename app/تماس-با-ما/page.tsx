import Link from "next/link";

export const metadata = {
  title: "تماس با آیریک | سفارش و مشاوره چاپ",
  description:
    "برای سفارش چاپ، دریافت مشاوره و استعلام قیمت با آیریک در ارتباط باشید.",
};

const contactItems = [
  {
    title: "تلفن",
    value: "برای تماس مستقیم با ما",
    href: "tel:",
  },
  {
    title: "واتساپ",
    value: "برای ارسال جزئیات پروژه",
    href: "#",
  },
  {
    title: "ایمیل",
    value: "برای پروژه‌ها و همکاری‌های سازمانی",
    href: "mailto:",
  },
];

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
              پروژه‌ای برای چاپ دارید؟
              <br />
              از همین‌جا شروع کنیم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              فرقی نمی‌کند هنوز در مرحله بررسی ایده باشید یا فایل نهایی
              آماده داشته باشید. اطلاعات پروژه را برای ما بفرستید تا درباره
              روش چاپ، زمان اجرا و هزینه با هم صحبت کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid border-t border-black/10 md:grid-cols-3">
            {contactItems.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className="group border-b border-black/10 py-10 transition-opacity hover:opacity-60 md:border-l md:px-10 md:py-12 md:first:pr-0 md:last:border-l-0"
              >
                <span className="text-xs text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-8 text-2xl font-medium">
                  {item.title}
                </h2>

                <p className="mt-4 leading-8 text-black/50">
                  {item.value}
                </p>

                <span className="mt-7 block text-xl">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                برای استعلام قیمت
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                هرچه اطلاعات
                <br />
                دقیق‌تر باشد، پاسخ دقیق‌تر است.
              </h2>
            </div>

            <div className="text-lg leading-9 text-black/60">
              <p>
                اگر امکانش را دارید، نوع محصول، تعداد، ابعاد، جنس متریال،
                فایل یا طرح موردنظر و زمان تقریبی تحویل را در اختیار ما
                بگذارید.
              </p>

              <p className="mt-7">
                اگر هنوز همه این اطلاعات را ندارید، مشکلی نیست. همان چیزی
                که الان می‌دانید برای شروع کافی است.
              </p>

              <Link
                href="/استعلام-قیمت"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-like info */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              قبل از تماس
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              لازم نیست متخصص چاپ باشید.
            </h2>

            <p className="mt-9 text-lg leading-9 text-black/60">
              اگر نمی‌دانید چاپ سیلک بهتر است یا DTF، چه متریالی مناسب
              پروژه شماست یا برای تیراژ موردنظرتان چه روشی منطقی‌تر است،
              لازم نیست قبل از تماس جواب این سؤال‌ها را پیدا کنید.
            </p>

            <p className="mt-7 text-lg leading-9 text-black/60">
              اطلاعات پروژه را بفرستید. ما گزینه‌های مناسب را بررسی
              می‌کنیم و بر اساس شرایط پروژه پیشنهاد می‌دهیم.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                آماده‌اید؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                بیایید درباره پروژه‌تان
                <br />
                صحبت کنیم.
              </h2>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              شروع کنید
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
