import PhoneMockup from './PhoneMockup'

const STEPS = [
  {
    id: 'step1',
    num: '01 — Find',
    body: 'Discover available parking around campus.',
  },
  {
    id: 'step2',
    num: '02 — Match',
    body: 'Find the option that works for your schedule.',
  },
  {
    id: 'step3',
    num: '03 — Park',
    body: 'Navigate to your space and get to class.',
  },
]

/** Pinned three-step walkthrough with a phone that reacts to scroll progress. */
export default function HowItWorksSection() {
  return (
    <div className="hiw-sec">
      <section className="hiw-container">
        <div className="hiw-text">
          <h2 className="t-h1 hiw-heading">From searching to parked.</h2>

          <div className="hiw-steps">
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                className={`hiw-step${i === 0 ? ' active' : ''}`}
                id={step.id}
              >
                <span className="step-num">{step.num}</span>
                <h3 className="t-h2">{step.body}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="hiw-visuals">
          <div className="hiw-phone-persp">
            {/* Tilt / shadow / visible state all live in `#hiw-phone` CSS so the
                mobile layout can flatten and shrink it. */}
            <PhoneMockup id="hiw-phone">
              <div className="map-ui" id="dynamicMap">
                <div
                  className="map-grid"
                  style={{ transform: 'rotate(0) scale(1.5)' }}
                />
                <div className="hiw-radar" id="hiw-radar" />
                <div className="map-pin hiw-pin" id="dynPin">
                  AVAILABLE
                </div>
              </div>
              <div className="ui-panel">
                <div className="ui-skeleton-line" id="dynLine1" />
                <div className="ui-skeleton-line short" id="dynLine2" />
                <div className="ui-btn" id="dynBtn" />
              </div>
            </PhoneMockup>
          </div>
        </div>
      </section>
    </div>
  )
}
