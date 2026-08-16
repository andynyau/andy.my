import { getPost, getPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPost(slug);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">

      <header className="max-w-3xl">

        <p className="text-xs uppercase tracking-[0.2em] text-[#8a6d3b]">
          {post.data.date}
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
          {post.data.title}
        </h1>

        {post.data.description && (
          <p className="mt-6 text-xl leading-8 text-[#6f6b63]">
            {post.data.description}
          </p>
        )}

      </header>


      {post.data.image && (
        <img
          src={post.data.image}
          alt={post.data.title}
          className="mt-12 aspect-[16/9] w-full rounded-sm object-cover"
        />
      )}


      <article className="prose prose-lg mt-12 max-w-none">
        <MDXRemote source={post.content} />
      </article>


      <div className="mt-16 border-t border-[#dedad1] pt-6">

        <a
          href="/blog"
          className="text-sm text-[#8a6d3b]"
        >
          ← Back to Articles
        </a>

      </div>

    </main>
  );
}