export const metadata = {
  title: "درباره آیریک | چاپی که بخشی از برند شماست",
  description:
    "آیریک یک مجموعه چاپ است که تلاش می‌کند فرآیند چاپ را برای برندها و کسب‌وکارها ساده، دقیق و قابل اتکا کند.",
};

const values = [
  {
    number: "۰۱",
    title: "دقت قبل از سرعت",
    text: "برای ما مهم است روش درست چاپ برای پروژه انتخاب شود؛ حتی اگر این یعنی قبل از تولید، کمی بیشتر درباره جزئیات صحبت کنیم.",
  },
  {
    number: "۰۲",
    title: "کیفیت در جزئیات",
    text: "چاپ خوب فقط زمانی که محصول از دستگاه بیرون می‌آید تعریف نمی‌شود. متریال، رنگ، جزئیات طرح و اجرای نهایی همه بخشی از نتیجه‌اند.",
  },
  {
    number: "۰۳",
    title: "ارتباط روشن",
    text: "قرار نیست مشتری متخصص چاپ باشد. ما تلاش می‌کنیم اطلاعات فنی را به زبان ساده توضیح دهیم تا تصمیم‌گیری راحت‌تر شود.",
  },
  {
    number: "۰۴",
    title: "همکاری بلندمدت",
    text: "برای کسب‌وکارهایی که سفارش چاپشان تکرار می‌شود، هدف فقط انجام یک سفارش نیست؛ ساختن یک فرآیند قابل اعتماد است.",
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              درباره آیریک
            </p>

            <h1 className="text-4xl font-medium leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
              چاپ فقط چیزی نیست
              <br />
              که روی یک محصول می‌بینید.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              چاپ بخشی از چیزی است که یک محصول، بسته‌بندی یا برند را در
              دنیای واقعی قابل دیدن می‌کند. آیریک تلاش می‌کند این بخش از
              مسیر را با دقت، کیفیت و فرآیندی ساده‌تر انجام دهد.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                نگاه ما
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                از سفارش چاپ
                <br />
                تا نتیجه نهایی.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60">
              <p>
                چاپ در ظاهر ساده به نظر می‌رسد؛ یک فایل، یک محصول و یک
                دستگاه. اما نتیجه خوب از کنار هم قرار گرفتن جزئیات زیادی
                ساخته می‌شود.
              </p>

              <p>
                انتخاب روش چاپ، شناخت متریال، آماده‌سازی فایل، تعداد رنگ،
                تیراژ و حتی کاربرد نهایی محصول می‌توانند روی خروجی تأثیر
                بگذارند.
              </p>

              <p>
                نگاه آیریک این است که قبل از شروع چاپ، خود مسئله را
                بفهمیم. بعد مناسب‌ترین روش را برای رسیدن به نتیجه انتخاب
                کنیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-medium text-black/45">
              فلسفه آیریک
            </p>

            <p className="text-3xl font-medium leading-[1.55] tracking-tight md:text-5xl lg:text-6xl">
              ما فکر می‌کنیم بهترین چاپ،
              <br />
              چاپی است که بعد از تحویل گرفتن
              <br />
              لازم نباشد درباره‌اش فکر کنید.
            </p>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/55">
              نتیجه باید همان چیزی باشد که انتظارش را داشتید؛ تمیز،
              درست و متناسب با چیزی که قرار است چاپ شود.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              اصول ما
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              چیزهایی که در هر پروژه
              <br />
              برایمان اهمیت دارند.
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

      {/* Services */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
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

            <div>
              <p className="text-lg leading-9 text-black/60">
                آیریک مجموعه‌ای از خدمات چاپ را برای نیازهای مختلف ارائه
                می‌کند؛ از چاپ سیلک و DTF تا چاپ روی لباس و پارچه، بگ،
                کارتن، جعبه، لیوان و دیگر محصولات.
              </p>

              <p className="mt-7 text-lg leading-9 text-black/60">
                اما سرویس‌ها فقط بخشی از ماجرا هستند. مهم‌تر از اینکه چه
                چیزی چاپ می‌کنیم، این است که چگونه برای هر پروژه روش مناسب
                را پیدا می‌کنیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-sm font-medium text-black/45">
              آیریک
            </p>

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
              قرار است چاپ،
              <br />
              ساده‌تر از چیزی باشد که فکر می‌کنید.
            </h2>

            <p className="mt-9 max-w-3xl text-lg leading-9 text-black/60">
              اگر پروژه‌ای دارید، لازم نیست همه جواب‌ها را از قبل بدانید.
              کافی است درباره چیزی که می‌خواهید با ما صحبت کنید.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
