import type { Metadata } from "next"

import { siteConfig } from "@/lib/site-config"

/**
 * Consistent metadata for every page: title, description, canonical URL,
 * Open Graph and Twitter tags. Share images come from each route's
 * opengraph-image.tsx, which Next adds automatically.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string
  description: string
  /** Path from the site root, e.g. "/av". */
  path: string
  type?: "website" | "article"
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: siteConfig.name,
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
