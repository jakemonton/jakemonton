import type { Metadata } from "next"

import {
  CustomBuild,
  CustomCta,
  CustomEngagement,
  CustomFaq,
  CustomHero,
  CustomProblems,
  CustomWhy,
} from "@/components/custom-software-sections"
import { pageMetadata } from "@/lib/seo"
import { customSoftwarePage } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: customSoftwarePage.meta.title,
  description: customSoftwarePage.meta.description,
  path: "/custom-software",
})

export default function CustomSoftwarePage() {
  return (
    <>
      <CustomHero />
      <CustomProblems />
      <CustomBuild />
      <CustomWhy />
      <CustomEngagement />
      <CustomFaq />
      <CustomCta />
    </>
  )
}
