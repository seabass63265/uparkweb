import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll + ambient animations for the Join the Beta page, ported from the
 * source design's <script>. Scoped to `root` via gsap.context so selectors
 * resolve inside the page and everything tears down on unmount.
 */
export function initBetaAnimations(root: HTMLElement): () => void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const ctx = gsap.context(() => {
    /* Generic fade-up reveals */
    gsap.utils.toArray<HTMLElement>('.gs-reveal').forEach((elem) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: reduced ? 0 : 40 },
        {
          opacity: 1,
          y: 0,
          duration: reduced ? 0 : 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: elem, start: 'top 85%' },
        },
      )
    })

    /* Stagger the direct children of every .gs-stagger container */
    gsap.utils.toArray<HTMLElement>('.gs-stagger').forEach((container) => {
      gsap.fromTo(
        container.children,
        { opacity: 0, y: reduced ? 0 : 30 },
        {
          opacity: 1,
          y: 0,
          duration: reduced ? 0 : 0.8,
          stagger: reduced ? 0 : 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: container, start: 'top 80%' },
        },
      )
    })

    /* Hero — a car noses in and claims the reserved spot, on a loop */
    if (!reduced && root.querySelector('#hero-car')) {
      const heroTl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
      heroTl
        .fromTo(
          '#hero-car',
          { left: '-20%' },
          { left: '20%', duration: 1.5, ease: 'power2.inOut' },
        )
        .to('#hero-car', { rotation: 90, duration: 0.5, ease: 'power2.inOut' })
        .to('#hero-car', { left: '75%', duration: 1.2, ease: 'power2.inOut' })
        .to(
          '#hero-target-spot',
          {
            borderColor: 'var(--brand)',
            backgroundColor: 'rgba(0,68,255,0.05)',
            duration: 0.3,
          },
          '-=0.2',
        )
        .to('#hero-car', { opacity: 0, duration: 0.3, delay: 1 })
        .set('#hero-target-spot', {
          borderColor: 'rgba(0,68,255,0.2)',
          backgroundColor: 'rgba(0,68,255,0.05)',
        })
    }
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
