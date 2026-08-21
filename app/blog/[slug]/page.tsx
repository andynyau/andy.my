import PostLayout from "@/components/PostLayout";
import { getAdjacentPosts, getPost, getPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return {
    title: post.data.title,
    description: post.data.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const { prev, next } = getAdjacentPosts(slug);
  const posts = getPosts();
  const meta = posts.find((item) => item.slug === slug)!;

  return (
    <PostLayout post={meta} prev={prev} next={next}>
      <MDXRemote source={post.content} />
    </PostLayout>
  );
}
