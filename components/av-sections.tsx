"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react"

import { CaseStudyList } from "@/components/case-study-list"
import { ConversationalForm } from "@/components/conversational-form"
import { Button } from "@/components/ui/button"
import { Engagement } from "@/components/engagement"
import { HeroBackground } from "@/components/hero-background"
import { AnimatedHeadline } from "@/components/motion/animated-headline"
import { Press } from "@/components/motion/press"
import { Reveal } from "@/components/motion/reveal"
import { avPage } from "@/lib/site-config"

const SPRING = { type: "spring", stiffness: 140, damping: 20, mass: 0.6 } as const

export function AvHero() {
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
        <HeroBackground src="/images/av-hero.webp" alt="" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/70"
        >
          {avPage.hero.eyebrow}
        </motion.div>

        <h1 className="font-heading max-w-5xl text-left text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          <AnimatedHeadline
            text={avPage.hero.headline}
            accent={avPage.hero.headlineAccent}
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
          {avPage.hero.subheadline}
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
                <a href={avPage.hero.primaryCta.href}>
                  {avPage.hero.primaryCta.label}
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
                <a href={avPage.hero.secondaryCta.href}>{avPage.hero.secondaryCta.label}</a>
              }
            />
          </Press>
        </motion.div>
      </motion.div>

      <motion.a
        href="#av-work"
        aria-label="Scroll to AV work section"
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

function PointList({ points }: { points: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-3 text-foreground/70">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  )
}

export function AvWhoIHelp() {
  return (
    <section className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Who I help</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Two sides of the industry, one specialist.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="border-t border-foreground/15 pt-8">
            <h3 className="font-heading text-xl font-semibold tracking-tight">
              For AV manufacturers
            </h3>
            <div className="mt-5">
              <PointList points={avPage.manufacturerPoints} />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="border-t border-foreground/15 pt-8">
            <h3 className="font-heading text-xl font-semibold tracking-tight">
              For AV integrators
            </h3>
            <div className="mt-5">
              <PointList points={avPage.integratorPoints} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function AvWork() {
  return (
    <section id="av-work" className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Selected AV work</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Shipped in AV, not just studied it.
          </h2>
        </Reveal>

        <CaseStudyList items={avPage.work} />
      </div>
    </section>
  )
}

export function AvHowIWork() {
  return (
    <section className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">How I work</p>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {avPage.howIWork.heading}
          </h2>
          <p className="mt-6 text-lg text-foreground/60">{avPage.howIWork.description}</p>
        </Reveal>
      </div>
    </section>
  )
}

export function AvEngagement() {
  return <Engagement content={avPage.engagement} />
}

export function AvCta() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <Reveal>
            <p className="text-sm text-foreground/50">Get in touch</p>
            <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {avPage.cta.heading}
            </h2>
            <p className="mt-6 max-w-md text-lg text-foreground/60">{avPage.cta.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Press>
                <Button
                  size="lg"
                  variant="accent"
                  nativeButton={false}
                  className="h-12 px-6 text-base"
                  render={
                    <a href={avPage.cta.button.href}>
                      {avPage.cta.button.label}
                      <ArrowRight className="size-4" />
                    </a>
                  }
                />
              </Press>
              <span className="text-sm text-foreground/55">or answer a few quick questions</span>
            </div>

          </Reveal>

          <Reveal delay={0.1}>
            <ConversationalForm topic="av" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
