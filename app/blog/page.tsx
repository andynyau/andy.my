import Link from "next/link";
import { getPosts } from "@/lib/posts";


export default function BlogPage() {

  const posts = getPosts();

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        Blog
      </h1>


      <div className="mt-8">

        {posts.map((post) => (

          <div key={post.slug} className="mb-6">

            <Link
              href={`/blog/${post.slug}`}
              className="text-xl underline"
            >
              {post.title}
            </Link>

            <p>
              {post.description}
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}