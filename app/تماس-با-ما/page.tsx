import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تماس با ما | Ayric",
  description:
    "برای دریافت مشاوره، ثبت سفارش و استعلام قیمت خدمات چاپ با آیریک در ارتباط باشید.",
};

export default function ContactPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              تماس با آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              درباره پروژه‌تان
              <br />
              صحبت کنیم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              برای استعلام قیمت، دریافت مشاوره یا شروع یک سفارش چاپی،
              اطلاعات پروژه‌تان را برای ما ارسال کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-20 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            {/* Contact Info */}
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                اطلاعات تماس
              </p>

              <div className="border-t border-black/10">
                <div className="border-b border-black/10 py-7">
                  <p className="mb-3 text-xs text-black/40">
                    تلفن
                  </p>

                  <a
                    href="tel:+9821XXXXXXXX"
                    className="text-lg font-medium transition-opacity hover:opacity-60"
                    dir="ltr"
                  >
                    +98 21 XXX XXXX
                  </a>
                </div>

                <div className="border-b border-black/10 py-7">
                  <p className="mb-3 text-xs text-black/40">
                    ایمیل
                  </p>

                  <a
                    href="mailto:hello@ayric.ir"
                    className="text-lg font-medium transition-opacity hover:opacity-60"
                    dir="ltr"
                  >
                    hello@ayric.ir
                  </a>
                </div>

                <div className="border-b border-black/10 py-7">
                  <p className="mb-3 text-xs text-black/40">
                    ساعات پاسخگویی
                  </p>

                  <p className="text-lg font-medium">
                    شنبه تا پنجشنبه
                    <br />
                    ۹:۰۰ تا ۱۸:۰۰
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                درخواست شما
              </p>

              <form
                action="#"
                method="post"
                className="border-t border-black/10"
              >
                <div className="grid gap-8 py-8 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-sm text-black/50">
                      نام و نام خانوادگی
                    </span>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="نام شما"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-black/50">
                      شماره تماس
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="۰۹۱۲..."
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </label>
                </div>

                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    ایمیل
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    dir="ltr"
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    نوع پروژه
                  </span>

                  <select
                    name="projectType"
                    defaultValue=""
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors focus:border-black"
                  >
                    <option value="" disabled>
                      انتخاب کنید
                    </option>

                    <option value="packaging">
                      بسته‌بندی
                    </option>

                    <option value="clothing">
                      چاپ روی لباس
                    </option>

                    <option value="fabric">
                      چاپ روی پارچه
                    </option>

                    <option value="product">
                      چاپ روی محصول
                    </option>

                    <option value="advertising">
                      اقلام تبلیغاتی
                    </option>

                    <option value="other">
                      سایر
                    </option>
                  </select>
                </label>

                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    توضیحات پروژه
                  </span>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="کمی درباره پروژه، تعداد و زمان مورد نیاز بنویسید..."
                    className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-4 text-base leading-8 outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                <div className="border-t border-black/10 pt-8">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                  >
                    ارسال درخواست
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                استعلام قیمت
              </p>

              <h2 className="max-w-4xl text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                اگر فقط قیمت می‌خواهید،
                <br />
                از اینجا شروع کنید.
              </h2>

              <p className="mt-7 max-w-2xl leading-8 text-black/50">
                برای دریافت قیمت دقیق‌تر، مشخصات محصول، تعداد و ابعاد
                تقریبی را ارسال کنید.
              </p>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                قبل از تماس
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چند سؤال
                <br />
                متداول.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  q: "برای دریافت قیمت چه اطلاعاتی لازم است؟",
                  a: "نوع محصول، تعداد تقریبی، ابعاد، متریال در صورت مشخص بودن و زمان مورد نیاز برای شروع کافی است.",
                },
                {
                  q: "اگر روش چاپ مناسب را ندانیم چه؟",
                  a: "اشکالی ندارد. کافی است محصول و کاربرد آن را توضیح دهید؛ روش مناسب چاپ را می‌توان بر اساس مشخصات پروژه پیشنهاد کرد.",
                },
                {
                  q: "آیا امکان سفارش برای کسب‌وکارها وجود دارد؟",
                  a: "بله. سفارش‌های سازمانی و تولیدهای مستمر نیز قابل بررسی هستند.",
                },
              ].map((item, index) => (
                <details
                  key={item.q}
                  className="group border-b border-black/10"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-medium leading-8">
                        {item.q}
                      </span>
                    </div>

                    <span className="text-xl text-black/40 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="pb-8 pr-9 leading-8 text-black/50 md:pr-10">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
