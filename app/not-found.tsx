import Link from "next/link";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="flex min-h-[70vh] items-center"
    >
      <section className="mx-auto w-full max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-8 text-sm font-medium text-black/40">
            404
          </p>

          <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
            این صفحه پیدا نشد.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-black/55">
            ممکن است آدرس صفحه تغییر کرده باشد یا صفحه‌ای که دنبال آن هستید
            دیگر وجود نداشته باشد.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              بازگشت به خانه
              <span>↗</span>
            </Link>

            <Link
              href="/خدمات"
              className="inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              مشاهده خدمات
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
