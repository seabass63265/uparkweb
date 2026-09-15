/** Shared inline SVGs for the Company page. */

export function ArrowRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function LinkedInIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      aria-hidden="true"
    >
      <rect width="256" height="256" fill="none" />
      <path
        d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm-16,176H160V140c0-11-8.95-20-20-20s-20,8.95-20,20v60H80V96h40v15.34C128.27,101.44,142.17,92,160,92c22.09,0,40,17.91,40,40Z"
        fill="currentColor"
      />
      <rect x="80" y="96" width="40" height="104" fill="currentColor" />
      <circle cx="100" cy="60" r="20" fill="currentColor" />
    </svg>
  )
}
