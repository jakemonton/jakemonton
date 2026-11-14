import type { ReactNode } from "react"

/**
 * Architecture diagram for the AES70 case study, drawn in HTML so it stays
 * sharp, themed and readable on phones. Horizontal on desktop, stacked on
 * mobile. Generic labels only: no client product names.
 */

function Node({
  title,
  detail,
  highlight = false,
  children,
}: {
  title: string
  detail: string
  highlight?: boolean
  children?: ReactNode
}) {
  return (
    <div
      className={`flex-1 rounded-xl border p-5 ${
        highlight
          ? "border-brand/50 bg-brand/[0.07]"
          : "border-foreground/15 bg-background"
      }`}
    >
      <p className={`font-heading text-base font-semibold ${highlight ? "text-brand" : ""}`}>{title}</p>
      <p className="mt-1 text-sm text-foreground/60">{detail}</p>
      {children}
    </div>
  )
}

/** A two-way connector with a label: horizontal on desktop, vertical on phones. */
function Connector({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 items-center justify-center gap-3 py-2 lg:w-28 lg:flex-col lg:gap-2 lg:py-0">
      {/* Vertical arrow on phones, horizontal on desktop */}
      <svg
        aria-hidden
        viewBox="0 0 16 40"
        className="h-10 w-4 text-foreground/40 lg:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 4v32 M3 9l5-5 5 5 M3 31l5 5 5-5" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 64 16"
        className="hidden h-4 w-16 text-foreground/40 lg:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8h52 M12 3 6 8l6 5 M52 3l6 5-6 5" />
      </svg>
      <span className="text-xs text-foreground/55 lg:text-center">{label}</span>
    </div>
  )
}

function Zone({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col rounded-2xl border border-dashed border-foreground/20 p-4 pt-9">
      <span className="absolute top-3 left-4 text-xs tracking-wide text-foreground/55 uppercase">
        {label}
      </span>
      <div className="flex flex-1 flex-col lg:flex-row lg:items-stretch">{children}</div>
    </div>
  )
}

export function Aes70Diagram({ caption }: { caption: string }) {
  return (
    <figure>
      <div
        role="img"
        aria-label="Architecture: AES70 devices on the venue network are discovered by a local gateway (set up with a configurator app), which registers them with a cloud platform. The remote team uses the cloud platform to control and monitor the devices, with changes sent back through the gateway."
        className="flex flex-col lg:flex-row lg:items-stretch"
      >
        <Zone label="Venue network">
          <Node title="AES70 devices" detail="Pro-audio hardware on the local network">
            <ul className="mt-3 flex flex-wrap gap-1.5 text-xs text-foreground/60">
              {["DSP", "Amplifier", "Mic array"].map((d) => (
                <li key={d} className="rounded-md bg-foreground/[0.06] px-2 py-0.5">
                  {d}
                </li>
              ))}
            </ul>
          </Node>
          <Connector label="Discovered over AES70" />
          <Node title="Local gateway" detail="Runs on the same network, set up with its configurator app" highlight>
            <ul className="mt-3 flex flex-wrap gap-1.5 text-xs text-foreground/60">
              {["Networking", "Start / stop", "Cloud connection"].map((d) => (
                <li key={d} className="rounded-md bg-foreground/[0.06] px-2 py-0.5">
                  {d}
                </li>
              ))}
            </ul>
          </Node>
        </Zone>

        <Connector label="Registered and kept in sync" />

        <Zone label="Cloud">
          <Node title="Cloud platform" detail="Device registry, remote control and monitoring" />
          <Connector label="Control and monitoring" />
          <Node title="Remote team" detail="Adjust gains and check status from anywhere" />
        </Zone>
      </div>
      <figcaption className="mt-5 text-sm text-foreground/55">{caption}</figcaption>
    </figure>
  )
}
