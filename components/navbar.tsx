"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Press } from "@/components/motion/press"
import { navLinks, siteConfig } from "@/lib/site-config"

const linkListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}

const linkItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-foreground/10 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-heading text-sm font-semibold tracking-tight uppercase"
        >
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Press>
            <Button
              size="sm"
              nativeButton={false}
              render={<a href="#contact">Let&apos;s talk</a>}
            />
          </Press>
        </div>

        <div className="flex items-center md:hidden">
          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            whileTap={{ scale: 0.88 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex size-9 items-center justify-center text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-foreground/10 bg-background md:hidden"
          >
            <motion.div
              variants={linkListVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 px-6 py-4"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  variants={linkItemVariants}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                variants={linkItemVariants}
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-foreground px-2 py-3 text-center text-base font-medium text-background"
              >
                Let&apos;s talk
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
