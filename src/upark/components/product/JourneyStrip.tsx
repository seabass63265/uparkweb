/* "From searching to parked." — the source paste was truncated inside the first
   card (`...rounded-3xl p-`), so the card interior below is reconstructed to
   match the five section steps and the surrounding design language. */

const STEPS = [
  { n: '01', label: 'Find', body: 'See what parking is available near where you’re headed.' },
  { n: '02', label: 'Details', body: 'Check credits, distance, and access before you choose.' },
  { n: '03', label: 'Reserve', body: 'Lock the spot in with credits from your plan.' },
  { n: '04', label: 'Navigate', body: 'Follow the route straight to the reserved space.' },
  { n: '05', label: 'Park', body: 'Pull in. You’re done — no circling, no searching.' },
]

export default function JourneyStrip() {
  return (
    <section className="py-24 bg-[var(--bg)] w-full border-t border-gray-200">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16 gs-reveal">
          <h2 className="t-h2 text-black">From searching to parked.</h2>
        </div>

        <div className="flex flex-nowrap md:grid md:grid-cols-5 gap-4 overflow-x-auto pb-12 snap-x hide-scrollbar gs-stagger">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="min-w-[240px] md:min-w-0 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 snap-start flex flex-col"
            >
              <span className="t-mono text-brand mb-4 block text-[10px]">
                {step.n}
              </span>
              <h4 className="font-bold text-lg mb-2">{step.label}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
