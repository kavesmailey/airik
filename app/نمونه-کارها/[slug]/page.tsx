import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects, getProject } from "@/content/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "پروژه پیدا نشد | Ayric",
    };
  }

  return {
    title: `${project.title} | Ayric`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <Link
            href="/نمونه-کارها"
            className="mb-12 inline-flex items-center gap-3 text-sm text-black/40 transition-opacity hover:opacity-60"
          >
            <span aria-hidden="true">→</span>
            بازگشت به نمونه‌کارها
          </Link>

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                {project.category}
              </p>

              <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-9 text-black/60">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Visual */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] bg-[#f5f3ef] p-8 md:min-h-[620px]">
            <div className="text-center">
              <span className="mb-5 block text-xs uppercase tracking-[0.2em] text-black/30">
                {project.category}
              </span>

              <span className="text-6xl font-medium tracking-tight text-black/10 md:text-9xl">
                {String(project.title).slice(0, 1)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                درباره پروژه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                یک مسئله،
                <br />
                یک راهکار مشخص.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-lg leading-9 text-black/60">
                {project.description}
              </p>

              <p className="text-lg leading-9 text-black/60">
                در این پروژه، راهکار نهایی بر اساس نیاز واقعی محصول،
                کاربرد، مخاطب و شرایط تولید شکل گرفته است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-16 md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              جزئیات
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
              پروژه در یک نگاه.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-3">
            <div className="border-b border-black/10 p-8 md:border-l md:p-10">
              <span className="mb-8 block text-xs text-black/30">
                01
              </span>

              <p className="mb-3 text-xs text-black/40">
                حوزه
              </p>

              <h3 className="text-xl font-medium">
                {project.category}
              </h3>
            </div>

            <div className="border-b border-black/10 p-8 md:border-l md:p-10">
              <span className="mb-8 block text-xs text-black/30">
                02
              </span>

              <p className="mb-3 text-xs text-black/40">
                نوع پروژه
              </p>

              <h3 className="text-xl font-medium">
                طراحی و تولید
              </h3>
            </div>

            <div className="border-b border-black/10 p-8 md:p-10">
              <span className="mb-8 block text-xs text-black/30">
                03
              </span>

              <p className="mb-3 text-xs text-black/40">
                همکاری
              </p>

              <h3 className="text-xl font-medium">
                Ayric
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                فرآیند
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                از مسئله
                <br />
                تا اجرا.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  title: "شناخت",
                  text: "نیاز، کاربرد و شرایط پروژه مشخص شد.",
                },
                {
                  title: "راهکار",
                  text: "روش مناسب برای رسیدن به خروجی مورد نظر انتخاب شد.",
                },
                {
                  title: "طراحی",
                  text: "جزئیات بصری و فنی پروژه توسعه پیدا کرد.",
                },
                {
                  title: "تولید",
                  text: "خروجی نهایی برای تولید و استفاده آماده شد.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-6 border-b border-black/10 py-8 md:grid-cols-[80px_0.7fr_1.3fr] md:items-center md:py-10"
                >
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xl font-medium">
                    {step.title}
                  </h3>

                  <p className="leading-8 text-black/50">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-12">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="mb-5 text-sm font-medium text-black/40">
                پروژه‌های دیگر
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                بیشتر ببینید.
              </h2>
            </div>

            <Link
              href="/نمونه-کارها"
              className="hidden text-sm text-black/50 transition-opacity hover:opacity-60 md:block"
            >
              همه پروژه‌ها ↗
            </Link>
          </div>

          <div className="border-t border-black/10">
            {projects
              .filter((item) => item.slug !== project.slug)
              .slice(0, 3)
              .map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/نمونه-کارها/${item.slug}`}
                  className="group flex items-center justify-between gap-8 border-b border-black/10 py-8 transition-opacity hover:opacity-60"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="mb-2 text-xs text-black/40">
                        {item.category}
                      </p>

                      <h3 className="text-xl font-medium">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform group-hover:-translate-x-1"
                  >
                    ↗
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              پروژه بعدی
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              پروژه شما
              <br />
              از کجا شروع می‌شود؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات پروژه چاپی خود را ارسال کنید تا درباره بهترین
              راهکار برای تولید آن صحبت کنیم.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/تماس-با-ما"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm text-white transition-colors hover:border-white"
              >
                تماس با ما
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
