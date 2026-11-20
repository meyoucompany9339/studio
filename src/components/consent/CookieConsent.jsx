import { useTranslation } from '../../i18n/LanguageProvider'
import { useAnalyticsConsent } from '../../analytics/AnalyticsProvider'

export default function CookieConsent() {
  const { t } = useTranslation()
  const { showBanner, acceptAnalytics, declineAnalytics } = useAnalyticsConsent()

  if (!showBanner) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('cookies.title')}
      className="fixed inset-x-0 bottom-0 z-[90] p-3 sm:p-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl sm:flex-row sm:items-center sm:gap-5 sm:p-5">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">{t('cookies.title')}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
            {t('cookies.desc')}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={declineAnalytics}
            className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:bg-white/[0.04]"
          >
            {t('cookies.decline')}
          </button>
          <button
            type="button"
            onClick={acceptAnalytics}
            className="rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-4 py-2.5 text-sm font-bold text-black shadow-lg shadow-[#FF8C00]/20 transition hover:brightness-110"
          >
            {t('cookies.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
