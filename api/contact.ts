import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const DOMAIN = process.env.RESEND_EMAIL_DOMAIN
const FROM_ADDRESS = `UPark Contact Form <onboarding@${DOMAIN}>`

const ROLES = ['Student', 'University Rep', 'Investor', 'Other']
const SUBJECTS: Record<string, string> = {
  general: 'General Inquiry',
  partnership: 'Partnership Opportunity',
  onboarding: 'University Onboarding',
  investor: 'Investor Relations',
  media: 'Media & Press',
  bug: 'Report a Bug',
  other: 'Something Else',
}

// Route by subject: investor/partnership inquiries go to their own inbox,
// everything else lands in the general contact inbox.
const SUBJECT_ROUTES: Record<string, string> = {
  investor: `investors@${DOMAIN}`,
  partnership: `partnerships@${DOMAIN}`,
}
const DEFAULT_TO_ADDRESS = `contact@${DOMAIN}`

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { fullName, email, role, subject, message } = req.body ?? {}

  if (
    typeof fullName !== 'string' ||
    typeof email !== 'string' ||
    typeof role !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    !fullName.trim() ||
    !email.trim() ||
    !ROLES.includes(role) ||
    !SUBJECTS[subject] ||
    !message.trim()
  ) {
    return res.status(400).json({ error: 'Invalid or missing fields' })
  }

  try {
    const toAddress = SUBJECT_ROUTES[subject] ?? DEFAULT_TO_ADDRESS
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [toAddress],
      replyTo: email,
      subject: `[${SUBJECTS[subject]}] ${fullName}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(SUBJECTS[subject])}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    })

    if (error) {
      return res.status(502).json({ error: error.message })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
