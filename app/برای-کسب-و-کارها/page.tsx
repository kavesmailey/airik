import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IconArrow from "@/components/ui/IconArrow";

const solutions = [
  {
    number: "۰۱",
    title: "برندهای غذایی",
    description:
      "چاپ روی بسته‌بندی، لیوان، ظروف و محصولات مورد استفاده در رستوران‌ها و کافه‌ها.",
  },
  {
    number: "۰۲",
    title: "فشن و پوشاک",
    description:
      "چاپ روی تیشرت، لباس، بگ و محصولات پارچه‌ای با توجه به جنس و کاربرد محصول.",
  },
  {
    number: "۰۳",
    title: "برندهای سازمانی",
    description:
      "محصولات چاپی و تبلیغاتی برای استفاده در ارتباطات برند، رویدادها و کمپین‌ها.",
  },
  {
    number: "۰۴",
    title: "محصولات تبلیغاتی",
    description:
      "چاپ روی محصولاتی که قرار است برند شما را خارج از فضای دیجیتال همراهی کنند.",
  },
];

export default function BusinessPage() {
  return (
    <main>
      {/* Hero */}
      <section className="container mx-auto px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <Reveal direction="up">
              <p className="mb-5 text-sm font-medium text-[#8BC53D]">
                برای کسب‌وکارها
              </p>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <h1
                className="text-4xl font-semibold tracking-[-0.025em] text-[#021408] sm:text-5xl lg:text-6xl"
                style={{ lineHeight: 1.3 }}
              >
                چاپی که با
                <br />
                کسب‌وکار شما همراه می‌شود.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={220}>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#022F12]/65 sm:text-lg">
                هر کسب‌وکار نیاز متفاوتی دارد. ما راهکار چاپ را بر اساس
                محصول، کاربرد و تجربه‌ای که می‌خواهید ایجاد کنید انتخاب
                می‌کنیم.
              </p>
            </Reveal>

            <Reveal direction="up" delay={340}>
              <Link
                href="/استعلام-قیمت"
                className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#022F12] px-6 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:bg-[#8BC53D] hover:text-[#021408]"
              >
                درباره پروژه‌تان صحبت کنیم

                <span className="transition-transform duration-500 group-hover:-translate-x-1">
                  <IconArrow direction="left" size={18} />
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal direction="left" delay={180}>
            <ParallaxImage
              src="/images/portfolio/corporate-print.jpg"
              alt="راهکارهای چاپی آیریک برای کسب‌وکارها"
              strength={20}
              className="h-[360px] overflow-hidden rounded-[28px] sm:h-[480px] lg:h-[600px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Solutions */}
      <section className="container mx-auto px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal direction="right">
            <div>
              <p className="mb-5 text-sm font-medium text-[#8BC53D]">
                راهکارها
              </p>

              <h2
                className="max-w-md text-3xl font-semibold text-[#021408] sm:text-4xl"
                style={{ lineHeight: 1.4 }}
              >
                برای هر محصول،
                <br />
                یک مسیر درست وجود دارد.
              </h2>
            </div>
          </Reveal>

          <div className="border-t border-[#022F12]/10">
            {solutions.map((solution, index) => (
              <Reveal
                key={solution.number}
                direction="up"
                delay={index * 100}
              >
                <div className="group grid gap-6 border-b border-[#022F12]/10 py-9 sm:grid-cols-[70px_1fr] sm:py-11">
                  <span className="text-sm text-[#022F12]/30 transition-colors duration-500 group-hover:text-[#8BC53D]">
                    {solution.number}
                  </span>

                  <div>
                    <h3
                      className="text-2xl font-medium text-[#021408] transition-transform duration-500 group-hover:-translate-x-1 sm:text-3xl"
                      style={{ lineHeight: 1.4 }}
                    >
                      {solution.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-8 text-[#022F12]/60">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image statement */}
      <section className="container mx-auto px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[28px]">
            <ParallaxImage
              src="/images/portfolio/packaging.jpg"
              alt="چاپ و بسته‌بندی آیریک"
              strength={18}
              className="h-[420px] sm:h-[540px] lg:h-[650px]"
            />

            <div className="absolute inset-0 bg-[#021408]/65" />

            <div className="absolute inset-0 flex items-end p-8 sm:p-12 lg:p-16">
              <div className="max-w-3xl">
                <Reveal direction="up" delay={150}>
                  <p className="mb-5 text-sm text-[#8BC53D]">
                    From idea to execution
                  </p>
                </Reveal>

                <Reveal direction="up" delay={250}>
                  <h2
                    className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
                    style={{ lineHeight: 1.35 }}
                  >
                    چاپ بخشی از تجربه‌ای است
                    <br />
                    که مشتری از برند شما می‌گیرد.
                  </h2>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[28px] bg-[#022F12] p-8 sm:p-12 lg:p-16">
            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="mb-4 text-sm font-medium text-[#8BC53D]">
                  شروع کنیم
                </p>

                <h2
                  className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
                  style={{ lineHeight: 1.35 }}
                >
                  پروژه‌ای دارید که
                  <br />
                  باید درست چاپ شود؟
                </h2>
              </div>

              <Link
                href="/استعلام-قیمت"
                className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#8BC53D] px-6 py-4 text-sm font-medium text-[#021408] transition-all duration-500 hover:scale-[1.03]"
              >
                استعلام قیمت

                <span className="transition-transform duration-500 group-hover:-translate-x-1">
                  <IconArrow direction="left" size={18} />
                </span>
              </Link>
            </div>

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#8BC53D]/10 blur-3xl transition-transform duration-[1600ms] group-hover:-translate-y-10" />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
