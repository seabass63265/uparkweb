import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll animations for the Company page, ported from the source design.
 * Scoped to `root` via gsap.context so selectors resolve inside the page and
 * everything tears down on unmount.
 */
export function initCompanyAnimations(root: HTMLElement): () => void {
  const ctx = gsap.context(() => {
    /* Generic fade-up reveals */
    gsap.utils.toArray<HTMLElement>('.gs-reveal').forEach((elem) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: elem, start: 'top 85%' },
        },
      )
    })

    /* Stagger the direct children of every .gs-stagger container */
    gsap.utils.toArray<HTMLElement>('.gs-stagger').forEach((container) => {
      gsap.fromTo(
        container.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: container, start: 'top 80%' },
        },
      )
    })

    /* Team cards */
    const teamItems = gsap.utils.toArray<HTMLElement>('.gs-stagger-item')
    if (teamItems.length) {
      gsap.fromTo(
        teamItems,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: '#team', start: 'top 70%' },
        },
      )
    }

    /* Story route draws in as you scroll the section */
    gsap.to('#routeActive', {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#story',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })

    /* Pinned vision hand-off */
    const visionTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.vision-sec',
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true,
      },
    })
    visionTl
      .to('.v-text-1', { opacity: 0, y: -50, duration: 1 })
      .fromTo(
        '.v-text-2',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5',
      )
  }, root)

  const refresh = () => ScrollTrigger.refresh()
  window.addEventListener('load', refresh)
  const fonts = (document as Document & { fonts?: FontFaceSet }).fonts
  fonts?.ready.then(refresh).catch(() => {})

  return () => {
    window.removeEventListener('load', refresh)
    ctx.revert()
  }
}
