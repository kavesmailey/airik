"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  brand: string;
  phone: string;
  productType: string;
  quantity: string;
  printingMethod: string;
  timeline: string;
  description: string;
}

const productTypes = [
  "بگ",
  "لباس",
  "کارتن",
  "جعبه پیتزا",
  "لیوان",
  "ظروف",
  "DTF",
  "سایر",
];

const quantityOptions = [
  "زیر ۱۰۰",
  "۱۰۰ تا ۵۰۰",
  "۵۰۰ تا ۱۰۰۰",
  "۱۰۰۰ تا ۵۰۰۰",
  "بالای ۵۰۰۰",
];

const printingMethods = [
  "سیلک",
  "DTF",
  "نمی‌دانم / نیاز به مشاوره دارم",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    brand: "",
    phone: "",
    productType: "",
    quantity: "",
    printingMethod: "",
    timeline: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = new URLSearchParams();

      payload.append("name", formData.name.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("projectType", formData.productType);
      payload.append("quantity", formData.quantity);
      payload.append("deadline", formData.timeline.trim());
      payload.append("message", formData.description.trim());

      /*
       * These fields are expected by the current PHP endpoint.
       * The current frontend does not collect them, so they remain empty.
       */
      payload.append("email", "");
      payload.append("dimensions", "");
      payload.append(
        "material",
        formData.printingMethod
          ? `روش چاپ: ${formData.printingMethod}`
          : ""
      );

      const response = await fetch("/api/quote.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      let result: {
        success?: boolean;
        message?: string;
      } | null = null;

      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message ||
            "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید."
        );
      }

      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="card-industrial text-center">
        <h2
          className="text-2xl font-bold"
          style={{ color: "var(--color-text)" }}
        >
          درخواست شما با موفقیت ارسال شد
        </h2>

        <p
          className="mt-4"
          style={{ color: "var(--color-text-muted)" }}
        >
          اطلاعات پروژه شما دریافت شد. به زودی با شما تماس می‌گیریم.
        </p>
      </div>
    );
  }

  const labelStyle = {
    color: "var(--color-text)",
    fontSize: "var(--font-size-sm)",
    fontWeight: 600,
    marginBottom: "0.5rem",
  };

  const inputStyle = {
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    color: "var(--color-text)",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "var(--font-size-base)",
    lineHeight: "var(--line-height-normal)",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" style={labelStyle}>
            نام
          </label>

          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="brand" style={labelStyle}>
            نام برند
          </label>

          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="organization"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" style={labelStyle}>
          شماره تماس
        </label>

        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          dir="ltr"
          autoComplete="tel"
        />
      </div>

      {/* Product type */}
      <div>
        <label htmlFor="productType" style={labelStyle}>
          نوع محصول
        </label>

        <select
          id="productType"
          name="productType"
          required
          value={formData.productType}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">انتخاب کنید</option>

          {productTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" style={labelStyle}>
          تعداد تقریبی
        </label>

        <select
          id="quantity"
          name="quantity"
          required
          value={formData.quantity}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">انتخاب کنید</option>

          {quantityOptions.map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      </div>

      {/* Printing method */}
      <div>
        <label htmlFor="printingMethod" style={labelStyle}>
          نوع چاپ
        </label>

        <select
          id="printingMethod"
          name="printingMethod"
          required
          value={formData.printingMethod}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">انتخاب کنید</option>

          {printingMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" style={labelStyle}>
          زمان مورد نیاز
        </label>

        <input
          type="text"
          id="timeline"
          name="timeline"
          placeholder="مثلاً: تا پایان ماه"
          value={formData.timeline}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" style={labelStyle}>
          توضیحات
        </label>

        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Error */}
      {errorMessage && (
        <div
          role="alert"
          className="rounded-[var(--radius-md)] border border-red-200 bg-red-50 px-4 py-3 text-sm leading-7 text-red-700"
        >
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        onClick={undefined}
        href={undefined}
      >
        {isSubmitting
          ? "در حال ارسال..."
          : "دریافت مشاوره و استعلام قیمت"}
      </Button>
    </form>
  );
}
