import ListLayoutWithTags from "@/components/ListLayoutWithTags";
import { slug as slugify } from "github-slugger";
import { getAllTags, getPostsByTag } from "@/lib/posts";

export async function generateStaticParams() {
  const tagCounts = getAllTags();

  return Object.keys(tagCounts).map((tag) => ({
    tag: slugify(tag),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  return {
    title: `Tag: ${decodeURIComponent(tag)}`,
    description: `Articles tagged with ${decodeURIComponent(tag)} on andy.my.`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  const displayTag =
    posts[0]?.tags.find((t) => slugify(t) === slugify(tag)) ??
    decodeURIComponent(tag);

  return <ListLayoutWithTags posts={posts} title={`Tag: ${displayTag}`} />;
}
