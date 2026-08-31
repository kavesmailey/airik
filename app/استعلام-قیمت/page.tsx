import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "استعلام قیمت | AIRIK",
  description:
    "برای دریافت قیمت چاپ، مشخصات پروژه خود را برای AIRIK ارسال کنید.",
};

const fields = [
  {
    label: "نام و نام خانوادگی",
    type: "text",
    placeholder: "نام شما",
  },
  {
    label: "نام شرکت یا برند",
    type: "text",
    placeholder: "در صورت وجود",
  },
  {
    label: "شماره تماس",
    type: "tel",
    placeholder: "۰۹۱۲...",
  },
  {
    label: "ایمیل",
    type: "email",
    placeholder: "example@email.com",
  },
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
              پروژه‌تان را
              <br />
              برای ما تعریف کنید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              هرچه اطلاعات دقیق‌تری از پروژه داشته باشیم، می‌توانیم
              راهکار و برآورد دقیق‌تری ارائه کنیم. اگر هنوز همه جزئیات
              را نمی‌دانید، همان اطلاعات اولیه را ارسال کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.65fr_1.35fr] md:gap-28">
            {/* Intro */}
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                اطلاعات پروژه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-4xl">
                چند جزئیات،
                <br />
                برای شروع کافی است.
              </h2>

              <p className="mt-7 leading-8 text-black/55">
                نوع محصول، تعداد، ابعاد، متریال و زمان مورد نیاز مهم‌ترین
                اطلاعات برای بررسی سفارش هستند.
              </p>

              <div className="mt-12 border-t border-black/10">
                {[
                  "نوع محصول یا خدمات چاپ",
                  "تعداد یا تیراژ تقریبی",
                  "ابعاد",
                  "متریال مورد نظر",
                  "زمان مورد نیاز",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-5 border-b border-black/10 py-5"
                  >
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-black/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="border-t border-black/10">
              <div className="grid gap-x-8 md:grid-cols-2">
                {fields.map((field) => (
                  <label
                    key={field.label}
                    className="border-b border-black/10 py-7"
                  >
                    <span className="mb-3 block text-xs text-black/40">
                      {field.label}
                    </span>

                    <input
                      type={field.type}
                      name={field.label}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent text-base text-black outline-none placeholder:text-black/25"
                    />
                  </label>
                ))}
              </div>

              <label className="block border-b border-black/10 py-7">
                <span className="mb-3 block text-xs text-black/40">
                  نوع محصول یا خدمات چاپ
                </span>

                <select
                  name="service"
                  defaultValue=""
                  className="w-full appearance-none bg-transparent text-base text-black outline-none"
                >
                  <option value="" disabled>
                    انتخاب کنید
                  </option>
                  <option value="silk">چاپ سیلک</option>
                  <option value="dtf">چاپ DTF</option>
                  <option value="clothing">چاپ روی لباس</option>
                  <option value="fabric">چاپ روی پارچه</option>
                  <option value="bag">چاپ بگ</option>
                  <option value="carton">چاپ کارتن</option>
                  <option value="pizza-box">چاپ جعبه پیتزا</option>
                  <option value="paper-cup">چاپ لیوان کاغذی</option>
                  <option value="round-surfaces">چاپ ظروف گرد</option>
                  <option value="other">سایر</option>
                </select>
              </label>

              <div className="grid gap-x-8 md:grid-cols-2">
                <label className="block border-b border-black/10 py-7">
                  <span className="mb-3 block text-xs text-black/40">
                    تیراژ تقریبی
                  </span>

                  <input
                    type="text"
                    name="quantity"
                    placeholder="مثلاً ۵۰۰ عدد"
                    className="w-full bg-transparent text-base text-black outline-none placeholder:text-black/25"
                  />
                </label>

                <label className="block border-b border-black/10 py-7">
                  <span className="mb-3 block text-xs text-black/40">
                    زمان مورد نیاز
                  </span>

                  <input
                    type="text"
                    name="deadline"
                    placeholder="مثلاً دو هفته"
                    className="w-full bg-transparent text-base text-black outline-none placeholder:text-black/25"
                  />
                </label>
              </div>

              <label className="block border-b border-black/10 py-7">
                <span className="mb-3 block text-xs text-black/40">
                  توضیحات پروژه
                </span>

                <textarea
                  name="description"
                  rows={6}
                  placeholder="هر اطلاعاتی که درباره پروژه دارید بنویسید..."
                  className="w-full resize-none bg-transparent text-base leading-8 text-black outline-none placeholder:text-black/25"
                />
              </label>

              <label className="block border-b border-black/10 py-7">
                <span className="mb-3 block text-xs text-black/40">
                  لینک فایل یا نمونه
                </span>

                <input
                  type="url"
                  name="file"
                  placeholder="https://..."
                  dir="ltr"
                  className="w-full bg-transparent text-left text-base text-black outline-none placeholder:text-black/25"
                />
              </label>

              <div className="pt-8">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  ارسال درخواست
                  <span aria-hidden="true">↗</span>
                </button>

                <p className="mt-5 max-w-lg text-xs leading-6 text-black/35">
                  با ارسال این فرم، اطلاعات پروژه شما برای بررسی و
                  هماهنگی سفارش استفاده خواهد شد.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* If unsure */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-4xl">
              <p className="mb-7 text-sm font-medium text-black/40">
                هنوز مطمئن نیستید؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                لازم نیست روش چاپ را
                <br />
                از قبل بدانید.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-black/55">
                کافی است بگویید چه چیزی می‌خواهید تولید کنید. بر اساس
                محصول، تیراژ، متریال و کاربرد، گزینه‌های مناسب را
                بررسی می‌کنیم.
              </p>
            </div>

            <Link
              href="/خدمات"
              className="inline-flex w-fit items-center gap-3 text-sm text-black/60 transition-opacity hover:opacity-50"
            >
              مشاهده روش‌های چاپ
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-4 text-sm text-black/40">
                ترجیح می‌دهید مستقیم صحبت کنیم؟
              </p>

              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                با AIRIK تماس بگیرید.
              </h2>
            </div>

            <Link
              href="/تماس-با-ما"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
            >
              اطلاعات تماس
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
