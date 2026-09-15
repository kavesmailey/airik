"use client";

import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    number: "۰۱",
    title: "کیفیت در جزئیات",
    description:
      "از انتخاب روش چاپ تا اجرای نهایی، جزئیاتی که روی نتیجه تأثیر می‌گذارند نادیده گرفته نمی‌شوند.",
  },
  {
    number: "۰۲",
    title: "راهکار متناسب با محصول",
    description:
      "هر محصول شرایط خودش را دارد. روش چاپ را بر اساس جنس، فرم، کاربرد و نتیجه‌ای که می‌خواهید انتخاب می‌کنیم.",
  },
  {
    number: "۰۳",
    title: "همراهی از ایده تا اجرا",
    description:
      "فرآیند چاپ فقط یک مرحله از پروژه است؛ از بررسی نیاز تا اجرای نهایی، مسیر را کنار شما پیش می‌بریم.",
  },
];

export default function WhyAyric() {
  return (
    <section className="container mx-auto px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal direction="right">
          <div className="lg:sticky lg:top-24">
            <p className="mb-5 text-sm font-medium text-[#8BC53D]">
              چرا آیریک؟
            </p>

            <h2
              className="max-w-xl text-3xl font-semibold tracking-[-0.02em] text-[#021408] sm:text-4xl lg:text-5xl"
              style={{ lineHeight: 1.35 }}
            >
              چاپ خوب،
              <br />
              فقط خوب دیده نمی‌شود.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#022F12]/65">
              نتیجه‌ای که روی محصول می‌بینید، حاصل مجموعه‌ای از انتخاب‌های
              درست قبل و حین چاپ است.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-[#022F12]/10">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.number}
              direction="up"
              delay={index * 120}
            >
              <div className="group grid gap-6 border-b border-[#022F12]/10 py-8 sm:grid-cols-[80px_1fr] sm:py-10">
                <span className="text-sm text-[#022F12]/35 transition-colors duration-500 group-hover:text-[#8BC53D]">
                  {reason.number}
                </span>

                <div>
                  <h3
                    className="text-2xl font-medium text-[#021408] transition-transform duration-500 group-hover:translate-x-[-5px] sm:text-3xl"
                    style={{ lineHeight: 1.4 }}
                  >
                    {reason.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#022F12]/60 transition-colors duration-500 group-hover:text-[#022F12]/80">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
