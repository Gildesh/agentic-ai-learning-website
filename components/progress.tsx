"use client";

import { useSyncExternalStore } from "react";

export const READ_KEY = "agentic-course-read";
const CHANGE = "agentic-course-read-change";

export function readSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(READ_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

let snapshot = "[]";

function publish() {
  snapshot = JSON.stringify(readSlugs());
  window.dispatchEvent(new Event(CHANGE));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot() {
  const next = JSON.stringify(readSlugs());
  if (next !== snapshot) snapshot = next;
  return snapshot;
}

export function useReadSlugs() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => "[]");
  const slugs = JSON.parse(raw) as string[];

  function markRead(slug: string) {
    const next = Array.from(new Set([...readSlugs(), slug]));
    window.localStorage.setItem(READ_KEY, JSON.stringify(next));
    publish();
  }

  return { slugs, markRead };
}

export function MarkRead({ slug, title }: { slug: string; title: string }) {
  const { slugs, markRead } = useReadSlugs();
  const done = slugs.includes(slug);

  return (
    <button
      type="button"
      onClick={() => markRead(slug)}
      className="rounded-full border border-pine bg-paper-2 px-4 py-2 font-sans text-sm font-semibold text-pine"
      aria-pressed={done}
    >
      {done ? "Marked read" : `Mark “${title}” read`}
    </button>
  );
}
