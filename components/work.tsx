import { CaseStudyList } from "@/components/case-study-list"
import { Reveal } from "@/components/motion/reveal"
import { work } from "@/lib/site-config"

export function Work() {
  return (
    <section id="work" className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Selected work</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Results, not just releases.
          </h2>
        </Reveal>

        <CaseStudyList items={work} />
      </div>
    </section>
  )
}
