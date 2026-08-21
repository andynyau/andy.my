"use client";

import { usePathname } from "next/navigation";
import { slug as slugify } from "github-slugger";
import Link from "@/components/Link";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import tagData from "@/data/tag-data.json";
import { formatDateShort } from "@/lib/formatDate";
import type { PostMeta } from "@/lib/posts";

interface Props {
  posts: PostMeta[];
  title: string;
}

export default function ListLayoutWithTags({ posts, title }: Props) {
  const pathname = usePathname();
  const tagCounts = tagData as Record<string, number>;
  const sortedTags = Object.keys(tagCounts).sort(
    (a, b) => tagCounts[b] - tagCounts[a]
  );

  return (
    <>
      <div className="pt-6 pb-8">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          {title}
        </h1>
      </div>
      <div className="sm:grid sm:grid-cols-4 sm:gap-x-16 sm:gap-y-10">
        <div className="hidden h-full max-h-screen min-w-[200px] overflow-auto px-6 py-4 sm:sticky sm:top-24 sm:-ml-6 sm:block sm:px-0">
          <div className="text-primary-500 dark:text-primary-400 mb-8 text-sm font-bold uppercase">
            Tags
          </div>
          <ul>
            <li className="mb-4 text-xs font-semibold uppercase">
              {pathname.startsWith("/blog") ? (
                <span className="text-primary-500 dark:text-primary-400">
                  All Posts
                </span>
              ) : (
                <Link
                  href="/blog"
                  className="hover:text-primary-500 dark:hover:text-primary-400 uppercase text-gray-500 dark:text-gray-400"
                >
                  All Posts
                </Link>
              )}
            </li>
            {sortedTags.map((tag) => {
              const isActive =
                pathname.startsWith("/tags/") &&
                decodeURIComponent(pathname.split("/tags/")[1].replace(/\/$/, "")) ===
                  slugify(tag);

              return (
                <li key={tag} className="mb-4 text-xs font-semibold uppercase">
                  {isActive ? (
                    <span className="text-primary-500 dark:text-primary-400">
                      {`${tag} (${tagCounts[tag]})`}
                    </span>
                  ) : (
                    <Link
                      href={`/tags/${slugify(tag)}`}
                      className="hover:text-primary-500 dark:hover:text-primary-400 uppercase text-gray-500 dark:text-gray-400"
                    >
                      {`${tag} (${tagCounts[tag]})`}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="divide-y divide-gray-200 sm:col-span-3 dark:divide-gray-700">
          {posts.length === 0 && (
            <div className="py-12 text-gray-500 dark:text-gray-400">
              No posts found.
            </div>
          )}
          {posts.map((post) => (
            <article key={post.slug} className="py-12">
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={post.date}>
                      {formatDateShort(post.date, siteMetadata.locale)}
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap">
                          {post.tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      )}
                    </div>
                    {post.summary && (
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {post.summary}
                      </div>
                    )}
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Read more: "${post.title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
