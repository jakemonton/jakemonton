import Image from "next/image"

interface HeroBackgroundProps {
  src: string
  alt: string
  /** "strong" keeps the left side darker for busy photos behind the text. */
  overlay?: "default" | "strong"
}

const OVERLAYS = {
  default:
    "linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.35) 100%)",
  strong:
    "linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.4) 100%)",
}

export function HeroBackground({ src, alt, overlay = "default" }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: OVERLAYS[overlay] }}
      />
      {/* On phones the text spans the full width, so dim the whole photo evenly. */}
      <div aria-hidden className="absolute inset-0 bg-black/55 md:hidden" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 20% 15%, color-mix(in oklch, var(--brand) 14%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
