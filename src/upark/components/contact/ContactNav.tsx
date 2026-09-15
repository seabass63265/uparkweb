import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu, { type MobileMenuItem } from '../MobileMenu'

const MOBILE_LINKS: MobileMenuItem[] = [
  { label: 'Product', to: '/product' },
  { label: 'Company', to: '/company' },
  { label: 'Investors', to: '/investors' },
  { label: 'Contact', to: '/contact' },
]

/** Fixed glass nav, "Contact" active. */
export default function ContactNav() {
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
          <img src="/uparklogo-icon.png" alt="UPark" />
        </Link>
        <div className="nav-links">
          <Link to="/product">Product</Link>

          <Link to="/company">Company</Link>

          <Link to="/investors">Investors</Link>
          <Link to="/contact" className="active">
            Contact
          </Link>
        </div>
        <Link to="/join" className="btn nav-btn hidden md:inline-flex">
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
