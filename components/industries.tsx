"use client"

import { motion } from "framer-motion"
import { ArrowRight, Tv2, Workflow } from "lucide-react"

import { IconBadge } from "@/components/motion/icon-badge"
import { Reveal } from "@/components/motion/reveal"
import { industries, industriesHeading } from "@/lib/site-config"

const icons = [Workflow, Tv2]

export function Industries() {
  return (
    <section
      id="industries"
      className="border-b border-foreground/10 bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">What I do</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {industriesHeading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={industry.title} delay={index * 0.1} className="h-full">
                <motion.a
                  href={industry.href}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group flex h-full flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8 transition-colors duration-300 hover:border-brand/40 hover:bg-foreground/[0.05] focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                    <IconBadge icon={Icon} className="mb-6 size-14" iconClassName="size-6" />
                    <h3 className="font-heading text-2xl font-semibold tracking-tight">
                      {industry.title}
                    </h3>
                    <p className="mt-3 flex-1 text-foreground/60">{industry.description}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                      {industry.cta}
                      <ArrowRight className="size-4" />
                    </span>
                </motion.a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
