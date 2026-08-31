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
  file: File | null;
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
    file: null,
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to backend (email, Supabase, CRM, Telegram, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="card-industrial text-center">
        <h2
          className="text-2xl font-bold"
          style={{ color: "var(--color-text)" }}
        >
          درخواست شما دریافت شد
        </h2>
        <p
          className="mt-4"
          style={{ color: "var(--color-text-muted)" }}
        >
          به زودی با شما تماس می‌گیریم.
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
          />
        </div>
      </div>

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
           
