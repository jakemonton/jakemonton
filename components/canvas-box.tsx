"use client"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { useState, type MouseEvent, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface CanvasBoxProps {
  children: ReactNode
  className?: string
}

/**
 * A bordered box with an animated dot-grid canvas that reveals a
 * cursor-tracking spotlight on hover (à la 21st.dev's "canvas" pattern).
 * The spotlight trails the cursor via a spring for a fluid, weighted feel
 * instead of snapping to the raw pointer position.
 */
export function CanvasBox({ children, className }: CanvasBoxProps) {
  const [active, setActive] = useState(false)
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const springConfig = { stiffness: 150, damping: 20, mass: 0.4 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)
  const background = useMotionTemplate`radial-gradient(220px circle at ${smoothX}% ${smoothY}%, rgba(255,255,255,0.14), transparent 70%)`

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100)
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-white/25",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ background }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, transparent 40%, black 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
