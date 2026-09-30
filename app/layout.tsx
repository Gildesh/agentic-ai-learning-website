import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import { getPages } from "@/lib/course";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "From Gen AI to shipping real software",
    template: "%s · From Gen AI to shipping real software",
  },
  description:
    "A 150-page course that takes a smart beginner from generative AI to directing agents that build, secure, and ship a real app.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const pages = getPages();

  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-paper-2 focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteShell pages={pages}>{children}</SiteShell>
      </body>
    </html>
  );
}
