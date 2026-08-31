export default function Loading() {
  return (
    <main
      dir="rtl"
      className="flex min-h-[70vh] items-center"
      aria-busy="true"
      aria-label="در حال بارگذاری"
    >
      <section className="mx-auto w-full max-w-7xl px-6 py-32 md:px-10 md:py-40 lg:px-12">
        <div className="flex items-center gap-4">
          <span
            className="h-2 w-2 animate-pulse rounded-full bg-black"
            aria-hidden="true"
          />

          <span className="text-sm text-black/45">
            در حال بارگذاری...
          </span>
        </div>
      </section>
    </main>
  );
}
