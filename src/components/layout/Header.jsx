import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { to: '/', label: 'Головна' },
  { to: '/spivpratsia', label: 'Модель' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-[#FFB347]' : 'text-white/55 hover:text-white'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="relative z-10 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF8C00] to-[#FFB347] text-black">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold text-white">Studio</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="relative z-10 hidden md:block">
          <Button
            to="/spivpratsia"
            variant="primary"
            className="!rounded-full !py-2.5 !px-5 !text-xs"
          >
            Обрати формат
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 rounded-lg p-2 text-muted hover:bg-white/5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#050505]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/spivpratsia" variant="primary" className="mt-2 w-full" onClick={() => setMobileOpen(false)}>
              Обрати формат
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
