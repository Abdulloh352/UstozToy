export function Ornament({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 28"
      className={`mx-auto h-7 w-56 text-gold ${className}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M8 14h86M186 14h86"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <path
        d="M140 4c8 6 12 10 12 10s-4 4-12 10c-8-6-12-10-12-10s4-4 12-10Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="118" cy="14" r="2.2" fill="currentColor" />
      <circle cx="162" cy="14" r="2.2" fill="currentColor" />
    </svg>
  )
}

export function PaisleyCorner({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden>
      <path
        d="M8 72c0-32 16-48 40-56 4 20-4 36-16 44 12-4 24 2 28 16"
        stroke="#c9a227"
        strokeWidth="1.4"
        opacity="0.65"
      />
      <path
        d="M22 70c8-18 22-26 36-28"
        stroke="#c45c7a"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle cx="20" cy="28" r="2" fill="#e8b4c4" />
    </svg>
  )
}
