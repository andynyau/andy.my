import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "Privacy",
  description: "Privacy policy for andy.my.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <PageTitle>Privacy</PageTitle>
        </div>
        <div className="prose dark:prose-invert max-w-none py-8">
          <p>
            This site may use basic analytics and comment services. No personal
            data is sold or shared with third parties beyond what is required to
            operate those services.
          </p>
        </div>
      </div>
    </>
  );
}
