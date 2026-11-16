import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"

export interface CaseStudy {
  title: string
  description: string
  /** Your part in it, shown as a quiet label (e.g. "Lead developer"). */
  role?: string
  stack?: string
  /** Case study page, if one exists. The row becomes a link. */
  href?: string
}

/**
 * Editorial case-study rows: number, title and description, then a meta
 * column with the role and stack, divided by hairlines. Rows with a case
 * study page are links and react on hover; the rest stay static.
 */
export function CaseStudyList({ items }: { items: CaseStudy[] }) {
  // Only reserve the meta column when at least one row has a role or stack.
  const hasMeta = items.some((item) => item.role || item.stack)
  return (
    <ol className="mt-14 border-b border-foreground/10">
      {items.map((item, index) => {
        const body = (
          <>
            <span className="font-heading text-sm text-brand md:pt-1.5">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-heading text-2xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-brand">
                {item.title}
              </h3>
              <p className="mt-3 max-w-2xl text-foreground/60">{item.description}</p>
              {item.href && (
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  Read case study
                  <ArrowRight className="size-4" />
                </span>
              )}
            </div>
            {hasMeta &&
              (item.role || item.stack ? (
                <div className="text-sm md:pt-2 md:text-right">
                  {item.role && <p className="text-foreground/70">{item.role}</p>}
                  {item.stack && <p className="mt-1 text-foreground/45">{item.stack}</p>}
                </div>
              ) : (
                <span className="hidden md:block" />
              ))}
          </>
        )
        const grid = `grid grid-cols-1 gap-3 py-8 md:gap-8 md:py-10 ${
          hasMeta ? "md:grid-cols-[4rem_minmax(0,1fr)_17rem]" : "md:grid-cols-[4rem_minmax(0,1fr)]"
        }`
        return (
          <li key={item.title} className="border-t border-foreground/10">
            <Reveal delay={index * 0.05}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`group ${grid} rounded-sm focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none`}
                >
                  {body}
                </Link>
              ) : (
                <div className={grid}>{body}</div>
              )}
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}
