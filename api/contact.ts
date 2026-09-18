import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { AUDIENCES } from '../src/shared/contact.ts'

const resend = new Resend(process.env.RESEND_API_KEY)
const DOMAIN = process.env.RESEND_EMAIL_DOMAIN
const FROM_ADDRESS = `UPark Contact Form <onboarding@${DOMAIN}>`

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  const { fullName, email, audience, subject, organization, message } = req.body ?? {}

  const audienceConfig = AUDIENCES.find((a) => a.value === audience)
  const subjectConfig = audienceConfig?.subjects.find((s) => s.value === subject)

  if (
    typeof fullName !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !fullName.trim() ||
    !EMAIL_PATTERN.test(email.trim()) ||
    !message.trim() ||
    fullName.length > 200 ||
    email.length > 320 ||
    message.length > 5000 ||
    !audienceConfig ||
    !subjectConfig ||
    (organization !== undefined &&
      (typeof organization !== 'string' || organization.length > 200))
  ) {
    return res.status(400).json({ error: 'Invalid or missing fields' })
  }

  const org =
    audienceConfig.orgField && typeof organization === 'string' ? organization.trim() : ''

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [`${audienceConfig.inbox}@${DOMAIN}`],
      replyTo: email.trim(),
      subject: `[${audienceConfig.label}: ${subjectConfig.label}] ${fullName.trim()}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(fullName.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>I am a:</strong> ${escapeHtml(audienceConfig.label)}</p>
        ${
          org && audienceConfig.orgField
            ? `<p><strong>${escapeHtml(audienceConfig.orgField.label)}:</strong> ${escapeHtml(org)}</p>`
            : ''
        }
        <p><strong>Subject:</strong> ${escapeHtml(subjectConfig.label)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, '<br />')}</p>
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
