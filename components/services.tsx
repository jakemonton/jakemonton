"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Compass, Network, Rocket, Smartphone, Workflow } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconBadge } from "@/components/motion/icon-badge"
import { Press } from "@/components/motion/press"
import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"
import {
  closingService,
  primaryServices,
  secondaryServices,
} from "@/lib/site-config"

const primaryIcons = [Rocket, Workflow]
const secondaryIcons = [Network, Code2, Smartphone]

type Service = {
  title: string
  description: string
  tags?: string[]
}

function PrimaryServiceRow({
  service,
  icon,
  delay,
}: {
  service: Service
  icon: ComponentType<SVGProps<SVGSVGElement>>
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="group grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
        <div className="flex items-center gap-4">
          <IconBadge icon={icon} className="size-14 shrink-0" iconClassName="size-6" />
          <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            {service.title}
          </h3>
        </div>

        <p className="text-white/60">{service.description}</p>
      </div>
    </Reveal>
  )
}

function ServiceCard({
  service,
  icon,
  size,
  delay,
}: {
  service: Service
  icon: ComponentType<SVGProps<SVGSVGElement>>
  size: "lg" | "sm"
  delay: number
}) {
  const large = size === "lg"

  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        className={cn(
          "group flex h-full flex-col justify-between rounded-2xl border p-7 transition-colors duration-300",
          large
            ? "border-white/15 bg-white/[0.05] hover:border-white/30"
            : "border-white/10 bg-white/[0.03] hover:border-white/25"
        )}
      >
        <div>
          <IconBadge
            icon={icon}
            className={large ? "size-14" : "size-11"}
            iconClassName={large ? "size-6" : "size-5"}
          />

          <h3
            className={cn(
              "font-heading mt-6 font-semibold tracking-tight",
              large ? "text-2xl" : "text-xl"
            )}
          >
            {service.title}
          </h3>
          <p className={cn("mt-3 text-white/60", large ? "text-base" : "text-sm")}>
            {service.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/10 text-white/70">
              {tag}
            </Badge>
          ))}
        </div>
      </motion.div>
    </Reveal>
  )
}

export function Services() {
  return (
    <section id="services" className="border-b border-white/10 bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-white/50">Services</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            How I can help.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {primaryServices.map((service, index) => (
            <PrimaryServiceRow
              key={service.title}
              service={service}
              icon={primaryIcons[index]}
              delay={index * 0.08}
            />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <p className="text-sm text-white/50">Also available for</p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {secondaryServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              icon={secondaryIcons[index]}
              size="sm"
              delay={0.16 + index * 0.08}
            />
          ))}
        </div>

        <Reveal delay={0.4} className="mt-6">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
            className="group flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-white/25 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-4">
              <IconBadge icon={Compass} className="size-14" iconClassName="size-6" />
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                  {closingService.title}
                </h3>
              </div>
            </div>

            <p className="text-white/60 md:max-w-sm">{closingService.description}</p>

            <Press className="shrink-0">
              <Button
                nativeButton={false}
                variant="outline"
                render={
                  <a href="#contact">
                    Let&apos;s talk it through
                    <ArrowRight className="size-4" />
                  </a>
                }
              />
            </Press>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
