const ADVISORS = [
  'Business & Strategy',
  'Technology',
  'Higher Education',
  'Mobility',
]

export default function AdvisorsSection() {
  return (
    <section id="advisors" className="pt-12 pb-32">
      <div className="content-wrap max-w-5xl mx-auto gs-reveal">
        <div className="mb-20 text-center">
          <span className="t-mono mb-6 block">ADVISORS</span>
          <h2 className="t-h1 mb-6">Guided by experience.</h2>
          <p className="t-body-l max-w-2xl mx-auto text-balance">
            We&rsquo;re building UPark alongside people who understand technology,
            universities, mobility, business, and what it takes to turn an idea
            into something that lasts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 border-t border-gray-200 pt-16">
          {ADVISORS.map((specialty) => (
            <div key={specialty} className="flex flex-col">
              <h4 className="text-xl font-bold mb-1">Advisor Name</h4>
              <p className="t-mono text-brand mb-4">{specialty}</p>
              <div className="h-[1px] w-8 bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
