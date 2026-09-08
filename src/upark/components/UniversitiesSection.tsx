const NODE_LABELS = [
  { text: 'Parking Demand', className: 'lbl-1', top: '20%', left: '30%' },
  { text: 'Traffic Patterns', className: 'lbl-2', top: '70%', left: '20%' },
  { text: 'Event Parking', className: 'lbl-3', top: '40%', left: '70%' },
  { text: 'EV Charging', className: 'lbl-4', top: '80%', left: '60%' },
]

/** "Smarter parking. Smarter campuses." over a faint campus-grid backdrop. */
export default function UniversitiesSection() {
  return (
    <section className="uni-sec">
      <div className="uni-bg">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="campusGrid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="#D0D0D2"
                strokeWidth="1"
              />
              <rect x="20" y="20" width="40" height="30" fill="#E0E0E2" />
              <rect x="70" y="60" width="20" height="30" fill="#D8D8DA" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#campusGrid)" />
        </svg>
      </div>

      <div className="uni-nodes">
        {NODE_LABELS.map((node) => (
          <div
            key={node.text}
            className={`node-label ${node.className}`}
            style={{ top: node.top, left: node.left }}
          >
            {node.text}
          </div>
        ))}
      </div>

      <div className="uni-content">
        <h2 className="t-h1">
          Smarter parking.
          <br />
          Smarter campuses.
        </h2>
        <p
          className="t-body-l"
          style={{ margin: '1.5rem auto 2.5rem', textAlign: 'center' }}
        >
          UPark is being built to help universities better understand parking
          demand, improve transportation efficiency, and make better use of
          existing parking resources.
        </p>
        <a href="#" className="btn btn-outline" style={{ borderWidth: 2 }}>
          UPark for Universities →
        </a>
      </div>
    </section>
  )
}
