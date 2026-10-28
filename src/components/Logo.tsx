// The <RA/> logo, drawn as paths (not text) so it looks the same on every device.
// Colours come from the theme variables, so it flips with dark/light mode.
type LogoProps = { className?: string }

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 210 80"
      className={className}
      role="img"
      aria-label="RA logo"
      fill="none"
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline stroke="var(--primary)" points="34,18 12,40 34,62" />
      <path stroke="var(--text)" d="M52,64 V16 H72 a14,14 0 0 1 0,28 H52 M68,44 L88,64" />
      <path stroke="var(--text)" d="M98,64 L118,16 L138,64 M106,46 H130" />
      <path stroke="var(--accent)" d="M150,64 L168,16" />
      <polyline stroke="var(--primary)" points="176,18 198,40 176,62" />
    </svg>
  )
}
