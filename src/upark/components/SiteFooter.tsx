import { Link } from 'react-router-dom'
import { InstagramIcon, LinkedInIcon, TikTokIcon } from './contact/icons'

type SiteFooterProps = {
  /** Bolds the matching footer link for the page you're currently on. */
  active?: 'investors' | 'contact' | 'join'
}

const linkClass = (isActive: boolean) =>
  `text-sm transition-colors ${
    isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white'
  }`

/** Dark full-bleed footer shared by every page, with a giant watermark wordmark. */
export default function SiteFooter({ active }: SiteFooterProps) {
  return (
    <footer className="bg-black text-white w-full relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-4">
            <Link to="/" className="text-white font-black text-4xl tracking-tight">
              UPARK
            </Link>
            <p className="text-gray-500 text-sm mt-6 max-w-xs leading-relaxed">
              Building the future of campus parking. Starting at LMU, coming to
              a university near you.
            </p>
            <Link
              to="/join"
              className="inline-flex mt-8 px-8 py-4 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Join the Beta →
            </Link>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 block">
              Product
            </span>
            <div className="flex flex-col gap-4">
              <Link to="/product" className={linkClass(false)}>
                How it Works
              </Link>
              <Link to="/product" className={linkClass(false)}>
                For Drivers
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 block">
              Company
            </span>
            <div className="flex flex-col gap-4">
              <a href="/company#story" className={linkClass(false)}>
                Our Story
              </a>
              <a href="/company#team" className={linkClass(false)}>
                Team
              </a>
              <Link to="/contact" className={linkClass(active === 'contact')}>
                Contact
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 block">
              Connect
            </span>
            <div className="flex flex-col gap-4">
              <Link to="/investors" className={linkClass(active === 'investors')}>
                Investors
              </Link>
              <Link to="/join" className={linkClass(active === 'join')}>
                Join the Beta
              </Link>
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-10 mb-6 block">
              Social
            </span>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:border-white/40 hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:border-white/40 hover:text-white transition-colors"
              >
                <TikTokIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:border-white/40 hover:text-white transition-colors"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-xs text-gray-600 font-mono uppercase tracking-widest">
            © 2026 UPark. All rights reserved.
          </div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors font-mono uppercase tracking-widest">
              Privacy
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors font-mono uppercase tracking-widest">
              Terms
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none">
        <div className="text-[20vw] font-black text-white/[0.03] leading-none whitespace-nowrap translate-y-1/3">
          UPARK
        </div>
      </div>
    </footer>
  )
}
