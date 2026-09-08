const STEPS = [
  {
    n: '01',
    title: 'Choose a Plan',
    body: 'Select the monthly UPark membership that fits how often you park.',
  },
  {
    n: '02',
    title: 'Get Your Credits',
    body: 'Your plan includes UPark credits to use throughout the month.',
  },
  {
    n: '03',
    title: 'Find a Spot',
    body: 'See available parking and choose where you want to park.',
  },
  {
    n: '04',
    title: 'Reserve with Credits',
    body: 'Use your UPark credits to reserve the spot. No individual cash transaction.',
  },
]

const PLANS = [
  {
    kicker: 'LIGHT PARKER',
    blurb: 'Occasional campus parking.',
    perk: 'Ideal for occasional visitors',
    featured: false,
  },
  {
    kicker: 'MOST POPULAR',
    blurb: 'Regular campus commuters.',
    perk: 'Best for students & staff',
    featured: true,
  },
  {
    kicker: 'DAILY PARKER',
    blurb: 'Daily campus parking needs.',
    perk: 'Unlimited flexibility',
    featured: false,
  },
]

/** SUBSCRIPTION — one monthly plan, credits to park.
    (The source markup repeated this section twice; rendered once here.) */
export default function SubscriptionSection() {
  return (
    <section
      id="subscription"
      className="py-32 bg-white w-full border-t border-gray-100"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20 gs-reveal">
          <span className="t-mono text-brand mb-4 block">SUBSCRIPTION</span>
          <h2 className="t-h1 text-black max-w-3xl mx-auto text-balance">
            One monthly plan.
            <br />
            Credits to park.
          </h2>
          <p className="t-body-l text-gray-500 max-w-xl mx-auto mt-6">
            Subscribe once. Get credits every month. Use them to reserve any spot
            on UPark.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-24 gs-reveal">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center"
            >
              <span className="t-mono text-brand mb-4 block text-[10px]">
                {step.n}
              </span>
              <h4 className="font-bold text-lg mb-3">{step.title}</h4>
              <p className="text-sm text-gray-500">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto gs-reveal">
          {PLANS.map((plan) =>
            plan.featured ? (
              <div
                key={plan.kicker}
                className="bg-black rounded-3xl p-8 shadow-xl text-white flex flex-col relative transform md:-translate-y-4"
              >
                <span className="t-mono text-brand mb-4 block text-[10px]">
                  {plan.kicker}
                </span>
                <div className="text-4xl font-black mb-2">
                  $X<span className="text-lg font-medium text-white/40">/mo</span>
                </div>
                <p className="text-sm text-white/60 mb-8">{plan.blurb}</p>
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    XX Credits / month
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-white/60">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    {plan.perk}
                  </div>
                </div>
                <div className="w-full py-4 bg-white text-black text-center rounded-2xl font-bold text-sm">
                  Get Started
                </div>
              </div>
            ) : (
              <div
                key={plan.kicker}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col"
              >
                <span className="t-mono text-gray-400 mb-4 block text-[10px]">
                  {plan.kicker}
                </span>
                <div className="text-4xl font-black mb-2">
                  $X<span className="text-lg font-medium text-gray-400">/mo</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">{plan.blurb}</p>
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    XX Credits / month
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    {plan.perk}
                  </div>
                </div>
                <div className="w-full py-4 bg-gray-100 text-black text-center rounded-2xl font-bold text-sm">
                  Get Started
                </div>
              </div>
            ),
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          *Pricing and credit amounts are placeholder values.
        </p>
      </div>
    </section>
  )
}
