import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Optional: add new subscribers to a specific Resend segment (e.g. "Beta waitlist").
const SEGMENT_ID = process.env.RESEND_SEGMENT_ID

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { firstName, lastName, email } = req.body ?? {}

  if (
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    typeof email !== 'string' ||
    !firstName.trim() ||
    !EMAIL_PATTERN.test(email.trim())
  ) {
    return res.status(400).json({ error: 'Invalid or missing fields' })
  }

  try {
    const { error } = await resend.contacts.create({
      email: email.trim().toLowerCase(),
      firstName: firstName.trim(),
      lastName: typeof lastName === 'string' ? lastName.trim() : undefined,
      unsubscribed: false,
      ...(SEGMENT_ID && { segments: [{ id: SEGMENT_ID }] }),
    })

    if (error) {
      return res.status(502).json({ error: error.message })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
