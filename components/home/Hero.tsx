import Link from "next/link";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "var(--color-bg)" }}>
      {/* Media area — replace with real workshop image/video */}
      <div className="absolute inset-0">
        <MediaPlaceholder
          aspectRatio="auto"
          label="تصویر کارگاه آیریک — قابل جایگزینی"
          tone="dark"
          className="h-full w-full"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,26,24,0.7) 0%, rgba(26,26,24,0.3) 40%, rgba(26,26,24,0.1) 100%)",
          }}
        />
      </div>

      <div className="container-iric relative flex min-h-screen flex-col justify-end pb-8 pt-28 sm:pb-10">
        <div className="max-w-4xl">
          <p
            className="mb-5 text-sm font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            آیریک — چاپ تخصصی برای برندها
          </p>
          <h1
            className="text-5xl font-bold sm:text-6xl lg:text-7xl"
            style={{
              color: "var(--color-text)",
              lineHeight: "var(--line-height-tight)",
            }}
          >
            چاپی که برند شما را حرفه‌ای‌تر نشان می‌دهد
          </h1>
          <div
            className="mt-7 grid gap-6 border-t pt-6 md:grid-cols-12 md:items-end"
            style={{ borderColor: "var(--color-border-strong)" }}
          >
            <p
              className="text-lg md:col-span-6 lg:col-span-5"
              style={{
                color: "var(--color-text-muted)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              چاپ سیلک و DTF روی بگ، لباس، کارتن، جعبه پیتزا، لیوان کاغذی و ظروف گرد؛
              با تمرکز بر کیفیت، اجرای دقیق و مشاوره قبل از سفارش.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-6 md:justify-end">
              <Button href="/استعلام-قیمت" size="lg">
                استعلام قیمت
                <IconArrow direction="up-left" size={16} />
              </Button>
              <Button href="/نمونه-کارها" variant="secondary" size="lg">
                مشاهده نمونه‌کارها
              </Button>
            </div>
          </div>
        </div>

        <div
          className="mt-9 flex items-center justify-between text-xs"
          style={{ color: "var(--color-text-faint)" }}
        >
          <span>چاپ سیلک و DTF با کیفیت صنعتی</span>
          <Link
            href="#why-iric"
            className="inline-flex min-h-11 items-center gap-2 transition-colors hover:opacity-70"
          >
            ادامه
            <IconArrow direction="down" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
