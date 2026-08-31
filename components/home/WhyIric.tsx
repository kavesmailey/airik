export default function WhyIric() {
  const reasons = [
    {
      number: "01",
      title: "انتخاب روش درست",
      description:
        "سیلک، DTF یا روش دیگری؟ انتخاب روش چاپ را بر اساس محصول، طرح، تیراژ و نتیجه‌ای که می‌خواهید انجام می‌دهیم؛ نه صرفاً بر اساس چیزی که در دسترس است.",
    },
    {
      number: "02",
      title: "توجه به جزئیات",
      description:
        "از آماده‌سازی فایل تا اجرای نهایی، جزئیاتی مثل رنگ، جایگذاری، ابعاد، جنس سطح و کیفیت چاپ بررسی می‌شوند تا نتیجه نهایی با انتظار شما فاصله نداشته باشد.",
    },
    {
      number: "03",
      title: "کیفیت قابل تکرار",
      description:
        "برای یک برند، کیفیت فقط به یک نمونه محدود نمی‌شود. هدف ما رسیدن به نتیجه‌ای پایدار و قابل تکرار در تمام تیراژ است.",
    },
    {
      number: "04",
      title: "همراهی از ابتدا تا تحویل",
      description:
        "از اولین مشاوره و بررسی فایل تا اجرای سفارش، کنترل کیفیت و تحویل، مسیر پروژه مشخص است و در هر مرحله می‌دانید چه اتفاقی در حال انجام است.",
    },
  ];

  return (
    <section
      className="py-28 sm:py-32 lg:py-40"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-iric">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              چرا آیریک؟
            </p>
          </div>

          <h2
            className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{
              color: "var(--color-text)",
              lineHeight: "1.2",
            }}
          >
            ما فقط چاپ نمی‌کنیم؛
            <br />
            <span style={{ color: "var(--color-text-muted)" }}>
              قبل از چاپ، مسئله را می‌فهمیم.
            </span>
          </h2>

          <p
            className="mt-7 max-w-2xl text-base sm:text-lg"
            style={{
              color: "var(--color-text-muted)",
              lineHeight: "2",
            }}
          >
            هر سفارش چاپی یک پاسخ واحد ندارد. جنس محصول، تعداد، رنگ، جزئیات
            طرح، محل چاپ و حتی نحوه استفاده از محصول، روی انتخاب روش چاپ
            تأثیر می‌گذارد. آیریک تلاش می‌کند قبل از اجرای سفارش، بهترین مسیر
            را برای پروژه پیدا کند.
          </p>
        </div>

        {/* Reasons */}
        <div
          className="mt-20 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <article
                key={reason.number}
                className="group border-b py-10 sm:min-h-[330px] sm:px-7 lg:border-b-0 lg:border-l lg:px-8 lg:py-12"
                style={{
                  borderColor: "var(--color-border)",
                  ...(index === 0
                    ? {
                        paddingRight: "0",
                      }
                    : {}),
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {reason.number}
                  </span>

                  <span
                    className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: "var(--color-text-faint)" }}
                  >
                    آیریک
                  </span>
                </div>

                <h3
                  className="mt-14 text-xl font-bold sm:text-2xl"
                  style={{
                    color: "var(--color-text)",
                    lineHeight: "1.4",
                  }}
                >
                  {reason.title}
                </h3>

                <p
                  className="mt-5 text-sm sm:text-base"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: "1.9",
                  }}
                >
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 flex justify-end">
          <p
            className="max-w-xl text-right text-sm sm:text-base"
            style={{
              color: "var(--color-text-faint)",
              lineHeight: "1.9",
            }}
          >
            نتیجه خوب از چاپ خوب شروع نمی‌شود؛ از تصمیم درست قبل از چاپ شروع
            می‌شود.
          </p>
        </div>
      </div>
    </section>
  );
}
