import { Fragment } from 'react'

const OLD_JOURNEY = ['Drive', 'Search', 'Circle', 'Wait', 'Park', 'Walk']

/** "Finding parking shouldn't be the hardest part" — old journey struck through. */
export default function ProblemSection() {
  return (
    <section className="problem-sec">
      <h2 className="t-h1 problem-statement">
        Finding parking shouldn&apos;t be the hardest part of getting to class.
      </h2>

      <div className="journey-wrapper">
        <div className="journey-container old-journey">
          {OLD_JOURNEY.map((step, i) => (
            <Fragment key={step}>
              <span className="journey-step">{step}</span>
              {i < OLD_JOURNEY.length - 1 && (
                <span className="journey-arrow">→</span>
              )}
            </Fragment>
          ))}
          <div className="strike-line" />
        </div>

        <div className="journey-container new-journey">
          <span className="journey-step" style={{ color: 'var(--brand)' }}>
            Open UPark
          </span>
          <span className="journey-arrow">→</span>
          <span className="journey-step">Find</span>
          <span className="journey-arrow">→</span>
          <span className="journey-step">Park</span>
        </div>
      </div>
    </section>
  )
}
