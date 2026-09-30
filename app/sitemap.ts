import type { MetadataRoute } from "next";
import { getAllParts, getPages, pageHref } from "@/lib/course";
import { SITE_URL } from "@/lib/site";

const lastModified = new Date("2026-09-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/glossary", "/cheatsheets"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
  const partRoutes = getAllParts().map((part) => ({
    url: `${SITE_URL}/part/${part.id}`,
    lastModified,
  }));
  const pageRoutes = getPages().map((page) => ({
    url: `${SITE_URL}${pageHref(page)}`,
    lastModified,
  }));

  return [...staticRoutes, ...partRoutes, ...pageRoutes];
}
