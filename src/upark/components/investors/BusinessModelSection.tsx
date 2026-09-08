const STREAMS = [
  {
    title: 'Marketplace',
    body: 'Potential transaction-based revenue generated when parking is booked through the UPark platform.',
    tag: 'Planned',
    tagClass: 'bg-brand/10 text-brand',
  },
  {
    title: 'UPark+',
    body: 'Potential subscription-based premium features, priority matching, and enhanced parking coordination for heavy users.',
    tag: 'Future',
    tagClass: 'bg-gray-100 text-gray-500',
  },
  {
    title: 'University Partnerships',
    body: 'Potential future software, parking coordination, analytics, and mobility services licensed to university partners.',
    tag: 'Future',
    tagClass: 'bg-gray-100 text-gray-500',
  },
]

export default function BusinessModelSection() {
  return (
    <section id="business-model" className="pt-32 pb-32">
      <div className="content-wrap max-w-5xl mx-auto gs-reveal">
        <span className="t-mono mb-6 block">BUSINESS MODEL</span>
        <h2 className="t-h1 mb-20 max-w-3xl">Built to grow with the network.</h2>

        <div className="space-y-6">
          {STREAMS.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8 transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                </div>
                <p className="text-gray-500">{s.body}</p>
              </div>
              <div className="shrink-0">
                <span
                  className={`px-4 py-2 ${s.tagClass} text-xs font-bold uppercase tracking-wider rounded-full`}
                >
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-dashed border-gray-300 rounded-3xl">
          <span className="t-mono text-gray-500 mb-4 block">
            ADDITIONAL FUTURE OPPORTUNITIES
          </span>
          <p className="text-sm text-gray-600 font-medium">
            Event Parking · EV Charging Coordination · Commercial Parking ·
            Mobility Analytics · Strategic Partnerships
          </p>
        </div>
      </div>
    </section>
  )
}
