import { Handshake, Scale, Sparkles, Headphones } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

const icons = [Handshake, Scale, Sparkles, Headphones]

export default function TrustStats() {
  const { t } = useTranslation()
  const items = t('trust.items')

  return (
    <section className="section-py border-y border-white/[0.06] bg-surface-elevated max-md:!pt-6 max-md:!pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('trust.badge')}
          title={t('trust.title')}
          description={t('trust.desc')}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {items.map(({ title, desc }, i) => {
            const Icon = icons[i] ?? Handshake
            return (
              <article
                key={title}
                className="glass-strong gradient-border group rounded-2xl p-5 transition hover:-translate-y-0.5 sm:p-6"
              >
                <Icon
                  className="mb-4 h-7 w-7 text-[#FF8C00] transition group-hover:scale-105"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-lg font-bold text-white sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
