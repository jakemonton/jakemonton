"use client"

import type { ReactNode } from "react"
import { MotionConfig } from "framer-motion"

// Applies the visitor's reduced-motion setting to every framer-motion
// animation on the site, not just the ones wrapped in <Reveal>.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
