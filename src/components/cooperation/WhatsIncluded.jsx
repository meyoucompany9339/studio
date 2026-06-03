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

export default function WhatsIncluded() {
  const { t } = useTranslation()
  const items = t('cooperation.included.items')

  return (
    <section className="section-py relative bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('cooperation.included.badge')}
          title={t('cooperation.included.title')}
          description={t('cooperation.included.desc')}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
