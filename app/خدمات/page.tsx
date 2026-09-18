"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import IconArrow from "@/components/ui/IconArrow";
import { services } from "@/content/services";
import { toPersianDigits } from "@/lib/format";

const featuredSlugs = [
  "چاپ-سیلک",
  "چاپ-dtf",
  "توری-کشی-و-عکاسی",
  "ساخت-شابلون-چاپ-سیلک",
];

const serviceImages: Record<string, string> = {
  "چاپ-سیلک": "/images/services/silk-print.jpg",
  "چاپ-dtf": "/images/services/dtf-print.jpg",
  "چاپ-روی-لباس": "/images/services/clothing-print.jpg",
  "چاپ-بگ": "/images/services/bag-print.jpg",
  "چاپ-کارتن": "/images/services/carton-print.jpg",
  "چاپ-جعبه-پیتزا": "/images/services/pizza-box-print.jpg",
  "چاپ-لیوان-کاغذی": "/images/services/paper-cup-print.jpg",
  "چاپ-ظروف-گرد": "/images/services/round-container-print.jpg",
  "چاپ-روی-تیشرت": "/images/services/tshirt-print.jpg",
  "چاپ-روی-پارچه": "/images/services/fabric-print.jpg",
  "ساخت-شابلون-چاپ-سیلک": "/images/services/silk-stencil.jpg",
  "توری-کشی-و-عکاسی": "/images/services/screen-preparation.jpg",
  "طراحی-اختصاصی-چاپ-سیلک":
    "/images/services/custom-silk-design.jpg",
  "چاپ-کیسه-پارچه-ای": "/images/services/fabric-bag-print.jpg",
  "چاپ-نایلون": "/images/services/nylon-print.jpg",
  "تولید-و-چاپ-توت-بگ": "/images/services/tote-bag-print.jpg",
  "چاپ-لیوان": "/images/services/mug-print.jpg",
  "چاپ-روی-فلز": "/images/services/metal-print.jpg",
  "چاپ-روی-چوب": "/images/services/wood-print.jpg",
  "چاپ-روی-استیل": "/images/services/steel-print.jpg",
  "چاپ-روی-پلکسی": "/images/services/plexiglass-print.jpg",
};

export default function ServicesPage() {
  const featuredServices = services.filter((service) =>
    featuredSlugs.includes(service.slug)
  );

  const otherServices = services.filter(
    (service) => !featuredSlugs.includes(service.slug)
  );

  return (
    <main className="overflow-hidden bg-white text-[#022F12]">
      {/* Intro */}
      <section className="container mx-auto px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-44">
        <Reveal direction="up">
          <p className="mb-5 text-sm font-medium text-[#8BC53D]">
            خدمات آیریک
          </p>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h1
            className="max-w-4xl text-4xl font-semibold tracking-[-0.025em] text-[#021408] sm:text-5xl lg:text-6xl"
            style={{ lineHeight: 1.3 }}
          >
            راهکارهای چاپی
            <br />
            برای هر نوع محصول.
          </h1>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#022F12]/65 sm:text-lg">
            از چاپ سیلک و DTF تا چاپ روی پوشاک، بسته‌بندی و محصولات مختلف؛
            راهکار مناسب را بر اساس نیاز پروژه پیدا کنید.
          </p>
        </Reveal>
      </section>

      {/* Featured Services */}
      <section className="container mx-auto px-5 pb-10 sm:px-8 lg:px-12 lg:pb-14">
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredServices.map((service, index) => (
            <Reveal
              key={service.slug}
              direction="up"
              delay={index * 120}
              className="h-full"
            >
              <article className="group relative h-full overflow-hidden rounded-[28px] bg-[#021408]">
                <div className="relative h-[360px] overflow-hidden sm:h-[460px] lg:h-[540px]">
                  <Image
                    src={serviceImages[service.slug]}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#021408]/55 transition-opacity duration-700 group-hover:bg-[#021408]/45" />

                  <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10">
                    <div className="flex items-start justify-between">
                      <span className="text-sm text-white/65">
                        {toPersianDigits(
                          String(index + 1).padStart(2, "0")
                        )}
                      </span>

                      <span className="text-[#8BC53D] transition-transform duration-500 group-hover:-translate-x-1">
                        <IconArrow direction="up-left" size={26} />
                      </span>
                    </div>

                    <div>
                      <span className="mb-4 inline-flex rounded-full bg-[#8BC53D] px-3 py-1.5 text-xs font-medium text-[#021408]">
                        خدمت اصلی
                      </span>

                      <h2
                        className="max-w-xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
                        style={{ lineHeight: 1.35 }}
                      >
                        {service.title}
                      </h2>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="container mx-auto px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <Reveal direction="up">
          <div className="mb-8 flex items-end justify-between border-b border-[#022F12]/10 pb-5">
            <div>
              <p className="text-sm font-medium text-[#8BC53D]">
                سایر خدمات
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#021408] sm:text-3xl">
                خدمات تخصصی دیگر آیریک
              </h2>
            </div>

            <span className="hidden text-sm text-[#022F12]/40 sm:block">
              {toPersianDigits(String(otherServices.length))} خدمت
            </span>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service, index) => (
            <Reveal
              key={service.slug}
              direction="up"
              delay={(index % 3) * 80}
              className="h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#022F12]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#8BC53D]/40 hover:shadow-[0_20px_60px_rgba(2,47,18,0.08)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E4F0CC]">
                  <Image
                    src={serviceImages[service.slug]}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#021408]/10 transition-colors duration-500 group-hover:bg-[#021408]/20" />

                  <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#022F12] backdrop-blur-sm">
                    {toPersianDigits(
                      String(index + featuredServices.length + 1).padStart(
                        2,
                        "0"
                      )
                    )}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2
                    className="text-xl font-semibold text-[#021408] transition-colors duration-300 group-hover:text-[#8BC53D] sm:text-2xl"
                    style={{ lineHeight: 1.45 }}
                  >
                    {service.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#022F12]/60">
                    {service.shortDescription}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <Reveal direction="up">
          <div className="group relative overflow-hidden rounded-[2rem] bg-[#E4F0CC] px-7 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="relative z-10 max-w-3xl">
              <span className="text-sm font-medium text-[#8BC53D]">
                پروژه‌ای دارید؟
              </span>

              <h2
                className="mt-5 text-3xl font-semibold text-[#022F12] sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.25 }}
              >
                روش چاپ مناسب پروژه‌تان را
                <br />
                با هم پیدا می‌کنیم.
              </h2>

              <Link
                href="/استعلام-قیمت"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#022F12] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#8BC53D] hover:text-[#021408]"
              >
                استعلام قیمت

                <IconArrow
                  direction="up-left"
                  size={18}
                  className="transition-transform duration-500 group-hover:-translate-x-1"
                />
              </Link>
            </div>

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8BC53D]/20 transition-transform duration-700 group-hover:-translate-y-10" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full border border-[#8BC53D]/30 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
