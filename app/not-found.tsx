import Link from "next/link";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex min-h-[calc(100vh-6rem)] items-center"
    >
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <div>
              <span className="text-[8rem] font-medium leading-none tracking-[-0.08em] text-black/10 md:text-[12rem]">
                404
              </span>
            </div>

            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                صفحه پیدا نشد
              </p>

              <h1 className="max-w-3xl text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl">
                اینجا چیزی
                <br />
                برای دیدن نیست.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-9 text-black/50">
                آدرسی که وارد کرده‌اید وجود ندارد یا ممکن است صفحه
                موردنظر جابه‌جا شده باشد.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  بازگشت به خانه
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/خدمات"
                  className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
                >
                  مشاهده خدمات
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
