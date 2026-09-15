import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IconArrow from "@/components/ui/IconArrow";

const projects = [
  {
    slug: "packaging",
    title: "بسته‌بندی",
    description: "چاپ و اجرای بسته‌بندی برای برندهایی که جزئیات اهمیت دارد.",
    image: "/images/portfolio/packaging.jpg",
  },
  {
    slug: "fashion-print",
    title: "چاپ روی پوشاک",
    description: "راهکارهای چاپ برای فشن، پوشاک و محصولات پارچه‌ای.",
    image: "/images/portfolio/fashion-print.jpg",
  },
  {
    slug: "restaurant-print",
    title: "رستوران و غذا",
    description: "چاپ روی بسته‌بندی و محصولات مورد استفاده برندهای غذایی.",
    image: "/images/portfolio/restaurant-print.jpg",
  },
  {
    slug: "cafe-print",
    title: "کافه",
    description: "راهکارهای چاپی برای تجربه‌ای یکپارچه در کافه‌ها.",
    image: "/images/portfolio/cafe-print.jpg",
  },
  {
    slug: "corporate-print",
    title: "برندهای سازمانی",
    description: "محصولات چاپی برای ارتباطات و هویت برند.",
    image: "/images/portfolio/corporate-print.jpg",
  },
  {
    slug: "promotional-products",
    title: "محصولات تبلیغاتی",
    description: "چاپ روی محصولاتی که برند را بیشتر دیده‌شده می‌کنند.",
    image: "/images/portfolio/promotional-products.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* Header */}
      <section className="container mx-auto px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24">
        <Reveal direction="up">
          <p className="mb-5 text-sm font-medium text-[#8BC53D]">
            نمونه‌کارها
          </p>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h1
            className="max-w-4xl text-4xl font-semibold tracking-[-0.025em] text-[#021408] sm:text-5xl lg:text-6xl"
            style={{ lineHeight: 1.3 }}
          >
            چاپی که بخشی از
            <br />
            تجربه‌ی برند می‌شود.
          </h1>
        </Reveal>

        <Reveal direction="up" delay={220}>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#022F12]/65 sm:text-lg">
            مجموعه‌ای از پروژه‌ها و کاربردهای چاپ آیریک برای برندها،
            محصولات و کسب‌وکارهای مختلف.
          </p>
        </Reveal>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              direction="up"
              delay={(index % 4) * 100}
            >
              <Link
                href="/استعلام-قیمت"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-[28px] bg-[#E4F0CC]">
                  <ParallaxImage
                    src={project.image}
                    alt={project.title}
                    strength={14}
                    className={`${
                      index % 3 === 0
                        ? "h-[460px] sm:h-[560px]"
                        : "h-[380px] sm:h-[460px]"
                    }`}
                  />

                  <div className="absolute inset-0 bg-[#021408]/0 transition-colors duration-700 group-hover:bg-[#021408]/35" />

                  <div className="absolute right-6 top-6 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-8 sm:top-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#021408]">
                      <IconArrow direction="up-left" size={20} />
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h2
                      className="text-xl font-medium text-[#021408] transition-transform duration-500 group-hover:-translate-x-1 sm:text-2xl"
                      style={{ lineHeight: 1.45 }}
                    >
                      {project.title}
                    </h2>

                    <p className="mt-2 max-w-md text-sm leading-7 text-[#022F12]/55">
                      {project.description}
                    </p>
                  </div>

                  <span className="shrink-0 pt-1 text-sm text-[#022F12]/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <Reveal direction="up">
          <div className="flex flex-col justify-between gap-8 rounded-[28px] bg-[#E4F0CC] p-8 sm:p-12 lg:flex-row lg:items-end lg:p-16">
            <div>
              <p className="mb-4 text-sm font-medium text-[#8BC53D]">
                پروژه شما
              </p>

              <h2
                className="max-w-2xl text-3xl font-semibold text-[#021408] sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.35 }}
              >
                محصول شما هم می‌تواند
                <br />
                یکی از این پروژه‌ها باشد.
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
        </Reveal>
      </section>
    </main>
  );
}
