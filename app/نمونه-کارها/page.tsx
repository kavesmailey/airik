import type { Metadata } from "next";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "نمونه‌کارهای چاپ آیریک | پروژه‌های چاپ و تولید",
  description:
    "نمونه‌کارهای آیریک در زمینه چاپ و تولید برای برندها و کسب‌وکارها؛ شامل چاپ پوشاک، بسته‌بندی، رستوران، کافه، پروژه‌های سازمانی و محصولات تبلیغاتی.",
  alternates: {
    canonical: "/نمونه-کارها",
  },
  openGraph: {
    title: "نمونه‌کارهای چاپ آیریک",
    description:
      "نگاهی به پروژه‌های چاپ و تولید آیریک برای برندها و کسب‌وکارها.",
    type: "website",
  },
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export default function ProjectsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خانه",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "نمونه‌کارها",
        item: "/نمونه-کارها",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "نمونه‌کارهای چاپ آیریک",
    description:
      "مجموعه‌ای از پروژه‌های چاپ و تولید آیریک برای برندها و کسب‌وکارها.",
    url: "/نمونه-کارها",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.description,
      })),
    },
  };

  return (
    <main dir="rtl" className="overflow-hidden">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />

      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12 lg:py-40">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs font-medium tracking-wide text-black/40 sm:text-sm">
              نمونه‌کارهای آیریک
            </p>

            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[1.12] tracking-[-0.045em]">
              چیزهایی که
              <br />
              ساخته‌ایم.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/55 sm:mt-10 sm:text-lg sm:leading-9">
              مجموعه‌ای از پروژه‌های چاپ و تولید آیریک برای
              برندها، کسب‌وکارها و مجموعه‌های مختلف؛ از پوشاک و
              بسته‌بندی تا اقلام تبلیغاتی و سازمانی.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER / GEO */}
      <section className="border-b border-black/10 bg-[#f7f5f1]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-medium text-black/40 sm:text-sm">
              درباره نمونه‌کارها
            </p>

            <p className="text-lg leading-9 text-black/65 sm:text-xl">
              آیریک در زمینه چاپ و تولید برای برندها و کسب‌وکارها
              فعالیت می‌کند و پروژه‌هایی در حوزه پوشاک، بسته‌بندی،
              رستوران و کافه، پروژه‌های سازمانی و محصولات تبلیغاتی
              انجام می‌دهد.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section aria-labelledby="projects-heading">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="mb-12 flex items-end justify-between gap-8 sm:mb-16">
            <div>
              <p className="mb-4 text-xs font-medium text-black/40 sm:text-sm">
                پروژه‌ها
              </p>

              <h2
                id="projects-heading"
                className="text-2xl font-medium tracking-[-0.025em] sm:text-3xl md:text-4xl"
              >
                انتخابی از کارهای ما
              </h2>
            </div>

            <span className="hidden text-xs text-black/30 sm:block">
              {String(projects.length).padStart(2, "0")} پروژه
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:gap-y-20 md:grid-cols-2 md:gap-y-24">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="group"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div
                  className={[
                    "relative aspect-[4/3] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]",
                    index % 3 === 0
                      ? "bg-[#e7e2d4]"
                      : index % 3 === 1
                        ? "bg-[#d0d5ec]"
                        : "bg-[#ead8c5]",
                  ].join(" ")}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} — نمونه‌کار چاپ آیریک`}
                      loading={index < 2 ? "eager" : "lazy"}
                      itemProp="image"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-center transition-transform duration-700 ease-out group-hover:scale-105">
                        <span className="block text-[9px] font-medium tracking-[0.4em] text-black/30 sm:text-[10px]">
                          AYRIC
                        </span>

                        <span className="mt-4 block text-[5rem] font-medium leading-none tracking-[-0.08em] text-black/10 sm:text-8xl">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
                    <span
                      className="inline-flex rounded-full bg-white/70 px-3 py-1.5 text-[10px] text-black/55 shadow-sm backdrop-blur-md sm:text-[11px]"
                      itemProp="about"
                    >
                      {project.category}
                    </span>
                  </div>

                  <span className="absolute left-4 top-4 text-[10px] text-black/30 sm:left-5 sm:top-5 sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-5 sm:mt-6">
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <h3
                        className="text-lg font-medium tracking-[-0.02em] sm:text-xl md:text-2xl"
                        itemProp="name"
                      >
                        {project.title}
                      </h3>

                      <p
                        className="mt-2.5 max-w-xl text-sm leading-7 text-black/50 sm:mt-3"
                        itemProp="description"
                      >
                        {project.description}
                      </p>
                    </div>

                    <span className="shrink-0 pt-1 text-[10px] text-black/25 sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-black/10 bg-[#f7f5f1]">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:gap-32">
            <div>
              <p className="mb-5 text-xs font-medium text-black/40 sm:text-sm">
                نگاه آیریک
              </p>

              <h2 className="text-3xl font-medium leading-[1.35] tracking-[-0.035em] sm:text-4xl md:text-5xl">
                چاپ فقط خروجی نیست؛
                <br />
                بخشی از تجربه است.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-black/60 sm:text-lg sm:leading-9">
                از انتخاب متریال و روش چاپ تا جزئیات اجرای نهایی،
                هر تصمیم روی چیزی که در دست مخاطب قرار می‌گیرد
                تأثیر می‌گذارد.
              </p>

              <p className="mt-6 text-base leading-8 text-black/60 sm:text-lg sm:leading-9">
                هدف ما این است که کیفیت اجرای چاپ با نیاز واقعی
                پروژه هماهنگ باشد؛ چه برای یک محصول پوشیدنی، چه
                بسته‌بندی، اقلام یک کسب‌وکار یا محصولات تبلیغاتی.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-LIKE SEO CONTENT */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-medium text-black/40 sm:text-sm">
              سوالات متداول
            </p>

            <div className="divide-y border-y border-black/10">
              <details className="py-7">
                <summary className="cursor-pointer text-lg font-medium sm:text-xl">
                  چه نوع پروژه‌هایی در نمونه‌کارهای آیریک وجود دارد؟
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-8 text-black/55 sm:text-base">
                  نمونه‌کارهای آیریک شامل پروژه‌های چاپ برای پوشاک،
                  بسته‌بندی، رستوران، کافه، مجموعه‌های سازمانی و
                  محصولات تبلیغاتی است.
                </p>
              </details>

              <details className="py-7">
                <summary className="cursor-pointer text-lg font-medium sm:text-xl">
                  آیا آیریک برای برندها و کسب‌وکارها هم چاپ انجام می‌دهد؟
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-8 text-black/55 sm:text-base">
                  بله. خدمات آیریک برای برندها، کسب‌وکارها و مجموعه‌هایی
                  طراحی شده است که به چاپ و تولید اقلام مختلف نیاز دارند.
                </p>
              </details>

              <details className="py-7">
                <summary className="cursor-pointer text-lg font-medium sm:text-xl">
                  آیا امکان سفارش پروژه مشابه نمونه‌کارها وجود دارد؟
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-8 text-black/55 sm:text-base">
                  بله. برای بررسی امکان اجرا، کافی است مشخصات محصول،
                  تعداد، ابعاد و فایل طرح را ارسال کنید تا روش مناسب
                  چاپ و جزئیات تولید بررسی شود.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1917] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-medium text-white/40 sm:text-sm">
              پروژه شما
            </p>

            <h2 className="text-3xl font-medium leading-[1.35] tracking-[-0.035em] sm:text-4xl md:text-5xl lg:text-6xl">
              پروژه بعدی‌تان را
              <br />
              با ما شروع کنید.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg sm:leading-9">
              مشخصات پروژه‌تان را برای ما بفرستید تا درباره روش
              اجرا و هزینه با شما صحبت کنیم.
            </p>

            <a
              href="/استعلام-قیمت"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span>استعلام قیمت</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
