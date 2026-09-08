const REASONS = [
  {
    title: 'Recurring Demand',
    body: 'Students repeatedly commute to the same geographic area throughout the week, creating predictable patterns of parking needs.',
  },
  {
    title: 'Dense Communities',
    body: 'Universities concentrate students, parking demand, housing, businesses, events, and transportation infrastructure within a defined area.',
  },
  {
    title: 'Clear Problem',
    body: 'Parking is a recurring and highly visible part of the commuter experience, causing frustration and wasted time daily.',
  },
  {
    title: 'Repeatable Markets',
    body: 'Universities create individual geographic markets that can potentially be launched, stabilized, and developed one at a time.',
  },
]

export default function BeachheadSection() {
  return (
    <section
      id="why-universities"
      className="bg-white rounded-[40px] my-12 mx-4 md:mx-auto max-w-[1360px] px-8 md:px-16 py-24 md:py-32 shadow-[0_20px_40px_rgba(0,0,0,0.02)] border border-gray-100"
    >
      <div className="content-wrap gs-reveal">
        <span className="t-mono mb-6 block text-brand">OUR BEACHHEAD</span>
        <h2 className="t-h1 mb-20 max-w-4xl text-balance">
          Start where parking demand repeats every day.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 gs-stagger border-b border-gray-200 pb-24">
          {REASONS.map((r) => (
            <div key={r.title}>
              <h4 className="text-2xl font-bold mb-4">{r.title}</h4>
              <p className="t-body-m text-gray-500">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3
            className="t-monumental text-brand text-balance"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            Campus by campus.
          </h3>
        </div>
      </div>
    </section>
  )
}
