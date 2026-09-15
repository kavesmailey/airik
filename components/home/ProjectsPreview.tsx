"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IconArrow from "@/components/ui/IconArrow";

export default function ProjectsPreview() {
  return (
    <section className="container mx-auto px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
      <Reveal direction="up">
        <div className="relative overflow-hidden rounded-[28px]">
          <ParallaxImage
            src="/images/portfolio/packaging.jpg"
            alt="نمونه کار چاپ و بسته‌بندی آیریک"
            strength={20}
            className="h-[420px] sm:h-[520px] lg:h-[640px]"
          />

          <div className="absolute inset-0 bg-[#021408]/65 transition-colors duration-700 hover:bg-[#021408]/55" />

          <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10 lg:p-14">
            <div className="flex items-start justify-between">
              <Reveal direction="down" delay={150}>
                <p className="text-sm font-medium text-white/65">
                  نمونه‌کارها
                </p>
              </Reveal>

              <Reveal direction="left" delay={250}>
                <div className="text-white transition-transform duration-700 hover:-translate-x-1 hover:-translate-y-1">
                  <IconArrow direction="up-left" size={28} />
                </div>
              </Reveal>
            </div>

            <div className="max-w-3xl">
              <Reveal direction="up" delay={200}>
                <p className="mb-5 text-sm text-[#8BC53D]">
                  Print that belongs to the product.
                </p>
              </Reveal>

              <Reveal direction="up" delay={300}>
                <h2
                  className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl"
                  style={{ lineHeight: 1.35 }}
                >
                  چاپ وقتی ارزش دارد
                  <br />
                  که روی محصول هم درست به نظر برسد.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={420}>
                <div className="mt-8">
                  <Link
                    href="/نمونه-کارها"
                    className="group inline-flex items-center gap-4 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-[#021408]"
                  >
                    دیدن نمونه‌کارها

                    <span className="transition-transform duration-500 group-hover:-translate-x-1">
                      <IconArrow direction="left" size={18} />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
