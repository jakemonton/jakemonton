"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GridBackground } from "@/components/grid-background"
import { AnimatedHeadline } from "@/components/motion/animated-headline"
import { Press } from "@/components/motion/press"
import { hero } from "@/lib/site-config"

const SPRING = { type: "spring", stiffness: 140, damping: 20, mass: 0.6 } as const

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100vh] items-center overflow-hidden border-b border-foreground/10 bg-background"
    >
      <motion.div className="absolute inset-0" style={{ y: gridY }}>
        <GridBackground />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-6 pt-32 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/70"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
          </span>
          {hero.eyebrow}
        </motion.div>

        <h1 className="font-heading max-w-4xl text-left text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
          <AnimatedHeadline text={hero.headline} delay={0.15} />
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
              nativeButton={false}
              className="h-12 px-6 text-base"
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
              className="h-12 px-6 text-base"
              render={<a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>}
            />
          </Press>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        aria-label="Scroll to work section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.6 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-foreground/40 transition-colors hover:text-foreground/80 sm:block"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  )
}
