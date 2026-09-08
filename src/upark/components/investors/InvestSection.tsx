import { ArrowRightIcon } from '../company/icons'

/* Inferred section — the source paste cut off before `#invest`. Built in the
   design system's style; replace with the real markup when it lands. */
const ROUTES = [
  {
    title: 'Investor Deck',
    body: 'Request the full deck with market sizing, model, and roadmap.',
    cta: 'Request',
  },
  {
    title: 'Founder Conversation',
    body: 'Talk directly with the founding team about the opportunity.',
    cta: 'Connect',
  },
  {
    title: 'General Inquiries',
    body: 'Anything else — partnerships, press, or advising.',
    cta: 'Contact',
  },
]

export default function InvestSection() {
  return (
    <section
      id="invest"
      className="min-h-[80vh] flex items-center bg-fg text-white rounded-[40px] my-12 mx-4 md:mx-auto max-w-[1360px] px-8 md:px-16"
    >
      <div className="content-wrap w-full py-24">
        <div className="text-center mb-20 gs-reveal">
          <span className="t-mono mb-6 block text-brand">INVEST IN UPARK</span>
          <h2 className="t-monumental mb-8 text-balance">
            Get the full picture.
          </h2>
          <p className="t-body-l text-gray-400 max-w-2xl mx-auto text-balance">
            UPark is early, focused, and building deliberately. Request the
            investor deck to see the market, the model, and the plan for scaling
            campus by campus.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 gs-stagger">
          {ROUTES.map((r) => (
            <div
              key={r.title}
              className="p-8 border border-white/15 rounded-3xl hover:border-white transition-colors group cursor-pointer"
            >
              <h4 className="text-xl font-bold mb-2">{r.title}</h4>
              <p className="text-gray-400 mb-8">{r.body}</p>
              <div className="text-brand font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                {r.cta} <ArrowRightIcon />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="btn btn-outline py-4 px-8 text-lg border border-white text-white hover:bg-white hover:text-black"
          >
            Request Investor Deck →
          </a>
        </div>
      </div>
    </section>
  )
}
