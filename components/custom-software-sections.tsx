"use client"

import { ArrowRight } from "lucide-react"

import { ChecklistSection } from "@/components/agency-sections"
import { ConversationalForm } from "@/components/conversational-form"
import { Engagement } from "@/components/engagement"
import { FAQ } from "@/components/faq"
import { GlowHero } from "@/components/glow-hero"
import { Press } from "@/components/motion/press"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { customSoftwarePage as page } from "@/lib/site-config"

export function CustomHero() {
  return <GlowHero hero={page.hero} />
}

export function CustomProblems() {
  return <ChecklistSection label="The problem" heading={page.problems.heading} points={page.problems.points} />
}

export function CustomBuild() {
  return (
    <section id="what-i-build" className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Examples</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.build.heading}
          </h2>
        </Reveal>
        <dl className="mt-14 border-b border-foreground/10">
          {page.build.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="grid grid-cols-1 gap-3 border-t border-foreground/10 py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10"
            >
              <dt className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</dt>
              <dd className="text-foreground/60 md:pt-1">{item.description}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function CustomEngagement() {
  return <Engagement content={page.engagement} />
}

export function CustomFaq() {
  return <FAQ items={page.faqs} />
}

export function CustomCta() {
  const { cta } = page
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <Reveal>
            <p className="text-sm text-foreground/50">Get in touch</p>
            <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{cta.heading}</h2>
            <p className="mt-6 max-w-md text-lg text-foreground/60">{cta.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Press>
                <Button
                  size="lg"
                  variant="accent"
                  nativeButton={false}
                  className="h-12 px-6 text-base"
                  render={
                    <a href={cta.button.href}>
                      {cta.button.label}
                      <ArrowRight className="size-4" />
                    </a>
                  }
                />
              </Press>
              <span className="text-sm text-foreground/55">or answer a few quick questions</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ConversationalForm topic="custom" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
