import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../brand/Logo'
import Button from '../ui/Button'
import LanguageToggle from '../ui/LanguageToggle'
import { useTranslation } from '../../i18n/LanguageProvider'
import { scrollToHero } from '../../utils/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const navLinks = [
    { to: '/', label: t('nav.home'), isHome: true },
    { to: '/spivpratsia', label: t('nav.formats') },
    { to: '/spivpratsia#faq', label: t('nav.faq'), isHash: true },
  ]

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors whitespace-nowrap ${isActive ? 'text-[#FFB347]' : 'text-white/55 hover:text-white'}`

  const handleHomeClick = (e) => {
    setMobileOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      scrollToHero()
      return
    }
    navigate('/')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050505]/85 backdrop-blur-xl">
      <div className="relative mx-auto flex h-12 max-w-7xl items-center justify-between px-3 sm:px-6 md:h-16 lg:px-8">
        <div className="relative z-10">
          <Logo onHomeClick={handleHomeClick} />
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) =>
            link.isHome ? (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={handleHomeClick}
              >
                {link.label}
              </NavLink>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => {
                  if (link.isHash && location.pathname === '/spivpratsia') {
                    const id = link.to.split('#')[1]
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                  }
                  setMobileOpen(false)
                }}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="relative z-10 hidden items-center gap-3 md:flex">
          <Button
            href="#kontakt"
            variant="primary"
            className="!rounded-full !px-7 !py-3.5 !text-sm !font-bold !shadow-[0_0_22px_rgba(255,140,0,0.45),0_4px_20px_rgba(255,140,0,0.3)] hover:!shadow-[0_0_32px_rgba(255,140,0,0.55),0_6px_28px_rgba(255,140,0,0.4)] hover:!brightness-110"
          >
            {t('nav.contact')}
          </Button>
          <LanguageToggle />
        </div>

        <div className="relative z-10 flex items-center gap-1.5 md:hidden">
          <button
            type="button"
            className="rounded-lg p-1.5 text-muted hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
          <LanguageToggle />
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#050505]/95 px-3 py-3 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) =>
              link.isHome ? (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={linkClass}
                  onClick={handleHomeClick}
                >
                  {link.label}
                </NavLink>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={linkClass}
                  onClick={() => {
                    if (link.isHash && location.pathname === '/spivpratsia') {
                      const id = link.to.split('#')[1]
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    setMobileOpen(false)
                  }}
                >
                  {link.label}
                </NavLink>
              ),
            )}
            <Button
              href="#kontakt"
              variant="primary"
              className="mt-2 w-full !py-3 !text-sm !font-bold !shadow-[0_0_22px_rgba(255,140,0,0.45),0_4px_20px_rgba(255,140,0,0.3)]"
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.contact')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
