export const metadata = {
  title: "درباره آیریک | چاپ برای کسب‌وکارها",
  description:
    "آیریک یک مجموعه چاپ است که تلاش می‌کند فرآیند سفارش و اجرای چاپ را برای کسب‌وکارها ساده، دقیق و قابل اتکا کند.",
};

const principles = [
  {
    number: "۰۱",
    title: "کیفیت قابل اتکا",
    text: "کیفیت برای ما فقط به خروجی یک سفارش محدود نمی‌شود. مهم است که نتیجه در سفارش‌های بعدی هم تا حد ممکن قابل پیش‌بینی و ثابت باشد.",
  },
  {
    number: "۰۲",
    title: "انتخاب درست روش چاپ",
    text: "هر محصول و هر پروژه الزاماً به یک روش چاپ نیاز ندارد. قبل از اجرا، شرایط پروژه را بررسی می‌کنیم تا روش مناسب انتخاب شود.",
  },
  {
    number: "۰۳",
    title: "فرآیند ساده",
    text: "سفارش چاپ نباید برای مشتری تبدیل به یک فرآیند پیچیده و زمان‌گیر شود. هدف ما ارتباط روشن و هماهنگی ساده از شروع تا تحویل است.",
  },
  {
    number: "۰۴",
    title: "همکاری بلندمدت",
    text: "برای ما ارزش یک سفارش فقط در همان سفارش نیست. می‌خواهیم تبدیل به مجموعه‌ای شویم که کسب‌وکارها بتوانند برای پروژه‌های بعدی هم روی آن حساب کنند.",
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
              چاپ،
              <br />
              وقتی درست انجام شود،
              <br />
              دیده نمی‌شود.
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-black/60 md:text-xl">
              چاپ خوب قرار نیست توجه را از محصول شما بگیرد. قرار است آنچه
              طراحی کرده‌اید، ساخته‌اید یا می‌فروشید، همان‌طور که باید دیده
              شود. آیریک برای همین نقطه شکل گرفته است؛ برای تبدیل یک فایل
              طراحی به یک خروجی واقعی، دقیق و قابل اتکا.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 md:gap-28">
            <div>
              <p className="text-sm font-medium text-black/45">
                نگاه ما
              </p>

              <h2 className="mt-7 text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                بین طراحی و تولید،
                <br />
                یک مرحله مهم وجود دارد:
                <br />
                اجرا.
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-9 text-black/60">
              <p>
                یک طراحی خوب، زمانی ارزش واقعی خود را نشان می‌دهد که در
                دنیای واقعی درست اجرا شود. جنس متریال، روش چاپ، رنگ، تیراژ
                و حتی جزئیات کوچک می‌توانند نتیجه نهایی را تغییر دهند.
              </p>

              <p>
                به همین دلیل آیریک فقط به دنبال «چاپ کردن» نیست. ما تلاش
                می‌کنیم بین نیاز پروژه و روش اجرای آن ارتباط درستی ایجاد
                کنیم؛ از سفارش‌های ساده تا پروژه‌هایی که نیاز به بررسی و
                هماهنگی بیشتری دارند.
              </p>

              <p>
                نتیجه‌ای که دنبال می‌کنیم ساده است: خروجی‌ای که بتوانید
                با خیال راحت آن را تحویل بگیرید، استفاده کنید و دوباره
                سفارش دهید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#f5f3ef]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-7 text-sm font-medium text-black/45">
              اصول آیریک
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
              چهار چیز که در هر سفارش
              <br />
              برای ما اهمیت دارد.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="border-b border-black/10 py-12 md:p-14 md:nth-[odd]:border-l"
              >
                <span className="text-xs text-black/35">
                  {principle.number}
                </span>

                <h3 className="mt-8 text-2xl font-medium tracking-tight">
                  {principle.title}
                </h3>

                <p className="mt-5 max-w-lg leading-8 text-black/55">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                چه کار می‌کنیم؟
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl">
                از چاپ روی لباس
                <br />
                تا بسته‌بندی.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                خدمات آیریک برای نیازهای مختلف چاپی طراحی شده‌اند؛ از
                چاپ سیلک و DTF گرفته تا چاپ روی لباس و پارچه، بگ، جعبه،
                کارتن و دیگر محصولات چاپی.
              </p>

              <p className="mt-7 text-lg leading-9 text-black/60">
                اما خدمات، تمام داستان نیستند. بخش مهم‌تر این است که بدانیم
                برای هر پروژه کدام روش، متریال و فرآیند نتیجه بهتری ایجاد
                می‌کند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-12">
          <div className="grid gap-14 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-7 text-sm font-medium text-black/45">
                برای کسب‌وکارها
              </p>

              <h2 className="text-3xl font-medium leading-[1.4] tracking-tight md:text-5xl">
                اگر چاپ بخشی از کار شماست،
                <br />
                ما هم بخشی از تیم شما هستیم.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-black/60">
                برای کسب‌وکارهایی که سفارش‌های چاپی تکرارشونده یا تیراژ
                بالا دارند، ثبات اهمیت بیشتری پیدا می‌کند. هدف ما این است
                که بعد از چند سفارش، نیاز نباشد هر بار همه‌چیز را از ابتدا
                توضیح دهید.
              </p>

              <p className="mt-7 text-lg leading-9 text-black/60">
                مشخصات، نیازها و تجربه سفارش‌های قبلی می‌توانند پایه‌ای
                برای همکاری ساده‌تر و سریع‌تر در پروژه‌های بعدی باشند.
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

            <h2 className="text-3xl font-medium leading-[1.45] tracking-tight md:text-5xl lg:text-6xl">
              ما چاپ را پیچیده‌تر نمی‌کنیم.
              <br />
              سعی می‌کنیم درست انجامش دهیم.
            </h2>

            <p className="mt-9 max-w-2xl text-lg leading-9 text-black/55">
              اگر پروژه‌ای برای چاپ دارید، اطلاعاتش را برای ما بفرستید.
              از همان‌جا می‌توانیم درباره روش اجرا، زمان و هزینه صحبت کنیم.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
