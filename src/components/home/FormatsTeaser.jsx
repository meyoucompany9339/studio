import { ArrowRight, Gift, KeyRound, RefreshCw } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { useTranslation } from '../../i18n/LanguageProvider'

export default function FormatsTeaser() {
  const { t } = useTranslation()

  const cards = [
    {
      icon: KeyRound,
      title: t('formatsTeaser.buyout.title'),
      desc: t('formatsTeaser.buyout.desc'),
      accent: true,
    },
    {
      icon: RefreshCw,
      title: t('formatsTeaser.saas.title'),
      desc: t('formatsTeaser.saas.desc'),
      accent: false,
    },
  ]

  return (
    <section id="formats" className="section-py scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('formatsTeaser.badge')}
          title={t('formatsTeaser.title')}
          description={t('formatsTeaser.desc')}
        />

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {cards.map(({ icon: Icon, title, desc, accent }) => (
            <article
              key={title}
              className={`relative rounded-2xl p-5 sm:p-6 ${
                accent
                  ? 'glass-strong gradient-border ring-1 ring-[#FF8C00]/20'
                  : 'glass border border-white/[0.06]'
              }`}
            >
              {accent && (
                <span className="mb-3 inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#FF8C00]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#FFB347]">
                  <Gift className="h-3 w-3 shrink-0" />
                  <span className="min-w-0 leading-snug">{t('cooperation.formats.buyout.gift')}</span>
                </span>
              )}
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF8C00]/15">
                <Icon className="h-5 w-5 text-[#FF8C00]" />
              </div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button to="/spivpratsia">
            {t('formatsTeaser.more')}
            <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
          </Button>
        </div>
      </div>
    </section>
  )
}
