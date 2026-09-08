/** Investor hero over a skewed campus-grid backdrop with two drifting "car" dots. */
export default function InvestorsHero() {
  return (
    <header
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-20 overflow-hidden"
      id="hero"
    >
      <div className="hero-bg">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g
            transform="translate(720, 250) scale(1.5) rotate(60) skewX(-30)"
            stroke="#E5E5E7"
            strokeWidth="1"
            fill="none"
          >
            <path d="M-300,-300 L300,-300 M-300,-200 L300,-200 M-300,-100 L300,-100 M-300,0 L300,0 M-300,100 L300,100 M-300,200 L300,200 M-300,300 L300,300" />
            <path d="M-300,-300 L-300,300 M-200,-300 L-200,300 M-100,-300 L-100,300 M0,-300 L0,300 M100,-300 L100,300 M200,-300 L200,300 M300,-300 L300,300" />

            <rect
              x="-150"
              y="-150"
              width="100"
              height="100"
              fill="#fff"
              stroke="#D8D8DA"
              strokeWidth="2"
              rx="4"
            />
            <rect
              x="50"
              y="-50"
              width="100"
              height="200"
              fill="#fff"
              stroke="#D8D8DA"
              strokeWidth="2"
              rx="4"
            />

            <g strokeDasharray="2 4" stroke="#D8D8DA" strokeWidth="2">
              <line x1="-120" y1="50" x2="-120" y2="150" />
              <line x1="-90" y1="50" x2="-90" y2="150" />
              <line x1="-60" y1="50" x2="-60" y2="150" />
            </g>

            <circle cx="-135" cy="180" r="4" className="car-dot" id="car1" />
            <circle cx="20" cy="-120" r="4" className="car-dot" id="car2" fill="#FF3366" />
          </g>
        </svg>
      </div>

      <div
        className="content-wrap text-center max-w-5xl px-4 flex flex-col items-center gs-reveal"
        style={{ marginTop: '5vh' }}
      >
        <span className="t-mono mb-8 block text-gray-400">INVESTORS</span>
        <h1 className="t-hero mb-8 text-balance">
          Parking is where we start.
          <br />
          <span className="text-gray-400">
            Campus mobility is where we&rsquo;re going.
          </span>
        </h1>
        <p className="t-body-l max-w-3xl mx-auto text-balance mb-12">
          UPark is building a parking marketplace designed for university
          communities — connecting drivers with available parking while creating
          the foundation for a smarter campus mobility network.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#invest" className="btn py-4 px-8 text-lg">
            Request Investor Deck →
          </a>
          <a
            href="#founders"
            className="btn btn-outline py-4 px-8 text-lg bg-white bg-opacity-50 backdrop-blur-sm"
          >
            Meet the Founders →
          </a>
        </div>
      </div>
    </header>
  )
}
