const ADVISORS = [
  { name: 'Dr. Sunil Murthy', specialty: 'Business & Technology', photo: '/sunilmurthy.png' },
  { name: 'Robert (B.J.) Johnson', specialty: 'Technology', photo: '/bj.png' },
  { name: 'Advisor Name', specialty: 'Higher Education', photo: null },
  { name: 'Advisor Name', specialty: 'Mobility', photo: null },
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
          {ADVISORS.map(({ name, specialty, photo }, i) => (
            <div key={`${name}-${specialty}-${i}`} className="flex flex-col">
              {photo && (
                <img
                  src={photo}
                  alt={name}
                  className="w-full max-w-[200px] aspect-square object-cover object-[50%_20%] mb-4"
                />
              )}
              <h4 className="text-xl font-bold mb-1">{name}</h4>
              <p className="t-mono text-brand mb-4">{specialty}</p>
              <div className="h-[1px] w-8 bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
