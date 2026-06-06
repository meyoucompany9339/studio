import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Languages } from 'lucide-react'
import { useTranslation } from '../../i18n/LanguageProvider'
import { SUPPORTED_LOCALES } from '../../i18n/translations'

export default function LanguageToggle({ className = '' }) {
  const { locale, setLocale, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  const options = SUPPORTED_LOCALES.map((code) => ({
    code,
    label: t(`lang.${code}`),
  }))

  const current = options.find((option) => option.code === locale) ?? options[0]

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={t('lang.choose')}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.04] px-2 py-1.5 text-[10px] font-semibold text-white/80 transition hover:border-[#FF8C00]/35 hover:bg-[#FF8C00]/10 hover:text-white md:gap-2 md:px-3.5 md:py-2 md:text-xs"
      >
        <Languages className="h-3 w-3 text-[#FFB347] md:h-3.5 md:w-3.5" strokeWidth={2} />
        <span className="tracking-wide">{current.label}</span>
        <ChevronDown
          className={`h-3 w-3 text-white/45 transition-transform md:h-3.5 md:w-3.5 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('lang.choose')}
          className="absolute end-0 top-[calc(100%+0.4rem)] z-50 min-w-[5.5rem] overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]/95 py-1 shadow-xl shadow-black/40 backdrop-blur-xl"
        >
          {options.map(({ code, label }) => {
            const active = code === locale
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(code)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center px-3 py-2 text-start text-[11px] font-semibold transition md:text-xs ${
                    active
                      ? 'bg-[#FF8C00]/15 text-[#FFB347]'
                      : 'text-white/75 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
