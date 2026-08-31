import Link from "next/link";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";

export default function NotFound() {
  return (
    <section
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-iric text-center">
        <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
          خطای ۴۰۴
        </p>
        <h1
          className="mt-4 text-5xl font-bold sm:text-6xl"
          style={{ color: "var(--color-text)", lineHeight: "var(--line-height-tight)" }}
        >
          صفحه پیدا نشد
        </h1>
        <p
          className="mt-6 text-lg mx-auto max-w-xl"
          style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
        >
          صفحه‌ای که به دنبال آن بودید وجود ندارد یا حذف شده است.
          می‌توانید به صفحه اصلی بازگردید یا از صفحات زیر دیدن کنید.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
          <Button href="/" size="lg">
            بازگشت به خانه
            <IconArrow direction="right" size={16} />
          </Button>
          <Button href="/خدمات" variant="secondary" size="lg">
            مشاهده خدمات
          </Button>
          <Button href="/وبلاگ" variant="secondary" size="lg">
            وبلاگ
          </Button>
        </div>
      </div>
    </section>
  );
}
