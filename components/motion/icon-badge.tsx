import type { ComponentType, SVGProps } from "react"

import { cn } from "@/lib/utils"

interface IconBadgeProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  className?: string
  iconClassName?: string
}

/**
 * An icon in a bordered box. When a clickable `.group` ancestor (a linked
 * card) is hovered, the badge and icon shift to the brand colour.
 */
export function IconBadge({ icon: Icon, className, iconClassName }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-foreground/15 bg-foreground/10 transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/15",
        className
      )}
    >
      <Icon
        className={cn(
          "text-foreground transition-colors duration-300 group-hover:text-brand",
          iconClassName
        )}
      />
    </div>
  )
}
