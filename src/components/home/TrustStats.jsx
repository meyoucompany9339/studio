import { Trophy, Zap, Star, Headphones } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

export default function TrustStats() {
  const { t } = useTranslation()

  const stats = [
    { icon: Trophy, ...t('trust.stats.sites'), hasValue: true },
    { icon: Zap, ...t('trust.stats.weeks'), hasValue: true },
    { icon: Star, ...t('trust.stats.clients'), hasValue: true },
    { icon: Headphones, ...t('trust.stats.support'), hasValue: false },
  ]

  return (
    <section className="section-py border-y border-white/[0.06] bg-surface-elevated max-md:!pt-6 max-md:!pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('trust.badge')}
          title={t('trust.title')}
          description={t('trust.desc')}
        />

        {/* Мобільна — компактна 2×2 */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {stats.map(({ label, mobileLine }) => (
            <article
              key={label}
              className="glass-strong gradient-border flex items-center justify-center rounded-lg px-2 py-3 text-center"
            >
              <p className="font-display text-[1.35rem] font-bold leading-none tracking-tight">
                <span className="gradient-text">{mobileLine}</span>
              </p>
            </article>
          ))}
        </div>

        {/* Десктоп — як раніше */}
        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stats.map(({ icon: Icon, value, suffix, label, desc, hasValue }) => (
            <article
              key={label}
              className="glass-strong gradient-border group rounded-2xl p-6 transition hover:-translate-y-0.5 sm:p-7"
            >
              <Icon
                className="mb-4 h-8 w-8 text-[#FF8C00] transition group-hover:scale-105"
                strokeWidth={1.5}
              />
              {hasValue ? (
                <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                  <span className="gradient-text">{value}</span>
                  {suffix && (
                    <span className="ml-1.5 text-lg font-semibold text-white/90 sm:text-xl">
                      {suffix}
                    </span>
                  )}
                </p>
              ) : (
                <p className="font-display text-xl font-bold leading-snug text-[#FFB347] sm:text-2xl">
                  {label}
                </p>
              )}
              {hasValue && <p className="mt-1 text-sm font-semibold text-white">{label}</p>}
              <p
                className={`text-xs leading-relaxed text-muted sm:text-sm ${hasValue ? 'mt-2' : 'mt-3'}`}
              >
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
