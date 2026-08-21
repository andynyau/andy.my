"use client";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  useRegisterActions,
  Action,
} from "kbar";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import siteMetadata from "@/data/siteMetadata";

type SearchDocument = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-4 py-2 text-xs text-gray-500 uppercase dark:text-gray-400">
            {item}
          </div>
        ) : (
          <div
            className={`flex cursor-pointer items-center justify-between px-4 py-3 ${
              active
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
            }`}
          >
            <div>
              <div className="font-medium">{item.name}</div>
              {item.subtitle && (
                <div
                  className={`text-sm ${active ? "text-primary-100" : "text-gray-500 dark:text-gray-400"}`}
                >
                  {item.subtitle}
                </div>
              )}
            </div>
          </div>
        )
      }
    />
  );
}

function SearchActions() {
  const router = useRouter();
  const [actions, setActions] = useState<Action[]>([]);

  useRegisterActions(actions, [actions]);

  useEffect(() => {
    fetch("/search.json")
      .then((res) => res.json())
      .then((documents: SearchDocument[]) => {
        setActions(
          documents.map((doc) => ({
            id: doc.slug,
            name: doc.title,
            subtitle: doc.summary,
            keywords: [doc.title, doc.summary, ...doc.tags].join(" "),
            section: "Articles",
            perform: () => router.push(`/blog/${doc.slug}/`),
          }))
        );
      })
      .catch(() => setActions([]));
  }, [router]);

  return null;
}

export default function SearchProvider({ children }: { children: ReactNode }) {
  if (siteMetadata.search?.provider !== "kbar") {
    return <>{children}</>;
  }

  return (
    <KBarProvider>
      <SearchActions />
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-80 bg-black/50 backdrop-blur-sm">
          <KBarAnimator className="relative w-full max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900">
            <KBarSearch className="flex w-full border-none bg-transparent px-4 py-3 text-gray-900 outline-none dark:text-gray-100" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}
