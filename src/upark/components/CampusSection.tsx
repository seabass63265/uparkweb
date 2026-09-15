const STOPS = [
  {
    time: '11:35 AM',
    tag: 'Class',
    title: 'Park near your morning class.',
    desc: 'Reserve a spot on the academic side of campus.',
  },
  {
    time: '2:00 PM',
    tag: 'Home',
    title: 'Heading home after class?',
    desc: 'List your spot so another student can take it when you pull out.',
  },
  {
    time: '5:00 PM',
    tag: 'Practice',
    title: 'Back for practice.',
    desc: 'Find a different spot closer to the athletic complex.',
  },
]

/** A student's day — park, free your spot when you leave, come back later. */
export default function CampusSection() {
  return (
    <section className="campus-sec">
      <h2 className="t-h1" style={{ maxWidth: 800, margin: '0 auto' }}>
        Parking built around your day.
      </h2>
      <p className="t-body-l" style={{ margin: '1rem auto 0', maxWidth: 500 }}>
        Your day moves around campus. Your parking moves with it.
      </p>

      <div className="timeline">
        {STOPS.map((stop) => (
          <div key={stop.time} className="time-stop">
            <div className="time-label">{stop.time}</div>
            <span className="time-tag">{stop.tag}</span>
            <div className="time-dot" />
            <div className="time-title">{stop.title}</div>
            <div className="time-desc">{stop.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
