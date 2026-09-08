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
        <span className="t-mono text-brand mb-6 block">JOIN THE BETA</span>
        <h2 className="t-hero mb-6 text-balance">
          Park smarter this semester.
        </h2>
        <p className="t-body-l max-w-2xl mx-auto mb-10 text-white/50 text-balance">
          UPark is rolling out campus by campus. Add your email and we&rsquo;ll
          let you know the moment it&rsquo;s live at yours.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@university.edu"
            aria-label="Email address"
            className="w-full sm:flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
          />
          <button
            type="submit"
            className="btn bg-white text-black py-4 px-8 w-full sm:w-auto"
          >
            Request Access →
          </button>
        </form>

        <p className="text-xs text-white/30 mt-6 font-mono uppercase tracking-widest">
          No spam. Just a heads-up when we launch.
        </p>
      </div>
    </section>
  )
}
