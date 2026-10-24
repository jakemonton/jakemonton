"use client"

import { motion } from "framer-motion"
import { Boxes, Layers, ShieldCheck } from "lucide-react"

import { CanvasBox } from "@/components/canvas-box"
import { IconBadge } from "@/components/motion/icon-badge"
import { Reveal } from "@/components/motion/reveal"
import { features } from "@/lib/site-config"

const icons = [Layers, ShieldCheck, Boxes]

export function FeatureCards() {
  return (
    <section id="work" className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">What I bring</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for production, not demos.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={feature.title} delay={index * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
                  className="h-full"
                >
                  <CanvasBox className="h-full p-8">
                    <IconBadge icon={Icon} className="mb-6 size-11" iconClassName="size-5" />
                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-foreground/60">{feature.description}</p>
                  </CanvasBox>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
