import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants = {
  primary:
    'rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#FFB347] text-black shadow-lg shadow-[#FF8C00]/20 hover:brightness-110',
  secondary:
    'rounded-xl border border-white/15 bg-transparent text-white hover:border-white/25 hover:bg-white/[0.04]',
  ghost: 'text-muted hover:text-white',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  className = '',
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
