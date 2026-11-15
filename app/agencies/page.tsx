import type { Metadata } from "next"

import { AgencyCta, AgencyHero, AgencyHowIWork, AgencyTakeOn, AgencyWork } from "@/components/agency-sections"
import { pageMetadata } from "@/lib/seo"
import { agencyPage } from "@/lib/site-config"

// Unlisted: shared directly in outreach, not linked from the site, not in the
// sitemap, and marked noindex so it stays out of search results.
export const metadata: Metadata = pageMetadata({
  title: agencyPage.meta.title,
  description: agencyPage.meta.description,
  path: "/agencies",
  noindex: true,
})

export default function AgenciesPage() {
  return (
    <>
      <AgencyHero />
      <AgencyTakeOn />
      <AgencyHowIWork />
      <AgencyWork />
      <AgencyCta />
    </>
  )
}
