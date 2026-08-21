import Link from "@/components/Link";
import { slug as slugify } from "github-slugger";
import { getAllTags } from "@/lib/posts";

export const metadata = {
  title: "Tags",
  description: "Browse articles by topic on andy.my.",
};

export default function TagsPage() {
  const tagCounts = getAllTags();
  const sortedTags = Object.keys(tagCounts).sort(
    (a, b) => tagCounts[b] - tagCounts[a]
  );

  return (
    <>
      <div className="pt-6 pb-8">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Tags
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Browse articles by topic.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {sortedTags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${slugify(tag)}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded px-3 py-2 text-sm font-medium uppercase"
          >
            {tag} ({tagCounts[tag]})
          </Link>
        ))}
        {sortedTags.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">No tags yet.</p>
        )}
      </div>
    </>
  );
}
