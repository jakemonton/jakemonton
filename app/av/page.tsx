import type { Metadata } from "next"

import { AvCta, AvEngagement, AvHero, AvHowIWork, AvWhoIHelp, AvWork } from "@/components/av-sections"
import { avPage } from "@/lib/site-config"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: avPage.meta.title,
  description: avPage.meta.description,
  path: "/av",
})

export default function AvIndustryPage() {
  return (
    <>
      <AvHero />
      <AvWhoIHelp />
      <AvWork />
      <AvHowIWork />
      <AvEngagement />
      <AvCta />
    </>
  )
}
