/** PARK — pull in and you're done. Car slides into the bay, badge confirms. */
export default function ParkSection() {
  return (
    <section id="park" className="pt-32 pb-48 bg-white w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
        <div className="gs-reveal mb-16">
          <h2 className="t-hero mb-4 text-black text-balance">
            Pull in.
            <br />
            You&rsquo;re done.
          </h2>
        </div>

        <div className="relative w-full max-w-sm h-[400px] mx-auto overflow-hidden rounded-[32px] bg-gray-50 border border-gray-200 shadow-inner gs-reveal pt-10">
          <div
            className="absolute inset-x-8 top-16 bottom-8 border-4 border-dashed border-gray-300 rounded-2xl transition-colors duration-300"
            id="park-spot"
          />

          <div
            id="park-car"
            className="absolute w-[180px] h-[300px] bg-black rounded-[32px] shadow-2xl z-10 left-1/2 -bottom-[350px] border-[4px] border-gray-800 flex flex-col justify-between p-4"
          >
            <div className="w-full h-16 bg-white/10 rounded-xl" />
            <div className="w-full h-24 bg-red-500/10 rounded-xl" />
          </div>

          <div
            id="park-check"
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0"
          >
            <div className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-lg md:text-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center gap-3 border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              PARKED
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
