import { Link, useLocation } from 'react-router-dom'
import { SITE } from '../../config/site'
import { scrollToHero } from '../../utils/navigation'
import AureaMark from './AureaMark'

export default function Logo({ className = '', asLink = true, onHomeClick }) {
  const location = useLocation()

  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative shrink-0">
        <span
          className="pointer-events-none absolute -inset-1 rounded-[14px] bg-[#FF8C00]/20 blur-md"
          aria-hidden
        />
        <AureaMark className="relative h-10 w-10 sm:h-11 sm:w-11" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="logo-wordmark text-[1.05rem] font-semibold text-white sm:text-lg">
          {SITE.shortName}
        </span>
        <span className="logo-sub mt-1 text-[9px] font-medium uppercase tracking-[0.38em] text-[#C9A962]/90 sm:text-[10px]">
          Studio
        </span>
      </span>
    </span>
  )

  const handleClick = (e) => {
    if (onHomeClick) {
      onHomeClick(e)
      return
    }
    if (location.pathname === '/') {
      e.preventDefault()
      scrollToHero()
    }
  }

  if (asLink) {
    return (
      <Link
        to="/"
        onClick={handleClick}
        className="group transition-opacity hover:opacity-90"
        aria-label={`${SITE.name} — на головну`}
      >
        {content}
      </Link>
    )
  }

  return content
}
