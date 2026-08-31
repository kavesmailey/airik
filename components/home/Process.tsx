import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  { title: "دریافت فایل", description: "دریافت فایل از مشتری" },
  { title: "بررسی و آماده‌سازی", description: "بررسی فایل و آماده‌سازی برای چاپ" },
  { title: "آماده‌سازی چاپ", description: "آماده‌سازی شابلون یا فیلم" },
  { title: "اجرای چاپ", description: "اجرای چاپ با دقت بالا" },
  { title: "کنترل کیفیت", description: "بررسی کیفیت نهایی" },
  { title: "بسته‌بندی و تحویل", description: "بسته‌بندی و ارسال سفارش" },
];

export default function Process() {
  return (
    <section className="section-iric" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-iric">
        <SectionHeading
          eyebrow="فرآیند کار"
          title="از فایل ساده تا محصول چاپ‌شده"
          tone="dark"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <div className="card-industrial h-full">
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--color-accent)" }}
                >
                  {String(index + 1).padStart(2, "۰")}
                </span>
                <h3
                  className="mt-3 text-lg font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
