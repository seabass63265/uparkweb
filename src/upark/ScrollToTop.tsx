import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Reset scroll to the top on route change (react-router keeps position by default),
    or scroll to the #hash target when the new URL has one. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
