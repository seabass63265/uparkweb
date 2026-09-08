/** Opening statement over a faint parking-structure line drawing. */
export default function CompanyHero() {
  return (
    <header
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-20 overflow-hidden gs-reveal"
      id="hero"
    >
      <div className="hero-canvas">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g transform="translate(100, 200) rotate(-10)">
            <rect x="0" y="0" width="120" height="200" rx="4" className="hero-line" />
            <rect x="140" y="0" width="120" height="200" rx="4" className="hero-line" />
            <rect x="280" y="0" width="120" height="200" rx="4" className="hero-line" />
            <path
              d="M 60 100 L 60 400"
              className="hero-line"
              strokeDasharray="none"
              stroke="rgba(0,68,255,0.1)"
              strokeWidth="2"
            />
            <circle cx="60" cy="400" r="4" className="hero-node" />
          </g>
          <g transform="translate(1000, 100) rotate(15)">
            <rect x="0" y="0" width="120" height="200" rx="4" className="hero-line" />
            <rect x="140" y="0" width="120" height="200" rx="4" className="hero-line" />
            <path
              d="M 200 100 L 200 -100 L 500 -100"
              className="hero-line"
              strokeDasharray="none"
              stroke="rgba(0,68,255,0.1)"
              strokeWidth="2"
            />
            <circle cx="500" cy="-100" r="4" className="hero-node" />
          </g>
        </svg>
      </div>

      <div className="content-wrap text-center max-w-5xl px-4 flex flex-col items-center">
        <span className="t-mono mb-8 block text-gray-400">COMPANY</span>
        <h1 className="t-monumental mb-8 text-balance">
          We&rsquo;re rethinking the way campuses park.
        </h1>
        <p className="t-body-l max-w-2xl mx-auto text-balance">
          UPark was created around a simple idea: finding parking shouldn&rsquo;t
          be one of the hardest parts of getting to campus.
        </p>
      </div>
    </header>
  )
}
