import { scrollToForm } from './scrollToForm'

/** Closing call — "help build what campus parking should be." */
export default function BetaClosingSection() {
  return (
    <section className="py-48 bg-[var(--bg)] w-full border-t border-gray-200 text-center">
      <div className="w-full max-w-[1400px] mx-auto px-6 gs-reveal">
        <span className="t-mono text-gray-400 mb-6 block tracking-widest">
          THE FIRST SPOT IS JUST THE BEGINNING.
        </span>
        <h2 className="t-hero text-black mb-12 text-balance max-w-4xl mx-auto">
          HELP BUILD WHAT
          <br />
          CAMPUS PARKING
          <br />
          SHOULD BE.
        </h2>
        <button
          type="button"
          onClick={scrollToForm}
          className="btn py-5 px-12 text-lg"
        >
          JOIN UPARK BETA →
        </button>
      </div>
    </section>
  )
}
