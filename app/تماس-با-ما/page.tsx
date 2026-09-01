import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تماس با آیریک | سفارش و استعلام قیمت چاپ",
  description:
    "برای سفارش چاپ، دریافت مشاوره یا استعلام قیمت خدمات چاپ آیریک با ما در ارتباط باشید. مشخصات پروژه خود را ارسال کنید تا راهنمایی و برآورد اولیه انجام شود.",
  alternates: {
    canonical: "/تماس-با-ما",
  },
  openGraph: {
    title: "تماس با آیریک | سفارش و استعلام قیمت چاپ",
    description:
      "برای سفارش چاپ، دریافت مشاوره یا استعلام قیمت پروژه با آیریک در ارتباط باشید.",
    type: "website",
  },
};

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

export default function ContactPage() {
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
        name: "تماس با ما",
        item: "/تماس-با-ما",
      },
    ],
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "تماس با آیریک",
    description:
      "راه‌های ارتباط با آیریک برای سفارش چاپ، دریافت مشاوره و استعلام قیمت.",
    url: "/تماس-با-ما",
    mainEntity: {
      "@type": "Organization",
      name: "آیریک",
      email: "hello@ayric.ir",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@ayric.ir",
        availableLanguage: ["fa"],
      },
    },
  };

  return (
    <main dir="rtl">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactSchema} />

      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12 lg:py-40">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
              تماس با آیریک
            </p>

            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[1.12] tracking-[-0.045em]">
              درباره پروژه‌تان
              <br />
              صحبت کنیم.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-black/55 sm:mt-10 sm:text-lg sm:leading-9">
              برای سفارش چاپ، دریافت مشاوره یا استعلام قیمت،
              مشخصات پروژه‌تان را برای ما ارسال کنید. اطلاعات شما
              بررسی می‌شود و برای انتخاب روش مناسب چاپ و ادامه
              فرایند با شما در ارتباط خواهیم بود.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER — FEO / GEO */}
      <section className="border-b border-black/10 bg-[#f7f5f1]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-medium text-black/40 sm:text-sm">
              ارتباط با آیریک
            </p>

            <p className="text-lg leading-9 text-black/65 sm:text-xl">
              آیریک برای سفارش‌های چاپی برندها و کسب‌وکارها،
              مشاوره، بررسی مشخصات پروژه و استعلام قیمت ارائه
              می‌دهد. برای شروع کافی است نوع محصول، تعداد تقریبی،
              ابعاد و زمان مورد نیاز خود را با ما در میان بگذارید.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-20 md:grid-cols-[0.75fr_1.25fr] md:gap-28">
            {/* CONTACT INFO */}
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                اطلاعات تماس
              </p>

              <div className="border-t border-black/10">
                <div className="border-b border-black/10 py-7">
                  <p className="mb-3 text-xs text-black/40">
                    تلفن
                  </p>

                  <a
                    href="tel:+9821XXXXXXXX"
                    className="text-lg font-medium transition-opacity hover:opacity-60"
                    dir="ltr"
                  >
                    +98 21 XXX XXXX
                  </a>
                </div>

                <div className="border-b border-black/10 py-7">
                  <p className="mb-3 text-xs text-black/40">
                    ایمیل
                  </p>

                  <a
                    href="mailto:hello@ayric.ir"
                    className="text-lg font-medium transition-opacity hover:opacity-60"
                    dir="ltr"
                  >
                    hello@ayric.ir
                  </a>
                </div>

                <div className="border-b border-black/10 py-7">
                  <p className="mb-3 text-xs text-black/40">
                    ساعات پاسخگویی
                  </p>

                  <p className="text-lg font-medium">
                    شنبه تا پنجشنبه
                    <br />
                    ۹:۰۰ تا ۱۸:۰۰
                  </p>
                </div>
              </div>

              {/* Small guidance */}
              <div className="mt-10">
                <p className="text-sm leading-8 text-black/45">
                  اگر هنوز درباره روش چاپ، متریال یا تعداد مناسب
                  مطمئن نیستید، می‌توانید اطلاعات اولیه پروژه را
                  ارسال کنید. قبل از ثبت سفارش، جزئیات بررسی می‌شود.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                درخواست شما
              </p>

              <form
                method="post"
                className="border-t border-black/10"
              >
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
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-black/25 focus:border-black"
                    />
                  </label>
                </div>

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

                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    نوع پروژه
                  </span>

                  <select
                    name="projectType"
                    defaultValue=""
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none transition-colors focus:border-black"
                  >
                    <option value="" disabled>
                      انتخاب کنید
                    </option>

                    <option value="packaging">
                      بسته‌بندی
                    </option>

                    <option value="clothing">
                      چاپ روی لباس
                    </option>

                    <option value="fabric">
                      چاپ روی پارچه
                    </option>

                    <option value="product">
                      چاپ روی محصول
                    </option>

                    <option value="advertising">
                      اقلام تبلیغاتی
                    </option>

                    <option value="other">
                      سایر
                    </option>
                  </select>
                </label>

                <label className="block border-t border-black/10 py-8">
                  <span className="mb-3 block text-sm text-black/50">
                    توضیحات پروژه
                  </span>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="نوع محصول، تعداد، ابعاد، زمان مورد نیاز و هر اطلاعاتی که درباره پروژه دارید..."
                    className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-4 text-base leading-8 outline-none transition-colors placeholder:text-black/25 focus:border-black"
                  />
                </label>

                <div className="border-t border-black/10 pt-8">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                  >
                    ارسال درخواست
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="border-y border-black/10 bg-[#f5f3ef]">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                استعلام قیمت
              </p>

              <h2 className="max-w-4xl text-3xl font-medium leading-[1.4] tracking-[-0.035em] sm:text-4xl md:text-5xl">
                برای دریافت قیمت،
                <br />
                از مشخصات پروژه شروع کنید.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-black/50">
                نوع محصول، تعداد، ابعاد و زمان مورد نیاز را مشخص کنید
                تا بتوانیم قیمت و روش مناسب اجرای پروژه را دقیق‌تر
                بررسی کنیم.
              </p>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-colors hover:border-black"
            >
              استعلام قیمت
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-28">
            <div>
              <p className="mb-7 text-xs font-medium text-black/40 sm:text-sm">
                قبل از تماس
              </p>

              <h2 className="text-3xl font-medium leading-[1.45] tracking-tight sm:text-4xl md:text-5xl">
                چند سؤال
                <br />
                متداول.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                {
                  q: "برای دریافت قیمت چه اطلاعاتی لازم است؟",
                  a: "نوع محصول، تعداد تقریبی، ابعاد، متریال در صورت مشخص بودن و زمان مورد نیاز برای شروع کافی است.",
                },
                {
                  q: "اگر روش چاپ مناسب را ندانیم چه؟",
                  a: "اشکالی ندارد. کافی است محصول و کاربرد آن را توضیح دهید؛ روش مناسب چاپ را می‌توان بر اساس مشخصات پروژه پیشنهاد کرد.",
                },
                {
                  q: "آیا امکان سفارش برای کسب‌وکارها وجود دارد؟",
                  a: "بله. سفارش‌های برندها، کسب‌وکارها و مجموعه‌های سازمانی قابل بررسی هستند.",
                },
                {
                  q: "آیا قبل از سفارش می‌توان درباره پروژه مشاوره گرفت؟",
                  a: "بله. می‌توانید مشخصات اولیه پروژه را ارسال کنید تا درباره روش چاپ، متریال و جزئیات اجرا راهنمایی دریافت کنید.",
                },
              ].map((item, index) => (
                <details
                  key={item.q}
                  className="group border-b border-black/10"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7">
                    <div className="flex gap-5">
                      <span className="pt-1 text-xs text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-medium leading-8">
                        {item.q}
                      </span>
                    </div>

                    <span className="text-xl text-black/40 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="pb-8 pr-9 text-sm leading-8 text-black/50 sm:text-base md:pr-10">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
