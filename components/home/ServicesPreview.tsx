"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import IconArrow from "@/components/ui/IconArrow";
import { services } from "@/content/services";
import { toPersianDigits } from "@/lib/format";

const featuredSlugs = ["چاپ-سیلک", "چاپ-dtf"];

export default function ServicesPreview() {
  const featuredServices = featuredSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);

  const otherServices = services.filter(
    (service) => !featuredSlugs.includes(service.slug)
  );

  return (
    <section className="container mx-auto px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <Reveal direction="up">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium text-[#8BC53D]">
              خدمات آیریک
            </p>

            <h2
              className="max-w-3xl text-3xl font-semibold text-[#021408] sm:text-4xl lg:text-5xl"
              style={{ lineHeight: 1.35 }}
            >
              چاپ فقط انتقال رنگ نیست؛
              <br />
              بخشی از تجربه‌ی برند است.
            </h2>
          </div>

          <Link
            href="/خدمات"
            className="group inline-flex items-center gap-3 text-sm font-medium text-[#022F12]"
          >
            مشاهده همه خدمات

            <span className="transition-transform duration-500 group-hover:-translate-x-1">
              <IconArrow direction="left" size={18} />
            </span>
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {featuredServices.map((service, index) => {
          if (!service) return null;

          return (
            <Reveal
              key={service.slug}
              direction="up"
              delay={index * 120}
              className="h-full"
            >
              <Link
                href={`/خدمات/${service.slug}`}
                className="group relative block h-[380px] overflow-hidden rounded-[28px] sm:h-[460px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                />

                <div className="absolute inset-0 bg-black/[0.75] transition-opacity duration-700 group-hover:bg-black/[0.68]" />

                <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10">
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-white/60">
                      {toPersianDigits(String(index + 1).padStart(2, "0"))}
                    </span>

                    <span className="translate-x-2 -translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <IconArrow direction="up-left" size={26} />
                    </span>
                  </div>

                  <div>
                    <h3
                      className="max-w-xl text-2xl font-semibold text-white sm:text-3xl lg:text-4xl"
                      style={{ lineHeight: 1.45 }}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 transition-all duration-500 group-hover:text-white/90">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-6 grid gap-x-8 border-t border-[#022F12]/10 lg:grid-cols-2">
        {otherServices.map((service, index) => (
          <Reveal
            key={service.slug}
            direction="up"
            delay={(index % 4) * 70}
          >
            <Link
              href={`/خدمات/${service.slug}`}
              className="group flex items-center justify-between border-b border-[#022F12]/10 py-6"
            >
              <div className="flex items-center gap-5">
                <span className="text-sm text-[#022F12]/40">
                  {toPersianDigits(String(index + 3).padStart(2, "0"))}
                </span>

                <span className="text-base font-medium text-[#021408] transition-transform duration-500 group-hover:translate-x-[-4px]">
                  {service.title}
                </span>
              </div>

              <span className="text-[#022F12] transition-transform duration-500 group-hover:-translate-x-1">
                <IconArrow direction="left" size={18} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
