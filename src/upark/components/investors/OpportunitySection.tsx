function TruckIcon() {
  return (
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
      className="text-gray-700"
      aria-hidden="true"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

function GarageIcon() {
  return (
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
      className="text-gray-700"
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </svg>
  )
}

export default function OpportunitySection() {
  return (
    <section id="opportunity" className="pt-32 pb-32 border-t border-gray-100 bg-white">
      <div className="content-wrap max-w-6xl mx-auto gs-reveal">
        <div className="text-center mb-24">
          <span className="t-mono mb-6 block text-brand">THE OPPORTUNITY</span>
          <h2 className="t-h1 max-w-4xl mx-auto text-balance">
            Parking exists.
            <br />
            Finding it is the problem.
          </h2>
        </div>

        <div className="relative mt-24 max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 z-0 hidden md:block" />
          <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-0 hidden md:block overflow-hidden">
            <div className="w-full h-full bg-brand origin-left" id="opp-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative z-10 gs-stagger">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                <TruckIcon />
              </div>
              <h4 className="text-xl font-bold mb-3">Drivers</h4>
              <p className="t-body-m text-gray-500">
                Students need convenient parking around campus every day.
              </p>
            </div>

            <div className="bg-fg text-white rounded-3xl p-8 shadow-xl flex flex-col items-center text-center transform md:scale-110">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <span className="font-black text-xl tracking-tighter">UP</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">UPark</h4>
              <p className="t-body-m text-gray-400">
                The technology connecting parking demand with available spots.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                <GarageIcon />
              </div>
              <h4 className="text-xl font-bold mb-3">Parking Supply</h4>
              <p className="t-body-m text-gray-500">
                Students leaving campus create available parking spots, but
                there is no efficient way to connect them with students
                searching for parking.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center gs-reveal border border-brand/20 bg-brand/5 rounded-3xl p-8 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-brand/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--brand)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
          <h4 className="t-mono text-brand mb-4">THE NETWORK EFFECT</h4>
          <h4 className="text-xl font-bold mb-3">Universities</h4>
          <p className="t-body-m text-gray-600">
            As UPark connects drivers with available parking, the same model
            can grow beyond universities—connecting more people with parking
            across neighborhoods, businesses, events, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
