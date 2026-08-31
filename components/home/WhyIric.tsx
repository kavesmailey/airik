import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    title: "کیفیت در اجرا",
    description: "چاپ با دقت و کنترل کیفیت در مراحل اجرا.",
  },
  {
    title: "مشاوره قبل از سفارش",
    description: "کمک به انتخاب روش چاپ متناسب با محصول، تیراژ و بودجه.",
  },
  {
    title: "اجرای حرفه‌ای",
    description: "تمرکز روی نتیجه نهایی و ظاهر حرفه‌ای برند.",
  },
  {
    title: "ارسال سفارش",
    description: "امکان ارسال سفارش به سراسر ایران.",
  },
];

export default function WhyIric() {
  return (
    <section id="why-iric" className="section-iric" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-iric">
        <SectionHeading
          eyebrow="چرا آیریک؟"
          title="دلایلی که آیریک را انتخاب می‌کنید"
          tone="dark"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 100}>
              <div
                className="card-industrial h-full"
                style={{ textAlign: "start" }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--color-accent)" }}
                >
                  {String(index + 1).padStart(2, "۰")}
                </span>
                <h3
                  className="mt-4 text-xl font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="mt-3 text-sm"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
