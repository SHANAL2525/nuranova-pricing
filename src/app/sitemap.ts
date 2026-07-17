import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [""];
  return [...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() })), ...projects.map((project) => ({ url: `${siteUrl}/work/${project.slug}`, lastModified: new Date() }))];
}
