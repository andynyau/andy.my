import siteMetadata from "@/data/siteMetadata";
import Link from "@/components/Link";
import ThemeSwitch from "@/components/ThemeSwitch";
import SearchButton from "@/components/SearchButton";

import Image from "next/image";

export default function Header() {
  let headerClass =
    "flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10";

  if (siteMetadata.stickyNav) {
    headerClass += " sticky top-0 z-50";
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center">
        {siteMetadata.siteLogo ? (
          <Image
            src={siteMetadata.siteLogo}
            alt={siteMetadata.headerTitle}
            width={120}
            height={90}
            className="h-[90px] w-auto object-contain"
            priority
          />
        ) : (
          <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {siteMetadata.headerTitle}
          </div>
        )}
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <SearchButton />
        <ThemeSwitch />
      </div>
    </header>
  );
}
