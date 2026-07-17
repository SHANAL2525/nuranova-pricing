import type { Metadata } from "next";
import { company, siteUrl } from "./constants";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: company.name }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
