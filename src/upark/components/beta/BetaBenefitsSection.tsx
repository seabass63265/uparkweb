const BENEFITS = [
  {
    title: 'Early Access',
    body: 'Be among the first students to try UPark as beta access becomes available.',
    icon: (
      <>
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
  {
    title: 'Shape the Product',
    body: 'Tell us what works, what doesn’t, and what would make campus parking better.',
    icon: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </>
    ),
  },
  {
    title: 'Beta Updates',
    body: 'Get important updates as UPark gets closer to its first campus launch.',
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
]

/** "More than a waitlist." — what joining actually gets you. */
export default function BetaBenefitsSection() {
  return (
    <section className="py-32 bg-[var(--bg)] w-full border-t border-gray-100">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20 gs-reveal">
          <h2 className="t-h1 text-black max-w-3xl mx-auto text-balance">
            More than a waitlist.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto gs-stagger">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-black mb-8 border border-gray-100">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  {b.icon}
                </svg>
              </div>
              <h4 className="font-bold text-xl mb-3">{b.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
