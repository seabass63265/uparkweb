const STOPS = ['Pilot', 'Learn', 'Validate']

export default function LmuSection() {
  return (
    <section id="lmu" className="pt-32 pb-32">
      <div className="content-wrap max-w-5xl mx-auto text-center gs-reveal">
        <span className="t-mono mb-6 block text-gray-500">WHERE WE START</span>
        <h2 className="t-h1 mb-8">
          Start at LMU.
          <br />
          Learn from one campus.
          <br />
          Build for the next.
        </h2>
        <p className="t-body-l max-w-3xl mx-auto mb-24">
          UPark plans to begin at Loyola Marymount University in Los Angeles,
          using LMU as its intended initial launch market to test the product,
          understand real student parking behavior, build local network density,
          and learn what makes a successful university parking marketplace.
        </p>

        <div className="relative w-full max-w-4xl mx-auto h-32 md:h-48 flex items-center justify-between px-4">
          <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-gray-200 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-8 right-8 h-[2px] bg-black -translate-y-1/2 z-0 origin-left"
            id="lmu-line"
          />

          <div className="relative z-10 flex flex-col items-center gap-4 bg-bg px-2 gs-stagger-item">
            <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-bg">
              LMU
            </div>
          </div>

          {STOPS.map((label) => (
            <div
              key={label}
              className="relative z-10 flex flex-col items-center gap-4 bg-bg px-2 gs-stagger-item"
            >
              <div className="w-4 h-4 rounded-full bg-gray-300 border-4 border-bg mt-6" />
              <span className="t-mono text-[10px] text-gray-400 absolute top-20 w-24 text-center">
                {label}
              </span>
            </div>
          ))}

          <div className="relative z-10 flex flex-col items-center gap-4 bg-bg px-2 gs-stagger-item">
            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 text-black flex items-center justify-center shadow-sm border-4 border-bg relative overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
            <span className="t-mono text-[10px] font-bold text-black absolute top-20 w-32 text-center">
              Build Playbook
            </span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-8 italic">
          * LMU is an intended launch market. UPark operates independently.
        </p>
      </div>
    </section>
  )
}
