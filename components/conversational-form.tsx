"use client"

import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, CornerDownLeft, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { bookingLink, contactForm, siteConfig } from "@/lib/site-config"

/**
 * A contact form that asks one question at a time.
 *
 * - Choice questions advance as soon as an option is picked (or press 1-4).
 * - Text questions advance with Enter (Shift+Enter for a new line).
 * - The follow-up question changes based on what the visitor is after.
 * - Pass `topic` to skip the "what can I help with" question on niche pages.
 */

type Topic = "av" | "fitout" | "custom" | "other"
type Answers = Record<string, string>
type Option = { value: string; label: string }

type Step = {
  id: string
  kind: "text" | "textarea" | "choice" | "contact"
  question: (a: Answers) => string
  hint?: string
  placeholder?: string
  optional?: boolean
  options?: Option[]
  when?: (a: Answers) => boolean
}

const TOPICS: Option[] = [
  { value: "av", label: "AV software or devices" },
  { value: "fitout", label: "Quoting for a fit-out business" },
  { value: "custom", label: "A custom tool or automation" },
  { value: "other", label: "Something else" },
]

const firstName = (a: Answers) => (a.name ?? "").trim().split(/\s+/)[0] ?? ""

const STEPS: Step[] = [
  {
    id: "name",
    kind: "text",
    question: () => "Hi, I'm Jake. What's your name?",
    placeholder: "Your name",
  },
  {
    id: "topic",
    kind: "choice",
    question: (a) => `Nice to meet you, ${firstName(a)}. What can I help with?`,
    options: TOPICS,
  },
  {
    id: "avRole",
    kind: "choice",
    question: () => "Which side of AV are you on?",
    options: [
      { value: "Manufacturer", label: "Manufacturer" },
      { value: "Integrator", label: "Integrator" },
      { value: "End user", label: "End user, like a campus or office" },
      { value: "Other", label: "Something else" },
    ],
    when: (a) => a.topic === "av",
  },
  {
    id: "quoting",
    kind: "choice",
    question: () => "How do you put quotes together today?",
    options: [
      { value: "One big spreadsheet", label: "One big spreadsheet" },
      { value: "A mix of spreadsheets and templates", label: "A mix of spreadsheets and templates" },
      { value: "Software we've outgrown", label: "Software we've outgrown" },
      { value: "Mostly by hand", label: "Mostly by hand" },
    ],
    when: (a) => a.topic === "fitout",
  },
  {
    id: "details",
    kind: "textarea",
    question: (a) =>
      a.topic === "fitout"
        ? "What's the most painful part of quoting right now?"
        : a.topic === "av"
          ? "What are you working on, or what's slowing your team down?"
          : "What's slowing you down right now?",
    hint: "A sentence or two is plenty.",
    placeholder: "Type your answer…",
  },
  {
    id: "timing",
    kind: "choice",
    question: () => "When would you like to get started?",
    options: [
      { value: "As soon as possible", label: "As soon as possible" },
      { value: "In the next 1–3 months", label: "In the next 1–3 months" },
      { value: "Just exploring for now", label: "Just exploring for now" },
    ],
  },
  {
    id: "contact",
    kind: "contact",
    question: (a) => `Last one, ${firstName(a)}. Where should I send my reply?`,
    hint: "I'll get back to you within one business day.",
  },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const usesFallback = !contactForm.accessKey || contactForm.accessKey.startsWith("[")
const KEYS = ["1", "2", "3", "4", "5", "6"]

function summarise(a: Answers, activeIds: Set<string>) {
  const topic = TOPICS.find((t) => t.value === a.topic)?.label ?? a.topic
  return [
    ["Name", a.name],
    ["Email", a.email],
    ["Company", a.company],
    ["Looking for", topic],
    ["AV role", activeIds.has("avRole") ? a.avRole : ""],
    ["Quoting today", activeIds.has("quoting") ? a.quoting : ""],
    ["Details", a.details],
    ["Timing", a.timing],
  ].filter(([, v]) => v && v.trim()) as [string, string][]
}

export function ConversationalForm({ topic }: { topic?: Topic }) {
  const [answers, setAnswers] = useState<Answers>(() => (topic ? { topic } : {}) as Answers)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [error, setError] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle")
  const [botcheck, setBotcheck] = useState(false)
  const fieldRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const firstStep = useRef(true)
  const advancing = useRef(false)

  const steps = useMemo(
    () => STEPS.filter((s) => !(topic && s.id === "topic") && (!s.when || s.when(answers))),
    [answers, topic],
  )
  const step = steps[Math.min(index, steps.length - 1)]
  // Until the topic is known, count the possible follow-up question too, so
  // the total only ever goes down ("of 6" -> "of 5"), never up.
  const total = steps.length + (answers.topic ? 0 : 1)
  const progress = status === "sent" ? 1 : index / total

  // Move focus to the new question (not on first render, so the page
  // doesn't jump to the contact section on load).
  useEffect(() => {
    if (firstStep.current) {
      firstStep.current = false
      return
    }
    const t = setTimeout(() => {
      if (fieldRef.current) fieldRef.current.focus({ preventScroll: true })
      else headingRef.current?.focus({ preventScroll: true })
    }, 260)
    return () => clearTimeout(t)
  }, [index, status])

  const set = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
    setError("")
  }

  const validate = (a: Answers): string => {
    if (step.kind === "contact") {
      if (!EMAIL_RE.test((a.email ?? "").trim())) return "Please enter a valid email address."
      return ""
    }
    if (!step.optional && !(a[step.id] ?? "").trim()) {
      return step.kind === "choice" ? "Pick one to continue." : "Please add a quick answer to continue."
    }
    return ""
  }

  const next = (a: Answers = answers) => {
    const problem = validate(a)
    if (problem) {
      setError(problem)
      return
    }
    if (index >= steps.length - 1) {
      void submit(a)
      return
    }
    setDirection(1)
    setIndex((i) => i + 1)
  }

  const back = () => {
    if (index === 0) return
    setError("")
    setDirection(-1)
    setIndex((i) => i - 1)
  }

  const choose = (value: string) => {
    if (advancing.current) return
    advancing.current = true
    const updated = { ...answers, [step.id]: value }
    setAnswers(updated)
    setError("")
    // Brief pause so the selection registers visually before moving on.
    setTimeout(() => {
      advancing.current = false
      next(updated)
    }, 220)
  }

  async function submit(a: Answers) {
    if (botcheck) return
    const rows = summarise(a, new Set(steps.map((s) => s.id)))

    if (usesFallback) {
      const body = rows.map(([k, v]) => `${k}: ${v}`).join("\n")
      window.location.assign(
        `mailto:${siteConfig.email}?subject=${encodeURIComponent(
          contactForm.subject,
        )}&body=${encodeURIComponent(body)}`,
      )
      setStatus("sent")
      return
    }

    setStatus("sending")
    try {
      const res = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          subject: contactForm.subject,
          from_name: a.name,
          replyto: a.email,
          botcheck: false,
          ...Object.fromEntries(rows),
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus("sent")
    } catch {
      setStatus("failed")
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (status === "sending") return
    next()
  }

  const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    const target = e.target as HTMLElement
    const typing = target.tagName === "INPUT" || target.tagName === "TEXTAREA"
    // Number keys pick an option on choice questions.
    if (step.kind === "choice" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const i = KEYS.indexOf(e.key)
      if (i >= 0 && step.options && i < step.options.length) {
        e.preventDefault()
        choose(step.options[i].value)
      }
    }
    // Enter continues from a textarea; Shift+Enter adds a new line.
    if (target.tagName === "TEXTAREA" && e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      e.currentTarget.requestSubmit()
    }
  }

  const name = firstName(answers)
  // On niche pages (topic preset) the follow-up comes straight after the name,
  // so it carries the greeting instead.
  const questionText =
    topic && index === 1 ? `Nice to meet you, ${name}. ${step.question(answers)}` : step.question(answers)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03]">
      {/* Progress */}
      <div className="h-0.5 w-full bg-foreground/[0.06]" aria-hidden="true">
        <motion.div
          className="h-full origin-left bg-brand"
          initial={false}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="flex min-h-[26rem] flex-col p-6 sm:p-8">
        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="my-auto"
            role="status"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-brand/15 text-brand">
              <Check className="size-5" />
            </span>
            <h3
              ref={headingRef}
              tabIndex={-1}
              className="font-heading mt-6 text-3xl font-semibold tracking-tight outline-none"
            >
              {usesFallback ? `Almost there, ${name}.` : `Thanks, ${name}. Message received.`}
            </h3>
            <p className="mt-3 max-w-md text-foreground/60">
              {usesFallback
                ? "Your email app should have opened with your answers filled in. Just hit send and I'll reply within one business day."
                : "I'll read it properly and get back to you within one business day."}
            </p>
            <p className="mt-6 text-sm text-foreground/50">
              Can&apos;t wait?{" "}
              <a href={bookingLink.project} className="text-foreground underline underline-offset-4 hover:text-brand">
                Book a call
              </a>{" "}
              or email{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-foreground underline underline-offset-4 hover:text-brand">
                {siteConfig.email}
              </a>
              .
            </p>
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} onKeyDown={onKeyDown} noValidate className="flex flex-1 flex-col">
            {/* Honeypot for bots; hidden from people and screen readers */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              checked={botcheck}
              onChange={(e) => setBotcheck(e.target.checked)}
            />

            <div className="flex items-center justify-between text-xs text-foreground/55">
              <span aria-live="polite">
                Question {index + 1} of {total}
              </span>
              {index > 0 && (
                <button
                  type="button"
                  onClick={back}
                  className="inline-flex items-center gap-1 rounded-full px-2 py-1 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <ArrowLeft className="size-3.5" />
                  Back
                </button>
              )}
            </div>

            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.fieldset
                key={step.id}
                custom={direction}
                initial={{ opacity: 0, y: direction * 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -10 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 flex flex-1 flex-col"
              >
                <legend className="contents">
                  <h3
                    ref={step.kind === "choice" ? headingRef : undefined}
                    tabIndex={-1}
                    className="font-heading text-2xl font-semibold tracking-tight text-balance outline-none sm:text-3xl"
                  >
                    {questionText}
                  </h3>
                </legend>
                {step.hint && <p className="mt-2 text-sm text-foreground/50">{step.hint}</p>}

                <div className="mt-7">
                  {step.kind === "text" && (
                    <input
                      ref={fieldRef}
                      id={`cf-${step.id}`}
                      aria-label={step.placeholder}
                      aria-invalid={!!error}
                      autoComplete="name"
                      value={answers[step.id] ?? ""}
                      onChange={(e) => set(step.id, e.target.value)}
                      placeholder={step.placeholder}
                      className="w-full border-b border-foreground/20 bg-transparent pb-3 text-xl outline-none transition-colors placeholder:text-foreground/50 focus:border-brand"
                    />
                  )}

                  {step.kind === "textarea" && (
                    <textarea
                      ref={fieldRef}
                      id={`cf-${step.id}`}
                      aria-label={step.question(answers)}
                      aria-invalid={!!error}
                      rows={3}
                      value={answers[step.id] ?? ""}
                      onChange={(e) => set(step.id, e.target.value)}
                      placeholder={step.placeholder}
                      className="w-full resize-none border-b border-foreground/20 bg-transparent pb-3 text-lg outline-none transition-colors placeholder:text-foreground/50 focus:border-brand"
                    />
                  )}

                  {step.kind === "contact" && (
                    <div className="flex flex-col gap-6">
                      <input
                        ref={fieldRef}
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        aria-label="Email address"
                        aria-invalid={!!error}
                        value={answers.email ?? ""}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="you@company.com"
                        className="w-full border-b border-foreground/20 bg-transparent pb-3 text-xl outline-none transition-colors placeholder:text-foreground/50 focus:border-brand"
                      />
                      <input
                        autoComplete="organization"
                        aria-label="Company (optional)"
                        value={answers.company ?? ""}
                        onChange={(e) => set("company", e.target.value)}
                        placeholder="Company (optional)"
                        className="w-full border-b border-foreground/20 bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-foreground/50 focus:border-brand"
                      />
                    </div>
                  )}

                  {step.kind === "choice" && step.options && (
                    <div className="flex flex-col gap-2.5" role="radiogroup" aria-label={step.question(answers)}>
                      {step.options.map((opt, i) => {
                        const selected = answers[step.id] === opt.value
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => choose(opt.value)}
                            className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-[border-color,background-color,transform] duration-200 hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none ${
                              selected
                                ? "border-brand/60 bg-brand/10"
                                : "border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.04]"
                            }`}
                          >
                            <kbd
                              className={`hidden size-6 shrink-0 items-center justify-center rounded-md border font-sans text-xs sm:flex ${
                                selected ? "border-brand/60 text-brand" : "border-foreground/15 text-foreground/55"
                              }`}
                            >
                              {i + 1}
                            </kbd>
                            <span className="flex-1">{opt.label}</span>
                            {selected && <Check className="size-4 text-brand" />}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </motion.fieldset>
            </AnimatePresence>

            <p role="alert" className="mt-4 min-h-5 text-sm text-destructive">
              {error ||
                (status === "failed"
                  ? `That didn't send. Please try again, or email ${siteConfig.email}.`
                  : "")}
            </p>

            {step.kind !== "choice" && (
              <div className="mt-2 flex items-center justify-end gap-4">
                <span className="hidden items-center gap-1 text-xs text-foreground/55 sm:inline-flex">
                  or press Enter <CornerDownLeft className="size-3" />
                </span>
                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  disabled={status === "sending"}
                  className="h-11 px-5 text-sm"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending
                    </>
                  ) : index === steps.length - 1 ? (
                    <>
                      Send
                      <ArrowRight className="size-4" />
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
