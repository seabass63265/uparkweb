import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll animations for the Contact page. Scoped to `root` via gsap.context
 * so selectors resolve inside the page and everything tears down on unmount.
 */
export function initContactAnimations(root: HTMLElement): () => void {
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
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: container, start: 'top 80%' },
        },
      )
    })
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
