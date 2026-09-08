import { useLayoutEffect, useRef } from 'react'
import './investors.css'
import { initInvestorsAnimations } from './investorsAnimations'
import InvestorsNav from './components/investors/InvestorsNav'
import InvestorsHero from './components/investors/InvestorsHero'
import OpportunitySection from './components/investors/OpportunitySection'
import PlatformSection from './components/investors/PlatformSection'
import BeachheadSection from './components/investors/BeachheadSection'
import LmuSection from './components/investors/LmuSection'
import GtmSection from './components/investors/GtmSection'
import MarketSection from './components/investors/MarketSection'
import BusinessModelSection from './components/investors/BusinessModelSection'
import TractionSection from './components/investors/TractionSection'
import FoundersSection from './components/investors/FoundersSection'
import InvestSection from './components/investors/InvestSection'
import InvestorsFooter from './components/investors/InvestorsFooter'
import BackToTop from './components/company/BackToTop'

/** UPark — Investors page (/investors). */
export default function InvestorsPage() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!rootRef.current) return
    return initInvestorsAnimations(rootRef.current)
  }, [])

  return (
    <div className="upark-investors" id="top" ref={rootRef}>
      <InvestorsNav />
      <InvestorsHero />
      <OpportunitySection />
      <PlatformSection />
      <BeachheadSection />
      <LmuSection />
      <GtmSection />
      <MarketSection />
      <BusinessModelSection />
      <TractionSection />
      <FoundersSection />
      <InvestSection />
      <InvestorsFooter />
      <BackToTop />
    </div>
  )
}
