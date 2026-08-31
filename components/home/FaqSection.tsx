import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { generalFaqs } from "@/content/faq";

export default function FaqSection() {
  return (
    <section className="section-iric" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-iric">
        <SectionHeading
          eyebrow="سوالات متداول"
          title="پاسخ به سوالات شما"
          tone="dark"
        />

        <div className="mt-12 max-w-3xl">
          <Accordion
            items={generalFaqs.map((faq, index) => ({
              id: `faq-${index}`,
              title: faq.question,
              content: faq.answer,
            }))}
            tone="dark"
          />
        </div>
      </div>
    </section>
  );
}
