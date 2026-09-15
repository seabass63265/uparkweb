import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll animations for the Product page. The source design's <script> was
 * truncated in the paste, so these are reconstructed from the element hooks it
 * left behind (`#nav-route`, `#nav-car`, `.res-btn-txt`, `#park-car`, …) and the
 * shared `.gs-reveal` / `.gs-stagger` conventions used elsewhere on the site.
 * Scoped to `root` via gsap.context so everything tears down on unmount.
 */
export function initProductAnimations(root: HTMLElement): () => void {
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

    /* FIND — map pins pop in */
    const pins = gsap.utils.toArray<HTMLElement>('.find-pin')
    if (pins.length) {
      gsap.from(pins, {
        opacity: 0,
        scale: 0.4,
        transformOrigin: 'center bottom',
        duration: 0.6,
        stagger: 0.12,
        ease: 'back.out(2)',
        scrollTrigger: { trigger: '#find', start: 'top 65%' },
      })
    }

    /* DETAILS — the info sheet slides up inside the phone */
    if (root.querySelector('.details-sheet')) {
      gsap.from('.details-sheet', {
        yPercent: 100,
        ease: 'power3.out',
        duration: 1,
        scrollTrigger: { trigger: '#details', start: 'top 60%' },
      })
    }

    /* NAVIGATE — route draws in while the car follows it (scrubbed) */
    if (root.querySelector('#nav-route')) {
      const navTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#navigate',
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 1,
        },
      })
      navTl
        .to('#nav-route', { strokeDashoffset: 0, ease: 'none', duration: 8 }, 0)
        // down the vertical leg (200,100) -> (200,350)  ≈ 31% of the path
        .to('#nav-car', { top: '70%', rotate: 180, ease: 'none', duration: 2.5 }, 0)
        // round the corner and along the horizontal leg (200,350) -> (750,350)
        .to('#nav-car', { rotate: 90, ease: 'none', duration: 0.6 }, 2.5)
        .to('#nav-car', { left: '75%', ease: 'none', duration: 4.9 }, 3.1)
    }

    /* RESERVE — the spot flips from available to reserved */
    const spot = root.querySelector<HTMLElement>('.res-spot')
    const spotTxt = root.querySelector<HTMLElement>('.res-spot-txt')
    if (spot) {
      const flip = gsap.timeline({
        scrollTrigger: { trigger: '#reserve', start: 'top 55%' },
      })
      flip
        .to('.res-btn-txt', { opacity: 0, duration: 0.3 }, 0.4)
        .to('.res-btn-txt-2', { opacity: 1, duration: 0.3 }, 0.6)
        .to(
          spot,
          {
            borderColor: 'var(--brand)',
            backgroundColor: 'rgba(0,68,255,0.08)',
            borderStyle: 'solid',
            duration: 0.4,
          },
          0.6,
        )
        .add(() => {
          if (spotTxt) spotTxt.textContent = 'RESERVED'
        }, 0.7)
    }

    /* PARK — the car slides into the bay and the badge confirms */
    if (root.querySelector('#park-car')) {
      // Hand horizontal centering to GSAP (xPercent) instead of a Tailwind
      // transform class — a class-based transform gets clobbered the moment
      // GSAP writes its own `y`, so the car would drift sideways as it rose.
      gsap.set('#park-car', { xPercent: -50 })

      const parkTl = gsap.timeline({
        scrollTrigger: { trigger: '#park', start: 'top 55%' },
      })
      parkTl
        .to('#park-car', { y: -380, duration: 1.1, ease: 'power2.out' })
        .to('#park-spot', { borderColor: 'var(--brand)', duration: 0.4 }, '-=0.5')
        .fromTo(
          '#park-check',
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(2)' },
          '-=0.2',
        )
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
