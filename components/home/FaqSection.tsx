import { faqs } from "@/content/faq";

export default function FaqSection() {
  return (
    <section
      className="py-24 sm:py-32 lg:py-40"
      style={{ backgroundColor: "var(--color-bg-light)" }}
      aria-labelledby="faq-heading"
    >
      <div className="container-iric">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Section intro */}
          <div className="lg:col-span-4">
            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-accent)" }}
            >
              سوالات متداول
            </p>

            <h2
              id="faq-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{
                color: "var(--color-text)",
                lineHeight: "var(--line-height-tight)",
              }}
            >
              قبل از سفارش،
              <br />
              این‌ها را بدانید.
            </h2>

            <p
              className="mt-6 max-w-md text-base sm:text-lg"
              style={{
                color: "var(--color-text-muted)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              اگر درباره روش چاپ، قیمت، تیراژ یا روند سفارش سوالی دارید،
              پاسخ بسیاری از سوالات رایج را اینجا پیدا می‌کنید.
            </p>

            <p
              className="mt-6 max-w-md text-sm"
              style={{
                color: "var(--color-text-faint)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              اگر پاسخ سوالتان را پیدا نکردید، با ما تماس بگیرید تا پروژه‌تان
              را دقیق‌تر بررسی کنیم.
            </p>
          </div>

          {/* FAQ list */}
          <div className="lg:col-span-8">
            <div
              className="overflow-hidden rounded-lg border"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg)",
              }}
            >
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b last:border-b-0"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-right sm:px-8 sm:py-7"
                    style={{ color: "var(--color-text)" }}
                  >
                    <span className="text-base font-bold leading-7 sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-open:rotate-45"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text)",
                      }}
                      aria-hidden="true"
                    >
                      <span className="relative block h-3 w-3">
                        <span
                          className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2"
                          style={{
                            backgroundColor: "currentColor",
                          }}
                        />
                        <span
                          className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2"
                          style={{
                            backgroundColor: "currentColor",
                          }}
                        />
                      </span>
                    </span>
                  </summary>

                  <div className="px-6 pb-7 sm:px-8 sm:pb-8">
                    <div className="flex gap-4">
                      <span
                        className="mt-2 hidden h-px w-8 shrink-0 sm:block"
                        style={{
                          backgroundColor: "var(--color-accent)",
                        }}
                        aria-hidden="true"
                      />

                      <p
                        className="max-w-2xl text-sm sm:text-base"
                        style={{
                          color: "var(--color-text-muted)",
                          lineHeight: "var(--line-height-relaxed)",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* FAQ count */}
            <div className="mt-5 flex items-center justify-between">
              <span
                className="text-xs"
                style={{ color: "var(--color-text-faint)" }}
              >
                {faqs.length} سوال و پاسخ
              </span>

              <span
                className="text-xs"
                style={{ color: "var(--color-text-faint)" }}
              >
                برای مشاهده پاسخ، سوال را باز کنید
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
