/** RESERVE — confirm the time and the spot flips to reserved. */
export default function ReserveSection() {
  return (
    <section
      id="reserve"
      className="pt-32 pb-32 bg-white w-full border-t border-gray-100"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
        <div className="gs-reveal mb-20">
          <span className="t-mono text-brand mb-4 block">RESERVE</span>
          <h2 className="t-h1 mb-6 text-black">Your spot is waiting.</h2>
          <p className="t-body-l text-gray-500 max-w-xl mx-auto">
            Confirm your time and lock in the space. The spot transforms to
            reserved instantly.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 gs-reveal max-w-5xl mx-auto">
          <div className="w-[280px] bg-gray-50 rounded-[32px] p-4 shadow-xl border border-gray-200 shrink-0">
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <span className="font-bold">Reservation</span>
                <span className="text-sm font-bold text-gray-400">2 Hours</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-sm">Credits Required</span>
                <span className="font-bold">4 CR</span>
              </div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-500 text-sm">Your Balance</span>
                <span className="font-bold text-brand">28 CR</span>
              </div>

              <div className="mt-auto res-btn w-full py-4 bg-brand rounded-xl shadow-lg relative overflow-hidden flex justify-center items-center cursor-default">
                <span className="text-white font-bold text-sm absolute res-btn-txt">
                  Reserve with Credits
                </span>
                <div className="text-white font-bold text-sm absolute opacity-0 res-btn-txt-2 flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Reserved
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0 mt-8 md:mt-0">
            <div className="flex flex-col items-center">
              <div className="w-32 h-40 border-4 border-dashed border-gray-200 rounded-xl flex items-center justify-center relative bg-gray-50 mb-4 res-spot transition-all duration-300">
                <div className="text-brand font-black text-xl z-10 res-spot-txt transition-colors duration-300">
                  AVAILABLE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
