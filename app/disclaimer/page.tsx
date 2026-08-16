export const metadata = {
    title: "Disclaimer | andy.my",
    description: "Disclaimer for andy.my.",
  };
  
  export default function DisclaimerPage() {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold">
          Disclaimer
        </h1>
  
        <div className="mt-8 max-w-3xl space-y-6 leading-8">
          <p>
            The information published on andy.my is provided for
            general informational purposes.
          </p>
  
          <p>
            While reasonable effort is made to keep information
            accurate and current, no guarantee is made that all
            information will always be complete, accurate or
            up to date.
          </p>
  
          <p>
            Readers should independently verify information before
            making decisions based on content published on this
            website.
          </p>
        </div>
      </main>
    );
  }