import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { businessSolutions } from "@/content/business";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getBusiness(slug: string) {
  return businessSolutions.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return businessSolutions.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) {
    return {
      title: "AIRIK",
    };
  }

  return {
    title: `${business.title} | AIRIK`,
    description:
      business.description ||
      `راهکارهای چاپ AIRIK برای ${business.title}.`,
  };
}

export default async function BusinessDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const business = getBusiness(slug);

  if (!business) {
    notFound();
  }

  const title = business.title;
  const description =
    business.description ||
    `راهکارهای چاپ متناسب با نیازهای ${title}.`;

  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <Link
              href="/برای-کسب-و-کارها"
              className="mb-10 inline-flex items-center gap-3 text-sm text-black/40 transition-opacity hover:opacity-60"
            >
              <span aria-hidden="true">→</span>
              راهکارهای کسب‌وکار
            </Link>

            <p className="mb-8 text-sm font-medium text-black/40">
              راهکار چاپ
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              چاپ برای
              <br />
              {title}
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              {description}
            </p>

            <div className="mt-10">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                مسئله اصلی
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چاپ باید با
                <br />
                کسب‌وکار هماهنگ باشد.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                برای {title}، انتخاب روش چاپ فقط به ظاهر محصول محدود
                نمی‌شود. تیراژ، دفعات سفارش، نوع استفاده، متریال و
                زمان‌بندی همگی روی نتیجه نهایی تأثیر دارند.
              </p>

              <p className="mt-8 text-lg leading-9 text-black/60">
                هدف این است که راهکار چاپی انتخاب شود که هم با نیاز
                واقعی پروژه سازگار باشد و هم بتواند در تولیدهای بعدی
                با ثبات تکرار شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              کاربردهای پیشنهادی
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              از نیاز روزمره
              <br />
              تا نقاط تماس برند.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {[
              {
                title: "بسته‌بندی",
                text: "جعبه، بسته‌بندی و اقلامی که محصول را در نقطه تماس با مشتری معرفی می‌کنند.",
              },
              {
                title: "لباس و پارچه",
                text: "چاپ روی لباس، پارچه و محصولات پوشیدنی با توجه به جنس و کاربرد.",
              },
              {
                title: "اقلام تبلیغاتی",
                text: "محصولات و متریال‌هایی برای کمپین‌ها، رویدادها و ارتباطات برند.",
              },
              {
                title: "اقلام روزمره",
                text: "محصولات چاپی که به‌صورت مداوم در عملیات روزانه کسب‌وکار استفاده می‌شوند.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border-b border-black/10 p-8 md:p-10"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-black/25">↗</span>
                </div>

                <h3 className="text-2xl font-medium tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-black/50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                خدمات AIRIK
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                آنچه می‌توانیم
                <br />
                برایتان تولید کنیم.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                "چاپ روی لباس و پارچه",
                "چاپ بسته‌بندی",
                "چاپ روی محصولات",
                "چاپ تبلیغاتی",
                "تولید سفارش‌های تیراژ بالا",
                "سفارش‌های مستمر سازمانی",
              ].map((service, index) => (
                <Link
                  key={service}
                  href="/خدمات"
                  className="group flex items-center justify-between gap-6 border-b border-black/10 py-7 transition-opacity hover:opacity-60"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg font-medium">
                      {service}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-x-1"
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              فرآیند
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              ساده، شفاف،
              <br />
              قابل پیش‌بینی.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {[
              [
                "نیاز",
                "مشخصات محصول، تعداد و کاربرد را بررسی می‌کنیم.",
              ],
              [
                "راهکار",
                "روش چاپ و متریال مناسب برای پروژه مشخص می‌شود.",
              ],
              [
                "تأیید",
                "جزئیات سفارش و خروجی مورد انتظار نهایی می‌شود.",
              ],
              [
                "تولید",
                "سفارش بر اساس مشخصات تأییدشده تولید می‌شود.",
              ],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="grid gap-6 border-b border-black/10 py-9 md:grid-cols-[90px_0.8fr_1.2fr] md:items-center md:py-12"
              >
                <span className="text-xs text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-medium md:text-2xl">
                  {title}
                </h3>

                <p className="leading-8 text-black/50">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                سوالات متداول
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چیزهایی که
                <br />
                احتمالاً می‌پرسید.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  q: `برای ${title} چه روش چاپی مناسب‌تر است؟`,
                  a: "روش مناسب به نوع محصول، متریال، تعداد و کاربرد بستگی دارد. پس از دریافت مشخصات پروژه می‌توان گزینه مناسب را تعیین کرد.",
                },
                {
                  q: "آیا سفارش مستمر امکان‌پذیر است؟",
                  a: "بله. سفارش‌های مستمر کسب‌وکارها را می‌توان بر اساس نیاز و تیراژ مورد بررسی قرار داد.",
                },
                {
                  q: "برای شروع چه اطلاعاتی لازم است؟",
                  a: "نوع محصول، تعداد تقریبی، ابعاد و زمان مورد نیاز برای شروع کافی است.",
                },
              ].map((item, index) => (
                <details
                  key={item.q}
                  className="group border-b border-black/10"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-medium leading-8">
                        {item.q}
                      </span>
                    </div>

                    <span className="text-xl text-black/40 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="pb-8 pr-9 leading-8 text-black/55 md:pr-10">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              شروع پروژه
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              برای {title}
              <br />
              چیزی در ذهن دارید؟
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              مشخصات پروژه را برای ما ارسال کنید تا درباره روش چاپ،
              تیراژ و زمان‌بندی مناسب صحبت کنیم.
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
