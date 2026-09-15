"use client";

import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IconArrow from "@/components/ui/IconArrow";

export default function AboutPage() {
  const values = [
    {
      number: "۰۱",
      title: "دقت در جزئیات",
      text: "در چاپ، جزئیات کوچک می‌توانند نتیجه نهایی یک محصول را تغییر دهند. ما از مرحله انتخاب روش چاپ تا اجرای نهایی، به همین جزئیات توجه می‌کنیم.",
    },
    {
      number: "۰۲",
      title: "انتخاب درست",
      text: "همه پروژه‌ها به یک روش چاپ نیاز ندارند. راه‌حل مناسب را بر اساس محصول، متریال، تیراژ و نتیجه مورد انتظار انتخاب می‌کنیم.",
    },
    {
      number: "۰۳",
      title: "کیفیت قابل اتکا",
      text: "هدف فقط تولید یک خروجی چاپی نیست؛ نتیجه باید روی محصول نهایی درست، تمیز و قابل اتکا به نظر برسد.",
    },
    {
      number: "۰۴",
      title: "همراهی با برند",
      text: "چاپ بخشی از تجربه برند است. تلاش می‌کنیم نتیجه نهایی با هویت و کیفیتی که برند شما می‌خواهد هماهنگ باشد.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="container mx-auto px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pb-32">
        <div className="max-w-5xl">
          <Reveal direction="up">
            <p className="mb-5 text-sm font-medium text-[#8BC53D]">
              درباره آیریک
            </p>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1
              className="max-w-5xl text-4xl font-semibold tracking-[-0.025em] text-[#021408] sm:text-5xl lg:text-6xl"
              style={{ lineHeight: 1.35 }}
            >
              چاپ فقط چیزی نیست
              <br />
              که روی محصول دیده می‌شود.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={220}>
            <p
              className="mt-7 max-w-2xl text-base text-[#022F12]/65 sm:text-lg"
              style={{ lineHeight: 2 }}
            >
              آیریک یک مجموعه تخصصی چاپ است که تلاش می‌کند بین
              کیفیت چاپ، محصول و هویت برند ارتباط درست‌تری ایجاد کند.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main image */}
      <section className="container mx-auto px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal direction="up">
          <div className="overflow-hidden rounded-[28px]">
            <ParallaxImage
              src="/images/hero.jpg"
              alt="آیریک؛ چاپ تخصصی برای برندها"
              priority
              strength={22}
              className="h-[320px] sm:h-[480px] lg:h-[640px]"
            />
          </div>
        </Reveal>
      </section>

      {/* Introduction */}
      <section className="bg-[#E4F0CC]">
        <div className="container mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-20">
            <Reveal direction="right">
              <p className="text-sm font-medium text-[#022F12]/45">
                چرا آیریک؟
              </p>
            </Reveal>

            <Reveal direction="up" delay={120}>
              <div className="max-w-4xl">
                <p
                  className="text-2xl font-medium tracking-[-0.015em] text-[#021408] sm:text-3xl lg:text-4xl"
                  style={{ lineHeight: 1.7 }}
                >
                  ما چاپ را بخشی از محصول می‌دانیم؛ جایی که کیفیت
                  اجرا، انتخاب متریال و توجه به جزئیات می‌تواند
                  تجربه‌ای که یک برند می‌سازد را کامل کند.
                </p>

                <p
                  className="mt-8 max-w-3xl text-base text-[#022F12]/65 sm:text-lg"
                  style={{ lineHeight: 2 }}
                >
                  از چاپ سیلک و DTF گرفته تا چاپ روی لباس،
                  بسته‌بندی و محصولات مختلف، تلاش ما این است که
                  برای هر پروژه راه‌حل مناسب و قابل اجرا پیدا کنیم.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <Reveal direction="up">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-medium text-[#8BC53D]">
              رویکرد ما
            </p>

            <h2
              className="text-3xl font-semibold text-[#021408] sm:text-4xl lg:text-5xl"
              style={{ lineHeight: 1.4 }}
            >
              چیزهایی که برای ما مهم‌اند.
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-[#022F12]/10">
          {values.map((value, index) => (
            <Reveal
              key={value.number}
              direction="up"
              delay={index * 100}
            >
              <div className="group grid gap-5 border-b border-[#022F12]/10 py-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-10 lg:grid-cols-[100px_0.8fr_1.2fr] lg:gap-12">
                <span className="text-sm text-[#022F12]/35 transition-colors duration-500 group-hover:text-[#8BC53D]">
                  {value.number}
                </span>

                <h3
                  className="text-xl font-medium text-[#021408] transition-transform duration-500 group-hover:-translate-x-1 sm:text-2xl"
                  style={{ lineHeight: 1.5 }}
                >
                  {value.title}
                </h3>

                <p
                  className="max-w-xl text-sm text-[#022F12]/55 sm:text-base"
                  style={{ lineHeight: 2 }}
                >
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="container mx-auto px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[28px]">
            <ParallaxImage
              src="/images/portfolio/packaging.jpg"
              alt="چاپ و بسته‌بندی"
              strength={18}
              className="h-[420px] sm:h-[520px] lg:h-[620px]"
            />

            <div className="absolute inset-0 bg-[#021408]/65" />

            <div className="absolute inset-0 flex items-end p-7 sm:p-10 lg:p-14">
              <div className="max-w-3xl">
                <p className="mb-5 text-sm font-medium text-[#8BC53D]">
                  Print with purpose.
                </p>

                <h2
                  className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
                  style={{ lineHeight: 1.4 }}
                >
                  نتیجه خوب فقط روی کاغذ یا پارچه اتفاق نمی‌افتد؛
                  باید روی خود محصول هم درست به نظر برسد.
                </h2>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services link */}
      <section className="container mx-auto px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal direction="up">
          <div className="grid gap-8 rounded-[28px] bg-[#F4F7EE] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-14">
            <div>
              <p className="mb-4 text-sm font-medium text-[#8BC53D]">
                خدمات آیریک
              </p>

              <h2
                className="max-w-2xl text-3xl font-semibold text-[#021408] sm:text-4xl"
                style={{ lineHeight: 1.4 }}
              >
                برای هر محصول، یک راه‌حل چاپی مناسب وجود دارد.
              </h2>
            </div>

            <Link
              href="/خدمات"
              className="group inline-flex items-center gap-4 text-sm font-medium text-[#021408]"
            >
              مشاهده خدمات

              <span className="transition-transform duration-500 group-hover:-translate-x-1">
                <IconArrow direction="left" size={19} />
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[28px] bg-[#022F12] p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#8BC53D]/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="mb-5 text-sm font-medium text-[#8BC53D]">
                شروع یک پروژه
              </p>

              <h2
                className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.4 }}
              >
                اگر کیفیت چاپ برایتان مهم است،
                از همین‌جا شروع کنیم.
              </h2>

              <Link
                href="/استعلام-قیمت"
                className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#8BC53D] px-6 py-4 text-sm font-medium text-[#021408] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              >
                استعلام قیمت

                <span className="transition-transform duration-500 group-hover:-translate-x-1">
                  <IconArrow direction="left" size={18} />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
