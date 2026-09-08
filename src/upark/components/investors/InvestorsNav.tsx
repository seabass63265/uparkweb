import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu, { type MobileMenuItem } from '../MobileMenu'
import { ChevronDownIcon } from '../company/icons'

const DROPDOWN = [
  { label: 'Our Story', href: '/company#story' },
  { label: 'Mission', href: '/company#mission' },
  { label: 'Team', href: '/company#team' },
  { label: 'Advisors', href: '/company#advisors' },
  { label: 'Contact', href: '/company#contact' },
]

const MOBILE_LINKS: MobileMenuItem[] = [
  { label: 'Product', to: '/product' },
  { label: 'Universities', to: '/' },
  { label: 'Company', to: '/company' },
  { label: 'Investors', to: '/investors' },
]

/** Fixed glass nav, "Investors" active. */
export default function InvestorsNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={scrolled ? 'scrolled' : undefined}>
        <Link to="/" className="nav-logo">
          UPARK
        </Link>
        <div className="nav-links">
          <Link to="/product">Product</Link>
          <Link to="/">Universities</Link>

          <div className="relative nav-group py-4">
            <Link to="/company" className="flex items-center gap-1">
              Company
              <ChevronDownIcon />
            </Link>
            <div className="company-dropdown">
              {DROPDOWN.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <Link to="/investors" className="active">
            Investors
          </Link>
        </div>
        <Link to="/join" className="btn hidden md:inline-flex">
          Join Beta
        </Link>
      </nav>

      <MobileMenu
        items={MOBILE_LINKS}
        cta={{ label: 'Join the Beta', to: '/join' }}
      />
    </>
  )
}
