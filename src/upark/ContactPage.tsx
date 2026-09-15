import { useLayoutEffect, useRef } from 'react'
import './contact.css'
import { initContactAnimations } from './contactAnimations'
import ContactNav from './components/contact/ContactNav'
import ContactHero from './components/contact/ContactHero'
import ContactFormSection from './components/contact/ContactFormSection'
import SiteFooter from './components/SiteFooter'
import BackToTop from './components/company/BackToTop'

/** UPark — Contact page (/contact). */
export default function ContactPage() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!rootRef.current) return
    return initContactAnimations(rootRef.current)
  }, [])

  return (
    <div className="upark-contact" id="top" ref={rootRef}>
      <ContactNav />
      <ContactHero />
      <ContactFormSection />
      <SiteFooter active="contact" />
      <BackToTop />
    </div>
  )
}
