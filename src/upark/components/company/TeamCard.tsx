import { LinkedInIcon } from './icons'

type TeamCardProps = {
  initials: string
  name: string
  role: string
  bio: string[]
  bioItalic?: boolean
  linkedIn?: string
}

export default function TeamCard({
  initials,
  name,
  role,
  bio,
  bioItalic = false,
  linkedIn = '#',
}: TeamCardProps) {
  return (
    <div className="team-card flex flex-col gs-stagger-item">
      <div className="team-portrait">
        <div className="portrait-placeholder">{initials}</div>
      </div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-3xl font-bold tracking-tight mb-1">{name}</h3>
          <p className="t-mono">{role}</p>
        </div>
        <a
          href={linkedIn}
          className="text-gray-400 hover:text-brand transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
      {bio.map((para, i) => (
        <p
          key={i}
          className={`t-body-m text-gray-500${i > 0 ? ' mt-4' : ''}${
            bioItalic ? ' italic' : ''
          }`}
        >
          {para}
        </p>
      ))}
    </div>
  )
}
