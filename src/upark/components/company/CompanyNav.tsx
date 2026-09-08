import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu, { type MobileMenuItem } from '../MobileMenu'
import { ChevronDownIcon } from './icons'

const DROPDOWN = [
  { label: 'Our Story', href: '#story' },
  { label: 'Mission', href: '#mission' },
  { label: 'Team', href: '#team' },
  { label: 'Advisors', href: '#advisors' },
  { label: 'Contact', href: '#contact' },
]

const MOBILE_LINKS: MobileMenuItem[] = [
  { label: 'Product', to: '/product' },
  { label: 'Universities', to: '/' },
  { label: 'Company', to: '/company' },
  { label: 'Investors', to: '/investors' },
]

/** Fixed glass nav with the hover "Company" dropdown. */
export default function CompanyNav() {
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
            <a href="#top" className="active flex items-center gap-1">
              Company
              <ChevronDownIcon />
            </a>
            <div className="company-dropdown">
              {DROPDOWN.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <Link to="/investors">Investors</Link>
        </div>
        <Link to="/join" className="btn btn-interactive hidden md:inline-flex">
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
