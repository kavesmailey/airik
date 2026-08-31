import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "درباره AIRIK",
  description:
    "آشنایی با AIRIK، رویکرد ما به چاپ، انتخاب روش تولید و همکاری با برندها و کسب‌وکارها.",
};

const values = [
  {
    number: "۰۱",
    title: "اول مسئله، بعد روش چاپ",
    text: "هر پروژه از یک فایل آماده و یک دستگاه چاپ شروع نمی‌شود. ابتدا باید بدانیم چه چیزی قرار است تولید شود، کجا استفاده می‌شود و چه نتیجه‌ای انتظار می‌رود.",
  },
  {
    number: "۰۲",
    title: "متریال بخشی از تصمیم است",
    text: "روش چاپ را نمی‌توان جدا از سطحی که قرار است روی آن چاپ شود انتخاب کرد. جنس، بافت، ابعاد و کاربرد نهایی روی نتیجه اثر می‌گذارند.",
  },
  {
    number: "۰۳",
    title: "اطلاعات فنی باید قابل فهم باشد",
    text: "مشتری قرار نیست متخصص چاپ باشد. وظیفه ما این است که تفاوت روش‌ها، محدودیت‌ها و انتخاب‌های فنی را روشن و قابل فهم توضیح دهیم.",
  },
  {
    number: "۰۴",
    title: "نتیجه مهم‌تر از پیچیدگی است",
    text: "فرآیند خوب الزاماً پیچیده نیست. اگر روش مناسب درست انتخاب شده باشد، تولید باید تا جای ممکن روشن، قابل پیش‌بینی و قابل اتکا باشد.",
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              درباره AIRIK
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              ما فقط فایل شما را
              <br />
              چاپ نمی‌کنیم.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              چاپ بخشی از مسیر تولید یک محصول است. انتخاب روش، متریال، رنگ،
              تیراژ و جزئیات اجرا می‌تواند نتیجه نهایی را تغییر دهد. AIRIK
              تلاش می‌کند این تصمیم‌ها را قبل از تولید، ساده و روشن کند.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              شروع یک پروژه
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                نگاه ما
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                چاپ یک خروجی نیست؛
                <br />
                یک تصمیم تولیدی است.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60">
              <p>
                چیزی که روی صفحه نمایش می‌بینید، الزاماً همان چیزی نیست که
                روی محصول نهایی دیده می‌شود. سطح چاپ، روش اجرا، رنگ، اندازه
                و حتی شکل محصول می‌توانند نتیجه را تغییر دهند.
              </p>

              <p>
                به همین دلیل قبل از اینکه درباره دستگاه یا تکنولوژی صحبت
                کنیم، باید خود پروژه را بفهمیم. قرار است چه چیزی چاپ شود؟
                برای چه کسی؟ با چه کاربردی؟ و در چه شرایطی قرار است استفاده
                شود؟
              </p>

              <p>
                وقتی این تصویر روشن باشد، انتخاب روش چاپ هم منطقی‌تر می‌شود.
                این همان نقطه‌ای است که AIRIK می‌خواهد در آن نقش داشته باشد:
                تبدیل یک نیاز چاپی به یک تصمیم قابل اجرا.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              دیدگاه AIRIK
            </p>

            <p className="text-3xl font-medium leading-[1.55] tracking-tight md:text-5xl lg:text-6xl">
              بهترین نتیجه لزوماً
              <br />
              پیچیده‌ترین راه‌حل نیست.
            </p>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/55">
              روش مناسب، روشی است که با محصول، متریال، تعداد، جزئیات طرح و
              کاربرد نهایی هماهنگ باشد. گاهی یک تکنولوژی ساده‌تر دقیقاً همان
              چیزی است که پروژه نیاز دارد.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              اصول ما
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              چیزهایی که در هر پروژه
              <br />
              اهمیت دارند.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-b border-black/10 py-12 md:p-14"
              >
                <span className="text-xs text-black/35">
                  {value.number}
                </span>

                <h3 className="mt-8 text-2xl font-medium tracking-tight md:text-3xl">
                  {value.title}
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-black/55">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                چه کار می‌کنیم؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                از پوشاک
                <br />
                تا بسته‌بندی.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60">
              <p>
                AIRIK مجموعه‌ای از خدمات چاپ را برای نیازهای مختلف ارائه
                می‌کند؛ از چاپ سیلک و DTF تا چاپ روی لباس و پارچه، بگ،
                کارتن، جعبه، لیوان و دیگر محصولات.
              </p>

              <p>
                اما فهرست خدمات، تمام داستان نیست. ارزش اصلی زمانی ایجاد
                می‌شود که برای هر پروژه، روش چاپ و مسیر تولید متناسب با
                نیاز واقعی انتخاب شود.
              </p>

              <Link
                href="/خدمات"
                className="inline-flex items-center gap-2 pt-3 text-sm text-black transition-opacity hover:opacity-60"
              >
                مشاهده خدمات
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              شروع همکاری
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
              لازم نیست همه جواب‌ها
              <br />
              را از قبل بدانید.
            </h2>

            <p className="mt-9 max-w-3xl text-lg leading-9 text-black/60">
              کافی است بدانیم چه چیزی می‌خواهید تولید کنید. اطلاعات پروژه را
              بفرستید و انتخاب روش چاپ را به ما بسپارید.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
