import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#000000",
          padding: "90px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ width: 56, height: 6, backgroundColor: "#f0a93a", borderRadius: 4 }} />
        <div style={{ marginTop: 44, fontSize: 60, fontWeight: 700, letterSpacing: -1 }}>
          Quoting Systems for Fit-Out Companies
        </div>
        <div style={{ marginTop: 16, fontSize: 32, color: "#b3b3b3" }}>
          Jake Monton · Software Engineer &amp; Product Lead
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#808080", maxWidth: 900 }}>
          Replace your quoting spreadsheet: templates, margins, revisions and PDF
          quotes.
        </div>
      </div>
    ),
    { ...size }
  )
}
