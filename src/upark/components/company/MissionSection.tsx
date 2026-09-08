const MISSION_ITEMS = [
  { title: 'SIMPLIFY', body: 'Reduce the friction of finding parking.' },
  {
    title: 'CONNECT',
    body: 'Connect drivers, parking providers, and campus communities.',
  },
  {
    title: 'IMPROVE',
    body: 'Help campuses use existing parking resources more intelligently.',
  },
]

export default function MissionSection() {
  return (
    <section id="mission" className="border-t border-gray-200">
      <div className="content-wrap max-w-6xl mx-auto gs-reveal">
        <div className="mb-24">
          <span className="t-mono mb-6 block">OUR MISSION</span>
          <h2 className="t-h1 mb-8 max-w-4xl">
            Make parking simpler. Make campuses move better.
          </h2>
          <p className="t-body-l max-w-3xl">
            UPark is building technology that connects drivers with parking
            opportunities while helping university communities better understand
            and coordinate parking demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-12 border-t border-gray-200 gs-stagger">
          {MISSION_ITEMS.map((item) => (
            <div key={item.title} className="mission-item">
              <h4 className="t-h2 mb-4 text-brand">{item.title}</h4>
              <p className="t-body-m text-gray-500">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
