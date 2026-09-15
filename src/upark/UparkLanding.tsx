import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import './upark.css'
import { initUparkAnimations } from './animations'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import RevealSection from './components/RevealSection'
import HowItWorksSection from './components/HowItWorksSection'
import CampusSection from './components/CampusSection'
import TwoSidesSection from './components/TwoSidesSection'
import VisionSection from './components/VisionSection'
import CtaSection from './components/CtaSection'
import SiteFooter from './components/SiteFooter'

/** Session flag: the intro clip plays once per browser session, then is skipped
 *  on any return to this page (e.g. navigating back from /company). */
const INTRO_SEEN_KEY = 'upark:intro-seen'

function introAlreadySeen() {
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === '1'
  } catch {
    return false
  }
}

/** UPark marketing site — single scrollytelling landing page. */
export default function UparkLanding() {
  const rootRef = useRef<HTMLDivElement>(null)
  // Decided once on mount: has the intro run already this session?
  const [skipIntro] = useState(introAlreadySeen)
  // Shared with Nav + Hero so the bar and the headline resolve in together
  // near the end of the intro clip (or immediately, for returning visitors).
  const [revealed, setRevealed] = useState(skipIntro)
  const reveal = useCallback(() => {
    setRevealed(true)
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1')
    } catch {
      /* private mode / storage disabled — intro just replays next load */
    }
  }, [])

  useLayoutEffect(() => {
    if (!rootRef.current) return
    return initUparkAnimations(rootRef.current)
  }, [])

  return (
    <div className="upark" ref={rootRef}>
      <Nav revealed={revealed} />
      <Hero revealed={revealed} onReveal={reveal} skipIntro={skipIntro} />
      <ProblemSection />
      <RevealSection />
      <HowItWorksSection />
      <CampusSection />
      <TwoSidesSection />
      <VisionSection />
      <CtaSection />
      <SiteFooter />
    </div>
  )
}
