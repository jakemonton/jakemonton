/**
 * Homepage hero backdrop: two soft, out-of-focus glows (cool on the left,
 * warm amber on the right) over black. Static; no grid, no motion.
 */
export function HeroGlow() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 38% 48% at 22% 72%, oklch(0.42 0.09 255 / 0.55) 0%, transparent 70%)",
            "radial-gradient(ellipse 34% 44% at 82% 42%, color-mix(in oklch, var(--brand) 22%, transparent) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(1 0 0 / 0.04) 0%, transparent 70%)",
          ].join(", "),
          filter: "blur(20px)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
