import { useMemo } from 'react'

const NUM_NODES = 42
const CENTER = { x: 500, y: 500 }

type Circle = { cx: number; cy: number; r: number }
type Line = { x1: number; y1: number; x2: number; y2: number }

/** Builds the same random node graph the source generated imperatively. */
function buildNetwork() {
  const nodes: { x: number; y: number }[] = []
  const circles: Circle[] = []
  const lines: Line[] = []

  for (let i = 0; i < NUM_NODES; i++) {
    const cx = 30 + Math.random() * 940
    const cy = 30 + Math.random() * 940
    nodes.push({ x: cx, y: cy })
    circles.push({ cx, cy, r: Math.random() * 3 + 2 })

    if (i > 0) {
      const target = nodes[Math.floor(Math.random() * i)]
      if (Math.random() > 0.7) {
        lines.push({ x1: cx, y1: cy, x2: CENTER.x, y2: CENTER.y })
      }
      lines.push({ x1: cx, y1: cy, x2: target.x, y2: target.y })
    }
  }

  return { circles, lines }
}

/** Pinned finale: headline dissolves into an expanding mobility network. */
export default function VisionSection() {
  const { circles, lines } = useMemo(() => buildNetwork(), [])

  return (
    <div className="vision-sec">
      <div className="vision-sticky">
        <div className="vision-text-layer v-text-1">
          <h2 className="t-h1">One campus is just the beginning.</h2>
        </div>

        <svg
          className="network-canvas"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g
            id="networkLines"
            stroke="#333"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          >
            {lines.map((l, i) => (
              <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
            ))}
          </g>
          <g id="networkNodes" fill="white">
            <circle cx={CENTER.x} cy={CENTER.y} r={10} fill="var(--brand)" />
            {circles.map((c, i) => (
              <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
            ))}
          </g>
        </svg>

        <div className="vision-text-layer v-text-2">
          <h2 className="t-h1" style={{ maxWidth: 900 }}>
            Prove it here. Scale it everywhere.
          </h2>
        </div>
      </div>
    </div>
  )
}
