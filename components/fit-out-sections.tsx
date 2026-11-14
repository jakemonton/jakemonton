"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, X } from "lucide-react"

import { ConversationalForm } from "@/components/conversational-form"
import { Button } from "@/components/ui/button"
import { Engagement } from "@/components/engagement"
import { HeroBackground } from "@/components/hero-background"
import { AnimatedHeadline } from "@/components/motion/animated-headline"
import { Press } from "@/components/motion/press"
import { Reveal } from "@/components/motion/reveal"
import { QuoteDemo } from "@/components/quote-demo/quote-demo"
import { fitOutPage } from "@/lib/site-config"

const SPRING = { type: "spring", stiffness: 140, damping: 20, mass: 0.6 } as const

export function FitOutHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[90vh] items-center overflow-hidden border-b border-foreground/10 bg-background"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <HeroBackground src="/images/fit-out-hero.webp" alt="" overlay="strong" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-6 pt-32 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/70"
        >
          {fitOutPage.hero.eyebrow}
        </motion.div>

        <h1 className="font-heading max-w-5xl text-left text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          <AnimatedHeadline
            text={fitOutPage.hero.headline}
            accent={fitOutPage.hero.headlineAccent}
            accentClassName="font-display-serif font-normal italic tracking-normal"
            delay={0.15}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-foreground/60"
        >
          {fitOutPage.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.62 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Press>
            <Button
              size="lg"
              variant="accent"
              nativeButton={false}
              className="h-12 px-6 text-base duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              render={
                <a href={fitOutPage.hero.primaryCta.href}>
                  {fitOutPage.hero.primaryCta.label}
                  <ArrowRight className="size-4" />
                </a>
              }
            />
          </Press>
          <Press>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 px-6 text-base duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-foreground! hover:bg-foreground! hover:text-background!"
              render={
                <a href={fitOutPage.hero.secondaryCta.href}>
                  {fitOutPage.hero.secondaryCta.label}
                </a>
              }
            />
          </Press>
        </motion.div>
      </motion.div>

      <motion.a
        href="#how-it-works"
        aria-label="Scroll to how it works section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.6 },
          y: { duration: 1.6, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut", delay: 1.2 },
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-foreground/40 transition-colors hover:text-foreground/80 sm:block"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  )
}

export function FitOutProblem() {
  return (
    <section className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">The problem</p>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Sound familiar?
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-4">
          {fitOutPage.problems.map((problem) => (
            <div key={problem} className="flex items-start gap-3 text-foreground/70">
              <X className="mt-0.5 size-4 shrink-0 text-foreground/40" />
              <span>{problem}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function FitOutHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-foreground/10 bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm text-foreground/50">What a quoting system does</p>
            <h2 className="font-heading mt-3 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Quotes in minutes, not afternoons.
            </h2>
            <p className="mt-6 max-w-md text-lg text-foreground/60">
              Pick a template, adjust the equipment and labour, check the margin, and send a
              clean PDF. Every number comes from one price list.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="flex justify-center lg:justify-end">
            <QuoteDemo />
          </Reveal>
        </div>

        {/* Open grid: a short rule above each feature, no boxes, so the demo above carries the weight */}
        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {fitOutPage.howItWorks.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <span aria-hidden className="block h-px w-10 bg-brand/70" />
              <h3 className="font-heading mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-foreground/60">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FitOutEngagement() {
  return <Engagement content={fitOutPage.engagement} />
}

export function FitOutProof() {
  return (
    <section className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Proof</p>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {fitOutPage.proof.heading}
          </h2>
          <p className="mt-6 text-lg text-foreground/60">{fitOutPage.proof.description}</p>
        </Reveal>
      </div>
    </section>
  )
}

export function FitOutWhoItsFor() {
  return (
    <section className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Who it&apos;s for</p>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {fitOutPage.whoItsFor.heading}
          </h2>
          <p className="mt-6 text-lg text-foreground/60">{fitOutPage.whoItsFor.description}</p>
          <p className="mt-6 border-t border-foreground/10 pt-6 text-foreground/60">
            {fitOutPage.whoItsFor.aside}{" "}
            <a
              href={fitOutPage.whoItsFor.asideLink.href}
              className="inline-flex items-center gap-1 font-medium text-brand"
            >
              {fitOutPage.whoItsFor.asideLink.label}
              <ArrowRight className="size-4" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function FitOutCta() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <Reveal>
            <p className="text-sm text-foreground/50">Get in touch</p>
            <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {fitOutPage.cta.heading}
            </h2>
            <p className="mt-6 max-w-md text-lg text-foreground/60">{fitOutPage.cta.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Press>
                <Button
                  size="lg"
                  variant="accent"
                  nativeButton={false}
                  className="h-12 px-6 text-base"
                  render={
                    <a href={fitOutPage.cta.button.href}>
                      {fitOutPage.cta.button.label}
                      <ArrowRight className="size-4" />
                    </a>
                  }
                />
              </Press>
              <span className="text-sm text-foreground/55">or answer a few quick questions</span>
            </div>

          </Reveal>

          <Reveal delay={0.1}>
            <ConversationalForm topic="fitout" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
