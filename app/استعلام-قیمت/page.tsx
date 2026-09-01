import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "استعلام قیمت چاپ | آیریک",
  description:
    "برای استعلام قیمت خدمات چاپ آیریک، نوع محصول، تعداد، ابعاد و زمان مورد نیاز پروژه را ارسال کنید تا درخواست شما بررسی شود.",
  alternates: {
    canonical: "/استعلام-قیمت",
  },
  openGraph: {
    title: "استعلام قیمت چاپ | آیریک",
    description:
      "مشخصات پروژه چاپی خود را برای آیریک ارسال کنید و برای انتخاب روش چاپ و برآورد قیمت راهنمایی بگیرید.",
    type: "website",
  },
};

const projectTypes = [
  "چاپ روی لباس",
  "چاپ روی پارچه",
  "بسته‌بندی",
  "چاپ روی محصول",
  "اقلام تبلیغاتی",
  "چاپ کاغذ و مقوا",
  "سایر",
];

const faqs = [
  {
    question: "برای استعلام قیمت چاپ چه اطلاعاتی لازم است؟",
    answer:
      "برای شروع، نوع محصول، تعداد تقریبی، ابعاد و زمان مورد نیاز پروژه کافی است. اگر اطلاعات دیگری مثل جنس متریال یا روش چاپ را می‌دانید، می‌توانید آن را هم در توضیحات وارد کنید.",
  },
  {
    question: "اگر روش چاپ مناسب را ندانم چه؟",
    answer:
      "نیازی نیست روش چاپ را از قبل مشخص کنید. کافی است محصول و کاربرد آن را توضیح دهید تا بر اساس مشخصات پروژه، روش مناسب چاپ بررسی شود.",
  },
  {
    question: "آیا می‌توانم فایل طراحی را همراه درخواست ارسال کنم؟",
    answer:
      "بله. اگر فایل طراحی یا نمونه‌ای از محصول دارید، می‌توانید آن را همراه درخواست خود ارسال کنید تا بررسی و برآورد دقیق‌تر انجام شود.",
  },
  {
    question: "قیمت چاپ بر چه اساسی تعیین می‌شود؟",
    answer:
      "قیمت نهایی به عواملی مانند نوع چاپ، محصول یا متریال، تعداد، ابعاد، تعداد رنگ، جزئیات اجرا و زمان مورد نیاز بستگی دارد.",
  },
  {
    question: "آیا برای سفارش‌های برندها و کسب‌وکارها هم استعلام قیمت انجام می‌شود؟",
    answer:
      "بله. سفارش‌های چاپی برندها، کسب‌وکارها و پروژه‌های سازمانی قابل بررسی هستند.",
  },
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export default function QuotePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خانه",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "استعلام قیمت",
        item: "/استعلام-قیمت",
      },
    ],
  };

  const quotePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "استعلام قیمت چاپ",
    description:
      "صفحه استعلام قیمت خدمات چاپ آیریک برای سفارش‌های چاپی برندها و کسب‌وکارها.",
    url: "/استعلام-قیمت",
    mainEntity: {
      "@type": "Service",
      name: "استعلام قیمت خدمات چاپ",
      provider: {
        "@type": "Organization",
        name: "آیریک",
      },
      areaServed: {
        "@type": "Country",
        name: "Iran",
      },
      serviceType: "خدمات چاپ",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main dir="rtl">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={quotePageSchema} />
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12 lg:py-40">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
              استعلام قیمت چاپ
            </p>

            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[1.12] tracking-[-0.045em]">
              مشخصات پروژه را
              <br />
              برای ما بفرستید.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-black/55 sm:mt-10 sm:text-lg sm:leading-9">
              برای دریافت برآورد قیمت خدمات چاپ، مشخصات اولیه پروژه
              خود را ارسال کنید. نوع محصول، تعداد، ابعاد و زمان مورد
              نیاز به ما کمک می‌کند تا درخواست شما را دقیق‌تر بررسی
              کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER / FEO */}
      <section className="border-b border-black/10 bg-[#f7f5f1]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-medium text-black/40 sm:text-sm">
              استعلام قیمت چاپ
            </p>

            <p className="text-lg leading-9 text-black/65 sm:text-xl">
              برای استعلام قیمت چاپ در آیریک، کافی است نوع محصول،
              تعداد تقریبی، ابعاد و زمان مورد نیاز را مشخص کنید.
              در صورت نیاز می‌توانید فایل طراحی و توضیحات فنی پروژه
              را نیز ارسال کنید تا امکان بررسی دقیق‌تر وجود داشته باشد.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-20 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            {/* INTRO */}
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                اطلاعات پروژه
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight sm:text-4xl">
                هرچه اطلاعات
                <br />
                دقیق‌تر باشد،
                <br />
                برآورد دقیق‌تر است.
              </h2>

              <p className="mt-8 max-w-md text-base leading-8 text-black/50">
                اگر هنوز بعضی از مشخصات پروژه را نمی‌دانید، مشکلی
                نیست. اطلاعاتی که در اختیار دارید را وارد کنید و
                جزئیات باقی‌مانده را در ادامه بررسی می‌کنیم.
              </p>

              <div className="mt-12 border-t border-black/10">
                {[
                  "نوع محصول",
                  "تعداد تقریبی",
                  "ابعاد",
                  "زمان مورد نیاز",
                  "فایل یا نمونه",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-b border-black/10 py-5"
                  >
                    <span className="text-xs text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div>
              <form
                method="post"
                encType="multipart/form-data"
                className="border-t border-black/10"
              >
                {/* NAME + PHONE */}
                <div className="grid gap-8 py-8 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-sm text-black/50">
                      نام و نام خانوادگی
                    </span>

                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="نام شما"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-black/50">
                      شماره تماس
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="۰۹۱۲..."
                      dir="ltr"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </label>
                </div>

                {/* EMAIL */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    ایمیل
                  </span>

                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    dir="ltr"
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                {/* PROJECT TYPE */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    نوع پروژه
                  </span>

                  <select
                    name="projectType"
                    defaultValue=""
                    required
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors focus:border-black"
                  >
                    <option value="" disabled>
                      انتخاب کنید
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                {/* QUANTITY + DIMENSIONS */}
                <div className="grid gap-8 border-t border-black/10 py-8 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-sm text-black/50">
                      تعداد تقریبی
                    </span>

                    <input
                      type="text"
                      name="quantity"
                      placeholder="مثلاً ۵۰۰ عدد"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm text-black/50">
                      ابعاد
                    </span>

                    <input
                      type="text"
                      name="dimensions"
                      placeholder="مثلاً ۲۰ × ۳۰ سانتی‌متر"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </label>
                </div>

                {/* MATERIAL */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    متریال یا جنس محصول
                  </span>

                  <input
                    type="text"
                    name="material"
                    placeholder="اگر می‌دانید، وارد کنید"
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                {/* DEADLINE */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    زمان مورد نیاز
                  </span>

                  <input
                    type="text"
                    name="deadline"
                    placeholder="مثلاً تا پایان شهریور"
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                {/* MESSAGE */}
                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    توضیحات پروژه
                  </span>

                  <textarea
                    name="message"
                    rows={7}
                    placeholder="هر اطلاعات دیگری که برای برآورد قیمت مفید است..."
                    className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-4 text-base leading-8 outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                {/* FILE */}
                <div className="border-t border-black/10 py-8">
                  <label className="block">
                    <span className="mb-3 block text-sm text-black/50">
                      فایل پروژه
                    </span>

                    <input
                      type="file"
                      name="file"
                      accept=".jpg,.jpeg,.png,.pdf,.ai,.psd,.zip"
                      className="block w-full text-sm text-black/50 file:ml-4 file:rounded-full file:border-0 file:bg-black file:px-5 file:py-3 file:text-sm file:text-white"
                    />

                    <span className="mt-3 block text-xs leading-6 text-black/35">
                      در صورت داشتن فایل طراحی، نمونه یا مشخصات
                      پروژه می‌توانید آن را ارسال کنید.
                    </span>
                  </label>
                </div>

                {/* SUBMIT */}
                <div className="border-t border-black/10 pt-8">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                  >
                    ارسال درخواست
                    <span aria-hidden="true">↗</span>
                  </button>

                  <p className="mt-5 max-w-lg text-xs leading-6 text-black/35">
                    اطلاعات ارسال‌شده برای بررسی و برآورد پروژه استفاده
                    می‌شود. پس از بررسی، برای ادامه فرایند با شما
                    تماس خواهیم گرفت.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-black/10 bg-[#f7f5f1]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                بعد از ارسال درخواست
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight sm:text-4xl">
                از درخواست
                <br />
                تا برآورد.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  title: "بررسی پروژه",
                  text: "اطلاعات و فایل‌های ارسال‌شده بررسی می‌شوند.",
                },
                {
                  title: "انتخاب روش مناسب",
                  text: "در صورت نیاز، روش چاپ و مشخصات فنی مناسب پروژه مشخص می‌شود.",
                },
                {
                  title: "برآورد قیمت",
                  text: "بر اساس مشخصات پروژه، هزینه و شرایط اجرا بررسی می‌شود.",
                },
                {
                  title: "تماس و ادامه فرایند",
                  text: "برای هماهنگی جزئیات و ادامه سفارش با شما ارتباط برقرار می‌کنیم.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[60px_1fr]"
                >
                  <span className="text-xs text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-8 text-black/50">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-28">
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                سوالات متداول
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight sm:text-4xl">
                قبل از
                <br />
                استعلام قیمت.
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-8 text-black/45">
                پاسخ چند سؤال رایج درباره قیمت‌گذاری و ثبت درخواست
                چاپ.
              </p>
            </div>

            <div className="border-t border-black/10">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-black/10"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-base font-medium leading-8 sm:text-lg">
                        {faq.question}
                      </span>
                    </div>

                    <span className="text-xl text-black/40 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="pb-8 pr-9 text-sm leading-8 text-black/50 sm:text-base md:pr-10">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
              هنوز مطمئن نیستید؟
            </p>

            <h2 className="text-3xl font-medium leading-[1.4] tracking-tight sm:text-4xl md:text-5xl">
              لازم نیست همه‌چیز
              <br />
              را از قبل بدانید.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/50 sm:text-lg sm:leading-9">
              اگر هنوز درباره روش چاپ، متریال یا مشخصات پروژه
              مطمئن نیستید، می‌توانید قبل از ثبت سفارش با ما تماس
              بگیرید و درباره پروژه صحبت کنید.
            </p>

            <Link
              href="/تماس-با-ما"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
            >
              تماس با ما
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
