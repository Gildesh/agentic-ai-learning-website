"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, type ReactNode } from "react";
import { pageHref, type PageMeta } from "@/lib/page-meta";
import { partLabel, parts } from "@/lib/outline";

export function SiteShell({ pages, children }: { pages: PageMeta[]; children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [opened, setOpened] = useState<string[]>([]);

  const activePart = pathname.match(/^\/part\/([^/]+)/)?.[1];

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (needle.length < 2) return [];
    return pages.filter((page) => {
      const haystack = [page.title, page.summary, ...page.terms].join(" ").toLowerCase();
      return haystack.includes(needle);
    });
  }, [pages, query]);

  function partIsOpen(id: string) {
    return id === activePart || opened.includes(id);
  }

  function togglePart(id: string) {
    setOpened((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  const nav = (
    <nav aria-label="Course pages" className="font-sans text-sm">
      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">Contents</p>
      {parts.map((part) => {
        const written = pages.filter((page) => page.part === part.id);
        const open = partIsOpen(part.id);
        return (
          <div key={part.id} className="border-t border-line">
            <button
              type="button"
              className="flex w-full items-baseline justify-between gap-2 px-3 py-2 text-left font-semibold"
              aria-expanded={open}
              onClick={() => togglePart(part.id)}
            >
              <span>
                {partLabel(part.id)}
                {part.title === partLabel(part.id) ? null : (
                  <span className="mt-0.5 block text-xs font-normal text-ink-soft">{part.title}</span>
                )}
              </span>
              <span className="shrink-0 text-xs text-ink-soft">
                {written.length}/{part.pages.length}
              </span>
            </button>
            {open ? (
              <ol className="space-y-0.5 px-2 pb-3">
                {part.pages.map((outlinePage) => {
                  const page = written.find((item) => item.number === outlinePage.number);
                  const href = page ? pageHref(page) : undefined;
                  const current = href !== undefined && pathname === href;
                  const label = `${part.id === "A" ? "A" : part.id}.${outlinePage.number} ${page?.title ?? outlinePage.title}`;
                  return (
                    <li key={outlinePage.number}>
                      {href ? (
                        <Link
                          href={href}
                          aria-current={current ? "page" : undefined}
                          className={`block rounded-md px-2 py-1.5 leading-snug ${
                            current ? "bg-pine-soft font-semibold text-pine" : "hover:bg-paper"
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {label}
                        </Link>
                      ) : (
                        <span className="block px-2 py-1.5 leading-snug text-ink-soft">{label}</span>
                      )}
                    </li>
                  );
                })}
              </ol>
            ) : null}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
        <div className="flex flex-wrap items-center gap-3 px-4 py-3 lg:px-6">
          <button
            type="button"
            className="rounded-md border border-line px-3 py-1.5 font-sans text-sm font-semibold lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="course-drawer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Contents"}
          </button>
          <Link href="/" className="font-sans text-sm font-semibold leading-tight">
            From Gen AI to shipping real software
          </Link>
          <nav className="ml-auto flex gap-4 font-sans text-sm font-semibold" aria-label="Site">
            <Link href="/glossary" className="underline decoration-line underline-offset-4">
              Glossary
            </Link>
            <Link href="/cheatsheets" className="underline decoration-line underline-offset-4">
              Cheatsheets
            </Link>
          </nav>
          <div className="relative w-full lg:w-72">
            <label htmlFor="course-search" className="sr-only">
              Search titles, summaries, and terms
            </label>
            <input
              id="course-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search titles, summaries, terms"
              className="w-full rounded-lg border border-line bg-paper-2 px-3 py-2 font-sans text-sm"
            />
            {query.trim().length >= 2 ? (
              <ul className="absolute left-0 right-0 top-full z-40 mt-1 max-h-80 overflow-auto rounded-lg border border-line bg-paper-2 shadow-sm">
                {results.length === 0 ? (
                  <li className="px-3 py-2 font-sans text-sm text-ink-soft">No matches</li>
                ) : (
                  results.map((page) => (
                    <li key={`${page.part}-${page.slug}`}>
                      <Link
                        href={pageHref(page)}
                        className="block px-3 py-2 font-sans text-sm leading-snug hover:bg-pine-soft"
                        onClick={() => setQuery("")}
                      >
                        <span className="font-semibold text-pine">
                          {partLabel(page.part)} · {page.number}
                        </span>
                        <span className="mt-0.5 block font-semibold">{page.title}</span>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            ) : null}
          </div>
        </div>
      </header>
      {menuOpen ? (
        <div id="course-drawer" className="fixed inset-0 z-20 bg-paper lg:hidden">
          <div className="h-full overflow-y-auto px-2 pb-16 pt-20">{nav}</div>
        </div>
      ) : null}
      <div className="lg:grid lg:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className="sticky top-16 hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-r border-line lg:block">
          {nav}
        </aside>
        <div id="content">{children}</div>
      </div>
    </>
  );
}
