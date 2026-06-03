import {
  Zap,
  Pencil,
  Smartphone,
  Search,
  ShieldCheck,
  Headphones,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

const icons = [Zap, Pencil, Smartphone, Search, ShieldCheck, Headphones]

export default function Benefits() {
  const { t } = useTranslation()
  const benefits = t('benefits.items')

  return (
    <section id="perevahy" className="section-py">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('benefits.badge')}
          title={t('benefits.title')}
          description={t('benefits.desc')}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {benefits.map(({ title, description }, i) => {
            const Icon = icons[i]
            return (
              <article
                key={title}
                className="glass-strong flex flex-col items-center rounded-2xl px-4 py-6 text-center transition hover:border-[#FF8C00]/30 hover:-translate-y-0.5 sm:py-7"
              >
                <Icon className="mb-4 h-8 w-8 text-[#FF8C00]" strokeWidth={1.5} />
                <h3 className="text-sm font-semibold leading-snug text-white">{title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-muted sm:text-xs">
                  {description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
