import { Reveal } from "@/components/motion/reveal"
import { services } from "@/lib/site-config"

/** Services as divided rows: title on the left, description on the right. */
export function Services() {
  return (
    <section id="services" className="border-b border-foreground/10 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm text-foreground/50">Services</p>
          <h2 className="font-heading mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            How I can help.
          </h2>
        </Reveal>

        <dl className="mt-14 border-b border-foreground/10">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.05}
              className="grid grid-cols-1 gap-3 border-t border-foreground/10 py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10"
            >
              <dt className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                {service.title}
              </dt>
              <dd className="text-foreground/60 md:pt-1">{service.description}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
