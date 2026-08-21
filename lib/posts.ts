import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { slug as slugify } from "github-slugger";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  summary?: string;
  image?: string;
  tags: string[];
};

function parsePostFile(file: string): PostMeta {
  const slug = file.replace(/\.mdx$/, "");
  const filePath = path.join(postsDirectory, file);
  const content = fs.readFileSync(filePath, "utf8");
  const { data } = matter(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    summary: data.summary ?? data.description,
    image: data.image,
    tags: data.tags ?? [],
  };
}

export function getPosts(): PostMeta[] {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));

  return files
    .map(parsePostFile)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  return matter(fileContent);
}

export function getPostsByTag(tag: string) {
  return getPosts().filter((post) =>
    post.tags.some((t) => slugify(t) === slugify(tag))
  );
}

export function getAllTags() {
  const tagCounts: Record<string, number> = {};

  getPosts().forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
    });
  });

  return tagCounts;
}

export function getAdjacentPosts(slug: string) {
  const posts = getPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return { prev: undefined, next: undefined };
  }

  return {
    prev: index < posts.length - 1 ? posts[index + 1] : undefined,
    next: index > 0 ? posts[index - 1] : undefined,
  };
}
