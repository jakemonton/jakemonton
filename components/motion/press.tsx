"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

/**
 * Wraps interactive elements (buttons, cards-as-links) with a fluid
 * spring-based hover/tap scale for tactile feedback.
 */
export function Press({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 18, mass: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
