import { scrollToForm } from './scrollToForm'

/** "Not at LMU?" — invites students from other campuses to still sign up. */
export default function BetaOtherUnisSection() {
  return (
    <section
      className="py-32 bg-white w-full border-t border-gray-100 overflow-hidden"
      id="other-unis"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
        <div className="gs-reveal">
          <span className="t-mono text-gray-400 mb-4 block">NOT AT LMU?</span>
          <h2 className="t-monumental text-black mb-8 text-balance">
            We still want to
            <br />
            hear from you.
          </h2>
          <p className="t-body-l text-gray-500 max-w-2xl mx-auto mb-12 text-balance">
            LMU is only the beginning. Tell us where you go to school and help us
            understand where UPark should go next.
          </p>

          <button
            type="button"
            onClick={scrollToForm}
            className="btn py-4 px-10 text-lg hover:bg-brand hover:text-white transition-colors text-black bg-white border border-gray-200 shadow-sm hover:border-brand"
          >
            ADD MY CAMPUS →
          </button>
        </div>
      </div>
    </section>
  )
}
