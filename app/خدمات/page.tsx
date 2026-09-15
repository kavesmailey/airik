"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import IconArrow from "@/components/ui/IconArrow";
import { services } from "@/content/services";
import { toPersianDigits } from "@/lib/format";

export default function ServicesPage() {
  return (
    <main>
      <section className="container mx-auto px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24">
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

      <section className="container mx-auto px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="grid gap-x-8 border-t border-[#022F12]/10 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              direction="up"
              delay={(index % 4) * 60}
            >
              <Link
                href={`/خدمات/${service.slug}`}
                className="group relative flex min-h-[130px] items-center justify-between gap-6 border-b border-[#022F12]/10 py-7 transition-all duration-500 hover:px-3"
              >
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-sm text-[#022F12]/30 transition-colors duration-500 group-hover:text-[#8BC53D]">
                    {toPersianDigits(String(index + 1).padStart(2, "0"))}
                  </span>

                  <div>
                    <h2
                      className="text-xl font-medium text-[#021408] transition-transform duration-500 group-hover:-translate-x-1 sm:text-2xl"
                      style={{ lineHeight: 1.5 }}
                    >
                      {service.title}
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-[#022F12]/55 transition-colors duration-500 group-hover:text-[#022F12]/75">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 translate-x-2 text-[#022F12] opacity-40 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <IconArrow direction="left" size={20} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
