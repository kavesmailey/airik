import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const solutions = [
  {
    number: "۰۱",
    title: "برندها و کسب‌وکارها",
    description:
      "برای برندهایی که به چاپ بخشی از هویت و تجربه محصولشان نگاه می‌کنند؛ از بسته‌بندی و لیبل تا اقلام تبلیغاتی و محصولات برندشده.",
    items: [
      "چاپ بسته‌بندی و جعبه",
      "چاپ روی محصولات و پوشاک",
      "اقلام تبلیغاتی و سازمانی",
    ],
  },
  {
    number: "۰۲",
    title: "فروشگاه‌ها و آنلاین‌شاپ‌ها",
    description:
      "برای سفارش‌های فروشگاهی که کیفیت، ظاهر حرفه‌ای و تحویل منظم اهمیت دارد؛ چه برای یک محصول و چه برای سفارش‌های تکرارشونده.",
    items: [
      "بسته‌بندی سفارش‌ها",
      "بگ و اقلام فروشگاهی",
      "چاپ روی لباس و محصولات",
    ],
  },
  {
    number: "۰۳",
    title: "سازمان‌ها و شرکت‌ها",
    description:
      "راهکارهای چاپی برای پروژه‌های سازمانی، رویدادها و کمپین‌ها؛ با امکان اجرای سفارش‌های تیراژ بالا و هماهنگی یکپارچه.",
    items: [
      "لباس و محصولات سازمانی",
      "اقلام نمایشگاهی و رویداد",
      "سفارش‌های تیراژ بالا",
    ],
  },
  {
    number: "۰۴",
    title: "طراحان و آژانس‌ها",
    description:
      "اگر طراحی را شما انجام می‌دهید، ما بخش اجرایی آن را به عهده می‌گیریم تا ایده نهایی شما روی متریال واقعی، دقیق و قابل اتکا اجرا شود.",
    items: [
      "اجرای فایل‌های طراحی",
      "مشاوره فنی پیش از چاپ",
      "نمونه‌سازی و تولید نهایی",
    ],
  },
];

export default function BusinessSolutions() {
  return (
    <section
      className="section-iric"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-iric">
        <SectionHeading
          eyebrow="برای کسب‌وکارها"
          title="چاپ فقط یک سرویس نیست؛ بخشی از تجربه برند شماست."
          description="از سفارش‌های کوچک فروشگاهی تا پروژه‌های سازمانی و تولیدات برندها، راهکار چاپی باید متناسب با محصول، مخاطب و هدف کسب‌وکار انتخاب شود."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border sm:grid-cols-2">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 80}>
              <article
                className="h-full p-8 sm:p-10 lg:p-12"
                style={{
                  backgroundColor: "var(--color-bg)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-start justify-between gap-6">
                  <span
                    className="text-xs font-bold tracking-wider"
                    style={{ color: "var(--color-text-faint)" }}
                  >
                    {solution.number}
                  </span>

                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                </div>

                <h3
                  className="mt-12 text-2xl font-bold sm:text-3xl"
                  style={{
                    color: "var(--color-text)",
                    lineHeight: "var(--line-height-tight)",
                  }}
                >
                  {solution.title}
                </h3>

                <p
                  className="mt-5 text-base sm:text-lg"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {solution.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {solution.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm sm:text-base"
                      style={{ color: "var(--color-text)" }}
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          backgroundColor: "var(--color-accent)",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350}>
          <div
            className="mt-12 flex flex-col gap-6 rounded-md p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12"
            style={{
              backgroundColor: "var(--color-accent)",
            }}
          >
            <div className="max-w-2xl">
              <h3
                className="text-2xl font-bold sm:text-3xl"
                style={{
                  color: "var(--color-accent-contrast)",
                  lineHeight: "var(--line-height-tight)",
                }}
              >
                پروژه‌تان را با ما بررسی کنید.
              </h3>

              <p
                className="mt-3 text-base"
                style={{
                  color: "var(--color-accent-contrast)",
                  opacity: 0.8,
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                مشخصات سفارش، فایل طراحی یا حتی ایده اولیه‌تان را بفرستید تا
                درباره بهترین روش اجرا و هزینه آن با هم صحبت کنیم.
              </p>
            </div>

            <a
              href="/استعلام-قیمت"
              className="inline-flex shrink-0 items-center justify-center rounded-md px-6 py-3 text-sm font-bold transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--color-accent-contrast)",
                color: "var(--color-accent)",
              }}
            >
              استعلام قیمت
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
