import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "استعلام قیمت | Ayric",
  description:
    "برای دریافت قیمت خدمات چاپ آیریک، مشخصات پروژه، تعداد و اطلاعات مورد نیاز را ارسال کنید.",
};

const projectTypes = [
  "چاپ روی لباس",
  "چاپ روی پارچه",
  "بسته‌بندی",
  "چاپ روی محصول",
  "اقلام تبلیغاتی",
  "چاپ کاغذ و مقوا",
  "سایر",
];

export default function QuotePage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              استعلام قیمت
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              مشخصات پروژه را
              <br />
              برای ما بفرستید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              برای اینکه بتوانیم قیمت دقیق‌تری ارائه کنیم، چند
              اطلاعات ساده درباره محصول، تعداد و زمان مورد نیاز از شما
              می‌خواهیم.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-20 md:grid-cols-[0.65fr_1.35fr] md:gap-28">
            {/* Intro */}
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                اطلاعات پروژه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-4xl">
                هرچه اطلاعات
                <br />
                دقیق‌تر باشد،
                <br />
                قیمت دقیق‌تر است.
              </h2>

              <p className="mt-8 leading-8 text-black/50">
                اگر بعضی از اطلاعات را هنوز نمی‌دانید، مشکلی نیست.
                همان چیزهایی که در اختیار دارید را وارد کنید.
              </p>

              <div className="mt-12 border-t border-black/10">
                {[
                  "نوع محصول",
                  "تعداد تقریبی",
                  "ابعاد",
                  "زمان مورد نیاز",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-b border-black/10 py-5"
                  >
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <form
                action="#"
                method="post"
                className="border-t border-black/10"
              >
                {/* Name + Phone */}
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
                      dir="ltr"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </label>
                </div>

                {/* Email */}
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

                {/* Project Type */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    نوع پروژه
                  </span>

                  <select
                    name="projectType"
                    defaultValue=""
                    required
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors focus:border-black"
                  >
                    <option value="" disabled>
                      انتخاب کنید
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                {/* Quantity */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    تعداد تقریبی
                  </span>

                  <input
                    type="text"
                    name="quantity"
                    placeholder="مثلاً ۵۰۰ عدد"
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                {/* Size */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    ابعاد
                  </span>

                  <input
                    type="text"
                    name="dimensions"
                    placeholder="مثلاً ۲۰ × ۳۰ سانتی‌متر"
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                {/* Deadline */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    زمان مورد نیاز
                  </span>

                  <input
                    type="text"
                    name="deadline"
                    placeholder="مثلاً تا پایان شهریور"
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                {/* Message */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    توضیحات پروژه
                  </span>

                  <textarea
                    name="message"
                    rows={7}
                    placeholder="هر اطلاعات دیگری که فکر می‌کنید برای برآورد قیمت مفید است..."
                    className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-4 text-base leading-8 outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                {/* File */}
                <div className="border-t border-black/10 py-8">
                  <label className="block">
                    <span className="mb-3 block text-sm text-black/50">
                      فایل پروژه
                    </span>

                    <input
                      type="file"
                      name="file"
                      className="block w-full text-sm text-black/50 file:ml-4 file:rounded-full file:border-0 file:bg-black file:px-5 file:py-3 file:text-sm file:text-white"
                    />

                    <span className="mt-3 block text-xs leading-6 text-black/35">
                      در صورت داشتن فایل طراحی، می‌توانید آن را ارسال
                      کنید.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <div className="border-t border-black/10 pt-8">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                  >
                    ارسال برای بررسی
                    <span aria-hidden="true">↗</span>
                  </button>

                  <p className="mt-5 max-w-lg text-xs leading-6 text-black/35">
                    اطلاعات ارسال‌شده صرفاً برای بررسی و برآورد پروژه
                    استفاده خواهد شد.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/40">
              سؤال دارید؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              اگر هنوز نمی‌دانید
              <br />
              چه چیزی لازم دارید،
              <br />
              با ما صحبت کنید.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/50">
              لازم نیست قبل از تماس، روش چاپ یا مشخصات فنی پروژه را
              بدانید. مسئله را توضیح دهید؛ برای انتخاب راهکار مناسب
              راهنمایی‌تان می‌کنیم.
            </p>

            <Link
              href="/تماس-با-ما"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
            >
              تماس با ما
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
