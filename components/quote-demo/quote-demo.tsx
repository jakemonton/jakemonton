"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { Inter } from "next/font/google"

import "./quote-demo.css"

// The demo uses Inter and a product-style blue so it reads as a separate
// piece of software, not part of the portfolio's own design.
const inter = Inter({ subsets: ["latin"] })


/**
 * QuoteDemo: a looping, decorative demo of a fit-out quote being built.
 *
 * Sequence (~9.4s): pick a template, line items drop in by area while the
 * margin and GST totals update, the quote is marked "Ready to send", then repeat.
 *
 * - Pauses when off-screen or when the tab is hidden.
 * - Under prefers-reduced-motion it shows the finished quote, with no animation.
 * - The project and figures are fictional.
 */

type Item = {
  area: string
  code: string
  name: string
  detail: string
  qty: number
  cost: number
  sell: number
}

const ITEMS: Item[] = [
  { area: "Kitchen", code: "CO-10E", name: "Combi oven", detail: "10-tray, electric", qty: 1, cost: 16800, sell: 19950 },
  { area: "Kitchen", code: "GC-6B", name: "Gas cooktop", detail: "6-burner with oven", qty: 1, cost: 5200, sell: 6400 },
  { area: "Kitchen", code: "EH-36", name: "Exhaust hood", detail: "3.6 m, stainless", qty: 1, cost: 7400, sell: 9300 },
  { area: "Kitchen", code: "PB-18", name: "Prep bench", detail: "1.8 m, S/S splashback", qty: 2, cost: 2100, sell: 2650 },
  { area: "Wash-up", code: "DW-PT", name: "Dishwasher", detail: "Pass-through, hood type", qty: 1, cost: 8900, sell: 10800 },
  { area: "Labour", code: "LAB-IC", name: "Install & commission", detail: "2 techs, 3 days", qty: 1, cost: 4200, sell: 6200 },
]

// Step -> time (ms) at which that step begins. Step 0 = empty quote,
// 1 = template picked, 2..7 = items 1..6 added, 8 = ready, 9 = fading out.
const TIMELINE = [0, 700, 1300, 1850, 2400, 2950, 3500, 4050, 5000, 8600]
const LOOP_MS = 9400
const FINAL_STEP = 8
const GST = 0.1

const aud = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
})

function totalsFor(count: number) {
  const shown = ITEMS.slice(0, count)
  const cost = shown.reduce((s, i) => s + i.cost * i.qty, 0)
  const sell = shown.reduce((s, i) => s + i.sell * i.qty, 0)
  const margin = sell > 0 ? ((sell - cost) / sell) * 100 : 0
  return { cost, sell, margin }
}

/** Smoothly tweens a number toward `target`. */
function useTween(target: number, duration = 450, enabled = true) {
  const [value, setValue] = useState(target)
  const from = useRef(target)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) {
      from.current = target
      return
    }
    const start = performance.now()
    const startValue = from.current
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      const v = startValue + (target - startValue) * eased
      setValue(v)
      from.current = v
      if (t < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [target, duration, enabled])

  return enabled ? value : target
}

export function QuoteDemo({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion() ?? false
  const [visible, setVisible] = useState(false)
  const [loopStep, setStep] = useState(0)

  // Only run while on screen and the tab is visible.
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    let inView = false
    const sync = () => setVisible(inView && document.visibilityState === "visible")
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        sync()
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    document.addEventListener("visibilitychange", sync)
    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", sync)
    }
  }, [])

  // Drive the timeline.
  useEffect(() => {
    if (reduced || !visible) return

    let timers: ReturnType<typeof setTimeout>[] = []
    const run = () => {
      timers = TIMELINE.map((t, i) => setTimeout(() => setStep(i), t))
      timers.push(setTimeout(run, LOOP_MS))
    }
    run()
    return () => timers.forEach(clearTimeout)
  }, [visible, reduced])

  // Reduced motion: always show the finished quote.
  const step = reduced ? FINAL_STEP : loopStep
  const itemCount = Math.max(0, Math.min(ITEMS.length, step - 1))
  const templatePicked = step >= 1
  const ready = step >= FINAL_STEP
  const fading = step === 9

  const { sell, cost, margin } = totalsFor(itemCount)
  // Snap (no tween) when the loop resets to an empty quote.
  const tween = !reduced && step !== 0
  const sellShown = useTween(sell, 450, tween)
  const marginShown = useTween(margin, 450, tween)
  const profitShown = useTween(sell - cost, 450, tween)

  return (
    <div
      ref={rootRef}
      className={["qd-root", inter.className, className].filter(Boolean).join(" ")}
      role="img"
      aria-label="Animated example: a commercial kitchen quote is built from a template, line items are added by area, and the margin and GST totals update before it is marked ready to send."
    >
      <div className={`qd-window ${fading ? "qd-fading" : ""}`} aria-hidden="true">
        <div className="qd-header">
          <div className="qd-crumbs">
            <span className="qd-muted">Quotes</span>
            <span className="qd-faint">/</span>
            <span>Q-1042</span>
            <span className="qd-faint">Rev B</span>
          </div>
          <span className={`qd-status ${ready ? "qd-status-ready" : ""}`}>
            <i />
            {ready ? "Ready to send" : "Draft"}
          </span>
        </div>

        <div className="qd-body">
          <div className="qd-meta">
            <div>
              <div className="qd-project">Harbourside Café</div>
              <div className="qd-faint qd-small">Kitchen fit-out · Valid 30 days</div>
            </div>
            <div className="qd-templates">
              <span className="qd-faint qd-small qd-hide-sm">Template</span>
              <span className={`qd-select ${templatePicked ? "qd-select-set" : ""}`}>
                {templatePicked ? "Café kitchen" : "Choose…"}
                <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
                  <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </div>
          </div>

          <div className="qd-table">
            <div className="qd-row qd-head">
              <span>Item</span>
              <span className="qd-num">Qty</span>
              <span className="qd-num qd-hide-sm">Cost</span>
              <span className="qd-num">Sell</span>
            </div>
            {ITEMS.map((item, i) => {
              const shown = i < itemCount
              const isNewest = i === itemCount - 1 && !ready
              const firstInArea = i === 0 || ITEMS[i - 1].area !== item.area
              return (
                <Fragment key={item.code}>
                  {firstInArea && (
                    <div className={`qd-group ${shown ? "qd-in" : ""}`}>{item.area}</div>
                  )}
                  <div className={`qd-row qd-item ${shown ? "qd-in" : ""} ${isNewest ? "qd-item-new" : ""}`}>
                    <span className="qd-item-name">
                      <span>
                        <span className="qd-code">{item.code}</span>
                        {item.name}
                      </span>
                      <small>{item.detail}</small>
                    </span>
                    <span className="qd-num">{item.qty}</span>
                    <span className="qd-num qd-muted qd-hide-sm">{aud.format(item.cost * item.qty)}</span>
                    <span className="qd-num">{aud.format(item.sell * item.qty)}</span>
                  </div>
                </Fragment>
              )
            })}
          </div>

          <div className="qd-totals">
            <div>
              <div className="qd-label">Margin</div>
              <div className="qd-margin">
                {marginShown.toFixed(1)}%
                <span className="qd-muted"> · {aud.format(Math.round(profitShown))}</span>
              </div>
            </div>
            <dl className="qd-sums">
              <div>
                <dt>Subtotal ex GST</dt>
                <dd>{aud.format(Math.round(sellShown))}</dd>
              </div>
              <div>
                <dt>GST 10%</dt>
                <dd>{aud.format(Math.round(sellShown * GST))}</dd>
              </div>
              <div className="qd-grand">
                <dt>Total inc GST</dt>
                <dd>{aud.format(Math.round(sellShown * (1 + GST)))}</dd>
              </div>
            </dl>
          </div>

          <div className="qd-actions">
            <span className="qd-ghost-btn">Save revision</span>
            <span className={`qd-primary-btn ${ready ? "qd-primary-ready" : ""}`}>Generate PDF</span>
          </div>
        </div>
      </div>
    </div>
  )
}
