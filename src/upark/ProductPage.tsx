import { useLayoutEffect, useRef } from 'react'
import './product.css'
import { initProductAnimations } from './productAnimations'
import ProductNav from './components/product/ProductNav'
import ProductHero from './components/product/ProductHero'
import FindSection from './components/product/FindSection'
import DetailsSection from './components/product/DetailsSection'
import ReserveSection from './components/product/ReserveSection'
import NavigateSection from './components/product/NavigateSection'
import ParkSection from './components/product/ParkSection'
import SubscriptionSection from './components/product/SubscriptionSection'
import JourneyStrip from './components/product/JourneyStrip'
import JoinSection from './components/product/JoinSection'
import SiteFooter from './components/SiteFooter'
import BackToTop from './components/company/BackToTop'

/** UPark — Product page (/product). */
export default function ProductPage() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!rootRef.current) return
    return initProductAnimations(rootRef.current)
  }, [])

  return (
    <div className="upark-product" id="top" ref={rootRef}>
      <ProductNav />
      <ProductHero />
      <JourneyStrip />
      <FindSection />
      <DetailsSection />
      <ReserveSection />
      <NavigateSection />
      <ParkSection />
      <SubscriptionSection />
      <JoinSection />
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
