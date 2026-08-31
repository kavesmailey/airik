import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import IconArrow from "@/components/ui/IconArrow";

export default function FinalCta() {
  return (
    <section className="section-iric" style={{ backgroundColor: "var(--color-accent)" }}>
      <div className="container-iric">
        <Reveal>
          <div className="text-center">
            <h2
              className="text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ color: "var(--color-accent-contrast)", lineHeight: "var(--line-height-tight)" }}
            >
              آماده شروع پروژه چاپ هستید؟
            </h2>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-accent-contrast)", opacity: 0.75 }}
            >
              مشخصات سفارش خود را ارسال کنید تا مشاوره تخصصی دریافت کنید.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/استعلام-قیمت" size="lg">
                استعلام قیمت
                <IconArrow direction="up-left" size={16} />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
