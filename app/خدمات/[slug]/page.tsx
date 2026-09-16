import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { services, getServiceBySlug } from "@/content/services";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IconArrow from "@/components/ui/IconArrow";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return {
    title: service.meta.title,
    description: service.meta.description,
    alternates: {
      canonical: `/خدمات/${service.slug}`,
    },
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      type: "article",
      url: `/خدمات/${service.slug}`,
      images: service.image
        ? [
            {
              url: service.image,
              alt: service.title,
            },
          ]
        : undefined,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServiceSlugs
    ? services.filter((item) =>
        service.relatedServiceSlugs.includes(item.slug)
      )
    : [];

  return (
    <main className="overflow-hidden bg-white text-[#022F12]">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Reveal direction="right">
                <Link
                  href="/خدمات"
                  className="group inline-flex items-center gap-3 text-sm font-medium text-[#022F12]/60 transition-colors hover:text-[#022F12]"
                >
                  <IconArrow
                    direction="right"
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  <span>همه خدمات</span>
                </Link>
              </Reveal>

              <Reveal direction="up" delay={120}>
                <p className="mt-10 text-sm font-medium text-[#8BC53D] sm:text-base">
                  خدمات چاپ آیریک
                </p>
              </Reveal>

              <Reveal direction="up" delay={200}>
                <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.2] tracking-tight text-[#021408] sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
              </Reveal>

              <Reveal direction="up" delay={280}>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#022F12]/65 sm:text-lg">
                  {service.shortDescription}
                </p>
              </Reveal>
            </div>

            <Reveal direction="left" delay={180}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#E4F0CC]">
                <ParallaxImage
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full"
                  strength={14}
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="border-t border-[#022F12]/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal direction="right">
              <div>
                <span className="text-sm font-medium text-[#8BC53D]">
                  درباره این خدمت
                </span>

                <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight text-[#021408] sm:text-4xl">
                  چاپی که با پروژه شما شروع می‌شود.
                </h2>
              </div>
            </Reveal>

            <Reveal direction="left" delay={120}>
              <div className="max-w-3xl">
                <p className="text-lg leading-9 text-[#022F12]/75 sm:text-xl sm:leading-10">
                  {service.fullDescription}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Applications */}
      {service.applications?.length > 0 && (
        <section className="bg-[#E4F0CC]">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
            <Reveal direction="up">
              <div className="max-w-2xl">
                <span className="text-sm font-medium text-[#8BC53D]">
                  کاربردها
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#021408] sm:text-4xl">
                  این خدمت برای چه پروژه‌هایی مناسب است؟
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[#022F12]/10 bg-[#022F12]/10 sm:grid-cols-2 lg:grid-cols-3">
              {service.applications.map((application, index) => (
                <Reveal
                  key={application}
                  direction="up"
                  delay={index * 70}
                  className="h-full"
                >
                  <div className="flex h-full min-h-[150px] flex-col justify-between bg-white p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-8">
                    <span className="text-sm font-medium text-[#8BC53D]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-10 text-lg font-medium leading-8 text-[#022F12]">
                      {application}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits?.length > 0 && (
        <section>
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <Reveal direction="right">
                <div>
                  <span className="text-sm font-medium text-[#8BC53D]">
                    مزایا
                  </span>

                  <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#021408] sm:text-4xl">
                    چرا این روش؟
                  </h2>
                </div>
              </Reveal>

              <div className="border-t border-[#022F12]/10">
                {service.benefits.map((benefit, index) => (
                  <Reveal
                    key={benefit}
                    direction="up"
                    delay={index * 80}
                  >
                    <div className="grid gap-4 border-b border-[#022F12]/10 py-7 sm:grid-cols-[80px_1fr] sm:items-start">
                      <span className="text-sm font-medium text-[#8BC53D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-lg leading-8 text-[#022F12]">
                        {benefit}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Suitable For */}
      {service.suitableFor?.length > 0 && (
        <section className="bg-[#021408] text-white">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <Reveal direction="right">
                <div>
                  <span className="text-sm font-medium text-[#8BC53D]">
                    مناسب برای
                  </span>

                  <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    پروژه‌هایی که جزئیات در آن‌ها مهم است.
                  </h2>
                </div>
              </Reveal>

              <div className="grid gap-0 border-t border-white/15 sm:grid-cols-2">
                {service.suitableFor.map((item, index) => (
                  <Reveal
                    key={item}
                    direction="up"
                    delay={index * 70}
                  >
                    <div className="border-b border-white/15 p-6 sm:p-8">
                      <span className="text-sm font-medium text-[#8BC53D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-8 text-lg leading-8 text-white/85">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section>
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
            <Reveal direction="up">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <span className="text-sm font-medium text-[#8BC53D]">
                    خدمات مرتبط
                  </span>

                  <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#021408] sm:text-4xl">
                    شاید این‌ها هم برای پروژه شما مناسب باشند.
                  </h2>
                </div>

                <Link
                  href="/خدمات"
                  className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-[#022F12]"
                >
                  <span>مشاهده همه خدمات</span>

                  <IconArrow
                    direction="left"
                    size={20}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedService, index) => (
                <Reveal
                  key={relatedService.slug}
                  direction="up"
                  delay={index * 80}
                >
                  <Link
                    href={`/خدمات/${relatedService.slug}`}
                    className="group flex min-h-[180px] flex-col justify-between rounded-3xl border border-[#022F12]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#8BC53D]/50 hover:bg-[#E4F0CC] sm:p-8"
                  >
                    <span className="text-sm font-medium text-[#8BC53D]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-end justify-between gap-5">
                      <h3 className="text-xl font-semibold leading-8 text-[#022F12]">
                        {relatedService.title}
                      </h3>

                      <IconArrow
                        direction="left"
                        size={20}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                      />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="px-5 pb-5 sm:px-6 sm:pb-6 lg:px-10 lg:pb-10">
        <div className="group relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#8BC53D] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <Reveal direction="up">
              <span className="text-sm font-medium text-[#022F12]">
                برای شروع پروژه
              </span>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <h2 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight text-[#021408] sm:text-5xl lg:text-6xl">
                درباره پروژه‌تان با ما صحبت کنید.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={180}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#022F12]/75 sm:text-lg">
                جزئیات پروژه را برای ما ارسال کنید تا بر اساس نوع محصول،
                روش چاپ و نیاز پروژه بررسی شود.
              </p>
            </Reveal>

            <Reveal direction="up" delay={260}>
              <Link
                href="/استعلام-قیمت"
                className="group/cta mt-9 inline-flex items-center gap-4 rounded-full bg-[#021408] px-7 py-4 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <span>استعلام قیمت</span>

                <IconArrow
                  direction="up-left"
                  size={20}
                  className="transition-transform duration-300 group-hover/cta:-translate-y-1 group-hover/cta:-translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[1px] border-[#022F12]/15 transition-transform duration-700 group-hover:-translate-y-10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[1px] border-[#022F12]/10"
          />
        </div>
      </section>
    </main>
  );
}
