"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"

import { CaseStudyList } from "@/components/case-study-list"
import { ConversationalForm } from "@/components/conversational-form"
import { GlowHero } from "@/components/glow-hero"
import { Press } from "@/components/motion/press"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { agencyPage, avPage } from "@/lib/site-config"

export function AgencyHero() {
  return <GlowHero hero={agencyPage.hero} />
}

export function ChecklistSection({
  label,
  heading,
  points,
}: {
  label: string
  heading: string
  points: string[]
}) {
  return (
    <section className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">{label}</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-14 grid grid-cols-1 gap-x-16 gap-y-4 border-t border-foreground/15 pt-8 md:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-lg text-foreground/70">
                <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-brand" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function AgencyTakeOn() {
  const { takeOn } = agencyPage
  return <ChecklistSection label="What I take on" heading={takeOn.heading} points={takeOn.points} />
}

export function AgencyHowIWork() {
  const { howIWork } = agencyPage
  return (
    <section className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">How I work</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {howIWork.heading}
          </h2>
        </Reveal>

        <dl className="mt-14 border-b border-foreground/10">
          {howIWork.items.map((item, index) => (
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

export function AgencyStack() {
  const { stack } = agencyPage
  return (
    <section className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Stack</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {stack.heading}
          </h2>
        </Reveal>

        <dl className="mt-14 border-b border-foreground/10">
          {stack.groups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.05}
              className="grid grid-cols-1 gap-4 border-t border-foreground/10 py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-10"
            >
              <dt className="font-heading text-xl font-semibold tracking-tight">{group.title}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-foreground/12 bg-foreground/[0.03] px-3 py-1.5 text-sm text-foreground/75"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function AgencyWork() {
  return (
    <section id="agency-work" className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Recent work</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Shipped on real products.
          </h2>
        </Reveal>
        <CaseStudyList items={avPage.work} />
      </div>
    </section>
  )
}

export function AgencyCta() {
  const { cta } = agencyPage
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
            <ConversationalForm topic="agency" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
