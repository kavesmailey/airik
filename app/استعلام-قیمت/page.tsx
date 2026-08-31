import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "استعلام قیمت | AIRIK",
  description:
    "برای دریافت قیمت چاپ، مشخصات پروژه خود را برای AIRIK ارسال کنید.",
};

export default function QuotePage() {
  return (
    <main dir="rtl">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <Link
              href="/"
              className="mb-10 inline-block text-sm text-black/45 transition-colors hover:text-black"
            >
              ← AIRIK
            </Link>

            <p className="mb-7 text-sm font-medium text-black/45">
              شروع پروژه
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              برای پروژه چاپی‌تان
              <br />
              قیمت بگیرید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              اطلاعاتی که درباره پروژه دارید برای ما بفرستید. اگر هنوز روش
              چاپ یا متریال مناسب را نمی‌دانید، مشکلی نیست؛ همین اطلاعات اولیه
              برای شروع بررسی کافی است.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                اطلاعات مورد نیاز
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-4xl">
                هرچه جزئیات بیشتری
                <br />
                داشته باشیم، دقیق‌تر.
              </h2>

              <p className="mt-6 leading-8 text-black/55">
                لازم نیست تمام مشخصات فنی را بدانید. نوع محصول، تعداد و
                کاربرد نهایی برای شروع کافی است.
              </p>
            </div>

            <form className="border-t border-black/10">
              <div className="grid gap-8 py-8 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-sm text-black/55">
                    نام / نام شرکت
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="w-full border-b border-black/20 bg-transparent px-0 py-4 outline-none transition-colors focus:border-black"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-sm text-black/55">
                    شماره تماس
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full border-b border-black/20 bg-transparent px-0 py-4 outline-none transition-colors focus:border-black"
                  />
                </label>
              </div>

              <div className="border-t border-black/10 py-8">
                <label className="block">
                  <span className="mb-3 block text-sm text-black/55">
                    نوع محصول
                  </span>
                  <input
                    type="text"
                    name="product"
                    placeholder="مثلاً بسته‌بندی، تیشرت، بگ، لیبل و..."
                    className="w-full border-b border-black/20 bg-transparent px-0 py-4 outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>
              </div>

              <div className="border-t border-black/10 py-8">
                <label className="block">
                  <span className="mb-3 block text-sm text-black/55">
                    تعداد تقریبی
                  </span>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="مثلاً ۵۰۰ عدد"
                    className="w-full border-b border-black/20 bg-transparent px-0 py-4 outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>
              </div>

              <div className="border-t border-black/10 py-8">
                <label className="block">
                  <span className="mb-3 block text-sm text-black/55">
                    توضیحات پروژه
                  </span>
                  <textarea
                    name="description"
                    rows={5}
                    placeholder="هر چیزی که درباره سفارش، ابعاد، متریال، زمان تحویل یا کاربرد محصول می‌دانید بنویسید."
                    className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-4 leading-8 outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>
              </div>

              <div className="border-t border-black/10 pt-8">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  ارسال درخواست
                  <span>↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="mb-4 text-xs text-black/40">محصول</p>
              <p className="leading-8 text-black/65">
                چه چیزی قرار است چاپ شود؟
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs text-black/40">تعداد</p>
              <p className="leading-8 text-black/65">
                چه تیراژی نیاز دارید؟
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs text-black/40">کاربرد</p>
              <p className="leading-8 text-black/65">
                محصول در نهایت کجا و چگونه استفاده می‌شود؟
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
