"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { HeroGlow } from "@/components/hero-glow"
import { AnimatedHeadline } from "@/components/motion/animated-headline"
import { Press } from "@/components/motion/press"
import { Button } from "@/components/ui/button"

const SPRING = { type: "spring", stiffness: 140, damping: 20, mass: 0.6 } as const

export interface GlowHeroContent {
  eyebrow: string
  headline: string
  headlineAccent: string
  subheadline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

/** Left-aligned page hero over the soft homepage glow, for pages without a photo. */
export function GlowHero({ hero }: { hero: GlowHeroContent }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-foreground/10 bg-background"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <HeroGlow />
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
          {hero.eyebrow}
        </motion.div>

        <h1 className="font-heading max-w-4xl text-left text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          <AnimatedHeadline
            text={hero.headline}
            accent={hero.headlineAccent}
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
          {hero.subheadline}
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
                <a href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
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
              render={<a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>}
            />
          </Press>
        </motion.div>
      </motion.div>
    </section>
  )
}
