import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { mdxComponents } from "@/components/mdx";
import { MarkRead } from "@/components/progress";
import { getCoursePage, getNeighbors, getPages, getPart, pageHref } from "@/lib/course";
import { getGlossaryEntry } from "@/lib/glossary";
import { partHeading, partLabel } from "@/lib/outline";

export function generateStaticParams() {
  return getPages().map((page) => ({
    part: page.part,
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ part: string; slug: string }>;
}) {
  const { part, slug } = await params;
  const page = getCoursePage(part, slug);
  if (!page) return { title: "Page" };
  return { title: page.title, description: page.summary };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ part: string; slug: string }>;
}) {
  const { part, slug } = await params;
  const page = getCoursePage(part, slug);
  if (!page) notFound();
  const { previous, next } = getNeighbors(part, slug);
  const partName = partLabel(page.part);
  const outline = getPart(page.part);

  return (
    <main className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { href: "/", label: "Map" },
          { href: `/part/${page.part}`, label: partHeading(page.part, outline?.title ?? partName) },
          { label: page.title },
        ]}
      />
      <p className="mt-4 font-sans text-sm font-semibold text-pine">
        {partName} · page {page.number} · {page.minutes} min · checked {page.lastChecked}
      </p>
      <h1 className="mt-2 max-w-[24ch] font-sans text-4xl font-semibold tracking-tight">{page.title}</h1>
      <p className="mt-4 max-w-[68ch] text-lg leading-relaxed">{page.summary}</p>
      <article className="course-page mt-8 max-w-[68ch]">
        <MDXRemote
          source={page.content}
          components={mdxComponents}
          options={{ blockJS: false }}
        />
        <section className="my-10">
          <h2>Key terms</h2>
          <dl className="space-y-4">
            {page.terms.map((term) => {
              const entry = getGlossaryEntry(term);
              if (!entry) return null;
              return (
                <div key={entry.id}>
                  <dt className="font-sans font-semibold">
                    <Link href={`/glossary#${entry.id}`} className="text-pine underline">
                      {entry.term}
                    </Link>
                  </dt>
                  <dd className="mt-1 leading-relaxed">{entry.definition}</dd>
                </div>
              );
            })}
          </dl>
        </section>
      </article>
      <div className="mt-8">
        <MarkRead slug={`${page.part}:${page.slug}`} title={page.title} />
      </div>
      <nav className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:justify-between">
        {previous ? (
          <Link href={pageHref(previous)} className="font-sans text-sm font-semibold underline">
            Previous: {previous.title}
          </Link>
        ) : (
          <Link href={`/part/${page.part}`} className="font-sans text-sm font-semibold underline">
            Back to {partName}
          </Link>
        )}
        {next ? (
          <Link href={pageHref(next)} className="font-sans text-sm font-semibold underline">
            Next: {next.title}
          </Link>
        ) : (
          <Link href="/glossary" className="font-sans text-sm font-semibold underline">
            Glossary
          </Link>
        )}
      </nav>
    </main>
  );
}
