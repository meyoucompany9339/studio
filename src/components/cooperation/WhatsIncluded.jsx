import {
  BarChart3,
  Globe,
  Layout,
  Lock,
  Mail,
  MonitorSmartphone,
  Search,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from '../../i18n/LanguageProvider'

const icons = [Layout, MonitorSmartphone, Search, Lock, Mail, Globe, BarChart3]
const mobileEmojis = ['🎨', '📱', '🔍', '🔒', '📧', '🌐', '📊']

export default function WhatsIncluded() {
  const { t } = useTranslation()
  const items = t('cooperation.included.items')
  const itemsShort = t('cooperation.included.itemsShort')

  return (
    <section className="section-py relative bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('cooperation.included.badge')}
          title={t('cooperation.included.title')}
          description={t('cooperation.included.desc')}
        />

        {/* Мобільна — сітка 2 колонки з емодзі */}
        <div className="grid grid-cols-2 gap-2.5 md:hidden">
          {itemsShort.map((label, i) => (
            <div
              key={label}
              className="glass flex min-h-[48px] items-center gap-2 rounded-xl border border-white/[0.06] px-3 py-2.5 transition hover:border-[#FF8C00]/25"
            >
              <span className="text-base leading-none" aria-hidden>
                {mobileEmojis[i]}
              </span>
              <span className="text-sm font-medium leading-snug text-white">{label}</span>
            </div>
          ))}
        </div>

        {/* Десктоп — картки з іконками */}
        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((text, i) => {
            const Icon = icons[i]
            return (
              <div
                key={text}
                className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:border-[#FF8C00]/25"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF8C00]/10">
                  <Icon className="h-5 w-5 text-accent-light" />
                </span>
                <span className="font-medium text-white">{text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
