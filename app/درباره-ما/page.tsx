import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "درباره ما | Ayric",
  description:
    "درباره آیریک؛ مجموعه‌ای برای ارائه راهکارهای چاپ و تولید برای برندها و کسب‌وکارها.",
};

const values = [
  {
    number: "01",
    title: "دقت",
    text: "جزئیات کوچک می‌توانند تفاوت بزرگی در نتیجه نهایی ایجاد کنند.",
  },
  {
    number: "02",
    title: "کیفیت",
    text: "کیفیت برای ما فقط مشخصات فنی نیست؛ تجربه‌ای است که محصول منتقل می‌کند.",
  },
  {
    number: "03",
    title: "راهکار",
    text: "هر پروژه مسئله متفاوتی دارد و باید راهکار متناسب خودش را پیدا کند.",
  },
  {
    number: "04",
    title: "همراهی",
    text: "از اولین گفتگو تا تحویل نهایی، کنار پروژه می‌مانیم.",
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              درباره آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.25] tracking-tight md:text-6xl lg:text-7xl">
              چاپ را از
              <br />
              زاویه دیگری می‌بینیم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              آیریک برای برندها و کسب‌وکارهایی ساخته شده که خروجی
              فیزیکی را بخشی از تجربه برند خود می‌دانند، نه صرفاً یک
              محصول چاپ‌شده.
            </p>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            <div>
              <p className="text-sm font-medium text-black/40">
                نگاه ما
              </p>
            </div>

            <div>
              <p className="text-3xl font-medium leading-[1.5] tracking-tight md:text-5xl">
                ما معتقدیم چاپ فقط انتقال یک تصویر روی یک سطح نیست.
                <span className="text-black/35">
                  {" "}
                  بخشی از چیزی است که مخاطب لمس می‌کند، می‌بیند و
                  به خاطر می‌سپارد.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section>
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#e7e2d4] md:min-h-[650px]">
            <div className="text-center">
              <span className="block text-xs tracking-[0.3em] text-black/30">
                AYRIC
              </span>

              <span className="mt-5 block text-[9rem] font-medium leading-none tracking-[-0.1em] text-black/10 md:text-[15rem]">
                A
              </span>
            </div>

            <p className="absolute bottom-7 right-7 max-w-xs text-sm leading-7 text-black/40 md:bottom-10 md:right-10">
              جایی که ایده به یک چیز واقعی تبدیل می‌شود.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/40">
                داستان آیریک
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                از یک سفارش
                <br />
                تا یک رابطه.
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-9 text-black/60 md:text-xl md:leading-10">
              <p>
                آیریک با یک نگاه ساده شکل گرفته است: اینکه فرآیند چاپ
                نباید فقط از دریافت فایل و تحویل محصول تشکیل شود.
              </p>

              <p>
                ما می‌خواهیم قبل از تولید، مسئله را بفهمیم؛ متریال و
                روش مناسب را پیدا کنیم و مطمئن شویم نتیجه نهایی با
                چیزی که برند در ذهن دارد فاصله‌ای ندارد.
              </p>

              <p>
                به همین دلیل هر پروژه برای ما فرصتی است برای پیدا کردن
                راهی بهتر برای تبدیل یک ایده به یک تجربه فیزیکی.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/40">
              اصول ما
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              چیزهایی که
              <br />
              کوتاه نمی‌آیند.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.number}
                className="border-b border-black/10 py-10 md:px-10 md:py-14 md:[&:nth-child(odd)]:border-l"
              >
                <span className="text-xs text-black/30">
                  {value.number}
                </span>

                <h3 className="mt-7 text-2xl font-medium">
                  {value.title}
                </h3>

                <p className="mt-5 max-w-md leading-8 text-black/50">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/40">
              چرا آیریک؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl lg:text-6xl">
              چون بین یک فایل خوب
              <br />
              و یک خروجی خوب،
              <br />
              تفاوت زیادی وجود دارد.
            </h2>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/55 md:text-xl md:leading-10">
              تجربه، شناخت متریال، انتخاب روش درست و توجه به جزئیات
              اجرایی همان چیزی است که یک خروجی معمولی را از یک خروجی
              درست و قابل اعتماد جدا می‌کند.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-white/40">
              همکاری
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl lg:text-6xl">
              یک پروژه دارید؟
              <br />
              با هم شروعش کنیم.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/55">
              درباره پروژه‌تان با ما صحبت کنید. حتی اگر هنوز جزئیات
              کامل را نمی‌دانید.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/استعلام-قیمت"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm text-black transition-transform hover:-translate-y-0.5"
              >
                استعلام قیمت
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/تماس-با-ما"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm transition-colors hover:border-white"
              >
                تماس با ما
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
