export const metadata = {
    title: "Contact | andy.my",
    description: "Contact andy.my.",
  };
  
  export default function ContactPage() {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold">
          Contact
        </h1>
  
        <div className="mt-8 max-w-3xl text-lg leading-8">
          <p>
            If you would like to get in touch, you can contact me at:
          </p>
  
          <p className="mt-4">
            <a
              href="mailto:andy@andy.my"
              className="underline"
            >
              andy@andy.my
            </a>
          </p>
        </div>
      </main>
    );
  }