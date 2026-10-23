import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/motion/reveal"
import { faqs } from "@/lib/site-config"

export function FAQ() {
  return (
    <section id="faq" className="border-b border-white/10 bg-black py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-sm text-white/50">FAQ</p>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border-white/10"
              >
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
