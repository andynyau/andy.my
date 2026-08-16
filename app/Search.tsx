"use client";

import { useState } from "react";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  description?: string;
};

export default function Search({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const results =
    query.trim().length === 0
      ? []
      : posts.filter((post) => {
          const text = `
            ${post.title}
            ${post.description ?? ""}
          `.toLowerCase();

          return text.includes(query.toLowerCase());
        });

  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-48 rounded-md border px-3 py-2 text-sm outline-none focus:w-64"
      />

      {results.length > 0 && (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-md border bg-white p-2 shadow-lg">
          {results.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              onClick={() => setQuery("")}
              className="block rounded-md p-3 hover:bg-gray-100"
            >
              <div className="font-medium">
                {post.title}
              </div>

              {post.description && (
                <div className="mt-1 text-sm text-gray-500">
                  {post.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}

      {query.trim() && results.length === 0 && (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-md border bg-white p-4 text-sm text-gray-500 shadow-lg">
          No articles found.
        </div>
      )}
    </div>
  );
}