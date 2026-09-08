/** Hero — headline, CTA, and a looping "car claims the reserved spot" vignette. */
export default function BetaHero() {
  return (
    <header className="relative pt-40 pb-20 md:pb-32 overflow-hidden flex flex-col items-center min-h-[90vh] w-full bg-[var(--bg)] justify-center">
      <div className="text-center z-10 relative px-4 w-full gs-reveal">
        <span className="t-mono text-brand mb-6 block tracking-[0.1em]">
          UPARK BETA
        </span>
        <h1 className="t-monumental mb-8 text-balance text-black">
          Be first to park
          <br />
          with UPark.
        </h1>
        <p className="t-body-l max-w-2xl mx-auto mb-10 text-balance text-gray-500">
          We&rsquo;re building a better way to find campus parking, and we want
          students to help us test it. Join the UPark Beta for early access,
          product updates, and the opportunity to help shape what we build next.
        </p>

        <div className="flex flex-col items-center justify-center">
          <a href="#join-beta" className="btn py-4 px-10 text-lg mb-4">
            Join the Beta
          </a>
          <span className="t-mono text-[10px] text-gray-400">Starting at LMU.</span>
        </div>
      </div>

      <div className="mt-20 relative w-full flex justify-center h-32 md:h-48 gs-reveal">
        <div className="w-full max-w-md h-full relative">
          <div className="absolute inset-0 bg-white/50 border border-gray-200 rounded-3xl shadow-sm overflow-hidden flex items-center justify-center p-4">
            <div
              className="w-full h-full border-2 border-dashed border-gray-200 rounded-xl relative"
              id="hero-lot"
            >
              <div
                className="absolute right-[20%] top-[20%] w-[15%] h-[60%] border-2 border-brand/20 bg-brand/5 rounded-md flex items-center justify-center"
                id="hero-target-spot"
              >
                <span className="t-mono text-[8px] text-brand/50">RES</span>
              </div>

              <div
                className="absolute left-[-10%] top-[30%] w-[10%] h-[40%] bg-black rounded shadow-md z-10 flex flex-col items-center justify-between py-1"
                id="hero-car"
              >
                <div className="w-[70%] h-[20%] bg-white/20 rounded-sm" />
                <div className="w-[70%] h-[20%] bg-red-500/50 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
