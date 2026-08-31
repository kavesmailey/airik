export default function Footer() {
  return (
    <footer className="bg-bg">
      <div className="container-iric py-12">
        <div className="flex flex-col gap-8 border-t border-border pt-12">
          <div className="flex flex-col gap-3 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© ۱۴۰۴ آیریک. تمامی حقوق محفوظ است.</p>
            <div className="flex gap-5">
              <a href="#" className="transition-colors hover:text-text">
                حریم خصوصی
              </a>
              <a href="#" className="transition-colors hover:text-text">
                دسترس‌پذیری
              </a>
            </div>
          </div>
          <p className="break-words text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">
            آیریک
          </p>
        </div>
      </div>
    </footer>
  );
}
