"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "چاپ سیلک",
  "چاپ DTF",
  "چاپ روی لباس",
  "چاپ روی بگ",
  "چاپ روی کارتن",
  "چاپ روی جعبه پیتزا",
  "چاپ روی لیوان کاغذی",
  "چاپ روی ظروف گرد",
  "چاپ روی تیشرت",
  "چاپ روی پارچه",
  "چاپ کیسه پارچه‌ای",
  "چاپ نایلون",
  "تولید و چاپ توت‌بگ",
  "چاپ لیوان",
  "چاپ روی فلز",
  "چاپ روی چوب",
  "چاپ روی استیل",
  "چاپ روی پلکسی",
  "سایر",
];

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    setStatus({
      type: null,
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/quote.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید."
        );
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "درخواست شما با موفقیت ارسال شد. به‌زودی با شما تماس می‌گیریم.",
      });

      form.reset();
    } catch {
      setStatus({
        type: "error",
        message:
          "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید یا از طریق صفحه تماس با ما ارتباط بگیرید.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
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
            dir="ltr"
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

      {status.type && (
        <div
          role="status"
          aria-live="polite"
          className={`mb-8 border px-5 py-4 text-sm leading-7 ${
            status.type === "success"
              ? "border-black/10 bg-[#E4F0CC] text-[#022F12]"
              : "border-red-900/15 bg-red-50 text-red-900/75"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="border-t border-black/10 pt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-3 rounded-full bg-[#022F12] px-8 py-4 text-sm text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
        >
          {isSubmitting
            ? "در حال ارسال..."
            : "ارسال درخواست"}

          {!isSubmitting && (
            <span aria-hidden="true">↗</span>
          )}
        </button>

        <p className="mt-5 max-w-lg text-xs leading-6 text-black/35">
          اطلاعات ارسال‌شده برای بررسی و برآورد پروژه استفاده می‌شود.
          پس از بررسی، برای ادامه فرایند با شما تماس خواهیم گرفت.
        </p>
      </div>
    </form>
  );
}
