"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: ReactNode
  delay?: number
  y?: number
}

export function Reveal({
  children,
  delay = 0,
  y = 10,
  viewport,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px 200px 0px", ...viewport }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
