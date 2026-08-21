import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for andy.my.",
};

export default function DisclaimerPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <PageTitle>Disclaimer</PageTitle>
        </div>
        <div className="prose dark:prose-invert max-w-none py-8">
          <p>
            The views and opinions expressed on this site are personal and do
            not necessarily reflect those of any employer or organization.
          </p>
        </div>
      </div>
    </>
  );
}
