import {
  CreditCard,
  Palette,
  Smartphone,
  Search,
  Headphones,
  Server,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

const icons = [CreditCard, Palette, Smartphone, Search, Headphones, Server]

export default function Guarantees() {
  const { t } = useTranslation()
  const items = t('guarantees.items')

  return (
    <section className="section-py">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('guarantees.badge')}
          title={t('guarantees.title')}
          description={t('guarantees.desc')}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map(({ title, desc }, i) => {
            const Icon = icons[i]
            return (
              <article
                key={title}
                className="glass-strong flex gap-4 rounded-2xl border border-white/[0.06] p-5 transition hover:border-[#FF8C00]/25 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF8C00]/10 ring-1 ring-[#FF8C00]/20">
                  <Icon className="h-5 w-5 text-[#FF8C00]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{desc}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
