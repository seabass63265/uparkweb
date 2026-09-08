/** NAVIGATE — a drawn route guides you straight to the reserved spot. */
export default function NavigateSection() {
  return (
    <section
      id="navigate"
      className="pt-32 pb-32 bg-[var(--bg)] w-full overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
        <div className="gs-reveal mb-16">
          <span className="t-mono text-brand mb-4 block">NAVIGATE</span>
          <h2 className="t-h1 mb-6 text-black">Go straight there.</h2>
          <p className="t-body-l text-gray-500 max-w-xl mx-auto">
            Once you reserve, UPark helps you get to the right place without the
            usual searching.
          </p>
        </div>

        <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] mx-auto bg-white rounded-[40px] shadow-2xl border border-gray-200 overflow-hidden gs-reveal">
          <svg
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full z-10"
            aria-hidden="true"
          >
            <g
              stroke="#f0f2f5"
              strokeWidth="40"
              fill="none"
              strokeLinecap="square"
            >
              <line x1="200" y1="0" x2="200" y2="500" />
              <line x1="0" y1="350" x2="1000" y2="350" />
              <line x1="800" y1="0" x2="800" y2="500" />
            </g>

            <path
              d="M 200 100 L 200 350 L 750 350"
              fill="none"
              stroke="var(--brand)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              id="nav-route"
            />

            <rect
              x="750"
              y="310"
              width="80"
              height="80"
              fill="rgba(0,68,255,0.1)"
              stroke="var(--brand)"
              strokeWidth="4"
              rx="8"
              strokeDasharray="8 8"
            />

            <circle
              cx="200"
              cy="100"
              r="12"
              fill="#111111"
              stroke="white"
              strokeWidth="4"
            />
          </svg>

          <div className="absolute inset-0 pointer-events-none z-20">
            <div
              id="nav-car"
              className="absolute w-6 h-10 md:w-8 md:h-12 bg-black rounded-md shadow-xl flex items-center justify-center border border-gray-700 -ml-3 -mt-5 md:-ml-4 md:-mt-6"
              style={{ top: '20%', left: '20%', transform: 'rotate(180deg)' }}
            >
              <div className="w-[70%] h-[20%] bg-white/20 absolute top-[10%] rounded-sm" />
              <div className="w-[70%] h-[20%] bg-red-500/50 absolute bottom-[10%] rounded-sm" />
            </div>
          </div>

          <div className="absolute top-6 right-6 bg-white px-6 py-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4 z-30">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l6-2 4.553 2.276A1 1 0 0121 8.118v10.764a1 1 0 01-1.447.894L15 17l-6 3z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-bold text-xl">4 min</div>
              <div className="text-xs font-bold text-gray-400 uppercase">1.2 mi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
