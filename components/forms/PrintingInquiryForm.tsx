"use client";

import { useState } from "react";
import { services } from "@/content/services";
import FormField from "./FormField";
import FileUploadInput from "./FileUploadInput";
import { submitInquiry, InquiryFormData } from "@/lib/submitInquiry";

export default function PrintingInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    productType: "",
    quantity: "",
    description: "",
    company: "", // honeypot
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "لطفاً نام خود را وارد کنید.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "لطفاً شماره تماس خود را وارد کنید.";
    } else {
      // Normalize Persian/Arabic digits
      const normalized = formData.phone
        .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
        .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
      if (!/^(\+98|0)?9\d{9}$/.test(normalized)) {
        newErrors.phone = "شماره تماس وارد شده معتبر نیست.";
      }
    }
    if (!formData.service) {
      newErrors.service = "لطفاً نوع خدمات را انتخاب کنید.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "لطفاً توضیحاتی درباره پروژه‌تان بنویسید.";
    }
    // Honeypot: if company field is filled, reject silently
    if (formData.company) {
      // Fake success, but do not actually submit
      setSubmitStatus("success");
      return true; // But we don't want to proceed; we'll just show success but not call submit
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company) {
      // Honeypot triggered, pretend success but do nothing
      setSubmitStatus("success");
      return;
    }
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const data: InquiryFormData = {
      ...formData,
      file,
    };

    try {
      const result = await submitInquiry(data);
      if (result.success) {
        setSubmitStatus("success");
        // Optionally reset form
        setFormData({
          name: "",
          phone: "",
          service: "",
          productType: "",
          quantity: "",
          description: "",
          company: "",
        });
        setFile(null);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="card-industrial text-center py-12">
        <h3
          className="text-2xl font-bold"
          style={{ color: "var(--color-text)" }}
        >
          درخواست شما با موفقیت ثبت شد.
        </h3>
        <p
          className="mt-4"
          style={{ color: "var(--color-text-muted)" }}
        >
          از تماس شما سپاسگزاریم. در اسرع وقت با شما ارتباط خواهیم گرفت.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="btn-secondary mt-6"
        >
          ارسال درخواست جدید
        </button>
      </div>
    );
  }

  if (submitStatus === "error") {
    return (
      <div className="card-industrial text-center py-12">
        <h3 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
          خطا در ارسال درخواست
        </h3>
        <p className="mt-4" style={{ color: "var(--color-text-muted)" }}>
          متأسفانه درخواست شما ارسال نشد. لطفاً دوباره تلاش کنید.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="btn-primary mt-6"
        >
          تلاش مجدد
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from real users */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="نام و نام خانوادگی"
          htmlFor="name"
          required
          error={errors.name}
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="مثلاً علی محمدی"
            className="w-full rounded-md border p-3"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text)",
            }}
          />
        </FormField>

        <FormField
          label="شماره تماس"
          htmlFor="phone"
          required
          error={errors.phone}
        >
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            dir="ltr"
            className="w-full rounded-md border p-3"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text)",
            }}
          />
        </FormField>
      </div>

      <FormField
        label="نوع خدمات"
        htmlFor="service"
        required
        error={errors.service}
      >
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-md border p-3"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-surface)",
            color: "var(--color-text)",
          }}
        >
          <option value="">انتخاب کنید</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </FormField>

      {formData.service === "چاپ-سیلک" && (
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="نوع محصول"
            htmlFor="productType"
            error={errors.productType}
          >
            <select
              id="productType"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="w-full rounded-md border p-3"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
                color: "var(--color-text)",
              }}
            >
              <option value="">انتخاب کنید</option>
              <option value="تی‌شرت">تی‌شرت</option>
              <option value="لباس">لباس</option>
              <option value="پارچه">پارچه</option>
              <option value="سایر">سایر</option>
            </select>
          </FormField>

          <FormField
            label="تعداد تقریبی"
            htmlFor="quantity"
            error={errors.quantity}
          >
            <select
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full rounded-md border p-3"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
                color: "var(--color-text)",
              }}
            >
              <option value="">انتخاب کنید</option>
              <option value="کمتر از ۵۰">کمتر از ۵۰</option>
              <option value="۵۰ تا ۱۰۰">۵۰ تا ۱۰۰</option>
              <option value="۱۰۰ تا ۵۰۰">۱۰۰ تا ۵۰۰</option>
              <option value="بیشتر از ۵۰۰">بیشتر از ۵۰۰</option>
            </select>
          </FormField>
        </div>
      )}

      <FormField
        label="توضیحات پروژه"
        htmlFor="description"
        required
        error={errors.description}
      >
        <textarea
          id="description"
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          placeholder="کمی درباره پروژه‌تان برای ما بنویسید..."
          className="w-full rounded-md border p-3"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-surface)",
            color: "var(--color-text)",
            lineHeight: "1.7",
          }}
        />
      </FormField>

      <FileUploadInput
        id="design-file"
        onFileChange={setFile}
        label="آپلود فایل طراحی (اختیاری)"
        accept=".jpg,.jpeg,.png,.pdf,.svg"
        maxSizeMB={10}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
        style={{ opacity: isSubmitting ? 0.7 : 1 }}
      >
        {isSubmitting ? "در حال ارسال..." : "ثبت درخواست چاپ"}
      </button>
    </form>
  );
}
