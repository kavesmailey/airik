import Link from "next/link";

import IconArrow from "@/components/ui/IconArrow";

export default function ProjectsPreview() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-28"
      style={{ backgroundColor: "var(--color-white)" }}
      aria-labelledby="projects-preview-heading"
    >
      <div className="container-iric">
        <Link
          href="/نمونه-کارها"
          className="group relative block min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[480px]"
        >
          <img
            src="/images/portfolio/packaging.jpg"
            alt="نمونه‌کار چاپ و بسته‌بندی آیریک"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          />

          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(2, 20, 8, 0.68)" }}
          />

          <div className="relative flex h-full flex-col justify-between p-6 sm:p-9 lg:p-12">
            <div className="flex items-start justify-between gap-8">
              <p
                className="text-sm font-medium"
                style={{
                  color: "var(--color-white)",
                  opacity: 0.78,
                }}
              >
                نمونه‌کارها
              </p>

              <span
                className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                style={{ color: "var(--color-white)" }}
              >
                <IconArrow direction="up-left" size={28} />
              </span>
            </div>

            <div className="max-w-3xl">
              <h2
                id="projects-preview-heading"
                className="text-2xl font-bold sm:text-4xl lg:text-5xl"
                style={{
                  color: "var(--color-white)",
                  lineHeight: "1.45",
                }}
              >
                چاپ وقتی ارزش دارد که روی محصول هم درست به نظر برسد.
              </h2>

              <p
                className="mt-4 max-w-2xl text-base sm:text-lg"
                style={{
                  color: "var(--color-white)",
                  opacity: 0.78,
                  lineHeight: "2",
                }}
              >
                بخشی از پروژه‌ها و اجراهای آیریک را ببینید.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
