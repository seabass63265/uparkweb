import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './icons'

const CONTACT_CARDS = [
  {
    title: 'University Partnerships',
    body: 'Explore bringing UPark to your campus.',
    cta: 'Connect',
  },
  {
    title: 'Strategic Partnerships',
    body: 'Explore opportunities to work with UPark.',
    cta: 'Connect',
  },
  {
    title: 'General Inquiries',
    body: 'Get in touch with the team directly.',
    cta: 'Contact',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-[80vh] flex items-center bg-white rounded-b-[40px]"
    >
      <div className="content-wrap w-full">
        <div className="text-center mb-24 gs-reveal">
          <span className="t-mono mb-6 block text-brand">GET IN TOUCH</span>
          <h2 className="t-monumental mb-8">Let&rsquo;s build what&rsquo;s next.</h2>
          <p className="t-body-l max-w-2xl mx-auto">
            Whether you&rsquo;re a university, advisor, potential partner, or
            simply interested in what we&rsquo;re building, we&rsquo;d love to
            hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 gs-stagger">
          {CONTACT_CARDS.map((card) => (
            <Link
              key={card.title}
              to="/contact"
              className="p-8 border border-gray-200 rounded-3xl hover:border-black transition-colors group cursor-pointer block"
            >
              <h4 className="text-xl font-bold mb-2">{card.title}</h4>
              <p className="text-gray-500 mb-8">{card.body}</p>
              <div className="text-brand font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                {card.cta} <ArrowRightIcon />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="btn btn-interactive py-4 px-8 text-lg border border-black"
          >
            Contact UPark →
          </Link>
        </div>
      </div>
    </section>
  )
}
