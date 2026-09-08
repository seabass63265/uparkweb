const MILESTONES = [
  {
    title: 'Product',
    body: 'Working UPark prototype and ongoing platform development.',
  },
  {
    title: 'Validation',
    body: 'Student interviews, feedback gathering, and initial user research.',
  },
  {
    title: 'Technical',
    body: 'Core platform architecture and technical capability review.',
  },
  {
    title: 'University',
    body: 'University conversations exploring an initial market pilot.',
  },
]

// Metric labels below are inferred — the source paste was truncated in this block.
const PILOT_METRICS = [
  'Active Drivers',
  'Spots Listed',
  'Bookings',
  'Repeat Rate',
  'Time Saved',
]

export default function TractionSection() {
  return (
    <section
      id="traction"
      className="pt-32 pb-32 bg-white rounded-[40px] shadow-sm my-12 mx-4 md:mx-auto max-w-[1360px] px-8 md:px-16 border border-gray-100"
    >
      <div className="content-wrap gs-reveal">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
          <div>
            <span className="t-mono mb-6 block text-brand">TRACTION</span>
            <h2 className="t-h1">From idea to movement.</h2>
          </div>
          <p className="t-mono text-gray-400 text-xs text-right max-w-[200px]">
            * Verified milestones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24 border-t border-gray-200 pt-16 gs-stagger">
          {MILESTONES.map((m) => (
            <div key={m.title}>
              <h4 className="text-lg font-bold mb-2">{m.title}</h4>
              <p className="text-sm text-gray-500">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-bg rounded-3xl p-8 md:p-12">
          <span className="t-mono text-gray-500 mb-8 block text-center">
            FUTURE PILOT METRICS
          </span>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-center opacity-40">
            {PILOT_METRICS.map((label) => (
              <div key={label}>
                <div className="h-10 bg-gray-200 rounded w-16 mx-auto mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6 t-mono">
          * Pilot metrics to be reported once the initial market is live
        </p>
      </div>
    </section>
  )
}
