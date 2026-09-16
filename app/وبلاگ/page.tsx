import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import IconArrow from "@/components/ui/IconArrow";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";

export const metadata: Metadata = {
  title: "وبلاگ آیریک | راهنمای چاپ، بسته‌بندی و طراحی",
  description:
    "راهنماها و مطالب تخصصی آیریک درباره چاپ سیلک، چاپ DTF، انتخاب روش چاپ و راهکارهای چاپ برای برندها.",
  alternates: {
    canonical: "/وبلاگ/",
  },
  openGraph: {
    title: "وبلاگ آیریک | راهنمای چاپ، بسته‌بندی و طراحی",
    description:
      "راهنماها و مطالب تخصصی آیریک درباره چاپ و انتخاب بهترین روش برای پروژه‌های مختلف.",
    url: "/وبلاگ/",
    type: "website",
  },
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <main className="overflow-hidden bg-white text-[#022F12]">
      {/* Hero */}
      <section className="relative px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <Reveal direction="up">
            <span className="text-sm font-medium tracking-wide text-[#8BC53D]">
              مجله آیریک
            </span>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-7xl">
              درباره چاپ،
              <br />
              بهتر بدانیم.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={180}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#022F12]/60 sm:text-lg">
              راهنماها، تجربه‌ها و نکاتی که کمک می‌کنند برای هر پروژه،
              انتخاب دقیق‌تری در چاپ داشته باشید.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal direction="up">
              <Link
                href={`/وبلاگ/${featuredPost.slug}/`}
                className="group block"
              >
                <div className="grid overflow-hidden rounded-[2rem] bg-[#E4F0CC] lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[580px]">
                    <ParallaxImage
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="absolute inset-0 h-full w-full"
                      strength={14}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#021408]/45 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                      <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#022F12] backdrop-blur-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                    <div>
                      <span className="text-sm text-[#022F12]/45">
                        {featuredPost.date}
                      </span>

                      <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl">
                        {featuredPost.title}
                      </h2>

                      <p className="mt-6 max-w-xl text-base leading-8 text-[#022F12]/60 sm:text-lg">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center justify-between border-t border-[#022F12]/10 pt-5">
                      <span className="text-sm text-[#022F12]/45">
                        {featuredPost.date}
                      </span>

                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#022F12] transition-transform duration-500 group-hover:-translate-x-1">
                        مطالعه مطلب
                        <IconArrow
                          direction="left"
                          size={18}
                          className="transition-transform duration-500 group-hover:-translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Other posts */}
      {remainingPosts.length > 0 && (
        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal direction="up">
              <div className="mb-10 flex items-end justify-between border-b border-[#022F12]/10 pb-5">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  مطالب دیگر
                </h2>

                <span className="text-sm text-[#022F12]/40">
                  {remainingPosts.length.toLocaleString("fa-IR")} مطلب
                </span>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {remainingPosts.map((post, index) => (
                <Reveal
                  key={post.slug}
                  direction="up"
                  delay={index * 100}
                >
                  <Link
                    href={`/وبلاگ/${post.slug}/`}
                    className="group block h-full"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#022F12]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#8BC53D]/40 hover:shadow-[0_20px_60px_rgba(2,47,18,0.08)]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <ParallaxImage
                          src={post.image}
                          alt={post.title}
                          className="absolute inset-0 h-full w-full"
                          strength={10}
                        />

                        <div className="absolute left-5 top-5">
                          <span className="rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-[#022F12] backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6 sm:p-8">
                        <div className="flex items-center justify-between gap-4 text-xs text-[#022F12]/40">
                          <span>{post.date}</span>
                          <span>
                            {String(index + 2).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="mt-5 text-2xl font-semibold leading-[1.25] tracking-tight transition-colors duration-300 group-hover:text-[#8BC53D] sm:text-3xl">
                          {post.title}
                        </h3>

                        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#022F12]/55 sm:text-base">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-[#022F12]/10 pt-5 mt-8">
                          <span className="text-sm font-medium text-[#022F12]">
                            مطالعه مطلب
                          </span>

                          <IconArrow
                            direction="left"
                            size={19}
                            className="transition-transform duration-500 group-hover:-translate-x-1"
                          />
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal direction="up">
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#022F12] px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div className="relative z-10 max-w-3xl">
                <span className="text-sm font-medium text-[#8BC53D]">
                  پروژه‌ای در ذهن دارید؟
                </span>

                <h2 className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl">
                  بیایید درباره چاپ
                  <br />
                  پروژه‌تان صحبت کنیم.
                </h2>

                <Link
                  href="/استعلام-قیمت/"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#8BC53D] px-6 py-3.5 text-sm font-semibold text-[#021408] transition-all duration-500 hover:-translate-y-1 hover:bg-white"
                >
                  استعلام قیمت
                  <IconArrow direction="up-left" size={18} />
                </Link>
              </div>

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8BC53D]/15 transition-transform duration-700 group-hover:-translate-y-10" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full border border-[#8BC53D]/20 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
