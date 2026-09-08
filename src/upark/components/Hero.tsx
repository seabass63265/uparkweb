import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/** How many seconds before the clip ends the headline fades in. */
const REVEAL_BEFORE_END = 2.5

/** Nudge the intro clip a touch faster than real time. */
const PLAYBACK_RATE = 1.6

type HeroProps = {
  /** Shared reveal flag — when true the hero copy resolves in. */
  revealed: boolean
  /** Fired near the end of the intro clip to trigger the reveal. */
  onReveal: () => void
  /** Skip the video intro (returning visitor) — jump straight to the end. */
  skipIntro: boolean
}

/** Full-bleed intro video; the headline resolves in as the clip finishes. */
export default function Hero({ revealed, onReveal, skipIntro }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Returning visitor: hold on the final frame, no playback, reveal now.
    if (skipIntro) {
      const settle = () => {
        if (video.duration && !Number.isNaN(video.duration)) {
          video.currentTime = Math.max(0, video.duration - 0.05)
        }
        video.pause()
      }
      video.addEventListener('loadedmetadata', settle)
      settle()
      onReveal()
      return () => video.removeEventListener('loadedmetadata', settle)
    }

    video.playbackRate = PLAYBACK_RATE
    const onRate = () => {
      video.playbackRate = PLAYBACK_RATE
    }
    video.addEventListener('loadedmetadata', onRate)
    video.addEventListener('play', onRate)

    const onTime = () => {
      if (!video.duration || Number.isNaN(video.duration)) return
      if (video.currentTime >= video.duration - REVEAL_BEFORE_END) {
        onReveal()
      }
    }

    const onEnded = () => {
      onReveal()
      // Hold on the final frame instead of looping.
      video.pause()
      video.currentTime = Math.max(0, video.duration - 0.05)
    }

    video.addEventListener('timeupdate', onTime)
    video.addEventListener('ended', onEnded)

    // Safety net: reveal anyway if playback is blocked or stalls.
    const fallback = window.setTimeout(onReveal, 12000)

    return () => {
      video.removeEventListener('loadedmetadata', onRate)
      video.removeEventListener('play', onRate)
      video.removeEventListener('timeupdate', onTime)
      video.removeEventListener('ended', onEnded)
      window.clearTimeout(fallback)
    }
  }, [onReveal, skipIntro])

  const shown = revealed ? ' is-revealed' : ''

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        src="/uparkintro.MP4"
        autoPlay={!skipIntro}
        muted
        playsInline
        preload={skipIntro ? 'metadata' : 'auto'}
      />

      <div className={`hero-content${shown}`}>
        <h1 className="hero-title">UPark</h1>
        <p className="hero-tagline">Parking, finally figured out.</p>
        <p className="hero-sub">
          The smarter way to find, share, and manage parking around campus.
        </p>

        <div className="hero-actions">
          <a href="#" className="btn hero-btn-primary">
            Explore UPark <span aria-hidden="true">&rarr;</span>
          </a>
          <Link to="/join" className="btn btn-outline">
            Join the Beta
          </Link>
        </div>
      </div>

      <div className={`hero-scroll${shown}`}>
        <span></span>
        <span className="hero-scroll-chevron" aria-hidden="true">
          &#8964;
        </span>
      </div>
    </section>
  )
}
