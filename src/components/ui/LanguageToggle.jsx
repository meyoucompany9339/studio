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
      className={`inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.04] px-2 py-1.5 text-[10px] font-semibold text-white/80 transition hover:border-[#FF8C00]/35 hover:bg-[#FF8C00]/10 hover:text-white md:gap-2 md:px-3.5 md:py-2 md:text-xs ${className}`}
    >
      <Languages className="h-3 w-3 text-[#FFB347] md:h-3.5 md:w-3.5" strokeWidth={2} />
      <span className="tracking-wide">{locale === 'uk' ? t('lang.en') : t('lang.uk')}</span>
    </button>
  )
}
