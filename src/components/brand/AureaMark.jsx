/** Ексклюзивний знак AUREA — золотий апекс і орбітальна дуга */
export default function AureaMark({ className = 'h-10 w-10', ...props }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient id="aurea-gold" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5E6C8" />
          <stop offset="0.35" stopColor="#FFB347" />
          <stop offset="0.7" stopColor="#FF8C00" />
          <stop offset="1" stopColor="#C9A227" />
        </linearGradient>
        <linearGradient id="aurea-shine" x1="20" y1="6" x2="20" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id="aurea-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="11"
        className="fill-[#080808] stroke-white/[0.08]"
        strokeWidth="1"
      />
      <path
        d="M32 14.5a14 14 0 0 0-24-4.2"
        stroke="url(#aurea-gold)"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M8 25.5a14 14 0 0 0 24 4.2"
        stroke="url(#aurea-gold)"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.35"
      />
      <g filter="url(#aurea-glow)">
        <path
          d="M20 11.5 12.25 28h3.1L17.2 22.2h5.6L24.65 28h3.1L20 11.5Z"
          fill="url(#aurea-gold)"
        />
        <path d="M17.35 20.2h5.3l2.65-4.35h-10.6l2.65 4.35Z" fill="#050505" fillOpacity="0.85" />
      </g>
      <circle cx="20" cy="11" r="1.35" fill="url(#aurea-gold)" />
      <path d="M14 30h12" stroke="url(#aurea-shine)" strokeWidth="0.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}
