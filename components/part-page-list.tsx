"use client";

import Link from "next/link";
import { pageHref, type PageMeta } from "@/lib/page-meta";
import type { OutlinePage } from "@/lib/outline";
import { useReadSlugs } from "./progress";

export function PartPageList({
  partId,
  outline,
  pages,
}: {
  partId: string;
  outline: OutlinePage[];
  pages: PageMeta[];
}) {
  const { slugs } = useReadSlugs();

  return (
    <ol className="mt-8 divide-y divide-line rounded-xl border border-line bg-paper-2">
      {outline.map((item) => {
        const page = pages.find((entry) => entry.number === item.number);
        const read = page ? slugs.includes(`${partId}:${page.slug}`) : false;
        return (
          <li key={item.number} className="px-4 py-4 sm:px-5">
            {page ? (
              <Link href={pageHref(page)} className="block">
                <span className="font-sans text-sm font-semibold text-pine">
                  {read ? "Read · " : ""}
                  {partId}.{item.number}
                  <span className="ml-2 font-normal text-ink-soft">{page.minutes} min</span>
                </span>
                <span className="mt-1 block font-sans text-lg font-semibold leading-snug">{page.title}</span>
                <span className="mt-1 block text-base leading-relaxed text-ink-soft">{page.summary}</span>
              </Link>
            ) : (
              <div>
                <span className="font-sans text-sm font-semibold text-ink-soft">
                  {partId}.{item.number} · not written yet
                </span>
                <span className="mt-1 block font-sans text-lg font-semibold leading-snug text-ink-soft">{item.title}</span>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
