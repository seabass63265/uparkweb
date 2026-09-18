import { Fragment } from 'react'

type Step = { kicker: string; label: string; tone: string; description?: string }

const DIMENSIONS: { title: string; steps: Step[] }[] = [
  {
    title: 'Dimension 1: Validate',
    steps: [
      {
        kicker: 'BEGIN WITH',
        label: 'Student Beta Testers',
        tone: 'text-2xl font-bold',
        description:
          'Free beta testing to identify what works, what doesn’t, and uncover edge cases.',
      },
      {
        kicker: 'REFINE',
        label: 'Test · Learn · Improve',
        tone: 'text-2xl text-gray-600',
        description:
          'Use student feedback and real-world testing to improve the UPark experience.',
      },
      {
        kicker: 'EXPAND TESTING',
        label: 'Faculty & Staff',
        tone: 'text-2xl text-gray-400',
        description: 'Broaden testing to additional members of the campus community.',
      },
    ],
  },
  {
    title: 'Dimension 2: Scale',
    steps: [
      {
        kicker: 'BEGIN WITH',
        label: 'Full LMU Launch',
        tone: 'text-2xl font-bold',
        description: 'Move from beta testing to real UPark credits and full student use.',
      },
      {
        kicker: 'PROVE',
        label: 'LMU Campus',
        tone: 'text-2xl text-gray-600',
        description: 'Build adoption and validate UPark at full scale within one university.',
      },
      {
        kicker: 'EXPAND TO',
        label: 'Additional Universities',
        tone: 'text-2xl text-gray-500',
        description: 'Take what worked at LMU and bring the model to other campuses.',
      },
      { kicker: 'GROW', label: 'University by University', tone: 'text-2xl text-gray-400' },
    ],
  },
  {
    title: 'Dimension 3: Beyond Campus',
    steps: [
      {
        kicker: 'BEGIN WITH',
        label: 'University Communities',
        tone: 'text-2xl font-bold',
      },
      {
        kicker: 'EXPAND TO',
        label: 'Entertainment & Events',
        tone: 'text-2xl text-gray-600',
        description: 'Stadiums · Concerts · Festivals · Arenas',
      },
      {
        kicker: 'THEN',
        label: 'Dense Urban Areas',
        tone: 'text-2xl text-gray-500',
        description: 'Downtowns · Neighborhoods · Apartment Communities',
      },
      {
        kicker: 'THEN',
        label: 'Commercial Destinations',
        tone: 'text-2xl text-gray-500',
        description: 'Shopping Districts · Restaurants · Business Districts',
      },
      {
        kicker: 'LONG-TERM VISION',
        label: 'Parking Anywhere',
        tone: 'text-2xl text-gray-400',
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
      <div className="content-wrap max-w-7xl mx-auto gs-reveal">
        <span className="t-mono mb-6 block text-brand">MARKET OPPORTUNITY</span>
        <h2 className="t-h1 mb-20">
          Start focused.
          <br />
          Build outward.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-gray-200 pb-24 mb-24 gs-stagger">
          {DIMENSIONS.map((dim) => (
            <div key={dim.title}>
              <h4 className="text-2xl font-bold mb-10 border-b border-black pb-5">
                {dim.title}
              </h4>
              <div className="space-y-8">
                {dim.steps.map((step, i) => (
                  <Fragment key={step.kicker + i}>
                    <div className="flex flex-col">
                      <span className="t-mono text-xs text-gray-400 mb-2">
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
                      {step.description && (
                        <span className="text-lg text-gray-400 mt-2">
                          {step.description}
                        </span>
                      )}
                    </div>
                    {i < dim.steps.length - 1 && (
                      <div className="w-[1px] h-6 bg-gray-200 ml-4" />
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
