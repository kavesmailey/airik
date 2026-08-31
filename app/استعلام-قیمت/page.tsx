import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = generateMetadata({
  title: "استعلام قیمت",
  description: "دریافت مشاوره رایگان و استعلام قیمت چاپ سیلک و DTF",
  path: "/استعلام-قیمت",
});

export default function QuotePage() {
  return (
    <>
      <section className="pt-28 pb-16" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric">
          <Breadcrumbs
            items={[{ label: "استعلام قیمت", href: "/استعلام-قیمت" }]}
          />
          <div className="mt-6 max-w-3xl">
            <h1
              className="text-4xl font-bold sm:text-5xl"
              style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
            >
              دریافت مشاوره و استعلام قیمت
            </h1>
            <p
              className="mt-5 text-lg"
              style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
            >
              تیراژهای مختلف را بررسی می‌کنیم؛ برای دریافت پیشنهاد مناسب، مشخصات سفارش خود را ارسال کنید.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-iric max-w-2xl">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
