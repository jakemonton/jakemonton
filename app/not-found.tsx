import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { bookingLink } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Page not found | Jake Monton",
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 45% at 50% 40%, color-mix(in oklch, var(--brand) 12%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-6 pt-32 pb-24 text-center">
        <p className="text-sm text-foreground/55">404</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          This page <span className="font-display-serif font-normal italic tracking-normal">doesn&apos;t exist.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-foreground/60">
          The link may be old or mistyped. Everything else is just a click away.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className={buttonVariants({ variant: "accent", size: "lg", className: "h-12 px-6 text-base" })}>
            Back to home
            <ArrowRight className="size-4" />
          </Link>
          <a href={bookingLink.project} className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-6 text-base" })}>
            Book a call
          </a>
        </div>
        <p className="mt-10 text-sm text-foreground/55">
          Looking for something specific?{" "}
          <Link href="/av" className="text-foreground underline underline-offset-4 hover:text-brand">
            AV software
          </Link>{" "}
          or{" "}
          <Link href="/#work" className="text-foreground underline underline-offset-4 hover:text-brand">
            selected work
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
