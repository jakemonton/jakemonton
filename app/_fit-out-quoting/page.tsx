import type { Metadata } from "next"

import {
  FitOutCta,
  FitOutEngagement,
  FitOutHero,
  FitOutHowItWorks,
  FitOutProblem,
  FitOutProof,
  FitOutWhoItsFor,
} from "@/components/fit-out-sections"
import { fitOutPage } from "@/lib/site-config"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: fitOutPage.meta.title,
  description: fitOutPage.meta.description,
  path: "/fit-out-quoting",
})

export default function FitOutQuotingPage() {
  return (
    <>
      <FitOutHero />
      <FitOutProblem />
      <FitOutHowItWorks />
      <FitOutEngagement />
      <FitOutProof />
      <FitOutWhoItsFor />
      <FitOutCta />
    </>
  )
}
