import Reveal from "@/components/ui/Reveal";
import IconArrow from "@/components/ui/IconArrow";

const reasons = [
  {
    number: "01",
    title: "انتخاب روش درست",
    description:
      "هر محصول و هر سفارش، روش چاپ مناسب خودش را دارد. قبل از تولید، متریال، کاربرد، تیراژ و نتیجه نهایی را در نظر می‌گیریم.",
  },
  {
    number: "02",
    title: "دقت در اجرا",
    description:
      "چاپ خوب فقط به دستگاه و رنگ محدود نمی‌شود. آماده‌سازی فایل، انتخاب متریال و کنترل جزئیات روی نتیجه نهایی تأثیر مستقیم دارد.",
  },
  {
    number: "03",
    title: "راهکار برای برندها",
    description:
      "هدف ما فقط چاپ یک محصول نیست؛ خروجی باید با هویت بصری و تجربه‌ای که برند برای مخاطبش ساخته هماهنگ باشد.",
  },
  {
    number: "04",
    title: "همراهی از ایده تا اجرا",
    description:
      "اگر هنوز درباره روش چاپ یا اجرای پروژه مطمئن نیستید، قبل از تولید می‌توانید با ما درباره بهترین مسیر صحبت کنید.",
  },
];

export default function WhyAyric() {
  return (
    <section
      className="py-24 sm:py-32 lg:py-40"
      style={{
        backgroundColor: "var(--color-white)",
      }}
      aria-labelledby="why-ayric-heading"
    >
      <div className="container-iric">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro */}
          <Reveal>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p
                className="text-sm font-medium"
                style={{
                  color: "var(--color-primary)",
                }}
              >
                چرا آیریک؟
              </p>

              <h2
                id="why-ayric-heading"
                className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
                style={{
                  color: "var(--color-dark-green)",
                  lineHeight: "var(--line-height-tight)",
                }}
              >
                چاپ را فقط اجرا نمی‌کنیم.
                <br />
                درست انتخابش می‌کنیم.
              </h2>

              <p
                className="mt-7 max-w-md text-base sm:text-lg"
                style={{
                  color: "var(--color-dark-green)",
                  opacity: 0.68,
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                برای ما کیفیت چاپ از لحظه‌ای شروع می‌شود که تصمیم می‌گیریم
                چه روشی، روی چه متریالی و با چه اجرایی بهترین نتیجه را می‌دهد.
              </p>

              <div
                className="mt-10 h-px w-16"
                style={{
                  backgroundColor: "var(--color-primary)",
                }}
              />
            </div>
          </Reveal>

          {/* Reasons */}
          <div>
            {reasons.map((reason, index) => (
              <Reveal key={reason.number} delay={index * 80}>
                <article
                  className="group border-t py-8 sm:py-10 lg:py-12"
                  style={{
                    borderColor: "rgba(2, 47, 18, 0.14)",
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-[80px_1fr_auto] sm:gap-8">
                    <span
                      className="text-xs font-medium tracking-wider"
                      style={{
                        color: "var(--color-dark-green)",
                        opacity: 0.42,
                      }}
                    >
                      {reason.number}
                    </span>

                    <div>
                      <h3
                        className="text-xl font-bold sm:text-2xl"
                        style={{
                          color: "var(--color-dark-green)",
                        }}
                      >
                        {reason.title}
                      </h3>

                      <p
                        className="mt-4 max-w-2xl text-sm sm:text-base"
                        style={{
                          color: "var(--color-dark-green)",
                          opacity: 0.65,
                          lineHeight: "var(--line-height-relaxed)",
                        }}
                      >
                        {reason.description}
                      </p>
                    </div>

                    <span
                      className="hidden self-start pt-1 opacity-30 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 sm:block"
                      style={{
                        color: "var(--color-primary)",
                      }}
                      aria-hidden="true"
                    >
                      <IconArrow direction="up-left" size={20} />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}

            <div
              className="border-t"
              style={{
                borderColor: "rgba(2, 47, 18, 0.14)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
