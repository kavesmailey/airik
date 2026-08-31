import Link from "next/link";

export const metadata = {
  title: "استعلام قیمت | آیریک",
  description:
    "برای دریافت قیمت چاپ، مشخصات سفارش خود را برای آیریک ارسال کنید.",
};

export default function QuotePage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              استعلام قیمت
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              پروژه‌تان را تعریف کنید.
              <br />
              قیمت را از ما بپرسید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              برای اینکه بتوانیم قیمت دقیق‌تری ارائه کنیم، چند اطلاعات
              ساده درباره سفارش‌تان لازم داریم. لازم نیست همه‌چیز را از
              قبل بدانید؛ اگر درباره روش چاپ مطمئن نیستید، ما راهنمایی‌تان
              می‌کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
          <div className="grid gap-16 md:grid-cols-[1fr_1.8fr] md:gap-24">
            <div>
              <p className="text-sm font-medium text-black/45">
                اطلاعات سفارش
              </p>

              <h2 className="mt-6 text-3xl font-medium leading-[1.4] tracking-tight">
                هرچه اطلاعات کامل‌تر باشد، برآورد دقیق‌تر است.
              </h2>

              <p className="mt-6 leading-8 text-black/55">
                اطلاعات اولیه را وارد کنید. پس از بررسی، برای ادامه سفارش
                با شما تماس می‌گیریم.
              </p>
            </div>

            <form className="space-y-10">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium"
                >
                  نام و نام خانوادگی
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="نام شما"
                  className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block text-sm font-medium"
                >
                  شماره تماس
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="مثلاً ۰۹۱۲۱۲۳۴۵۶۷"
                  className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-3 block text-sm font-medium"
                >
                  نوع خدمات
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-base outline-none focus:border-black"
                >
                  <option value="" disabled>
                    انتخاب کنید
                  </option>
                  <option value="silk">چاپ سیلک</option>
                  <option value="dtf">چاپ DTF</option>
                  <option value="clothing">چاپ روی لباس</option>
                  <option value="fabric">چاپ روی پارچه</option>
                  <option value="bag">چاپ بگ</option>
                  <option value="box">چاپ جعبه و بسته‌بندی</option>
                  <option value="other">سایر</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="mb-3 block text-sm font-medium"
                >
                  تعداد تقریبی
                </label>

                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  placeholder="مثلاً ۵۰۰ عدد"
                  className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="mb-3 block text-sm font-medium"
                >
                  توضیحات پروژه
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="هر اطلاعاتی که درباره سفارش دارید..."
                  className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-4 text-base leading-8 outline-none transition-colors placeholder:text-black/25 focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                ارسال درخواست
                <span>↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                هنوز سؤال دارید؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-4xl">
                لازم نیست قبل از تماس، متخصص چاپ باشید.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                اگر نمی‌دانید چه روشی برای سفارش شما مناسب است یا هنوز
                درباره جنس، تعداد و مشخصات اجرا تصمیم نگرفته‌اید، با ما
                تماس بگیرید. اطلاعات پروژه را بررسی می‌کنیم و گزینه‌های
                مناسب را توضیح می‌دهیم.
              </p>

              <Link
                href="/تماس-با-ما"
                className="mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-medium"
              >
                تماس با آیریک
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
