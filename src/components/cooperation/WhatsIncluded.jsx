import {
  Layout,
  MonitorSmartphone,
  Search,
  FlaskConical,
  Rocket,
  ShieldCheck,
  UserRound,
  ShoppingCart,
  CreditCard,
  PanelTop,
  Network,
  Code2,
  Languages,
  Puzzle,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

const baseIcons = [Layout, MonitorSmartphone, Search, FlaskConical, Rocket, ShieldCheck]
const extraIcons = [UserRound, ShoppingCart, CreditCard, PanelTop, Network, Code2, Languages, Puzzle]

export default function WhatsIncluded() {
  const { t } = useTranslation()
  const base = t('cooperation.included.base')
  const extra = t('cooperation.included.extra')

  return (
    <section className="section-py relative bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('cooperation.included.badge')}
          title={t('cooperation.included.title')}
          description={t('cooperation.included.desc')}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#FFB347]">
              {t('cooperation.included.baseTitle')}
            </h3>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {base.map((label, i) => {
                const Icon = baseIcons[i] ?? Layout
                return (
                  <div
                    key={label}
                    className="glass flex items-center gap-3 rounded-xl border border-white/[0.06] px-3 py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF8C00]/12">
                      <Icon className="h-4 w-4 text-[#FF8C00]" />
                    </span>
                    <span className="text-sm font-medium text-white">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              {t('cooperation.included.extraTitle')}
            </h3>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {extra.map((label, i) => {
                const Icon = extraIcons[i] ?? Puzzle
                return (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                      <Icon className="h-4 w-4 text-white/50" />
                    </span>
                    <span className="text-sm font-medium text-white/75">{label}</span>
                  </div>
                )
              })}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
              {t('cooperation.included.extraNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
