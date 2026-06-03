import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

const planKeys = ['visitka', 'corporate', 'shop', 'saas']

export default function Pricing() {
  const { t } = useTranslation()

  const plans = planKeys.map((key) => ({
    key,
    name: t(`cooperation.pricing.plans.${key}`),
    price:
      key === 'saas'
        ? `${t('cooperation.pricing.from')} ${t(`cooperation.pricing.prices.${key}`)}${t('cooperation.pricing.perMonth')}`
        : `${t('cooperation.pricing.from')} ${t(`cooperation.pricing.prices.${key}`)}`,
    popular: key === 'corporate',
  }))

  return (
    <section className="section-py bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('cooperation.pricing.badge')}
          title={t('cooperation.pricing.title')}
          description={t('cooperation.pricing.desc')}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {plans.map(({ key, name, price, popular }) => (
            <article
              key={key}
              className={`relative rounded-2xl p-6 text-center transition hover:-translate-y-0.5 sm:p-7 ${
                popular
                  ? 'glass-strong gradient-border ring-1 ring-[#FF8C00]/25'
                  : 'glass border border-white/[0.06]'
              }`}
            >
              {popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                  {t('cooperation.pricing.popular')}
                </span>
              )}
              <h3 className="text-sm font-semibold text-white/90 sm:text-base">{name}</h3>
              <p className="mt-3 font-display text-2xl font-bold text-[#FFB347] sm:text-3xl">
                {price}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted sm:text-base">
          {t('cooperation.pricing.desc')}
        </p>
      </div>
    </section>
  )
}
