"use client";

import { useKBar } from "kbar";
import siteMetadata from "@/data/siteMetadata";

export default function SearchButton() {
  const { query } = useKBar();

  if (siteMetadata.search?.provider !== "kbar") {
    return null;
  }

  return (
    <button
      aria-label="Search articles"
      type="button"
      onClick={query.toggle}
      className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 text-gray-900 dark:text-gray-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </button>
  );
}
