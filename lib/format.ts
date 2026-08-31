/**
 * Convert English digits to Persian digits
 */
export function toPersianDigits(input: string | number): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/\d/g, (d) => persianDigits[parseInt(d)]);
}

/**
 * Format a number with thousands separators in Persian
 */
export function formatPersianNumber(value: number): string {
  return toPersianDigits(value.toLocaleString("en-US"));
}

/**
 * Format a date for Persian locale
 */
export function formatPersianDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

/**
 * Calculate reading time for Persian text (words per minute)
 */
export function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return toPersianDigits(minutes);
}
