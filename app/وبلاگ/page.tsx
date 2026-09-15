import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IconArrow from "@/components/ui/IconArrow";
import { blogPosts } from "@/content/blog";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main>
      {/* Header */}
      <section className="container mx-auto px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24">
        <Reveal direction="up">
          <p className="mb-5 text-sm font-medium text-[#8BC53D]">
            وبلاگ آیریک
          </p>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h1
            className="max-w-4xl text-4xl font-semibold tracking-[-0.025em] text-[#021408] sm:text-5xl lg:text-6xl"
            style={{ lineHeight: 1.3 }}
          >
            درباره چاپ،
            <br />
            محصول و برند.
          </h1>
        </Reveal>

        <Reveal direction="up" delay={220}>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#022F12]/65 sm:text-lg">
            راهنماها و مطالب کاربردی برای انتخاب بهتر روش چاپ و ساخت
            تجربه‌ای بهتر برای محصول و برند.
          </p>
        </Reveal>
      </section>

      {/* Featured */}
      {featuredPost && (
        <section className="container mx-auto px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
          <Reveal direction="up">
            <Link
              href={`/وبلاگ/${featuredPost.slug}`}
              className="group grid overflow-hidden rounded-[28px] bg-[#E4F0CC] lg:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="relative min-h-[360px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]">
                <ParallaxImage
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  strength={16}
                  className="absolute inset-0 h-full w-full"
                />

                <div className="absolute inset-0 bg-[#021408]/0 transition-colors duration-700 group-hover:bg-[#021408]/20" />

                <div className="absolute right-6 top-6 sm:right-8 sm:top-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#021408] transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <IconArrow direction="up-left" size={20} />
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-sm font-medium text-[#8BC53D]">
                    مقاله منتخب
                  </p>

                  <h2
                    className="mt-6 text-3xl font-semibold text-[#021408] sm:text-4xl"
                    style={{ lineHeight: 1.4 }}
                  >
                    {featuredPost.title}
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-[#022F12]/60 sm:text-base">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-[#022F12]/10 pt-5 text-sm">
                  <span className="text-[#022F12]/45">
                    {featuredPost.readTime}
                  </span>

                  <span className="text-[#022F12]/45">
                    مطالعه مقاله
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* Other posts */}
      <section className="container mx-auto px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <Reveal direction="up">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-4 text-sm font-medium text-[#8BC53D]">
                مطالب بیشتر
              </p>

              <h2
                className="text-3xl font-semibold text-[#021408] sm:text-4xl"
                style={{ lineHeight: 1.35 }}
              >
                بیشتر بخوانید
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2">
          {otherPosts.map((post, index) => (
            <Reveal
              key={post.slug}
              direction="up"
              delay={index * 120}
            >
              <Link
                href={`/وبلاگ/${post.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-[24px]">
                  <ParallaxImage
                    src={post.image}
                    alt={post.title}
                    strength={12}
                    className="h-[280px] sm:h-[340px]"
                  />

                  <div className="absolute inset-0 bg-[#021408]/0 transition-colors duration-700 group-hover:bg-[#021408]/25" />

                  <div className="absolute right-5 top-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#021408]">
                      <IconArrow direction="up-left" size={18} />
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between gap-4 text-xs text-[#022F12]/40">
                    <span>{post.readTime}</span>

                    <span>
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className="mt-3 text-2xl font-medium text-[#021408] transition-transform duration-500 group-hover:-translate-x-1"
                    style={{ lineHeight: 1.45 }}
                  >
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#022F12]/55">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
        <Reveal direction="up">
          <div className="flex flex-col justify-between gap-8 rounded-[28px] bg-[#022F12] p-8 sm:p-12 lg:flex-row lg:items-end lg:p-16">
            <div>
              <p className="mb-4 text-sm font-medium text-[#8BC53D]">
                آیریک
              </p>

              <h2
                className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.35 }}
              >
                سوالی درباره چاپ دارید؟
              </h2>
            </div>

            <Link
              href="/استعلام-قیمت"
              className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#8BC53D] px-6 py-4 text-sm font-medium text-[#021408] transition-all duration-500 hover:scale-[1.03]"
            >
              با ما صحبت کنید

              <span className="transition-transform duration-500 group-hover:-translate-x-1">
                <IconArrow direction="left" size={18} />
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
