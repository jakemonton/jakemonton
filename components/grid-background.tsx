"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const COLS = 16
const ROWS = 9
const SHADE_COUNT = 9

function randomCell() {
  return {
    col: Math.floor(Math.random() * COLS),
    row: Math.floor(Math.random() * ROWS),
  }
}

// Deterministic starting position (spread evenly) so prerendering never
// touches Math.random() — real randomization only kicks in after mount.
function initialCell(index: number) {
  return {
    col: Math.floor((index / SHADE_COUNT) * COLS),
    row: Math.floor(((index * 7) / SHADE_COUNT) % ROWS),
  }
}

function ShadeCell({ index }: { index: number }) {
  const [pos, setPos] = useState(() => initialCell(index))
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const schedule = () => {
      const delay = 2200 + Math.random() * 3000
      timeoutRef.current = setTimeout(() => {
        setPos(randomCell())
        schedule()
      }, delay)
    }
    // Stagger the first move so cells don't all shift in sync.
    const initialDelay = (index / SHADE_COUNT) * 2000
    timeoutRef.current = setTimeout(schedule, initialDelay)
    return () => clearTimeout(timeoutRef.current)
  }, [index])

  return (
    <motion.div
      aria-hidden
      className="absolute bg-white/[0.06]"
      style={{ width: `${100 / COLS}%`, height: `${100 / ROWS}%` }}
      animate={{
        left: `${(pos.col / COLS) * 100}%`,
        top: `${(pos.row / ROWS) * 100}%`,
      }}
      transition={{ type: "spring", stiffness: 16, damping: 14, mass: 1.3 }}
    />
  )
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: `${100 / COLS}% ${100 / ROWS}%`,
        }}
      />
      <div className="absolute inset-0">
        {Array.from({ length: SHADE_COUNT }, (_, i) => (
          <ShadeCell key={i} index={i} />
        ))}
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 35%, transparent 0%, black 75%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}
