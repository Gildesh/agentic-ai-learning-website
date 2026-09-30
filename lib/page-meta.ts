export type PageMeta = {
  part: string;
  number: number;
  slug: string;
  title: string;
  summary: string;
  minutes: number;
  terms: string[];
  lastChecked: string;
};

export function pageHref(page: Pick<PageMeta, "part" | "slug">): string {
  return `/part/${page.part}/${page.slug}`;
}
