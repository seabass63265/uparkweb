import type { CSSProperties, ReactNode } from 'react'

type PhoneMockupProps = {
  id?: string
  style?: CSSProperties
  children: ReactNode
}

/** Reusable device shell — the black frame + inset screen used across the page. */
export default function PhoneMockup({ id, style, children }: PhoneMockupProps) {
  return (
    <div className="phone-mockup" id={id} style={style}>
      <div className="phone-screen">{children}</div>
    </div>
  )
}
