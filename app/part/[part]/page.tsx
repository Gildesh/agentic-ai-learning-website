import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { PartPageList } from "@/components/part-page-list";
import { getPages, getPart } from "@/lib/course";
import { partHeading, parts } from "@/lib/outline";

export function generateStaticParams() {
  return parts.map((part) => ({ part: part.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const { part: partId } = await params;
  const part = getPart(partId);
  if (!part) return { title: "Part" };
  return { title: partHeading(part.id, part.title) };
}

export default async function PartPage({ params }: { params: Promise<{ part: string }> }) {
  const { part: partId } = await params;
  const part = getPart(partId);
  if (!part) notFound();
  const pages = getPages().filter((page) => page.part === part.id);
  const minutes = pages.reduce((sum, page) => sum + page.minutes, 0);

  return (
    <main className="mx-auto max-w-3xl px-5 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { href: "/", label: "Map" },
          { label: partHeading(part.id, part.title) },
        ]}
      />
      <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight">{part.title}</h1>
      <p className="mt-4 max-w-[68ch] text-lg leading-relaxed">{part.summary}</p>
      <p className="mt-3 font-sans text-sm text-ink-soft">
        {pages.length} of {part.pages.length} pages written
        {minutes > 0 ? ` · ${minutes} min so far` : ""}
      </p>
      <PartPageList partId={part.id} outline={part.pages} pages={pages} />
    </main>
  );
}
