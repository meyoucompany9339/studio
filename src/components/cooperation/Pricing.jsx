import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

const planKeys = ['visitka', 'corporate', 'shop', 'saas']

function PricingCard({ name, price, popular, popularLabel, compact = false }) {
  return (
    <article
      className={`relative flex shrink-0 flex-col items-center justify-center rounded-2xl p-6 text-center transition hover:-translate-y-0.5 sm:p-7 ${
        compact
          ? `min-h-[132px] w-[min(72vw,260px)] snap-center rounded-xl px-4 pb-4 ${popular ? 'pt-6' : 'pt-4'}`
          : 'md:min-h-0'
      } ${
        popular
          ? 'glass-strong gradient-border ring-1 ring-[#FF8C00]/25'
          : 'glass border border-white/[0.06]'
      }`}
    >
      {popular && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFB347] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black ${
            compact ? '-top-2.5 px-2.5 text-[9px]' : ''
          }`}
        >
          {popularLabel}
        </span>
      )}
      <h3
        className={`font-semibold leading-snug text-white/90 ${
          compact ? 'text-[13px]' : 'text-sm sm:text-base'
        }`}
      >
        {name}
      </h3>
      <p
        className={`font-display font-bold leading-tight text-[#FFB347] ${
          compact ? 'mt-1.5 text-xl' : 'mt-3 text-2xl sm:text-3xl'
        }`}
      >
        {price}
      </p>
    </article>
  )
}

export default function Pricing() {
  const { t } = useTranslation()

  const plans = planKeys.map((key) => ({
    key,
    name: t(`cooperation.pricing.plans.${key}`),
    nameShort: t(`cooperation.pricing.plansShort.${key}`),
    price:
      key === 'saas'
        ? `${t('cooperation.pricing.from')} ${t(`cooperation.pricing.prices.${key}`)}${t('cooperation.pricing.perMonth')}`
        : `${t('cooperation.pricing.from')} ${t(`cooperation.pricing.prices.${key}`)}`,
    popular: key === 'corporate',
  }))

  const popularLabel = t('cooperation.pricing.popular')

  return (
    <section className="section-py bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('cooperation.pricing.badge')}
          title={t('cooperation.pricing.title')}
          description={t('cooperation.pricing.desc')}
        />

        {/* Мобільна — горизонтальний скрол */}
        <div className="pricing-scroll -mx-4 flex gap-3 overflow-x-auto px-4 pb-1 pt-3.5 snap-x snap-mandatory md:hidden">
          {plans.map(({ key, nameShort, price, popular }) => (
            <PricingCard
              key={key}
              name={nameShort}
              price={price}
              popular={popular}
              popularLabel={popularLabel}
              compact
            />
          ))}
        </div>

        {/* Десктоп — сітка */}
        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {plans.map(({ key, name, price, popular }) => (
            <PricingCard
              key={key}
              name={name}
              price={price}
              popular={popular}
              popularLabel={popularLabel}
            />
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted sm:text-base">
          {t('cooperation.pricing.desc')}
        </p>
      </div>
    </section>
  )
}
