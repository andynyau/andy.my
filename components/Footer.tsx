import Link from "@/components/Link";
import siteMetadata from "@/data/siteMetadata";

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center border-t border-gray-200 py-6 dark:border-gray-700">
        <div className="mb-2 flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">•</span>
          <Link href="/tags">Tags</Link>
          <span aria-hidden="true">•</span>
          <Link href="/about">About</Link>
          <span aria-hidden="true">•</span>
          <Link href="/contact">Contact</Link>
          <span aria-hidden="true">•</span>
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true">•</span>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{siteMetadata.title}</div>
        </div>
      </div>
    </footer>
  );
}
