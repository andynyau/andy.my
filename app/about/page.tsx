export const metadata = {
    title: "About | andy.my",
    description:
      "About andy.my and the ideas, observations and discoveries shared here.",
  };
  
  export default function AboutPage() {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold">
          About
        </h1>
  
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8">
          <p>
            Welcome to andy.my.
          </p>
  
          <p>
            This is a place for ideas, observations, discoveries and
            experiences that are worth remembering and sharing.
          </p>
  
          <p>
            Some subjects are practical. Others are simply interesting.
            The common thread is curiosity.
          </p>
        </div>
      </main>
    );
  }