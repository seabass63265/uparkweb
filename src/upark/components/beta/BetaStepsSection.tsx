const STEPS = [
  {
    n: '01',
    title: 'Join the Beta',
    body: 'Tell us a little about yourself and your campus.',
    last: false,
  },
  {
    n: '02',
    title: 'Get Selected',
    body: 'We’ll invite students as beta testing becomes available.',
    last: false,
  },
  {
    n: '03',
    title: 'Test UPark',
    body: 'Use the product, park with UPark, and help us improve the experience.',
    last: true,
  },
]

/** "Join now. Park later." — the three-step path onto the beta. */
export default function BetaStepsSection() {
  return (
    <section className="py-32 bg-white w-full border-t border-gray-100">
      <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
        <div className="gs-reveal mb-20">
          <h2 className="t-h1 text-black max-w-3xl mx-auto text-balance">
            Join now.
            <br />
            Park later.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto gap-12 gs-stagger relative">
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gray-200 -z-10" />

          {STEPS.map((step) => (
            <div
              key={step.n}
              className="flex flex-col items-center text-center flex-1 bg-white pt-2 px-4"
            >
              <span
                className={`t-mono text-3xl block mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-full border shadow-sm ${
                  step.last
                    ? 'border-gray-200 bg-gray-50 text-black'
                    : 'border-gray-100 text-gray-300'
                }`}
              >
                {step.n}
              </span>
              <h4 className="font-bold text-lg mb-3">{step.title}</h4>
              <p className="text-sm text-gray-500 max-w-xs">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
