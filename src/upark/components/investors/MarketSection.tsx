import { Fragment } from 'react'

type Step = { kicker: string; label: string; tone: string }

const DIMENSIONS: { title: string; steps: Step[]; multiline?: boolean }[] = [
  {
    title: 'Dimension 1: Users',
    steps: [
      { kicker: 'BEGIN WITH', label: 'Students', tone: 'font-bold' },
      { kicker: 'EXPAND TO', label: 'Faculty, Staff & Visitors', tone: 'text-gray-600' },
      {
        kicker: 'THEN',
        label: 'Nearby Residents, Businesses & Events',
        tone: 'text-gray-400',
      },
    ],
  },
  {
    title: 'Dimension 2: Markets',
    steps: [
      { kicker: 'BEGIN WITH', label: 'LMU', tone: 'font-bold' },
      { kicker: 'THEN', label: 'Additional LA Universities', tone: 'text-gray-600' },
      { kicker: 'THEN', label: 'California Universities', tone: 'text-gray-500' },
      { kicker: 'THEN', label: 'Universities Across U.S.', tone: 'text-gray-400' },
    ],
  },
  {
    title: 'Dimension 3: Platform',
    multiline: true,
    steps: [
      { kicker: 'BEGIN WITH', label: 'Parking Marketplace', tone: 'font-bold' },
      {
        kicker: 'EXPAND TOWARD',
        label:
          'University Parking\nEvent Parking\nCommercial Parking\nEV Charging\nParking Analytics\nMobility Analytics',
        tone: 'text-gray-500 text-sm leading-relaxed',
      },
    ],
  },
]

const SIZING = [
  { label: 'TAM', w: 'w-32' },
  { label: 'SAM', w: 'w-24' },
  { label: 'SOM', w: 'w-20' },
]

export default function MarketSection() {
  return (
    <section id="market" className="pt-32 pb-32 bg-white">
      <div className="content-wrap max-w-6xl mx-auto gs-reveal">
        <span className="t-mono mb-6 block text-brand">MARKET OPPORTUNITY</span>
        <h2 className="t-h1 mb-20">
          Start focused.
          <br />
          Build outward.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-200 pb-24 mb-24 gs-stagger">
          {DIMENSIONS.map((dim) => (
            <div key={dim.title}>
              <h4 className="text-lg font-bold mb-8 border-b border-black pb-4">
                {dim.title}
              </h4>
              <div className="space-y-6">
                {dim.steps.map((step, i) => (
                  <Fragment key={step.kicker + i}>
                    <div className="flex flex-col">
                      <span className="t-mono text-[10px] text-gray-400 mb-1">
                        {step.kicker}
                      </span>
                      <span className={step.tone}>
                        {step.label.split('\n').map((line, j, arr) => (
                          <Fragment key={j}>
                            {line}
                            {j < arr.length - 1 && <br />}
                          </Fragment>
                        ))}
                      </span>
                    </div>
                    {i < dim.steps.length - 1 && (
                      <div className="w-[1px] h-4 bg-gray-200 ml-4" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gs-stagger">
          {SIZING.map((s) => (
            <div
              key={s.label}
              className="bg-bg rounded-2xl p-8 flex flex-col items-center text-center justify-center min-h-[160px]"
            >
              <span className="t-mono text-gray-500 mb-2">{s.label}</span>
              <div
                className={`h-8 ${s.w} bg-gray-200 rounded animate-pulse opacity-50`}
              />
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6 t-mono">
          * Market sizing data to be provided in full investor deck
        </p>
      </div>
    </section>
  )
}
