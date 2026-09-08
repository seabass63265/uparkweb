import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wires up every scroll-driven animation from the original design.
 * Scoped to `root` via gsap.context so all selectors resolve inside the
 * landing page and everything can be torn down on unmount.
 */
export function initUparkAnimations(root: HTMLElement): () => void {
  const ctx = gsap.context(() => {
    /* PROBLEM — strike through the old journey, reveal the new one */
    const probTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.problem-sec',
        start: 'center center',
        end: '+=50%',
        scrub: 1,
        pin: true,
      },
    })
    probTl
      .to('.strike-line', { width: '110%', duration: 1, ease: 'none' })
      .to('.old-journey', { opacity: 0, y: -20, duration: 0.5 }, '+=0.2')
      .to('.new-journey', { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')

    /* REVEAL — phone slides up, pins pop in */
    gsap.to('#mainPhone', {
      scrollTrigger: {
        trigger: '.reveal-sec',
        start: 'top 60%',
        end: 'center center',
        scrub: 1,
      },
      y: 0,
      opacity: 1,
      ease: 'power3.out',
    })
    gsap.to('.reveal-sec .map-pin', {
      scrollTrigger: { trigger: '.reveal-sec', start: 'center 80%' },
      scale: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    })

    /* HOW IT WORKS — three pinned steps, dynamic phone reacts.
       Steps are switched by progress threshold (one visible at a time, quick
       CSS swap) rather than crossfaded through the scrubbed timeline. */
    const steps = gsap.utils.toArray<HTMLElement>('.hiw-step')
    const setActiveStep = (idx: number) => {
      steps.forEach((el, i) => el.classList.toggle('active', i === idx))
      const pin = root.querySelector<HTMLElement>('#dynPin')
      if (pin) {
        pin.textContent =
          idx === 2 ? 'NAVIGATING...' : idx === 1 ? 'SELECTED' : 'AVAILABLE'
      }
    }

    const hiwTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hiw-sec',
        start: 'top top',
        end: '+=200%',
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          setActiveStep(self.progress > 0.7 ? 2 : self.progress > 0.37 ? 1 : 0)
        },
      },
    })
    hiwTl
      .to('#dynamicMap .map-grid', { scale: 2, x: -50, y: 50 }, 0)
      .to('#hiw-radar', { opacity: 1, scale: 1.3 }, 0.35)
      .to('#dynPin', { backgroundColor: '#111' }, 0.35)
      .to('#dynLine1', { width: '80%' }, 0.35)
      .to('#dynamicMap .map-grid', { scale: 3, x: -100, y: 150 }, 0.7)
      .to('#hiw-radar', { opacity: 0 }, 0.7)
      .to('#dynPin', { backgroundColor: '#00C853', y: -100 }, 0.7)
      .to('#dynBtn', { backgroundColor: '#00C853' }, 0.7)

    /* CAMPUS — timeline stops rise in sequence */
    gsap.from('.campus-sec .time-stop', {
      scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
      opacity: 0,
      y: 24,
      stagger: 0.15,
      ease: 'power2.out',
    })

    /* TWO SIDES — panels split apart, logo snaps in */
    const tsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.two-sides-sec',
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true,
      },
    })
    tsTl
      .to('.ts-panel.driver', { xPercent: -20, opacity: 0, duration: 1 })
      .to('.ts-panel.provider', { xPercent: 20, opacity: 0, duration: 1 }, '<')
      .to(
        '.ts-center-logo',
        { scale: 1, duration: 1, ease: 'back.out(1.5)' },
        '-=0.5',
      )

    /* UNIVERSITIES — data node labels drift in */
    gsap.to('.node-label', {
      scrollTrigger: { trigger: '.uni-sec', start: 'top 60%' },
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: 'power2.out',
    })

    /* VISION — text hands off to the network graph */
    const visTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.vision-sec',
        start: 'top top',
        end: '+=150%',
        scrub: 1,
        pin: true,
      },
    })
    visTl
      .to('.v-text-1', { opacity: 1, y: -50, duration: 1 })
      .to('.v-text-1', { opacity: 0, y: -100, duration: 1 }, '+=1')
      .to('.network-canvas', { opacity: 1, scale: 1.2, duration: 2 }, '-=1')
      .to('.v-text-2', { opacity: 1, y: 0, duration: 1 }, '+=0.5')
  }, root)

  // Layout shifts once webfonts land — recalculate trigger positions.
  const refresh = () => ScrollTrigger.refresh()
  window.addEventListener('load', refresh)
  const fonts = (document as Document & { fonts?: FontFaceSet }).fonts
  fonts?.ready.then(refresh).catch(() => {})

  return () => {
    window.removeEventListener('load', refresh)
    ctx.revert()
  }
}
