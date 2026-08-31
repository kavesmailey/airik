import Link from "next/link";
import { blogPosts } from "@/content/blog";

export const metadata = {
  title: "مجله چاپ | آیریک",
  description:
    "راهنما، آموزش و مطالب کاربردی درباره چاپ، انتخاب روش چاپ، چاپ روی لباس و بسته‌بندی.",
};

export default function BlogPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              مجله آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              چیزهایی که قبل از چاپ
              <br />
              بهتر است بدانید.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-black/60 md:text-xl">
              انتخاب روش چاپ فقط یک تصمیم فنی نیست. اینجا درباره تکنیک‌های
              مختلف چاپ، کاربردها، محدودیت‌ها و نکاتی که به شما کمک می‌کنند
              انتخاب بهتری داشته باشید می‌نویسیم.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <p className="mb-5 text-sm font-medium text-black/45">
                آخرین مطالب
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                راهنمای چاپ
              </h2>
            </div>

            <span className="hidden text-sm text-black/40 md:block">
              {blogPosts.length} مطلب
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  href={`/وبلاگ/${post.slug}`}
                  className="block"
                >
                  <div className="relative mb-7 aspect-[16/10] overflow-hidden bg-[#f5f3ef]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium tracking-[0.15em] text-black/25">
                        AIRIK
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" />
                  </div>

                  <div className="flex items-center gap-3 text-xs text-black/40">
                    {post.category && <span>{post.category}</span>}
                    {post.category && post.date && (
                      <span>·</span>
                    )}
                    {post.date && <span>{post.date}</span>}
                  </div>

                  <h3 className="mt-4 text-xl font-medium leading-[1.5] tracking-tight transition-opacity group-hover:opacity-60 md:text-2xl">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="mt-4 line-clamp-3 text-base leading-8 text-black/50">
                      {post.excerpt}
                    </p>
                  )}

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    مطالعه مطلب
                    <span className="transition-transform group-hover:-translate-x-1">
                      ↗
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO / editorial section */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium text-black/45">
                چرا این مجله؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                قبل از سفارش، تصمیم درست بگیرید.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-lg leading-9 text-black/60">
                تفاوت روش‌های چاپ همیشه از روی ظاهرشان مشخص نیست. گاهی یک
                تکنیک برای تیراژ پایین مناسب‌تر است و گاهی همان تکنیک برای
                یک سفارش بزرگ، انتخاب اقتصادی خوبی نیست.
              </p>

              <p className="mt-6 text-lg leading-9 text-black/60">
                مطالب این بخش با همین نگاه نوشته شده‌اند؛ تا بتوانید قبل
                از سفارش، گزینه‌های مختلف را بشناسید و با اطلاعات بیشتری
                تصمیم بگیرید.
              </p>

              <Link
                href="/خدمات"
                className="mt-9 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-medium"
              >
                مشاهده خدمات چاپ
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="border-t border-black/10 pt-16 md:pt-20">
            <h2 className="max-w-4xl text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              جواب سؤال‌تان را پیدا نکردید؟
              <br />
              مستقیماً از ما بپرسید.
            </h2>

            <Link
              href="/تماس-با-ما"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              تماس با آیریک
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
