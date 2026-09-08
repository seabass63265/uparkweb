const STORY_PARAGRAPHS = [
  'Every day, students arrive on campus with the same uncertainty: Where am I going to park?',
  'We watched students circle parking structures, search crowded streets, and lose valuable time before they ever reached class.',
  'At the same time, parking spaces throughout the communities surrounding campuses can sit unused.',
  'That disconnect became the starting point for UPark.',
]

const ROUTE_D =
  'M 100 0 C 100 200, 900 300, 900 500 C 900 700, 100 800, 100 1000'

/** "Our Story" — a brand-blue route draws itself in behind the copy. */
export default function StorySection() {
  return (
    <section
      id="story"
      className="relative min-h-screen flex items-center pt-32 pb-32"
    >
      <svg
        className="story-route-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <path className="route-path" d={ROUTE_D} />
        <path
          className="route-path-active"
          id="routeActive"
          d={ROUTE_D}
          strokeDasharray="3000"
          strokeDashoffset="3000"
        />
      </svg>

      <div className="content-wrap max-w-4xl mx-auto gs-reveal">
        <span className="t-mono mb-6 block text-brand">OUR STORY</span>
        <h2 className="t-h1 mb-16 max-w-3xl">
          It started with a problem we knew firsthand.
        </h2>

        <div className="space-y-8 max-w-2xl ml-auto md:mr-12 mb-24 t-body-m">
          {STORY_PARAGRAPHS.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div className="mt-32 text-center gs-reveal-up">
          <p className="t-mono mb-8 text-gray-400">THE QUESTION</p>
          <h3 className="t-h1 text-balance">
            What if finding parking could be as easy as opening an app?
          </h3>
        </div>
      </div>
    </section>
  )
}
