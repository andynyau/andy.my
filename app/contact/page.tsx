import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import siteMetadata from "@/data/siteMetadata";

export const metadata = {
  title: "Contact",
  description: "Contact andy.my.",
};

export default function ContactPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <PageTitle>Contact</PageTitle>
        </div>
        <div className="prose dark:prose-invert max-w-none py-8">
          <p>If you would like to get in touch, you can contact me at:</p>
          <p>
            <Link href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</Link>
          </p>
        </div>
      </div>
    </>
  );
}
