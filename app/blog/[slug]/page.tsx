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
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params;

  const post = getPost(slug);


  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        {post.data.title}
      </h1>

      <p className="mt-2">
        {post.data.date}
      </p>


      <article className="mt-10">
        <MDXRemote source={post.content} />
      </article>

    </main>
  );
}