import Link from "next/link";
import { getPages, pageHref } from "@/lib/course";

const sheetNumbers = [2, 3, 4, 5, 6];

export default function CheatsheetsPage() {
  const sheets = getPages()
    .filter((page) => page.part === "A" && sheetNumbers.includes(page.number))
    .sort((a, b) => a.number - b.number);

  return (
    <main className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
      <h1 className="font-sans text-4xl font-semibold tracking-tight">Cheatsheets</h1>
      <p className="mt-4 max-w-[68ch] text-lg leading-relaxed">
        The short reference pages live in the appendix. Each one is a lesson you can read, with a figure and a try-it, not a poster.
      </p>
      <ul className="mt-8 divide-y divide-line rounded-xl border border-line bg-paper-2">
        {sheets.map((sheet) => (
          <li key={sheet.slug} className="px-5 py-4">
            <p className="font-sans text-sm font-semibold text-pine">A.{sheet.number}</p>
            <Link href={pageHref(sheet)} className="mt-1 block font-sans text-lg font-semibold underline">
              {sheet.title}
            </Link>
            <p className="mt-1 text-ink-soft">{sheet.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
