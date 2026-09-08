import { useEffect, useState } from 'react'

/** Appears past 600px of scroll; smooth-scrolls to the top on click. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const onScroll = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => setVisible(window.scrollY > 600), 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
