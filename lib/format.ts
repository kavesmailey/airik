/**
 * ═══════════════════════════════════════════════════════════════
 * FORMAT UTILITIES — Persian number/date formatting
 * ═══════════════════════════════════════════════════════════════
 */

export function toPersianDigits(input: string | number): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/\d/g, (d) => persianDigits[parseInt(d)]);
}

export function formatPersianNumber(value: number): string {
  return toPersianDigits(value.toLocaleString("en-US"));
}

export function formatPersianDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return toPersianDigits(minutes);
}
