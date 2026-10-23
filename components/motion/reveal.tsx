"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number
  y?: number
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  viewport,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px", ...viewport }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.6, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
