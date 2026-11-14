"use client"

import { ArrowRight } from "lucide-react"

import { ConversationalForm } from "@/components/conversational-form"
import { Press } from "@/components/motion/press"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { contact } from "@/lib/site-config"


export function Contact() {
  return (
    <section id="contact" className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <Reveal>
            <p className="text-sm text-foreground/50">Contact</p>
            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-lg text-foreground/60">
              {contact.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Press>
                <Button
                  size="lg"
                  variant="accent"
                  nativeButton={false}
                  className="h-12 px-6 text-base"
                  render={
                    <a href={contact.cta.href}>
                      {contact.cta.label}
                      <ArrowRight className="size-4" />
                    </a>
                  }
                />
              </Press>
              <span className="text-sm text-foreground/55">or answer a few quick questions</span>
            </div>

          </Reveal>

          <Reveal delay={0.1}>
            <ConversationalForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
