import { useLayoutEffect, useRef } from 'react'
import './company.css'
import { initCompanyAnimations } from './companyAnimations'
import CompanyNav from './components/company/CompanyNav'
import CompanyHero from './components/company/CompanyHero'
import StorySection from './components/company/StorySection'
import MissionSection from './components/company/MissionSection'
import TeamSection from './components/company/TeamSection'
import AdvisorsSection from './components/company/AdvisorsSection'
import CompanyVisionSection from './components/company/CompanyVisionSection'
import ContactSection from './components/company/ContactSection'
import SiteFooter from './components/SiteFooter'
import BackToTop from './components/company/BackToTop'

/** UPark — Company page (/company). */
export default function CompanyPage() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!rootRef.current) return
    return initCompanyAnimations(rootRef.current)
  }, [])

  return (
    <div className="upark-company" id="top" ref={rootRef}>
      <CompanyNav />
      <CompanyHero />
      <StorySection />
      <MissionSection />
      <TeamSection />
      <AdvisorsSection />
      <CompanyVisionSection />
      <ContactSection />
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
