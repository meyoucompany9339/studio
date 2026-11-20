import {
  Activity,
  Gauge,
  Headphones,
  Lock,
  RefreshCw,
  Save,
  ShieldCheck,
  FilePenLine,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'
import { formatMaintenanceRange } from '../../config/pricing'

const icons = [Headphones, RefreshCw, Save, Activity, ShieldCheck, Lock, Gauge, FilePenLine]

export default function MaintenanceSection() {
  const { t } = useTranslation()
  const items = t('cooperation.maintenance.items')

  return (
    <section className="section-py">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('cooperation.maintenance.badge')}
          title={t('cooperation.maintenance.title')}
          description={t('cooperation.maintenance.desc')}
        />

        <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-[#FF8C00]/25 bg-[#FF8C00]/10 px-5 py-5 text-center sm:px-8 sm:py-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#FFB347]">
            {t('cooperation.maintenance.priceLabel')}
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            <span className="gradient-text">{formatMaintenanceRange()}</span>
            <span className="ms-1 text-lg font-semibold text-white/70 sm:text-xl">
              {t('cooperation.pricing.perMonth')}
            </span>
          </p>
          <p className="mt-2 text-sm text-muted">{t('cooperation.maintenance.priceNote')}</p>
          <p className="mt-4 text-sm font-medium leading-relaxed text-[#FFB347]">
            {t('cooperation.maintenance.giftNote')}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {items.map(({ title, desc }, i) => {
            const Icon = icons[i] ?? Headphones
            return (
              <article
                key={title}
                className="glass rounded-2xl border border-white/[0.06] p-4 transition hover:border-[#FF8C00]/25 sm:p-5"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF8C00]/12">
                  <Icon className="h-5 w-5 text-[#FF8C00]" />
                </span>
                <h3 className="text-sm font-semibold text-white sm:text-base">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">{desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
