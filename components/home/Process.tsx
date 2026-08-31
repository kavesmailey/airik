import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "دریافت و بررسی سفارش",
    description:
      "ابتدا فایل، مشخصات محصول، تیراژ و نیازهای اجرایی سفارش را بررسی می‌کنیم تا روش مناسب چاپ از همان ابتدا مشخص باشد.",
  },
  {
    title: "بررسی فایل و آماده‌سازی",
    description:
      "فایل طراحی از نظر ابعاد، رنگ، رزولوشن و محدودیت‌های چاپ بررسی و در صورت نیاز برای اجرای دقیق‌تر اصلاح می‌شود.",
  },
  {
    title: "آماده‌سازی چاپ",
    description:
      "متناسب با روش انتخاب‌شده، شابلون، فیلم، زینک یا سایر ملزومات چاپ آماده می‌شوند تا سفارش وارد مرحله اجرا شود.",
  },
  {
    title: "اجرای چاپ",
    description:
      "چاپ با توجه به جنس محصول، نوع مرکب، تعداد رنگ و مشخصات سفارش اجرا می‌شود؛ با تمرکز روی ثبات رنگ و کیفیت خروجی.",
  },
  {
    title: "کنترل کیفیت",
    description:
      "نمونه و خروجی نهایی بررسی می‌شود تا کیفیت چاپ، جایگذاری طرح، رنگ و یکدستی محصول با مشخصات سفارش مطابقت داشته باشد.",
  },
  {
    title: "بسته‌بندی و تحویل",
    description:
      "پس از تأیید نهایی، سفارش بسته‌بندی شده و مطابق زمان‌بندی توافق‌شده برای تحویل یا ارسال آماده می‌شود.",
  },
];

export default function Process() {
  return (
    <section
      className="section-iric"
      style={{ backgroundColor: "var(--color-bg-light)" }}
    >
      <div className="container-iric">
        <SectionHeading
          eyebrow="فرآیند همکاری"
          title="از اولین فایل تا تحویل نهایی، همه‌چیز روشن است."
          description="ما فرآیند چاپ را طوری طراحی کرده‌ایم که از بررسی اولیه تا تحویل، هر مرحله مشخص و قابل پیگیری باشد."
          tone="dark"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <article className="card-industrial h-full p-7 sm:p-8">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-accent-contrast)",
                  }}
                >
                  {String(index + 1).padStart(2, "۰")}
                </div>

                <h3
                  className="mt-7 text-xl font-bold"
                  style={{
                    color: "var(--color-text)",
                    lineHeight: "var(--line-height-tight)",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-4 text-base"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div
          className="mt-16 border-t pt-10"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="max-w-3xl text-base sm:text-lg"
            style={{
              color: "var(--color-text-muted)",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            اگر هنوز نمی‌دانید کدام روش چاپ برای پروژه شما مناسب‌تر است، لازم
            نیست قبل از تماس همه‌چیز را مشخص کرده باشید. فایل و مشخصات سفارش را
            برای ما ارسال کنید؛ انتخاب روش اجرا و بررسی فنی را با شما پیش
            می‌بریم.
          </p>
        </div>
      </div>
    </section>
  );
}
