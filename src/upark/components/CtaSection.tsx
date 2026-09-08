import { Link } from 'react-router-dom'

/** Closing call to action. */
export default function CtaSection() {
  return (
    <section className="cta-sec">
      <div className="cta-huge">
        <span className="less">Spend less time searching.</span>
        <br />
        Spend more time moving.
      </div>
      <div
        className="t-monumental"
        style={{ fontSize: '2rem', margin: '2rem 0', letterSpacing: '-0.05em' }}
      >
        UPARK
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        <Link
          to="/join"
          className="btn btn-brand"
          style={{ padding: '1rem 2rem', fontSize: '1rem' }}
        >
          Join the Beta
        </Link>
        <a
          href="#"
          className="btn btn-outline"
          style={{ padding: '1rem 2rem', fontSize: '1rem' }}
        >
          Partner With UPark
        </a>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
        }}
      >
        <a
          href="#"
          style={{ color: 'var(--gray-med)', textDecoration: 'none' }}
        >
          UNIVERSITY INQUIRIES ↗
        </a>
        <a
          href="#"
          style={{ color: 'var(--gray-med)', textDecoration: 'none' }}
        >
          INVESTOR RELATIONS ↗
        </a>
      </div>
    </section>
  )
}
