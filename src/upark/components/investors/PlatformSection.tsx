import { Link } from 'react-router-dom'

function StepPills({ steps }: { steps: string[] }) {
  return (
    <div className="mt-auto bg-gray-50 rounded-xl p-4 border border-gray-100 grid grid-cols-2 gap-2 text-center text-[10px] font-bold uppercase tracking-wider text-gray-400">
      {steps.map((s, i) => (
        <div
          key={s}
          className={i === 0 ? 'p-2 bg-white rounded shadow-sm text-fg' : 'p-2'}
        >
          {s}
        </div>
      ))}
    </div>
  )
}

export default function PlatformSection() {
  return (
    <section id="platform" className="pt-32 pb-32">
      <div className="content-wrap max-w-6xl mx-auto">
        <div className="text-center mb-24 gs-reveal">
          <span className="t-mono mb-6 block">THE PLATFORM</span>
          <h2 className="t-h1 max-w-4xl mx-auto">
            One network.
            <br />
            Two sides.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 relative">
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex-col items-center">
            <div className="h-[2px] bg-gray-200 absolute top-1/2 -translate-y-1/2 w-64 -z-10" />
            <div className="bg-white p-4 rounded-full border border-gray-200 shadow-sm relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 3 4 7l4 4" />
                <path d="M4 7h16" />
                <path d="m16 21 4-4-4-4" />
                <path d="M20 17H4" />
              </svg>
            </div>
          </div>

          {/* Drivers */}
          <div className="flex flex-col items-center gs-reveal platform-col-down">
            <h3 className="text-2xl font-bold mb-2">Drivers</h3>
            <p className="text-gray-500 mb-8 t-mono">Demand Side</p>

            <div className="phone-mockup">
              <div className="phone-notch" />
              <div className="mt-12 flex-1 flex flex-col gap-4">
                <div className="bg-gray-100 rounded-xl h-48 w-full relative overflow-hidden">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{ opacity: 0.2 }}
                    aria-hidden="true"
                  >
                    <path
                      d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
                      fill="var(--brand)"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand rounded-full border-4 border-white shadow-md" />
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-2/3 h-4 bg-gray-200 rounded mb-3" />
                  <div className="w-1/3 h-3 bg-gray-200 rounded mb-4" />
                  <div className="w-full h-10 bg-fg rounded-lg mt-2" />
                </div>
                <StepPills steps={['Find', 'Reserve', 'Navigate', 'Park']} />
              </div>
            </div>
          </div>

          {/* Providers */}
          <div className="flex flex-col items-center gs-reveal platform-col-up">
            <h3 className="text-2xl font-bold mb-2">Parking Providers</h3>
            <p className="text-gray-500 mb-8 t-mono">Supply Side</p>

            <div className="phone-mockup">
              <div className="phone-notch" />
              <div className="mt-12 flex-1 flex flex-col gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div className="text-right">
                      <div className="w-16 h-5 bg-green-100 rounded mb-1 ml-auto" />
                      <div className="w-12 h-3 bg-gray-200 rounded ml-auto" />
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-200 mb-4" />
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-3" />
                  <div className="w-1/2 h-3 bg-gray-200 rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="bg-gray-100 h-24 rounded-xl flex-1" />
                  <div className="bg-gray-100 h-24 rounded-xl flex-1" />
                </div>
                <StepPills steps={['List', 'Set Availability', 'Match', 'Earn']} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 gs-reveal">
          <Link to="/" className="btn btn-outline py-3 px-6">
            Explore the Product →
          </Link>
        </div>
      </div>
    </section>
  )
}
