/** Product hero — headline, dual CTA, and the app phone mockup with floating chips. */
export default function ProductHero() {
  return (
    <header className="relative pt-40 pb-20 overflow-hidden flex flex-col items-center min-h-[90vh] w-full bg-[var(--bg)]">
      <div className="text-center z-10 relative px-4 w-full">
        <span className="t-mono text-brand mb-6 block tracking-[0.1em]">UPARK</span>
        <h1 className="t-hero mb-6 text-balance text-black">
          Your spot.
          <br />
          Before you get there.
        </h1>
        <p className="t-body-l max-w-2xl mx-auto mb-10 text-balance text-gray-500">
          Find available parking, reserve your spot, and know exactly where
          you&rsquo;re going before you arrive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#join" className="btn py-4 px-8 text-lg w-full sm:w-auto">
            Join the Beta →
          </a>
          <a
            href="#find"
            className="btn btn-outline py-4 px-8 text-lg bg-white/50 backdrop-blur-sm w-full sm:w-auto"
          >
            See How It Works ↓
          </a>
        </div>
      </div>

      <div className="mt-20 relative w-full flex justify-center pb-10">
        <div
          className="hidden md:flex absolute top-1/4 left-[15%] w-12 h-16 bg-white rounded-xl shadow-xl border border-gray-100 rotate-12 items-center justify-center gs-float z-20"
          style={{ '--delay': '0s' } as React.CSSProperties}
        >
          <div className="w-6 h-8 bg-brand rounded opacity-30" />
        </div>
        <div
          className="hidden md:flex absolute top-1/3 right-[15%] w-12 h-16 bg-white rounded-xl shadow-xl border border-gray-100 -rotate-12 items-center justify-center gs-float z-20"
          style={{ '--delay': '-1.5s' } as React.CSSProperties}
        >
          <div className="w-6 h-8 bg-black rounded opacity-30" />
        </div>
        <div
          className="hidden md:block absolute bottom-20 left-[25%] w-24 h-12 bg-white rounded-xl shadow-lg border border-gray-100 -rotate-6 gs-float z-20"
          style={{ '--delay': '-0.5s' } as React.CSSProperties}
        >
          <div className="w-full h-full border-4 border-dashed border-brand/20 rounded-xl" />
        </div>

        <div className="phone-mockup transform md:scale-110 z-10 shadow-[0_40px_80px_rgba(0,0,0,0.1)] gs-reveal">
          <div className="phone-notch" />

          <div className="relative w-full h-full bg-[#f0f2f5] overflow-hidden">
            <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-white rounded-3xl shadow-sm" />
            <div className="absolute top-[10%] right-[-10%] w-[50%] h-[30%] bg-white rounded-3xl shadow-sm" />
            <div className="absolute bottom-[-5%] left-[-10%] w-[120%] h-[50%] bg-white rounded-3xl shadow-sm" />

            <div className="absolute top-12 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <div className="font-medium text-gray-500 text-sm">
                Where are you going?
              </div>
            </div>

            <div className="absolute top-[35%] left-[30%] w-12 h-8 bg-brand rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-brand/30 border-2 border-white">
              5 CR
            </div>
            <div className="absolute top-[25%] right-[20%] w-12 h-8 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold shadow-md border border-gray-200">
              8 CR
            </div>
            <div className="absolute bottom-[40%] left-[50%] w-12 h-8 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold shadow-md border border-gray-200">
              4 CR
            </div>

            <div className="absolute bottom-[30%] left-[25%] w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-md border-[3px] border-white z-10">
              <div className="w-2 h-2 bg-white rounded-full opacity-60" />
              <div className="absolute inset-0 bg-black rounded-full animate-ping opacity-20" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex justify-between items-center px-8">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-black"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-300"
                aria-hidden="true"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-300"
                aria-hidden="true"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
