/** DETAILS — review a spot's specifics before committing. */
export default function DetailsSection() {
  return (
    <section
      id="details"
      className="pt-32 pb-32 bg-[var(--bg)] w-full overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="gs-reveal order-2 md:order-1 flex justify-center">
          <div className="phone-mockup shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
            <div className="phone-notch" />

            <div className="absolute inset-0 bg-[#f0f2f5] overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-[150%] h-[150%] bg-white rounded-[60px] opacity-50 shadow-inner" />
              <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-10 h-10 bg-brand rounded-full border-4 border-white shadow-xl" />

              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-lg flex items-center gap-1.5 z-10">
                <div className="w-2 h-2 bg-brand rounded-full" />
                28 CR
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20 details-sheet flex flex-col h-[60%]">
              <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Driveway Space</h3>
                  <p className="text-gray-500 text-sm">0.2 miles away • 4 min walk</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-brand">4 CR</div>
                  <div className="text-xs text-gray-400 font-bold uppercase">
                    Credits
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-center">
                  <span className="t-mono text-[9px] text-gray-400 mb-1">
                    AVAILABILITY
                  </span>
                  <span className="text-sm font-bold">Until 6:00 PM</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-center">
                  <span className="t-mono text-[9px] text-gray-400 mb-1">ACCESS</span>
                  <span className="text-sm font-bold">Unpaved</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="w-full py-4 bg-brand text-white text-center rounded-2xl font-bold text-sm shadow-lg shadow-brand/30">
                  Reserve with 4 CR
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gs-reveal order-1 md:order-2 max-w-lg">
          <span className="t-mono text-brand mb-4 block">DETAILS</span>
          <h2 className="t-h1 mb-6 text-black">
            Know exactly what you&rsquo;re choosing.
          </h2>
          <p className="t-body-l text-gray-500 mb-8 text-balance">
            Review location details, credits required, distance to your
            destination, and specific parking instructions before you commit.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-4 border-b border-gray-200 pb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-black">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="font-bold text-lg">Precise Location</span>
            </li>
            <li className="flex items-center gap-4 border-b border-gray-200 pb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-black">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="font-bold text-lg">Walking Time</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-black">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span className="font-bold text-lg">Entry Instructions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
