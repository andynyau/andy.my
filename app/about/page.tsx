import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "About",
  description:
    "About andy.my and the ideas, observations and discoveries shared here.",
};

export default function AboutPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <PageTitle>About</PageTitle>
        </div>
        <div className="prose dark:prose-invert max-w-none py-8">
          <p>Welcome to andy.my.</p>
          <p>
            This is a place for ideas, observations, discoveries and experiences
            that are worth remembering and sharing.
          </p>
          <p>
            Some subjects are practical. Others are simply interesting. The
            common thread is curiosity.
          </p>
          <p>
            I hope you find something here that sparks your curiosity, and that
            would inspire you to explore, learn and discover more about the world around you.
          </p>          
        </div>
      </div>
    </>
  );
}
