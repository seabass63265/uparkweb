import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { AUDIENCES, DEFAULT_INBOX, EMAIL_DOMAIN, type AudienceValue } from '../../../shared/contact'
import { CheckIcon, InstagramIcon, LinkedInIcon, MapPinIcon, TikTokIcon } from './icons'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldName = 'fullName' | 'email' | 'audience' | 'subject' | 'message'
type Errors = Partial<Record<FieldName, string>>

const DRAFT_KEY = 'upark-contact-draft-v1'

type Values = { fullName: string; email: string; organization: string; message: string }
type Draft = Values & { audience: AudienceValue | ''; subject: string }

const EMPTY_DRAFT: Draft = {
  fullName: '',
  email: '',
  organization: '',
  message: '',
  audience: '',
  subject: '',
}

// Drafts live in sessionStorage so an accidental refresh keeps what was typed,
// without leaving personal info behind once the tab is closed.
function loadDraft(): Draft {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY)
    if (!raw) return EMPTY_DRAFT
    const d = JSON.parse(raw) as Record<string, unknown>
    const str = (v: unknown) => (typeof v === 'string' ? v : '')
    const aud = AUDIENCES.find((a) => a.value === d.audience)
    return {
      fullName: str(d.fullName),
      email: str(d.email),
      organization: str(d.organization),
      message: str(d.message),
      audience: aud?.value ?? '',
      subject: aud?.subjects.some((s) => s.value === d.subject) ? str(d.subject) : '',
    }
  } catch {
    return EMPTY_DRAFT
  }
}

function saveDraft(draft: Draft) {
  try {
    const isEmpty = Object.values(draft).every((v) => v === '')
    if (isEmpty) sessionStorage.removeItem(DRAFT_KEY)
    else sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
  } catch {
    // Storage can be unavailable (private mode, quota); the form just won't persist.
  }
}

function clearDraft() {
  try {
    sessionStorage.removeItem(DRAFT_KEY)
  } catch {
    // ignore
  }
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="text-sm text-red-500 mt-2">
      {message}
    </p>
  )
}

/** Contact form (left) + direct-contact details (right). One form that adapts to who is writing. */
export default function ContactFormSection() {
  const [initial] = useState(loadDraft)
  const [audience, setAudience] = useState<AudienceValue | ''>(initial.audience)
  const [subject, setSubject] = useState(initial.subject)
  const [values, setValues] = useState<Values>({
    fullName: initial.fullName,
    email: initial.email,
    organization: initial.organization,
    message: initial.message,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const formContentRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const orgWrapRef = useRef<HTMLDivElement>(null)
  const subjectWrapRef = useRef<HTMLDivElement>(null)
  const emailLinkRef = useRef<HTMLAnchorElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const hasMountedRef = useRef(false)
  const orgMountedRef = useRef(false)

  const audienceConfig = AUDIENCES.find((a) => a.value === audience) ?? null
  const hasOrg = Boolean(audienceConfig?.orgField)
  const directEmail = `${audienceConfig?.inbox ?? DEFAULT_INBOX}@${EMAIL_DOMAIN}`
  // Last audience that had an org field, so its label doesn't go blank while the field collapses.
  const [orgAudience, setOrgAudience] = useState<AudienceValue | null>(
    audienceConfig?.orgField ? audienceConfig.value : null,
  )
  const orgField = AUDIENCES.find((a) => a.value === orgAudience)?.orgField ?? null

  const clearError = (name: FieldName) =>
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))

  // The message box keeps its 4-row minimum and grows with the text instead of scrolling.
  const fitMessageHeight = () => {
    const el = messageRef.current
    if (!el || !el.offsetWidth) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight + el.offsetHeight - el.clientHeight}px`
  }

  useLayoutEffect(fitMessageHeight, [values.message])

  useEffect(() => {
    window.addEventListener('resize', fitMessageHeight)
    return () => window.removeEventListener('resize', fitMessageHeight)
  }, [])

  const setField =
    (name: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.target
      setValues((prev) => ({ ...prev, [name]: value }))
      if (name !== 'organization') clearError(name)
    }

  const selectAudience = (value: AudienceValue) => {
    if (value === audience) return
    setAudience(value)
    if (AUDIENCES.find((a) => a.value === value)?.orgField) setOrgAudience(value)
    setSubject('')
    clearError('audience')
    clearError('subject')
  }

  // The extra organization field eases in/out (height + fade) instead of popping.
  useEffect(() => {
    const el = orgWrapRef.current
    if (!el) return
    // On first paint (e.g. a restored draft) snap to the right state instead of animating in.
    if (!orgMountedRef.current) {
      orgMountedRef.current = true
      gsap.set(el, { height: hasOrg ? 'auto' : 0, opacity: hasOrg ? 1 : 0 })
      return
    }
    const dur = prefersReducedMotion() ? 0 : hasOrg ? 0.4 : 0.3
    const tween = gsap.to(el, {
      height: hasOrg ? 'auto' : 0,
      opacity: hasOrg ? 1 : 0,
      duration: dur,
      ease: hasOrg ? 'power2.out' : 'power2.inOut',
    })
    return () => {
      tween.kill()
    }
  }, [hasOrg])

  // Subject options change per audience — a quick fade signals the swap.
  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      return
    }
    const el = subjectWrapRef.current
    if (!el) return
    const tween = gsap.fromTo(
      el,
      { opacity: 0.35, y: 6 },
      { opacity: 1, y: 0, duration: prefersReducedMotion() ? 0 : 0.3, ease: 'power2.out' },
    )
    return () => {
      tween.kill()
    }
  }, [audience])

  // The sidebar address follows the selected audience; only animate when it actually changes.
  const shownEmailRef = useRef(directEmail)
  useEffect(() => {
    if (shownEmailRef.current === directEmail) return
    shownEmailRef.current = directEmail
    const el = emailLinkRef.current
    if (!el) return
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: prefersReducedMotion() ? 0 : 0.35, ease: 'power2.out' },
    )
    return () => {
      tween.kill()
    }
  }, [directEmail])

  useEffect(() => {
    if (submitted) return
    saveDraft({ ...values, audience, subject })
  }, [values, audience, subject, submitted])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fullName = values.fullName.trim()
    const email = values.email.trim()
    const organization = values.organization.trim()
    const message = values.message.trim()

    const nextErrors: Errors = {}
    if (!fullName) nextErrors.fullName = 'Please enter your name.'
    if (!email) nextErrors.email = 'Please enter your email address.'
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!audience) nextErrors.audience = 'Please select who you are.'
    else if (!subject) nextErrors.subject = 'Please select a subject.'
    if (!message) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)
    setSubmitError(null)

    const firstInvalid = (['fullName', 'email', 'audience', 'subject', 'message'] as const).find(
      (name) => nextErrors[name],
    )
    if (firstInvalid) {
      const target =
        firstInvalid === 'audience'
          ? formRef.current?.querySelector<HTMLElement>('[data-audience]')
          : formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
      target?.focus()
      return
    }

    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          audience,
          subject,
          message,
          ...(hasOrg && organization ? { organization } : {}),
        }),
      })
      if (!res.ok) throw new Error('Failed to send message')
      clearDraft()
      setSubmitted(true)
    } catch {
      setSubmitError(
        'Something went wrong sending your message. Please try again in a moment.',
      )
    } finally {
      setSending(false)
    }
  }

  useEffect(() => {
    if (!submitted) return
    const dur = prefersReducedMotion() ? 0 : 0.5

    const tl = gsap.timeline()
    tl.to(formContentRef.current, { opacity: 0, duration: dur, ease: 'power2.inOut' })
      .set(formContentRef.current, { display: 'none' })
      .set(successRef.current, { pointerEvents: 'auto', position: 'relative' })
      .to(successRef.current, { opacity: 1, duration: dur, ease: 'power2.inOut' })

    return () => {
      tl.kill()
    }
  }, [submitted])

  return (
    <section className="py-24 md:py-32 bg-white w-full relative" id="contact-form-section">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-x-12 lg:gap-y-24 xl:gap-x-24 items-start">
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
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-bold text-black mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          autoComplete="name"
                          className="form-input"
                          placeholder="Jane Doe"
                          aria-invalid={Boolean(errors.fullName)}
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                          value={values.fullName}
                          onChange={setField('fullName')}
                        />
                        <FieldError id="fullName-error" message={errors.fullName} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          className="form-input"
                          placeholder="name@example.edu"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          value={values.email}
                          onChange={setField('email')}
                        />
                        <FieldError id="email-error" message={errors.email} />
                      </div>
                    </div>

                    <div
                      ref={orgWrapRef}
                      className="overflow-hidden"
                      style={{ height: 0, opacity: 0 }}
                      aria-hidden={!hasOrg}
                    >
                      <div className="pt-8">
                        <label
                          htmlFor="organization"
                          className="block text-sm font-bold text-black mb-2"
                        >
                          {orgField?.label}
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          autoComplete="organization"
                          className="form-input"
                          placeholder={orgField?.placeholder}
                          value={values.organization}
                          onChange={setField('organization')}
                          disabled={!hasOrg}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <span id="audience-label" className="block text-sm font-bold text-black mb-3">
                      I am a *
                    </span>
                    <div
                      role="radiogroup"
                      aria-labelledby="audience-label"
                      className="grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-4 gap-3"
                    >
                      {AUDIENCES.map((a, i) => {
                        const selected = a.value === audience
                        return (
                          <button
                            key={a.value}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            data-audience={i === 0 ? '' : undefined}
                            onClick={() => selectAudience(a.value)}
                            className={`px-3 py-4 border rounded-xl transition-all font-medium text-sm text-center flex items-center justify-center h-full cursor-pointer ${
                              selected
                                ? 'border-brand bg-[rgba(0,68,255,0.05)] text-brand'
                                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {a.label}
                          </button>
                        )
                      })}
                    </div>
                    <FieldError id="audience-error" message={errors.audience} />
                  </div>

                  <div ref={subjectWrapRef}>
                    <label htmlFor="subject" className="block text-sm font-bold text-black mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-input disabled:opacity-60 disabled:cursor-not-allowed"
                      value={subject}
                      disabled={!audienceConfig}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      onChange={(e) => {
                        setSubject(e.target.value)
                        clearError('subject')
                      }}
                    >
                      <option value="" disabled>
                        {audienceConfig ? 'Select a subject' : 'Select who you are first'}
                      </option>
                      {audienceConfig?.subjects.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <FieldError id="subject-error" message={errors.subject} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      ref={messageRef}
                      rows={4}
                      className="form-input resize-none overflow-hidden"
                      placeholder="Tell us what's on your mind..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      value={values.message}
                      onChange={setField('message')}
                    />
                    <FieldError id="message-error" message={errors.message} />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn py-4 px-10 text-lg w-full md:w-auto disabled:opacity-60"
                    >
                      {sending ? 'SENDING…' : 'SEND MESSAGE →'}
                    </button>
                    {submitError && (
                      <p role="alert" className="text-sm text-red-500 mt-3">
                        {submitError}
                      </p>
                    )}
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
                <h3 className="t-h2 text-black mb-4">Thanks for reaching out.</h3>
                <p className="t-body-l text-gray-500 max-w-sm mx-auto mb-10">
                  We&rsquo;ll make sure your message gets to the right team.
                </p>
                <Link
                  to="/"
                  className="text-sm font-medium text-gray-500 hover:text-brand transition-colors"
                >
                  Back to UPark →
                </Link>
              </div>
            </div>
          </div>

          <div className="@container lg:col-span-5 flex flex-col gap-12 lg:pt-8 gs-reveal">
            <div>
              <span className="t-mono text-gray-400 mb-4 block">DIRECT EMAIL</span>
              <a
                ref={emailLinkRef}
                href={`mailto:${directEmail}`}
                // Longer addresses shrink to fit the column instead of overflowing it.
                style={{ fontSize: `min(3rem, ${(100 / (directEmail.length * 0.56)).toFixed(2)}cqw)` }}
                className="t-h2 text-black hover:text-brand transition-colors inline-block pb-1 border-b-2 border-transparent hover:border-brand"
              >
                {directEmail}
              </a>
            </div>

            <div className="h-px w-full bg-gray-100" />

            <div>
              <span className="t-mono text-gray-400 mb-4 block">LOCATION</span>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F4F4F6] rounded-full flex items-center justify-center shrink-0">
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
