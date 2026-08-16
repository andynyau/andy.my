import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getPosts();

  return (
    <main>

      {/* Hero */}
      <section className="border-b border-[#dedad1]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#8a6d3b]">
            Curiosity · Perspective · Discovery
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight md:text-7xl">
            Look beyond the obvious.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f6b63] md:text-xl">
            Ideas, observations, and discoveries from a mind that
            refuses to stop asking why.
          </p>

        </div>
      </section>


      {/* Latest Articles */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="flex items-end justify-between border-b border-[#dedad1] pb-5">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6d3b]">
              Discover
            </p>

            <h2 className="mt-2 font-serif text-3xl md:text-4xl">
              Latest Articles
            </h2>
          </div>

          <Link
            href="/blog"
            className="hidden text-sm text-[#6f6b63] transition-colors hover:text-[#8a6d3b] md:block"
          >
            View all →
          </Link>

        </div>


        <div className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">

          {posts.slice(0, 4).map((post) => (

            <article key={post.slug}>

              {post.image && (
                <Link href={`/blog/${post.slug}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-sm object-cover transition-opacity duration-300 hover:opacity-85"
                  />
                </Link>
              )}

              <div className="mt-5">

                <p className="text-xs uppercase tracking-[0.15em] text-[#8a6d3b]">
                  {post.date}
                </p>

                <h3 className="mt-2 font-serif text-2xl leading-snug md:text-3xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-[#8a6d3b]"
                  >
                    {post.title}
                  </Link>
                </h3>

                {post.description && (
                  <p className="mt-3 leading-7 text-[#6f6b63]">
                    {post.description}
                  </p>
                )}

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-block text-sm font-medium text-[#8a6d3b]"
                >
                  Read more →
                </Link>

              </div>

            </article>

          ))}

        </div>


        <div className="mt-12 md:hidden">
          <Link
            href="/blog"
            className="text-sm text-[#8a6d3b]"
          >
            View all articles →
          </Link>
        </div>

      </section>

    </main>
  );
}