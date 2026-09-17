"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IconArrow from "@/components/ui/IconArrow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-5 pb-0 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44">
        <div className="max-w-5xl">
          <Reveal direction="up" delay={0}>
            <p className="mb-5 text-sm font-medium text-[#8BC53D] sm:text-base">
              آیریک / چاپ تخصصی
            </p>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1
              className="max-w-5xl text-3xl font-semibold tracking-[-0.025em] text-[#021408] sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{
                lineHeight: 1.42,
              }}
            >
              چاپ تخصصی برای برندهایی
              <br />
              که کیفیت اهمیت دارد.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={220}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#022F12]/70 sm:text-lg">
              از چاپ سیلک و DTF تا چاپ روی بسته‌بندی و محصولات؛
              راهکارهایی برای برندهایی که به جزئیات اهمیت می‌دهند.
            </p>
          </Reveal>

          <Reveal direction="up" delay={340}>
            <Link
              href="/استعلام-قیمت"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#022F12] px-6 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:bg-[#8BC53D] hover:text-[#021408]"
            >
              استعلام قیمت

              <span className="transition-transform duration-500 group-hover:-translate-x-1">
                <IconArrow direction="left" size={18} />
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal direction="up" delay={420}>
          <div className="relative mt-12 overflow-hidden rounded-[28px] sm:mt-16 lg:mt-20">
            <ParallaxImage
              src="/images/hero.jpg"
              alt="خدمات چاپ آیریک"
              priority
              strength={24}
              className="h-[280px] sm:h-[420px] lg:h-[560px]"
            />

            <div className="absolute inset-0 bg-[#021408]/60" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                <div>
                  <p className="text-sm text-white/70 sm:text-base">
                    Printing solutions for brands & businesses
                  </p>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-white sm:text-base">
                    چاپ سیلک · چاپ DTF · بسته‌بندی · پوشاک · محصولات تبلیغاتی
                  </p>
                </div>

                <div className="hidden shrink-0 text-white lg:block">
                  <IconArrow direction="up-left" size={28} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
