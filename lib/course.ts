import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getGlossaryEntry } from "./glossary";
import { getOutlinePart, partRank, parts, type OutlinePart } from "./outline";
import { pageHref, type PageMeta } from "./page-meta";

export type { PageMeta };
export { pageHref };

export type CoursePage = PageMeta & {
  content: string;
  file: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "pages");

function asString(value: unknown, file: string, key: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${file}: frontmatter ${key} must be a non-empty string`);
  }
  return value.trim();
}

function normalizePart(value: unknown, file: string): string {
  if (value === "A" || value === "a") return "A";
  const part = typeof value === "number" ? value : Number(value);
  if (!Number.isInteger(part) || part < 0 || part > 12) {
    throw new Error(`${file}: part must be 0-12 or A`);
  }
  return String(part);
}

function readAll(): CoursePage[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith(".mdx"));
  const pages = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const part = normalizePart(data.part, file);
    const number = Number(data.number);
    const slug = asString(data.slug, file, "slug");
    const title = asString(data.title, file, "title");
    const summary = asString(data.summary, file, "summary");
    const minutes = Number(data.minutes);
    const lastChecked = asString(data.lastChecked, file, "lastChecked");
    const terms = Array.isArray(data.terms) ? data.terms.map((term) => String(term)) : [];

    if (!Number.isInteger(number) || number < 1) {
      throw new Error(`${file}: number must be a positive integer`);
    }
    if (!Number.isFinite(minutes) || minutes <= 0) {
      throw new Error(`${file}: minutes must be a positive number`);
    }
    if (!/^\d{4}-\d{2}$/.test(lastChecked)) {
      throw new Error(`${file}: lastChecked must look like 2026-09`);
    }
    if (terms.length < 2) {
      throw new Error(`${file}: terms needs at least two glossary entries`);
    }
    for (const term of terms) {
      if (!getGlossaryEntry(term)) {
        throw new Error(`${file}: term "${term}" is missing from lib/glossary.ts`);
      }
    }

    const expectedFile = `${part}-${number}-${slug}.mdx`;
    if (file !== expectedFile) {
      throw new Error(`${file}: filename should be ${expectedFile}`);
    }
    if (!getOutlinePart(part)?.pages.some((page) => page.number === number)) {
      throw new Error(`${file}: part ${part} has no outline page ${number}`);
    }

    return {
      part,
      number,
      slug,
      title,
      summary,
      minutes,
      terms,
      lastChecked,
      content,
      file,
    };
  });

  pages.sort((a, b) => partRank(a.part) - partRank(b.part) || a.number - b.number);

  const seen = new Set<string>();
  for (const page of pages) {
    const key = `${page.part}:${page.slug}`;
    if (seen.has(key)) throw new Error(`Duplicate slug ${page.slug} in part ${page.part}`);
    seen.add(key);
  }

  return pages;
}

export function getPages(): PageMeta[] {
  return readAll().map((page) => ({
    part: page.part,
    number: page.number,
    slug: page.slug,
    title: page.title,
    summary: page.summary,
    minutes: page.minutes,
    terms: page.terms,
    lastChecked: page.lastChecked,
  }));
}

export function getCoursePage(part: string, slug: string): CoursePage | undefined {
  return readAll().find((page) => page.part === part && page.slug === slug);
}

export function getPart(id: string): OutlinePart | undefined {
  return getOutlinePart(id);
}

export function getAllParts(): OutlinePart[] {
  return parts;
}

export function getNeighbors(part: string, slug: string): {
  previous?: PageMeta;
  next?: PageMeta;
} {
  const pages = getPages();
  const index = pages.findIndex((page) => page.part === part && page.slug === slug);
  return {
    previous: index > 0 ? pages[index - 1] : undefined,
    next: index >= 0 && index < pages.length - 1 ? pages[index + 1] : undefined,
  };
}
