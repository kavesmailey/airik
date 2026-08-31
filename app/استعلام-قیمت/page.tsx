export const metadata = {
  title: "استعلام قیمت | آیریک",
  description:
    "برای دریافت قیمت چاپ، مشخصات پروژه خود را برای آیریک ارسال کنید.",
};

export default function QuotePage() {
  return (
    <main dir="rtl">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              استعلام قیمت
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              پروژه‌تان را توضیح دهید.
              <br />
              قیمت را از ما بپرسید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              برای اینکه بتوانیم قیمت دقیق‌تری ارائه کنیم، هر اطلاعاتی که
              درباره پروژه دارید در اختیار ما بگذارید. اگر هنوز بعضی
              جزئیات مشخص نیست، مشکلی نیست؛ می‌توانید همان اطلاعات اولیه
              را ارسال کنید.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-28 md:px-10 md:py-40">
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
                className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/30 focus:border-black"
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
                placeholder="شماره تماس"
                className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/30 focus:border-black"
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
                className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-base outline-none transition-colors focus:border-black"
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
                <option value="round-container">چاپ ظروف گرد</option>
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
                className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/30 focus:border-black"
              />
            </div>

            <div>
              <label
                htmlFor="details"
                className="mb-3 block text-sm font-medium"
              >
                توضیحات پروژه
              </label>

              <textarea
                id="details"
                name="details"
                rows={6}
                placeholder="هر اطلاعاتی که درباره پروژه دارید بنویسید؛ ابعاد، جنس، طرح، زمان موردنظر و..."
                className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-4 text-base leading-8 outline-none transition-colors placeholder:text-black/30 focus:border-black"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                ارسال درخواست
                <span>↗</span>
              </button>

              <p className="mt-5 text-sm leading-7 text-black/40">
                بعد از بررسی اطلاعات، برای هماهنگی و اعلام قیمت با شما
                تماس خواهیم گرفت.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                یک نکته
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                هنوز نمی‌دانید
                <br />
                چه روشی مناسب است؟
              </h2>
            </div>

            <div className="text-lg leading-9 text-black/60">
              <p>
                لازم نیست قبل از ارسال درخواست، روش چاپ را مشخص کنید.
                کافی است محصول، تعداد و نیازتان را توضیح دهید. انتخاب روش
                مناسب می‌تواند بر اساس جنس، طرح، تیراژ و کاربرد نهایی انجام
                شود.
              </p>

              <p className="mt-7">
                اگر فایل یا نمونه‌ای هم دارید، در زمان هماهنگی می‌توانید
                آن را برای ما ارسال کنید.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
