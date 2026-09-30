import Link from "next/link";
import { getPages, pageHref } from "@/lib/course";
import { partLabel, parts, PLANNED_PAGE_COUNT } from "@/lib/outline";

export default function HomePage() {
  const pages = getPages();
  const minutes = pages.reduce((sum, page) => sum + page.minutes, 0);

  return (
    <main className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      <p className="font-sans text-sm font-semibold uppercase tracking-wide text-pine">
        For a smart beginner
      </p>
      <h1 className="mt-3 max-w-[20ch] font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
        From generative AI to shipping real software
      </h1>
      <p className="mt-6 max-w-[68ch] text-xl leading-relaxed">
        You can use a laptop and a browser. You have not written software before, and you want to direct AI coding agents well. This course uses the names you will meet in a real tutorial: API, git, React, Cursor, Stripe.
      </p>
      <p className="mt-4 max-w-[68ch] text-lg leading-relaxed">
        {pages.length === PLANNED_PAGE_COUNT
          ? `${PLANNED_PAGE_COUNT} short pages, one idea each${minutes > 0 ? `, about ${minutes} minutes of reading` : ""}.`
          : `${PLANNED_PAGE_COUNT} short pages, one idea each. ${pages.length} ${pages.length === 1 ? "page is" : "pages are"} written so far${minutes > 0 ? `, about ${minutes} minutes of reading` : ""}.`}{" "}
        Your place is saved in this browser. There is no account.
      </p>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2">
        {parts.map((part) => {
          const written = pages.filter((page) => page.part === part.id);
          const first = written[0];
          return (
            <li key={part.id} className="rounded-xl border border-line bg-paper-2 p-5">
              <p className="font-sans text-sm font-semibold text-pine">
                {partLabel(part.id)} · {written.length} of {part.pages.length} pages
              </p>
              <h2 className="mt-1 font-sans text-xl font-semibold">{part.title}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{part.summary}</p>
              <div className="mt-4 flex flex-wrap gap-3 font-sans text-sm font-semibold">
                <Link href={`/part/${part.id}`} className="underline decoration-line underline-offset-4">
                  Open the part
                </Link>
                {first ? (
                  <Link href={pageHref(first)} className="text-pine underline decoration-pine/40 underline-offset-4">
                    {part.id}.{first.number} {first.title}
                  </Link>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
