import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { Hero } from "@/components/hero"
import { Industries } from "@/components/industries"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"
import { siteConfig, siteUrl } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Jake Monton | Custom Software and Automation, Brisbane",
  description:
    "Brisbane software engineer with 15+ years' experience, turning spreadsheets and manual workflows into custom tools, with specialist depth in AV software.",
  path: "/",
})

// Structured data so search engines understand this is a Brisbane-based
// software service, not just a personal page.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${siteConfig.name}, Software Engineer & Product Lead`,
  url: siteUrl,
  email: siteConfig.email,
  description:
    "Custom software and automation for businesses: tools that replace spreadsheets and manual workflows, plus specialist AV industry software.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Brisbane" },
    { "@type": "Country", name: "Australia" },
  ],
  founder: {
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    sameAs: [siteConfig.linkedin, siteConfig.github],
  },
  sameAs: [siteConfig.linkedin, siteConfig.github],
  knowsAbout: [
    "Custom business software",
    "AV control and touch-panel apps",
    "Device discovery and provisioning",
    "Quoting systems",
    "Cloud platforms",
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Industries />
      <Work />
      <Services />
      <About />
      <FAQ />
      <Contact />
    </>
  )
}
