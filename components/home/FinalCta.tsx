import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import Reveal from "@/components/ui/Reveal";

export default function FinalCta() {
  return (
    <section
      className="py-32 sm:py-40 lg:py-52"
      style={{
        backgroundColor: "var(--color-primary)",
      }}
    >
      <div className="container-iric">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="text-xs font-bold tracking-[0.18em]"
              style={{
                color: "var(--color-white)",
              }}
            >
              آماده شروع هستید؟
            </p>

            <h2
              className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--color-dark-green)",
                lineHeight: "var(--line-height-tight)",
              }}
            >
              ایده‌تان را به یک خروجی واقعی تبدیل کنیم.
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg"
              style={{
                color: "var(--color-white)",
                opacity: 0.88,
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              مشخصات سفارش یا فایل طراحی‌تان را برای ما ارسال کنید. پروژه را
              بررسی می‌کنیم و درباره روش چاپ، زمان اجرا و هزینه با شما صحبت
              خواهیم کرد.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/استعلام-قیمت"
                size="lg"
                variant="outline"
              >
                استعلام قیمت
                <IconArrow direction="up-left" size={16} />
              </Button>

              <Button
                href="/تماس-با-ما"
                size="lg"
                variant="outline"
              >
                تماس با آیریک
              </Button>
            </div>

            <p
              className="mt-8 text-sm"
              style={{
                color: "var(--color-white)",
                opacity: 0.72,
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
