/** Contact page header — monumental headline over a faint parking-grid backdrop. */
export default function ContactHero() {
  return (
    <header className="relative pt-32 pb-32 md:pt-40 md:pb-40 overflow-hidden flex flex-col items-center w-full bg-[var(--bg)] justify-center border-b border-gray-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.015]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-pg" width="160" height="240" patternUnits="userSpaceOnUse">
              <rect width="160" height="240" fill="none" stroke="black" strokeWidth="1.5" />
              <line x1="80" y1="30" x2="80" y2="210" stroke="black" strokeWidth="0.75" strokeDasharray="6 6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-pg)" />
        </svg>
      </div>

      <div className="text-center z-10 relative px-4 w-full max-w-3xl mx-auto gs-reveal">
        <span className="t-mono text-brand mb-6 block tracking-[0.1em]">
          GET IN TOUCH
        </span>
        <h1 className="t-monumental text-balance text-black">CONTACT US.</h1>
      </div>
    </header>
  )
}
