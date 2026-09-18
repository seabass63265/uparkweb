import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { CheckIcon, InstagramIcon, LinkedInIcon, MapPinIcon, TikTokIcon } from './icons'

const ROLES = ['Student', 'University Rep', 'Investor', 'Other']

const SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'onboarding', label: 'University Onboarding' },
  { value: 'investor', label: 'Investor Relations' },
  { value: 'media', label: 'Media & Press' },
  { value: 'bug', label: 'Report a Bug' },
  { value: 'other', label: 'Something Else' },
]

function RoleRadio({ value, required }: { value: string; required?: boolean }) {
  return (
    <label className="cursor-pointer relative">
      <input
        type="radio"
        name="role"
        value={value}
        required={required}
        className="peer sr-only"
      />
      <div className="px-2 py-3 border border-gray-200 rounded-xl peer-checked:border-brand peer-checked:bg-[rgba(0,68,255,0.05)] peer-checked:text-brand transition-all font-medium text-sm text-center text-gray-600 hover:bg-gray-50 flex items-center justify-center h-full">
        {value}
      </div>
    </label>
  )
}

/** Contact form (left) + direct-contact details (right), with a fading success state. */
export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const formContentRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formEl = e.currentTarget
    if (!formEl.checkValidity()) {
      formEl.reportValidity()
      return
    }

    const data = Object.fromEntries(new FormData(formEl))
    setSending(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setSubmitted(true)
    } catch {
      setError("Something went wrong sending your message. Please try again, or email us directly.")
    } finally {
      setSending(false)
    }
  }

  useEffect(() => {
    if (!submitted) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dur = reduced ? 0 : 0.5

    const tl = gsap.timeline()
    tl.to(formContentRef.current, { opacity: 0, duration: dur, ease: 'power2.inOut' })
      .set(formContentRef.current, { display: 'none' })
      .set(successRef.current, { pointerEvents: 'auto', position: 'relative' })
      .to(successRef.current, { opacity: 1, duration: dur, ease: 'power2.inOut' })

    return () => {
      tl.kill()
    }
  }, [submitted])

  const resetForm = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dur = reduced ? 0 : 0.5

    const tl = gsap.timeline()
    tl.to(successRef.current, { opacity: 0, duration: dur, ease: 'power2.inOut' })
      .set(successRef.current, { pointerEvents: 'none', position: 'absolute' })
      .set(formContentRef.current, { display: 'block' })
      .to(formContentRef.current, { opacity: 1, duration: dur, ease: 'power2.inOut' })
      .add(() => {
        formRef.current?.reset()
        setSubmitted(false)
      })
  }

  return (
    <section className="py-24 md:py-32 bg-white w-full relative" id="contact-form-section">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-7 gs-reveal">
            <div
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden"
              id="form-wrapper"
            >
              <div id="form-content" ref={formContentRef} className="transition-opacity duration-500">
                <form
                  id="contact-form"
                  ref={formRef}
                  className="space-y-8"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-bold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="form-input"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="form-input"
                        placeholder="jane@example.edu"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-3">I am a *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {ROLES.map((role, i) => (
                        <RoleRadio key={role} value={role} required={i === 0} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-black mb-2">
                      Subject *
                    </label>
                    <select id="subject" name="subject" required className="form-input" defaultValue="">
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {SUBJECTS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="form-input resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn py-4 px-10 text-lg w-full md:w-auto disabled:opacity-60"
                    >
                      {sending ? 'SENDING…' : 'SEND MESSAGE →'}
                    </button>
                    {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
                  </div>
                </form>
              </div>

              <div
                id="success-state"
                ref={successRef}
                className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 md:p-12 text-center opacity-0 pointer-events-none z-20"
              >
                <div className="w-20 h-20 bg-[rgba(0,68,255,0.05)] rounded-full flex items-center justify-center mb-6 text-brand">
                  <CheckIcon />
                </div>
                <h3 className="t-h2 text-black mb-4">Message Sent.</h3>
                <p className="t-body-l text-gray-500 max-w-sm mx-auto mb-10">
                  Thanks for reaching out. We&rsquo;ve received your message and
                  will get back to you shortly.
                </p>
                <button
                  type="button"
                  id="reset-form"
                  onClick={resetForm}
                  className="btn btn-outline py-3 px-8"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-12 lg:pt-8 gs-reveal">
            <div>
              <span className="t-mono text-gray-400 mb-4 block">DIRECT EMAIL</span>
              <a
                href="mailto:contact@upark.dev"
                className="t-h2 text-black hover:text-brand transition-colors inline-block pb-1 border-b-2 border-transparent hover:border-brand"
              >
                contact@upark.dev
              </a>
            </div>

            <div className="h-px w-full bg-gray-100" />

            <div>
              <span className="t-mono text-gray-400 mb-4 block">LOCATION</span>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F4F4F6] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MapPinIcon />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-black">Los Angeles, CA</h4>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gray-100" />

            <div>
              <span className="t-mono text-gray-400 mb-4 block">SOCIAL</span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:border-brand hover:text-brand hover:bg-[rgba(0,68,255,0.02)] transition-all"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:border-brand hover:text-brand hover:bg-[rgba(0,68,255,0.02)] transition-all"
                >
                  <TikTokIcon />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:border-brand hover:text-brand hover:bg-[rgba(0,68,255,0.02)] transition-all"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <div className="bg-[#F4F4F6] rounded-2xl p-6 flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-sm font-medium text-gray-600">
                  We typically respond within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
