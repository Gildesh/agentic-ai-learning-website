import Link from "next/link";
import { getCoursePage } from "@/lib/course";
import { glossary } from "@/lib/glossary";
import { partLabel } from "@/lib/outline";

export default function GlossaryPage() {
  const entries = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <main className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
      <h1 className="font-sans text-4xl font-semibold tracking-tight">Glossary</h1>
      <p className="mt-4 max-w-[68ch] text-lg leading-relaxed">
        Every term the course names in bold lives here. Each entry links to the page that introduces it. The{" "}
        <Link href="/part/A/glossary" className="font-semibold text-pine underline">
          glossary lesson
        </Link>{" "}
        explains how a term gets on this list.
      </p>
      <dl className="mt-8 space-y-6">
        {entries.map((entry) => {
          const page = getCoursePage(entry.part, entry.slug);
          return (
            <div key={entry.id} id={entry.id} className="scroll-mt-24 border-b border-line pb-6">
              <dt className="font-sans text-xl font-semibold">{entry.term}</dt>
              <dd className="mt-2 max-w-[68ch] text-lg leading-relaxed">{entry.definition}</dd>
              {page ? (
                <dd className="mt-2">
                  <Link
                    href={`/part/${entry.part}/${entry.slug}`}
                    className="font-sans text-sm font-semibold text-pine underline"
                  >
                    {partLabel(entry.part)}, page {page.number}: {page.title}
                  </Link>
                </dd>
              ) : null}
            </div>
          );
        })}
      </dl>
    </main>
  );
}
