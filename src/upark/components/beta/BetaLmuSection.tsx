/** "Starting at LMU." — first beta campus. */
export default function BetaLmuSection() {
  return (
    <section
      className="py-32 bg-white w-full border-t border-gray-100 overflow-hidden"
      id="lmu"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="gs-reveal">
          <span className="t-mono text-gray-400 mb-4 block">FIRST STOP</span>
          <h2 className="t-h1 mb-6 text-black">Starting at LMU.</h2>
          <p className="t-body-l text-gray-500 mb-8 text-balance max-w-lg">
            UPark is beginning with the campus that inspired it. Our first beta
            will focus on Loyola Marymount University, where students will help us
            test the experience, identify edge cases, and improve UPark before
            expanding to more campuses.
          </p>
        </div>
        <div className="flex justify-center gs-reveal md:justify-end">
          <div className="w-full max-w-sm aspect-square rounded-[40px] shadow-inner border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
            <iframe
              title="Loyola Marymount University campus map"
              src="https://maps.google.com/maps?q=Loyola+Marymount+University,+Los+Angeles,+CA&z=15&output=embed"
              className="absolute inset-0 w-full h-full border-0 grayscale-[35%] contrast-[1.05] transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10 pointer-events-none" />

            <div className="z-10 p-8 flex justify-between items-start pointer-events-none">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--fg)"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="t-mono text-[9px] text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                BETA_01
              </span>
            </div>

            <div className="z-10 mt-auto p-8 pointer-events-none">
              <h3 className="t-monumental text-white text-6xl tracking-tighter mb-1">
                LMU
              </h3>
              <div className="t-mono text-white/80 flex items-center gap-2">
                <div className="w-1 h-1 bg-brand rounded-full" />
                LOS ANGELES, CA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
