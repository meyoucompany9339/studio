import { Languages } from 'lucide-react'
import { useTranslation } from '../../i18n/LanguageProvider'

export default function LanguageToggle({ className = '' }) {
  const { locale, toggleLocale, t } = useTranslation()
  const nextLabel = locale === 'uk' ? t('lang.switchToEn') : t('lang.switchToUk')

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={nextLabel}
      className={`inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-white/80 transition hover:border-[#FF8C00]/35 hover:bg-[#FF8C00]/10 hover:text-white ${className}`}
    >
      <Languages className="h-3.5 w-3.5 text-[#FFB347]" strokeWidth={2} />
      <span className="tracking-wide">{locale === 'uk' ? t('lang.en') : t('lang.uk')}</span>
    </button>
  )
}
