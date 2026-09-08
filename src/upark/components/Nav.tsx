import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu, { type MobileMenuItem } from './MobileMenu'

const LINKS: MobileMenuItem[] = [
  { label: 'Product', to: '/product' },
  { label: 'Universities', to: '/' },
  { label: 'Company', to: '/company' },
  { label: 'Investors', to: '/investors' },
]

type NavProps = {
  /** Shared reveal flag — the nav fades in with the hero copy. */
  revealed: boolean
}

/** Fixed nav that flips from exclusion-blend overlay to a solid bar past 100px. */
export default function Nav({ revealed }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={[scrolled && 'scrolled', !revealed && 'pre-reveal']
          .filter(Boolean)
          .join(' ')}
      >
        <Link to="/" className="nav-logo">
          UPARK
        </Link>
        <div className="nav-links">
          {LINKS.map((link) => (
            <Link key={link.label} to={link.to ?? '/'}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link to="/join" className="btn nav-btn">
          Join Beta
        </Link>
      </nav>

      <div className={`nav-mobile-gate${revealed ? '' : ' pre-reveal'}`}>
        <MobileMenu items={LINKS} cta={{ label: 'Join the Beta', to: '/join' }} />
      </div>
    </>
  )
}
