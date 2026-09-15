import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { InstagramIcon, LinkedInIcon, TikTokIcon } from './contact/icons'
import './mobile-menu.css'

export type MobileMenuItem = {
  label: string
  to?: string
  href?: string
}

type MobileMenuProps = {
  /** Big links, top to bottom. */
  items: MobileMenuItem[]
  /** Optional pill action shown in the footer (e.g. "Join Beta"). */
  cta?: MobileMenuItem
}

const EASE = 'power2.out'
const SOCIAL = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'TikTok', Icon: TikTokIcon },
  { label: 'LinkedIn', Icon: LinkedInIcon },
]

/**
 * Burger button (mobile only) that opens a full-screen "sliding stairs"
 * menu: five black bars stagger in, then the links flip down into place.
 * Adapted from the reference in `./files`.
 */
export default function MobileMenu({ items, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const tlRef = useRef<ReturnType<typeof gsap.timeline> | null>(null)

  const reduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const animateOpen = useCallback(() => {
    const root = overlayRef.current
    if (!root) return
    const q = gsap.utils.selector(root)
    tlRef.current?.kill()
    gsap.set(root, { pointerEvents: 'auto' })

    if (reduced()) {
      gsap.set(q('.um-bar'), { height: '100%' })
      gsap.set(q('.um-backdrop'), { opacity: 0.5 })
      gsap.set([q('.um-menu'), q('.um-menu__footer')], { opacity: 1 })
      gsap.set(q('.um-menu__link'), { rotateX: 0, opacity: 1 })
      closeRef.current?.focus()
      return
    }

    const tl = gsap.timeline({ onComplete: () => closeRef.current?.focus() })
    tlRef.current = tl
    tl.fromTo(
      q('.um-bar'),
      { height: '0%' },
      {
        height: '100%',
        duration: 0.5,
        stagger: { each: 0.05, from: 'end' },
        ease: EASE,
      },
      0,
    )
      .to(q('.um-backdrop'), { opacity: 0.5, duration: 0.5, ease: EASE }, 0.2)
      .to(q('.um-menu'), { opacity: 1, duration: 0.4, ease: EASE }, 0.4)
      .fromTo(
        q('.um-close'),
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: EASE },
        0.45,
      )
      .fromTo(
        q('.um-menu__link'),
        { rotateX: 90, opacity: 0 },
        {
          rotateX: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: EASE,
        },
        0.55,
      )
      .fromTo(
        q('.um-menu__footer'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: EASE },
        0.85,
      )
  }, [])

  const animateClose = useCallback((done: () => void) => {
    const root = overlayRef.current
    if (!root) {
      done()
      return
    }
    const q = gsap.utils.selector(root)
    tlRef.current?.kill()

    const finish = () => {
      gsap.set(root, { pointerEvents: 'none' })
      done()
      burgerRef.current?.focus()
    }

    if (reduced()) {
      gsap.set([q('.um-menu'), q('.um-menu__footer'), q('.um-backdrop')], {
        opacity: 0,
      })
      gsap.set(q('.um-bar'), { height: '0%' })
      finish()
      return
    }

    const tl = gsap.timeline({ onComplete: finish })
    tlRef.current = tl
    tl.to(q('.um-menu'), { opacity: 0, duration: 0.3, ease: EASE }, 0)
      .to(q('.um-backdrop'), { opacity: 0, duration: 0.35, ease: EASE }, 0.05)
      .to(
        q('.um-bar'),
        {
          height: '0%',
          duration: 0.3,
          stagger: { each: 0.05, from: 'start' },
          ease: EASE,
        },
        0.15,
      )
  }, [])

  const openMenu = useCallback(() => {
    setOpen(true)
    animateOpen()
  }, [animateOpen])

  const closeMenu = useCallback(() => {
    animateClose(() => setOpen(false))
  }, [animateClose])

  // Esc closes; lock body scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.body.classList.add('um-menu-open')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.body.classList.remove('um-menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeMenu])

  // Close if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')
    const onChange = () => {
      if (mq.matches) closeMenu()
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [closeMenu])

  const renderLink = (item: MobileMenuItem, className: string) => {
    if (item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          className={className}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      )
    }
    return (
      <a
        key={item.label}
        href={item.href ?? '#'}
        className={className}
        onClick={closeMenu}
      >
        {item.label}
      </a>
    )
  }

  return (
    <>
      <button
        ref={burgerRef}
        type="button"
        className="um-burger"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="um-overlay"
        onClick={openMenu}
      >
        <span className="um-burger__bg" aria-hidden="true" />
        <svg
          className="um-burger__icon"
          width="40"
          height="7"
          viewBox="0 0 56 7"
          fill="none"
          aria-hidden="true"
        >
          <line x1="56" y1="0.5" x2="0" y2="0.5" stroke="currentColor" />
          <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="currentColor" />
        </svg>
        <span className="um-burger__label">Menu</span>
      </button>

      <div
        id="um-overlay"
        ref={overlayRef}
        className={`um-overlay${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="um-stairs" aria-hidden="true">
          <div className="um-bar" />
          <div className="um-bar" />
          <div className="um-bar" />
          <div className="um-bar" />
          <div className="um-bar" />
          <div className="um-backdrop" />
        </div>

        <div
          className="um-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="um-menu__header">
            <button
              ref={closeRef}
              type="button"
              className="um-close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 68 68"
                fill="none"
                aria-hidden="true"
              >
                <path d="M1.5 1.5L67 67" stroke="currentColor" />
                <path d="M66.5 1L1 66.5" stroke="currentColor" />
              </svg>
            </button>
          </div>

          {/* A plain <div>, not <nav>: a <nav> here would inherit the site's
              fixed-position glass nav styles (`.upark nav`, `.upark-company
              nav`). The dialog role already conveys the semantics. */}
          <div className="um-menu__body">
            {items.map((item) => renderLink(item, 'um-menu__link'))}
          </div>

          <div className="um-menu__footer">
            {cta && renderLink(cta, 'um-cta')}
            <div className="um-social">
              {SOCIAL.map(({ label, Icon }) => (
                <a key={label} href="#" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
