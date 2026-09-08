const STEPS = [
  {
    num: '01 — START',
    title: 'LMU',
    body: "Begin with Loyola Marymount University as UPark's intended first market. Launch within a concentrated university community and begin understanding real parking behavior.",
    accent: true,
  },
  {
    num: '02 — BUILD DENSITY',
    title: 'Grow the Marketplace',
    body: 'Grow both sides of the marketplace: Drivers looking for parking and Parking providers offering spaces.',
  },
  {
    num: '03 — VALIDATE',
    title: 'Measure Performance',
    body: 'Measure adoption, repeat usage, parking behavior, supply, demand, participant feedback, and overall marketplace activity.',
  },
  {
    num: '04 — BUILD THE PLAYBOOK',
    title: 'Create the Strategy',
    body: 'Use what UPark learns from the initial market to create a repeatable university launch strategy covering acquisition, geography, behavior, and local relationships.',
  },
  {
    num: '05 — EXPAND',
    title: 'Scale the Network',
    body: 'Bring UPark to additional university communities. Los Angeles → California → U.S. University Markets.',
  },
]

export default function GtmSection() {
  return (
    <section
      id="gtm"
      className="bg-fg text-white py-32 relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 1000"
          preserveAspectRatio="xMaxYMid slice"
          id="gtm-network"
          aria-hidden="true"
        >
          <circle cx="250" cy="150" r="10" fill="#fff" id="gtm-n1" />
          <circle cx="100" cy="400" r="15" fill="none" stroke="#fff" strokeWidth="2" id="gtm-n2" />
          <circle cx="350" cy="450" r="8" fill="none" stroke="#fff" strokeWidth="2" id="gtm-n3" />
          <circle cx="250" cy="700" r="20" fill="none" stroke="#fff" strokeWidth="2" id="gtm-n4" />
          <circle cx="450" cy="800" r="12" fill="none" stroke="#fff" strokeWidth="2" id="gtm-n5" />

          <path d="M250,150 L100,400" stroke="#fff" strokeWidth="1" fill="none" className="gtm-link" />
          <path d="M250,150 L350,450" stroke="#fff" strokeWidth="1" fill="none" className="gtm-link" />
          <path d="M100,400 L250,700" stroke="#fff" strokeWidth="1" fill="none" className="gtm-link" />
          <path d="M350,450 L250,700" stroke="#fff" strokeWidth="1" fill="none" className="gtm-link" />
          <path d="M350,450 L450,800" stroke="#fff" strokeWidth="1" fill="none" className="gtm-link" />
          <path d="M250,700 L450,800" stroke="#fff" strokeWidth="1" fill="none" className="gtm-link" />
        </svg>
      </div>

      <div className="content-wrap max-w-5xl mx-auto gs-reveal">
        <span className="t-mono mb-6 block text-brand">GO-TO-MARKET</span>
        <h2 className="t-h1 mb-24 max-w-3xl">
          Start local.
          <br />
          Prove the model.
          <br />
          Scale campus by campus.
        </h2>

        <div className="relative pl-8 md:pl-16 border-l border-white/20 space-y-24">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`relative gtm-step${i === STEPS.length - 1 ? ' pb-12' : ''}`}
            >
              <div className="absolute -left-[33px] md:-left-[65px] top-1 bg-fg p-1">
                <div
                  className={
                    step.accent
                      ? 'w-4 h-4 rounded-full bg-brand'
                      : 'w-4 h-4 rounded-full border-2 border-white'
                  }
                />
              </div>
              <span
                className={`t-mono mb-2 block ${step.accent ? 'text-brand' : 'text-gray-500'}`}
              >
                {step.num}
              </span>
              <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
              <p className="t-body-m text-gray-400 max-w-xl">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-white/20 pt-16">
          <h3 className="text-2xl md:text-4xl font-bold text-white text-balance mb-6">
            One campus proves the model.
            <br />
            Every campus after it builds the network.
          </h3>
          <h4 className="t-monumental text-white/10 mt-8">Campus by campus.</h4>
        </div>
      </div>
    </section>
  )
}
