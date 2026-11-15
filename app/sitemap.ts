import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site-config"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/custom-software", "/av", "/work/aes70-device-discovery"]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }))
}
