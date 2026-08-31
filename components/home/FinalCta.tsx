import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import Reveal from "@/components/ui/Reveal";

export default function FinalCta() {
  return (
    <section
      className="section-iric"
      style={{ backgroundColor: "var(--color-accent)" }}
    >
      <div className="container-iric">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="text-xs font-bold tracking-[0.18em]"
              style={{ color: "var(--color-accent-contrast)" }}
            >
              آماده شروع هستید؟
            </p>

            <h2
              className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--color-accent-contrast)",
                lineHeight: "var(--line-height-tight)",
              }}
            >
              ایده‌تان را به یک خروجی واقعی تبدیل کنیم.
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg"
              style={{
                color: "var(--color-accent-contrast)",
                opacity: 0.82,
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              مشخصات سفارش یا فایل طراحی‌تان را برای ما ارسال کنید. پروژه را
              بررسی می‌کنیم و درباره روش چاپ، زمان اجرا و هزینه با شما صحبت
              خواهیم کرد.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/استعلام-قیمت" size="lg">
                استعلام قیمت
                <IconArrow direction="up-left" size={16} />
              </Button>

              <Button href="/تماس-با-ما" size="lg" variant="outline">
                تماس با آیریک
              </Button>
            </div>

            <p
              className="mt-8 text-sm"
              style={{
                color: "var(--color-accent-contrast)",
                opacity: 0.65,
              }}
            >
              قبل از شروع تولید، همه جزئیات سفارش با شما هماهنگ می‌شود.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
