import PhoneMockup from './PhoneMockup'

const PINS = [
  { label: 'P1', top: '30%', left: '40%', animationDelay: '0.1s' },
  { label: 'P2', top: '50%', left: '70%', animationDelay: '0.3s' },
  { label: 'P3', top: '70%', left: '30%', animationDelay: '0.5s' },
]

/** "Meet UPark." — the hero phone rises out of the fold. */
export default function RevealSection() {
  return (
    <section className="reveal-sec">
      <span
        className="t-mono"
        style={{ marginBottom: '1rem', display: 'block' }}
      >
      </span>
      <h2 className="t-h1" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}>
        Meet UPark.
      </h2>
      <p className="t-body-l" style={{ marginTop: '1rem' }}>
        One place to find, coordinate, and access parking around your campus.
      </p>

      <PhoneMockup id="mainPhone">
        <div className="map-ui">
          <div className="map-grid" />
          {PINS.map((pin) => (
            <div
              key={pin.label}
              className="map-pin"
              style={{
                top: pin.top,
                left: pin.left,
                animationDelay: pin.animationDelay,
              }}
            >
              {pin.label}
            </div>
          ))}
        </div>
        <div className="ui-panel">
          <div className="ui-skeleton-line" />
          <div className="ui-skeleton-line short" />
          <div className="ui-btn" />
        </div>
      </PhoneMockup>
    </section>
  )
}
