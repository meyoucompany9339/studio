import { Link } from 'react-router-dom'
import { Send, Mail, /* Phone, */ ChevronRight } from 'lucide-react'
import Logo from '../brand/Logo'
import { SITE } from '../../config/site'
import { useTranslation } from '../../i18n/LanguageProvider'

const linkMobile = 'text-muted transition hover:text-[#FFB347]'
const linkDesktop = 'transition hover:text-[#FFB347]'

export default function Footer() {
  const { t } = useTranslation()

  const legal = [
    { label: t('footer.privacy'), href: '#' },
    { label: t('footer.terms'), href: '#' },
  ]

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/spivpratsia', label: t('nav.formats') },
    { to: '/spivpratsia#faq', label: t('nav.faq') },
    { to: '/#roboty', label: t('nav.portfolio') },
    { to: '/#vidguky', label: t('nav.reviews') },
  ]

  return (
    <footer className="relative overflow-hidden bg-surface-elevated md:border-t md:border-white/[0.06] md:overflow-visible">
      <div className="site-footer__gold-line h-px w-full shrink-0 md:hidden" aria-hidden />
      <div
        className="site-footer__shade pointer-events-none absolute inset-x-0 top-0 h-20 md:hidden"
        aria-hidden
      />

      {/* ——— Мобільна версія ——— */}
      <div className="relative mx-auto max-w-7xl px-4 py-5 md:hidden">
        <Logo asLink />
        <p className="mt-2 max-w-sm text-xs leading-snug text-muted">
          {SITE.name} — {t('footer.desc')}
        </p>

        <div className="mt-4 grid grid-cols-[minmax(0,1.55fr)_minmax(0,0.85fr)] gap-x-6 gap-y-1">
          <div className="min-w-0 pr-1">
            <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">
              {t('nav.contacts')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-[11px] leading-tight ${linkMobile}`}
                >
                  <Send className="h-3.5 w-3.5 shrink-0 text-[#FF8C00]" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className={`inline-flex min-w-0 items-center gap-1.5 text-[10px] leading-tight ${linkMobile}`}
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#FF8C00]" />
                  <span className="whitespace-nowrap">{SITE.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0 pl-1">
            <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">
              {t('nav.navigation')}
            </h4>
            <ul className="space-y-1 text-muted">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`inline-flex items-center gap-0.5 text-[11px] leading-tight ${linkMobile}`}
                  >
                    <ChevronRight className="h-3 w-3 shrink-0 text-[#FF8C00]" strokeWidth={2} />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-center">
          <p className="text-[11px] leading-snug text-muted">
            © {new Date().getFullYear()} {SITE.name}. {t('footer.rights')}
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-muted">
            <a href={legal[0].href} className={linkMobile}>
              {legal[0].label}
            </a>
            <span className="text-white/25" aria-hidden>
              |
            </span>
            <a href={legal[1].href} className={linkMobile}>
              {legal[1].label}
            </a>
          </p>
        </div>
      </div>

      {/* ——— Десктоп (без змін) ——— */}
      <div className="relative mx-auto hidden max-w-7xl px-4 py-6 sm:px-6 md:block md:py-8 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <Logo asLink />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.name} — {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              {t('nav.contacts')}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 text-sm text-muted ${linkDesktop}`}
                >
                  <Send className="h-4 w-4 text-[#FF8C00]" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className={`group inline-flex items-center gap-2 text-sm text-muted ${linkDesktop}`}
                >
                  <Mail className="h-4 w-4 text-[#FF8C00]" />
                  {SITE.email}
                </a>
              </li>
              {/* <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className={`group inline-flex items-center gap-2 text-sm text-muted ${linkDesktop}`}
                >
                  <Phone className="h-4 w-4 text-[#FF8C00]" />
                  {SITE.phone}
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              {t('nav.navigation')}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link to="/" className={linkDesktop}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/spivpratsia" className={linkDesktop}>
                  {t('nav.formats')}
                </Link>
              </li>
              <li>
                <Link to="/spivpratsia#faq" className={linkDesktop}>
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link to="/#roboty" className={linkDesktop}>
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/#vidguky" className={linkDesktop}>
                  {t('nav.reviews')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name}. {t('footer.rights')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            {legal.map(({ label, href }) => (
              <a key={label} href={href} className={linkDesktop}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
