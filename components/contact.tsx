"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"

import { LinkedinIcon } from "@/components/icons"
import { IconBadge } from "@/components/motion/icon-badge"
import { Reveal } from "@/components/motion/reveal"
import { contact, siteConfig } from "@/lib/site-config"

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Jake Monton",
    href: siteConfig.linkedin,
    icon: LinkedinIcon,
  },
]

export function Contact() {
  return (
    <section id="contact" className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm text-foreground/50">Contact</p>
            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-lg text-foreground/60">
              {contact.description}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
                  className="group flex items-center justify-between rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-colors duration-300 hover:border-foreground/25 hover:bg-foreground/[0.05]"
                >
                  <span className="flex items-center gap-4">
                    <IconBadge icon={Icon} className="size-10" iconClassName="size-4" />
                    <span>
                      <span className="block text-sm text-foreground/50">
                        {link.label}
                      </span>
                      <span className="block font-medium">{link.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-foreground/40 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </motion.a>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
