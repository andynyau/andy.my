import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";
import Search from "./Search";
import "./globals.css";

export const metadata: Metadata = {
  title: "andy.my",
  description:
    "Ideas, observations, and discoveries from a mind that sees beyond the obvious.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getPosts();

  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="border-b border-[#dedad1] bg-[#f7f5f0]">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">

            <Link
              href="/"
              className="font-serif text-3xl font-semibold tracking-tight"
            >
              andy.my
            </Link>

            <Search posts={posts} />

          </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="mt-24 border-t border-[#dedad1]">
          <div className="mx-auto max-w-6xl px-6 py-12">

            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

              <div>
                <Link
                  href="/"
                  className="font-serif text-2xl font-semibold"
                >
                  andy.my
                </Link>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#6f6b63]">
                  Ideas, observations, and discoveries from a mind
                  that sees beyond the obvious.
                </p>
              </div>

              <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
                <Link
                  href="/blog"
                  className="transition-colors hover:text-[#8a6d3b]"
                >
                  Articles
                </Link>

                <Link
                  href="/about"
                  className="transition-colors hover:text-[#8a6d3b]"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="transition-colors hover:text-[#8a6d3b]"
                >
                  Contact
                </Link>

                <Link
                  href="/privacy"
                  className="transition-colors hover:text-[#8a6d3b]"
                >
                  Privacy
                </Link>

                <Link
                  href="/disclaimer"
                  className="transition-colors hover:text-[#8a6d3b]"
                >
                  Disclaimer
                </Link>
              </nav>

            </div>

            <div className="mt-10 border-t border-[#dedad1] pt-6">
              <p className="text-xs text-[#8a857c]">
                © {new Date().getFullYear()} andy.my. All rights reserved.
              </p>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}