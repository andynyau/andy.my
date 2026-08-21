import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");
const files = fs
  .readdirSync(postsDirectory)
  .filter((file) => file.endsWith(".mdx"));

const posts = files.map((file) => {
  const slug = file.replace(/\.mdx$/, "");
  const filePath = path.join(postsDirectory, file);
  const content = fs.readFileSync(filePath, "utf8");
  const { data } = matter(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary ?? data.description ?? "",
    tags: data.tags ?? [],
  };
});

posts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const tagCounts = {};
posts.forEach((post) => {
  post.tags.forEach((tag) => {
    tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
  });
});

fs.mkdirSync(path.join(process.cwd(), "public"), { recursive: true });
fs.mkdirSync(path.join(process.cwd(), "data"), { recursive: true });

fs.writeFileSync(
  path.join(process.cwd(), "public/search.json"),
  JSON.stringify(posts, null, 2)
);

fs.writeFileSync(
  path.join(process.cwd(), "data/tag-data.json"),
  JSON.stringify(tagCounts, null, 2)
);

console.log(
  `Generated search.json (${posts.length} posts) and tag-data.json (${Object.keys(tagCounts).length} tags)`
);
