import Link from "next/link";

export const metadata = {
  title: "نمونه‌کارها | آیریک",
  description:
    "نمونه‌ای از پروژه‌های چاپ آیریک برای برندها، کسب‌وکارها و محصولات مختلف.",
};

const projects = [
  {
    number: "۰۱",
    title: "پروژه‌های چاپ روی لباس",
    category: "پوشاک و پارچه",
    description:
      "اجرای طرح‌های مختلف روی تیشرت، لباس و محصولات پوشیدنی با توجه به جنس و نوع طرح.",
  },
  {
    number: "۰۲",
    title: "پروژه‌های بسته‌بندی",
    category: "بسته‌بندی",
    description:
      "چاپ روی جعبه، کارتن و دیگر اقلام بسته‌بندی برای برندهایی که بسته‌بندی بخشی از تجربه محصول است.",
  },
  {
    number: "۰۳",
    title: "پروژه‌های چاپ تبلیغاتی",
    category: "برندینگ",
    description:
      "اجرای هویت بصری برند روی محصولات و اقلام چاپی مورد استفاده در کمپین‌ها و فعالیت‌های تبلیغاتی.",
  },
];

export default function PortfolioPage() {
  return (
    <main dir="rtl">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              نمونه‌کارها
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              چیزی که چاپ می‌کنیم،
              <br />
              در دنیای واقعی دیده می‌شود.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              هر پروژه چاپ، بخشی از تجربه یک محصول یا برند است. در اینجا
              نمونه‌ای از پروژه‌ها و زمینه‌هایی را می‌بینید که آیریک در
              آن‌ها فعالیت می‌کند.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              پروژه‌ها
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              بخشی از کارهای آیریک
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {projects.map((project, index) => (
              <article key={project.number}>
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs text-black/35">
                    {project.number}
                  </span>

                  <span className="text-xs text-black/40">
                    {project.category}
                  </span>
                </div>

                <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-[#eeeae3]">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm text-black/25">
                      تصویر پروژه {index + 1}
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-16">
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="max-w-xl leading-8 text-black/55">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                یک پروژه جدید
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                پروژه بعدی می‌تواند
                <br />
                اینجا باشد.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                اگر برای محصول، برند یا کسب‌وکارتان به خدمات چاپ نیاز دارید،
                جزئیات پروژه را برای ما بفرستید. لازم نیست از قبل بدانید
                دقیقاً کدام روش چاپ مناسب است؛ اطلاعات اولیه را بفرستید تا
                بررسی کنیم.
              </p>

              <Link
                href="/استعلام-قیمت"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                شروع یک پروژه
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
