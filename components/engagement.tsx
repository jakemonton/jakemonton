import { Reveal } from "@/components/motion/reveal"

export interface Step {
  title: string
  detail?: string
  description: string
}

export interface EngagementContent {
  heading: string
  description: string
  steps: Step[]
}

/**
 * Numbered steps on a connecting line, so they read as a progression rather
 * than separate boxes: across on desktop, down the left on phones.
 */
export function StepSequence({ steps, className = "mt-16" }: { steps: Step[]; className?: string }) {
  return (
    <ol className={`relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 ${className}`}>
      <span
        aria-hidden
        className="absolute top-4 bottom-4 left-4 w-px bg-foreground/15 md:top-4 md:right-4 md:bottom-auto md:left-4 md:h-px md:w-auto"
      />
      {steps.map((step, index) => (
        <li key={step.title} className="relative pl-14 md:pl-0">
          {/* Number sits on the line; kept outside <Reveal> so its transform can't shift it */}
          <span className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-full border border-brand/50 bg-background font-heading text-sm text-brand md:relative">
            {index + 1}
          </span>
          <Reveal delay={index * 0.1}>
            <h3 className="font-heading text-xl font-semibold tracking-tight md:mt-7">{step.title}</h3>
            {step.detail && <p className="mt-1 text-sm text-foreground/55">{step.detail}</p>}
            <p className="mt-4 max-w-sm text-foreground/60">{step.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}

/** "How we'd work together", shared by the niche pages. */
export function Engagement({ content }: { content: EngagementContent }) {
  return (
    <section className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Next steps</p>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {content.heading}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-foreground/60">{content.description}</p>
        </Reveal>
        <StepSequence steps={content.steps} />
      </div>
    </section>
  )
}
