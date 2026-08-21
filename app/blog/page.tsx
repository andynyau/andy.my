import ListLayoutWithTags from "@/components/ListLayoutWithTags";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Ideas, observations, discoveries and perspectives from andy.my.",
};

export default function BlogPage() {
  const posts = getPosts();

  return <ListLayoutWithTags posts={posts} title="Blog" />;
}
