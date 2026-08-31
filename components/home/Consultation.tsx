import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import IconArrow from "@/components/ui/IconArrow";

export default function Consultation() {
  return (
    <section className="section-iric" style={{ backgroundColor: "var(--color-accent)" }}>
      <div className="container-iric">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2
                className="text-4xl font-bold sm:text-5xl lg:text-6xl"
                style={{ color: "var(--color-accent-contrast)", lineHeight: "var(--line-height-tight)" }}
              >
                نمی‌دونی چه نوع چاپی مناسبته؟
              </h2>
              <p
                className="mt-5 max-w-2xl text-lg"
                style={{ color: "var(--color-accent-contrast)", opacity: 0.75, lineHeight: "var(--line-height-relaxed)" }}
              >
                اگر نمی‌دانید برای محصول، تیراژ و بودجه شما چه نوع چاپی مناسب است،
                قبل از سفارش با ما مشورت کنید.
              </p>
            </div>
            <div className="flex items-end lg:col-span-4 lg:justify-end">
              <Button href="/استعلام-قیمت" size="lg" className="w-full sm:w-auto">
                مشاوره رایگان قبل از سفارش
                <IconArrow direction="up-left" size={16} />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
