import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchProvider from "@/components/SearchProvider";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import { ThemeProviders } from "./theme-providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-white pl-[calc(100vw-100%)] font-sans text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <SearchProvider>
            <SectionContainer>
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </SectionContainer>
          </SearchProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
