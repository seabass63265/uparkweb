import { Link } from 'react-router-dom'

/* Inferred closing CTA — the source paste was truncated before its end, but the
   hero links to `#join` ("Join the Beta →"), so this is the section that anchor
   targets. Built in the page's design language. */
export default function JoinSection() {
  return (
    <section
      id="join"
      className="py-40 bg-black text-white w-full border-t border-gray-800"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
        <span className="t-mono text-white mb-6 block">JOIN THE BETA</span>
        <h2 className="t-hero mb-6 text-balance">
          Park smarter this semester.
        </h2>
        <p className="t-body-l max-w-2xl mx-auto mb-10 text-white/50 text-balance">
          UPark is rolling out campus by campus. We&rsquo;ll let you know the
          moment it&rsquo;s live at yours.
        </p>

        <Link
          to="/join"
          className="btn bg-white text-black py-4 px-8 inline-flex"
        >
          Join the Beta →
        </Link>
      </div>
    </section>
  )
}
