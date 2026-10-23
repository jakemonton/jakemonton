import type { ComponentType, SVGProps } from "react"

import { cn } from "@/lib/utils"

interface IconBadgeProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  className?: string
  iconClassName?: string
}

/**
 * An icon in a bordered box that wiggles when a `.group` ancestor (the
 * card) is hovered. Plain CSS group-hover rather than Framer Motion
 * variant propagation, which doesn't reliably cascade through the
 * non-motion wrapper divs some cards nest it inside.
 */
export function IconBadge({ icon: Icon, className, iconClassName }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-black/40",
        className
      )}
    >
      <Icon
        className={cn(
          "text-white transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-12",
          iconClassName
        )}
      />
    </div>
  )
}
