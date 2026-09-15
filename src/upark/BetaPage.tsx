import { useLayoutEffect, useRef } from 'react'
import './beta.css'
import { initBetaAnimations } from './betaAnimations'
import BetaNav from './components/beta/BetaNav'
import BetaHero from './components/beta/BetaHero'
import BetaLmuSection from './components/beta/BetaLmuSection'
import BetaBenefitsSection from './components/beta/BetaBenefitsSection'
import BetaStepsSection from './components/beta/BetaStepsSection'
import BetaFormSection from './components/beta/BetaFormSection'
import SiteFooter from './components/SiteFooter'

/** UPark — Join the Beta page (/join). */
export default function BetaPage() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!rootRef.current) return
    return initBetaAnimations(rootRef.current)
  }, [])

  return (
    <div className="upark-beta" id="top" ref={rootRef}>
      <BetaNav />
      <BetaHero />
      <BetaLmuSection />
      <BetaBenefitsSection />
      <BetaStepsSection />
      <BetaFormSection />
      <SiteFooter active="join" />
    </div>
  )
}
