"use client"

import { Fragment } from "react"
import { motion } from "framer-motion"

interface AnimatedHeadlineProps {
  text: string
  /** Words appended after `text`, styled with `accentClassName`. */
  accent?: string
  accentClassName?: string
  className?: string
  delay?: number
}

const WORD_SPRING = { type: "spring" as const, stiffness: 170, damping: 22, mass: 0.7 }

/**
 * Reveals text word by word, each sliding up out of a clipped mask —
 * a fluid alternative to animating the whole heading as one block.
 */
export function AnimatedHeadline({
  text,
  accent,
  accentClassName,
  className,
  delay = 0,
}: AnimatedHeadlineProps) {
  const plain = text.split(" ")
  const accentWords = accent ? accent.split(" ") : []
  const words = [...plain, ...accentWords]

  return (
    <span className={className}>
      {words.map((word, index) => (
        <Fragment key={index}>
          <span
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
          >
            <motion.span
              className={index >= plain.length && accentClassName ? `inline-block ${accentClassName}` : "inline-block"}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ ...WORD_SPRING, delay: delay + index * 0.045 }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </span>
  )
}
