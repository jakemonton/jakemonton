"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

/**
 * Wraps buttons with a small press-down on click. No hover scale: buttons
 * already change colour on hover, so extra motion there is just noise.
 */
export function Press({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
