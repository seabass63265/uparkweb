import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll animations for the Investors page. Scoped to `root` via gsap.context
 * so selectors resolve inside the page and everything tears down on unmount.
 */
export function initInvestorsAnimations(root: HTMLElement): () => void {
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

    /* .gs-stagger-item — grouped by their shared parent (e.g. the LMU timeline) */
    const itemParents = new Set<HTMLElement>()
    gsap.utils.toArray<HTMLElement>('.gs-stagger-item').forEach((el) => {
      if (el.parentElement) itemParents.add(el.parentElement)
    })
    itemParents.forEach((parent) => {
      const items = parent.querySelectorAll<HTMLElement>('.gs-stagger-item')
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: parent, start: 'top 75%' },
        },
      )
    })

    /* Progress lines wipe in (opportunity + LMU timeline) */
    const wipeLine = (selector: string, trigger: string) => {
      const el = root.querySelector<HTMLElement>(selector)
      if (!el) return
      gsap.set(el, { scaleX: 0, transformOrigin: 'left center' })
      gsap.to(el, {
        scaleX: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger,
          start: 'top 65%',
          end: 'bottom 60%',
          scrub: 1,
        },
      })
    }
    wipeLine('#opp-line', '#opportunity')
    wipeLine('#lmu-line', '#lmu')

    /* Hero "car" dots fade in and drift */
    gsap.utils.toArray<HTMLElement>('.car-dot').forEach((dot, i) => {
      gsap.to(dot, { opacity: 0.9, duration: 1, delay: 0.6 + i * 0.4 })
      gsap.to(dot, {
        x: i === 0 ? 18 : -14,
        y: i === 0 ? -10 : 12,
        duration: 3 + i,
        delay: 0.6 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    /* Go-to-market network graph draws in */
    const gtmSvg = root.querySelector('#gtm-network')
    if (gtmSvg) {
      gsap.fromTo(
        gtmSvg.querySelectorAll('.gtm-link'),
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 1.4,
          stagger: 0.15,
          ease: 'power1.inOut',
          scrollTrigger: { trigger: '#gtm', start: 'top 70%' },
        },
      )
      gsap.fromTo(
        gtmSvg.querySelectorAll('circle'),
        { scale: 0, transformOrigin: 'center' },
        {
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(2)',
          scrollTrigger: { trigger: '#gtm', start: 'top 70%' },
        },
      )
    }

    /* Timeline dots on the go-to-market rail light up as they enter */
    gsap.utils.toArray<HTMLElement>('.gtm-step').forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: step, start: 'top 80%' },
      })
    })

    /* Closing vision section — pinned hand-off (only if the markup is present) */
    if (root.querySelector('.vision-sec')) {
      const visionTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.vision-sec',
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
        },
      })
      visionTl
        .to('.v-text-1', { opacity: 0, y: -60, duration: 1 })
        .fromTo(
          '.v-text-2',
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.4',
        )
        .to('.vision-svg-group', { scale: 1.35, rotate: 8, duration: 2 }, 0)
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
