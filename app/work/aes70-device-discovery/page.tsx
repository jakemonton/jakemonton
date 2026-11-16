import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Aes70Diagram } from "@/components/aes70-diagram"
import { StepSequence } from "@/components/engagement"
import { Reveal } from "@/components/motion/reveal"
import { buttonVariants } from "@/components/ui/button"
import { aes70CaseStudy as cs } from "@/lib/site-config"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: cs.meta.title,
  description: cs.meta.description,
  path: "/work/aes70-device-discovery",
  type: "article",
})

/** Label on the left, prose on the right: the case study's reading layout. */
function Chapter({ label, heading, paragraphs }: { label: string; heading: string; paragraphs: string[] }) {
  return (
    <section className="border-b border-foreground/10 bg-background py-20">
      <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-12">
        <p className="text-sm text-foreground/55 md:pt-2">{label}</p>
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{heading}</h2>
          {paragraphs.map((p) => (
            <p key={p} className="mt-5 max-w-2xl text-lg text-foreground/60">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default function Aes70CaseStudyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-foreground/10 bg-background">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 55% at 15% 30%, color-mix(in oklch, var(--brand) 11%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-20">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/55 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Selected work
          </Link>
          <p className="mt-10 text-sm text-foreground/55">{cs.eyebrow}</p>
          <h1 className="font-heading mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {cs.title}{" "}
            <span className="font-display-serif font-normal italic tracking-normal">{cs.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/60">{cs.summary}</p>

          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-foreground/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {cs.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-foreground/55">{f.label}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Chapter label="The problem" heading={cs.problem.heading} paragraphs={cs.problem.paragraphs} />
      <Chapter label="What I built" heading={cs.solution.heading} paragraphs={cs.solution.paragraphs} />

      {/* Architecture */}
      <section className="border-b border-foreground/10 bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm text-foreground/55">Architecture</p>
            <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From the venue network to the cloud.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <Aes70Diagram caption={cs.diagram.caption} />
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-foreground/10 bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-sm text-foreground/55">How it works</p>
            <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Discover, provision, control.
            </h2>
          </Reveal>
          <StepSequence steps={cs.steps} className="mt-14" />
        </div>
      </section>

      {/* Outcome */}
      <section className="border-b border-foreground/10 bg-background py-20">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-12">
          <p className="text-sm text-foreground/55 md:pt-2">The outcome</p>
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{cs.outcome.heading}</h2>
            <p className="mt-5 max-w-2xl text-2xl leading-snug text-foreground/80">{cs.outcome.description}</p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-background py-24">
        <Reveal className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{cs.cta.heading}</h2>
          <p className="mt-4 max-w-xl text-lg text-foreground/60">{cs.cta.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={cs.cta.button.href}
              className={buttonVariants({ variant: "accent", size: "lg", className: "h-12 px-6 text-base" })}
            >
              {cs.cta.button.label}
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/av"
              className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-6 text-base" })}
            >
              More AV work
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
