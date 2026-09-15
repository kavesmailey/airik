import Link from "next/link";
import { notFound } from "next/navigation";

import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IconArrow from "@/components/ui/IconArrow";
import { services } from "@/content/services";

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

export default function ServicePage({
  params,
}: ServicePageProps) {
  const service = services.find(
    (item) => item.slug === params.slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="container mx-auto px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <Reveal direction="right">
              <Link
                href="/خدمات"
                className="group mb-8 inline-flex items-center gap-3 text-sm text-[#022F12]/60 transition-colors duration-300 hover:text-[#021408]"
              >
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  <IconArrow direction="right" size={17} />
                </span>

                همه خدمات
              </Link>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <p className="mb-5 text-sm font-medium text-[#8BC53D]">
                خدمات چاپ آیریک
              </p>
            </Reveal>

            <Reveal direction="up" delay={180}>
              <h1
                className="text-4xl font-semibold tracking-[-0.025em] text-[#021408] sm:text-5xl lg:text-6xl"
                style={{ lineHeight: 1.3 }}
              >
                {service.title}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={280}>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#022F12]/65 sm:text-lg">
                {service.description}
              </p>
            </Reveal>

            <Reveal direction="up" delay={380}>
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

          <Reveal direction="left" delay={180}>
            <div className="overflow-hidden rounded-[28px]">
              <ParallaxImage
                src={service.image}
                alt={service.title}
                strength={22}
                className="h-[360px] sm:h-[480px] lg:h-[620px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Details */}
      <section className="container mx-auto px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="grid gap-12 border-t border-[#022F12]/10 pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:pt-16">
          <Reveal direction="right">
            <div>
              <p className="text-sm font-medium text-[#8BC53D]">
                درباره این خدمت
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <div>
              <p className="max-w-3xl text-xl leading-[1.9] text-[#021408] sm:text-2xl">
                {service.description}
              </p>

              <div className="mt-12">
                <Link
                  href="/استعلام-قیمت"
                  className="group inline-flex items-center gap-4 border-b border-[#022F12]/20 pb-3 text-sm font-medium text-[#021408] transition-colors duration-500 hover:border-[#8BC53D]"
                >
                  درباره پروژه‌تان با ما صحبت کنید

                  <span className="transition-transform duration-500 group-hover:-translate-x-1">
                    <IconArrow direction="left" size={18} />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[28px] bg-[#E4F0CC] p-8 sm:p-12 lg:p-16">
            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="mb-4 text-sm font-medium text-[#8BC53D]">
                  قدم بعدی
                </p>

                <h2
                  className="max-w-2xl text-3xl font-semibold text-[#021408] sm:text-4xl lg:text-5xl"
                  style={{ lineHeight: 1.35 }}
                >
                  برای این خدمت
                  <br />
                  پروژه‌ای در ذهن دارید؟
                </h2>
              </div>

              <Link
                href="/استعلام-قیمت"
                className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#022F12] px-6 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-[#8BC53D] hover:text-[#021408]"
              >
                شروع پروژه

                <span className="transition-transform duration-500 group-hover:-translate-x-1">
                  <IconArrow direction="left" size={18} />
                </span>
              </Link>
            </div>

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#8BC53D]/10 blur-3xl transition-transform duration-[1600ms] hover:translate-x-10" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
