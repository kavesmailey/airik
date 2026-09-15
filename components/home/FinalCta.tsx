"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import IconArrow from "@/components/ui/IconArrow";

export default function FinalCta() {
  return (
    <section className="container mx-auto px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
      <Reveal direction="up">
        <div className="group relative overflow-hidden rounded-[28px] bg-[#022F12]">
          {/* Decorative background movement */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#8BC53D]/10 blur-3xl transition-transform duration-[1600ms] ease-out group-hover:translate-x-10 group-hover:translate-y-10" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#8BC53D]/[0.07] blur-3xl transition-transform duration-[1800ms] ease-out group-hover:-translate-x-10 group-hover:-translate-y-10" />

          <div className="relative grid min-h-[480px] items-end gap-12 p-8 sm:p-12 lg:min-h-[560px] lg:grid-cols-[1fr_auto] lg:p-16">
            <div className="max-w-3xl">
              <Reveal direction="up" delay={100}>
                <p className="mb-6 text-sm font-medium text-[#8BC53D]">
                  پروژه بعدی شما؟
                </p>
              </Reveal>

              <Reveal direction="up" delay={200}>
                <h2
                  className="text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl"
                  style={{ lineHeight: 1.25 }}
                >
                  بیایید چیزی بسازیم
                  <br />
                  که ارزش دیده شدن داشته باشد.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={320}>
                <p className="mt-6 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                  اگر برای محصول یا برندتان به یک راهکار چاپی فکر می‌کنید،
                  جزئیات پروژه را برای ما بفرستید.
                </p>
              </Reveal>
            </div>

            <Reveal direction="left" delay={420}>
              <Link
                href="/استعلام-قیمت"
                className="group/button relative inline-flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#8BC53D] text-sm font-medium text-[#021408] transition-all duration-700 hover:h-36 hover:w-36 sm:h-40 sm:w-40 sm:text-base sm:hover:h-44 sm:hover:w-44"
              >
                <span className="relative z-10 flex flex-col items-center gap-3">
                  <span>استعلام قیمت</span>

                  <span className="transition-transform duration-500 group-hover/button:-translate-x-1 group-hover/button:-translate-y-1">
                    <IconArrow direction="up-left" size={22} />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#8BC53D] transition-all duration-[1200ms] ease-out group-hover:w-full" />
        </div>
      </Reveal>
    </section>
  );
}
