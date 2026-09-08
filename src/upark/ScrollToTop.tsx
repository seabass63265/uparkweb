import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Reset scroll to the top on route change (react-router keeps position by default). */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
