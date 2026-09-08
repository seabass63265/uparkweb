import { Link } from 'react-router-dom'

/* Inferred footer — mirrors the Company-page footer, "Investors" marked active. */
export default function InvestorsFooter() {
  return (
    <footer className="bg-bg relative z-10">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
        <Link to="/" className="nav-logo text-3xl">
          UPARK
        </Link>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-3 text-sm font-medium">
            <Link to="/product" className="text-gray-500 hover:text-black">
              Product
            </Link>
            <Link to="/" className="text-gray-500 hover:text-black">
              Universities
            </Link>
          </div>
          <div className="flex flex-col gap-3 text-sm font-medium">
            <Link to="/company" className="text-gray-500 hover:text-black">
              Company
            </Link>
            <Link to="/investors" className="text-black">
              Investors
            </Link>
            <a href="#invest" className="text-gray-500 hover:text-black">
              Invest
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium font-mono uppercase tracking-widest pt-8 border-t border-gray-200 mt-4">
        <div>© 2026 UPark. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black">
            Privacy
          </a>
          <a href="#" className="hover:text-black">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
