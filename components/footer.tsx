import { Mail } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Press } from "@/components/motion/press"
import { Reveal } from "@/components/motion/reveal"
import { navLinks, siteConfig } from "@/lib/site-config"

const socials = [
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: siteConfig.github, icon: GithubIcon },
]

export function Footer() {
  return (
    <footer className="bg-background py-12">
      <Reveal
        y={16}
        className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between"
      >
        <div>
          <p className="font-heading text-sm font-semibold tracking-tight uppercase">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-foreground/50">
            {siteConfig.role}
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Press key={social.label} className="inline-flex">
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-xl border border-foreground/15 text-foreground/70 transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                </Press>
              )
            })}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <div className="border-t border-foreground/10 pt-6 text-xs text-foreground/40">
          © 2026 {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
