import { Reveal } from "@/components/motion/reveal"
import { about } from "@/lib/site-config"

export function About() {
  return (
    <section id="about" className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">About</p>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {about.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-col gap-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg text-foreground/60">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
