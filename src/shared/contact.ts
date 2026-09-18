export type AudienceValue = 'student' | 'university' | 'investor' | 'partner'

export const EMAIL_DOMAIN = 'upark.dev'
export const DEFAULT_INBOX = 'contact'

export type Audience = {
  value: AudienceValue
  label: string
  inbox: string
  subjects: { value: string; label: string }[]
  orgField: { label: string; placeholder: string } | null
}

export const AUDIENCES: Audience[] = [
  {
    value: 'student',
    inbox: 'contact',
    label: 'Student',
    subjects: [
      { value: 'feedback', label: 'App Feedback' },
      { value: 'general', label: 'General Question' },
      { value: 'other', label: 'Other' },
    ],
    orgField: null,
  },
  {
    value: 'university',
    inbox: 'partnerships',
    label: 'University',
    subjects: [
      { value: 'campus-pilot', label: 'Campus Pilot' },
      { value: 'partnership', label: 'University Partnership' },
      { value: 'presentation', label: 'UPark Presentation' },
      { value: 'general', label: 'General Inquiry' },
      { value: 'other', label: 'Other' },
    ],
    orgField: {
      label: 'University / Organization',
      placeholder: 'Loyola Marymount University',
    },
  },
  {
    value: 'investor',
    inbox: 'investors',
    label: 'Investor',
    subjects: [
      { value: 'investment', label: 'Investment Inquiry' },
      { value: 'materials', label: 'Request Investor Materials' },
      { value: 'meeting', label: 'Meeting / Introduction' },
      { value: 'general', label: 'General Inquiry' },
      { value: 'other', label: 'Other' },
    ],
    orgField: {
      label: 'Firm / Organization',
      placeholder: 'Organization name',
    },
  },
  {
    value: 'partner',
    inbox: 'partnerships',
    label: 'Partner / Business',
    subjects: [
      { value: 'partnership', label: 'Partnership Opportunity' },
      { value: 'provider', label: 'Parking Provider' },
      { value: 'property', label: 'Property / Parking Inquiry' },
      { value: 'business', label: 'Business Inquiry' },
      { value: 'other', label: 'Other' },
    ],
    orgField: {
      label: 'Company / Organization',
      placeholder: 'Company name',
    },
  },
]
