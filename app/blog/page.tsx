import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Articles | andy.my",
  description:
    "Ideas, observations, discoveries and perspectives from andy.my.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold">
          Articles
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Ideas, observations, discoveries and things worth thinking about.
        </p>
      </header>

      <section className="mt-12 space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b pb-8"
          >
            <p className="text-sm text-gray-500">
              {post.date}
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline"
              >
                {post.title}
              </Link>
            </h2>

            {post.description && (
              <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                {post.description}
              </p>
            )}

            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-medium underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}