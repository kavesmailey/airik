import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    question: "برای استعلام قیمت چه اطلاعاتی لازم است؟",
    answer:
      "برای برآورد اولیه، نوع محصول، تعداد، ابعاد، جنس یا متریال، روش چاپ در صورت مشخص بودن و فایل طراحی را ارسال کنید. اگر هنوز روش چاپ را نمی‌دانید، کافی است مشخصات محصول و کاربرد آن را بگویید تا مناسب‌ترین گزینه را پیشنهاد دهیم.",
  },
  {
    question: "اگر ندانم کدام روش چاپ مناسب است، می‌توانید راهنمایی کنید؟",
    answer:
      "بله. انتخاب روش چاپ به عواملی مثل جنس محصول، تعداد، نوع طرح، تعداد رنگ، میزان جزئیات و بودجه بستگی دارد. قبل از تولید، سفارش را بررسی می‌کنیم و مناسب‌ترین روش را پیشنهاد می‌دهیم.",
  },
  {
    question: "آیا قبل از چاپ نمونه دریافت می‌کنم؟",
    answer:
      "بسته به نوع پروژه و روش چاپ، امکان نمونه‌گیری یا تأیید نمونه پیش از تولید نهایی وجود دارد. برای سفارش‌هایی که رنگ، جایگذاری یا کیفیت چاپ اهمیت ویژه‌ای دارد، این مرحله می‌تواند بخشی از فرآیند اجرا باشد.",
  },
  {
    question: "حداقل تعداد سفارش چقدر است؟",
    answer:
      "حداقل تیراژ به نوع محصول و روش چاپ بستگی دارد و برای همه خدمات یکسان نیست. هنگام بررسی سفارش، تعداد مناسب برای اجرای اقتصادی و باکیفیت را به شما اعلام می‌کنیم.",
  },
  {
    question: "چقدر طول می‌کشد تا سفارش آماده شود؟",
    answer:
      "زمان آماده‌سازی به نوع سفارش، تعداد، روش چاپ و وضعیت آماده بودن فایل بستگی دارد. بعد از بررسی مشخصات، زمان تقریبی تولید و تحویل را قبل از شروع کار اعلام می‌کنیم.",
  },
  {
    question: "فایل طراحی باید چه فرمتی داشته باشد؟",
    answer:
      "ترجیحاً فایل‌های وکتور مانند AI، EPS، PDF یا SVG ارسال شوند. فایل‌های تصویری با کیفیت بالا نیز در بعضی روش‌های چاپ قابل استفاده‌اند. اگر فایل شما آماده نیست یا درباره مشخصات آن مطمئن نیستید، قبل از چاپ آن را بررسی می‌کنیم.",
  },
  {
    question: "آیا برای کسب‌وکارها و سفارش‌های تکراری همکاری می‌کنید؟",
    answer:
      "بله. برای برندها، فروشگاه‌ها و شرکت‌هایی که سفارش چاپ آن‌ها تکرار می‌شود، می‌توان فرآیند مشخصی برای تولید، هماهنگی فایل‌ها و سفارش‌های دوره‌ای تعریف کرد تا کیفیت و خروجی در سفارش‌های مختلف یکدست باقی بماند.",
  },
  {
    question: "آیا می‌توانم فقط فایل طراحی را برای اجرا ارسال کنم؟",
    answer:
      "بله. اگر طراحی توسط خودتان یا تیم طراحی‌تان انجام شده، می‌توانید فایل نهایی را ارسال کنید. فایل از نظر فنی بررسی می‌شود و در صورت وجود مواردی که روی نتیجه چاپ تأثیر می‌گذارند، قبل از اجرا با شما هماهنگ خواهیم کرد.",
  },
];

export default function FaqSection() {
  return (
    <section
      className="section-iric"
      style={{ backgroundColor: "var(--color-bg-light)" }}
    >
      <div className="container-iric">
        <SectionHeading
          eyebrow="سؤالات متداول"
          title="قبل از سفارش، احتمالاً جواب سؤال شما اینجاست."
          description="اگر سؤال دیگری دارید، می‌توانید مشخصات پروژه را برای ما ارسال کنید تا دقیق‌تر راهنمایی‌تان کنیم."
          tone="dark"
        />

        <div className="mx-auto mt-16 max-w-4xl">
          <div
            className="overflow-hidden rounded-md border"
            style={{ borderColor: "var(--color-border)" }}
          >
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 50}>
                <details
                  className="group border-b last:border-b-0"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-8 px-6 py-7 text-right sm:px-8"
                    style={{ color: "var(--color-text)" }}
                  >
                    <span className="text-base font-bold sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-200 group-open:rotate-45"
                      style={{
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-text-muted)",
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>

                  <div
                    className="px-6 pb-7 sm:px-8"
                    style={{
                      color: "var(--color-text-muted)",
                      lineHeight: "var(--line-height-relaxed)",
                    }}
                  >
                    <p className="max-w-3xl">{faq.answer}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
