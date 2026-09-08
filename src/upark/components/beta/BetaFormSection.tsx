import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const STATUS_OPTIONS = [
  { value: 'Undergraduate', label: 'Undergrad' },
  { value: 'Graduate', label: 'Graduate' },
  { value: 'FacultyStaff', label: 'Faculty / Staff' },
  { value: 'Other', label: 'Other' },
]

const DRIVE_OPTIONS = [
  { value: 'Yes', label: 'Yes' },
  { value: 'Sometimes', label: 'Sometimes' },
  { value: 'No', label: 'No' },
]

const FREQUENCY_OPTIONS = [
  { value: 'everyday', label: 'Nearly Every Day' },
  { value: 'fewtimes', label: 'A Few Times a Week' },
  { value: 'once', label: 'About Once a Week' },
  { value: 'occasionally', label: 'Occasionally' },
  { value: 'never', label: 'I Don’t Currently Park on Campus' },
]

function PillRadio({
  name,
  value,
  label,
  required,
}: {
  name: string
  value: string
  label: string
  required?: boolean
}) {
  return (
    <label className="cursor-pointer relative">
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
        className="peer sr-only"
      />
      <div className="px-3 py-3 border border-gray-200 rounded-xl peer-checked:border-brand peer-checked:bg-[rgba(0,68,255,0.05)] peer-checked:text-brand transition-all font-medium text-sm text-center text-gray-600 hover:bg-gray-50">
        {label}
      </div>
    </label>
  )
}

/** The beta sign-up form with its animated "reserved for you" success state. */
export default function BetaFormSection() {
  const [university, setUniversity] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [successMsg, setSuccessMsg] = useState(
    'Thanks for joining the UPark Beta. We’ll keep you updated as we get closer to our first campus testing.',
  )

  const formContentRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)
  const spotTxtRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formEl = e.currentTarget
    if (!formEl.checkValidity()) {
      formEl.reportValidity()
      return
    }
    if (university === 'lmu') {
      setSuccessMsg(
        'You’ll be among the first to hear when LMU beta testing begins.',
      )
    } else if (university === 'other') {
      setSuccessMsg(
        'We’ve got your campus. As UPark expands, we’ll let you know when we’re heading your way.',
      )
    }
    setSubmitted(true)
  }

  useEffect(() => {
    if (!submitted) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dur = reduced ? 0 : 0.5

    const tl = gsap.timeline()
    tl.to(formContentRef.current, {
      opacity: 0,
      duration: dur,
      ease: 'power2.inOut',
    })
      .set(formContentRef.current, { display: 'none' })
      .set(successRef.current, { pointerEvents: 'auto' })
      // Drop the success panel back into flow so the card keeps its height
      // (the form it replaces was the only thing giving the wrapper a size).
      .set(successRef.current, { position: 'relative' })
      .to(successRef.current, { opacity: 1, duration: dur, ease: 'power2.inOut' })
      .to(
        spotRef.current,
        {
          backgroundColor: '#111111',
          borderColor: '#111111',
          scale: 1.05,
          duration: dur,
        },
        '+=0.2',
      )
      .to(
        spotTxtRef.current,
        { color: '#ffffff', opacity: 0, duration: dur / 2 },
        '-=0.2',
      )
      .add(() => {
        if (spotTxtRef.current) spotTxtRef.current.textContent = 'RESERVED FOR YOU'
      })
      .to(spotTxtRef.current, { opacity: 1, duration: dur / 2 })

    return () => {
      tl.kill()
    }
  }, [submitted])

  return (
    <section
      id="join-beta"
      className="py-32 bg-[var(--bg)] w-full border-t border-gray-100 min-h-screen flex items-center"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 relative">
        <div className="text-center mb-16 gs-reveal">
          <h2 className="t-h1 text-black text-balance mb-4">Get on the list.</h2>
          <p className="t-body-l text-gray-500">A few details and you&rsquo;re in.</p>
        </div>

        <div
          className="max-w-3xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-200 gs-reveal relative overflow-hidden"
          id="form-wrapper"
        >
          <div
            id="form-content"
            ref={formContentRef}
            className="transition-opacity duration-500"
          >
            <form id="beta-form" className="space-y-8" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="form-input"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="form-input"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-black mb-2"
                >
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

              <div>
                <label
                  htmlFor="university"
                  className="block text-sm font-bold text-black mb-2"
                >
                  University *
                </label>
                <select
                  id="university"
                  name="university"
                  required
                  className="form-input"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                >
                  <option value="" disabled>
                    Select your campus
                  </option>
                  <option value="lmu">Loyola Marymount University</option>
                  <option value="other">Other University</option>
                </select>
              </div>

              {university === 'other' && (
                <div className="overflow-hidden transition-all duration-300">
                  <label
                    htmlFor="otherUniversityName"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    University Name *
                  </label>
                  <input
                    type="text"
                    id="otherUniversityName"
                    name="otherUniversityName"
                    required
                    className="form-input"
                    placeholder="Enter your university name"
                  />
                </div>
              )}

              <div className="space-y-8 pt-4 border-t border-gray-100">
                <div>
                  <label className="block text-sm font-bold text-black mb-3">
                    Student Status *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {STATUS_OPTIONS.map((o, i) => (
                      <PillRadio
                        key={o.value}
                        name="status"
                        value={o.value}
                        label={o.label}
                        required={i === 0}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-3">
                    Do You Currently Drive to Campus? *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {DRIVE_OPTIONS.map((o, i) => (
                      <PillRadio
                        key={o.value}
                        name="drive"
                        value={o.value}
                        label={o.label}
                        required={i === 0}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="frequency"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    How Often Do You Usually Need Campus Parking? *
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    required
                    className="form-input"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select frequency
                    </option>
                    {FREQUENCY_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="frustration"
                    className="block text-sm font-bold text-black mb-2"
                  >
                    What&rsquo;s your biggest frustration with campus parking?{' '}
                    <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="frustration"
                    name="frustration"
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Tell us what drives you crazy about parking..."
                  />
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <div className="flex items-center h-5">
                    <input
                      id="feedback"
                      name="feedback"
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 text-brand focus:ring-brand accent-brand cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor="feedback"
                    className="text-sm text-gray-600 font-medium cursor-pointer"
                  >
                    I&rsquo;d be interested in providing feedback during the UPark
                    beta.
                  </label>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col items-center">
                <button
                  type="submit"
                  className="btn py-4 px-12 text-lg w-full md:w-auto"
                >
                  JOIN THE BETA →
                </button>
                <p className="text-xs text-gray-400 mt-4 text-center max-w-md">
                  By joining, your information will be used for UPark beta
                  communication and product research. Joining the waitlist does
                  not automatically guarantee beta access.
                </p>
              </div>
            </form>
          </div>

          <div
            id="success-state"
            ref={successRef}
            className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 md:p-12 text-center opacity-0 pointer-events-none z-20"
          >
            <div
              className="mb-10 w-48 h-20 border-4 border-dashed border-gray-200 rounded-xl flex items-center justify-center relative bg-gray-50"
              id="success-spot"
              ref={spotRef}
            >
              <div
                className="text-gray-400 font-black text-sm z-10 tracking-widest"
                id="success-spot-txt"
                ref={spotTxtRef}
              >
                AVAILABLE
              </div>
            </div>

            <h3 className="t-h1 text-black mb-4">YOU'RE ON THE LIST.</h3>
            <p className="t-body-l text-gray-500 max-w-md mx-auto mb-10">
              {successMsg}
            </p>

            <Link to="/" className="btn btn-outline py-3 px-8 bg-gray-50">
              BACK TO UPARK
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
